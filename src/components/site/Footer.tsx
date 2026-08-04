export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <p className="min-w-0 text-sm text-muted-foreground">
          <span className="font-mono text-foreground">Rayen Abidi</span> — Full Stack Developer,
          Tunisia
        </p>
        <p className="shrink-0 font-mono text-xs text-muted-foreground">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
