'use client';

import Link from 'next/link';

/* ── Brand Palette ──────────────────────────────────────── */
const NAVY  = '#0B1F3A';
const GOLD  = '#D4AF37';
const PINK  = '#E91E63';
const WHITE = '#FFFFFF';
const LIGHT = '#FAF7F4';

/* ── Decorative Divider ─────────────────────────────────── */
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

/* ── Leadership Card ─────────────────────────────────────── */
function LeadershipCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.2)]"
      style={{
        border: `1.5px solid ${GOLD}`,
        backgroundColor: WHITE,
      }}
    >
      {/* Pink accent line at top */}
      <div className="h-1" style={{ backgroundColor: PINK }} />

      <div className="p-8">
        <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>
          {title}
        </h3>
        <p className="text-base leading-relaxed" style={{ color: '#555' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function GovernanceLeadership() {
  const leadershipRoles = [
    {
      title: 'Founder & Executive Director',
      description:
        'Provides strategic vision, organizational leadership, and overall direction for NEWIF\'s programs, partnerships, and institutional growth.',
    },
    {
      title: 'Board of Directors',
      description:
        'Ensures governance integrity, strategic oversight, and fiduciary accountability across all organizational operations and initiatives.',
    },
    {
      title: 'Program Directors',
      description:
        'Lead the design, implementation, and evaluation of core empowerment programs across women, children, and disability inclusion.',
    },
    {
      title: 'Finance & Operations Team',
      description:
        'Manages financial integrity, operational efficiency, donor compliance, and resource allocation to sustain long-term impact.',
    },
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
            {'Leadership & Governance'}
          </h1>

          <div className="mb-10">
            <GoldPinkDivider size="large" />
          </div>

          <p
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: PINK }}
          >
            {'Structured leadership. Transparent governance. Measurable accountability.'}
          </p>
        </div>
      </section>

      {/* ─── SECTION 2 – GOVERNANCE OVERVIEW ─────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="rounded-xl p-10 md:p-14 shadow-md"
            style={{
              borderTop: `3px solid ${GOLD}`,
              borderBottom: `3px solid ${GOLD}`,
              borderLeft: `3px solid ${PINK}`,
              borderRight: `3px solid ${NAVY}`,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: GOLD }}>
              Organizational Structure
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: PINK }}
            />

            <div className="max-w-[70%]">
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: NAVY }}>
                {'NEWIF operates under a transparent governance structure with clear accountability mechanisms, ensuring effective decision-making and resource management at every level.'}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
                {'Our governance framework is built on internationally recognized principles of transparency, stakeholder participation, and institutional integrity \u2014 designed to protect the communities we serve and sustain long-term impact.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 – LEADERSHIP GRID ─────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: LIGHT }}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              {'Executive & Governance Structure'}
            </h2>
            <span
              className="block w-20 h-[2px] rounded-full mx-auto"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {leadershipRoles.map((role, i) => (
              <LeadershipCard
                key={`leader-${role.title}-${i}`}
                title={role.title}
                description={role.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 – CLOSING AUTHORITY STRIP ─────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: NAVY }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ color: GOLD }}
          >
            {'Governance With Integrity'}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: WHITE }}
          >
            {'NEWIF is committed to maintaining the highest standards of governance, ensuring that every program, partnership, and policy decision is grounded in transparency, accountability, and a deep commitment to the communities we serve.'}
          </p>
          <Link
            href="/transparency-accountability"
            className="inline-block px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.3)]"
            style={{
              backgroundColor: PINK,
              color: WHITE,
              border: `2px solid ${GOLD}`,
            }}
          >
            View Governance Framework
          </Link>
        </div>
      </section>
    </main>
  );
}
