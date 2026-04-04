import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Rockhounding Sites Directory | Find Public Rockhounding Locations Near You",
  description:
    "Discover rockhounding sites, gem mining locations, and mineral collecting areas across the USA. Find public lands, fee-dig mines, and state parks with sapphires, opals, garnets, and more.",
  keywords: [
    "rockhounding",
    "gem mining",
    "mineral collecting",
    "gemstones",
    "public lands",
    "fee-dig mines",
    "lapidary",
    "crystals",
    "geodes",
  ],
  metadataBase: new URL("https://rockhoundingfinder.com"),
  canonical: "https://rockhoundingfinder.com",
  openGraph: {
    title:
      "Rockhounding Sites Directory | Find Public Rockhounding Locations",
    description:
      "Discover rockhounding sites and gem mining locations across the USA.",
    type: "website",
    url: "https://rockhoundingfinder.com",
    images: [
      {
        url: "https://rockhoundingfinder.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rockhounding Finder",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brandColor = "#3d2b1f";
  const accentColor = "#c47b00";

  return (
    <html lang="en">
      <head>
        <meta name="Bing-verification" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta
          name="google-site-verification"
          content="rockhoundingfinder-verification"
        />
        <meta name="theme-color" content={brandColor} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "system-ui, -apple-system, sans-serif", color: "#333" }}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <header
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: brandColor,
            color: "white",
            padding: "1rem 2rem",
            zIndex: 100,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <nav
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              <a
                href="/"
                style={{
                  color: accentColor,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                Rockhounding Finder
              </a>
            </div>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <a
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                Home
              </a>
              <a
                href="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                About
              </a>
              <a
                href="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main style={{ minHeight: "calc(100vh - 200px)" }}>{children}</main>

        <footer
          style={{
            backgroundColor: brandColor,
            color: "white",
            padding: "3rem 2rem",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
            }}
          >
            <div>
              <h3 style={{ color: accentColor, marginTop: 0 }}>
                Directory Sites
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="https://publicboatramps.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Public Boat Ramps
                  </a>
                </li>
                <li>
                  <a
                    href="https://findswimspots.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Find Swim Spots
                  </a>
                </li>
                <li>
                  <a
                    href="https://craftdistilleryfinder.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Craft Distillery Finder
                  </a>
                </li>
                <li>
                  <a
                    href="https://driveintonight.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Drive-In Tonight
                  </a>
                </li>
                <li>
                  <a
                    href="https://allskateparks.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    All Skate Parks
                  </a>
                </li>
                <li>
                  <a
                    href="https://nearbyescaperooms.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Nearby Escape Rooms
                  </a>
                </li>
                <li>
                  <a
                    href="https://allskatingrinks.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    All Skating Rinks
                  </a>
                </li>
                <li>
                  <a
                    href="https://soakusa.net"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Soak USA
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: accentColor, marginTop: 0 }}>Tool Sites</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="https://fibertools.app"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Fiber Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://mindchecktools.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Mind Check Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://flipmycase.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Flip My Case
                  </a>
                </li>
                <li>
                  <a
                    href="https://creatorrevenuecalculator.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Creator Revenue Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="https://contractextract.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Contract Extract
                  </a>
                </li>
                <li>
                  <a
                    href="https://medicalbillreader.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Medical Bill Reader
                  </a>
                </li>
                <li>
                  <a
                    href="https://taxbreaktools.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    Tax Break Tools
                  </a>
                </li>
                <li>
                  <a
                    href="https://524tracker.com"
                    style={{ color: "#ddd", textDecoration: "none" }}
                  >
                    524 Tracker
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              maxWidth: "1200px",
              margin: "2rem auto 0",
              paddingTop: "2rem",
              borderTop: `1px solid rgba(255,255,255,0.2)`,
              textAlign: "center",
              fontSize: "0.9rem",
            }}
          >
            <p style={{ margin: 0 }}>
              &copy; 2024 Rockhounding Finder. All rights reserved.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <a href="/privacy" style={{ color: "#ddd", textDecoration: "none", marginRight: "1rem" }}>
                Privacy Policy
              </a>
              <a href="/terms" style={{ color: "#ddd", textDecoration: "none" }}>
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
