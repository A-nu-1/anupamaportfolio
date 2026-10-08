import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { RevealOnScroll } from "../RevealOnScroll";

export const HomeOverview = () => {
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
                  About Me
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Engineer first.
                  <br />
                  Technology evolves.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-zinc-400">
                  My engineering journey started with{" "}
                  <strong className="font-medium text-zinc-200">
                    Java and enterprise systems
                  </strong>{" "}
                  and has grown into modern full-stack and mobile development.
                  I enjoy understanding a problem deeply, simplifying it and
                  building software that is practical to use and maintain.
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
                  render={<Link to="/about" />}
                  className="mt-6 h-auto p-0 text-purple-300 hover:text-purple-200"
                >
                  More about me
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
                  Featured Work
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  From idea to working product.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                  Recent work includes complete web and Android products,
                  community software and full-stack applications.
                </p>
              </div>

              <Button
                variant="outline"
                nativeButton={false}
                render={<Link to="/projects" />}
                className="border-white/15 bg-white/[0.02] text-zinc-200"
              >
                All Projects
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
                      Client Projects
                    </Badge>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    Commerce Platforms
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Two end-to-end commerce ecosystems built for real clients,
                    covering storefronts, admin tools, orders, mobile apps,
                    notifications, AI-assisted workflows and cost-conscious
                    infrastructure.
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
                    render={<Link to="/projects/client-commerce" />}
                    className="mt-7 h-auto p-0 text-purple-300"
                  >
                    View case study
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
                      Community Project
                    </Badge>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    Bhajans
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    A multilingual web and Android application that makes a
                    large devotional song library easy to search, read,
                    navigate and maintain for my spiritual community.
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
                    render={<Link to="/projects/bhajans" />}
                    className="mt-7 h-auto p-0 text-blue-300"
                  >
                    View case study
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
                  Experience
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Enterprise roots.
                  <br />
                  Modern product development.
                </h2>

                <Button
                  variant="outline"
                  nativeButton={false}
                  render={<Link to="/experience" />}
                  className="mt-8 border-white/15 bg-white/[0.02] text-zinc-200"
                >
                  Full Experience
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <CareerRow
                  period="2023 — Present"
                  title="Freelance / Independent Software Engineer"
                  company="Switzerland"
                />

                <CareerRow
                  period="2017 — 2022"
                  title="Software Engineer · Production Support / Integration"
                  company="Credit Suisse · Cognizant Switzerland"
                />

                <CareerRow
                  period="2013 — 2017"
                  title="Software Engineer · Application Management / Java"
                  company="Credit Suisse · Cognizant Switzerland"
                />

                <CareerRow
                  period="Earlier"
                  title="Java Software Engineering"
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
                Interested in working together?
              </h2>

              <p className="relative mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
                I&apos;m based in Mägenwil, Aargau and open to software
                engineering opportunities, freelance work and interesting
                technical conversations.
              </p>

              <Button
                size="lg"
                nativeButton={false}
                render={<Link to="/contact" />}
                className="relative mt-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
              >
                Get In Touch
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