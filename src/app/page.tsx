import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Rockhounding Finder | Editorial Rebuild',
  description: 'Rockhounding Finder is reviewing land status, access, and collecting rules before republishing destination guides.',
  alternates: { canonical: 'https://rockhoundingfinder.com' },
};

export default function Home() {
  return (
    <>
      <section style={{ background: 'linear-gradient(160deg, var(--earth) 0%, #1a0c08 55%, #0d1a1a 100%)', padding: '7rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p className="section-label" style={{ color: 'var(--rust-lt)' }}>Editorial rebuild</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 6vw, 4.4rem)', color: 'var(--white)', lineHeight: 1.05, letterSpacing: '0.04em', marginBottom: '1.5rem' }}>
            ROCKHOUNDING FINDER
          </h1>
          <p style={{ color: '#d8c2b7', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
            We are reviewing every destination before republishing it. A mineral occurrence or old mining record does not prove that the public may enter or collect there today.
          </p>
        </div>
      </section>

      <main style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <section style={{ background: 'var(--white)', border: '1px solid rgba(196,82,26,0.18)', borderRadius: 'var(--radius)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', boxShadow: 'var(--shadow-card)', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--earth)', fontSize: '2rem', letterSpacing: '0.04em', marginBottom: '1rem' }}>VERIFY BEFORE COLLECTING</h2>
            <p style={{ lineHeight: 1.85, color: '#445', marginBottom: '1rem' }}>
              Land ownership, mining claims, closures, protected resources, and collection limits can change. Confirm the exact site with the responsible land manager and check for active claims or private mineral rights before entering or removing anything.
            </p>
            <p style={{ lineHeight: 1.85, color: '#445', marginBottom: '1.5rem' }}>
              The Bureau of Land Management says casual noncommercial collection is generally allowed on some BLM-managed public land, but not in every area—including active mining claims, developed recreation sites, or places with privately owned mineral rights.
            </p>
            <a href="https://www.blm.gov/programs/recreation/rockhounding" target="_blank" rel="noopener noreferrer nofollow" className="btn btn-rust">
              Read the official BLM guidance
            </a>
          </section>

          <section style={{ background: 'var(--cream)', borderRadius: 'var(--radius)', padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--earth)', fontSize: '1.7rem', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>WHAT HAPPENS NEXT</h2>
            <p style={{ lineHeight: 1.8, color: '#445', marginBottom: '1.25rem' }}>
              Destinations will return one at a time only after their land manager, current access status, collecting rule, and source links are recorded. Until then, no destination is presented as open for collecting.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link href="/about" className="btn btn-rust">About the review</Link>
              <Link href="/contact" className="btn" style={{ border: '1px solid var(--rust)', color: 'var(--rust)' }}>Report a source</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
