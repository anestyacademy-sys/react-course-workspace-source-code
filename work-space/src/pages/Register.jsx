import { Link } from "react-router-dom";

function Register() {
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
          <div className="pointer-events-none absolute -top-65 left-1/2 h-140 w-215 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.24)_0%,rgba(124,92,255,0.14)_40%,rgba(11,10,26,0)_72%)]" />

          <div className="relative mx-auto max-w-content px-10 pt-23 pb-24">
            <div className="mx-auto max-w-[480px]">
              <div className="mb-9 text-center">
                <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-violet-soft">
                  Get started
                </p>

                <h1 className="mb-4 font-display text-[44px] leading-[1.08] font-bold tracking-[-0.035em]">
                  Create your <span className="headline-gradient">account</span>
                </h1>

                <p className="text-[17px] leading-[1.65] text-cream/64">
                  Somewhere to keep the notes you have not finished yet.
                </p>
              </div>

              {/* form card, inside a 1px gradient border */}
              <div className="rounded-[26px] bg-[linear-gradient(140deg,rgba(124,92,255,0.6),rgba(236,72,153,0.4)_55%,rgba(255,255,255,0.06))] p-px">
                <div className="rounded-[25px] bg-surface p-9.5">
                  <form className="flex flex-col gap-5">
                    <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                      Name
                      <input
                        type="text"
                        placeholder="Mira Advani"
                        className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                      />
                    </label>

                    <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                      Email
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                      />
                    </label>

                    <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                      Password
                      <input
                        type="password"
                        placeholder="At least 8 characters"
                        className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                      />
                    </label>

                    <label className="flex flex-col gap-2.25 text-[13px] font-semibold text-cream/80">
                      Confirm password
                      <input
                        type="password"
                        placeholder="Type it once more"
                        className="rounded-[14px] border border-white/12 bg-field px-4 py-3.5 font-sans text-[16px] text-cream outline-none transition-colors duration-160 focus:border-violet"
                      />
                    </label>

                    <label className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-cream/70">
                      <input
                        type="checkbox"
                        className="mt-1 size-4 shrink-0 rounded-[5px] border border-white/20 bg-field accent-violet"
                      />
                      I agree to the terms and the privacy policy.
                    </label>

                    <button
                      type="submit"
                      className="brand-gradient mt-1 inline-flex cursor-pointer items-center justify-center rounded-full px-7.5 py-4 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(124,92,255,0.38)] transition-transform duration-160 hover:-translate-y-0.5"
                    >
                      Create account
                    </button>
                  </form>
                </div>
              </div>

              <p className="mt-7 text-center text-[15px] text-cream/60">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-violet-soft no-underline transition-colors duration-160 hover:text-[#F0ABFC]"
                >
                  Sign in &rarr;
                </Link>
              </p>
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

export default Register;
