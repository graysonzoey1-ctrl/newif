/* ── Brand Palette ──────────────────────────────────────── */
const NAVY = "#0B1F3A"
const GOLD = "#D4AF37"
const PINK = "#E91E63"
const WHITE = "#FFFFFF"
const LIGHT_PINK = "#FDF2F6"

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
        className="flex flex-col items-center justify-center text-center"
        style={{
          background: `linear-gradient(160deg, ${NAVY} 0%, #12304d 50%, ${NAVY} 100%)`,
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-balance"
            style={{ color: GOLD, marginBottom: "40px" }}
          >
            Who We Are
          </h1>

          <div style={{ marginBottom: "40px" }}>
            <GoldPinkDivider />
          </div>

          <p
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {"Institutional identity rooted in empowerment, dignity, and structured impact."}
          </p>
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
              Our Identity
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full"
              style={{ backgroundColor: GOLD, marginBottom: "32px" }}
            />

            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#333" }}>
                {"Network Empowerment for Women International Force (NEWIF) is a registered nonprofit organization creating measurable pathways that expand opportunity and strengthen marginalized communities through structured education, advocacy, and strategic partnerships."}
              </p>
              <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: NAVY }}>
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

      {/* ─── SECTION 3: ABOUT US FRAMED BLOCK ─────────────── */}
      <section
        className="flex items-center justify-center"
        style={{
          backgroundColor: NAVY,
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="mx-auto px-6 w-full" style={{ maxWidth: "70%" }}>
          <div
            className="rounded-xl shadow-lg"
            style={{
              borderTop: `3px solid ${NAVY}`,
              borderBottom: `3px solid ${NAVY}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRight: `3px solid ${GOLD}`,
              backgroundColor: LIGHT_PINK,
              padding: "50px",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: GOLD, marginBottom: "8px" }}>
              About NEWIF
            </h2>
            <span
              className="block w-16 h-[2px] rounded-full"
              style={{ backgroundColor: PINK, marginBottom: "32px" }}
            />

            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
                {"NEWIF operates at the intersection of advocacy, education, and sustainable development. We design and implement practical empowerment systems that create measurable social impact for women, children, persons with disabilities, and vulnerable populations across Ghana and beyond."}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
                {"Our approach is rooted in the belief that empowerment is not charity but structure \u2014 where systems are intentionally designed to protect the vulnerable, elevate women into leadership, and unlock the full human potential in every community we serve."}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: NAVY }}>
                {"We operate through structured programs, strategic partnerships, policy engagement, and grassroots action to ensure empowerment is practical, measurable, and sustainable."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: VISUAL BLEND STRIP ────────────────── */}
      <section
        className="flex items-center justify-center text-center"
        style={{
          background: `linear-gradient(135deg, ${LIGHT_PINK} 0%, #FCE4EC 50%, ${LIGHT_PINK} 100%)`,
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-balance"
            style={{ color: NAVY, marginBottom: "16px" }}
          >
            {"Empowerment by Design, Impact by Structure"}
          </h2>
          <span
            className="block w-24 h-[2px] rounded-full mx-auto"
            style={{ backgroundColor: GOLD, marginBottom: "24px" }}
          />
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#444" }}
          >
            {"NEWIF is committed to creating systemic change through institutional frameworks that address inequality at every level \u2014 from local communities to international policy spaces. Our work transforms lives by embedding empowerment into the fabric of governance, education, and social development."}
          </p>
        </div>
      </section>

      {/* ─── SECTION 5: CTA BLOCK ─────────────────────────── */}
      <section
        className="flex items-center justify-center"
        style={{
          background: `linear-gradient(160deg, ${NAVY} 0%, #12304d 50%, ${NAVY} 100%)`,
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
              className="inline-block rounded-lg px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_0_16px_rgba(233,30,99,0.4)]"
              style={{ backgroundColor: PINK, color: WHITE }}
            >
              Join Now
            </a>
            <a
              href="/about-newif"
              className="inline-block rounded-lg px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_0_16px_rgba(212,175,55,0.4)]"
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
