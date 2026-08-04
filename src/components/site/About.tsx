import { motion } from "motion/react";
import { GraduationCap, Layers, Rocket, Brain } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const points = [
  { Icon: GraduationCap, title: "Computer Science student", text: "Strong fundamentals in algorithms, systems and software design." },
  { Icon: Layers, title: "Full Stack Developer", text: "Comfortable across the stack — UI, API, database, deployment." },
  { Icon: Rocket, title: "Scalable & user-friendly", text: "I build applications meant to run in production, not just demos." },
  { Icon: Brain, title: "Modern web & AI", text: "Exploring LLM applications and advanced system architecture." },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            A developer who ships <span className="text-aurora">real products</span>
          </>
        }
        description="I care about the details that recruiters and users both notice: clean architecture, fast interfaces, secure backends and code that another engineer can pick up tomorrow."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {points.map(({ Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group rounded-2xl surface-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary transition-colors group-hover:border-primary/50">
              <Icon className="h-4.5 w-4.5 text-primary" />
            </div>
            <h3 className="mt-4 font-display text-base font-medium">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
