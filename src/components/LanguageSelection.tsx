import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const LanguageSelection = () => {
  const locale = useLocale();
    return (
        <div className="flex items-center gap-2 text-sm">
        <Link href="/" locale="hr" className={locale === "hr" ? "underline" : "opacity-70"}>
          HR
        </Link>
        <span>/</span>
        <Link href="/" locale="en" className={locale === "en" ? "underline" : "opacity-70"}>
          EN
        </Link>
      </div>
    )
}
export default LanguageSelection;