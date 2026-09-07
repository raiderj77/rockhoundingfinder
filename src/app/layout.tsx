import type { Metadata } from 'next';
import { Oswald, Source_Sans_3 } from 'next/font/google';
import './globals.css';
const oswald = Oswald({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','500','600','700'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400','600','700'] });
export const metadata: Metadata = {
  title: { template: '%s | Rockhounding Finder', default: 'Rockhounding Finder ,  Find Rock & Mineral Sites Across America' },
  description: 'Discover the best rockhounding sites across the United States. Find gems, minerals, fossils, and crystals with GPS coordinates and site details.',
  keywords: 'rockhounding, gem hunting, mineral collecting, fossil sites, crystal hunting, rockhounding near me',
  metadataBase: new URL('https://rockhoundingfinder.com'),
  alternates: { canonical: 'https://rockhoundingfinder.com' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: { google: 'QXqAI47-3tV4BMAg_aGRiubKJmMhGAjUFdkqhCLgl2I' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable}`}>
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header style={{ background: 'var(--earth)', borderBottom: '3px solid var(--rust)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 20px rgba(44,24,16,0.5)' }}>
          <div className="container site-header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
            <a href="/" className="site-brand" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🪨</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--rust-lt)', letterSpacing: '0.05em' }}>ROCKHOUNDING FINDER</span>
            </a>
            <nav className="site-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: 'var(--rust-pale)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}>Home</a>
              <a href="/browse-states" style={{ color: 'var(--rust-pale)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}>Browse</a>
              <a href="/about" style={{ color: 'var(--rust-pale)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}>About</a>
            </nav>
          </div>
        </header>
        <main style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>
        <footer style={{ background: 'var(--earth)', borderTop: '3px solid var(--earth-mid)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--rust-lt)', fontWeight: 600, fontSize: '1.15rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>🪨 ROCKHOUNDING FINDER</p>
                <p style={{ color: '#8a6a5a', fontSize: '0.875rem', lineHeight: 1.7 }}>Free directory of rockhounding sites, gem hunting locations, and mineral collecting spots across the United States.</p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: '#5a3a2a', fontSize: '0.85rem' }}>© 2026 Rockhounding Finder. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Contact', '/contact'], ['About', '/about']].map(([l, h]) => (
                  <a key={h} href={h} style={{ color: '#5a3a2a', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
