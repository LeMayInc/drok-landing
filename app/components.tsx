import type { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════
   ICONS — reused from docs site ICON_MAP
   ═══════════════════════════════════════════════════════════════ */

function IconCodeBranch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v12m0 0a3 3 0 103 3m-3-3a3 3 0 01-3 3m12-9a3 3 0 100-6 3 3 0 000 6zm0 0v3a3 3 0 01-3 3H9" />
    </svg>
  );
}

function IconCodeCompare({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function IconPipeline({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 15.75a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 15.75V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function IconSearch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function IconBrain({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

function IconBox({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}

function IconDesktop({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
  );
}

function IconTerminal({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconLock({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function IconWrench({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function DrokLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#C8A87C" />
      <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fill="#0A0A0A" fontSize="22" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">D</text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 1: NAVBAR
   ═══════════════════════════════════════════════════════════════ */

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-16 flex items-center justify-between px-6 lg:px-10 border-b border-border bg-[#0A0A0A]/80 backdrop-blur-xl">
      <a href="/" className="flex items-center gap-2.5">
        <DrokLogo />
        <span className="text-[15px] font-semibold text-neutral-100 tracking-tight">
          Drok
        </span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">Features</a>
        <a href="#security" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">Security</a>
        <a href="#architecture" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">Architecture</a>
        <a href="#pricing" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">Pricing</a>
        <a href="https://docs.drok.us" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">Docs</a>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://docs.drok.us"
          className="hidden sm:inline-flex items-center h-9 px-4 rounded-lg border border-border text-sm text-neutral-300 hover:border-border-light hover:text-white transition-colors"
        >
          Documentation
        </a>
        <a
          href="/register"
          className="inline-flex items-center h-9 px-4 rounded-lg bg-gold text-[#0A0A0A] text-sm font-semibold hover:bg-gold-light transition-colors"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2: HERO
   ═══════════════════════════════════════════════════════════════ */

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 bg-radial-hero bg-grid">
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-8">
          The Sovereign Code Platform
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-2">
          <span className="text-neutral-100">Version control</span>
          <br />
          <span className="text-gradient-gold">rebuilt from first principles.</span>
        </h1>

        <div className="flex justify-center mt-6 mb-8">
          <div className="h-0.5 bg-gold animate-expand" style={{ maxWidth: 120 }} />
        </div>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
          38,470 lines of Rust. Post-quantum cryptography.
          <br className="hidden sm:inline" />
          Sub-200ms navigation. No compromises.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/register"
            className="inline-flex items-center h-12 px-8 rounded-xl bg-gold text-[#0A0A0A] text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://docs.drok.us"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border border-border text-sm text-neutral-300 hover:border-border-light hover:text-white transition-colors"
          >
            Read the Documentation
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-700 animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3: STATS BAR
   ═══════════════════════════════════════════════════════════════ */

const STATS = [
  { value: "38,470", label: "Lines of Rust", detail: "Pure Rust backend" },
  { value: "200+", label: "Syntax Languages", detail: "Tree-sitter powered" },
  { value: "<200ms", label: "Navigation Speed", detail: "Every page transition" },
  { value: "Post-Quantum", label: "Cryptography", detail: "FIPS 203 / 204 / 205" },
];

export function StatsBar() {
  return (
    <section className="py-16 border-y border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <div key={i} className={`text-center ${i < STATS.length - 1 ? "md:border-r md:border-border" : ""}`}>
            <div className="text-3xl sm:text-4xl font-bold text-gradient-gold">{s.value}</div>
            <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
            <div className="text-xs text-neutral-600 mt-0.5">{s.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4: FEATURES GRID
   ═══════════════════════════════════════════════════════════════ */

const FEATURES: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <IconCodeBranch />,
    title: "Repositories",
    desc: "Full Git protocol via native libgit2 Rust bindings. LFS backed by Cloudflare R2.",
  },
  {
    icon: <IconCodeCompare />,
    title: "Code Review",
    desc: "Threaded inline comments. Suggested changes. Review checklists and analytics.",
  },
  {
    icon: <IconPipeline />,
    title: "Pipelines",
    desc: "Visual pipeline graphs. YAML configuration. Sandboxed execution environments.",
  },
  {
    icon: <IconSearch />,
    title: "Search",
    desc: "Tantivy-powered full-text search with regex and language filtering.",
  },
  {
    icon: <IconBrain />,
    title: "The Architect",
    desc: "Native AI layer for natural language code queries across your repositories.",
  },
  {
    icon: <IconBox />,
    title: "Package Registries",
    desc: "npm, PyPI, Cargo, Docker, Maven, NuGet. First-class package hosting.",
  },
  {
    icon: <IconDesktop />,
    title: "Desktop App",
    desc: "Tauri v2 native application. Works offline. Full platform access.",
  },
  {
    icon: <IconTerminal />,
    title: "CLI",
    desc: "The drok command. Compiled Rust binary. 8x faster than gh.",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight mb-4">
            Capabilities
          </h2>
          <p className="text-neutral-500">
            Everything you need, nothing you don&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-border p-5 bg-surface/30 hover:border-gold/30 hover:bg-gold/[0.02] transition-all group"
            >
              <div className="text-gold mb-3">{f.icon}</div>
              <h3 className="text-sm font-semibold text-neutral-200 mb-2">
                {f.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 5: CODE DEMO
   ═══════════════════════════════════════════════════════════════ */

const TERMINAL_LINES: { type: "cmd" | "out"; text: string }[] = [
  { type: "cmd", text: "drok repo create sovereign-api --private" },
  { type: "out", text: "✓ Repository created: lemay/sovereign-api" },
  { type: "cmd", text: 'drok mr create --title "Add auth" --target main' },
  { type: "out", text: "✓ Merge request #42 created" },
  { type: "cmd", text: "drok pipeline status" },
  { type: "out", text: "✓ Pipeline #127 — all stages passed (12.4s)" },
  { type: "cmd", text: 'drok search "fn refresh_token" --lang rust' },
  { type: "out", text: "  src/auth/token.rs:47  fn refresh_token(...)" },
  { type: "out", text: "  src/auth/oauth.rs:112 fn refresh_token_async(...)" },
];

const BENCHMARKS = [
  { label: "CLI startup", drok: 3, gh: 85, unit: "ms" },
  { label: "repo list", drok: 45, gh: 380, unit: "ms" },
  { label: "search", drok: 28, gh: 240, unit: "ms" },
];

export function CodeDemo() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight mb-4">
            Speed is not a luxury.
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            The <code className="text-gold bg-gold/[0.08] rounded px-1.5 py-0.5 text-[0.85em] font-mono">drok</code> CLI
            is a compiled Rust binary. Starts in 3ms. 8x faster than <code className="text-neutral-400 bg-white/[0.04] rounded px-1.5 py-0.5 text-[0.85em] font-mono">gh</code>.
          </p>
        </div>

        <div className="terminal-window mb-10">
          <div className="terminal-header">
            <div className="terminal-dot" style={{ background: "#FF5F57" }} />
            <div className="terminal-dot" style={{ background: "#FEBC2E" }} />
            <div className="terminal-dot" style={{ background: "#28C840" }} />
            <span className="text-xs text-neutral-600 ml-3 font-mono">~/project</span>
          </div>
          <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
            {TERMINAL_LINES.map((line, i) => (
              <div key={i}>
                {line.type === "cmd" ? (
                  <div>
                    <span className="text-gold">$ </span>
                    <span className="text-neutral-300">{line.text}</span>
                  </div>
                ) : (
                  <div className={line.text.startsWith("✓") ? "text-emerald-500" : "text-neutral-500"}>
                    {line.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {BENCHMARKS.map((b, i) => (
            <div key={i} className="rounded-xl border border-border p-4 bg-surface/30">
              <div className="text-xs text-neutral-600 uppercase tracking-wider mb-3">{b.label}</div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gold font-mono w-10">drok</span>
                  <div className="flex-1 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold rounded-full"
                      style={{ width: `${(b.drok / b.gh) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-neutral-400 font-mono w-14 text-right">
                    {b.drok}{b.unit}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-600 font-mono w-10">gh</span>
                  <div className="flex-1 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-neutral-700 rounded-full"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <span className="text-xs text-neutral-600 font-mono w-14 text-right">
                    {b.gh}{b.unit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 6: SECURITY
   ═══════════════════════════════════════════════════════════════ */

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-[10px] font-mono px-2 py-1 rounded-md bg-gold/[0.08] text-gold border border-gold/20">
      {children}
    </span>
  );
}

export function SecuritySection() {
  return (
    <section id="security" className="py-24 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight mb-4">
            Security is the architecture.
          </h2>
          <p className="text-neutral-500">
            Not a feature. Not a checkbox. The foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-border bg-[#0A0A0A]">
            <IconShield className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">
              Post-Quantum Cryptography
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              FIPS 203, 204, 205. ML-KEM-1024, ML-DSA-87, SLH-DSA-SHA2-256s.
              Operational today, not on a roadmap.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>FIPS 203</Badge>
              <Badge>FIPS 204</Badge>
              <Badge>FIPS 205</Badge>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-[#0A0A0A]">
            <IconLock className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">
              Zero Trust Architecture
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Every request authenticated. No implicit trust. mTLS between
              services. Certificates rotated every 24 hours.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>TLS 1.3</Badge>
              <Badge>mTLS</Badge>
              <Badge>AES-256-GCM</Badge>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-[#0A0A0A]">
            <IconWrench className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">
              Memory-Safe by Default
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              No buffer overflows. No use-after-free. No data races.
              The entire class of memory safety CVEs is structurally eliminated.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>No GC</Badge>
              <Badge>No Runtime</Badge>
              <Badge>Zero Unsafe</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 7: ARCHITECTURE
   ═══════════════════════════════════════════════════════════════ */

const ARCH_STATS = [
  { label: "Backend Language", value: "Rust" },
  { label: "Source Files", value: "96" },
  { label: "Passing Tests", value: "359" },
  { label: "Frontend Files", value: "210" },
  { label: "UI Components", value: "115" },
  { label: "Route Endpoints", value: "47" },
  { label: "Benchmark Suites", value: "3" },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight mb-4">
            Pure Rust. No compromises.
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            One binary. No Python glue. No Node.js middleware. No Java services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: "#FF5F57" }} />
              <div className="terminal-dot" style={{ background: "#FEBC2E" }} />
              <div className="terminal-dot" style={{ background: "#28C840" }} />
              <span className="text-xs text-neutral-600 ml-3 font-mono">architecture</span>
            </div>
            <pre className="p-5 font-mono text-xs text-neutral-500 leading-relaxed overflow-x-auto">
{`┌──────────────────────────────────────┐
│         `}<span className="text-gold">Drok Application</span>{`            │
├──────────────────────────────────────┤
│                                      │
│  ┌──────────┐  ┌──────────────────┐  │
│  │ `}<span className="text-neutral-300">Web UI</span>{`   │  │ `}<span className="text-neutral-300">REST + GraphQL</span>{`  │  │
│  │ TypeScript│  │ API Layer       │  │
│  └────┬─────┘  └───────┬─────────┘  │
│       │                │             │
│  ┌────┴────────────────┴─────────┐  │
│  │      `}<span className="text-gold">Rust Core Engine</span>{`           │  │
│  │  Git · Search · Auth · Crypto │  │
│  └────┬──────────────────┬───────┘  │
│       │                  │          │
│  ┌────┴──────┐  ┌───────┴────────┐  │
│  │ `}<span className="text-neutral-300">libgit2</span>{`   │  │ `}<span className="text-neutral-300">Tantivy</span>{`        │  │
│  │ Rust FFI  │  │ Search Engine  │  │
│  └───────────┘  └────────────────┘  │
│                                      │
│  ┌───────────────────────────────┐  │
│  │    `}<span className="text-neutral-300">Cloudflare R2 + D1</span>{`         │  │
│  │    Object + Relational Store  │  │
│  └───────────────────────────────┘  │
└──────────────────────────────────────┘`}
            </pre>
          </div>

          <div>
            <div className="space-y-0">
              {ARCH_STATS.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3.5 border-b border-border"
                >
                  <span className="text-sm text-neutral-400">{s.label}</span>
                  <span className="text-sm font-semibold text-neutral-200 font-mono">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 8: PRICING
   ═══════════════════════════════════════════════════════════════ */

const FREE_FEATURES = [
  "Unlimited public repositories",
  "Unlimited private repositories",
  "Unlimited collaborators",
  "5 GB LFS storage",
  "2,000 pipeline minutes / month",
  "Post-quantum cryptography",
  "All 200+ language support",
  "Desktop app included",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight mb-4">
            Free for everyone.
          </h2>
          <p className="text-neutral-500">
            No per-seat pricing. No feature gates. No bait-and-switch.
          </p>
        </div>

        <div className="max-w-lg mx-auto rounded-2xl border border-gold/30 p-8 bg-[#0A0A0A]">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-gradient-gold">Free</div>
            <div className="text-sm text-neutral-500 mt-1">Forever</div>
          </div>

          <div className="space-y-0 mb-8">
            {FREE_FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5">
                <IconCheck className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-neutral-300">{f}</span>
              </div>
            ))}
          </div>

          <a
            href="/register"
            className="flex items-center justify-center w-full h-12 rounded-xl bg-gold text-[#0A0A0A] text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            Get Started
          </a>

          <p className="text-xs text-neutral-600 text-center mt-5">
            Enterprise plans available for organizations requiring SSO, audit logs, and HSM support.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 9: CTA FOOTER
   ═══════════════════════════════════════════════════════════════ */

export function CTAFooter() {
  return (
    <section className="py-32 text-center bg-radial-hero px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-6">
        Ready?
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-100 tracking-tight mb-4">
        Retire GitHub.
      </h2>
      <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10">
        Create your account and push your first repository in under five minutes.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a
          href="/register"
          className="inline-flex items-center h-12 px-8 rounded-xl bg-gold text-[#0A0A0A] text-sm font-semibold hover:bg-gold-light transition-colors"
        >
          Get Started
        </a>
        <a
          href="https://docs.drok.us"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border border-border text-sm text-neutral-300 hover:border-border-light hover:text-white transition-colors"
        >
          Read the Documentation
          <IconArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 10: FOOTER
   ═══════════════════════════════════════════════════════════════ */

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <DrokLogo />
            <span className="text-[15px] font-semibold text-neutral-100 tracking-tight">
              Drok
            </span>
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed">
            The Sovereign Code Platform.
            <br />
            Built by LeMay Inc.
            <br />
            Beacon Hill, Boston.
            <br />
            The Commonwealth of Massachusetts.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500 mb-3">
              Platform
            </h4>
            <div className="space-y-2">
              <a href="#features" className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Features</a>
              <a href="#security" className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Security</a>
              <a href="#pricing" className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Pricing</a>
              <a href="#architecture" className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Architecture</a>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500 mb-3">
              Resources
            </h4>
            <div className="space-y-2">
              <a href="https://docs.drok.us" className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Documentation</a>
              <a href="https://docs.drok.us/api-reference/introduction" className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors">API Reference</a>
              <a href="https://status.drok.us" className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Status</a>
              <a href="https://docs.drok.us/resources/changelog" className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Changelog</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://x.com/drok_us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://drok.us/LeMay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <p className="text-[11px] text-neutral-700">
            &copy; {new Date().getFullYear()} LeMay Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
