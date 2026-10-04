import {
  BookOpen,
  Code2,
  Database,
  GraduationCap,
  Languages,
  MonitorSmartphone,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const skillGroups = [
  {
    title: "Core Engineering",
    description:
      "The foundation of my professional software engineering career.",
    icon: Code2,
    featured: true,
    skills: [
      "Java",
      "J2EE",
      "Spring",
      "Hibernate",
      "OOP",
      "SQL",
      "Unix",
      "Shell Scripting",
      "Enterprise Integration",
    ],
  },
  {
    title: "Modern Web",
    description: "Technologies I use to build modern, responsive web products.",
    icon: MonitorSmartphone,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Mobile",
    description:
      "Cross-platform mobile applications sharing modern web principles.",
    icon: MonitorSmartphone,
    skills: ["React Native", "Expo", "Mobile UI", "API Integration"],
  },
  {
    title: "Backend & Data",
    description:
      "Application services, relational data and secure backend workflows.",
    icon: Database,
    skills: [
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Oracle",
      "MSSQL",
      "Authentication",
      "Row Level Security",
    ],
  },
  {
    title: "Integration & Operations",
    description:
      "Experience keeping enterprise systems connected, observable and reliable.",
    icon: Server,
    skills: [
      "MQ",
      "File Transfer",
      "Production Support",
      "Monitoring",
      "Alerting",
      "Incident Management",
      "Application Integration",
      "SLA Operations",
    ],
  },
  {
    title: "Tools & Delivery",
    description: "Tools and practices used across development and delivery.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Firebase",
      "ImageKit",
      "Agile",
      "Testing",
      "Configuration Management",
    ],
  },
];

function SkillCard({
  title,
  description,
  skills,
  icon: Icon,
  featured = false,
}) {
  return (
    <Card
      className={`border-white/10 bg-zinc-950/70 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <CardHeader>
        <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
          <Icon className="size-4 text-purple-400" />
        </div>

        <CardTitle className="text-lg text-white">{title}</CardTitle>

        <p className="text-sm leading-6 text-zinc-500">{description}</p>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className={
                featured && skill === "Java"
                  ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
                  : "border-white/10 bg-white/[0.025] font-normal text-zinc-400"
              }
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              About Me
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Engineering has always been about{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                solving problems.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              I&apos;m a software engineer with a foundation in Java development
              and years of experience working with enterprise applications,
              integration services and production systems. My career has taken
              me from hands-on development to application engineering,
              operations, automation and stakeholder collaboration.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              Today, I combine that engineering background with modern web and
              mobile technologies to build complete digital products — from
              database design and APIs to responsive interfaces, mobile
              applications and deployment.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* =====================================================
          ENGINEERING APPROACH
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-6">
                <Code2 className="mb-5 size-5 text-purple-400" />

                <h2 className="text-lg font-semibold text-white">
                  Engineer first
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  I care about understanding the problem, designing a
                  maintainable solution and building software that works
                  reliably beyond the happy path.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-6">
                <Sparkles className="mb-5 size-5 text-purple-400" />

                <h2 className="text-lg font-semibold text-white">
                  Automate the repetitive
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Whether in enterprise operations or my own products, I
                  naturally look for repetitive work that software can simplify,
                  automate or make more reliable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-6">
                <BookOpen className="mb-5 size-5 text-purple-400" />

                <h2 className="text-lg font-semibold text-white">
                  Always learning
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  My technology stack has evolved considerably over the years,
                  but the habit has stayed the same: learn what the problem
                  requires and turn it into something practical.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealOnScroll>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="mb-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Engineering Toolkit
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Technologies collected through{" "}
              <span className="text-zinc-500">real engineering work.</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <RevealOnScroll key={group.title}>
              <SkillCard {...group} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* =====================================================
          EDUCATION + LANGUAGES
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-28 sm:px-8 lg:px-10">
        <Separator className="mb-16 bg-white/10" />

        <div className="grid gap-6 lg:grid-cols-2">
          <RevealOnScroll>
            <Card className="h-full border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-7 sm:p-8">
                <div className="mb-6 flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <GraduationCap className="size-5 text-purple-400" />
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Education
                </p>

                <h2 className="text-xl font-semibold text-white">
                  Bachelor of Engineering in Computer Science
                </h2>

                <p className="mt-3 text-zinc-400">
                  BNM Institute of Technology
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Visvesvaraya Technological University · India
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-sm text-zinc-500">2005 — 2009</span>

                  <Badge
                    variant="outline"
                    className="border-purple-400/30 bg-purple-400/10 text-purple-300"
                  >
                    Graduated with Distinction
                  </Badge>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  Ranked among the top 3 in the state.
                </p>
              </CardContent>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll>
            <Card className="h-full border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-7 sm:p-8">
                <div className="mb-6 flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Languages className="size-5 text-purple-400" />
                </div>

                <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Languages
                </p>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-medium text-white">English</h2>

                      <span className="text-sm text-zinc-500">Fluent</span>
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-medium text-white">German</h2>

                      <Badge
                        variant="outline"
                        className="border-purple-400/30 bg-purple-400/10 text-purple-300"
                      >
                        B1 Certified
                      </Badge>
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-medium text-white">Kannada</h2>

                      <span className="text-sm text-zinc-500">Native</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          Educational credentials and certificates available upon request.
        </p>
      </section>
    </main>
  );
}
