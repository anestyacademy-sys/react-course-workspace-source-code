import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-ink font-sans text-cream">
      {/* ---------------- header ---------------- */}
      <header className="sticky top-0 z-30 border-b border-white/7 bg-ink/82 backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-content items-center justify-between gap-7 px-10 py-4">
          <Link to="/" className="flex items-center gap-2.75 text-cream no-underline">
            <span className="brand-gradient flex size-8 items-center justify-center rounded-[10px] font-display text-[15px] font-bold text-white shadow-[0_6px_20px_rgba(124,92,255,0.45)]">
              F
            </span>
            <span className="font-display text-[18px] font-semibold tracking-[-0.01em]">
              fieldnotes
            </span>
          </Link>

          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className="rounded-full px-4 py-2.25 text-[14px] font-medium text-cream/60 no-underline transition-all duration-160 hover:text-cream"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="rounded-full px-4 py-2.25 text-[14px] font-medium text-cream/60 no-underline transition-all duration-160 hover:text-cream"
            >
              Articles
            </Link>
            {/* About is the active pill on this page */}
            <Link
              to="/about"
              className="rounded-full bg-white/7 px-4 py-2.25 text-[14px] font-medium text-cream no-underline transition-all duration-160"
            >
              About
            </Link>
            <Link
              to="/login"
              className="brand-gradient ml-2 rounded-full px-5.5 py-2.75 text-[14px] font-semibold whitespace-nowrap text-white no-underline shadow-[0_8px_24px_rgba(124,92,255,0.4)] transition-transform duration-160 hover:-translate-y-0.5"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-65 -right-30 h-135 w-190 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.22)_0%,rgba(11,10,26,0)_70%)]" />

          <div className="relative mx-auto max-w-content px-10 pt-19 pb-24">
            <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] items-start gap-16">
              {/* portrait, inside a 1px gradient border */}
              <div className="rounded-[26px] bg-[linear-gradient(140deg,rgba(124,92,255,0.8),rgba(236,72,153,0.5)_55%,rgba(251,146,60,0.35))] p-px">
                <div className="overflow-hidden rounded-[25px] bg-surface">
                  <div className="flex aspect-4/5 items-center justify-center bg-[linear-gradient(150deg,#241C4A,#3A1B3D)]">
                    <p className="text-[12px] uppercase tracking-[0.16em] text-cream/34">
                      Portrait
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-violet-soft">
                  About
                </p>

                <h1 className="mb-6.5 font-display text-[50px] leading-[1.08] font-bold tracking-[-0.035em]">
                  Hello, I&rsquo;m <span className="headline-gradient">Mira</span>
                </h1>

                <p className="mb-5.5 text-[19px] leading-[1.78] text-cream/80">
                  I&rsquo;m a front-end developer in Pune. I spend my days on design
                  systems and my evenings rebuilding things I already understand, which is
                  how I learn anything at all.
                </p>

                <p className="mb-10 text-[19px] leading-[1.78] text-cream/80">
                  This blog is where those evenings end up: half-finished experiments,
                  notes on the tools I use, and the occasional thing that actually worked.
                </p>

                {/* Placeholder figures — swap for real numbers or delete the row. */}
                <div className="mb-10 grid grid-cols-3 gap-4">
                  <div className="rounded-[18px] border border-white/8 bg-surface px-5 py-5.5">
                    <p className="mb-1.5 bg-linear-to-br from-[#A78BFA] to-pink bg-clip-text font-display text-[30px] font-bold text-transparent">
                      7
                    </p>
                    <p className="text-[13px] text-cream/60">Years writing</p>
                  </div>

                  <div className="rounded-[18px] border border-white/8 bg-surface px-5 py-5.5">
                    <p className="mb-1.5 bg-linear-to-br from-pink to-orange bg-clip-text font-display text-[30px] font-bold text-transparent">
                      142
                    </p>
                    <p className="text-[13px] text-cream/60">Posts published</p>
                  </div>

                  <div className="rounded-[18px] border border-white/8 bg-surface px-5 py-5.5">
                    <p className="mb-1.5 bg-linear-to-br from-violet to-[#A78BFA] bg-clip-text font-display text-[30px] font-bold text-transparent">
                      3.1k
                    </p>
                    <p className="text-[13px] text-cream/60">Readers a month</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2.25 text-[13px] font-medium text-cream/82">
                    React
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2.25 text-[13px] font-medium text-cream/82">
                    Design systems
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2.25 text-[13px] font-medium text-cream/82">
                    CSS
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2.25 text-[13px] font-medium text-cream/82">
                    Teaching
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- footer ---------------- */}
      <footer className="border-t border-white/8 bg-ink-soft">
        <div className="mx-auto grid max-w-content grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] gap-13 px-10 pt-13 pb-8.5">
          <div>
            <div className="mb-3.5 flex items-center gap-2.75">
              <span className="brand-gradient flex size-7.5 items-center justify-center rounded-[10px] font-display text-[14px] font-bold text-white">
                F
              </span>
              <span className="font-display text-[17px] font-semibold">fieldnotes</span>
            </div>
            <p className="max-w-[36ch] text-[15px] leading-[1.65] text-cream/55">
              A personal blog by Mira Advani. Written slowly, published anyway.
            </p>
          </div>

          <div className="flex flex-col gap-2.75">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-cream/40">
              Pages
            </p>
            <Link
              to="/"
              className="text-[15px] text-cream/75 no-underline transition-colors duration-160 hover:text-cream"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="text-[15px] text-cream/75 no-underline transition-colors duration-160 hover:text-cream"
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="text-[15px] text-cream/75 no-underline transition-colors duration-160 hover:text-cream"
            >
              About
            </Link>
          </div>

          <div className="flex flex-col gap-2.75">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-cream/40">
              Elsewhere
            </p>
            <p className="text-[15px] text-cream/75">GitHub</p>
            <p className="text-[15px] text-cream/75">Bluesky</p>
            <p className="text-[15px] text-cream/75">RSS</p>
          </div>
        </div>

        <div className="mx-auto flex max-w-content justify-between border-t border-white/7 px-10 pt-4.5 pb-7.5 text-[13px] text-cream/42">
          <p>&copy; 2026 Mira Advani</p>
          <p>Built while learning React</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
