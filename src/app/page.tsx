/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Rockhounding Finder — Discover Gem & Mineral Sites Across America',
  description: 'Find the best rockhounding sites near you. Gems, crystals, minerals, and fossils across all 50 states with GPS coordinates and collecting tips.',
};

const ALL_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const IMG_KEYWORDS = ['rocks+minerals','gem+hunting','crystal+mining','quartz+crystal','gemstone','rockhounding+site'];

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://rockhoundingfinder.com',
        name:'Rockhounding Finder',
        potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://rockhoundingfinder.com/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, var(--earth) 0%, #1a0c08 50%, #0d1a1a 100%)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(160deg, transparent 0px, transparent 60px, rgba(196,82,26,0.03) 60px, rgba(196,82,26,0.03) 62px, transparent 62px, transparent 130px, rgba(26,122,122,0.04) 130px, rgba(26,122,122,0.04) 132px)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up" style={{ display: 'inline-block', color: 'var(--rust-lt)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '1rem', fontFamily: 'var(--font-body)', background: 'rgba(196,82,26,0.12)', padding: '0.4rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(196,82,26,0.28)' }}>
            🪨 Gem & Mineral Site Directory
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', color: 'var(--white)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.05, letterSpacing: '0.04em' }}>
            FIND ROCKHOUNDING<br /><span style={{ color: 'var(--rust-lt)' }}>SITES</span> ACROSS AMERICA
          </h1>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.05rem', color: '#c0a090', marginBottom: '2.75rem', maxWidth: '500px', margin: '0 auto 2.75rem', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>
            Gems, crystals, agates, fossils &amp; minerals — {locations.length}+ collecting sites with GPS coordinates.
          </p>
          <form method="GET" action="/search" className="anim-fade-up anim-delay-3">
            <div className="search-wrap">
              <input type="text" name="q" placeholder="Search by state, city, or mineral type…" className="search-input" />
              <button type="submit" className="search-btn">Find Sites</button>
            </div>
          </form>
        </div>
        <svg aria-hidden viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(196,82,26,0.1)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n:`${locations.length}+`, l:'Collecting Sites' },
            { n:`${statesWithData}`, l:'States Covered' },
            { n:'Gems', l:'Minerals & Fossils' },
            { n:'GPS', l:'Coordinates' },
          ].map(({n,l}) => (
            <div key={l} className="stat-item">
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">🪨 Top Sites</p>
          <h2 className="section-title">Featured Rockhounding Sites</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>Top-rated gem and mineral collecting locations from coast to coast.</p>
          <div className="grid-3">
            {featured.map((loc, i) => (
              <Link key={loc.slug} href={`/${loc.stateSlug}/${loc.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={`https://picsum.photos/seed/${loc.slug}/800/500`} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{loc.description.slice(0,110)}…</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {loc.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'linear-gradient(135deg, var(--earth) 0%, #1a0c08 100%)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--rust-lt)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem', fontFamily: 'var(--font-body)' }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--white)', letterSpacing: '0.04em' }}>FIND YOUR COLLECTING SITE</h2>
          </div>
          <div className="grid-3">
            {[
              { icon:'🗺️', title:'BROWSE BY STATE', desc:'Pick your state to explore every documented rockhounding site — with mineral types, access info, and GPS.' },
              { icon:'💎', title:'CHECK THE SITE', desc:'Review the minerals you can find, what tools to bring, site rules, and any permit requirements.' },
              { icon:'🪨', title:'GO COLLECTING', desc:"Get directions and head out. Bring a rock hammer, gloves, and a bag — America's geology awaits." },
            ].map(({icon,title,desc}) => (
              <div key={title} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius)', border: '1px solid rgba(196,82,26,0.2)' }}>
                <div className="step-icon">{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--rust-lt)', fontSize: '1.4rem', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>{title}</h3>
                <p style={{ color: '#c0a090', lineHeight: 1.7, fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--earth)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>THE ART OF ROCKHOUNDING</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Rockhounding is the hobby of collecting rocks, minerals, gems, and fossils in their natural environment. From the agate beds of the Pacific Northwest to the quartz crystals of Arkansas and the petrified wood of Arizona, the United States offers some of the world's most spectacular collecting opportunities.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>What makes rockhounding special is the combination of outdoor adventure and scientific discovery. Every site tells a geological story spanning millions of years. Finding a perfect amethyst crystal or a trilobite fossil connects you to deep time in a way few hobbies can match.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--earth)', marginTop: '2rem', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>BEFORE YOU GO</h3>
          <p style={{ lineHeight: 1.85 }}>Always check land ownership and rules before collecting. Collecting is permitted on most BLM lands for personal use. National Parks prohibit removal of any natural materials. Some sites require permits or charge fees. The Rockhound Code of Ethics calls for filling holes, taking only what you need, and leaving the site as you found it.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(196,82,26,0.08)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </div>
          {[
            { q:'Is rockhounding legal?', a:'It depends on the land. Collecting is generally permitted on BLM (Bureau of Land Management) land for personal use. It is prohibited in National Parks, and varies on state parks and private land. Always check before collecting.' },
            { q:'What tools do I need for rockhounding?', a:'Basics include a rock hammer, cold chisels, safety glasses, gloves, a backpack, newspaper or cloth for wrapping specimens, and a field guide to local minerals. GPS is also helpful for marking good sites.' },
            { q:'How do I identify rocks and minerals?', a:'Key properties for identification include hardness (Mohs scale), color, streak, luster, cleavage/fracture, and crystal form. A good field guide to minerals, combined with practice, will quickly develop your identification skills.' },
            { q:'Can I sell what I find?', a:'You can sell specimens collected on your own property or with landowner permission. Material collected on BLM land for personal use cannot be commercially sold. Federal lands have strict rules about commercial collecting.' },
            { q:'What are the most common finds?', a:'Quartz (in many varieties including amethyst, citrine, and agate) is found across most states. Other common finds include jasper, obsidian, calcite, feldspar, and fossils like shells and plant material.' },
          ].map(({q,a}) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Browse States */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">All 50 States</p>
            <h2 className="section-title">Browse Sites by State</h2>
          </div>
          <div className="grid-states">
            {ALL_STATES.map((s) => (
              <Link key={s} href={`/${s.toLowerCase().replace(/\s+/g,'-')}`} className="state-link">{s}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--earth)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--white)', marginBottom: '1rem', letterSpacing: '0.04em' }}>START YOUR HUNT TODAY</h2>
          <p style={{ color: '#8a6a5a', marginBottom: '2rem', lineHeight: 1.7 }}>{locations.length}+ rockhounding sites across {statesWithData} states. Find your next gem.</p>
          <Link href="/browse-states" className="btn btn-rust" style={{ padding: '0.9rem 2.25rem' }}>Explore Sites →</Link>
        </div>
      </section>
    </>
  );
}
