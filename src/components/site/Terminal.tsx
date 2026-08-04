import { useEffect, useRef, useState } from "react";

const script = `rayen@portfolio:~$ whoami

{
  "name": "Rayen Abidi",
  "role": "Full Stack Developer",
  "focus": [
    "Web Applications",
    "Backend Architecture",
    "Modern UI/UX"
  ],
  "location": "Tunisia",
  "available": true
}
`;

function colorize(line: string) {
  if (line.startsWith("rayen@portfolio")) {
    const [prompt, ...rest] = line.split("$ ");
    return (
      <>
        <span className="text-signal">{prompt}$ </span>
        <span className="text-foreground">{rest.join("$ ")}</span>
      </>
    );
  }
  const match = line.match(/^(\s*)"([^"]+)":\s*(.*)$/);
  if (match) {
    const [, space, key, value] = match;
    return (
      <>
        {space}
        <span className="text-primary">&quot;{key}&quot;</span>
        <span className="text-muted-foreground">: </span>
        <span className={value.startsWith("\"") ? "text-signal" : "text-violet"}>{value}</span>
      </>
    );
  }
  if (line.trim().startsWith("\"")) return <span className="text-signal">{line}</span>;
  return <span className="text-muted-foreground">{line}</span>;
}

export function Terminal() {
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(script.slice(0, i));
      if (i >= script.length) window.clearInterval(id);
    }, 16);
    return () => window.clearInterval(id);
  }, [started]);

  return (
    <section className="relative mx-auto max-w-4xl px-5 py-20" ref={ref}>
      <div className="overflow-hidden rounded-2xl glass glow-ring">
        <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
          <span className="ml-3 font-mono text-[11px] text-muted-foreground">
            bash — rayen@portfolio
          </span>
        </div>
        <pre className="min-h-[340px] overflow-x-auto px-5 py-5 font-mono text-[12px] leading-6 sm:text-sm">
          <code>
            {typed.split("\n").map((line, i) => (
              <div key={i}>{colorize(line)}</div>
            ))}
          </code>
          <span
            className="inline-block h-4 w-2 translate-y-0.5 bg-primary"
            style={{ animation: "caret-blink 1s step-end infinite" }}
          />
        </pre>
      </div>
    </section>
  );
}
