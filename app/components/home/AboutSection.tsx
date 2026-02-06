export default function AboutSection() {
  return (
    <section id="about" className="mt-20 scroll-mt-28 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <div>
        <h2 className="text-3xl font-semibold text-[var(--text)]">About Me</h2>
        <span className="mt-3 block h-1 w-20 rounded-full bg-[var(--accent)]" />
        <p className="mt-5 text-base leading-relaxed text-zinc-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div className="aspect-[4/5] w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-[var(--accent)]/60 text-sm font-medium tracking-wide text-zinc-500 uppercase">
          Photo Placeholder
        </div>
      </div>
    </section>
  );
}
