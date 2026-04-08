/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Petrified Forest Park Gilmer TX — Rockhounding Texas Petrified Wood',
  description:
    'Find petrified wood and silicified specimens at Petrified Forest Park in Gilmer, Texas (Upshur County). Free public access, easy terrain — perfect for family rockhounding in East Texas.',
  alternates: { canonical: 'https://rockhoundingfinder.com/texas/petrified-forest-park' },
  openGraph: {
    title: 'Petrified Forest Park — Rockhounding for Petrified Wood in Texas',
    description:
      'Public rockhounding site in Gilmer, TX. Find petrified wood and silicified specimens in the East Texas Piney Woods. Free access, family friendly.',
    url: 'https://rockhoundingfinder.com/texas/petrified-forest-park',
    type: 'website',
  },
};

const LAT = 32.729;
const LNG = -94.946;

const SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Petrified Forest Park',
    description:
      'Petrified Forest Park is a public rockhounding site in Gilmer, Texas (Upshur County) where collectors find petrified wood and silicified specimens. Free access and easy terrain make it a popular family-friendly destination in East Texas.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gilmer',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LAT,
      longitude: LNG,
    },
    url: 'https://rockhoundingfinder.com/texas/petrified-forest-park',
    touristType: 'Rockhounding enthusiasts',
    isAccessibleForFree: true,
    publicAccess: true,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rockhoundingfinder.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Texas Rockhounding Sites',
        item: 'https://rockhoundingfinder.com/texas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Petrified Forest Park',
        item: 'https://rockhoundingfinder.com/texas/petrified-forest-park',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What can I find rockhounding at Petrified Forest Park in Texas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Petrified Forest Park in Gilmer, Texas is best known for petrified wood and silicified wood specimens. Collectors find pieces ranging from small fragments to larger log sections preserved over millions of years. The silicification process replaces organic plant material with silica minerals — often preserving original wood grain, growth rings, and bark textures in stunning detail. Colors range from earthy browns and tans to occasional reds and blacks depending on the mineral content.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is collecting allowed at Petrified Forest Park in Gilmer, TX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Petrified Forest Park is a public park where rockhound collecting is permitted within posted limits. Always review current park rules and signage before collecting. Practice Leave No Trace principles: fill any holes you dig, take only what you can personally use, and respect daily or weight collection limits if posted. Do not remove any specimens that appear to be protected or marked by park staff.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the best time to visit Petrified Forest Park for rockhounding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fall (October through November) and spring (March through May) are the best seasons to visit Petrified Forest Park for rockhounding. East Texas summers are hot and humid, making extended field work uncomfortable. After autumn rains, erosion exposes fresh specimens on the surface. Spring visits offer mild temperatures and good visibility before dense Piney Woods vegetation fills in. Avoid collecting immediately after heavy rain when trails may be muddy and slippery.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get to Petrified Forest Park in Gilmer, Texas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Petrified Forest Park is located in Gilmer, Texas in Upshur County, in the Piney Woods region of East Texas. Gilmer is approximately 100 miles east of Dallas via US-80 east to TX-271 north. From Longview, take US-259 north approximately 25 miles into Gilmer. GPS coordinates: 32.729°N, 94.946°W. Search "Petrified Forest Park Gilmer TX" in Google Maps or a GPS app for current turn-by-turn routing to the park entrance.',
        },
      },
    ],
  },
];

const AMENITIES: { label: string; icon: string }[] = [
  { label: 'Free access', icon: '✅' },
  { label: 'Public park', icon: '🏞️' },
  { label: 'Surface collecting', icon: '🪨' },
  { label: 'Family friendly', icon: '👨‍👩‍👧' },
  { label: 'Parking', icon: '🅿️' },
  { label: 'Easy terrain', icon: '🥾' },
];

const FAQS = [
  {
    q: 'What will I find at Petrified Forest Park?',
    a: 'The park is known for petrified wood and silicified wood specimens — ancient logs and branches transformed by silica minerals over millions of years. Colors range from earthy browns and tans to occasional reds and grays depending on trace mineral content. Preservation quality varies widely: some pieces retain visible grain and ring patterns while others are more weathered fragments.',
  },
  {
    q: 'Is collecting free and open to the public?',
    a: 'Yes. Petrified Forest Park in Gilmer is a public park with free access and collecting permitted within posted guidelines. Always check current signage at the park for any limits on quantity or specimen size. Respect all posted rules and practice Leave No Trace — fill any holes, take only personal-use quantities, and leave the site as you found it.',
  },
  {
    q: 'What should I bring for rockhounding here?',
    a: 'Pack water, sunscreen, and sturdy closed-toe shoes — even on easy terrain, loose rock and roots can be hazardous. Bring a small rock hammer, chisel, and sturdy gloves for prying surface specimens. A hand lens (10× loupe) helps identify silicification quality. Bring paper bags or newspaper to wrap delicate pieces, and a field notebook to record where you found each specimen.',
  },
  {
    q: 'When is the best time of year to visit?',
    a: 'Fall (October–November) and spring (March–May) offer the most comfortable collecting conditions. Summer in East Texas brings heat, humidity, and heavy vegetation that can obscure surface finds. After autumn rains, freshly eroded specimens are often exposed on slopes and stream banks. Avoid visiting immediately after heavy rain when trails become muddy and slick.',
  },
];

export default function PetrifiedForestParkPage() {
  return (
    <>
      {SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section style={{ position: 'relative', height: '440px', overflow: 'hidden' }}>
        <img
          src="https://picsum.photos/seed/petrified-forest-park/1400/600"
          alt="Petrified Forest Park rockhounding site in Gilmer, Texas"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          width={1400}
          height={600}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(44,24,16,0.92) 0%, rgba(44,24,16,0.55) 50%, rgba(44,24,16,0.2) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(160deg, transparent 0px, transparent 60px, rgba(196,82,26,0.03) 60px, rgba(196,82,26,0.03) 62px)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="container"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
          }}
        >
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem' }}>
            <ol
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                flexWrap: 'wrap',
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: 'var(--rust-lt)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: '#c0a090', fontSize: '0.82rem' }}>›</li>
              <li>
                <Link
                  href="/texas"
                  style={{
                    color: 'var(--rust-lt)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                  }}
                >
                  Texas
                </Link>
              </li>
              <li style={{ color: '#c0a090', fontSize: '0.82rem' }}>›</li>
              <li
                style={{
                  color: '#e8d5c0',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                Petrified Forest Park
              </li>
            </ol>
          </nav>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem,4vw,3rem)',
              color: 'var(--white)',
              marginBottom: '0.75rem',
              letterSpacing: '0.04em',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            PETRIFIED FOREST PARK
          </h1>
          <div
            style={{
              display: 'flex',
              gap: '0.6rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span className="chip chip-white">📍 Gilmer, Texas</span>
            <span className="chip chip-white">🪨 Petrified Wood</span>
            <span className="chip chip-white">✅ Free Access</span>
          </div>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }}
          preserveAspectRatio="none"
        >
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Main content */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* Left column */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.7rem',
                  color: 'var(--earth)',
                  marginBottom: '1rem',
                  letterSpacing: '0.04em',
                }}
              >
                ABOUT THIS SITE
              </h2>

              <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', color: '#445' }}>
                Petrified Forest Park in Gilmer, Texas is one of East Texas&rsquo;s most accessible
                public rockhounding destinations. Located in Upshur County in the heart of the Piney
                Woods, this park preserves a remarkable geological record of ancient plant life
                transformed into stone over millions of years. Collectors come specifically to find{' '}
                <strong>petrified wood</strong> and <strong>silicified wood specimens</strong> —
                organic material replaced by silica minerals through a slow geochemical process that
                preserves original structure in extraordinary detail.
              </p>

              <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', color: '#445' }}>
                The site lies within the geological context of East Texas&rsquo;s ancient forests,
                where wood buried in sediment tens of millions of years ago was slowly replaced by
                groundwater rich in dissolved silica. Over time, the silica minerals crystallized
                within the cellular structure of the wood, producing specimens that are chemically
                identical to stone but structurally identical to the original tree. The result is{' '}
                <strong>Texas petrified wood</strong> that sometimes retains visible grain lines,
                growth rings, and even bark texture — a window into forests that existed long before
                humans walked the earth.
              </p>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--earth)',
                  marginBottom: '0.85rem',
                  marginTop: '2rem',
                  letterSpacing: '0.04em',
                }}
              >
                WHAT YOU&rsquo;LL FIND
              </h2>

              <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', color: '#445' }}>
                The primary target at Petrified Forest Park is <strong>petrified wood</strong>,
                ranging from small fragments perfect for display pieces to substantial log sections.
                Coloration varies based on trace mineral content during the silicification process:
                earthy browns and warm tans are most common, while pieces with iron content can
                display rusty reds and oranges. Some specimens show striking black or gray tones from
                manganese or carbon inclusions. The surface layer of specimens is often weathered,
                but a single clean break with a rock hammer frequently reveals brilliant interior
                color and preserved cellular detail.
              </p>

              <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', color: '#445' }}>
                Beyond petrified wood, collectors in the broader Upshur County region occasionally
                encounter <strong>silicified bark</strong> and pieces showing original knot
                structures or branch junctions. Quality varies across the site — patience and
                systematic searching of eroded slopes and stream-cut banks will yield the best
                specimens. Surface collecting after rain is particularly productive, when fresh
                erosion exposes new material.
              </p>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--earth)',
                  marginBottom: '0.85rem',
                  marginTop: '2rem',
                  letterSpacing: '0.04em',
                }}
              >
                GETTING THERE
              </h2>

              <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', color: '#445' }}>
                Petrified Forest Park is located in <strong>Gilmer, Texas</strong> (Upshur County),
                approximately 100 miles east of Dallas. From Dallas, take US-80 east toward
                Mineola, then US-271 north toward Gilmer. From Longview, travel US-259 north
                approximately 25 miles into Gilmer. Gilmer is the Upshur County seat and has gas
                stations, grocery stores, and restaurants for pre- and post-trip needs. Use GPS
                coordinates <strong>32.729°N, 94.946°W</strong> or search{' '}
                <em>&ldquo;Petrified Forest Park Gilmer TX&rdquo;</em> in Google Maps for
                turn-by-turn directions to the park entrance.
              </p>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--earth)',
                  marginBottom: '0.85rem',
                  marginTop: '2rem',
                  letterSpacing: '0.04em',
                }}
              >
                WHAT TO BRING
              </h2>

              <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', color: '#445' }}>
                Even though the terrain is easy and family-friendly, come prepared for a productive
                field outing. Essential gear includes: plenty of water (East Texas humidity is no
                joke even in cool weather), sturdy closed-toe shoes or boots, and sunscreen. For
                collecting, bring a <strong>rock hammer</strong> and <strong>cold chisel</strong> to
                test and break surface specimens, heavy leather gloves to protect your hands, and a{' '}
                <strong>10× hand loupe</strong> to examine silicification detail. Pack newspaper or
                paper bags to wrap and cushion specimens for the drive home. A small daypack keeps
                your hands free while you search.
              </p>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--earth)',
                  marginBottom: '0.85rem',
                  marginTop: '2rem',
                  letterSpacing: '0.04em',
                }}
              >
                BEST TIMES TO VISIT
              </h2>

              <p style={{ lineHeight: 1.85, marginBottom: '1.25rem', color: '#445' }}>
                <strong>Fall (October–November)</strong> and <strong>spring (March–May)</strong> are
                the sweet spots for rockhounding at Petrified Forest Park. Autumn is particularly
                productive: seasonal rains cause natural erosion that exposes fresh specimens, and
                falling leaves open up visibility across the ground. Temperatures are comfortable for
                extended searching. Spring offers mild weather and low humidity before the East Texas
                summer arrives in force. Summer collecting is possible but demanding — plan early
                morning starts and bring twice the water you think you need. Winter visits work well
                on dry days; bare deciduous trees actually improve ground visibility significantly.
              </p>

              {/* Amenities */}
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--earth)',
                  marginBottom: '0.9rem',
                  marginTop: '2rem',
                  letterSpacing: '0.04em',
                }}
              >
                SITE FEATURES
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '0.6rem',
                  marginBottom: '2rem',
                }}
              >
                {AMENITIES.map(({ label, icon }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.65rem 1rem',
                      background: 'var(--white)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(196,82,26,0.12)',
                      borderLeft: '3px solid var(--rust)',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--earth)',
                      fontWeight: 600,
                    }}
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div
                style={{
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  border: '2px solid rgba(196,82,26,0.15)',
                  marginBottom: '2rem',
                }}
              >
                <div
                  style={{
                    background: 'linear-gradient(135deg, var(--earth) 0%, #1a3a1a 100%)',
                    height: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <span style={{ fontSize: '2.5rem' }}>🗺️</span>
                  <p
                    style={{
                      color: 'var(--rust-lt)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      letterSpacing: '0.06em',
                    }}
                  >
                    GPS LOCATION
                  </p>
                  <p
                    style={{
                      color: '#c0a090',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {LAT.toFixed(4)}°N, {Math.abs(LNG).toFixed(4)}°W
                  </p>
                  <p
                    style={{
                      color: '#9a7a6a',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Gilmer, Upshur County, Texas
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps?q=${LAT},${LNG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    background: 'var(--rust)',
                    color: 'var(--white)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-body)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* FAQ */}
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--earth)',
                  marginBottom: '1rem',
                  marginTop: '2rem',
                  letterSpacing: '0.04em',
                }}
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {FAQS.map(({ q, a }) => (
                  <div
                    key={q}
                    style={{
                      background: 'var(--white)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(196,82,26,0.12)',
                      borderLeft: '3px solid var(--teal)',
                      padding: '1.1rem 1.25rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: 'var(--earth)',
                        fontSize: '1rem',
                        letterSpacing: '0.03em',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {q}
                    </p>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#445',
                        lineHeight: 1.75,
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {a}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ethics */}
              <div
                style={{
                  background: 'rgba(26,122,122,0.07)',
                  border: '1px solid rgba(26,122,122,0.2)',
                  borderRadius: 'var(--radius)',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--teal)',
                    fontSize: '1rem',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  🪨 ROCKHOUND CODE OF ETHICS
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#445',
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Fill all excavation holes. Take only what you can use. Leave the site as you found
                  it. Respect all land ownership rules and permit requirements. When in doubt about
                  collection limits, collect less and return another day.
                </p>
              </div>
            </div>

            {/* Right — sticky sidebar */}
            <aside style={{ position: 'sticky', top: '5.5rem' }}>
              <div
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-card)',
                  overflow: 'hidden',
                  border: '1px solid rgba(196,82,26,0.12)',
                }}
              >
                <div
                  style={{
                    background: 'var(--earth)',
                    padding: '1.25rem 1.5rem',
                    borderBottom: '3px solid var(--rust)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--rust-lt)',
                      fontSize: '1.1rem',
                      letterSpacing: '0.06em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    SITE INFO
                  </p>
                  <p
                    style={{
                      color: '#c0a090',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Petrified Forest Park
                  </p>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  {[
                    { label: 'Location', value: 'Gilmer, Texas' },
                    { label: 'County', value: 'Upshur County' },
                    { label: 'Coordinates', value: `${LAT.toFixed(4)}°N, ${Math.abs(LNG).toFixed(4)}°W` },
                    { label: 'Access', value: 'Free — public park' },
                    { label: 'Difficulty', value: 'Easy — family friendly' },
                    { label: 'Best seasons', value: 'Fall & Spring' },
                    { label: 'Finds', value: 'Petrified wood, silicified wood' },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '0.65rem 0',
                        borderBottom: '1px solid rgba(196,82,26,0.08)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--gray)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--earth)',
                          fontFamily: 'var(--font-body)',
                          textAlign: 'right',
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}

                  <Link
                    href="/texas"
                    className="btn btn-rust"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '1.25rem',
                      fontSize: '0.875rem',
                      padding: '0.75rem 1.5rem',
                    }}
                  >
                    More Sites in Texas
                  </Link>
                  <Link
                    href="/"
                    className="btn"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '0.6rem',
                      fontSize: '0.875rem',
                      padding: '0.75rem 1.5rem',
                      background: 'var(--cream)',
                      color: 'var(--earth)',
                      border: '1px solid rgba(196,82,26,0.2)',
                      borderRadius: 'var(--radius-sm)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      textAlign: 'center',
                    }}
                  >
                    Browse All States
                  </Link>
                </div>
              </div>

              <div
                style={{
                  marginTop: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--cream)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(196,82,26,0.1)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.775rem',
                    color: 'var(--gray)',
                    lineHeight: 1.65,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Site conditions change. Always verify land status, permit requirements, and access
                  before collecting. Information is provided for reference only.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Internal links — Texas state page */}
      <section
        style={{
          background: 'var(--cream)',
          borderTop: '1px solid rgba(196,82,26,0.08)',
          padding: '4rem 1.5rem',
        }}
      >
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'var(--earth)',
              marginBottom: '1rem',
              letterSpacing: '0.04em',
            }}
          >
            MORE ROCKHOUNDING IN TEXAS
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.5rem', color: '#445' }}>
            Texas is a geologically diverse state with rockhounding opportunities ranging from
            petrified wood in the Piney Woods to agate and flint in the Trans-Pecos desert. Browse
            all Texas rockhounding sites to plan your next collecting trip across the Lone Star
            State.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/texas" className="btn btn-rust" style={{ display: 'inline-flex' }}>
              All Texas Rockhounding Sites →
            </Link>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                background: 'var(--white)',
                border: '1px solid rgba(196,82,26,0.2)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--earth)',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              Browse All States
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
