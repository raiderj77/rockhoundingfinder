/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const revalidate = 86400;

const stateList = [
  { name: 'Alabama', slug: 'alabama' }, { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' }, { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' }, { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' }, { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' }, { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' }, { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' }, { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' }, { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' }, { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' }, { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' }, { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' }, { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' }, { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' }, { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' }, { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' }, { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' }, { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' }, { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' }, { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' }, { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' }, { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' }, { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' }, { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' }, { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' }, { name: 'Wyoming', slug: 'wyoming' },
];

function getStateName(slug: string) {
  return stateList.find((s) => s.slug === slug)?.name ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

export function generateStaticParams() {
  return stateList.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateName(state);
  return {
    title: `Rockhounding Sites in ${stateName}`,
    description: `Find the best rockhounding sites in ${stateName}. Gems, minerals, crystals, agates, and fossils with GPS coordinates and collecting tips.`,
    alternates: { canonical: `https://rockhoundingfinder.com/${state}` },
  };
}

const IMG_KEYWORDS = ['rocks+minerals','gem+hunting','crystal+mining','quartz+crystal','gemstone','rockhounding+site','mineral+collecting','agate+stones'];

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const stateName = getStateName(state);
  const spots = locations.filter((l) => l.stateSlug === state);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem',position:1,name:'Home',item:'https://rockhoundingfinder.com'},
          { '@type':'ListItem',position:2,name:`Rockhounding in ${stateName}`,item:`https://rockhoundingfinder.com/${state}`},
        ],
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, var(--earth) 0%, #1a0c08 60%, #0d1a1a 100%)', overflow: 'hidden', padding: '4rem 1.5rem 3.5rem' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(160deg, transparent 0px, transparent 60px, rgba(196,82,26,0.03) 60px, rgba(196,82,26,0.03) 62px, transparent 62px, transparent 130px, rgba(26,122,122,0.04) 130px, rgba(26,122,122,0.04) 132px)', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--rust)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" style={{ color: 'var(--rust-lt)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>← All States</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem,4.5vw,3.5rem)', color: 'var(--white)', marginBottom: '0.75rem', letterSpacing: '0.04em', fontWeight: 700 }}>
            ROCKHOUNDING IN <span style={{ color: 'var(--rust-lt)' }}>{stateName.toUpperCase()}</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="chip chip-rust">{spots.length} {spots.length===1?'Site':'Sites'} Listed</span>
            <span style={{ color: '#c0a090', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>Gems, minerals &amp; fossils</span>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Grid */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          {spots.length > 0 ? (
            <div className="grid-3">
              {spots.map((spot, i) => (
                <Link key={spot.slug} href={`/${state}/${spot.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={`https://picsum.photos/seed/${spot.slug}/800/500`} alt={spot.name} className="card-img" loading="lazy" width={800} height={500} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{spot.city ? `${spot.city}, ` : ''}{spot.state}</span></div>
                      <h2 className="card-title">{spot.name}</h2>
                      <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>{spot.description.slice(0,100)}…</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {spot.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '5rem 2rem', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🪨</p>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--earth)', marginBottom: '0.75rem', fontSize: '2rem', letterSpacing: '0.04em' }}>COMING SOON</h2>
              <p style={{ color: 'var(--gray)', fontFamily: 'var(--font-body)' }}>{"We're mapping rockhounding sites in "}{stateName}{" — check back soon!"}</p>
              <Link href="/" className="btn btn-rust" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>Browse Other States</Link>
            </div>
          )}
        </div>
      </section>

      {/* State info */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.08)', padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--earth)', marginBottom: '1rem', letterSpacing: '0.04em' }}>ROCKHOUNDING IN {stateName.toUpperCase()}</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.1rem', color: '#445' }}>
            {stateName} offers rockhounders a diverse geological landscape to explore. From ancient river gravels to exposed bedrock outcrops, the state has produced everything from common quartz varieties to rare regional specialties prized by collectors worldwide.
          </p>
          <p style={{ lineHeight: 1.85, color: '#445' }}>
            Before collecting, always verify land ownership and any permit requirements. BLM land generally allows personal-use collecting, while state parks vary and national parks prohibit removal of any natural materials. Leave no trace and fill any excavation holes.
          </p>
        </div>
      </section>
    </>
  );
}
