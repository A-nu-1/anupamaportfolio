
import { useState } from "react";

import {
  ArrowUpRight,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Images,
  Languages,
  ListMusic,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useLanguage } from "@/i18n/useLanguage";

import bhajansHome from "@/assets/projects/bhajans-home.png";
import bhajansReader from "@/assets/projects/bhajans-reader.png";
import bhajansCategories from "@/assets/projects/bhajans-categories.png";
import bhajansTransliterate from "@/assets/projects/bhajans-transliterate.png";
import bhajansBulkParagraphs from "@/assets/projects/bhajans-bulk-paragraphs.png";
import bhajansLanguages from "@/assets/projects/bhajans-languages.png";
import bhajansYoutube from "@/assets/projects/bhajans-youtubeIntegration.png";

// =====================================================
// PAGE TRANSLATIONS
// =====================================================

const translations = {
  en: {
    communityBadge: "Personal Community Project",
    platformBadge: "Web + Android",
    multilingualBadge: "Multilingual",

    introduction1:
      "A devotional lyrics platform I created as a personal contribution to my spiritual community, where group singing and devotional songs are an important part of community life.",
    introduction2:
      "The goal was simple: replace cumbersome song files with a searchable, structured collection that people can access whenever and wherever they need it.",

    gallery: {
      open: "Open image",
      previous: "Previous image",
      next: "Next image",
    },

    why: {
      label: "Why I Built It",
      heading: "A small contribution to make community life easier.",
      description:
        "Our community sings from a large collection of devotional songs. Maintaining and searching through large files can become difficult, especially when people need lyrics quickly during gatherings. Bhajans turns that collection into an accessible digital library.",
    },

    highlights: [
      {
        title: "Fast song discovery",
        description:
          "Members can search the collection, browse devotional categories and find songs without navigating large shared files.",
      },
      {
        title: "Purpose-built reader",
        description:
          "Lyrics are structured into readable paragraphs with previous/next navigation, paragraph jumping and reader controls.",
      },
      {
        title: "Multilingual support",
        description:
          "The platform supports Kannada, English and Hindi with configurable language management and transliteration tooling.",
      },
      {
        title: "Tools for maintainers",
        description:
          "Administrative tools reduce the effort needed to add, structure, categorize and maintain a growing devotional song collection.",
      },
    ],

    members: {
      label: "Community Experience",
      heading: "Find the right song quickly.",
      features: [
        "Search devotional songs by title",
        "Browse songs by deity or category",
        "Favorites for frequently used bhajans",
        "Kannada and English/transliterated titles",
        "Structured lyrics reader",
        "Previous / next song navigation",
        "Jump directly to a paragraph",
        "Reader language and text controls",
      ],
    },

    maintenance: {
      label: "Maintainer Tools",
      heading: "Making a large song collection easier to manage.",
      features: [
        "Create and edit bhajans",
        "Category management with images",
        "Configurable language management",
        "Kannada, English and Hindi support",
        "Bulk pasted lyrics can be converted into structured paragraphs",
        "Kannada ↔ English transliteration tooling",
        "Theme and reader personalization controls",
        "Admin tooling separated from the reader experience",
      ],
    },

    technology: "Technology",
    techTags: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Web + Android",
      "Search",
      "Multilingual Content",
      "Transliteration",
      "YouTube Media",
    ],

    liveApp: "Live web app",
    androidRepo: "Android repository",
  },

  de: {
    communityBadge: "Eigenes Gemeinschaftsprojekt",
    platformBadge: "Web + Android",
    multilingualBadge: "Mehrsprachig",

    introduction1:
      "Eine Plattform für spirituelle Liedtexte, die ich als persönlichen Beitrag für meine Gemeinschaft entwickelt habe. Gemeinsames Singen und spirituelle Lieder sind ein wichtiger Bestandteil des Gemeinschaftslebens.",
    introduction2:
      "Das Ziel war einfach: umfangreiche und unübersichtliche Lieddateien durch eine strukturierte, durchsuchbare Sammlung ersetzen, die jederzeit und von überall zugänglich ist.",

    gallery: {
      open: "Bild vergrössern",
      previous: "Vorheriges Bild",
      next: "Nächstes Bild",
    },

    why: {
      label: "Warum ich dieses Projekt entwickelt habe",
      heading: "Ein kleiner Beitrag für ein einfacheres Gemeinschaftsleben.",
      description:
        "Unsere Gemeinschaft nutzt eine umfangreiche Sammlung spiritueller Lieder. Die Verwaltung und Suche in grossen Dateien kann aufwendig sein, insbesondere wenn Liedtexte während gemeinsamer Veranstaltungen schnell benötigt werden. Bhajans macht diese Sammlung als digitale Bibliothek einfach zugänglich.",
    },

    highlights: [
      {
        title: "Schnelle Liedsuche",
        description:
          "Mitglieder können Lieder suchen, spirituelle Kategorien durchsuchen und die gewünschten Liedtexte finden, ohne grosse gemeinsame Dateien öffnen zu müssen.",
      },
      {
        title: "Benutzerfreundliche Liedtextanzeige",
        description:
          "Liedtexte werden in übersichtlichen Absätzen dargestellt. Die Anwendung bietet Navigation zwischen Liedern, direkte Absatzwahl und verschiedene Anzeigeeinstellungen.",
      },
      {
        title: "Mehrsprachige Unterstützung",
        description:
          "Die Plattform unterstützt Kannada, Englisch und Hindi sowie eine konfigurierbare Sprachverwaltung und Werkzeuge zur Transliteration.",
      },
      {
        title: "Werkzeuge für die Verwaltung",
        description:
          "Administrationsfunktionen vereinfachen das Hinzufügen, Strukturieren, Kategorisieren und Pflegen einer wachsenden Liedersammlung.",
      },
    ],

    members: {
      label: "Funktionen für Mitglieder",
      heading: "Das passende Lied schnell finden.",
      features: [
        "Spirituelle Lieder nach Titel suchen",
        "Lieder nach Gottheit oder Kategorie durchsuchen",
        "Favoriten für häufig verwendete Bhajans",
        "Liedtitel auf Kannada und Englisch bzw. in Transliteration",
        "Strukturierte und übersichtliche Liedtextanzeige",
        "Navigation zum vorherigen oder nächsten Lied",
        "Direkt zu einem bestimmten Absatz springen",
        "Einstellungen für Sprache und Textdarstellung",
      ],
    },

    maintenance: {
      label: "Administrationswerkzeuge",
      heading: "Eine umfangreiche Liedersammlung einfach verwalten.",
      features: [
        "Bhajans erstellen und bearbeiten",
        "Kategorien mit Bildern verwalten",
        "Konfigurierbare Sprachverwaltung",
        "Unterstützung für Kannada, Englisch und Hindi",
        "Mehrere eingefügte Liedtexte in strukturierte Absätze umwandeln",
        "Werkzeuge zur Transliteration zwischen Kannada und Englisch",
        "Design und Liedtextanzeige individuell anpassen",
        "Administrationsfunktionen getrennt von der Liedtextansicht",
      ],
    },

    technology: "Technologien",
    techTags: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Web + Android",
      "Suche",
      "Mehrsprachige Inhalte",
      "Transliteration",
      "YouTube-Integration",
    ],

    liveApp: "Webanwendung öffnen",
    androidRepo: "Android-Repository",
  },
};

// =====================================================
// GALLERY DATA
// =====================================================

const gallery = [
  {
    src: bhajansHome,
    title: {
      en: "Bhajan library",
      de: "Bhajan-Bibliothek",
    },
  },
  {
    src: bhajansReader,
    title: {
      en: "Lyrics reader",
      de: "Liedtextanzeige",
    },
  },
  {
    src: bhajansCategories,
    title: {
      en: "Category management",
      de: "Kategorieverwaltung",
    },
  },
  {
    src: bhajansTransliterate,
    title: {
      en: "Kannada ↔ English transliteration AI tool",
      de: "KI-gestützte Transliteration zwischen Kannada und Englisch",
    },
  },
  {
    src: bhajansBulkParagraphs,
    title: {
      en: "Bulk paragraph converter",
      de: "Umwandlung mehrerer Liedtexte in Absätze",
    },
  },
  {
    src: bhajansLanguages,
    title: {
      en: "Language management",
      de: "Sprachverwaltung",
    },
  },
  {
    src: bhajansYoutube,
    title: {
      en: "YouTube integration",
      de: "YouTube-Integration",
    },
  },
];

const highlightIcons = [
  Search,
  BookOpenText,
  Languages,
  Wrench,
];

// =====================================================
// IMAGE GALLERY
// =====================================================

function BhajansGallery({ language, t }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const current = gallery[index];
  const currentTitle = current.title[language];

  const MIN_SWIPE_DISTANCE = 50;

  function previous() {
    setIndex((value) =>
      value === 0 ? gallery.length - 1 : value - 1
    );
  }

  function next() {
    setIndex((value) =>
      value === gallery.length - 1 ? 0 : value + 1
    );
  }

  function handleTouchStart(event) {
    setTouchEndX(null);
    setIsSwiping(false);
    setTouchStartX(event.targetTouches[0].clientX);
  }

  function handleTouchMove(event) {
    const currentX = event.targetTouches[0].clientX;
    setTouchEndX(currentX);

    if (touchStartX !== null) {
      const distance = Math.abs(touchStartX - currentX);

      if (distance > 10) {
        setIsSwiping(true);
      }
    }
  }

  function handleTouchEnd() {
    if (touchStartX === null || touchEndX === null) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }

    const distance = touchStartX - touchEndX;

    if (distance > MIN_SWIPE_DISTANCE) {
      next();
    } else if (distance < -MIN_SWIPE_DISTANCE) {
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
            src={current.src}
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
              {index + 1} / {gallery.length}
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

      <Dialog open={open} onOpenChange={setOpen}>
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
              src={current.src}
              alt={currentTitle}
              draggable="false"
              className="max-h-[84vh] max-w-full select-none object-contain"
            />

            <button
              type="button"
              onClick={previous}
              aria-label={t.gallery.previous}
              className="absolute left-3 flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label={t.gallery.next}
              className="absolute right-3 flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white"
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
// FEATURE LIST
// =====================================================

function FeatureList({ items }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-zinc-400">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-purple-400">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// =====================================================
// BHAJANS PROJECT PAGE
// =====================================================

export default function BhajansProjectPage() {
  const { language } = useLanguage();
  const lang = language === "de" ? "de" : "en";
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:px-10">
        {/* INTRO */}
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex flex-wrap justify-center gap-2">
              <Badge
                variant="outline"
                className="border-purple-400/30 bg-purple-400/10 text-purple-300"
              >
                {t.communityBadge}
              </Badge>

              <Badge
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-zinc-300"
              >
                {t.platformBadge}
              </Badge>

              <Badge
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-zinc-300"
              >
                {t.multilingualBadge}
              </Badge>
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Bhajans
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {t.introduction1}
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {t.introduction2}
            </p>
          </div>
        </RevealOnScroll>

        {/* GALLERY */}
        <RevealOnScroll>
          <div className="mx-auto mt-14 max-w-5xl">
            <BhajansGallery language={lang} t={t} />
          </div>
        </RevealOnScroll>

        {/* WHY */}
        <RevealOnScroll>
          <div className="mt-16 rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-blue-500/[0.05] p-7 sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-400/10">
                <HeartHandshake className="size-5 text-purple-300" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300">
                  {t.why.label}
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {t.why.heading}
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400">
                  {t.why.description}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* HIGHLIGHTS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {t.highlights.map((item, index) => {
            const Icon = highlightIcons[index];

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

        {/* MEMBER EXPERIENCE */}
        <RevealOnScroll>
          <div className="mt-16 rounded-2xl border border-white/10 bg-zinc-950/60 p-7 sm:p-9">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <ListMusic className="size-4 text-purple-400" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
                  {t.members.label}
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-white">
                  {t.members.heading}
                </h2>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <FeatureList
                items={t.members.features.slice(0, 4)}
              />
              <FeatureList
                items={t.members.features.slice(4)}
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* MAINTAINER TOOLS */}
        <RevealOnScroll>
          <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950/60 p-7 sm:p-9">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <Sparkles className="size-4 text-purple-400" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
                  {t.maintenance.label}
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-white">
                  {t.maintenance.heading}
                </h2>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <FeatureList
                items={t.maintenance.features.slice(0, 4)}
              />
              <FeatureList
                items={t.maintenance.features.slice(4)}
              />
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
              {t.techTags.map((technology) => (
                <Badge
                  key={technology}
                  variant="outline"
                  className="border-white/15 bg-white/[0.04] px-3 py-1.5 text-zinc-300"
                >
                  {technology}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <ExternalLink href="https://bhajans-app-chi.vercel.app">
                {t.liveApp}
              </ExternalLink>

              <ExternalLink href="https://github.com/A-nu-1/bhajans-mobile">
                {t.androidRepo}
              </ExternalLink>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
