export const metadata = {
  title: "About Rockhounding Finder",
  description:
    "Learn about Rockhounding Finder - your guide to rockhounding sites, gem mining locations, and mineral collecting areas across the USA.",
};

export default function AboutPage() {
  const brandColor = "#3d2b1f";
  const accentColor = "#c47b00";

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 2rem",
      }}
    >
      <h1 style={{ color: brandColor, fontSize: "2.5rem" }}>
        About Rockhounding Finder
      </h1>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: brandColor, fontSize: "1.8rem" }}>Our Mission</h2>
        <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
          Rockhounding Finder is dedicated to helping enthusiasts discover the
          best rockhounding sites, gem mining locations, and mineral collecting
          areas across the United States. Whether you're a seasoned collector or
          a curious beginner, our comprehensive directory makes it easy to find
          your next adventure and uncover Earth's natural treasures.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: brandColor, fontSize: "1.8rem" }}>
          What We Do
        </h2>
        <p style={{ lineHeight: "1.8" }}>
          We maintain an up-to-date directory of rockhounding sites across the
          country, including:
        </p>
        <ul style={{ lineHeight: "2", fontSize: "1rem" }}>
          <li>
            <strong>Public Lands:</strong> BLM and Forest Service areas where
            rockhounding is permitted
          </li>
          <li>
            <strong>State Parks:</strong> Official rockhounding areas with
            managed access
          </li>
          <li>
            <strong>Fee-Dig Mines:</strong> Commercial operations offering guided
            digging experiences
          </li>
          <li>
            <strong>Legacy Records:</strong> Mineral occurrences and historical
            locality data awaiting current ownership and access review
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: brandColor, fontSize: "1.8rem" }}>
          Data Sources
        </h2>
        <p style={{ lineHeight: "1.8" }}>
          The legacy directory does not yet store a structured source trail for each record. Destination pages remain out of search while we add:
        </p>
        <ul style={{ lineHeight: "2" }}>
          <li>
            The current land manager or site operator
          </li>
          <li>
            Current ownership and active-claim checks
          </li>
          <li>
            A primary-source collecting rule or permit page
          </li>
          <li>
            A dated access and closure check
          </li>
          <li>
            Source links that readers can inspect directly
          </li>
          <li>
            A clear distinction between a mineral record and a public collecting site
          </li>
        </ul>
      </section>

      <section
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          backgroundColor: "#f9f9f9",
          borderLeft: `4px solid ${accentColor}`,
          borderRadius: "4px",
        }}
      >
        <h2 style={{ color: brandColor, fontSize: "1.6rem", marginTop: 0 }}>
          Important Disclaimer
        </h2>
        <p style={{ lineHeight: "1.8", margin: 0 }}>
          While we strive to keep our information current and accurate, regulations,
          access policies, and operating conditions can change frequently. We
          strongly recommend contacting the site operator or managing agency
          directly before visiting any location to confirm:
        </p>
        <ul style={{ lineHeight: "2", marginBottom: 0 }}>
          <li>Current operating hours and seasonal closures</li>
          <li>Any permit or license requirements</li>
          <li>Entry fees or pricing changes</li>
          <li>Safety restrictions or hazard warnings</li>
          <li>Current access conditions</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: brandColor, fontSize: "1.8rem" }}>
          Why Rockhounding Matters
        </h2>
        <p style={{ lineHeight: "1.8" }}>
          Rockhounding is more than just a hobby ,  it's a way to connect with
          Earth's geological history, develop a deeper appreciation for minerals
          and gems, and enjoy outdoor exploration. Whether you're collecting for
          display, learning about geology, or simply seeking adventure, rockhounding
          offers something for everyone.
        </p>
        <p style={{ lineHeight: "1.8" }}>
          Responsible rockhounding also supports conservation efforts. By choosing
          sustainable collecting sites and following Leave No Trace principles,
          rockhounders help preserve natural areas for future generations.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: brandColor, fontSize: "1.8rem" }}>
          Our Commitment
        </h2>
        <p style={{ lineHeight: "1.8" }}>
          We're committed to providing accurate, helpful information that enables
          rockhounders to discover amazing sites and have safe, responsible
          experiences. We continually update our directory, add new locations,
          and improve our resources based on user feedback and community input.
        </p>
      </section>

      <section style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #ddd" }}>
        <h2 style={{ color: brandColor, fontSize: "1.6rem" }}>Contact Us</h2>
        <p style={{ lineHeight: "1.8" }}>
          Have questions, suggestions, or know of a rockhounding site we should
          include? We'd love to hear from you!
        </p>
        <p>
          <strong>Email:</strong> contact@rockhoundingfinder.com
        </p>
        <p style={{ lineHeight: "1.8", color: "#666" }}>
          Thank you for supporting Rockhounding Finder. Happy hunting!
        </p>
      </section>
    </div>
  );
}
