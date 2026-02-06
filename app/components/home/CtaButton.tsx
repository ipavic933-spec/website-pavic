type CtaButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export default function CtaButton({ href = "#contact", label = "Contact", className = "" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`btn-primary px-6 py-3 text-sm ${className}`.trim()}
    >
      {label}
    </a>
  );
}
