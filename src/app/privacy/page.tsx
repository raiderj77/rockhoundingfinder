export const metadata = {
  title: "Privacy Policy | Rockhounding Finder",
  description: "Privacy policy for Rockhounding Finder",
};

export default function PrivacyPage() {
  const brandColor = "#3d2b1f";

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 2rem",
      }}
    >
      <h1 style={{ color: brandColor }}>Privacy Policy</h1>

      <p style={{ lineHeight: "1.8" }}>
        <strong>Last Updated:</strong> April 2026
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>Introduction</h2>
      <p style={{ lineHeight: "1.8" }}>
        Rockhounding Finder ("we," "us," "our," or "Company") is committed to
        protecting your privacy. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website
        rockhoundingfinder.com.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        Information We Collect
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        We may collect information about you in a variety of ways. The
        information we may collect on the site includes:
      </p>
      <ul style={{ lineHeight: "2" }}>
        <li>
          <strong>Personally Identifiable Information:</strong> Name, email
          address, and other details you provide through contact forms.
        </li>
        <li>
          <strong>Automatic Information:</strong> Log data, IP address, browser
          type, pages visited, and time spent on our site.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> We use cookies to
          enhance your experience and serve relevant advertisements.
        </li>
      </ul>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        How We Use Your Information
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        We use the information we collect to:
      </p>
      <ul style={{ lineHeight: "2" }}>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Improve our website and services</li>
        <li>Display personalized content and advertisements</li>
        <li>Monitor and analyze trends and usage</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        Cookies and Advertising
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        We work with third-party advertising partners, including Google, who may
        use cookies to serve ads based on your prior visits to this website or
        other websites. Google&apos;s use of advertising cookies enables it and
        its partners to serve ads to you based on your visit to our site and/or
        other sites on the internet.
      </p>
      <p style={{ lineHeight: "1.8", marginTop: "1rem" }}>
        You may opt out of personalized advertising by visiting{" "}
        <a
          href="https://ads.google.com/settings"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: brandColor }}
        >
          Google&apos;s Ad Settings
        </a>{" "}
        or the{" "}
        <a
          href="https://optout.aboutads.info"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: brandColor }}
        >
          Digital Advertising Alliance opt-out page
        </a>
        .
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        Third-Party Disclosure
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        We may share information with third-party service providers who assist
        us in operating our website and conducting our business. This includes
        Google AdSense for advertising purposes. We do not sell your personal
        information to third parties.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>Security</h2>
      <p style={{ lineHeight: "1.8" }}>
        We implement appropriate security measures to protect your information
        from unauthorized access, alteration, disclosure, or destruction.
        However, no transmission over the internet is completely secure.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        Contact Us
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        If you have questions about this Privacy Policy, please contact us at:
      </p>
      <p>
        <strong>Email:</strong> contact@rockhoundingfinder.com
      </p>
    </div>
  );
}
