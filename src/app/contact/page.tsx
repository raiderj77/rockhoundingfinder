export const metadata = {
  title: "Contact Rockhounding Finder",
  description: "Get in touch with Rockhounding Finder for questions, suggestions, or site submissions.",
};

export default function ContactPage() {
  const brandColor = "#3d2b1f";
  const accentColor = "#c47b00";

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "3rem 2rem",
      }}
    >
      <h1 style={{ color: brandColor, fontSize: "2.5rem" }}>Contact Us</h1>

      <section style={{ marginTop: "2rem" }}>
        <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
          Have questions about rockhounding sites? Found an error in our
          directory? Want to suggest a location? We'd love to hear from you!
        </p>
      </section>

      <section
        style={{
          marginTop: "2rem",
          padding: "2rem",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          border: `2px solid ${accentColor}`,
        }}
      >
        <h2 style={{ color: brandColor, fontSize: "1.5rem", marginTop: 0 }}>
          Get in Touch
        </h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", margin: "1rem 0" }}>
          <strong>Email:</strong>
          <br />
          <a
            href="mailto:contact@rockhoundingfinder.com"
            style={{
              color: accentColor,
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
          >
            contact@rockhoundingfinder.com
          </a>
        </p>

        <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: `1px solid #ddd` }}>
          <h3 style={{ color: brandColor, marginTop: 0 }}>
            What to Include in Your Email
          </h3>
          <ul style={{ lineHeight: "2" }}>
            <li>Your name and email address</li>
            <li>The reason for your message</li>
            <li>
              If suggesting a site: the site name, location, and any relevant
              details
            </li>
            <li>
              If reporting an issue: which site and what information needs updating
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: brandColor, fontSize: "1.5rem" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ color: accentColor }}>
            How can I suggest a rockhounding site?
          </h3>
          <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
            We welcome suggestions for new locations! Please email us with the
            site name, location (city and state), a brief description, and any
            relevant details about minerals found, access type, and amenities.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: accentColor }}>
            How often is the directory updated?
          </h3>
          <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
            We update our directory regularly as we receive new information and
            reports from the rockhounding community. However, we recommend always
            contacting sites directly to confirm current conditions and hours.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: accentColor }}>
            I found incorrect information. How can I report it?
          </h3>
          <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
            Please email us with specific details about what's inaccurate and
            what the correct information should be. Include the site name and
            location to help us quickly locate and fix the issue.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: accentColor }}>
            Can I advertise my rockhounding site?
          </h3>
          <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
            We maintain a comprehensive directory of rockhounding locations. If
            you operate a rockhounding site and would like it included in our
            directory, contact us with details about your operation.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: accentColor }}>
            How long does it take to get a response?
          </h3>
          <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
            We aim to respond to all inquiries within 5-7 business days. During
            peak rockhounding season, responses may take slightly longer.
          </p>
        </div>
      </section>

      <section style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #ddd" }}>
        <h2 style={{ color: brandColor, fontSize: "1.5rem" }}>
          Other Ways to Connect
        </h2>
        <p style={{ lineHeight: "1.8" }}>
          Follow us on social media and share your rockhounding adventures using
          our location tags. Your photos and experiences help build our community!
        </p>
      </section>

      <section
        style={{
          marginTop: "2rem",
          padding: "2rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ color: brandColor, marginTop: 0 }}>
          Thank you for contacting Rockhounding Finder!
        </h3>
        <p style={{ lineHeight: "1.8", marginBottom: 0 }}>
          Whether you're a longtime rockhound or just getting started, we're
          excited to help you discover amazing sites and build your collection.
          We look forward to hearing from you!
        </p>
      </section>
    </div>
  );
}
