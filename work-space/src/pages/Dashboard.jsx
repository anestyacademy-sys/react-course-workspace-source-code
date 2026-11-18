import { Link } from "react-router-dom";

// The signed-in view: write a new post, and manage the ones already there.
function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-ink font-sans text-cream">
      {/* ---------------- header (signed-in variant) ---------------- */}
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
            {/* Dashboard is the active pill on this page */}
            <Link
              to="/dashboard"
              className="rounded-full bg-white/7 px-4 py-2.25 text-[14px] font-medium text-cream no-underline transition-all duration-160"
            >
              Dashboard
            </Link>

            {/* signed-in user, instead of the Sign in button */}
            <span className="ml-3 flex items-center gap-2.5">
              <span className="brand-gradient flex size-8 items-center justify-center rounded-full font-display text-[13px] font-semibold text-white">
                M
              </span>
              <span className="text-[14px] font-medium">Mira</span>
            </span>

            <Link
              to="/"
              className="ml-1 rounded-full border border-white/12 bg-white/6 px-4 py-2.25 text-[14px] font-semibold whitespace-nowrap text-cream no-underline transition-colors duration-160 hover:bg-white/11"
            >
              Sign out
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-65 left-1/2 h-140 w-215 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.28)_0%,rgba(11,10,26,0)_70%)]" />

          <div className="relative mx-auto max-w-content px-10 pt-19 pb-24">
            {/* ---------------- page head ---------------- */}
            <div className="mb-10">
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-violet-soft">
                Your desk
              </p>

              <h1 className="mb-4 font-display text-[50px] leading-[1.08] font-bold tracking-[-0.035em]">
                Write something <span className="headline-gradient">new</span>
              </h1>

              <p className="max-w-[54ch] text-[19px] leading-[1.7] text-cream/66">
                Everything you have written lives here. Drafts stay private until you
                publish them.
              </p>
            </div>

            {/* ---------------- stats ---------------- */}
            <div className="mb-12 grid grid-cols-3 gap-4">
              <div className="rounded-[18px] border border-white/8 bg-surface px-5 py-5.5">
                <p className="mb-1.5 bg-linear-to-br from-[#A78BFA] to-pink bg-clip-text font-display text-[30px] font-bold text-transparent">
                  3
                </p>
                <p className="text-[13px] text-cream/60">Published</p>
              </div>

              <div className="rounded-[18px] border border-white/8 bg-surface px-5 py-5.5">
                <p className="mb-1.5 bg-linear-to-br from-pink to-orange bg-clip-text font-display text-[30px] font-bold text-transparent">
                  2
                </p>
                <p className="text-[13px] text-cream/60">Drafts</p>
              </div>

              <div className="rounded-[18px] border border-white/8 bg-surface px-5 py-5.5">
                <p className="mb-1.5 bg-linear-to-br from-violet to-[#A78BFA] bg-clip-text font-display text-[30px] font-bold text-transparent">
                  3.1k
                </p>
                <p className="text-[13px] text-cream/60">Readers a month</p>
              </div>
            </div>

            {/* ---------------- composer ---------------- */}
            <div className="mb-14 rounded-[26px] bg-[linear-gradient(140deg,rgba(124,92,255,0.6),rgba(236,72,153,0.4)_55%,rgba(255,255,255,0.06))] p-px">
              <div className="rounded-[25px] bg-surface p-9.5">
                <h2 className="mb-7 font-display text-[24px] font-semibold tracking-[-0.02em]">
                  New post
                </h2>

                <form className="flex flex-col gap-5">
                  <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                    Title
                    <input
                      type="text"
                      placeholder="The state you don't need"
                      className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                    />
                  </label>

                  <div className="grid grid-cols-3 gap-4">
                    <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                      Slug
                      <input
                        type="text"
                        placeholder="state-you-dont-need"
                        className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                      />
                    </label>

                    <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                      Tag
                      <input
                        type="text"
                        placeholder="React"
                        className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                      />
                    </label>

                    <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                      Read time
                      <input
                        type="text"
                        placeholder="8 min"
                        className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                    Excerpt
                    <textarea
                      rows={2}
                      placeholder="One or two sentences for the card."
                      className="resize-y rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] leading-[1.6] text-cream outline-none transition-colors duration-160 focus:border-violet"
                    />
                  </label>

                  <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                    Body
                    <textarea
                      rows={10}
                      placeholder="Write the post. One paragraph per line."
                      className="resize-y rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] leading-[1.7] text-cream outline-none transition-colors duration-160 focus:border-violet"
                    />
                  </label>

                  <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                    Pull quote
                    <input
                      type="text"
                      placeholder="The one line people will remember."
                      className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                    />
                  </label>

                  {/* cover image drop area */}
                  <div className="flex flex-col gap-2.25">
                    <p className="text-[13px] font-semibold text-cream/80">Cover image</p>
                    <div className="placeholder-fill flex h-36 items-center justify-center rounded-[14px] border border-dashed border-white/12">
                      <p className="text-[12px] uppercase tracking-[0.14em] text-cream/34">
                        Drop an image, or click to browse
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-3.5">
                    <button
                      type="submit"
                      className="brand-gradient inline-flex cursor-pointer items-center justify-center rounded-full px-7.5 py-4 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(124,92,255,0.38)] transition-transform duration-160 hover:-translate-y-0.5"
                    >
                      Publish post
                    </button>

                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/6 px-7.5 py-4 text-[15px] font-semibold text-cream transition-colors duration-160 hover:bg-white/11"
                    >
                      Save as draft
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ---------------- existing posts ---------------- */}
            <div className="mb-7.5 flex items-center justify-between">
              <h2 className="font-display text-[27px] font-semibold tracking-[-0.02em]">
                Your posts
              </h2>
              <p className="text-[14px] text-cream/45">5 posts &middot; 2 drafts</p>
            </div>

            <div className="flex flex-col gap-4">
              {/* row 1 */}
              <div className="flex items-center justify-between gap-6 rounded-[20px] border border-white/8 bg-surface px-6 py-5 transition-all duration-200 hover:border-violet/50">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="placeholder-fill size-14 shrink-0 rounded-xl border border-white/8" />
                  <div className="min-w-0">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                        Habits
                      </span>
                      <span className="rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                        Published
                      </span>
                    </div>
                    <h3 className="font-display text-[18px] font-semibold tracking-[-0.015em]">
                      Learning in public, quietly
                    </h3>
                    <p className="mt-1 text-[13px] text-cream/40">
                      Sep 14, 2026 &middot; 6 min read &middot; 812 views
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    to="/dashboard"
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[13px] font-semibold text-cream no-underline transition-colors duration-160 hover:bg-white/11"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="cursor-pointer rounded-full border border-pink/34 bg-pink/12 px-4 py-2 text-[13px] font-semibold text-[#F9A8D4] transition-colors duration-160 hover:bg-pink/20"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* row 2 */}
              <div className="flex items-center justify-between gap-6 rounded-[20px] border border-white/8 bg-surface px-6 py-5 transition-all duration-200 hover:border-violet/50">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="placeholder-fill size-14 shrink-0 rounded-xl border border-white/8" />
                  <div className="min-w-0">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                        React
                      </span>
                      <span className="rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                        Published
                      </span>
                    </div>
                    <h3 className="font-display text-[18px] font-semibold tracking-[-0.015em]">
                      The state you don&apos;t need
                    </h3>
                    <p className="mt-1 text-[13px] text-cream/40">
                      Sep 2, 2026 &middot; 8 min read &middot; 412 views
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    to="/dashboard"
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[13px] font-semibold text-cream no-underline transition-colors duration-160 hover:bg-white/11"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="cursor-pointer rounded-full border border-pink/34 bg-pink/12 px-4 py-2 text-[13px] font-semibold text-[#F9A8D4] transition-colors duration-160 hover:bg-pink/20"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* row 3 */}
              <div className="flex items-center justify-between gap-6 rounded-[20px] border border-white/8 bg-surface px-6 py-5 transition-all duration-200 hover:border-violet/50">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="placeholder-fill size-14 shrink-0 rounded-xl border border-white/8" />
                  <div className="min-w-0">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                        Debugging
                      </span>
                      <span className="rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                        Published
                      </span>
                    </div>
                    <h3 className="font-display text-[18px] font-semibold tracking-[-0.015em]">
                      How to actually read an error message
                    </h3>
                    <p className="mt-1 text-[13px] text-cream/40">
                      Aug 21, 2026 &middot; 5 min read &middot; 1.2k views
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    to="/dashboard"
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[13px] font-semibold text-cream no-underline transition-colors duration-160 hover:bg-white/11"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="cursor-pointer rounded-full border border-pink/34 bg-pink/12 px-4 py-2 text-[13px] font-semibold text-[#F9A8D4] transition-colors duration-160 hover:bg-pink/20"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* row 4 — draft */}
              <div className="flex items-center justify-between gap-6 rounded-[20px] border border-white/8 bg-surface px-6 py-5 transition-all duration-200 hover:border-violet/50">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="placeholder-fill size-14 shrink-0 rounded-xl border border-white/8" />
                  <div className="min-w-0">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                        Tooling
                      </span>
                      <span className="rounded-full border border-orange/34 bg-orange/14 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FDBA74]">
                        Draft
                      </span>
                    </div>
                    <h3 className="font-display text-[18px] font-semibold tracking-[-0.015em]">
                      In praise of small tools
                    </h3>
                    <p className="mt-1 text-[13px] text-cream/40">
                      Edited Aug 7, 2026 &middot; 4 min read
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    to="/dashboard"
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[13px] font-semibold text-cream no-underline transition-colors duration-160 hover:bg-white/11"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="cursor-pointer rounded-full border border-pink/34 bg-pink/12 px-4 py-2 text-[13px] font-semibold text-[#F9A8D4] transition-colors duration-160 hover:bg-pink/20"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* row 5 — draft */}
              <div className="flex items-center justify-between gap-6 rounded-[20px] border border-white/8 bg-surface px-6 py-5 transition-all duration-200 hover:border-violet/50">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="placeholder-fill size-14 shrink-0 rounded-xl border border-white/8" />
                  <div className="min-w-0">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="rounded-full border border-violet/30 bg-violet/16 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-soft">
                        Learning
                      </span>
                      <span className="rounded-full border border-orange/34 bg-orange/14 px-2.75 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FDBA74]">
                        Draft
                      </span>
                    </div>
                    <h3 className="font-display text-[18px] font-semibold tracking-[-0.015em]">
                      Rebuild the thing you already understand
                    </h3>
                    <p className="mt-1 text-[13px] text-cream/40">
                      Edited Jul 25, 2026 &middot; 7 min read
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    to="/dashboard"
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[13px] font-semibold text-cream no-underline transition-colors duration-160 hover:bg-white/11"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="cursor-pointer rounded-full border border-pink/34 bg-pink/12 px-4 py-2 text-[13px] font-semibold text-[#F9A8D4] transition-colors duration-160 hover:bg-pink/20"
                  >
                    Delete
                  </button>
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

export default Dashboard;
