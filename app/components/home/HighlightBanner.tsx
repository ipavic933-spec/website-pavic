export default function HighlightBanner() {
  return (
    <section
      aria-label="Istaknuta pravna poruka"
      className="w-full border-y border-[var(--border)] bg-[var(--banner-bg)] py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <p className="mx-auto max-w-4xl text-center text-xl leading-relaxed font-semibold text-[var(--banner-text)] sm:text-2xl">
          Poseban naglasak stavljamo na pravnu podršku poduzetnicima, trgovačkim društvima i obrtima u svakodnevnom poslovanju i rješavanju sporova.
        </p>
      </div>
    </section>
  );
}
