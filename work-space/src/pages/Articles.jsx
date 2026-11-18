import { Link } from "react-router-dom";

function Articles() {
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
            {/* Articles is the active pill on this page */}
            <Link
              to="/articles"
              className="rounded-full bg-white/7 px-4 py-2.25 text-[14px] font-medium text-cream no-underline transition-all duration-160"
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
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-70 left-1/2 h-140 w-205 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.26)_0%,rgba(11,10,26,0)_70%)]" />

          <div className="relative mx-auto max-w-content px-10 pt-19 pb-24">
            <div className="mb-12 text-center">
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-violet-soft">
                The archive
              </p>

              <h1 className="mx-auto mb-4 max-w-[20ch] font-display text-[54px] leading-[1.08] font-bold tracking-[-0.035em]">
                Everything I&rsquo;ve <span className="headline-gradient">written</span>
              </h1>

              <p className="text-[16px] text-cream/55">5 posts, oldest at the bottom</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* post 1 */}
              <Link
                to="/articles/learning-in-public"
                className="flex flex-col overflow-hidden rounded-[20px] border border-white/8 bg-surface text-cream no-underline transition-all duration-200 hover:-translate-y-1.25 hover:border-violet/50 hover:shadow-[0_18px_44px_rgba(124,92,255,0.16)]"
              >
                <div className="placeholder-fill aspect-video border-b border-white/7" />
                <div className="flex flex-1 flex-col px-5.5 pt-5 pb-6">
                  <span className="mb-3.25 inline-block self-start rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                    Habits
                  </span>
                  <h2 className="mb-2.5 font-display text-[21px] leading-[1.28] font-semibold tracking-[-0.02em]">
                    Learning in public, quietly
                  </h2>
                  <p className="mb-4.5 text-[14px] leading-[1.62] text-cream/60">
                    Sharing work early is supposed to be terrifying. Mostly it is just
                    slow, and that turns out to be the useful part.
                  </p>
                  <p className="mt-auto text-[12px] text-cream/40">
                    Sep 14, 2026 &middot; 6 min read
                  </p>
                </div>
              </Link>

              {/* post 2 */}
              <Link
                to="/articles/state-you-dont-need"
                className="flex flex-col overflow-hidden rounded-[20px] border border-white/8 bg-surface text-cream no-underline transition-all duration-200 hover:-translate-y-1.25 hover:border-violet/50 hover:shadow-[0_18px_44px_rgba(124,92,255,0.16)]"
              >
                <div className="placeholder-fill aspect-video border-b border-white/7" />
                <div className="flex flex-1 flex-col px-5.5 pt-5 pb-6">
                  <span className="mb-3.25 inline-block self-start rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                    React
                  </span>
                  <h2 className="mb-2.5 font-display text-[21px] leading-[1.28] font-semibold tracking-[-0.02em]">
                    The state you don&apos;t need
                  </h2>
                  <p className="mb-4.5 text-[14px] leading-[1.62] text-cream/60">
                    Half the bugs I write come from storing something I could have
                    derived. A short tour of the ones that keep catching me.
                  </p>
                  <p className="mt-auto text-[12px] text-cream/40">
                    Sep 2, 2026 &middot; 8 min read
                  </p>
                </div>
              </Link>

              {/* post 3 */}
              <Link
                to="/articles/reading-error-messages"
                className="flex flex-col overflow-hidden rounded-[20px] border border-white/8 bg-surface text-cream no-underline transition-all duration-200 hover:-translate-y-1.25 hover:border-violet/50 hover:shadow-[0_18px_44px_rgba(124,92,255,0.16)]"
              >
                <div className="placeholder-fill aspect-video border-b border-white/7" />
                <div className="flex flex-1 flex-col px-5.5 pt-5 pb-6">
                  <span className="mb-3.25 inline-block self-start rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                    Debugging
                  </span>
                  <h2 className="mb-2.5 font-display text-[21px] leading-[1.28] font-semibold tracking-[-0.02em]">
                    How to actually read an error message
                  </h2>
                  <p className="mb-4.5 text-[14px] leading-[1.62] text-cream/60">
                    The stack trace is not punishment. It is the most specific
                    documentation you will ever get about your own code.
                  </p>
                  <p className="mt-auto text-[12px] text-cream/40">
                    Aug 21, 2026 &middot; 5 min read
                  </p>
                </div>
              </Link>

              {/* post 4 */}
              <Link
                to="/articles/small-tools"
                className="flex flex-col overflow-hidden rounded-[20px] border border-white/8 bg-surface text-cream no-underline transition-all duration-200 hover:-translate-y-1.25 hover:border-violet/50 hover:shadow-[0_18px_44px_rgba(124,92,255,0.16)]"
              >
                <div className="placeholder-fill aspect-video border-b border-white/7" />
                <div className="flex flex-1 flex-col px-5.5 pt-5 pb-6">
                  <span className="mb-3.25 inline-block self-start rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                    Tooling
                  </span>
                  <h2 className="mb-2.5 font-display text-[21px] leading-[1.28] font-semibold tracking-[-0.02em]">
                    In praise of small tools
                  </h2>
                  <p className="mb-4.5 text-[14px] leading-[1.62] text-cream/60">
                    A forty-line script I wrote in an afternoon has saved me more time
                    than every productivity app I have installed.
                  </p>
                  <p className="mt-auto text-[12px] text-cream/40">
                    Aug 7, 2026 &middot; 4 min read
                  </p>
                </div>
              </Link>

              {/* post 5 */}
              <Link
                to="/articles/rebuilding-things"
                className="flex flex-col overflow-hidden rounded-[20px] border border-white/8 bg-surface text-cream no-underline transition-all duration-200 hover:-translate-y-1.25 hover:border-violet/50 hover:shadow-[0_18px_44px_rgba(124,92,255,0.16)]"
              >
                <div className="placeholder-fill aspect-video border-b border-white/7" />
                <div className="flex flex-1 flex-col px-5.5 pt-5 pb-6">
                  <span className="mb-3.25 inline-block self-start rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                    Learning
                  </span>
                  <h2 className="mb-2.5 font-display text-[21px] leading-[1.28] font-semibold tracking-[-0.02em]">
                    Rebuild the thing you already understand
                  </h2>
                  <p className="mb-4.5 text-[14px] leading-[1.62] text-cream/60">
                    The fastest way I know to find the gaps in your knowledge is to write
                    something you are sure you could write.
                  </p>
                  <p className="mt-auto text-[12px] text-cream/40">
                    Jul 25, 2026 &middot; 7 min read
                  </p>
                </div>
              </Link>
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

export default Articles;
