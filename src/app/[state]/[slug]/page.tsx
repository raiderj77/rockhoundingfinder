/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import locations from '@/data/locations.json';

export const revalidate = 86400;

export async function generateStaticParams() {
  return locations.map((l) => ({ state: l.stateSlug, slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `${loc.name} — Rockhounding Site in ${loc.state}`,
    description: `${loc.description.slice(0, 155)}`,
    alternates: { canonical: `https://rockhoundingfinder.com/${loc.stateSlug}/${loc.slug}` },
  };
}

const AMENITY_ICONS: Record<string, string> = {
  'Parking': '🅿️', 'Restrooms': '🚻', 'Camping': '⛺', 'Trails': '🥾',
  'Picnic area': '🌳', 'Fee required': '💵', 'Free access': '✅',
  'BLM land': '🗺️', 'State park': '🏞️', 'Private mine': '⛏️',
  'Permit required': '📋', 'Tools allowed': '🔨', 'GPS recommended': '📍',
  'Guided tours': '👷', 'Water available': '💧', 'Dog friendly': '🐕',
};

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/${lng},${lat},14,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

function getRockhoundPreview(d: { name: string; state: string; city: string; amenities: string[]; description: string }): string {
  const amenityCount = d.amenities.length;
  const location = d.city ? `${d.city}, ${d.state}` : d.state;
  if (amenityCount >= 2) {
    return `Rockhounding site in ${location} with ${d.amenities.slice(0, 2).join(' and ').toLowerCase()}.`;
  }
  return `Public rockhounding site in ${location}. Open for collecting.`;
}

export default async function SitePage({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state, slug } = await params;
  const loc = locations.find((l) => l.slug === slug && l.stateSlug === state);
  if (!loc) notFound();

  const related = locations.filter((l) => l.stateSlug === state && l.slug !== slug).slice(0, 3);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'TouristAttraction',
        name: loc.name,
        description: loc.description,
        address: { '@type':'PostalAddress', addressLocality: loc.city || '', addressRegion: loc.state, addressCountry:'US' },
        ...(loc.lat && loc.lng ? { geo: { '@type':'GeoCoordinates', latitude: loc.lat, longitude: loc.lng } } : {}),
        url: `https://rockhoundingfinder.com/${loc.stateSlug}/${loc.slug}`,
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', height: '440px', overflow: 'hidden', background: 'linear-gradient(160deg, var(--earth) 0%, var(--earth-mid) 100%)' }}>
        <img src={getMapboxImage(loc.lat ?? 36, loc.lng ?? -100, 1400, 600)} alt={loc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.85 }} width={1400} height={600} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.92) 0%, rgba(44,24,16,0.55) 50%, rgba(44,24,16,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(160deg, transparent 0px, transparent 60px, rgba(196,82,26,0.03) 60px, rgba(196,82,26,0.03) 62px)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
          <Link href={`/${state}`} style={{ color: 'var(--rust-lt)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', fontWeight: 700, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>← {loc.state}</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--white)', marginBottom: '0.75rem', letterSpacing: '0.04em', fontWeight: 700, lineHeight: 1.1 }}>{loc.name.toUpperCase()}</h1>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="chip chip-white">📍 {loc.city ? `${loc.city}, ` : ''}{loc.state}</span>
            {loc.amenities.slice(0,2).map((a) => <span key={a} className="chip chip-white">{a}</span>)}
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', color: 'var(--earth)', marginBottom: '1rem', letterSpacing: '0.04em' }}>ABOUT THIS SITE</h2>
              <p style={{ lineHeight: 1.85, marginBottom: '1.5rem', color: '#445' }}>
                {loc.name} is a rockhounding site located in {loc.city ? `${loc.city}, ` : ''}{loc.state}.{' '}
                {loc.amenities.length > 0 ? `Collectors can find ${loc.amenities.slice(0, 2).join(' and ').toLowerCase()}.` : 'Open for public rock and mineral collecting.'}{' '}
                GPS coordinates provided for navigation to the site.
              </p>

              {loc.amenities.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--earth)', marginBottom: '0.9rem', letterSpacing: '0.04em' }}>SITE FEATURES</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem' }}>
                    {loc.amenities.map((a) => (
                      <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.65rem 1rem', background: 'var(--white)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(196,82,26,0.12)', borderLeft: '3px solid var(--rust)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', color: 'var(--earth)', fontWeight: 600 }}>
                        <span>{AMENITY_ICONS[a] ?? '✦'}</span><span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Map placeholder */}
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '2px solid rgba(196,82,26,0.15)', marginBottom: '1.5rem' }}>
                <div style={{ background: 'linear-gradient(135deg, var(--earth) 0%, #1a3a1a 100%)', height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🗺️</span>
                  <p style={{ color: 'var(--rust-lt)', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.06em' }}>GPS LOCATION</p>
                  {loc.lat && loc.lng ? (
                    <p style={{ color: '#c0a090', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>{loc.lat.toFixed(5)}°N, {Math.abs(loc.lng).toFixed(5)}°W</p>
                  ) : (
                    <p style={{ color: '#c0a090', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>{loc.city ? `${loc.city}, ` : ''}{loc.state}</p>
                  )}
                </div>
                {loc.lat && loc.lng && (
                  <a href={`https://www.google.com/maps?q=${loc.lat},${loc.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem', background: 'var(--rust)', color: 'var(--white)', fontWeight: 700, fontSize: '0.875rem', fontFamily: 'var(--font-body)', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Open in Google Maps →
                  </a>
                )}
              </div>

              {/* Ethics reminder */}
              <div style={{ background: 'rgba(26,122,122,0.07)', border: '1px solid rgba(26,122,122,0.2)', borderRadius: 'var(--radius)', padding: '1.25rem 1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--teal)', fontSize: '1rem', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>🪨 ROCKHOUND CODE OF ETHICS</p>
                <p style={{ fontSize: '0.875rem', color: '#445', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>Fill all excavation holes. Take only what you can use. Leave the site as you found it. Respect all land ownership rules and permit requirements.</p>
              </div>
            </div>

            {/* Right — sticky panel */}
            <aside style={{ position: 'sticky', top: '5.5rem' }}>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', border: '1px solid rgba(196,82,26,0.12)' }}>
                <div style={{ background: 'var(--earth)', padding: '1.25rem 1.5rem', borderBottom: '3px solid var(--rust)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'var(--rust-lt)', fontSize: '1.1rem', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>SITE INFO</p>
                  <p style={{ color: '#c0a090', fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>{loc.name}</p>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  {[
                    { label: 'Location', value: `${loc.city ? `${loc.city}, ` : ''}${loc.state}` },
                    ...(loc.lat && loc.lng ? [{ label: 'Coordinates', value: `${loc.lat.toFixed(4)}°N, ${Math.abs(loc.lng).toFixed(4)}°W` }] : []),
                    { label: 'Access', value: loc.amenities.find((a) => a.toLowerCase().includes('free') || a.toLowerCase().includes('fee')) ?? 'See site details' },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '0.65rem 0', borderBottom: '1px solid rgba(196,82,26,0.08)' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-body)', fontWeight: 700, flexShrink: 0 }}>{label}</span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--earth)', fontFamily: 'var(--font-body)', textAlign: 'right' }}>{value}</span>
                    </div>
                  ))}
                  <Link href={`/${state}`} className="btn btn-rust" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem', fontSize: '0.875rem', padding: '0.75rem 1.5rem' }}>More Sites in {loc.state}</Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', background: 'var(--cream)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(196,82,26,0.1)' }}>
                <p style={{ fontSize: '0.775rem', color: 'var(--gray)', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>Site conditions change. Always verify land status, permit requirements, and access before collecting. Information is provided for reference only.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.08)', padding: '4rem 1.5rem' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--earth)', marginBottom: '2rem', letterSpacing: '0.04em' }}>MORE SITES IN {loc.state.toUpperCase()}</h2>
            <div className="grid-3">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/${r.stateSlug}/${r.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={`https://picsum.photos/seed/${r.slug}/800/500`} alt={r.name} className="card-img" loading="lazy" width={800} height={500} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{r.city ? `${r.city}, ` : ''}{r.state}</span></div>
                      <h3 className="card-title">{r.name}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '0.75rem' }}>{getRockhoundPreview(r)}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
