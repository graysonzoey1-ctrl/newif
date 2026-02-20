/* ── Brand Palette ──────────────────────────────────────── */
const NAVY = "#0B1F3A"
const GOLD = "#D4AF37"
const PINK = "#E91E63"
const WHITE = "#FFFFFF"

/* ── Decorative Divider ────────────────────────────────── */
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
  )
}

export default function WhoWeArePage() {
  return (
    <main>
      {/* ─── SECTION 1: HERO HEADER ───────────────────────── */}
      <section
        className="flex items-center justify-center"
        style={{
          backgroundColor: NAVY,
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-balance"
            style={{ color: GOLD, marginBottom: "40px" }}
          >
            Who We Are
          </h1>

          <GoldPinkDivider />
        </div>
      </section>

      {/* ─── SECTION 2: INSTITUTIONAL IDENTITY BOX ────────── */}
      <section
        className="flex items-center justify-center"
        style={{
          backgroundColor: WHITE,
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="mx-auto px-6 w-full" style={{ maxWidth: "70%" }}>
          <div
            className="rounded-xl shadow-lg"
            style={{
              borderTop: `3px solid ${GOLD}`,
              borderBottom: `3px solid ${GOLD}`,
              borderLeft: `3px solid ${PINK}`,
              borderRight: `3px solid ${NAVY}`,
              backgroundColor: WHITE,
              padding: "50px",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: NAVY, marginBottom: "8px" }}>
              Who We Are
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full"
              style={{ backgroundColor: GOLD, marginBottom: "32px" }}
            />

            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#333" }}>
                {"Network Empowerment for Women International Force (NEWIF) is a registered nonprofit organization creating measurable pathways that expand opportunity and strengthen marginalized communities through structured education, advocacy, and strategic partnerships."}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#333" }}>
                {"A Global Institutional Initiative Advancing Disability Inclusion, Women\u2019s Empowerment, and Sustainable Community Impact."}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#333" }}>
                {"NEWIF was established to respond to persistent inequalities affecting women, children, and persons with disabilities. What began as a focused community initiative has grown into a structured empowerment movement delivering educational support, vocational training, advocacy programs, and community-based interventions."}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#333" }}>
                {"Our team of professionals and volunteers brings together expertise in education, social development, leadership, and disability advocacy to drive measurable, long-term impact."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CTA BLOCK ─────────────────────────── */}
      <section
        className="flex items-center justify-center"
        style={{
          backgroundColor: NAVY,
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-balance"
            style={{ color: GOLD, marginBottom: "16px" }}
          >
            Stand With NEWIF
          </h2>

          <div style={{ marginBottom: "40px" }}>
            <GoldPinkDivider />
          </div>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)", marginBottom: "40px" }}
          >
            {"Join a growing movement of individuals, partners, and communities working together to create lasting, measurable change."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/membership"
              className="inline-block rounded-lg px-8 py-3.5 text-sm font-semibold tracking-wide transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: PINK, color: WHITE }}
            >
              Join Now
            </a>
            <a
              href="/about-newif"
              className="inline-block rounded-lg px-8 py-3.5 text-sm font-semibold tracking-wide transition-opacity duration-200 hover:opacity-90"
              style={{ border: `2px solid ${GOLD}`, color: GOLD, backgroundColor: "transparent" }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
