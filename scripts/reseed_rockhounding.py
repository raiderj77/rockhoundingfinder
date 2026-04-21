#!/usr/bin/env python3
"""
Reseed rockhoundingfinder.com from OpenStreetMap Overpass API.

Pulls publicly-accessible mines, historic mines, mineshafts, and
geological sites — these correlate well with rockhounding/mineral
collecting destinations. Replaces src/data/locations.json — original
was bloated with industrial plants like 'Mobile Ceiling Plant'
(an actual ceiling-tile factory) labeled as rockhounding spots.

Source: 2026-04-19 directory rationalization audit. WS4 D2 ruling: re-seed.

Coverage caveat: OSM coverage of rockhounding-relevant sites is much
sparser than skate parks or drive-ins. The authoritative US source is
BLM rockhounding areas plus state geological surveys, which are not
easily API-queryable. Expect 200-500 entries from OSM. Document as v1
baseline; v2 candidate is a manual curation pass against BLM rockhounding
program data and state mining/geology resources.

IMPORTANT for users: rockhounding requires verifying current public-access
status and any permit requirements before visiting. Many historic/abandoned
mines are private property or have safety hazards. The site description
should make this disclaimer prominent — that work is separate from this
data refresh.
"""
import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

OVERPASS_URL = "https://overpass-api.de/api/interpreter"

QUERY = """
[out:json][timeout:180];
area["ISO3166-1"="US"][admin_level=2]->.us;
(
  node["tourism"="mine"](area.us);
  way["tourism"="mine"](area.us);
  relation["tourism"="mine"](area.us);
  node["historic"="mine"](area.us);
  way["historic"="mine"](area.us);
  relation["historic"="mine"](area.us);
  node["tourism"="geological_site"](area.us);
  way["tourism"="geological_site"](area.us);
  node["man_made"="mineshaft"](area.us);
  way["man_made"="mineshaft"](area.us);
  node["historic"="mine_shaft"](area.us);
);
out center tags;
"""

STATE_ABBR_TO_NAME = {
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
    s = text.lower()
    s = re.sub(r"['\u2019]", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    return s


def query_overpass():
    print("Querying OpenStreetMap Overpass API for US mines and geological sites...")
    payload = urllib.parse.urlencode({"data": QUERY}).encode()
    req = urllib.request.Request(
        OVERPASS_URL,
        data=payload,
        headers={"User-Agent": "rockhoundingfinder-reseed/1.0 (raiderj77)"},
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        return json.load(resp)


def get_coords(element):
    if element["type"] == "node":
        return element.get("lat"), element.get("lon")
    center = element.get("center")
    if center:
        return center.get("lat"), center.get("lon")
    return None, None


def normalize_state(tags):
    raw = tags.get("addr:state") or tags.get("is_in:state") or ""
    raw = raw.strip()
    if not raw:
        return ""
    if raw in STATE_ABBR_TO_NAME:
        return STATE_ABBR_TO_NAME[raw]
    if raw.upper() in STATE_ABBR_TO_NAME:
        return STATE_ABBR_TO_NAME[raw.upper()]
    if raw in STATE_ABBR_TO_NAME.values():
        return raw
    return raw


def categorize(tags):
    """Determine site type and amenities from OSM tags."""
    if tags.get("tourism") == "mine":
        return "mine open to the public", ["Public access", "Mine tour"]
    if tags.get("tourism") == "geological_site":
        return "geological site", ["Public access", "Surface collecting"]
    if tags.get("historic") == "mine":
        return "historic mine", ["Historical site"]
    if tags.get("man_made") == "mineshaft" or tags.get("historic") == "mine_shaft":
        return "abandoned mineshaft", ["Caution: abandoned mine — verify access"]
    return "rockhounding location", ["Public access"]


def transform(osm_data):
    elements = osm_data.get("elements", [])
    print(f"OSM returned {len(elements)} elements")

    locations = []
    seen_slugs = set()
    seen_coords = set()
    skipped_no_name = 0
    skipped_no_coords = 0
    skipped_dup = 0

    for el in elements:
        tags = el.get("tags", {})
        name = (tags.get("name") or "").strip()
        if not name:
            skipped_no_name += 1
            continue
        lat, lng = get_coords(el)
        if lat is None or lng is None:
            skipped_no_coords += 1
            continue
        coord_key = (round(lat, 4), round(lng, 4))
        if coord_key in seen_coords:
            skipped_dup += 1
            continue
        seen_coords.add(coord_key)

        state = normalize_state(tags)
        city = (tags.get("addr:city") or "").strip()
        slug = slugify(name)
        if slug in seen_slugs:
            slug = f"{slug}-{el.get('id', 'x')}"
        if slug in seen_slugs:
            skipped_dup += 1
            continue
        seen_slugs.add(slug)

        site_type, amenities = categorize(tags)
        descr_state = state if state else "the United States"
        descr_city = f"{city}, " if city else ""
        location = {
            "name": name,
            "slug": slug,
            "state": state,
            "stateSlug": slugify(state) if state else "",
            "city": city,
            "lat": round(lat, 6),
            "lng": round(lng, 6),
            "description": f"{name} is a {site_type} in {descr_city}{descr_state}.",
            "amenities": amenities,
        }
        locations.append(location)

    print(f"  kept: {len(locations)}")
    print(f"  skipped (no name): {skipped_no_name}")
    print(f"  skipped (no coords): {skipped_no_coords}")
    print(f"  skipped (dedup): {skipped_dup}")

    locations.sort(key=lambda x: (x["state"] or "zz", x["name"]))
    return locations


def state_breakdown(locations):
    counts = {}
    for loc in locations:
        s = loc["state"] or "(unknown)"
        counts[s] = counts.get(s, 0) + 1
    print("\nState breakdown:")
    for state in sorted(counts.keys()):
        print(f"  {state:<25} {counts[state]:>4}")
    print(f"\nTotal: {len(locations)} sites across {len(counts)} state buckets")


def main():
    repo = Path("/home/rex/rockhoundingfinder")
    if not repo.is_dir():
        print(f"ERROR: repo not found at {repo}", file=sys.stderr)
        return 1

    out_path = repo / "src" / "data" / "locations.json"

    osm = query_overpass()
    locations = transform(osm)
    state_breakdown(locations)

    print(f"\nWriting {len(locations)} locations to {out_path}")
    out_path.write_text(json.dumps(locations, indent=2) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main())
