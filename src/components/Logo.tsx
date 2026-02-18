import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  hideText?: boolean;
};

export function Logo({ hideText = false }: LogoProps) {
  const t = useTranslations();
  return (
    <Link
      href="#top"
      className="flex items-center gap-3"
      aria-label="Back to top"
    >
      <Image
        src="/logo.png"
        alt="IP logo"
        width={52}
        height={42}
        className="h-10.5 w-auto"
      />
      <div className={`flex flex-col ${hideText && "hidden sm:flex"}`}>
        <span className="text-[13px] uppercase tracking-[0.15em] text-white/70">
          {t("logo.subtitle")}
        </span>
        <span className="text-[21px] font-semibold leading-tight tracking-tight text-white">
          {t("logo.name")}
        </span>
      </div>
    </Link>
  );
}
