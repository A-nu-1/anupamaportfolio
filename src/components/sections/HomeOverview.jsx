import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { RevealOnScroll } from "../RevealOnScroll";

const copy = {
  en: {
    aboutLabel: "About Me", aboutTitle1: "Engineer first.", aboutTitle2: "Technology evolves.",
    aboutLead: "My engineering journey started with", aboutStrong: "Java and enterprise systems",
    aboutBody: "and has grown into modern full-stack and mobile development. I enjoy understanding a problem deeply, simplifying it and building software that is practical to use and maintain.",
    aboutLink: "More about me", featured: "Featured Work", featuredTitle: "From idea to working product.",
    featuredDescription: "Recent work includes complete web and Android products, community software and full-stack applications.",
    allProjects: "All Projects", clientLabel: "Client Projects", commerceTitle: "Commerce Platforms",
    commerceDescription: "Two end-to-end commerce ecosystems built for real clients, covering storefronts, admin tools, orders, mobile apps, notifications, AI-assisted workflows and cost-conscious infrastructure.",
    caseStudy: "View case study", communityLabel: "Community Project",
    bhajansDescription: "A multilingual web and Android application that makes a large devotional song library easy to search, read, navigate and maintain for my spiritual community.",
    bhajansSkills: ["Web", "Android", "Search", "Multilingual", "Transliteration"],
    experienceLabel: "Experience", experienceTitle1: "Enterprise roots.", experienceTitle2: "Modern product development.",
    fullExperience: "Full Experience", now: "2023 — Present", earlier: "Earlier", switzerland: "Switzerland",
    independent: "Freelance / Independent Software Engineer", support: "Software Engineer · Production Support / Integration",
    application: "Software Engineer · Application Management / Java", earlierRole: "Java Software Engineering",
    contactTitle: "Interested in working together?",
    contactDescription: "I'm based in Mägenwil, Aargau and open to software engineering opportunities, freelance work and interesting technical conversations.",
    getInTouch: "Get In Touch",
  },
  de: {
    aboutLabel: "Über mich", aboutTitle1: "Ingenieurin aus Überzeugung.", aboutTitle2: "Technologien entwickeln sich weiter.",
    aboutLead: "Mein beruflicher Weg begann mit", aboutStrong: "Java und Enterprise-Systemen",
    aboutBody: "und führte mich zur modernen Full-Stack- und Mobilentwicklung. Ich analysiere Probleme gründlich, vereinfache komplexe Abläufe und entwickle Software, die sich gut nutzen und warten lässt.",
    aboutLink: "Mehr über mich", featured: "Ausgewählte Projekte", featuredTitle: "Von der Idee zur fertigen Anwendung.",
    featuredDescription: "Zu meinen aktuellen Projekten gehören vollständige Web- und Android-Anwendungen, Software für eine Gemeinschaft sowie Full-Stack-Lösungen.",
    allProjects: "Alle Projekte", clientLabel: "Kundenprojekte", commerceTitle: "E-Commerce-Plattformen",
    commerceDescription: "Zwei vollständige E-Commerce-Lösungen für Kunden – mit Onlineshops, Administrationsoberflächen, Bestellungen, mobilen Apps, Benachrichtigungen, KI-gestützten Funktionen und kosteneffizienter Infrastruktur.",
    caseStudy: "Projekt im Detail", communityLabel: "Gemeinschaftsprojekt",
    bhajansDescription: "Eine mehrsprachige Web- und Android-Anwendung, mit der meine Gemeinschaft eine umfangreiche Sammlung spiritueller Lieder einfach durchsuchen, lesen und verwalten kann.",
    bhajansSkills: ["Web", "Android", "Suche", "Mehrsprachigkeit", "Transliteration"],
    experienceLabel: "Berufserfahrung", experienceTitle1: "Erfahrung mit Enterprise-Systemen.", experienceTitle2: "Moderne Produktentwicklung.",
    fullExperience: "Berufserfahrung ansehen", now: "2023 — heute", earlier: "Früher", switzerland: "Schweiz",
    independent: "Freiberufliche / selbstständige Softwareentwicklerin", support: "Softwareentwicklerin · Produktionssupport / Integration",
    application: "Softwareentwicklerin · Anwendungsbetreuung / Java", earlierRole: "Java-Softwareentwicklung",
    contactTitle: "Interesse an einer Zusammenarbeit?",
    contactDescription: "Ich lebe in Mägenwil im Kanton Aargau und bin offen für Stellen in der Softwareentwicklung, freiberufliche Projekte und fachlichen Austausch.",
    getInTouch: "Kontakt aufnehmen",
  },
};

export const HomeOverview = () => {
  const { language } = useLanguage();
  const t = copy[language] ?? copy.en;
  const localizedPath = (path) => language === "de" ? `${path}?lang=de` : path;

  return (
    <>
      {/* =====================================================
          ABOUT PREVIEW
      ===================================================== */}
      <section className="border-t border-white/5 bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <RevealOnScroll>
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-purple-400">
                  {t.aboutLabel}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {t.aboutTitle1}
                  <br />
                  {t.aboutTitle2}
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-zinc-400">
                  {t.aboutLead}{" "}
                  <strong className="font-medium text-zinc-200">
                    {t.aboutStrong}
                  </strong>{" "}
                  {t.aboutBody}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Java",
                    "SQL",
                    "Unix / Shell",
                    "React",
                    "Next.js",
                    "React Native",
                    "Supabase",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-white/10 bg-white/[0.03] text-zinc-400"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="link"
                  nativeButton={false}
                  render={<Link to={localizedPath("/about")} />}
                  className="mt-6 h-auto p-0 text-purple-300 hover:text-purple-200"
                >
                  {t.aboutLink}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}
      <section className="bg-zinc-950/50 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <RevealOnScroll>
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-purple-400">
                  {t.featured}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {t.featuredTitle}
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                  {t.featuredDescription}
                </p>
              </div>

              <Button
                variant="outline"
                nativeButton={false}
                render={<Link to={localizedPath("/projects")} />}
                className="border-white/15 bg-white/[0.02] text-zinc-200"
              >
                {t.allProjects}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {/* CLIENT COMMERCE */}
              <Card className="group border-white/10 bg-zinc-950/70 shadow-none transition hover:border-purple-400/30">
                <CardContent className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10">
                      <Code2 className="size-5 text-purple-300" />
                    </div>

                    <Badge
                      variant="outline"
                      className="border-purple-400/20 text-purple-300"
                    >
                      {t.clientLabel}
                    </Badge>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    {t.commerceTitle}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {t.commerceDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "React Native",
                      "Supabase",
                      "Firebase",
                      "AI",
                    ].map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-white/10 bg-white/[0.02] text-zinc-500"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="link"
                    nativeButton={false}
                    render={<Link to={localizedPath("/projects/client-commerce")} />}
                    className="mt-7 h-auto p-0 text-purple-300"
                  >
                    {t.caseStudy}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* BHAJANS */}
              <Card className="group border-white/10 bg-zinc-950/70 shadow-none transition hover:border-blue-400/30">
                <CardContent className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                      <Smartphone className="size-5 text-blue-300" />
                    </div>

                    <Badge
                      variant="outline"
                      className="border-blue-400/20 text-blue-300"
                    >
                      {t.communityLabel}
                    </Badge>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    Bhajans
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {t.bhajansDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Web",
                      "Android",
                      "Search",
                      "Multilingual",
                      "Transliteration",
                    ].map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-white/10 bg-white/[0.02] text-zinc-500"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="link"
                    nativeButton={false}
                    render={<Link to={localizedPath("/projects/bhajans")} />}
                    className="mt-7 h-auto p-0 text-blue-300"
                  >
                    {t.caseStudy}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =====================================================
          CAREER SNAPSHOT
      ===================================================== */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <BriefcaseBusiness className="size-5 text-purple-300" />
                </div>

                <p className="mt-6 text-sm font-medium uppercase tracking-[0.28em] text-purple-400">
                  {t.experienceLabel}
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  {t.experienceTitle1}
                  <br />
                  {t.experienceTitle2}
                </h2>

                <Button
                  variant="outline"
                  nativeButton={false}
                  render={<Link to={localizedPath("/experience")} />}
                  className="mt-8 border-white/15 bg-white/[0.02] text-zinc-200"
                >
                  {t.fullExperience}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <CareerRow
                  period={t.now}
                  title={t.independent}
                  company={t.switzerland}
                />

                <CareerRow
                  period="2017 — 2022"
                  title={t.support}
                  company="Credit Suisse · Cognizant Switzerland"
                />

                <CareerRow
                  period="2013 — 2017"
                  title={t.application}
                  company="Credit Suisse · Cognizant Switzerland"
                />

                <CareerRow
                  period={t.earlier}
                  title={t.earlierRole}
                  company="Meyer Burger · Applied Materials · Cisco"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section className="border-t border-white/5 bg-zinc-950/50 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-14 text-center sm:px-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]"
              />

              <Mail className="relative mx-auto size-7 text-purple-300" />

              <h2 className="relative mt-5 text-3xl font-semibold text-white sm:text-4xl">
                {t.contactTitle}
              </h2>

              <p className="relative mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
                {t.contactDescription}
              </p>

              <Button
                size="lg"
                nativeButton={false}
                render={<Link to={localizedPath("/contact")} />}
                className="relative mt-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
              >
                {t.getInTouch}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

function CareerRow({ period, title, company }) {
  return (
    <div className="grid gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-[130px_1fr] sm:gap-6">
      <p className="text-sm font-medium text-purple-300">
        {period}
      </p>

      <div>
        <h3 className="font-medium text-zinc-100">
          {title}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {company}
        </p>
      </div>
    </div>
  );
}