import { Link } from "react-router-dom";

// One hardcoded article. Every card in the site points at /articles/:slug,
// and this page is what they all land on — swap the text below by hand.
function ArticleDetail() {
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
            {/* an article lives under Articles, so that pill stays active */}
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
        <article className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-75 left-1/2 h-150 w-225 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.2)_0%,rgba(124,92,255,0.14)_40%,rgba(11,10,26,0)_72%)]" />

          {/* ---------------- article header ---------------- */}
          <div className="relative mx-auto max-w-200 px-10 pt-11 text-center">
            <Link
              to="/articles"
              className="mb-7.5 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-semibold text-cream/75 no-underline transition-colors duration-160 hover:bg-white/10"
            >
              &larr; All articles
            </Link>

            <div className="mb-5.5 flex justify-center gap-2">
              <span className="brand-gradient inline-flex items-center rounded-full px-3 py-1.25 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                React
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-3 py-1.25 text-[11px] font-semibold text-cream/70">
                8 min read
              </span>
            </div>

            <h1 className="mb-5 font-display text-[48px] leading-[1.1] font-bold tracking-[-0.035em] text-pretty">
              The state you don&apos;t need
            </h1>

            <p className="mb-8 text-[19px] leading-[1.7] text-cream/64">
              Half the bugs I write come from storing something I could have derived. A
              short tour of the ones that keep catching me.
            </p>

            <p className="pb-10 text-[13px] text-cream/50">Sep 2, 2026</p>
          </div>

          {/* ---------------- hero image ---------------- */}
          <div className="relative mx-auto max-w-250 px-10">
            <div className="placeholder-fill flex aspect-21/9 items-center justify-center rounded-[22px] border border-white/8">
              <p className="text-[12px] uppercase tracking-[0.14em] text-cream/30">
                Hero image
              </p>
            </div>
          </div>

          {/* ---------------- body ---------------- */}
          <div className="relative mx-auto max-w-180 px-10 pt-13">
            {/* lede */}
            <p className="mb-6.5 text-[20px] leading-[1.8] text-cream/92">
              Every piece of state is a promise to keep two things in sync. Store a list
              and its length, and you have signed up to update both, forever, in every
              branch. Derive the length instead and the promise disappears.
            </p>

            <p className="mb-6.5 text-[18px] leading-[1.85] text-cream/78">
              The version of this I hit most often is the filtered copy. You have items,
              you have a query, and it feels natural to keep filteredItems next to them.
              Now three things must agree. Compute the filtered list where you render it
              and there is only one source left to be wrong.
            </p>

            <p className="mb-6.5 text-[18px] leading-[1.85] text-cream/78">
              The second is the mirrored prop. A value arrives from above, you copy it
              into local state so you can edit it, and then the parent changes it and your
              copy quietly stops matching. Sometimes that is what you want. Usually it is
              a bug you will find in a week.
            </p>

            {/* pull quote */}
            <div className="my-10 rounded-[20px] border border-violet/30 bg-[linear-gradient(135deg,rgba(124,92,255,0.16),rgba(236,72,153,0.12))] px-7.5 py-7">
              <p className="font-display text-[23px] leading-[1.45] font-medium tracking-[-0.015em]">
                Every piece of state is a promise to keep two things in sync.
              </p>
            </div>

            <p className="text-[18px] leading-[1.85] text-cream/78">
              The test I use before adding state: can I write this as a function of what I
              already have? If yes, write the function. It is fewer lines, and it cannot
              drift.
            </p>
          </div>

          {/* ---------------- read next ---------------- */}
          <div className="relative mx-auto max-w-content px-10 pt-18 pb-24">
            <h2 className="mb-6 font-display text-[24px] font-semibold tracking-[-0.02em]">
              Read next
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <Link
                to="/articles/learning-in-public"
                className="block rounded-[20px] border border-white/8 bg-surface p-6 text-cream no-underline transition-all duration-200 hover:-translate-y-1 hover:border-violet/50"
              >
                <span className="mb-3 inline-block rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                  Habits
                </span>
                <h3 className="mb-2.25 font-display text-[21px] leading-[1.28] font-semibold tracking-[-0.02em]">
                  Learning in public, quietly
                </h3>
                <p className="text-[15px] leading-[1.6] text-cream/60">
                  Sharing work early is supposed to be terrifying. Mostly it is just slow,
                  and that turns out to be the useful part.
                </p>
              </Link>

              <Link
                to="/articles/reading-error-messages"
                className="block rounded-[20px] border border-white/8 bg-surface p-6 text-cream no-underline transition-all duration-200 hover:-translate-y-1 hover:border-violet/50"
              >
                <span className="mb-3 inline-block rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1.25 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                  Debugging
                </span>
                <h3 className="mb-2.25 font-display text-[21px] leading-[1.28] font-semibold tracking-[-0.02em]">
                  How to actually read an error message
                </h3>
                <p className="text-[15px] leading-[1.6] text-cream/60">
                  The stack trace is not punishment. It is the most specific documentation
                  you will ever get about your own code.
                </p>
              </Link>
            </div>
          </div>
        </article>
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

export default ArticleDetail;
