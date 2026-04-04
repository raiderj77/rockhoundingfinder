export const metadata = {
  title: "Terms of Service | Rockhounding Finder",
  description: "Terms of service for Rockhounding Finder",
};

export default function TermsPage() {
  const brandColor = "#3d2b1f";

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 2rem",
      }}
    >
      <h1 style={{ color: brandColor }}>Terms of Service</h1>

      <p style={{ lineHeight: "1.8" }}>
        <strong>Last Updated:</strong> April 2024
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>1. Use License</h2>
      <p style={{ lineHeight: "1.8" }}>
        Permission is granted to temporarily download one copy of the materials
        (information or software) on Rockhounding Finder's website for personal,
        non-commercial transitory viewing only. This is the grant of a license,
        not a transfer of title, and under this license you may not:
      </p>
      <ul style={{ lineHeight: "2" }}>
        <li>Modify or copy the materials</li>
        <li>Use the materials for any commercial purpose</li>
        <li>Attempt to decompile or reverse engineer any software on the site</li>
        <li>Remove any copyright or proprietary notations from the materials</li>
        <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
      </ul>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        2. Disclaimer
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        The materials on Rockhounding Finder are provided on an "as is" basis.
        Rockhounding Finder makes no warranties, expressed or implied, and
        hereby disclaims and negates all other warranties including, without
        limitation, implied warranties or conditions of merchantability, fitness
        for a particular purpose, or non-infringement of intellectual property
        or other violation of rights.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>3. Limitations</h2>
      <p style={{ lineHeight: "1.8" }}>
        In no event shall Rockhounding Finder or its suppliers be liable for any
        damages (including, without limitation, damages for loss of data or
        profit, or due to business interruption) arising out of the use or
        inability to use the materials on Rockhounding Finder's website.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        4. Accuracy of Materials
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        The materials appearing on Rockhounding Finder's website could include
        technical, typographical, or photographic errors. Rockhounding Finder
        does not warrant that any of the materials on our website are accurate,
        complete, or current. Rockhounding Finder may make changes to the
        materials contained on our website at any time without notice.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>5. Links</h2>
      <p style={{ lineHeight: "1.8" }}>
        Rockhounding Finder has not reviewed all of the sites linked to our
        website and is not responsible for the contents of any such linked site.
        The inclusion of any link does not imply endorsement by us of the site.
        Use of any such linked website is at the user's own risk.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        6. Modifications
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        Rockhounding Finder may revise these terms of service for our website at
        any time without notice. By using this website, you are agreeing to be
        bound by the then current version of these terms of service.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        7. Governing Law
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        These terms and conditions are governed by and construed in accordance
        with the laws of the United States, and you irrevocably submit to the
        exclusive jurisdiction of the courts in that location.
      </p>

      <h2 style={{ color: brandColor, marginTop: "2rem" }}>
        8. Contact Information
      </h2>
      <p style={{ lineHeight: "1.8" }}>
        If you have questions about these Terms of Service, please contact us at:
      </p>
      <p>
        <strong>Email:</strong> contact@rockhoundingfinder.com
      </p>
    </div>
  );
}
