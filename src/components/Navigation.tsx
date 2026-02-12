import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";


type NavigationProps = {
  orijentation?: 'col' | 'row';
}  

const Navigation = ({ orijentation = 'row' }: NavigationProps) => {
  const t = useTranslations("Header");
  return (
    <nav className={`flex gap-x-6 gap-y-2 flex-${orijentation}`}>
      <Link href="/">{t("aboutUs")}</Link>
      <Link href="/">{t("services")}</Link>
      <Link href="/">{t("contactUs")}</Link>
    </nav>    
  )
};

export default Navigation;
