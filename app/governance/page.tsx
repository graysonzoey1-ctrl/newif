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

/* ── Principle Card ──────────────────────────────────────── */
function PrincipleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.2)]"
      style={{ border: `1.5px solid ${GOLD}`, backgroundColor: WHITE }}
    >
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

/* ── Data ─────────────────────────────────────────────────── */
const governancePrinciples = [
  {
    title: 'Transparency',
    description:
      'All decisions, financial transactions, and program outcomes are documented and accessible to stakeholders, donors, and the public.',
  },
  {
    title: 'Accountability',
    description:
      'Every team member and partner is accountable for their responsibilities, with clear reporting structures and performance metrics.',
  },
  {
    title: 'Stakeholder Participation',
    description:
      'Community members, beneficiaries, and partners are actively involved in decision-making and program design processes.',
  },
  {
    title: 'Institutional Integrity',
    description:
      'NEWIF upholds the highest ethical standards, ensuring compliance with national laws and international development best practices.',
  },
  {
    title: 'Financial Stewardship',
    description:
      'All funds are managed with strict fiduciary discipline, with regular audits, donor compliance reviews, and public reporting.',
  },
  {
    title: 'Risk Management',
    description:
      'Proactive identification and mitigation of operational, financial, and reputational risks to protect the organization and its beneficiaries.',
  },
];

const governanceBodies = [
  {
    title: 'Board of Directors',
    description:
      'Provides strategic oversight, approves organizational policies, and ensures NEWIF operates in alignment with its mission and legal obligations.',
  },
  {
    title: 'Executive Management',
    description:
      'Responsible for day-to-day operations, program implementation, financial management, and reporting to the Board.',
  },
  {
    title: 'Advisory Council',
    description:
      'A panel of external experts who provide guidance on policy, partnerships, and programmatic strategy to strengthen NEWIF\'s impact.',
  },
  {
    title: 'Audit & Compliance Committee',
    description:
      'Conducts regular internal audits, reviews financial reports, and ensures organizational compliance with regulatory requirements.',
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function GovernancePage() {
  return (
    <main className="min-h-screen">
      {/* ─── HERO ────────────────────────────────────────── */}
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
            {'Governance'}
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

      {/* ─── GOVERNANCE OVERVIEW ─────────────────────────── */}
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
              Governance Framework
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: PINK }}
            />

            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
                {'NEWIF operates under a transparent governance structure with clear accountability mechanisms, ensuring effective decision-making and resource management at every level of the organization.'}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
                {'Our governance framework is built on internationally recognized principles of transparency, stakeholder participation, and institutional integrity \u2014 designed to protect the communities we serve and sustain long-term impact.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOVERNANCE BODIES ───────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: LIGHT }}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              Governance Structure
            </h2>
            <span className="block w-20 h-[2px] rounded-full mx-auto" style={{ backgroundColor: GOLD }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {governanceBodies.map((body, i) => (
              <div
                key={`body-${body.title}-${i}`}
                className="rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.2)]"
                style={{ border: `1.5px solid ${GOLD}`, backgroundColor: WHITE }}
              >
                <div className="h-1" style={{ backgroundColor: PINK }} />
                <div className="p-8">
                  <div
                    className="w-14 h-14 rounded-full mb-5 flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: NAVY, color: GOLD }}
                  >
                    {`0${i + 1}`}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>
                    {body.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                    {body.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GOVERNANCE PRINCIPLES ───────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              Governance Principles
            </h2>
            <GoldPinkDivider size="small" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {governancePrinciples.map((principle, i) => (
              <PrincipleCard
                key={`principle-${principle.title}-${i}`}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMITMENT SECTION ──────────────────────────── */}
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
              Our Commitment
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: GOLD }}
            />

            <div className="flex flex-col gap-4">
              {[
                'Annual financial audits conducted by independent external auditors',
                'Quarterly board meetings with documented minutes and resolutions',
                'Public disclosure of program outcomes and financial summaries',
                'Whistleblower protection and anti-corruption policies in place',
                'Regular stakeholder feedback mechanisms and community reviews',
              ].map((item, i) => (
                <div key={`commitment-${i}`} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2.5 h-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: PINK }}
                  />
                  <span className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: GOLD }}>
            {'Governance With Integrity'}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: WHITE }}
          >
            {'NEWIF is committed to maintaining the highest standards of governance, ensuring that every program, partnership, and policy decision is grounded in transparency, accountability, and service to the communities we work with.'}
          </p>
          <Link
            href="/transparency-accountability"
            className="inline-block px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.3)]"
            style={{ backgroundColor: PINK, color: WHITE, border: `2px solid ${GOLD}` }}
          >
            View Transparency Report
          </Link>
        </div>
      </section>
    </main>
  );
}
