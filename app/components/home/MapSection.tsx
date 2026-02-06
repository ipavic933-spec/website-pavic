export default function MapSection() {
  return (
    <section className="mt-20" aria-labelledby="location-heading">
      <h2 id="location-heading" className="text-3xl font-semibold text-[var(--text)]">
        Location
      </h2>
      <span className="mt-3 block h-1 w-20 rounded-full bg-[var(--accent)]" />
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
        Map preview placeholder. Replace the container content with a Google Maps iframe embed when ready.
      </p>
      <div className="mt-8 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="aspect-video w-full p-6">
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-[var(--accent)]/60 bg-white px-6 text-center text-sm leading-relaxed text-zinc-500">
            Paste Google Maps iframe here.
          </div>
        </div>
      </div>
    </section>
  );
}
