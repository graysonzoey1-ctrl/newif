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

/* ── Team Member Card ────────────────────────────────────── */
function TeamMemberCard({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
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
        {/* Avatar placeholder */}
        <div
          className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-bold"
          style={{ backgroundColor: NAVY, color: GOLD }}
        >
          {name.split(' ').map(n => n[0]).join('')}
        </div>

        <h3 className="text-xl font-bold text-center mb-1" style={{ color: NAVY }}>
          {name}
        </h3>
        <p className="text-sm font-semibold text-center mb-4" style={{ color: PINK }}>
          {role}
        </p>
        <p className="text-base leading-relaxed text-center" style={{ color: '#555' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────── */
const teamMembers = [
  {
    name: 'Abigail Osei',
    role: 'Founder & Executive Director',
    description:
      'Provides strategic vision, organizational leadership, and overall direction for NEWIF\'s programs, partnerships, and institutional growth across Ghana and beyond.',
  },
  {
    name: 'Dr. Kwame Mensah',
    role: 'Board Chairperson',
    description:
      'Ensures governance integrity, strategic oversight, and fiduciary accountability across all organizational operations and initiatives.',
  },
  {
    name: 'Faustina Adjei',
    role: 'Director of Programs',
    description:
      'Leads the design, implementation, and evaluation of core empowerment programs across women, children, and disability inclusion.',
  },
  {
    name: 'Emmanuel Tetteh',
    role: 'Finance & Operations Manager',
    description:
      'Manages financial integrity, operational efficiency, donor compliance, and resource allocation to sustain long-term impact.',
  },
  {
    name: 'Grace Boateng',
    role: 'Partnerships & Advocacy Lead',
    description:
      'Develops strategic partnerships with governments, corporations, and NGOs to scale NEWIF\'s reach and amplify policy advocacy efforts.',
  },
  {
    name: 'Samuel Asante',
    role: 'Monitoring & Evaluation Officer',
    description:
      'Tracks program outcomes, measures social impact, and ensures data-driven decision-making across all NEWIF initiatives.',
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function LeadershipPage() {
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
            {'Our Leadership Team'}
          </h1>

          <div className="mb-10">
            <GoldPinkDivider size="large" />
          </div>

          <p
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: PINK }}
          >
            {'Meet the people driving NEWIF\'s mission to empower women, children, and persons with disabilities across Ghana and beyond.'}
          </p>
        </div>
      </section>

      {/* ─── SECTION 2 – LEADERSHIP OVERVIEW ─────────────── */}
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
              Leadership That Serves
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: PINK }}
            />

            <div className="max-w-[70%]">
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: NAVY }}>
                {'NEWIF is led by a dedicated team of professionals committed to social impact, institutional integrity, and community transformation.'}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
                {'Our leadership brings together expertise in development, governance, finance, advocacy, and program management \u2014 working collaboratively to ensure every initiative creates measurable, sustainable change.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 – TEAM GRID ───────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: LIGHT }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              {'Meet the Team'}
            </h2>
            <span
              className="block w-20 h-[2px] rounded-full mx-auto"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <TeamMemberCard
                key={`member-${member.name}-${i}`}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 – CLOSING CTA ────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: NAVY }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ color: GOLD }}
          >
            {'Join Our Mission'}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: WHITE }}
          >
            {'Whether through partnership, volunteering, or financial support, you can be part of a team that is transforming communities and creating lasting impact.'}
          </p>
          <Link
            href="/membership"
            className="inline-block px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.3)]"
            style={{
              backgroundColor: PINK,
              color: WHITE,
              border: `2px solid ${GOLD}`,
            }}
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}
