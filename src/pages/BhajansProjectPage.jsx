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
import {
  Card,
  CardContent,
  
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { RevealOnScroll } from "@/components/RevealOnScroll";

import bhajansHome from "@/assets/projects/bhajans-home.png";
import bhajansReader from "@/assets/projects/bhajans-reader.png";
import bhajansCategories from "@/assets/projects/bhajans-categories.png";
import bhajansTransliterate from "@/assets/projects/bhajans-transliterate.png";
import bhajansBulkParagraphs from "@/assets/projects/bhajans-bulk-paragraphs.png";
import bhajansLanguages from "@/assets/projects/bhajans-languages.png";
import bhajansYoutube from "@/assets/projects/bhajans-youtubeIntegration.png";

const gallery = [
  {
    src: bhajansHome,
    title: "Bhajan library",
  },
  {
    src: bhajansReader,
    title: "Lyrics reader",
  },
  {
    src: bhajansCategories,
    title: "Category management",
  },
  {
    src: bhajansTransliterate,
    title: "Kannada ↔ English transliteration AI tool",
  },
  {
    src: bhajansBulkParagraphs,
    title: "Bulk paragraph converter",
  },
  {
    src: bhajansLanguages,
    title: "Language management",
  },
  {
    src: bhajansYoutube,
    title: "YouTube integration",
  }
];

const highlights = [
  {
    icon: Search,
    title: "Fast song discovery",
    description:
      "Members can search the collection, browse devotional categories and find songs without navigating large shared files.",
  },
  {
    icon: BookOpenText,
    title: "Purpose-built reader",
    description:
      "Lyrics are structured into readable paragraphs with previous/next navigation, paragraph jumping and reader controls.",
  },
  {
    icon: Languages,
    title: "Multilingual support",
    description:
      "The platform supports Kannada, English and Hindi with configurable language management and transliteration tooling.",
  },
  {
    icon: Wrench,
    title: "Tools for maintainers",
    description:
      "Administrative tools reduce the effort needed to add, structure, categorize and maintain a growing devotional song collection.",
  },
];

function BhajansGallery() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const current = gallery[index];

  const MIN_SWIPE_DISTANCE = 50;

  function previous() {
    setIndex((value) =>
      value === 0 ? gallery.length - 1 : value - 1,
    );
  }

  function next() {
    setIndex((value) =>
      value === gallery.length - 1 ? 0 : value + 1,
    );
  }

  function handleTouchStart(event) {
    setTouchEndX(null);
    setIsSwiping(false);

    setTouchStartX(
      event.targetTouches[0].clientX,
    );
  }

  function handleTouchMove(event) {
    const currentX =
      event.targetTouches[0].clientX;

    setTouchEndX(currentX);

    if (touchStartX !== null) {
      const distance = Math.abs(
        touchStartX - currentX,
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
            src={current.src}
            alt={current.title}
            draggable="false"
            className="h-full w-full select-none object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />

          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3 py-1.5 text-xs text-white backdrop-blur">
            <Images className="size-3.5" />
            Open image
          </div>
        </button>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous image"
            className="flex size-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>

          <div className="text-center">
            <p className="text-sm font-medium text-zinc-300">
              {current.title}
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              {index + 1} / {gallery.length}
            </p>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
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
            {current.title}
          </DialogTitle>

          <div
            className="relative flex min-h-[65vh] touch-pan-y items-center justify-center overflow-hidden rounded-xl bg-black"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={current.src}
              alt={current.title}
              draggable="false"
              className="max-h-[84vh] max-w-full select-none object-contain"
            />

            <button
              type="button"
              onClick={previous}
              aria-label="Previous image"
              className="absolute left-3 flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
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

export default function BhajansProjectPage() {
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
                Personal Community Project
              </Badge>

              <Badge
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-zinc-300"
              >
                Web + Android
              </Badge>

              <Badge
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-zinc-300"
              >
                Multilingual
              </Badge>
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Bhajans
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              A devotional lyrics platform I created as a personal
              contribution to my spiritual community, where group singing
              and devotional songs are an important part of community life.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              The goal was simple: replace cumbersome song files with a
              searchable, structured collection that people can access
              whenever and wherever they need it.
            </p>
          </div>
        </RevealOnScroll>

        {/* GALLERY */}
        <RevealOnScroll>
          <div className="mx-auto mt-14 max-w-5xl">
            <BhajansGallery />
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
                  Why I Built It
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-white">
                  A small contribution to make community life easier.
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400">
                  Our community sings from a large collection of devotional
                  songs. Maintaining and searching through large files can
                  become difficult, especially when people need lyrics
                  quickly during gatherings. Bhajans turns that collection
                  into an accessible digital library.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* HIGHLIGHTS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <RevealOnScroll key={item.title}>
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
                  Community Experience
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Find the right song quickly.
                </h2>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                <li>• Search devotional songs by title</li>
                <li>• Browse songs by deity or category</li>
                <li>• Favorites for frequently used bhajans</li>
                <li>• Kannada and English/transliterated titles</li>
              </ul>

              <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                <li>• Structured lyrics reader</li>
                <li>• Previous / next song navigation</li>
                <li>• Jump directly to a paragraph</li>
                <li>• Reader language and text controls</li>
              </ul>
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
                  Maintainer Tools
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Making a large song collection easier to manage.
                </h2>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                <li>• Create and edit bhajans</li>
                <li>• Category management with images</li>
                <li>• Configurable language management</li>
                <li>• Kannada, English and Hindi support</li>
              </ul>

              <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                <li>
                  • Bulk pasted lyrics can be converted into structured
                  paragraphs
                </li>
                <li>
                  • Kannada ↔ English transliteration tooling
                </li>
                <li>
                  • Theme and reader personalization controls
                </li>
                <li>
                  • Admin tooling separated from the reader experience
                </li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <Separator className="my-16 bg-white/10" />

        {/* TECHNOLOGY */}
        <RevealOnScroll>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Technology
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "React Native",
                "Expo",
                "Web + Android",
                "Search",
                "Multilingual Content",
                "Transliteration",
                "YouTube Media",
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

            <div className="mt-8 flex flex-wrap gap-2">
              <ExternalLink href="https://bhajans-app-chi.vercel.app">
                Live web app
              </ExternalLink>

              <ExternalLink href="https://github.com/A-nu-1/bhajans-mobile">
                Android repository
              </ExternalLink>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}