import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const milestones = [
  {
    year: "2024",
    title: "Foundations",
    items: ["Started Computer Science journey and web development."],
  },
  {
    year: "2025",
    title: "Full-stack focus",
    items: ["APIs", "Authentication systems", "Database architecture"],
  },
  {
    year: "2026",
    title: "Production & AI",
    items: ["Building production-level applications and exploring AI technologies."],
  },
];

export function Timeline() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl scroll-mt-24 px-5 py-20">
      <SectionHeading eyebrow="Journey" title="From first commit to production" />

      <ol className="relative mt-12 border-l border-border pl-8">
        {milestones.map((m, i) => (
          <motion.li
            key={m.year}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pb-12 last:pb-0"
          >
            <span
              className="absolute top-1.5 -left-[38px] grid h-4 w-4 place-items-center rounded-full"
              style={{ background: "var(--gradient-aurora)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-background" />
            </span>
            <span className="font-mono text-sm tracking-[0.2em] text-primary">{m.year}</span>
            <h3 className="mt-2 font-display text-xl font-medium">{m.title}</h3>
            <ul className="mt-3 grid gap-1.5">
              {m.items.map((it) => (
                <li key={it} className="text-sm leading-relaxed text-muted-foreground">
                  {it}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
