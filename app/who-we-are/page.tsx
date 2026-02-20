"use client"

/* ── Brand Palette ──────────────────────────────────────── */
const NAVY  = '#0B1F3A';
const GOLD  = '#D4AF37';
const PINK  = '#E91E63';
const WHITE = '#FFFFFF';
const LIGHT = '#FAF7F4';

/* ── Decorative Divider: gold line – pink circle – gold line ── */
function GoldPinkDivider() {
  return (
    <div className="flex items-center justify-center gap-4 w-full max-w-xs mx-auto">
      <span className="flex-1 h-[2px] rounded-full" style={{ backgroundColor: GOLD }} />
      <span
        className="w-4 h-4 shrink-0 rounded-full"
        style={{ backgroundColor: PINK, border: `2px solid ${GOLD}` }}
      />
      <span className="flex-1 h-[2px] rounded-full" style={{ backgroundColor: GOLD }} />
    </div>
  );
}

export default function WhoWeArePage() {
  const objectives = [
    "Provide quality education and vocational training programs",
    "Advocate for the rights of women, children, and persons with disabilities",
    "Create sustainable economic opportunities through skills development",
    "Build strong community networks and support systems",
    "Promote gender equality and social inclusion",
    "Partner with organizations to amplify our impact",
  ];

  return (
    <main className="min-h-screen">
      {/* ─── HERO HEADER ──────────────────────────────────── */}
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
            WHO WE ARE
          </h1>

          {/* Decorative divider */}
          <div className="mb-10">
            <GoldPinkDivider />
          </div>

          <h2
            className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: WHITE }}
          >
            A Global Institutional Initiative Advancing Disability Inclusion, Women{"'"}s Empowerment, and Sustainable Community Impact.
          </h2>

          <p
            className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: PINK }}
          >
            Network Empowerment for Women International Force (NEWIF) is a registered nonprofit organization creating measurable pathways that expand opportunity and strengthen marginalized communities through structured education, advocacy, and strategic partnerships.
          </p>
        </div>
      </section>

      {/* ─── OUR STORY – Structured Box ───────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: WHITE }}>
        <div className="mx-auto px-6" style={{ maxWidth: '70%' }}>
          <div
            className="rounded-xl p-10 md:p-14 shadow-lg"
            style={{
              borderTop: `3px solid ${GOLD}`,
              borderBottom: `3px solid ${GOLD}`,
              borderLeft: `3px solid ${PINK}`,
              borderRight: `3px solid ${NAVY}`,
              backgroundColor: WHITE,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: NAVY }}>
              Our Story
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: GOLD }}
            />

            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#333' }}>
                NEWIF was established to respond to persistent inequalities affecting women, children, and persons with disabilities. What began as a focused community initiative has grown into a structured empowerment movement delivering educational support, vocational training, advocacy programs, and community-based interventions.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#333' }}>
                Our team of professionals and volunteers brings together expertise in education, social development, leadership, and disability advocacy to drive measurable, long-term impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION / PURPOSE – 3 Boxes ─────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: LIGHT }}>
        <div className="mx-auto px-6" style={{ maxWidth: '70%' }}>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: NAVY }}>
              What Drives Us
            </h2>
            <GoldPinkDivider />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mission',
                border: GOLD,
                text: 'To empower women, children, and persons with disabilities through comprehensive education, vocational training, and advocacy programs that create sustainable change and opportunity.',
              },
              {
                title: 'Vision',
                border: PINK,
                text: "A world where every woman, child, and person with disabilities has equal access to opportunities, resources, and the power to shape their own future.",
              },
              {
                title: 'Purpose',
                border: NAVY,
                text: 'Building inclusive communities through education, training, and action. We believe in creating pathways to empowerment that transform lives and strengthen societies.',
              },
            ].map((card, i) => (
              <div
                key={`drive-${card.title}-${i}`}
                className="rounded-xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                style={{
                  borderTop: `3px solid ${card.border}`,
                  borderLeft: `1.5px solid ${GOLD}`,
                  borderRight: `1.5px solid ${GOLD}`,
                  borderBottom: `1.5px solid ${GOLD}`,
                  backgroundColor: WHITE,
                }}
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: NAVY }}>
                  {card.title}
                </h3>
                <span
                  className="block w-10 h-[2px] rounded-full mb-5"
                  style={{ backgroundColor: card.border }}
                />
                <p className="text-base leading-relaxed" style={{ color: '#444' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OBJECTIVES – Navy Section ────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{
          background: `linear-gradient(160deg, ${NAVY} 0%, #12304d 50%, ${NAVY} 100%)`,
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '70%' }}>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: GOLD }}>
              Our Objectives
            </h2>
            <GoldPinkDivider />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={`obj-${index}`}
                className="flex items-start gap-5 p-7 rounded-lg border-l-4 transition-all duration-300 hover:translate-x-2"
                style={{
                  backgroundColor: 'rgba(232, 201, 87, 0.06)',
                  borderLeftColor: index % 2 === 0 ? GOLD : PINK,
                }}
              >
                <span
                  className="mt-1.5 w-2.5 h-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: index % 2 === 0 ? GOLD : PINK }}
                />
                <p className="text-base leading-relaxed" style={{ color: '#E5E7EB' }}>
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
