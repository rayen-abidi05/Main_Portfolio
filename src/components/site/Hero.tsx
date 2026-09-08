import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { Workspace3D } from "./Workspace3D";

const badges = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 radial-glow" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>

            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
              Available for internships & freelance  
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Rayen <span className="text-aurora">Abidi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 font-mono text-sm tracking-[0.24em] text-primary uppercase"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg text-foreground/90"
          >
            Building scalable web applications with modern technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground"
          >
            I design and develop full-stack applications, from intuitive user
            interfaces to secure and scalable backend architectures.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <li
                key={b}
                className="rounded-lg glass px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-aurora)" }}
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/70 px-6 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60"
            >
              Contact Me
            </a>

            <span className="ml-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Tunisia
            </span>
          </motion.div>
        </div>

        <Workspace3D />
      </div>
    </section>
  );
}