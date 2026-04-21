#!/usr/bin/env python3
"""
Post-process a locations.json — assign US state to entries missing
addr:state via lat/lng bounding-box lookup. Filters any remaining
unknowns at the end so all entries are routable.

Generic: works on any Empire directory site that uses the same
locations.json schema (driveintonight, allskateparks, rockhoundingfinder).

Usage:
    python3 state_from_coords.py /path/to/repo/src/data/locations.json [item_descriptor]

item_descriptor is the noun used to regenerate descriptions, e.g.:
    "drive-in movie theater", "skate park", "rockhounding spot"

If omitted, the existing description is preserved (state info there
may then be stale; pass the descriptor to refresh).

State bounding boxes are conservative US-Census-derived axis-aligned
rectangles. For points inside multiple bboxes (border areas), the
closest centroid wins — usually correct, occasionally wrong on the
literal state line.
"""
import json
import sys
from pathlib import Path

# (min_lat, min_lng, max_lat, max_lng)
STATE_BBOX = {
    "AL": (30.14, -88.47, 35.01, -84.89),
    "AK": (51.20, -179.15, 71.41, -129.97),
    "AZ": (31.33, -114.82, 37.00, -109.05),
    "AR": (33.00, -94.62, 36.50, -89.64),
    "CA": (32.53, -124.42, 42.01, -114.13),
    "CO": (36.99, -109.06, 41.00, -102.04),
    "CT": (40.95, -73.73, 42.05, -71.79),
    "DE": (38.45, -75.79, 39.84, -75.05),
    "DC": (38.79, -77.12, 38.99, -76.91),
    "FL": (24.52, -87.63, 31.00, -80.03),
    "GA": (30.36, -85.61, 35.00, -80.84),
    "HI": (18.91, -160.55, 22.24, -154.81),
    "ID": (42.00, -117.24, 49.00, -111.04),
    "IL": (36.97, -91.51, 42.51, -87.50),
    "IN": (37.77, -88.10, 41.76, -84.78),
    "IA": (40.38, -96.64, 43.50, -90.14),
    "KS": (36.99, -102.05, 40.00, -94.59),
    "KY": (36.50, -89.57, 39.15, -81.97),
    "LA": (28.93, -94.04, 33.02, -88.82),
    "ME": (43.06, -71.08, 47.46, -66.95),
    "MD": (37.91, -79.49, 39.72, -75.05),
    "MA": (41.24, -73.51, 42.89, -69.93),
    "MI": (41.70, -90.42, 48.31, -82.41),
    "MN": (43.50, -97.24, 49.38, -89.49),
    "MS": (30.18, -91.66, 35.00, -88.10),
    "MO": (35.99, -95.77, 40.61, -89.10),
    "MT": (44.36, -116.05, 49.00, -104.04),
    "NE": (39.99, -104.05, 43.00, -95.31),
    "NV": (35.00, -120.01, 42.00, -114.04),
    "NH": (42.69, -72.56, 45.31, -70.61),
    "NJ": (38.93, -75.56, 41.36, -73.89),
    "NM": (31.33, -109.05, 37.00, -103.00),
    "NY": (40.50, -79.76, 45.02, -71.86),
    "NC": (33.84, -84.32, 36.59, -75.46),
    "ND": (45.94, -104.05, 49.00, -96.55),
    "OH": (38.40, -84.82, 42.00, -80.52),
    "OK": (33.62, -103.00, 37.00, -94.43),
    "OR": (41.99, -124.57, 46.27, -116.46),
    "PA": (39.72, -80.52, 42.27, -74.69),
    "RI": (41.15, -71.86, 42.02, -71.12),
    "SC": (32.03, -83.35, 35.22, -78.54),
    "SD": (42.48, -104.06, 45.95, -96.44),
    "TN": (34.98, -90.31, 36.68, -81.65),
    "TX": (25.84, -106.65, 36.50, -93.51),
    "UT": (37.00, -114.05, 42.00, -109.04),
    "VT": (42.73, -73.43, 45.02, -71.51),
    "VA": (36.54, -83.68, 39.47, -75.24),
    "WA": (45.54, -124.85, 49.00, -116.92),
    "WV": (37.20, -82.64, 40.64, -77.72),
    "WI": (42.49, -92.89, 47.08, -86.81),
    "WY": (40.99, -111.06, 45.01, -104.05),
}

STATE_NAME = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
    "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
    "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii",
    "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine",
    "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota",
    "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska",
    "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico",
    "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
    "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island",
    "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas",
    "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington",
    "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming",
}


def slugify(text):
    import re
    s = text.lower()
    s = re.sub(r"['\u2019]", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    return s


def state_from_coords(lat, lng):
    candidates = []
    for abbr, (mn_lat, mn_lng, mx_lat, mx_lng) in STATE_BBOX.items():
        if mn_lat <= lat <= mx_lat and mn_lng <= lng <= mx_lng:
            candidates.append(abbr)
    if not candidates:
        return ""
    if len(candidates) == 1:
        return STATE_NAME[candidates[0]]

    def centroid_dist(a):
        bb = STATE_BBOX[a]
        cy = (bb[0] + bb[2]) / 2
        cx = (bb[1] + bb[3]) / 2
        return (cy - lat) ** 2 + (cx - lng) ** 2

    closest = min(candidates, key=centroid_dist)
    return STATE_NAME[closest]


def main():
    if len(sys.argv) < 2:
        print("Usage: state_from_coords.py <locations.json> [item_descriptor]", file=sys.stderr)
        return 1
    path = Path(sys.argv[1])
    descriptor = sys.argv[2] if len(sys.argv) > 2 else None

    data = json.loads(path.read_text(encoding="utf-8"))
    total = len(data)
    fixed = 0

    for entry in data:
        if entry.get("state"):
            continue
        lat = entry.get("lat")
        lng = entry.get("lng")
        if lat is None or lng is None:
            continue
        st = state_from_coords(lat, lng)
        if st:
            entry["state"] = st
            entry["stateSlug"] = slugify(st)
            fixed += 1
            if descriptor:
                city = entry.get("city", "")
                descr_city = f"{city}, " if city else ""
                entry["description"] = f"{entry['name']} is a {descriptor} in {descr_city}{st}."

    filtered = [x for x in data if x.get("state")]
    dropped = total - len(filtered)

    counts = {}
    for entry in filtered:
        s = entry["state"]
        counts[s] = counts.get(s, 0) + 1

    print(f"Total: {total}  recovered via bbox: {fixed}  final after filter: {len(filtered)}  dropped: {dropped}")
    print("\nState breakdown after recovery:")
    for state in sorted(counts):
        print(f"  {state:<25} {counts[state]:>4}")

    filtered.sort(key=lambda x: (x["state"], x["name"]))
    path.write_text(json.dumps(filtered, indent=2) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main())
