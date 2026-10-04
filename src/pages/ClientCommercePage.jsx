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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { RevealOnScroll } from "@/components/RevealOnScroll";

import luckysStorefront from "@/assets/projects/luckys-storefront.png";
import luckysCommerce from "@/assets/projects/luckys-commerce.png";
import luckysAdmin from "@/assets/projects/luckys-admin.png";
import luckysMobile from "@/assets/projects/luckys-mobile.jpeg";
import luckysAi from "@/assets/projects/luckys-ai.png";

const gallery = [
  {
    src: luckysStorefront,
    title: "Storefront",
  },
  {
    src: luckysCommerce,
    title: "Commerce workflow",
  },
  {
    src: luckysAi,
    title: "AI product management",
  },
  {
    src: luckysAdmin,
    title: "Administration & analytics",
  },
  {
    src: luckysMobile,
    title: "Android application",
  },
];

const capabilities = [
  {
    icon: Bot,
    title: "AI-assisted commerce",
    description:
      "Product images can be analyzed to assist with product information, while natural-language search helps customers discover suitable products.",
  },
  {
    icon: Smartphone,
    title: "Web + Android",
    description:
      "Full customer and administrative experiences across responsive Next.js web applications and Expo / React Native Android apps.",
  },
  {
    icon: Gauge,
    title: "Caching & performance",
    description:
      "Public storefront data is cached to reduce repeated backend work, with manual administrator cache invalidation when fresh data is required.",
  },
  {
    icon: WalletCards,
    title: "Cost-conscious architecture",
    description:
      "The systems were designed around a strict goal of keeping infrastructure costs at zero wherever feasible for early-stage businesses.",
  },
];

function CaseStudyGallery() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const current = gallery[index];

  function previous() {
    setIndex((value) => (value === 0 ? gallery.length - 1 : value - 1));
  }

  function next() {
    setIndex((value) => (value === gallery.length - 1 ? 0 : value + 1));
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block aspect-[16/9] w-full overflow-hidden bg-zinc-900"
        >
          <img
            src={current.src}
            alt={current.title}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
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
            className="flex size-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>

          <div className="text-center">
            <p className="text-sm font-medium text-zinc-300">{current.title}</p>

            <p className="mt-1 text-xs text-zinc-600">
              {index + 1} / {gallery.length}
            </p>
          </div>

          <button
            type="button"
            onClick={next}
            className="flex size-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] max-w-6xl border-white/10 bg-zinc-950 p-3">
          <DialogTitle className="sr-only">{current.title}</DialogTitle>

          <div className="relative flex min-h-[65vh] items-center justify-center overflow-hidden rounded-xl bg-black">
            <img
              src={current.src}
              alt={current.title}
              className="max-h-[84vh] max-w-full object-contain"
            />

            <button
              type="button"
              onClick={previous}
              className="absolute left-3 flex size-11 items-center justify-center rounded-full bg-black/70 text-white"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={next}
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

export default function ClientCommercePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:px-10">
        {/* ===================================================
            INTRO
        =================================================== */}
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex flex-wrap justify-center gap-2">
              <Badge
                variant="outline"
                className="border-purple-400/30 bg-purple-400/10 text-purple-300"
              >
                Client Case Study
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
                Independent Development
              </Badge>

              <Badge
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-zinc-300"
              >
                0 CHF Infrastructure Goal
              </Badge>
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Client Commerce{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Platforms
              </span>
            </h1>

            <p className="mt-4 text-xl font-medium text-zinc-300">
              Lucky&apos;s Collection + A Home Cook
            </p>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              Two commerce platforms designed and developed end-to-end for small
              businesses with different operational needs but a shared
              requirement: powerful software without expensive infrastructure.
            </p>
          </div>
        </RevealOnScroll>

        {/* ===================================================
            GALLERY
        =================================================== */}
        <RevealOnScroll>
          <div className="mx-auto mt-14 max-w-5xl">
            <CaseStudyGallery />
          </div>
        </RevealOnScroll>

        {/* ===================================================
            CORE CAPABILITIES
        =================================================== */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 ">
          {capabilities.map((item) => {
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

        {/* ===================================================
            SHARED FOUNDATION
        =================================================== */}
        <RevealOnScroll>
          <div className="mt-16 rounded-2xl border border-white/10 bg-zinc-950/60 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
              Shared Commerce Foundation
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              One foundation, adapted to two businesses.
            </h2>

            <div className="mt-7 grid gap-8 lg:grid-cols-2">
              <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                <li>• Email/password and Google OAuth authentication</li>
                <li>• Password recovery and account management</li>
                <li>• Product and category administration</li>
                <li>• Configurable storefront settings</li>
                <li>• Cart, checkout and order lifecycle</li>
                <li>• Customer and administrator notifications</li>
                <li>• Firebase FCM and Expo notifications</li>
              </ul>

              <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                <li>• Google Calendar integration</li>
                <li>• Analytics and visitor monitoring</li>
                <li>• Customer reviews and social channels</li>
                <li>• Storefront caching</li>
                <li>• Manual cache invalidation</li>
                <li>• Catalog mode with hidden public pricing</li>
                <li>• Responsive web + Android applications</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        {/* ===================================================
            CLIENT-SPECIFIC
        =================================================== */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <RevealOnScroll>
            <Card className="h-full border-white/10 bg-zinc-950/60 shadow-none">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Sparkles className="size-4 text-purple-400" />
                </div>

                <CardTitle className="text-2xl text-white">
                  Lucky&apos;s Collection
                </CardTitle>

                <p className="text-sm text-zinc-500">Retail commerce</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                  <li>
                    • AI analysis of uploaded product images to assist with
                    product names and descriptions
                  </li>

                  <li>
                    • AI-powered product discovery for natural-language customer
                    searches
                  </li>

                  <li>• Pre-booking and configurable catalog workflows</li>

                  <li>
                    • Catalog mode allowing orders while public prices remain
                    hidden
                  </li>

                  <li>
                    • ImageKit image optimization and bandwidth monitoring
                  </li>

                  <li>
                    • Automatic infrastructure protection based on usage
                    thresholds
                  </li>

                  <li>
                    • Customer reviews, Instagram, Facebook, YouTube and
                    WhatsApp integrations
                  </li>
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  <ExternalLink href="https://luckycharmcreations.vercel.app">
                    Live site
                  </ExternalLink>

                  <ExternalLink href="https://github.com/luckyscollectionshop-afk/shop">
                    Web repo
                  </ExternalLink>

                  <ExternalLink href="https://github.com/luckyscollectionshop-afk/mobileshop">
                    Android repo
                  </ExternalLink>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>

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
                  Food ordering & fulfilment
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                  <li>
                    • Configurable PhonePe, Google Pay, bank transfer and
                    cash-on-delivery payment methods
                  </li>

                  <li>
                    • Customer-booked or administrator-requested delivery
                    workflows
                  </li>

                  <li>• Customer and administrator post-order editing</li>

                  <li>
                    • Historical payment, delivery and order-change records
                  </li>

                  <li>• Notifications when customers modify active orders</li>

                  <li>• Google Calendar integration for order fulfilment</li>

                  <li>
                    • Catalog mode, caching and mobile administrative controls
                  </li>
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  <ExternalLink href="https://arunaskitchen.vercel.app">
                    Live site
                  </ExternalLink>
                  <ExternalLink href="https://github.com/ahomecook12/webcook">
                    Web repo
                  </ExternalLink>

                  <ExternalLink href="https://github.com/ahomecook12/mobcook">
                    Android repo
                  </ExternalLink>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>

        {/* ===================================================
            ENGINEERING CONSTRAINT
        =================================================== */}
        <RevealOnScroll>
          <div className="mt-12 rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-blue-500/[0.05] p-7 sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-400/10">
                <Zap className="size-5 text-purple-300" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300">
                  Engineering Constraint
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Keep infrastructure cost at 0 CHF wherever possible.
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400">
                  Cost was treated as a system requirement. Free-tier services
                  were paired with caching, optimized image delivery, external
                  video hosting, usage monitoring, protective thresholds and
                  administrative controls to reduce unnecessary bandwidth,
                  storage and backend work.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <Separator className="my-16 bg-white/10" />

        {/* ===================================================
            STACK
        =================================================== */}
        <RevealOnScroll>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Technology
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
