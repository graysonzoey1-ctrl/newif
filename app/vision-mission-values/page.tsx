'use client';

/* ── Brand Palette ──────────────────────────────────────── */
const NAVY  = '#0B1F3A';
const GOLD  = '#D4AF37';
const PINK  = '#E91E63';
const WHITE = '#FFFFFF';
const LIGHT = '#FAF7F4';

/* ── Decorative Divider: gold line – pink circle – gold line ── */
function GoldPinkDivider({ size = 'large' }: { size?: 'large' | 'small' }) {
  const lineH   = size === 'large' ? 'h-[2px]' : 'h-[1.5px]';
  const circleW = size === 'large' ? 'w-4 h-4' : 'w-3 h-3';

  return (
    <div className="flex items-center justify-center gap-4 w-full max-w-xs mx-auto">
      <span className={`flex-1 ${lineH} rounded-full`} style={{ backgroundColor: GOLD }} />
      <span
        className={`${circleW} shrink-0 rounded-full`}
        style={{ backgroundColor: PINK, border: `2px solid ${GOLD}` }}
      />
      <span className={`flex-1 ${lineH} rounded-full`} style={{ backgroundColor: GOLD }} />
    </div>
  );
}

/* ── Mission Bullet Item ─────────────────────────────────── */
function MissionBullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-1.5 w-2.5 h-2.5 shrink-0 rounded-full"
        style={{ backgroundColor: PINK }}
      />
      <span className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
        {text}
      </span>
    </li>
  );
}

/* ── Value Card ──────────────────────────────────────────── */
function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-xl p-8 transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(233,30,99,0.15)]"
      style={{
        border: `1.5px solid ${GOLD}`,
        backgroundColor: WHITE,
      }}
    >
      <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: '#444' }}>
        {description}
      </p>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function VisionMissionValues() {
  const values = [
    {
      title: 'Empowerment',
      description:
        'We believe in unlocking potential and fostering independence in all individuals.',
    },
    {
      title: 'Inclusivity',
      description:
        'We ensure no one is left behind, particularly vulnerable and marginalized groups.',
    },
    {
      title: 'Integrity',
      description:
        'We maintain transparency and accountability in all our operations and partnerships.',
    },
    {
      title: 'Innovation',
      description:
        'We continuously seek new and sustainable solutions to development challenges.',
    },
    {
      title: 'Collaboration',
      description:
        'We work with partners, communities, and stakeholders to achieve greater impact.',
    },
    {
      title: 'Respect',
      description:
        'We honor the dignity, rights, and cultural context of every individual and community.',
    },
  ];

  const missionPillars = [
    'Economic Empowerment',
    'Disability Inclusion',
    'Child & Family Protection',
    'Strategic Partnerships',
  ];

  return (
    <main className="min-h-screen">
      {/* ─── SECTION 1 – HERO HEADER ─────────────────────── */}
      <section
        className="py-28 md:py-40"
        style={{
          background: `linear-gradient(160deg, ${NAVY} 0%, #12304d 50%, ${NAVY} 100%)`,
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-10"
            style={{ color: GOLD }}
          >
            {'Vision. Mission. Values.'}
          </h1>

          {/* Decorative divider */}
          <div className="mb-10">
            <GoldPinkDivider size="large" />
          </div>

          <p
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: PINK }}
          >
            {'Building structured empowerment systems for women, children, and vulnerable populations globally.'}
          </p>
        </div>
      </section>

      {/* ─── SECTION 2 – VISION BOX ─────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="rounded-xl p-10 md:p-14"
            style={{
              borderTop: `3px solid ${GOLD}`,
              borderBottom: `3px solid ${GOLD}`,
              borderLeft: `3px solid ${PINK}`,
              borderRight: `3px solid ${NAVY}`,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: GOLD }}>
              Our Vision
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: PINK }}
            />

            <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
              {'To build a just, inclusive, and empowered global society where women, children, persons with disabilities, and vulnerable populations are given equal opportunity to thrive, lead, and transform their communities.'}
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 – MISSION BOX ────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: LIGHT }}>
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="rounded-xl p-10 md:p-14 shadow-lg"
            style={{
              borderTop: `3px solid ${PINK}`,
              borderBottom: `3px solid ${NAVY}`,
              borderLeft: `3px solid ${PINK}`,
              borderRight: `3px solid ${GOLD}`,
              backgroundColor: WHITE,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: NAVY }}>
              Our Mission
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: GOLD }}
            />

            <ul className="flex flex-col gap-4">
              {missionPillars.map((pillar, idx) => (
                <MissionBullet key={`mission-${idx}`} text={pillar} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 – VALUES ──────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: NAVY }}>
              Our Values
            </h2>
            <GoldPinkDivider size="small" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ValueCard
                key={`value-${value.title}-${i}`}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
