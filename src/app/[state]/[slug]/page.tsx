import locations from "@/data/locations.json";

export const revalidate = 86400;

export async function generateStaticParams() {
  return locations.map((location) => ({
    state: location.stateSlug,
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { state, slug } = await params;
  const location = locations.find(
    (loc) => loc.stateSlug === state && loc.slug === slug
  );

  if (!location) {
    return {
      title: "Not Found",
      description: "Rockhounding site not found.",
    };
  }

  return {
    title: `${location.name} - Rockhounding Site in ${location.state}`,
    description: `${location.description} Located in ${location.city}, ${location.state}. Find minerals, amenities, and details about this rockhounding location.`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { state, slug } = await params;
  const location = locations.find(
    (loc) => loc.stateSlug === state && loc.slug === slug
  );

  if (!location) {
    return (
      <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h1>Not Found</h1>
        <p>The rockhounding site you're looking for doesn't exist.</p>
        <a href="/">Return Home</a>
      </div>
    );
  }

  const brandColor = "#3d2b1f";
  const accentColor = "#c47b00";
  const accessType = location.amenities.find((a) =>
    a.includes("Fee") || a.includes("Public")
  );
  const minerals = location.amenities.find((a) => a.includes("Minerals"));
  const facilities = location.amenities.filter((a) => a.includes(":"));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: location.name,
            description: location.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: location.city,
              addressRegion: location.state,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: location.lat,
              longitude: location.lng,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://rockhoundingfinder.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: location.state,
                item: `https://rockhoundingfinder.com/${location.stateSlug}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: location.name,
                item: `https://rockhoundingfinder.com/${location.stateSlug}/${location.slug}`,
              },
            ],
          }),
        }}
      />

      <section
        style={{
          backgroundImage: "linear-gradient(135deg, #3d2b1f 0%, #5d4b3f 100%)",
          color: "white",
          padding: "4rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <nav
            style={{
              fontSize: "0.95rem",
              marginBottom: "1rem",
              color: "#ddd",
            }}
          >
            <a
              href="/"
              style={{
                color: accentColor,
                textDecoration: "none",
                marginRight: "0.5rem",
              }}
            >
              Home
            </a>
            {" / "}
            <a
              href={`/${location.stateSlug}`}
              style={{
                color: accentColor,
                textDecoration: "none",
                margin: "0 0.5rem",
              }}
            >
              {location.state}
            </a>
            {" / "}
            <span style={{ marginLeft: "0.5rem" }}>{location.name}</span>
          </nav>
          <h1 style={{ fontSize: "2.8rem", margin: "1rem 0 0.5rem 0" }}>
            {location.name}
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              margin: 0,
              color: "#ddd",
            }}
          >
            {location.city}, {location.state}
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1000px",
          margin: "3rem auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <h2 style={{ color: brandColor, fontSize: "1.8rem" }}>About</h2>
            <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
              {location.description}
            </p>

            <h2 style={{ color: brandColor, fontSize: "1.8rem", marginTop: "2rem" }}>
              Location Details
            </h2>
            <p>
              <strong>Coordinates:</strong> {location.lat.toFixed(4)},{" "}
              {location.lng.toFixed(4)}
            </p>
            <p>
              <strong>City:</strong> {location.city}
            </p>
            <p>
              <strong>State:</strong> {location.state}
            </p>

            {minerals && (
              <>
                <h2
                  style={{ color: brandColor, fontSize: "1.8rem", marginTop: "2rem" }}
                >
                  Minerals & Gems Found
                </h2>
                <p style={{ lineHeight: "1.8" }}>
                  {minerals.replace("Minerals: ", "")}
                </p>
              </>
            )}

            {accessType && (
              <>
                <h2
                  style={{ color: brandColor, fontSize: "1.8rem", marginTop: "2rem" }}
                >
                  Access & Fees
                </h2>
                <p style={{ lineHeight: "1.8" }}>{accessType}</p>
              </>
            )}

            <h2
              style={{ color: brandColor, fontSize: "1.8rem", marginTop: "2rem" }}
            >
              Visitor Tips
            </h2>
            <ul style={{ lineHeight: "2", marginBottom: 0 }}>
              <li>
                Always check current conditions and closures before visiting
              </li>
              <li>Bring plenty of water and sun protection</li>
              <li>Wear sturdy shoes and appropriate safety gear</li>
              <li>Respect Leave No Trace principles</li>
              <li>
                Contact the site operator or managing agency for current
                regulations
              </li>
            </ul>
          </div>

          <aside
            style={{
              backgroundColor: "#f9f9f9",
              padding: "1.5rem",
              borderRadius: "8px",
              border: `2px solid ${accentColor}`,
              height: "fit-content",
            }}
          >
            <h3
              style={{ color: accentColor, marginTop: 0, fontSize: "1.3rem" }}
            >
              Amenities & Info
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {location.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.8rem",
                    backgroundColor: "white",
                    borderLeft: `4px solid ${accentColor}`,
                    borderRadius: "4px",
                  }}
                >
                  <strong style={{ color: brandColor }}>{amenity}</strong>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: `1px solid #ddd` }}>
              <h4 style={{ color: brandColor, marginTop: 0 }}>Before You Go</h4>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.2rem",
                  fontSize: "0.95rem",
                  lineHeight: "1.8",
                }}
              >
                <li>Check hours and seasonal closures</li>
                <li>Verify any permit requirements</li>
                <li>Read safety and access rules</li>
                <li>Bring appropriate tools and protection</li>
              </ul>
            </div>
          </aside>
        </div>

        <section
          style={{
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "8px",
            marginTop: "3rem",
          }}
        >
          <h2 style={{ color: brandColor, fontSize: "1.6rem", marginTop: 0 }}>
            Planning Your Visit
          </h2>
          <p style={{ lineHeight: "1.8" }}>
            Before heading to {location.name}, we recommend contacting the site
            operator or the managing agency (BLM, Forest Service, or state park
            authority) to confirm current conditions, access rules, and any
            permit requirements. Rockhounding regulations can change seasonally
            or due to environmental concerns, so it's important to verify the
            information before your trip.
          </p>
          <p style={{ lineHeight: "1.8" }}>
            Pack essential supplies including water, first aid, sunscreen, and
            appropriate tools. Bring your camera to document your finds, and
            consider keeping a rockhounding journal to record your discoveries,
            locations, and techniques. Always practice responsible collection and
            respect the natural environment for future rockhounders.
          </p>
        </section>
      </section>
    </>
  );
}
