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
      style={{ border: `1.5px solid ${GOLD}`, backgroundColor: WHITE }}
    >
      <div className="h-1" style={{ backgroundColor: PINK }} />
      <div className="p-8">
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
const leadershipTeam = [
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
];

const programTeam = [
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

const fieldTeam = [
  {
    name: 'Patience Mensah',
    role: 'Community Outreach Coordinator',
    description:
      'Coordinates grassroots engagement, mobilizes community participation, and ensures programs reach underserved populations.',
  },
  {
    name: 'Daniel Quaye',
    role: 'Disability Inclusion Specialist',
    description:
      'Designs inclusive programming, conducts accessibility assessments, and advocates for structural inclusion of persons with disabilities.',
  },
  {
    name: 'Esther Amponsah',
    role: 'Women\'s Empowerment Facilitator',
    description:
      'Delivers leadership training, entrepreneurial workshops, and economic empowerment programs for women across communities.',
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function OurTeamPage() {
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
            {'Our Team'}
          </h1>

          <div className="mb-10">
            <GoldPinkDivider size="large" />
          </div>

          <p
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: PINK }}
          >
            {'Meet the dedicated professionals and volunteers who bring NEWIF\'s mission to life every day.'}
          </p>
        </div>
      </section>

      {/* ─── TEAM INTRO ──────────────────────────────────── */}
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
              People Behind the Mission
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: PINK }}
            />
            <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
              {'NEWIF\'s strength lies in the people who drive our work. From leadership to field operations, our team brings together expertise in development, governance, finance, advocacy, disability inclusion, and community engagement to create measurable, sustainable change.'}
            </p>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP TEAM ─────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: LIGHT }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              Leadership Team
            </h2>
            <span className="block w-20 h-[2px] rounded-full mx-auto" style={{ backgroundColor: GOLD }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leadershipTeam.map((member, i) => (
              <TeamMemberCard
                key={`leader-${member.name}-${i}`}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAM TEAM ────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              Program & Operations Team
            </h2>
            <span className="block w-20 h-[2px] rounded-full mx-auto" style={{ backgroundColor: PINK }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programTeam.map((member, i) => (
              <TeamMemberCard
                key={`program-${member.name}-${i}`}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FIELD TEAM ──────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: LIGHT }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              Field & Community Team
            </h2>
            <span className="block w-20 h-[2px] rounded-full mx-auto" style={{ backgroundColor: GOLD }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {fieldTeam.map((member, i) => (
              <TeamMemberCard
                key={`field-${member.name}-${i}`}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: GOLD }}>
            {'Join Our Team'}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: WHITE }}
          >
            {'We are always looking for passionate individuals who share our commitment to empowerment, inclusion, and community transformation.'}
          </p>
          <Link
            href="/volunteer"
            className="inline-block px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.3)]"
            style={{ backgroundColor: PINK, color: WHITE, border: `2px solid ${GOLD}` }}
          >
            Volunteer With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
