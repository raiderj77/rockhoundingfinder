import locations from "@/data/locations.json";

export const dynamic = "force-static";

export default function Home() {
  const brandColor = "#3d2b1f";
  const accentColor = "#c47b00";
  const featured = locations.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Rockhounding Finder",
            url: "https://rockhoundingfinder.com",
            logo: "https://rockhoundingfinder.com/logo.png",
            description:
              "Directory of rockhounding sites, gem mining locations, and mineral collecting areas across the USA.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://rockhoundingfinder.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://rockhoundingfinder.com/{search_term_string}",
              },
              query_input: "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is rockhounding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rockhounding is the hobby of searching for and collecting rocks, minerals, gems, and crystals from natural or designated sites. It combines geology, outdoor exploration, and collecting.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a permit to go rockhounding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on the location. Public lands often don't require permits, while private mines may charge fees. Always check with the site before visiting.",
                },
              },
              {
                "@type": "Question",
                name: "What equipment do I need to start rockhounding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Basic equipment includes a rock hammer, chisel, bucket, gloves, and eye protection. A loupe for examining specimens is helpful but optional for beginners.",
                },
              },
              {
                "@type": "Question",
                name: "What are the most common gems found rockhounding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Popular finds include agates, garnets, sapphires, opals, turquoise, amethyst, and jade. Different regions produce different gemstones.",
                },
              },
              {
                "@type": "Question",
                name: "Is rockhounding allowed on public lands?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many public lands administered by BLM and Forest Service allow rockhounding. Always verify regulations and obtain any required permits.",
                },
              },
            ],
          }),
        }}
      />

      <section
        style={{
          backgroundImage: "linear-gradient(135deg, #3d2b1f 0%, #5d4b3f 100%)",
          color: "white",
          padding: "6rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3.5rem", margin: "0 0 1rem 0" }}>
            Find Rockhounding Sites Near You
          </h1>
          <p style={{ fontSize: "1.3rem", margin: 0, lineHeight: "1.6" }}>
            Discover gem mining locations, mineral collecting sites, and
            rockhounding areas across the United States
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
        <h2 style={{ color: brandColor, textAlign: "center", fontSize: "2rem" }}>
          Featured Rockhounding Sites
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {featured.map((location) => (
            <a
              key={location.slug}
              href={`/${location.stateSlug}/${location.slug}`}
              style={{
                padding: "1.5rem",
                border: `2px solid ${accentColor}`,
                borderRadius: "8px",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s",
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
                {location.city}, {location.state}
              </p>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {location.description.substring(0, 120)}...
              </p>
              <div style={{ marginTop: "1rem" }}>
                {location.amenities.slice(0, 3).map((amenity, idx) => (
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
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "4rem auto",
          padding: "0 2rem",
        }}
      >
        <h2
          style={{
            color: brandColor,
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          What is Rockhounding?
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          Rockhounding is the exciting hobby of searching for and collecting
          rocks, minerals, gemstones, and crystals from nature. Whether you're a
          seasoned collector or just getting started, rockhounding offers
          adventure, discovery, and the chance to connect with the earth's
          natural geology. From sparkling quartz crystals to vibrant gemstones,
          each site offers unique treasures waiting to be found.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          This hobby combines outdoor exploration with the thrill of discovery.
          Rockhounders travel to special sites where conditions are favorable
          for finding valuable or beautiful specimens. Whether it's following a
          river to look for agates or visiting a fee-dig mine for sapphires,
          rockhounding creates lifelong memories and spectacular collections.
        </p>

        <h2
          style={{
            color: brandColor,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            marginTop: "2rem",
          }}
        >
          Types of Rockhounding Sites
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          Rockhounding sites come in several varieties. Public lands managed by
          the Bureau of Land Management (BLM) and U.S. Forest Service often
          allow free rockhounding in designated areas. These sites provide access
          to natural geology and are perfect for finding agate, jasper, and other
          common specimens. State parks sometimes offer rockhounding areas where
          visitors can collect within specified zones. Fee-dig mines, operated
          privately, charge visitors to search curated gravel or soil where gems
          and minerals have been concentrated. These commercial operations are
          excellent for beginners and families, offering a higher likelihood of
          success.
        </p>

        <h2
          style={{
            color: brandColor,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            marginTop: "2rem",
          }}
        >
          Popular Gemstones and Minerals by Region
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          Different regions of the United States produce distinct gemstones and
          minerals. Montana is famous for sapphires, while Idaho produces
          exceptional garnets. Oregon's high desert is known for beautiful
          sunstones, and California offers jade along coastal areas. Arizona is
          legendary for turquoise, particularly the distinctive Sleeping Beauty
          turquoise. Wyoming fields are rich with colorful agates, Nevada
          produces world-class opals, and Texas has abundant petrified wood.
          Michigan's beaches yield Petoskey stones (fossilized coral), and North
          Carolina is one of the few places in the US where emeralds can be
          found.
        </p>

        <h2
          style={{
            color: brandColor,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            marginTop: "2rem",
          }}
        >
          Essential Rockhounding Equipment
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          Starting with the right tools makes rockhounding more enjoyable and
          productive. A rock hammer is essential for breaking open specimens and
          removing rocks from exposed surfaces. A chisel works alongside the
          hammer for precise breaks. Wear sturdy gloves to protect your hands
          from sharp edges and a comfortable hat and sunscreen for outdoor
          protection. Safety glasses or eye protection prevent rock chips from
          hitting your eyes. A bucket collects your finds, and a loupe magnifier
          helps examine specimens for quality and detail. Many sites offer tool
          rental for beginners.
        </p>

        <h2
          style={{
            color: brandColor,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            marginTop: "2rem",
          }}
        >
          Leave No Trace and Regulations
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          Responsible rockhounding protects natural areas for future generations.
          Follow Leave No Trace principles: take only what you need, fill any
          holes you dig, and remove any trash you see. Respect posted boundaries
          and protected areas. Many sites prohibit collecting from certain
          formations or restrict collection to surface finds. Regulations vary by
          location, so always contact the managing agency or site operator before
          visiting. Some areas require permits, while others are completely free.
          Understanding local rules ensures you can rockhound legally and
          ethically.
        </p>

        <h2
          style={{
            color: brandColor,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            marginTop: "2rem",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: accentColor, fontSize: "1.3rem" }}>
            Do I need experience to start rockhounding?
          </h3>
          <p style={{ lineHeight: "1.8" }}>
            Not at all. Rockhounding welcomes beginners. Fee-dig mines are
            perfect for starting out, with staff available to help identify finds
            and explain techniques. Online guides and gemstone identification
            books help you learn as you go.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: accentColor, fontSize: "1.3rem" }}>
            What's the best time of year to go rockhounding?
          </h3>
          <p style={{ lineHeight: "1.8" }}>
            Generally, spring through fall offers the best weather for outdoor
            rockhounding. However, some locations have seasonal closures or
            specific open seasons. Check ahead with the site you plan to visit.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: accentColor, fontSize: "1.3rem" }}>
            Can families with kids go rockhounding?
          </h3>
          <p style={{ lineHeight: "1.8" }}>
            Absolutely. Rockhounding is family-friendly, especially at fee-dig
            sites. Kids love the outdoor adventure and excitement of discovery.
            Always supervise children and ensure they wear appropriate safety
            gear.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: accentColor, fontSize: "1.3rem" }}>
            How much can I expect to find?
          </h3>
          <p style={{ lineHeight: "1.8" }}>
            Results vary by location and luck. Fee-dig mines guarantee finds,
            while public lands are less predictable. Experienced rockhounders
            know where and how to look. Even a modest collection of beautiful
            specimens makes for great memories.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: accentColor, fontSize: "1.3rem" }}>
            Are there dangerous elements to rockhounding?
          </h3>
          <p style={{ lineHeight: "1.8" }}>
            Rockhounding has minimal risks when done safely. Wear safety glasses,
            gloves, and appropriate footwear. Be aware of wildlife, weather
            changes, and unstable terrain. Always tell someone where you're going
            and bring plenty of water.
          </p>
        </div>
      </section>
    </>
  );
}
