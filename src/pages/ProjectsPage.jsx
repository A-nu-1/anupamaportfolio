import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Images,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { RevealOnScroll } from "@/components/RevealOnScroll";

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

import bhajansHome from "@/assets/projects/bhajans-home.png";
import bhajansReader from "@/assets/projects/bhajans-reader.png";
import bhajansLanguages from "@/assets/projects/bhajans-languages.png";
import bhajansTransliterate from "@/assets/projects/bhajans-transliterate.png";
import bhajansYoutube from "@/assets/projects/bhajans-youtubeIntegration.png";
import bhajansCreate from "@/assets/projects/bhajans-bulk-paragraphs.png";


import ecomHome from "@/assets/projects/ecom-home.png";
import ecomCart from "@/assets/projects/ecom-cart.png";
import ecomOrders from "@/assets/projects/ecom-orders.png";
import ecomTracking from "@/assets/projects/ecom-tracking.png";

import solarSystem from "@/assets/projects/solar-system.png";
import reactCutebot from "@/assets/projects/react-cutebot.png";

import travelHome from "@/assets/projects/travel-home.png";
import travelDashboard from "@/assets/projects/travel-dashboard.png";
import travelTrip from "@/assets/projects/travel-trip.png";
import travelGlobe from "@/assets/projects/travel-globe.png";

import storeStories from "@/assets/projects/store-stories.jpeg";

import supportdeskHome from "@/assets/projects/supportdesk-home.png";
import supportdeskLogin from "@/assets/projects/supportdesk-login.png";
import supportdeskEmployee from "@/assets/projects/supportdesk-employee-tickets.png";
import supportdeskAgent from "@/assets/projects/supportdesk-agent-tickets.png";
import supportdeskTicket from "@/assets/projects/supportdesk-ticket-detail.png";
import supportdeskAdmin from "@/assets/projects/supportdesk-admin.png";

const bhajansImages = [
  {
    src: bhajansHome,
    alt: "Bhajans searchable devotional song library",
  },
  {
    src: bhajansReader,
    alt: "Bhajans structured lyrics reader",
  },
  {
    src: bhajansLanguages,
    alt: "Bhajans language management",
  },
  {
    src: bhajansTransliterate,
    alt: "Bhajans transliteration through AI",
  },
  {
    src: bhajansYoutube,
    alt: "Bhajans YouTube integration",
  },
  {
    src: bhajansCreate,
    alt: "Bhajans bulk song creation helper",
  },
];

const travelImages = [
  {
    src: travelHome,
    alt: "Travel Planner homepage",
  },
  {
    src: travelDashboard,
    alt: "Travel Planner dashboard",
  },
  {
    src: travelTrip,
    alt: "Travel Planner trip detail",
  },
  {
    src: travelGlobe,
    alt: "Travel Planner interactive globe",
  },
];

const ecommerceImages = [
  {
    src: ecomHome,
    alt: "Ecommerce product listing",
  },
  {
    src: ecomCart,
    alt: "Ecommerce checkout",
  },
  {
    src: ecomOrders,
    alt: "Ecommerce orders",
  },
  {
    src: ecomTracking,
    alt: "Ecommerce delivery tracking",
  },
];
const commerceImages = [
  {
    src: luckysStorefront,
    alt: "Client commerce storefront",
  },
  {
    src: luckysCommerce,
    alt: "Commerce and order workflow",
  },
  {
    src: luckysAi,
    alt: "AI-assisted product management",
  },
  {
    src: luckysAdmin,
    alt: "Administration and analytics",
  },
  {
    src: luckysMobile,
    alt: "Android commerce application",
  },
  {
    src: akOrder,
    alt: "Order management and tracking", 
  },
  {
    src: akCache,
    alt: "Caching and performance",
  },
  {
    src: akCalendar,
    alt: "Calendar integration",
  },
  {
    src: akFirebase,
    alt: "Firebase messaging",
  },
  {
    src: akCloudinary,
    alt: "Cloudinary protection",
  }
];

const supportdeskImages = [
  {
    src: supportdeskHome,
    alt: "SupportDesk homepage",
  },
  {
    src: supportdeskLogin,
    alt: "SupportDesk login and demo access",
  },
  {
    src: supportdeskEmployee,
    alt: "SupportDesk employee ticket dashboard",
  },
  {
    src: supportdeskAgent,
    alt: "SupportDesk support agent ticket dashboard",
  },
  {
    src: supportdeskTicket,
    alt: "SupportDesk ticket details and comments",
  },
  {
    src: supportdeskAdmin,
    alt: "SupportDesk administration dashboard",
  },
];

const smallerProjects = [
  {
  title: "SupportDesk",
  description:
    "A full-stack IT support ticket system with role-based workflows for employees, support agents and administrators, built to explore enterprise-style application architecture.",
  tags: [
    "Java",
    "Spring Boot",
    "Angular",
    "PostgreSQL",
    "Spring Security",
    "JWT",
    "Docker",
  ],
  href: "https://github.com/A-nu-1/supportdesk-backend",
  live: "https://supportdesk-frontend-fawn.vercel.app/",
  images: supportdeskImages,
},
  {
    title: "Travel Planner",
    description:
      "A travel-planning application for creating trips, organizing destinations, building itineraries and visualizing travel history.",
    tags: ["Next.js", "React", "Maps", "APIs"],
    href: "https://github.com/A-nu-1/TravelPlanner",
    live: "https://travel-planner-six-eta.vercel.app",
    images: travelImages,
  },
  {
    title: "Ecommerce Application",
    description:
      "A full-stack ecommerce application with product browsing, cart, checkout, order history and delivery tracking.",
    tags: ["React", "Express", "Sequelize", "SQL"],
    href: "https://github.com/A-nu-1/Ecommerce-Application",
    live: "https://ecommerce-application-btah.onrender.com",
    images: ecommerceImages,
  },
  {
    title: "Solar System",
    description:
      "An interactive solar-system visualization exploring orbital movement, animated celestial bodies and visual effects.",
    tags: ["JavaScript", "Animation", "Canvas"],
    href: "https://github.com/A-nu-1/SolarSystem",
    live: "https://a-nu-1.github.io/SolarSystem/",
    images: [
      {
        src: solarSystem,
        alt: "Interactive Solar System visualization",
      },
    ],
  },
  {
    title: "React CuteBot",
    description:
      "A playful React chatbot experiment with conversational responses and simple interactive commands.",
    tags: ["React", "JavaScript"],
    href: "https://github.com/A-nu-1/reactCutebot",
    live: "https://a-nu-1.github.io/reactCutebot/",
    images: [
      {
        src: reactCutebot,
        alt: "React CuteBot chatbot",
      },
    ],
  },
  {
    title: "Store Stories",
    description:
      "A mobile story-sharing experience with image posts designed to expire after 24 hours.",
    tags: ["React Native", "Expo", "Mobile"],
    href: "https://github.com/A-nu-1/storeStories",
    images: [
      {
        src: storeStories,
        alt: "Store Stories mobile application",
      },
    ],
  },
];



function ProjectGallery({ images }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const current = images[index];

  const MIN_SWIPE_DISTANCE = 50;

  function previous() {
    setIndex((value) =>
      value === 0 ? images.length - 1 : value - 1,
    );
  }

  function next() {
    setIndex((value) =>
      value === images.length - 1 ? 0 : value + 1,
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

    // Small delay so the click event after touch
    // does not open the dialog accidentally.
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
            alt={current.alt}
            draggable="false"
            className="h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />

          <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs text-white backdrop-blur">
            <Images className="size-3.5" />
            View larger
          </div>
        </button>

        <div className="flex items-center justify-between border-t border-white/10 px-3 py-2.5">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous image"
            className="flex size-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>

          <div className="flex gap-1.5">
            {images.map((image, imageIndex) => (
              <button
                key={`${image.alt}-${imageIndex}`}
                type="button"
                onClick={() =>
                  setIndex(imageIndex)
                }
                aria-label={`Show image ${
                  imageIndex + 1
                }`}
                className={`h-1.5 rounded-full transition-all ${
                  imageIndex === index
                    ? "w-5 bg-purple-400"
                    : "w-1.5 bg-zinc-700"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="flex size-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className="max-h-[92vh] max-w-6xl border-white/10 bg-zinc-950 p-3 text-white">
          <DialogTitle className="sr-only">
            Project screenshot
          </DialogTitle>

          <div
            className="relative flex min-h-[60vh] touch-pan-y items-center justify-center overflow-hidden rounded-xl bg-black"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={current.src}
              alt={current.alt}
              draggable="false"
              className="max-h-[84vh] max-w-full select-none object-contain"
            />

            <button
              type="button"
              onClick={previous}
              aria-label="Previous image"
              className="absolute left-3 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// function ExternalProjectLink({ href }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       aria-label="Open project on GitHub"
//       className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
//     >
//       <ArrowUpRight className="size-4" />
//     </a>
//   );
// }

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Selected Work
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Projects with{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                a reason to exist.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              Client products, community software and technical projects — each
              built around a different problem, constraint or learning goal.
            </p>
          </div>
        </RevealOnScroll>

        {/* ===================================================
            FEATURED PROJECTS
        =================================================== */}
        <div className="space-y-8">
          {/* CLIENT COMMERCE */}
          <RevealOnScroll>
            <Card className="overflow-hidden border-white/10 bg-zinc-950/60 shadow-none">
              <div className="grid lg:grid-cols-[1fr_0.95fr]">
                <div className="p-7 sm:p-9">
                  <div className="mb-5 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-purple-400/30 bg-purple-400/10 text-purple-300"
                    >
                      Featured Case Study
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
                      Real Clients
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-semibold text-white tracking-tight sm:text-4xl">
                    Client Commerce Platforms
                  </h2>

                  <p className="mt-2 font-medium text-zinc-300">
                    Lucky&apos;s Collection + A Home Cook
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                    Two complete commerce ecosystems designed and developed
                    end-to-end for small businesses, combining web, Android,
                    administration, AI-assisted workflows, notifications,
                    ordering and cost-conscious infrastructure.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "AI",
                      "Next.js",
                      "React Native",
                      "Supabase",
                      "Firebase FCM",
                      "Caching",
                      "0 CHF Goal",
                    ].map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-white/10 bg-white/[0.025] text-zinc-300"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    to="/projects/client-commerce"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-purple-400/30 hover:bg-white/[0.06]"
                  >
                    View case study
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div className="p-5 lg:p-7">
                  <ProjectGallery images={commerceImages} />
                </div>
              </div>
            </Card>
          </RevealOnScroll>

          {/* BHAJANS */}
          <RevealOnScroll>
            <Card className="overflow-hidden border-white/10 bg-zinc-950/60 shadow-none">
              <div className="grid lg:grid-cols-[1fr_0.95fr]">
                <div className="p-7 sm:p-9">
                  <div className="mb-5 flex flex-wrap gap-2">
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
                  </div>

                  <h2 className="text-3xl font-semibold text-white">Bhajans</h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                    A devotional lyrics platform created for my spiritual
                    community, making a large shared collection of songs
                    searchable and accessible anywhere instead of relying on
                    cumbersome song files.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "React",
                      "React Native",
                      "Expo",
                      "Search",
                      "Multilingual",
                    ].map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-white/15 bg-white/[0.04] text-zinc-300"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    to="/projects/bhajans"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-purple-400/30 hover:bg-white/[0.06]"
                  >
                    View case study
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div className="flex min-h-[300px] items-center justify-center border-t border-white/10 bg-zinc-950/40 p-8 lg:border-l lg:border-t-0">
                  <div className="text-center">
                    <HeartHandshake className="mx-auto size-8 text-purple-400" />

                    <div className="p-5 lg:p-7">
                      <ProjectGallery images={bhajansImages} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </RevealOnScroll>
        </div>

        {/* ===================================================
            MORE PROJECTS
        =================================================== */}
        <RevealOnScroll>
          <div className="mb-8 mt-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              More Projects
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Smaller projects, experiments and{" "}
              <span className="text-zinc-500">continued learning.</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {smallerProjects.map((project) => (
            <RevealOnScroll key={project.title}>
              <Card className="h-full overflow-hidden border-white/10 bg-zinc-950/60 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="p-4">
                  <ProjectGallery images={project.images} />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl text-white">
                      {project.title}
                    </CardTitle>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} repository`}
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/10 bg-white/[0.025] text-zinc-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-white"
                    >
                      GitHub
                      <ArrowUpRight className="size-4" />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-purple-400/20 bg-purple-400/10 px-3 py-2 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-400/15 hover:text-purple-200"
                      >
                        Live project
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </main>
  );
}
