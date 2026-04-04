import locations from "@/data/locations.json";

export const revalidate = 86400;

const states = Array.from(
  new Set(locations.map((loc) => loc.stateSlug))
);

export async function generateStaticParams() {
  return states.map((stateSlug) => ({
    state: stateSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const stateName = locations
    .find((loc) => loc.stateSlug === state)
    ?.state || "State";

  return {
    title: `Rockhounding Sites in ${stateName} | Rockhounding Finder`,
    description: `Find rockhounding sites, gem mining locations, and mineral collecting areas in ${stateName}. Discover public lands, fee-dig mines, and more.`,
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const stateLocations = locations.filter((loc) => loc.stateSlug === state);
  const stateName =
    stateLocations.length > 0 ? stateLocations[0].state : "Unknown";

  const brandColor = "#3d2b1f";
  const accentColor = "#c47b00";

  return (
    <>
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
                name: stateName,
                item: `https://rockhoundingfinder.com/${state}`,
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
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            <span style={{ marginLeft: "0.5rem" }}>{stateName}</span>
          </nav>
          <h1 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0" }}>
            Rockhounding Sites in {stateName}
          </h1>
          <p style={{ fontSize: "1.1rem", margin: 0, lineHeight: "1.6" }}>
            {stateLocations.length} location
            {stateLocations.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "3rem auto",
          padding: "0 2rem",
        }}
      >
        {stateLocations.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <p style={{ fontSize: "1.1rem", color: "#666" }}>
              No rockhounding sites found for {stateName} yet. Check back soon!
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {stateLocations.map((location) => (
              <a
                key={location.id}
                href={`/${location.stateSlug}/${location.slug}`}
                style={{
                  padding: "1.5rem",
                  border: `2px solid ${accentColor}`,
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 20px rgba(196, 123, 0, 0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "none";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                <h3 style={{ color: accentColor, margin: "0 0 0.5rem 0" }}>
                  {location.name}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    margin: "0 0 1rem 0",
                  }}
                >
                  {location.city}
                </p>
                <p style={{ margin: 0, lineHeight: "1.5", minHeight: "60px" }}>
                  {location.description}
                </p>
                <div style={{ marginTop: "1rem" }}>
                  {location.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: "inline-block",
                        backgroundColor: "#f5f5f5",
                        color: brandColor,
                        padding: "0.3rem 0.8rem",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
