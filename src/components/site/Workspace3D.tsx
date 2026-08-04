import { motion } from "motion/react";
import { Database, GitBranch, Boxes, Cpu, Braces, Server } from "lucide-react";

const codeLines = [
  { indent: 0, tokens: [["const ", "text-violet"], ["app", "text-foreground"], [" = ", "text-muted-foreground"], ["createServer", "text-primary"], ["({", "text-muted-foreground"]] },
  { indent: 1, tokens: [["auth", "text-signal"], [": ", "text-muted-foreground"], ["true", "text-violet"], [",", "text-muted-foreground"]] },
  { indent: 1, tokens: [["db", "text-signal"], [": ", "text-muted-foreground"], ["prisma", "text-primary"], [",", "text-muted-foreground"]] },
  { indent: 1, tokens: [["cache", "text-signal"], [": ", "text-muted-foreground"], ["\"edge\"", "text-foreground"], [",", "text-muted-foreground"]] },
  { indent: 0, tokens: [["});", "text-muted-foreground"]] },
  { indent: 0, tokens: [["await ", "text-violet"], ["app", "text-foreground"], [".", "text-muted-foreground"], ["listen", "text-primary"], ["(3000)", "text-muted-foreground"]] },
];

const orbit = [
  { Icon: Braces, label: "TypeScript", x: "-8%", y: "6%", delay: 0 },
  { Icon: Server, label: "Node.js", x: "84%", y: "0%", delay: 0.6 },
  { Icon: Database, label: "PostgreSQL", x: "92%", y: "52%", delay: 1.2 },
  { Icon: Boxes, label: "Docker", x: "-6%", y: "58%", delay: 0.9 },
  { Icon: GitBranch, label: "Git", x: "12%", y: "-8%", delay: 1.6 },
  { Icon: Cpu, label: "Prisma", x: "70%", y: "-10%", delay: 0.3 },
];

export function Workspace3D() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-lg select-none"
      style={{ perspective: "1200px" }}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full radial-glow blur-2xl" />

      {orbit.map(({ Icon, label, x, y, delay }) => (
        <motion.div
          key={label}
          className="absolute z-20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: delay * 0.3 },
            scale: { duration: 0.6, delay: delay * 0.3 },
            y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="flex items-center gap-2 rounded-xl glass px-2.5 py-2 shadow-lg">
            <Icon className="h-4 w-4 text-primary" />
            <span className="font-mono text-[10px] tracking-tight text-muted-foreground">
              {label}
            </span>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-x-4 top-[18%] z-10"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, rotateX: 40, y: 40 }}
        animate={{ opacity: 1, rotateX: 14, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* screen */}
        <div className="relative overflow-hidden rounded-t-xl border border-border bg-[#0a0a10] shadow-[0_30px_80px_-30px_oklch(0.62_0.22_296/60%)]">
          <div className="flex items-center gap-1.5 border-b border-border/70 bg-secondary/60 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-destructive/70" />
            <span className="h-2 w-2 rounded-full bg-chart-4/70" />
            <span className="h-2 w-2 rounded-full bg-signal/70" />
            <span className="ml-2 font-mono text-[10px] text-muted-foreground">server.ts</span>
          </div>
          <div className="relative space-y-1.5 px-4 py-4 font-mono text-[11px] leading-relaxed sm:text-xs">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                className="flex gap-3"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
              >
                <span className="w-3 shrink-0 text-right text-muted-foreground/40">{i + 1}</span>
                <span style={{ paddingLeft: `${line.indent * 14}px` }}>
                  {line.tokens.map(([t, c], j) => (
                    <span key={j} className={c}>
                      {t}
                    </span>
                  ))}
                </span>
              </motion.div>
            ))}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-primary/10 to-transparent"
              style={{ animation: "scan 6s linear infinite" }}
            />
          </div>
        </div>
        {/* keyboard base */}
        <div
          className="mx-auto h-6 rounded-b-2xl border border-t-0 border-border bg-gradient-to-b from-secondary to-[#0b0b10]"
          style={{ transform: "rotateX(60deg) translateY(6px)", transformOrigin: "top" }}
        />
        <div className="mx-auto mt-3 h-24 w-[85%] rounded-[50%] bg-primary/20 blur-3xl" />
      </motion.div>

      {/* desk grid */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 grid-overlay opacity-70" />
    </div>
  );
}
