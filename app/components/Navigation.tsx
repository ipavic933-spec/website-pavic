import Link from "next/link";

const Navigation = () => {
  return (
    <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium text-[var(--text)] sm:text-base">
      <Link
        href="#about"
        className="rounded-sm transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        About Us
      </Link>
      <Link
        href="#services"
        className="rounded-sm transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        Services
      </Link>
    </nav>
  );
};

export default Navigation;
