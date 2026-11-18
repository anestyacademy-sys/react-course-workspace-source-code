import { Link } from "react-router-dom";

function Home() {
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
            {/* Home is the active pill on this page */}
            <Link
              to="/"
              className="rounded-full bg-white/7 px-4 py-2.25 text-[14px] font-medium text-cream no-underline transition-all duration-160"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="rounded-full px-4 py-2.25 text-[14px] font-medium text-cream/60 no-underline transition-all duration-160 hover:text-cream"
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="rounded-full px-4 py-2.25 text-[14px] font-medium text-cream/60 no-underline transition-all duration-160 hover:text-cream"
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
        {/* ---------------- hero ---------------- */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-65 left-1/2 h-155 w-225 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.34)_0%,rgba(236,72,153,0.16)_42%,rgba(11,10,26,0)_72%)]" />

          <div className="relative mx-auto max-w-content px-10 pt-23 pb-16 text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.75 pr-4 pl-2 text-[13px] text-cream/80">
              <span className="brand-gradient rounded-full px-2.5 py-0.75 text-[11px] font-bold uppercase tracking-[0.06em] text-white">
                New
              </span>
              A personal blog about learning to build
            </div>

            <h1 className="mx-auto mt-7 mb-6 max-w-[18ch] font-display text-[68px] leading-[1.06] font-bold tracking-[-0.035em] text-pretty">
              Notes on building things{" "}
              <span className="bg-[linear-gradient(100deg,#A78BFA,#EC4899_55%,#FB923C)] bg-clip-text text-transparent">
                slowly
              </span>
            </h1>

            <p className="mx-auto mb-9 max-w-[58ch] text-[19px] leading-[1.7] text-cream/66">
              I write about learning in public &mdash; mostly code, sometimes the quieter
              parts of making software. New posts land most weeks, and none of them are
              finished.
            </p>

            <div className="flex justify-center gap-3.5">
              <Link
                to="/articles"
                className="brand-gradient inline-flex items-center justify-center rounded-full px-7.5 py-3.75 text-[15px] font-semibold text-white no-underline shadow-[0_12px_34px_rgba(124,92,255,0.42)] transition-transform duration-160 hover:-translate-y-0.5"
              >
                Start reading &rarr;
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-7.5 py-3.75 text-[15px] font-semibold text-cream no-underline transition-colors duration-160 hover:bg-white/11"
              >
                Who writes this
              </Link>
            </div>
          </div>

       
        </section>

        {/* ---------------- featured post ---------------- */}
        <section className="mx-auto max-w-content px-10 pt-19 pb-5">
          <Link
            to="/articles/learning-in-public"
            className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center gap-10 rounded-3xl border border-white/8 bg-surface p-6.5 text-cream no-underline transition-all duration-200 hover:border-violet/50 hover:shadow-[0_20px_50px_rgba(124,92,255,0.18)]"
          >
            <div className="placeholder-fill flex aspect-16/10 items-end rounded-2xl border border-white/8 p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-cream/34">
                Cover image
              </p>
            </div>

            <div className="pr-3.5">
              <div className="mb-4 flex gap-2">
                <span className="brand-gradient inline-flex items-center rounded-full px-3 py-1.25 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                  Latest
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-3 py-1.25 text-[11px] font-semibold uppercase tracking-[0.06em] text-cream/70">
                  Habits
                </span>
              </div>

              <h2 className="mb-3.5 font-display text-[36px] leading-[1.16] font-semibold tracking-tight text-pretty">
                Learning in public, quietly
              </h2>

              <p className="mb-5.5 text-[17px] leading-[1.65] text-cream/64">
                Sharing work early is supposed to be terrifying. Mostly it is just slow,
                and that turns out to be the useful part.
              </p>

              <p className="text-[14px] text-cream/45">Sep 14, 2026 &middot; 6 min read</p>
            </div>
          </Link>
        </section>

        {/* ---------------- more from the blog ---------------- */}
        <section className="mx-auto max-w-content px-10 pt-11 pb-23">
          <div className="mb-7.5 flex items-center justify-between">
            <h2 className="font-display text-[27px] font-semibold tracking-[-0.02em]">
              More from the blog
            </h2>
            <Link
              to="/articles"
              className="text-[14px] font-semibold text-violet-soft no-underline transition-colors duration-160 hover:text-[#F0ABFC]"
            >
              See all articles &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* card 1 */}
            <Link
              to="/articles/state-you-dont-need"
              className="flex flex-col overflow-hidden rounded-[20px] border border-white/8 bg-surface text-cream no-underline transition-all duration-200 hover:-translate-y-1.25 hover:border-pink/45 hover:shadow-[0_18px_44px_rgba(236,72,153,0.16)]"
            >
              <div className="aspect-video border-b border-white/7 bg-[linear-gradient(140deg,#221B45,#35203F)]" />
              <div className="px-5.5 pt-5 pb-6">
                <span className="mb-3.25 inline-block rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                  React
                </span>
                <h3 className="mb-2.5 font-display text-[20px] leading-[1.3] font-semibold tracking-[-0.015em]">
                  The state you don&apos;t need
                </h3>
                <p className="mb-4.5 text-[14px] leading-[1.62] text-cream/60">
                  Half the bugs I write come from storing something I could have derived.
                  A short tour of the ones that keep catching me.
                </p>
                <p className="text-[12px] text-cream/40">Sep 2, 2026 &middot; 8 min</p>
              </div>
            </Link>

            {/* card 2 */}
            <Link
              to="/articles/reading-error-messages"
              className="flex flex-col overflow-hidden rounded-[20px] border border-white/8 bg-surface text-cream no-underline transition-all duration-200 hover:-translate-y-1.25 hover:border-pink/45 hover:shadow-[0_18px_44px_rgba(236,72,153,0.16)]"
            >
              <div className="aspect-video border-b border-white/7 bg-[linear-gradient(140deg,#221B45,#35203F)]" />
              <div className="px-5.5 pt-5 pb-6">
                <span className="mb-3.25 inline-block rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                  Debugging
                </span>
                <h3 className="mb-2.5 font-display text-[20px] leading-[1.3] font-semibold tracking-[-0.015em]">
                  How to actually read an error message
                </h3>
                <p className="mb-4.5 text-[14px] leading-[1.62] text-cream/60">
                  The stack trace is not punishment. It is the most specific documentation
                  you will ever get about your own code.
                </p>
                <p className="text-[12px] text-cream/40">Aug 21, 2026 &middot; 5 min</p>
              </div>
            </Link>

            {/* card 3 */}
            <Link
              to="/articles/small-tools"
              className="flex flex-col overflow-hidden rounded-[20px] border border-white/8 bg-surface text-cream no-underline transition-all duration-200 hover:-translate-y-1.25 hover:border-pink/45 hover:shadow-[0_18px_44px_rgba(236,72,153,0.16)]"
            >
              <div className="aspect-video border-b border-white/7 bg-[linear-gradient(140deg,#221B45,#35203F)]" />
              <div className="px-5.5 pt-5 pb-6">
                <span className="mb-3.25 inline-block rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                  Tooling
                </span>
                <h3 className="mb-2.5 font-display text-[20px] leading-[1.3] font-semibold tracking-[-0.015em]">
                  In praise of small tools
                </h3>
                <p className="mb-4.5 text-[14px] leading-[1.62] text-cream/60">
                  A forty-line script I wrote in an afternoon has saved me more time than
                  every productivity app I have installed.
                </p>
                <p className="text-[12px] text-cream/40">Aug 7, 2026 &middot; 4 min</p>
              </div>
            </Link>
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

export default Home;
