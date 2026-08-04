import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EMAIL = "rayen.abidi@email.com";

const pieces = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 260,
  y: -(60 + Math.random() * 160),
  rotate: Math.random() * 540 - 270,
  color: ["var(--primary)", "var(--violet)", "var(--signal)"][i % 3],
  delay: Math.random() * 0.12,
}));

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }, []);

  return (
    <section id="contact" className="relative scroll-mt-24 px-5 py-24">
      <div className="pointer-events-none absolute inset-0 radial-glow" />
      <div className="relative mx-auto max-w-4xl rounded-3xl glass glow-ring p-8 text-center sm:p-14">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let&apos;s build something <span className="text-aurora">impactful.</span>
              </>
            }
            description="Open to internships, full-time roles and freelance projects. I usually reply within a day."
          />
        </div>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={copyEmail}
              aria-label={`Copy email address ${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-aurora)" }}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Email copied" : "Copy email"}
            </button>

            <AnimatePresence>
              {copied &&
                pieces.map((p) => (
                  <motion.span
                    key={p.id}
                    className="pointer-events-none absolute top-1/2 left-1/2 h-2 w-1.5 rounded-[2px]"
                    style={{ background: p.color }}
                    initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                    animate={{ opacity: 0, x: p.x, y: p.y, rotate: p.rotate }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, delay: p.delay, ease: "easeOut" }}
                  />
                ))}
            </AnimatePresence>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/70 px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/60"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/70 px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/60"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/70 px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/60"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-muted-foreground">{EMAIL}</p>
      </div>
    </section>
  );
}
