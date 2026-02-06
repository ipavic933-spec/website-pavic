type ServiceItem = {
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Sit Amet Consectetur",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Adipiscing Elit Sed",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Tempor Incididunt Labore",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "Exercitation Ullamco",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.",
  },
  {
    title: "Commodo Consequat",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mt-20 scroll-mt-28">
      <h2 className="text-3xl font-semibold text-[var(--text)]">Services</h2>
      <span className="mt-3 block h-1 w-20 rounded-full bg-[var(--accent)]" />
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="flex h-full w-full flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <span aria-hidden="true" className="mb-4 h-1 w-14 rounded-full bg-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text)]">{service.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-zinc-700">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
