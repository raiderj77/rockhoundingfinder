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

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://rockhoundingfinder.com',
  name: 'Rockhounding Finder',
  dateModified: new Date().toISOString().substring(0,10),
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://rockhoundingfinder.com/search?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rockhounding Finder',
  url: 'https://rockhoundingfinder.com',
  description: 'Directory of public rockhounding and gem hunting locations across the United States',
  dateModified: new Date().toISOString().substring(0,10),
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rockhounding Finder Directory',
  url: 'https://rockhoundingfinder.com',
  description: 'Find public rockhounding sites, gem mines, and fossil hunting locations near you',
  areaServed: 'United States',
  dateModified: new Date().toISOString().substring(0,10),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find a public rockhounding site near me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the Rockhounding Finder directory to search by state or mineral type. Each listing includes the site location, what minerals or gems can be found, whether collecting is free or fee-based, and any permit requirements from the managing land agency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is rockhounding legal on public land?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casual collecting of rocks, minerals, and common invertebrate fossils is generally permitted on Bureau of Land Management (BLM) land for personal non-commercial use, typically up to 25 pounds per day. National Parks prohibit all collecting. State parks and National Forests have varying rules — always check with the managing agency before collecting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools do I need for rockhounding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic rockhounding tools include a rock hammer, chisels, safety glasses, gloves, sturdy boots, and collecting bags. A hand lens or loupe helps identify minerals in the field. GPS and a topographic map are recommended for remote sites. Always pack out more trash than you bring in.',
      },
    },
    {
      '@type': 'Question',
      name: 'What minerals and gems can I find rockhounding in the United States?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The U.S. offers exceptional variety — agates and thunder eggs in Oregon, garnets in Idaho, turquoise in Nevada and Arizona, sapphires in Montana, quartz crystals in Arkansas, amethyst in Texas, and fossils across the Great Plains and desert Southwest. Each region has signature finds tied to its geology.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to go rockhounding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Permit requirements vary by land management agency and site. BLM land typically requires no permit for casual personal collecting. Some fee-dig operations require paid admission. National Parks prohibit all collecting. State-specific rules vary — always verify with the local BLM field office or land manager before your trip.',
      },
    },
  ],
};

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: '#1e1b4b', borderBottom: '3px solid #f59e0b', padding: '0.875rem 1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
        <strong style={{ color: '#f59e0b' }}>This directory is paused for editorial enrichment.</strong>{' '}
        Visit our active sites:{' '}
        <a href="https://soakusa.net" style={{ color: '#93c5fd', textDecoration: 'underline' }}>soakusa.net</a>
        {' | '}
        <a href="https://publicboatramps.com" style={{ color: '#93c5fd', textDecoration: 'underline' }}>publicboatramps.com</a>
        {' | '}
        <a href="https://fibertools.app" style={{ color: '#93c5fd', textDecoration: 'underline' }}>fibertools.app</a>
      </div>

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
          <div className="anim-fade-up anim-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="/texas" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem', background: 'var(--rust)', color: 'white', textDecoration: 'none', transition: 'background 0.2s' }}>Find Rockhounding Sites →</a>
            <a href="/arizona" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem', background: 'transparent', color: 'white', border: '2px solid rgba(196,82,26,0.5)', textDecoration: 'none', transition: 'background 0.2s' }}>Browse by State</a>
          </div>
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
                  <img src={getMapboxImage(loc.lat ?? 36, loc.lng ?? -100)} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{getRockhoundPreview(loc)}</p>
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
            {
              q: 'How do I find a public rockhounding site near me?',
              a: 'Use the Rockhounding Finder directory to search by state or mineral type. Each listing includes the site location, what minerals or gems can be found, whether collecting is free or fee-based, and any permit requirements from the managing land agency.',
            },
            {
              q: 'Is rockhounding legal on public land?',
              a: 'Casual collecting of rocks, minerals, and common invertebrate fossils is generally permitted on Bureau of Land Management (BLM) land for personal non-commercial use, typically up to 25 pounds per day. National Parks prohibit all collecting. State parks and National Forests have varying rules — always check with the managing agency before collecting.',
            },
            {
              q: 'What tools do I need for rockhounding?',
              a: 'Basic rockhounding tools include a rock hammer, chisels, safety glasses, gloves, sturdy boots, and collecting bags. A hand lens or loupe helps identify minerals in the field. GPS and a topographic map are recommended for remote sites. Always pack out more trash than you bring in.',
            },
            {
              q: 'What minerals and gems can I find rockhounding in the United States?',
              a: 'The U.S. offers exceptional variety — agates and thunder eggs in Oregon, garnets in Idaho, turquoise in Nevada and Arizona, sapphires in Montana, quartz crystals in Arkansas, amethyst in Texas, and fossils across the Great Plains and desert Southwest. Each region has signature finds tied to its geology.',
            },
            {
              q: 'Do I need a permit to go rockhounding?',
              a: 'Permit requirements vary by land management agency and site. BLM land typically requires no permit for casual personal collecting. Some fee-dig operations require paid admission. National Parks prohibit all collecting. State-specific rules vary — always verify with the local BLM field office or land manager before your trip.',
            },
          ].map(({q,a}) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* GEO Content Sections */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--earth)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>How to Plan Your First Rockhounding Trip</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem', fontWeight: 600, color: 'var(--earth)' }}>
            Research what minerals are found in your target area, verify collecting rules with the land management agency, and pack the right tools — a rock hammer, safety glasses, and sturdy boots are the minimum kit.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>
            Start by identifying your target region using geological survey maps from the USGS, which show rock formations and mineral deposit types by area. The BLM&apos;s surface management maps let you confirm whether land is open to casual collecting before you drive out. There are over 10,000 documented rockhounding sites across the United States on public and fee-access land, so narrowing by state and mineral type is the most efficient first step.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: '3rem' }}>
            Cross-reference your target site with this directory to review access type, permit requirements, and what other collectors have found there. Calling the local BLM field office directly is always the safest way to confirm current conditions and rules before your trip.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--earth)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>What Are the Best States for Rockhounding?</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem', fontWeight: 600, color: 'var(--earth)' }}>
            Oregon, Idaho, Montana, Arizona, Nevada, and Arkansas consistently rank as top rockhounding states due to their geological diversity and abundance of public land open to collecting.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>
            Oregon is famous for its thunder eggs (the state rock) and agate beaches along the coast. Montana produces world-class sapphires from alluvial deposits near Philipsburg and Yogo Gulch. Arizona offers turquoise, petrified wood, and fire agates across its desert terrain. Arkansas hosts the only public diamond mine in North America alongside exceptional quartz crystal deposits near Mount Ida.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: '3rem' }}>
            The United States has over 1 billion acres of public land managed by federal agencies including the BLM, Forest Service, and National Park Service — much of it geologically rich and open to casual mineral collecting. The western states contain the highest concentration of accessible BLM land where collecting is routinely permitted.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--earth)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>What Is the Difference Between Rockhounding on BLM Land Versus National Parks?</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem', fontWeight: 600, color: 'var(--earth)' }}>
            BLM land generally allows casual personal collecting of rocks and minerals. National Parks prohibit all collecting — even picking up a pebble is a federal violation.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>
            The BLM&apos;s casual use policy allows individuals to collect up to 25 pounds of rocks, minerals, and common invertebrate fossils per day for personal non-commercial use on most BLM-managed land, with no permit required. Vertebrate fossils and meteorites are excluded and require a permit regardless of land type. National Forests fall between the two extremes — collecting rules vary by district, and some areas require a free permit even for personal collecting.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: '3rem' }}>
            Always check with the local field office before collecting. The BLM manages 245 million acres of public land across 12 western states, and rules can vary significantly between districts even within the same state.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--earth)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>How Do I Identify Rocks and Minerals I Find While Rockhounding?</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem', fontWeight: 600, color: 'var(--earth)' }}>
            Test hardness using the Mohs scale, observe crystal structure and luster, check streak color on unglazed porcelain, and note specific gravity. A field guide to rocks and minerals for your region is an essential companion.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>
            Smartphone mineral identification apps such as Rock Identifier and iRocks provide a useful starting point for field ID, though accuracy varies with specimen quality and photo conditions. For confident identification of unusual or potentially valuable finds, joining a local gem and mineral club is invaluable — experienced collectors can identify specimens in seconds and share knowledge about regional geology that no app can replicate. The gem and mineral hobby attracts an estimated 1.5 million active collectors in the United States, according to the American Federation of Mineralogical Societies.
          </p>

          <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: 'var(--cream)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--rust)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--earth)', marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Further Reading</h3>
            <ul style={{ lineHeight: 2.2, listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a href="https://www.blm.gov/programs/recreation/permits-and-passes/lotteries-and-permit-systems/recreational-mineral-collecting" rel="nofollow noopener noreferrer" target="_blank" style={{ color: 'var(--rust)', textDecoration: 'underline', fontSize: '0.95rem' }}>
                  Bureau of Land Management — Recreational Mineral Collecting
                </a>
              </li>
              <li>
                <a href="https://www.amfed.org" rel="nofollow noopener noreferrer" target="_blank" style={{ color: 'var(--rust)', textDecoration: 'underline', fontSize: '0.95rem' }}>
                  American Federation of Mineralogical Societies (amfed.org)
                </a>
              </li>
              <li>
                <a href="https://www.usgs.gov/programs/mineral-resources-program" rel="nofollow noopener noreferrer" target="_blank" style={{ color: 'var(--rust)', textDecoration: 'underline', fontSize: '0.95rem' }}>
                  USGS Mineral Resources Program (usgs.gov)
                </a>
              </li>
            </ul>
          </div>

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
