import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Building2,
  CalendarDays,
  Check,
  Container,
  FileBarChart,
  FileText,
  Lock,
  Mail,
  Play,
  ShieldCheck,
  Users,
  KeyRound,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/olex-tn")({
  head: () => ({
    meta: [
      { title: "Olex-TN — Case Study · Rayen Abidi" },
      {
        name: "description",
        content:
          "Case study of Olex-TN, a digital platform for agricultural export procedures built during an internship at the Tunisian Ministry of Agriculture.",
      },
    ],
  }),
  component: OlexTnCaseStudy,
});

const WALKTHROUGH_URL =
  "https://stalwart-righteous-hound.clueso.site/share/562bd448-066b-475d-90f6-f72a265db9e5";

/* ------------------------------------------------------------------ */
/* Design primitives (kept local so the page is drop-in)               */
/* ------------------------------------------------------------------ */

const card =
  "rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.035]";
const mono = "font-mono";
const gradientBtn =
  "bg-gradient-to-r from-[oklch(0.62_0.19_265)] via-[oklch(0.62_0.2_295)] to-[oklch(0.75_0.15_165)] text-white shadow-[0_0_30px_-8px_oklch(0.6_0.2_290/0.7)] hover:brightness-110";
const ghostBtn =
  "border border-white/10 bg-white/[0.04] text-white/90 hover:bg-white/[0.08] hover:border-white/20";
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.7_0.18_285)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.13_0.005_260)]";

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-16 sm:py-24">
      <Reveal>
        <p className={`${mono} mb-3 text-[11px] tracking-[0.25em] text-[oklch(0.65_0.16_275)] uppercase`}>
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">{lead}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className={`${mono} rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/60`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const tech = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "JWT",
  "Nodemailer",
];

const complexity: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Users, title: "Multi-role access", text: "Seven roles, each with its own dashboard and permissions." },
  { icon: ClipboardCheck, title: "Export requests", text: "Company export requests tracked through status-based workflows." },
  { icon: FileText, title: "Documents", text: "Uploaded, attached and reviewed across requests and registrations." },
  { icon: ShieldCheck, title: "Validation", text: "Registration, export and inspection decisions with clear outcomes." },
  { icon: Bell, title: "Notifications", text: "In-app notifications, email alerts and an activity trail." },
  { icon: FileBarChart, title: "Reporting", text: "PDF, Excel and CSV generation for reports and exports." },
];

const extras = [
  "Registration requests",
  "Quota / request management",
  "Inspection management",
  "Activity tracking",
];

const roles = [
  "EXPORTER",
  "ADMIN",
  "OBSERVATOR",
  "DIWAN_MEMBER",
  "MINISTER",
  "INSPA",
  "COMMITTEE_MEMBER",
];

const workflows: {
  name: string;
  steps: string[];
  outcomes: [string, string];
}[] = [
  { name: "Registration", steps: ["PENDING", "UNDER_REVIEW"], outcomes: ["APPROVED", "REJECTED"] },
  { name: "Export request", steps: ["SENT", "UNDER_COMMITTEE_REVIEW"], outcomes: ["APPROVED", "REJECTED"] },
  { name: "Inspection", steps: ["PENDING"], outcomes: ["APPROVED", "REJECTED"] },
];

const contribution = [
  "Frontend interfaces for the different user roles",
  "REST API integration between the client and the Express.js backend",
  "Authentication and role-based access with JWT",
  "Database interactions through Prisma and PostgreSQL",
  "Role-based workflows and document management",
  "Application architecture, alongside the rest of the team",
];

const stack: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "JWT", "Nodemailer"] },
  { group: "Data & infrastructure", items: ["PostgreSQL", "Prisma", "Docker"] },
];

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

function StatusPill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "ok" | "no" }) {
  const tones = {
    neutral: "border-white/10 bg-white/[0.04] text-white/70",
    ok: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
    no: "border-rose-400/25 bg-rose-400/10 text-rose-300",
  };
  return (
    <span className={`${mono} inline-block rounded-md border px-2.5 py-1 text-[11px] ${tones[tone]}`}>
      {children}
    </span>
  );
}

function Connector() {
  return (
    <span aria-hidden className="ml-4 flex h-6 items-center">
      <span className="relative h-full w-px bg-gradient-to-b from-white/25 to-white/5">
        <span className="absolute -left-[2.5px] top-0 size-1.5 animate-pulse rounded-full bg-[oklch(0.7_0.18_285)]" />
      </span>
    </span>
  );
}

function WorkflowCard({ name, steps, outcomes }: (typeof workflows)[number]) {
  return (
    <div className={`${card} p-6`}>
      <h3 className="mb-5 text-base font-medium text-white">{name}</h3>
      <div role="list" aria-label={`${name} statuses`}>
        {steps.map((s) => (
          <div role="listitem" key={s}>
            <StatusPill>{s}</StatusPill>
            <Connector />
          </div>
        ))}
        <div role="listitem" className="flex flex-wrap gap-2">
          <StatusPill tone="ok">{outcomes[0]}</StatusPill>
          <span className={`${mono} self-center text-xs text-white/30`}>/</span>
          <StatusPill tone="no">{outcomes[1]}</StatusPill>
        </div>
      </div>
    </div>
  );
}

function Entity({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return (
    <span
      className={`${mono} inline-block rounded-lg border px-3 py-1.5 text-xs ${
        muted
          ? "border-white/[0.07] bg-white/[0.02] text-white/55"
          : "border-[oklch(0.62_0.19_280/0.4)] bg-[oklch(0.62_0.19_280/0.1)] text-[oklch(0.85_0.08_285)]"
      }`}
    >
      {children}
    </span>
  );
}

function Branch({ children }: { children: ReactNode }) {
  return (
    <ul className="ml-4 mt-2 space-y-2 border-l border-white/10 pl-5">
      {children}
    </ul>
  );
}
function Leaf({ children }: { children: ReactNode }) {
  return (
    <li className="relative">
      <span aria-hidden className="absolute -left-5 top-1/2 h-px w-4 bg-white/10" />
      {children}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function OlexTnCaseStudy() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[oklch(0.13_0.005_260)] text-white antialiased">
      {/* ambient glow, matches homepage hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(60%_60%_at_25%_0%,oklch(0.45_0.18_270/0.28),transparent),radial-gradient(45%_50%_at_85%_10%,oklch(0.5_0.2_300/0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      {/* top bar */}
      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-5 pt-6 sm:px-8">
        <Link
          to="/"
          className={`${mono} text-sm text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.7_0.18_285)] rounded`}
        >
          rayen<span className="text-white/40">.dev</span>
        </Link>
        <Link to="/" className={`${btnBase} ${ghostBtn} !py-2 text-xs`}>
          <ArrowLeft className="size-3.5" aria-hidden /> Portfolio
        </Link>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {/* ------------------------------ HERO ------------------------------ */}
        <section className="grid items-center gap-12 pb-12 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className={`${mono} mb-5 text-[11px] tracking-[0.3em] text-[oklch(0.65_0.16_275)] uppercase`}>
              Case study
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              <span className="bg-gradient-to-r from-[oklch(0.78_0.12_275)] via-[oklch(0.72_0.18_295)] to-[oklch(0.8_0.14_170)] bg-clip-text text-transparent">
                Olex-TN
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
              A digital platform that centralizes agricultural export procedures: workflows, documents,
              validation, reporting and notifications across seven collaborating roles.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {tech.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WALKTHROUGH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} ${gradientBtn}`}
              >
                Watch Walkthrough <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <Link to="/" className={`${btnBase} ${ghostBtn}`}>
                Back to Portfolio
              </Link>
              <span className={`${mono} inline-flex items-center gap-1.5 text-xs text-white/40`}>
                <Lock className="size-3" aria-hidden /> Source code — Private
              </span>
            </div>
          </motion.div>

          {/* terminal-style summary card, echoing the homepage `whoami` block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[oklch(0.1_0.006_260)]/90 shadow-[0_0_80px_-20px_oklch(0.5_0.2_285/0.5)]"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="size-2.5 rounded-full bg-rose-500/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="size-2.5 rounded-full bg-sky-400/80" />
              <span className={`${mono} ml-3 text-[11px] text-white/40`}>bash — olex-tn</span>
            </div>
            <pre className={`${mono} overflow-x-auto p-5 text-[12.5px] leading-6 text-white/75`}>
{`$ cat project.json
{
  "name": "Olex-TN",
  "domain": "Olive-oil export",
  "roles": 7,
  "workflows": 3,
  "internship": "June – July 2026",
  "source": "private"
}`}
            </pre>
          </motion.div>
        </section>

        {/* ---------------------------- OVERVIEW ---------------------------- */}
        <Section
          id="overview"
          eyebrow="Overview"
          title="Export procedures, in one place"
        >
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className={`${card} h-full p-6 sm:p-8`}>
                <p className="text-sm leading-relaxed text-white/65">
                  Exporting olive oil involves companies, documents, reviews and inspections handled by
                  several parties. Olex-TN brings those steps into one platform, so every request has a
                  visible status, a document trail and a clear owner at each stage.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  I worked on it during my internship at the Direction Générale des Études et du
                  Développement Agricole, part of Tunisia’s Ministry of Agriculture.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <dl className={`${card} grid h-full gap-5 p-6 sm:p-8`}>
                {[
                  { icon: Building2, k: "Organization", v: "DG Études et Développement Agricole — Ministère de l’Agriculture" },
                  { icon: CalendarDays, k: "Period", v: "June 2026 – July 2026 (1 month)" },
                  { icon: KeyRound, k: "Context", v: "Internship, team project" },
                ].map(({ icon: Icon, k, v }) => (
                  <div key={k} className="flex gap-3">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                      <Icon className="size-4 text-[oklch(0.72_0.14_280)]" aria-hidden />
                    </span>
                    <div>
                      <dt className={`${mono} text-[11px] text-white/40`}>{k}</dt>
                      <dd className="text-sm text-white/80">{v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Section>

        {/* --------------------------- COMPLEXITY --------------------------- */}
        <Section
          id="complexity"
          eyebrow="Scope"
          title="More than a CRUD app"
          lead="Six concerns that interact with each other, each shaped by who is using the system."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {complexity.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.06}>
                <div className={`${card} h-full p-5`}>
                  <span className="mb-4 flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                    <Icon className="size-4 text-[oklch(0.72_0.14_280)]" aria-hidden />
                  </span>
                  <h3 className="text-sm font-medium text-white">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Additional features">
              {extras.map((e) => (
                <li key={e}>
                  <Tag>{e}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        {/* ----------------------------- ROLES ------------------------------ */}
        <Section
          id="roles"
          eyebrow="Roles"
          title="Seven roles, one system"
          lead="Access, dashboards and actions depend on the signed-in role."
        >
          <Reveal>
            <div className={`${card} p-5 sm:p-8`}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {roles.map((r, i) => (
                  <div
                    key={r}
                    className={`group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[oklch(0.11_0.005_260)] px-4 py-3.5 transition hover:border-[oklch(0.62_0.19_280/0.5)] ${
                      i === roles.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.62_0.19_280/0.12)] text-[oklch(0.8_0.1_285)] transition group-hover:bg-[oklch(0.62_0.19_280/0.22)]">
                      <Users className="size-4" aria-hidden />
                    </span>
                    <span className={`${mono} truncate text-[12px] text-white/80`}>{r}</span>
                  </div>
                ))}
                <div className="flex items-center justify-center rounded-xl border border-dashed border-white/[0.08] px-4 py-3.5 text-[12px] text-white/35 sm:col-span-2 lg:col-span-1">
                  Authenticated with JWT
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* -------------------------- ARCHITECTURE -------------------------- */}
        <Section
          id="architecture"
          eyebrow="Architecture"
          title="A layered full-stack setup"
          lead="A conventional, maintainable request path from the interface down to the database."
        >
          <Reveal>
            <div className={`${card} p-5 sm:p-8`}>
              <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
                {[
                  { name: "Next.js / React", sub: "Interface" },
                  { name: "Express.js", sub: "REST API" },
                  { name: "Prisma", sub: "ORM" },
                  { name: "PostgreSQL", sub: "Database" },
                ].map((n, i, arr) => (
                  <div key={n.name} className="flex flex-1 flex-col items-stretch gap-3 md:flex-row md:items-center">
                    <div className="flex-1 rounded-xl border border-[oklch(0.62_0.19_280/0.35)] bg-[oklch(0.62_0.19_280/0.08)] px-4 py-4 text-center">
                      <div className="text-sm font-medium text-white">{n.name}</div>
                      <div className={`${mono} mt-1 text-[11px] text-white/45`}>{n.sub}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight
                        aria-hidden
                        className="mx-auto size-4 shrink-0 rotate-90 animate-pulse text-white/35 md:rotate-0"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 border-t border-white/[0.06] pt-6 sm:grid-cols-3">
                {[
                  { icon: KeyRound, n: "JWT", t: "Authentication and role checks" },
                  { icon: Container, n: "Docker", t: "Development and deployment environment" },
                  { icon: Mail, n: "Nodemailer", t: "Email notifications" },
                ].map(({ icon: Icon, n, t }) => (
                  <div key={n} className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <Icon className="mt-0.5 size-4 shrink-0 text-[oklch(0.75_0.13_170)]" aria-hidden />
                    <div>
                      <div className="text-sm text-white/85">{n}</div>
                      <div className="text-[12px] leading-relaxed text-white/45">{t}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        {/* ---------------------------- WORKFLOWS --------------------------- */}
        <Section
          id="workflows"
          eyebrow="Workflows"
          title="Status-driven processes"
          lead="Each process moves through explicit statuses and ends in a decision."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {workflows.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.07}>
                <WorkflowCard {...w} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* -------------------------- DOMAIN MODEL -------------------------- */}
        <Section
          id="domain"
          eyebrow="Domain model"
          title="A simplified view of the data"
          lead="A conceptual sketch of how the main entities relate, not the database schema."
        >
          <Reveal>
            <div className={`${card} grid gap-8 p-6 sm:p-8 md:grid-cols-3`}>
              <div>
                <Entity>User</Entity>
                <Branch>
                  <Leaf>
                    <Entity>Company</Entity>
                    <Branch>
                      <Leaf>
                        <Entity muted>RegistrationRequest</Entity>
                        <Branch>
                          <Leaf>
                            <Entity muted>Document</Entity>
                          </Leaf>
                        </Branch>
                      </Leaf>
                    </Branch>
                  </Leaf>
                </Branch>
              </div>

              <div>
                <Entity>Company</Entity>
                <Branch>
                  <Leaf>
                    <Entity>ExportRequest</Entity>
                    <Branch>
                      <Leaf><Entity muted>Document</Entity></Leaf>
                      <Leaf><Entity muted>Agrim</Entity></Leaf>
                      <Leaf><Entity muted>Instance</Entity></Leaf>
                    </Branch>
                  </Leaf>
                </Branch>
              </div>

              <div className="space-y-8">
                <div>
                  <Entity>Instance</Entity>
                  <Branch>
                    <Leaf><Entity muted>InstanceMember</Entity></Leaf>
                    <Leaf><Entity muted>Report</Entity></Leaf>
                  </Branch>
                </div>
                <div>
                  <Entity>User</Entity>
                  <Branch>
                    <Leaf><Entity muted>Notification</Entity></Leaf>
                    <Leaf><Entity muted>ActivityLog</Entity></Leaf>
                  </Branch>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* -------------------------- CONTRIBUTION -------------------------- */}
        <Section id="contribution" eyebrow="Contribution" title="What I worked on">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className={`${card} h-full p-6 sm:p-8`}>
                <p className="text-sm leading-relaxed text-white/65">
                  I contributed to the design and development of the full-stack application as part of a
                  team during my internship. My work covered:
                </p>
                <ul className="mt-5 space-y-3">
                  {contribution.map((c) => (
                    <li key={c} className="flex gap-3 text-sm text-white/75">
                      <Check className="mt-0.5 size-4 shrink-0 text-[oklch(0.75_0.15_165)]" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className={`${card} h-full p-6 sm:p-8`}>
                <p className={`${mono} text-[11px] text-white/40`}>Team project</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Olex-TN was built collaboratively within a one-month internship. The scope above
                  reflects my part of the work, not the whole system.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ------------------------------ STACK ----------------------------- */}
        <Section id="stack" eyebrow="Stack" title="Technologies used">
          <div className="grid gap-4 md:grid-cols-3">
            {stack.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.06}>
                <div className={`${card} h-full p-6`}>
                  <h3 className={`${mono} mb-4 text-[11px] text-white/40`}>{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((t) => (
                      <li key={t}>
                        <span className="inline-block rounded-lg border border-white/[0.09] bg-white/[0.04] px-3 py-1.5 text-sm text-white/85">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ------------------------------- CTA ------------------------------ */}
        <section aria-labelledby="cta-title" className="py-12 sm:py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[oklch(0.11_0.006_260)] px-6 py-14 text-center sm:px-12 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_120%,oklch(0.5_0.2_290/0.35),transparent),radial-gradient(40%_50%_at_10%_0%,oklch(0.5_0.18_260/0.2),transparent)]"
              />
              <div className="relative">
                <span className="mx-auto mb-5 flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                  <Play className="size-4 text-[oklch(0.8_0.12_285)]" aria-hidden />
                </span>
                <h2 id="cta-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  See the application in action
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/55">
                  The interactive walkthrough shows the real screens and flows described above.
                </p>
                <div className="mt-8">
                  <a
                    href={WALKTHROUGH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnBase} ${gradientBtn} !px-7 !py-3`}
                  >
                    Watch Full Walkthrough <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
                <p className={`${mono} mt-5 inline-flex items-center gap-1.5 text-xs text-white/35`}>
                  <Lock className="size-3" aria-hidden /> Source code — Private
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ------------------------------ FOOTER ----------------------------- */}
      <footer className="relative z-10 mx-auto max-w-5xl px-5 pb-12 pt-6 sm:px-8">
        <p className="mx-auto max-w-xl text-center text-[12px] leading-relaxed text-white/30">
          Project information and visuals presented here are limited to material that can be publicly
          shared and do not contain confidential or sensitive data.
        </p>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/40 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.7_0.18_285)] rounded"
          >
            <ArrowLeft className="size-3.5" aria-hidden /> Back to Portfolio
          </Link>
          <span className={mono}>© 2026 Rayen Abidi</span>
        </div>
      </footer>
    </div>
  );
}