import en from "../../messages/en.json";
import hr from "../../messages/hr.json";
import { services, type ServiceId } from "@/data/services";
import { slugify } from "@/lib/slugify";

const messagesByLocale = { hr, en } as const;

type Messages = typeof hr;
type Locale = keyof typeof messagesByLocale;

function getMessages(locale: string): Messages {
  if (locale in messagesByLocale) {
    return messagesByLocale[locale as Locale];
  }

  return messagesByLocale.hr;
}

export function slugForService(messages: Messages, serviceId: ServiceId): string {
  const title = messages?.services?.[serviceId]?.title;

  if (typeof title !== "string" || !title.trim()) {
    return slugify(serviceId);
  }

  return slugify(title);
}

export function getServiceSlugs(locale: string): string[] {
  const messages = getMessages(locale);

  return services.map((service) => slugForService(messages, service.id));
}

export function getServiceIdBySlug(
  locale: string,
  serviceSlug: string,
): ServiceId | null {
  const messages = getMessages(locale);

  const service = services.find(
    (item) => slugForService(messages, item.id) === serviceSlug,
  );

  return service?.id ?? null;
}

export function getServiceMessages(locale: string): Messages {
  return getMessages(locale);
}
