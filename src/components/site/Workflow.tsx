import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Planning & Architecture", text: "Scope, data model, and system boundaries before a single component." },
  { n: "02", title: "Frontend Development", text: "Component library, states, responsiveness and accessibility." },
  { n: "03", title: "Backend API Development", text: "Typed REST endpoints, validation, auth and error contracts." },
  { n: "04", title: "Database Design", text: "Normalised schemas, migrations and indexed queries with Prisma." },
  { n: "05", title: "Testing & Deployment", text: "Dockerised builds, environment config, and shipping to production." },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Workflow"
        title="How an application gets built"
        description="A repeatable engineering pipeline — the same one I follow whether it's a client project or a personal build."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl surface-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/40"
          >
            <span
              className="absolute inset-x-5 top-0 h-px opacity-40"
              style={{ background: "var(--gradient-aurora)" }}
            />
            <span className="font-mono text-2xl font-semibold text-muted-foreground/40 transition-colors group-hover:text-primary">
              {s.n}
            </span>
            <h3 className="mt-3 font-display text-base font-medium">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            {i < steps.length - 1 && (
              <span className="pointer-events-none absolute top-1/2 -right-2 hidden h-1.5 w-1.5 rounded-full bg-primary/60 lg:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
