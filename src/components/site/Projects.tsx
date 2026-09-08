import { motion } from "motion/react";
import { Github, ExternalLink, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import fileSharing from "@/assets/sharing.jpg";
import food from "@/assets/food.jpg";
import portfolio from "@/assets/portfolio.jpg";
import Olex from "@/assets/project-olex.jpg";

type Project = {
  index: string;
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  image: string;
  alt: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Olex-TN",
    description:
      "A digital platform for streamlining agricultural export procedures through centralized workflows, document management, automated reporting, and multi-role collaboration.",
    features: [
      "Role-based authentication",
      "Export request management",
      "Document management",
      "Automated email notifications",
      "PDF, Excel & CSV generation",
      "Multi-role dashboards",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    image: Olex,
    alt: "Olex-TN agricultural export management platform dashboard",
    github: "https://github.com/rayen-abidi05/Olex-TN",
    demo: "https://github.com/rayen-abidi05/Olex-TN",
  },

  {
    index: "02",
    title: "Secure File Sharing Platform",
    description:
      "A secure platform for sharing files with authentication, permissions, and activity tracking.",
    features: [
      "Authentication system",
      "Protected routes",
      "File management",
      "User permissions",
      "Notifications",
      "Activity tracking",
    ],
    tech: ["Next.js","Tailwind CSS", "Express.js", "PostgreSQL", "Prisma"],
    image: fileSharing,
    alt: "Dashboard of the secure file sharing platform showing files and permissions",
    github: "https://github.com/rayen-abidi05/sharing",
    demo: "https://github.com/rayen-abidi05/sharing",
  },

  {
    index: "03",
    title: "FOODY",
    description:
      "A full-stack recipe platform featuring nutritional analysis, categorized dishes, authentication, personal recipe management, and an administration system.",
    tech: ["Next.js", "Tailwind CSS", "Express.js" , "MySql"],
    image: food,
    alt: "FOODY recipe and nutrition platform displayed on mobile and desktop",
    github: "https://github.com/rayen-abidi05/Foody",
    demo: "https://github.com/rayen-abidi05/Foody",
  },

  {
    index: "04",
    title: "My Portfolio",
    description:
      "The portfolio itself, built with modern frontend technologies and advanced animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    image: portfolio,
    alt: "Developer portfolio website with animated 3D workspace scene",
    github: "https://github.com/rayen-abidi05/Main_Portfolio",
    demo: "https://portfolio-seven-eta-iosr9tfhdi.vercel.app/",
  },
];

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group grid gap-8 rounded-3xl surface-card p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12"
    >
      <div className={`relative ${flip ? "lg:order-2" : ""}`}>
        <div className="absolute -inset-4 rounded-3xl bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative overflow-hidden rounded-2xl border border-border">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            width={1280}
            height={800}
            className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        </div>
      </div>

      <div className="min-w-0">
        <span className="font-mono text-xs tracking-[0.3em] text-violet">{project.index}</span>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.features && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                <Check className="h-3.5 w-3.5 shrink-0 text-signal" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-lg glass px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/70 px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/60"
            >
              <Github  className="h-4 w-4" /> GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-aurora)" }}
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Real-world problems, thoughtfully engineered solutions — from secure platforms and complex workflows to intuitive user experiences."
      />
      <div className="mt-10 grid gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
