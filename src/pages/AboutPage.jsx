
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useLanguage } from "@/i18n/useLanguage";

// =====================================================
// TRANSLATIONS
// =====================================================

const translations = {
  en: {
    introduction: {
      label: "About Me",
      heading: "Engineering has always been about",
      highlight: "solving problems.",
      paragraph1:
        "I'm a software engineer with a foundation in Java development and years of experience working with enterprise applications, integration services and production systems. My career has taken me from hands-on development to application engineering, operations, automation and stakeholder collaboration.",
      paragraph2:
        "Today, I combine that engineering background with modern web and mobile technologies to build complete digital products — from database design and APIs to responsive interfaces, mobile applications and deployment.",
    },

    approach: {
      engineer: {
        title: "Engineer first",
        description:
          "I care about understanding the problem, designing a maintainable solution and building software that works reliably beyond the happy path.",
      },
      automate: {
        title: "Automate the repetitive",
        description:
          "Whether in enterprise operations or my own products, I naturally look for repetitive work that software can simplify, automate or make more reliable.",
      },
      learning: {
        title: "Always learning",
        description:
          "My technology stack has evolved considerably over the years, but the habit has stayed the same: learn what the problem requires and turn it into something practical.",
      },
    },

    skills: {
      label: "Engineering Toolkit",
      heading: "Technologies collected through",
      highlight: "real engineering work.",
    },

    education: {
      label: "Education",
      degree: "Bachelor of Engineering in Computer Science",
      university: "Visvesvaraya Technological University · India",
      distinction: "Graduated with Distinction",
      achievement: "Ranked among the top 3 in the state.",
    },

    languages: {
      label: "Languages",
      english: "English",
      german: "German",
      kannada: "Kannada",
      fluent: "Fluent",
      certified: "B1 Certified",
      native: "Native",
    },

    certificates:
      "Educational credentials and certificates available upon request.",
  },

  de: {
    introduction: {
      label: "Über mich",
      heading: "Im Engineering geht es für mich darum,",
      highlight: "Probleme zu lösen.",
      paragraph1:
        "Ich bin Softwareentwicklerin mit fundierten Kenntnissen in der Java-Entwicklung und langjähriger Erfahrung mit Unternehmensanwendungen, Integrationsdiensten und produktiven IT-Systemen. Mein beruflicher Werdegang reicht von der praktischen Softwareentwicklung über das Application Management und den IT-Betrieb bis hin zur Automatisierung und Zusammenarbeit mit verschiedenen Fachbereichen.",
      paragraph2:
        "Heute verbinde ich diese technische Erfahrung mit modernen Web- und Mobiltechnologien. Dabei entwickle ich vollständige digitale Lösungen – vom Datenbankdesign und der API-Entwicklung über responsive Benutzeroberflächen und mobile Anwendungen bis zur Bereitstellung.",
    },

    approach: {
      engineer: {
        title: "Engineering steht an erster Stelle",
        description:
          "Mir ist es wichtig, ein Problem gründlich zu verstehen, wartbare Lösungen zu entwickeln und Software zu erstellen, die auch bei unerwarteten Situationen zuverlässig funktioniert.",
      },
      automate: {
        title: "Wiederkehrende Aufgaben automatisieren",
        description:
          "Ob im Betrieb von Unternehmensanwendungen oder bei meinen eigenen Projekten: Ich suche gezielt nach Möglichkeiten, wiederkehrende Aufgaben durch Software zu vereinfachen, zu automatisieren und zuverlässiger zu gestalten.",
      },
      learning: {
        title: "Kontinuierlich dazulernen",
        description:
          "Die Technologien, mit denen ich arbeite, haben sich im Laufe der Jahre stark verändert. Mein Ansatz bleibt derselbe: Ich lerne, was zur Lösung einer Aufgabe notwendig ist, und setze dieses Wissen praktisch um.",
      },
    },

    skills: {
      label: "Technische Kompetenzen",
      heading: "Technologien aus meiner",
      highlight: "praktischen Berufserfahrung.",
    },

    education: {
      label: "Ausbildung",
      degree: "Bachelor of Engineering in Informatik",
      university: "Visvesvaraya Technological University · Indien",
      distinction: "Abschluss mit Auszeichnung",
      achievement:
        "Unter den drei besten Studierenden des Bundesstaates.",
    },

    languages: {
      label: "Sprachkenntnisse",
      english: "Englisch",
      german: "Deutsch",
      kannada: "Kannada",
      fluent: "Fliessend",
      certified: "B1-Zertifikat",
      native: "Muttersprache",
    },

    certificates:
      "Ausbildungsnachweise und Zertifikate sind auf Anfrage erhältlich.",
  },
};

// =====================================================
// SKILL GROUPS
// =====================================================

const skillGroups = [
  {
    id: "core",
    title: {
      en: "Core Engineering",
      de: "Softwareentwicklung",
    },
    description: {
      en: "The foundation of my professional software engineering career.",
      de: "Die technische Grundlage meiner beruflichen Laufbahn in der Softwareentwicklung.",
    },
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
      "APIs",
      "Web Services",
      "XML",
      "JSON",
      "SOAP",
      "REST",
      "JMS",
    ],
  },
  {
    id: "web",
    title: {
      en: "Modern Web",
      de: "Moderne Webentwicklung",
    },
    description: {
      en: "Technologies I use to build modern, responsive web products.",
      de: "Technologien zur Entwicklung moderner und responsiver Webanwendungen.",
    },
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
    id: "mobile",
    title: {
      en: "Mobile",
      de: "Mobile Entwicklung",
    },
    description: {
      en: "Cross-platform mobile applications sharing modern web principles.",
      de: "Plattformübergreifende mobile Anwendungen auf Basis moderner Entwicklungskonzepte.",
    },
    icon: MonitorSmartphone,
    skills: [
      "React Native",
      "Expo",
      "Mobile UI",
      "API Integration",
    ],
  },
  {
    id: "backend",
    title: {
      en: "Backend & Data",
      de: "Backend & Datenbanken",
    },
    description: {
      en: "Application services, relational data and secure backend workflows.",
      de: "Anwendungsdienste, relationale Datenbanken und sichere Backend-Prozesse.",
    },
    icon: Database,
    skills: [
      "SQL",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Oracle",
      "MSSQL",
      "Authentication",
    ],
  },
  {
    id: "operations",
    title: {
      en: "Integration & Operations",
      de: "Integration & IT-Betrieb",
    },
    description: {
      en: "Experience keeping enterprise systems connected, observable and reliable.",
      de: "Erfahrung in der Integration, Überwachung und im zuverlässigen Betrieb von Unternehmenssystemen.",
    },
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
    id: "tools",
    title: {
      en: "Tools & Delivery",
      de: "Werkzeuge & Bereitstellung",
    },
    description: {
      en: "Tools and practices used across development and delivery.",
      de: "Werkzeuge und Methoden für Entwicklung, Tests und Bereitstellung.",
    },
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Firebase",
      "ImageKit",
      "Cloudinary",
      "Agile",
      "Testing",
      "Configuration Management",
    ],
  },
];

// =====================================================
// SKILL CARD
// =====================================================

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

        <CardTitle className="text-lg text-white">
          {title}
        </CardTitle>

        <p className="text-sm leading-6 text-zinc-500">
          {description}
        </p>
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

// =====================================================
// ABOUT PAGE
// =====================================================

export default function AboutPage() {
  const { language } = useLanguage();
  const lang = language === "de" ? "de" : "en";
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              {t.introduction.label}
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {t.introduction.heading}{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t.introduction.highlight}
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {t.introduction.paragraph1}
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {t.introduction.paragraph2}
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
                  {t.approach.engineer.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {t.approach.engineer.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-6">
                <Sparkles className="mb-5 size-5 text-purple-400" />

                <h2 className="text-lg font-semibold text-white">
                  {t.approach.automate.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {t.approach.automate.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-6">
                <BookOpen className="mb-5 size-5 text-purple-400" />

                <h2 className="text-lg font-semibold text-white">
                  {t.approach.learning.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {t.approach.learning.description}
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
              {t.skills.label}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.skills.heading}{" "}
              <span className="text-zinc-500">
                {t.skills.highlight}
              </span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <RevealOnScroll key={group.id}>
              <SkillCard
                title={group.title[lang]}
                description={group.description[lang]}
                icon={group.icon}
                featured={group.featured}
                skills={group.skills}
              />
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
          {/* EDUCATION */}
          <RevealOnScroll>
            <Card className="h-full border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-7 sm:p-8">
                <div className="mb-6 flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <GraduationCap className="size-5 text-purple-400" />
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  {t.education.label}
                </p>

                <h2 className="text-xl font-semibold text-white">
                  {t.education.degree}
                </h2>

                <p className="mt-3 text-zinc-400">
                  BNM Institute of Technology
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  {t.education.university}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-sm text-zinc-500">
                    2005 — 2009
                  </span>

                  <Badge
                    variant="outline"
                    className="border-purple-400/30 bg-purple-400/10 text-purple-300"
                  >
                    {t.education.distinction}
                  </Badge>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {t.education.achievement}
                </p>
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* LANGUAGES */}
          <RevealOnScroll>
            <Card className="h-full border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-7 sm:p-8">
                <div className="mb-6 flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Languages className="size-5 text-purple-400" />
                </div>

                <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  {t.languages.label}
                </p>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-medium text-white">
                        {t.languages.english}
                      </h2>

                      <span className="text-sm text-zinc-500">
                        {t.languages.fluent}
                      </span>
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-medium text-white">
                        {t.languages.german}
                      </h2>

                      <Badge
                        variant="outline"
                        className="border-purple-400/30 bg-purple-400/10 text-purple-300"
                      >
                        {t.languages.certified}
                      </Badge>
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-medium text-white">
                        {t.languages.kannada}
                      </h2>

                      <span className="text-sm text-zinc-500">
                        {t.languages.native}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          {t.certificates}
        </p>
      </section>
    </main>
  );
}
