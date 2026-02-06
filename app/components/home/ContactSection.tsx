export default function ContactSection() {
  return (
    <section id="contact" className="mt-20 scroll-mt-28 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-10 sm:px-8">
      <h2 className="text-3xl font-semibold text-[var(--text)]">Contact</h2>
      <span className="mt-3 block h-1 w-20 rounded-full bg-[var(--accent)]" />
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <form className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Name
          <input
            type="text"
            name="name"
            className="rounded-md border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--text)] outline-none ring-[var(--accent)] transition focus:ring-2"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Email
          <input
            type="email"
            name="email"
            className="rounded-md border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--text)] outline-none ring-[var(--accent)] transition focus:ring-2"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Message
          <textarea
            name="message"
            rows={5}
            className="rounded-md border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--text)] outline-none ring-[var(--accent)] transition focus:ring-2"
          />
        </label>
        <button
          type="submit"
          className="btn-primary w-fit px-6 py-3 text-sm"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
