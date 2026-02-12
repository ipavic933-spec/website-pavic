import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  
  return (
    <footer className="w-full border-t bg-black px-6 py-8 text-sm text-white">
      <div className="m-auto flex w-full max-w-6xl flex-col gap-3">
        <div className="flex flex-row gap-1">
          <div className="flex flex-col">
            <div>
              {t('workingHours')}
            </div>
            <div>
              {t("meetings")}
            </div>
          </div>
          <div>Email: {t('emailAdress')}</div>
          <div>Phone: {t('phoneNumber')}</div>
          <div>Address: {t('address')}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
