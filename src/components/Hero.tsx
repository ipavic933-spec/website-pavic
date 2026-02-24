"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
  type TouchEvent,
} from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroBadges } from "@/data/heroBadges";
import { useTranslations } from "next-intl";
import { type ServiceId } from "@/data/services";

const HERO_IMAGES = [
  { src: "/sv-duje.png", key: "sv-duje" },
  { src: "/lady-justice.jpg", key: "lady-justice" },
  { src: "/document-signing.jpg", key: "document-signing" },
];

type HeroProps = {
  serviceId?: ServiceId;
};

export function Hero({ serviceId }: HeroProps) {
  const t = useTranslations();
  const title = serviceId ? t(`services.${serviceId}.title`) : t("hero.title");
  const subtitle = serviceId
    ? t(`services.${serviceId}.desc`)
    : t("hero.subtitle");
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
    );
  }, []);

  const handleCarouselClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const { left, width } = event.currentTarget.getBoundingClientRect();
      const clickX = event.clientX - left;

      if (clickX < width / 2) {
        goToPrev();
        return;
      }

      goToNext();
    },
    [goToNext, goToPrev],
  );

  const handleIndicatorClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>, index: number) => {
      event.stopPropagation();
      setActiveIndex(index);
    },
    [],
  );

  const handleTouchStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  }, []);

  const handleTouchEnd = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      if (touchStartX === null) return;

      const endX = event.changedTouches[0]?.clientX;
      if (typeof endX !== "number") {
        setTouchStartX(null);
        return;
      }

      const swipeDelta = touchStartX - endX;
      setTouchStartX(null);

      if (Math.abs(swipeDelta) < 40) return;
      if (swipeDelta > 0) {
        goToNext();
        return;
      }

      goToPrev();
    },
    [goToNext, goToPrev, touchStartX],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) return;

    const intervalId = window.setInterval(() => {
      goToNext();
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [goToNext]);

  return (
    <section className="relative overflow-hidden bg-brand-900 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:py-12">
        <div className="relative z-10 flex flex-1 flex-col items-start">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mb-6 max-w-xl font-serif text-4xl leading-[1.07] text-white md:text-5xl lg:text-[3.35rem]">
            <span className="text-balance">{title}</span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {subtitle}
          </p>

          <div className="mb-9 flex flex-wrap gap-2.5">
            {heroBadges.map((key) => (
              <Badge
                key={key}
                variant="secondary"
                className="rounded-full bg-white/12 px-[0.92rem] py-[0.4rem] text-[0.79rem] font-medium text-white/85 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/12"
              >
                {t(key)}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-white px-7 font-semibold text-brand-900 shadow-sm ring-1 ring-white/15 hover:bg-brand-50"
            >
              <Link href="#contact">{t("hero.cta")}</Link>
            </Button>
          </div>

          <p className="mt-4 text-xs text-white/60">{t("hero.micro")}</p>
        </div>

        <div className="relative flex-1">
          <div
            className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-white/6 ring-1 ring-white/15 shadow-2xl shadow-black/20"
            onClick={handleCarouselClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {HERO_IMAGES.map((image, index) => (
              <Image
                key={image.key}
                src={image.src}
                alt={t("hero.imgAlt")}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center px-4 z-10">
              <div className="flex items-center gap-2">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={`hero-slide-${index}`}
                    type="button"
                    onClick={(event) => handleIndicatorClick(event, index)}
                    className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/30 transition ${
                      index === activeIndex
                        ? "bg-white"
                        : "bg-white/35 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
