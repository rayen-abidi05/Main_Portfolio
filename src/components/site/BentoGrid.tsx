import { motion } from "motion/react";
import { MonitorSmartphone, Server, Database, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    Icon: MonitorSmartphone,
    title: "Frontend Engineering",
    span: "md:col-span-3 lg:row-span-2",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    note: "Interfaces that feel fast, accessible and intentional.",
  },
  {
    Icon: Server,
    title: "Backend Engineering",
    span: "md:col-span-3",
    items: ["Node.js", "Express.js", "Prisma", "REST APIs", "Authentication systems"],
    note: "Typed APIs, secure sessions, predictable data flow.",
  },
  {
    Icon: Database,
    title: "Database & Infrastructure",
    span: "md:col-span-3",
    items: ["PostgreSQL", "MySQL", "Docker", "Git"],
    note: "Modelled schemas, containerised environments.",
  },
  {
    Icon: Sparkles,
    title: "Currently Learning",
    span: "md:col-span-6",
    items: ["Artificial Intelligence", "LLM applications", "Advanced system architecture"],
    note: "Always one project ahead of my comfort zone.",
  },
];

export function BentoGrid() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I build with"
        description="Not a list of logos — the tools I actually use to take a product from architecture sketch to deployed application."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-6">
        {cards.map(({ Icon, title, items, note, span }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl surface-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/50 ${span}`}
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-violet/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary">
                <Icon className="h-4.5 w-4.5 text-primary" />
              </span>
              <h3 className="truncate font-display text-lg font-medium">{title}</h3>
            </div>
            <p className="relative mt-3 text-sm text-muted-foreground">{note}</p>
            <ul className="relative mt-5 flex flex-wrap gap-2">
              {items.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
