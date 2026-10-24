
import { useState } from "react";

import {
  ArrowUpRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Images,
  Layers3,
  Smartphone,
  Sparkles,
  WalletCards,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useLanguage } from "@/i18n/useLanguage";

import luckysStorefront from "@/assets/projects/luckys-storefront.png";
import luckysCommerce from "@/assets/projects/luckys-commerce.png";
import luckysAdmin from "@/assets/projects/luckys-admin.png";
import luckysMobile from "@/assets/projects/luckys-mobile.jpeg";
import luckysAi from "@/assets/projects/luckys-ai.png";

import akOrder from "@/assets/projects/ak-order.jpeg";
import akCache from "@/assets/projects/ak-caching.jpeg";
import akCalendar from "@/assets/projects/ak-calendar.jpeg";
import akFirebase from "@/assets/projects/ak-firebasemessaging.jpeg";
import akCloudinary from "@/assets/projects/ak-cloudinaryProtection.jpeg";

// =====================================================
// ENGLISH / GERMAN TRANSLATIONS
// =====================================================

const translations = {
  en: {
    badges: [
      "Client Case Study",
      "Web + Android",
      "Independent Development",
      "0 CHF Infrastructure Goal",
    ],
    heading: "Client Commerce",
    headingHighlight: "Platforms",
    introduction:
      "Two commerce platforms designed and developed end-to-end for small businesses with different operational needs but a shared requirement: powerful software without expensive infrastructure.",

    gallery: {
      open: "Open image",
      previous: "Previous image",
      next: "Next image",
    },

    galleryTitles: [
      "Storefront",
      "Commerce workflow",
      "AI product management",
      "Administration & analytics",
      "Android application",
      "Order management",
      "Caching & performance",
      "Google Calendar integration",
      "Firebase push notifications",
      "Cloudinary image protection",
    ],

    capabilities: [
      {
        title: "AI-assisted commerce",
        description:
          "Product images can be analyzed to assist with product information, while natural-language search helps customers discover suitable products.",
      },
      {
        title: "Web + Android",
        description:
          "Full customer and administrative experiences across responsive Next.js web applications and Expo / React Native Android apps.",
      },
      {
        title: "Caching & performance",
        description:
          "Public storefront data is cached to reduce repeated backend work, with manual administrator cache invalidation when fresh data is required.",
      },
      {
        title: "Cost-conscious architecture",
        description:
          "The systems were designed around a strict goal of keeping infrastructure costs at zero wherever feasible for early-stage businesses.",
      },
    ],

    shared: {
      label: "Shared Commerce Foundation",
      heading: "One foundation, adapted to two businesses.",
      features: [
        "Email/password and Google OAuth authentication",
        "Password recovery and account management",
        "Product and category administration",
        "Configurable storefront settings",
        "Cart, checkout and order lifecycle",
        "Customer and administrator notifications",
        "Firebase FCM and Expo notifications",
        "Google Calendar integration",
        "Analytics and visitor monitoring",
        "Customer reviews and social channels",
        "Storefront caching",
        "Manual cache invalidation",
        "Catalog mode with hidden public pricing",
        "Responsive web + Android applications",
      ],
    },

    luckys: {
      category: "Retail commerce",
      features: [
        "AI analysis of uploaded product images to assist with product names and descriptions",
        "AI-powered product discovery for natural-language customer searches",
        "Pre-booking and configurable catalog workflows",
        "Catalog mode allowing orders while public prices remain hidden",
        "ImageKit image optimization and bandwidth monitoring",
        "Automatic infrastructure protection based on usage thresholds",
        "Customer reviews, Instagram, Facebook, YouTube and WhatsApp integrations",
      ],
    },

    homeCook: {
      category: "Food ordering & fulfilment",
      features: [
        "Configurable PhonePe, Google Pay, bank transfer and cash-on-delivery payment methods",
        "Customer-booked or administrator-requested delivery workflows",
        "Customer and administrator post-order editing",
        "Historical payment, delivery and order-change records",
        "Notifications when customers modify active orders",
        "Google Calendar integration for order fulfilment",
        "Catalog mode, caching and mobile administrative controls",
      ],
    },

    constraint: {
      label: "Engineering Constraint",
      heading: "Keep infrastructure cost at 0 CHF wherever possible.",
      description:
        "Cost was treated as a system requirement. Free-tier services were paired with caching, optimized image delivery, external video hosting, usage monitoring, protective thresholds and administrative controls to reduce unnecessary bandwidth, storage and backend work.",
    },

    technology: "Technology",
    liveSite: "Live site",
    webRepo: "Web repo",
    androidRepo: "Android repo",
  },

  de: {
    badges: [
      "Kundenprojekt",
      "Web + Android",
      "Eigenständige Entwicklung",
      "Infrastrukturziel: 0 CHF",
    ],
    heading: "E-Commerce-Plattformen",
    headingHighlight: "für Kunden",
    introduction:
      "Zwei E-Commerce-Plattformen, die ich für kleine Unternehmen mit unterschiedlichen Geschäftsanforderungen vollständig konzipiert und entwickelt habe. Beide verfolgen ein gemeinsames Ziel: leistungsfähige Software ohne hohe Infrastrukturkosten.",

    gallery: {
      open: "Bild vergrössern",
      previous: "Vorheriges Bild",
      next: "Nächstes Bild",
    },

    galleryTitles: [
      "Online-Shop",
      "E-Commerce-Abläufe",
      "KI-gestützte Produktverwaltung",
      "Administration & Analysen",
      "Android-Anwendung",
      "Bestellverwaltung",
      "Caching & Performance",
      "Google-Kalenderintegration",
      "Firebase-Push-Benachrichtigungen",
      "Cloudinary-Bildschutz",
    ],

    capabilities: [
      {
        title: "KI-gestützter E-Commerce",
        description:
          "Produktbilder können mithilfe künstlicher Intelligenz analysiert werden, um Produktinformationen zu erstellen. Eine Suche in natürlicher Sprache erleichtert Kunden das Finden passender Produkte.",
      },
      {
        title: "Web + Android",
        description:
          "Vollständige Kunden- und Administrationsfunktionen in responsiven Next.js-Webanwendungen sowie Android-Apps mit Expo und React Native.",
      },
      {
        title: "Caching & Performance",
        description:
          "Öffentliche Shop-Daten werden zwischengespeichert, um wiederholte Backend-Anfragen zu reduzieren. Bei Bedarf können Administratoren den Cache manuell aktualisieren.",
      },
      {
        title: "Kostenbewusste Architektur",
        description:
          "Die Systeme wurden mit dem Ziel entwickelt, die Infrastrukturkosten für kleine Unternehmen möglichst bei null zu halten.",
      },
    ],

    shared: {
      label: "Gemeinsame technische Grundlage",
      heading: "Eine Basis, angepasst an zwei Unternehmen.",
      features: [
        "Authentifizierung per E-Mail/Passwort und Google OAuth",
        "Passwortwiederherstellung und Kontoverwaltung",
        "Produkt- und Kategorieverwaltung",
        "Konfigurierbare Shop-Einstellungen",
        "Warenkorb, Bestellabschluss und Bestellverwaltung",
        "Benachrichtigungen für Kunden und Administratoren",
        "Benachrichtigungen mit Firebase FCM und Expo",
        "Google-Kalenderintegration",
        "Analysen und Besucherstatistiken",
        "Kundenbewertungen und Social-Media-Anbindungen",
        "Caching für öffentliche Shop-Daten",
        "Manuelle Cache-Aktualisierung",
        "Katalogmodus mit ausgeblendeten öffentlichen Preisen",
        "Responsive Web- und Android-Anwendungen",
      ],
    },

    luckys: {
      category: "Online-Handel",
      features: [
        "KI-Analyse hochgeladener Produktbilder zur Unterstützung bei Produktnamen und Beschreibungen",
        "KI-gestützte Produktsuche mit natürlichsprachlichen Kundenanfragen",
        "Vorbestellungen und konfigurierbare Katalogabläufe",
        "Katalogmodus mit Bestellfunktion und ausgeblendeten öffentlichen Preisen",
        "Bildoptimierung und Bandbreitenüberwachung mit ImageKit",
        "Automatische Schutzmechanismen für Infrastruktur und Ressourcen anhand definierter Nutzungsschwellen",
        "Integration von Kundenbewertungen, Instagram, Facebook, YouTube und WhatsApp",
      ],
    },

    homeCook: {
      category: "Essensbestellungen & Lieferung",
      features: [
        "Konfigurierbare Zahlungsmethoden: PhonePe, Google Pay, Banküberweisung und Barzahlung bei Lieferung",
        "Lieferabläufe mit Buchung durch Kunden oder Beauftragung durch Administratoren",
        "Nachträgliche Bestelländerungen durch Kunden und Administratoren",
        "Nachverfolgung von Zahlungen, Lieferungen und Bestelländerungen",
        "Benachrichtigungen bei Änderungen aktiver Bestellungen durch Kunden",
        "Google-Kalenderintegration zur Planung der Bestellabwicklung",
        "Katalogmodus, Caching und mobile Administrationsfunktionen",
      ],
    },

    constraint: {
      label: "Technische Herausforderung",
      heading: "Infrastrukturkosten möglichst bei 0 CHF halten.",
      description:
        "Die Betriebskosten wurden von Anfang an als wichtige Systemanforderung berücksichtigt. Kostenlose Service-Tarife werden mit Caching, optimierter Bildauslieferung, externem Video-Hosting, Nutzungsüberwachung, Schutzmechanismen und Administrationsfunktionen kombiniert. Dadurch lassen sich unnötiger Datenverkehr, Speicherverbrauch und wiederholte Backend-Aufrufe reduzieren.",
    },

    technology: "Technologien",
    liveSite: "Live-Webseite",
    webRepo: "Web-Repository",
    androidRepo: "Android-Repository",
  },
};

// =====================================================
// GALLERY IMAGES
// =====================================================

const galleryImages = [
  luckysStorefront,
  luckysCommerce,
  luckysAi,
  luckysAdmin,
  luckysMobile,
  akOrder,
  akCache,
  akCalendar,
  akFirebase,
  akCloudinary,
];

const capabilityIcons = [
  Bot,
  Smartphone,
  Gauge,
  WalletCards,
];

// =====================================================
// SHARED LIST COMPONENT
// =====================================================

function FeatureList({ items }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-zinc-400">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="shrink-0 text-purple-400">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// =====================================================
// IMAGE GALLERY
// =====================================================

function CaseStudyGallery({ t }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const currentImage = galleryImages[index];
  const currentTitle = t.galleryTitles[index];

  const MIN_SWIPE_DISTANCE = 50;

  function previous() {
    setIndex((value) =>
      value === 0
        ? galleryImages.length - 1
        : value - 1
    );
  }

  function next() {
    setIndex((value) =>
      value === galleryImages.length - 1
        ? 0
        : value + 1
    );
  }

  function handleTouchStart(event) {
    setTouchEndX(null);
    setIsSwiping(false);

    setTouchStartX(
      event.targetTouches[0].clientX
    );
  }

  function handleTouchMove(event) {
    const currentX = event.targetTouches[0].clientX;
    setTouchEndX(currentX);

    if (touchStartX !== null) {
      const distance = Math.abs(
        touchStartX - currentX
      );

      if (distance > 10) {
        setIsSwiping(true);
      }
    }
  }

  function handleTouchEnd() {
    if (
      touchStartX === null ||
      touchEndX === null
    ) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }

    const distance =
      touchStartX - touchEndX;

    if (distance > MIN_SWIPE_DISTANCE) {
      next();
    } else if (
      distance < -MIN_SWIPE_DISTANCE
    ) {
      previous();
    }

    setTouchStartX(null);
    setTouchEndX(null);

    setTimeout(() => {
      setIsSwiping(false);
    }, 100);
  }

  function handleImageClick() {
    if (isSwiping) return;

    setOpen(true);
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
        <button
          type="button"
          onClick={handleImageClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="group relative block aspect-[16/9] w-full touch-pan-y overflow-hidden bg-zinc-900"
        >
          <img
            src={currentImage}
            alt={currentTitle}
            draggable="false"
            className="h-full w-full select-none object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />

          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3 py-1.5 text-xs text-white backdrop-blur">
            <Images className="size-3.5" />
            {t.gallery.open}
          </div>
        </button>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
          <button
            type="button"
            onClick={previous}
            aria-label={t.gallery.previous}
            className="flex size-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>

          <div className="text-center">
            <p className="text-sm font-medium text-zinc-300">
              {currentTitle}
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              {index + 1} / {galleryImages.length}
            </p>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label={t.gallery.next}
            className="flex size-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className="max-h-[92vh] max-w-6xl border-white/10 bg-zinc-950 p-3">
          <DialogTitle className="sr-only">
            {currentTitle}
          </DialogTitle>

          <div
            className="relative flex min-h-[65vh] touch-pan-y items-center justify-center overflow-hidden rounded-xl bg-black"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={currentImage}
              alt={currentTitle}
              draggable="false"
              className="max-h-[84vh] max-w-full select-none object-contain"
            />

            <button
              type="button"
              onClick={previous}
              aria-label={t.gallery.previous}
              className="absolute left-3 flex size-11 items-center justify-center rounded-full bg-black/70 text-white"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label={t.gallery.next}
              className="absolute right-3 flex size-11 items-center justify-center rounded-full bg-black/70 text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// =====================================================
// EXTERNAL LINK
// =====================================================

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/[0.07] hover:text-white"
    >
      {children}
      <ArrowUpRight className="size-4" />
    </a>
  );
}

// =====================================================
// CLIENT COMMERCE PAGE
// =====================================================

export default function ClientCommercePage() {
  const { language } = useLanguage();

  const lang = language === "de" ? "de" : "en";
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:px-10">
        {/* INTRODUCTION */}
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex flex-wrap justify-center gap-2">
              {t.badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={
                    index === 0
                      ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
                      : "border-white/10 bg-white/[0.03] text-zinc-300"
                  }
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="mt-4 text-xl font-medium text-zinc-300">
              Lucky&apos;s Collection + A Home Cook
            </p>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {t.introduction}
            </p>
          </div>
        </RevealOnScroll>

        {/* GALLERY */}
        <RevealOnScroll>
          <div className="mx-auto mt-14 max-w-5xl">
            <CaseStudyGallery t={t} />
          </div>
        </RevealOnScroll>

        {/* CORE CAPABILITIES */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {t.capabilities.map((item, index) => {
            const Icon = capabilityIcons[index];

            return (
              <RevealOnScroll key={index}>
                <Card className="h-full border-white/10 bg-zinc-950/60 shadow-none">
                  <CardContent className="p-6">
                    <div className="mb-5 flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                      <Icon className="size-4 text-purple-400" />
                    </div>

                    <h2 className="text-lg font-semibold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* SHARED FOUNDATION */}
        <RevealOnScroll>
          <div className="mt-16 rounded-2xl border border-white/10 bg-zinc-950/60 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
              {t.shared.label}
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              {t.shared.heading}
            </h2>

            <div className="mt-7 grid gap-8 lg:grid-cols-2">
              <FeatureList
                items={t.shared.features.slice(0, 7)}
              />
              <FeatureList
                items={t.shared.features.slice(7)}
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* CLIENT-SPECIFIC FEATURES */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* LUCKY'S COLLECTION */}
          <RevealOnScroll>
            <Card className="h-full border-white/10 bg-zinc-950/60 shadow-none">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Sparkles className="size-4 text-purple-400" />
                </div>

                <CardTitle className="text-2xl text-white">
                  Lucky&apos;s Collection
                </CardTitle>

                <p className="text-sm text-zinc-500">
                  {t.luckys.category}
                </p>
              </CardHeader>

              <CardContent>
                <FeatureList items={t.luckys.features} />

                <div className="mt-7 flex flex-wrap gap-2">
                  <ExternalLink href="https://luckycharmcreations.vercel.app">
                    {t.liveSite}
                  </ExternalLink>

                  <ExternalLink href="https://github.com/luckyscollectionshop-afk/shop">
                    {t.webRepo}
                  </ExternalLink>

                  <ExternalLink href="https://github.com/luckyscollectionshop-afk/mobileshop">
                    {t.androidRepo}
                  </ExternalLink>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* A HOME COOK */}
          <RevealOnScroll>
            <Card className="h-full border-white/10 bg-zinc-950/60 shadow-none">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Layers3 className="size-4 text-purple-400" />
                </div>

                <CardTitle className="text-2xl text-white">
                  A Home Cook
                </CardTitle>

                <p className="text-sm text-zinc-500">
                  {t.homeCook.category}
                </p>
              </CardHeader>

              <CardContent>
                <FeatureList items={t.homeCook.features} />

                <div className="mt-7 flex flex-wrap gap-2">
                  <ExternalLink href="https://arunaskitchen.vercel.app">
                    {t.liveSite}
                  </ExternalLink>

                  <ExternalLink href="https://github.com/ahomecook12/webcook">
                    {t.webRepo}
                  </ExternalLink>

                  <ExternalLink href="https://github.com/ahomecook12/mobcook">
                    {t.androidRepo}
                  </ExternalLink>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>

        {/* ENGINEERING CONSTRAINT */}
        <RevealOnScroll>
          <div className="mt-12 rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-blue-500/[0.05] p-7 sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-400/10">
                <Zap className="size-5 text-purple-300" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300">
                  {t.constraint.label}
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  {t.constraint.heading}
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400">
                  {t.constraint.description}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <Separator className="my-16 bg-white/10" />

        {/* TECHNOLOGY */}
        <RevealOnScroll>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              {t.technology}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "React Native",
                "Expo",
                "Supabase",
                "PostgreSQL",
                "Firebase FCM",
                "Google OAuth",
                "Google Calendar",
                "ImageKit",
                "Vercel",
                "Caching",
              ].map((technology) => (
                <Badge
                  key={technology}
                  variant="outline"
                  className="border-white/15 bg-white/[0.04] px-3 py-1.5 text-zinc-300"
                >
                  {technology}
                </Badge>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
