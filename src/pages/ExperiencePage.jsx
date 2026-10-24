
import {
  BriefcaseBusiness,
  Code2,
  Cog,
  ServerCog,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useLanguage } from "@/i18n/useLanguage";

// =====================================================
// PAGE TRANSLATIONS
// =====================================================

const translations = {
  en: {
    label: "Career Journey",
    heading: "Experience that",
    highlight: "speaks through engineering.",
    description:
      "From Java development and enterprise integration to production engineering and modern full-stack products — a career built around solving practical technical problems.",
    present: "Present",
  },

  de: {
    label: "Beruflicher Werdegang",
    heading: "Meine Erfahrung.",
    highlight: "Technik, die Lösungen schafft.",
    description:
      "Von der Java-Entwicklung und Integration von Unternehmensanwendungen über den produktiven IT-Betrieb bis zur modernen Full-Stack-Entwicklung – mein beruflicher Weg ist geprägt von der Lösung praktischer technischer Herausforderungen.",
    present: "Heute",
  },
};

// =====================================================
// EXPERIENCE DATA
// =====================================================

const experiences = [
  {
    id: "independent",
    period: {
      en: "2023 — Present",
      de: "2023 — Heute",
    },
    role: {
      en: "Career & Family Phase",
      de: "Familienphase & eigenständige Softwareprojekte",
    },
    company: {
      en: "Independent Projects · Mägenwil, Switzerland",
      de: "Eigenständige Projekte · Mägenwil, Schweiz",
    },
    icon: Code2,
    description: {
      en: "A family-focused career phase while continuing hands-on software engineering through independent web and mobile products. Building complete applications from idea and architecture through implementation and deployment.",
      de: "Während einer familienorientierten Berufsphase habe ich meine Tätigkeit in der Softwareentwicklung durch eigenständige Web- und Mobilprojekte fortgeführt. Dabei entwickle ich vollständige Anwendungen – von der Idee und Architektur über die Implementierung bis zur Bereitstellung.",
    },
    highlights: {
      en: [
        "Full-stack web and mobile development",
        "Product architecture and database design",
        "Authentication, APIs and deployment",
      ],
      de: [
        "Full-Stack-Webentwicklung und Entwicklung mobiler Anwendungen",
        "Anwendungsarchitektur und Datenbankdesign",
        "Authentifizierung, API-Integration und Bereitstellung",
      ],
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    id: "production-support",
    period: {
      en: "2017 — 2022",
      de: "2017 — 2022",
    },
    role: {
      en: "Software Engineer — Production Support / Integration",
      de: "Software Engineer – Produktionssupport & Integration",
    },
    company: {
      en: "Credit Suisse · Cognizant Switzerland · Zürich",
      de: "Credit Suisse · Cognizant Switzerland · Zürich",
    },
    icon: ServerCog,
    description: {
      en: "Engineering and second-level production support for enterprise application integration services, with responsibility for reliable operations, incident resolution, monitoring and stakeholder coordination.",
      de: "Software Engineering und Second-Level-Support für produktive Integrationsdienste in einer Unternehmensumgebung. Zu meinen Aufgaben gehörten die Sicherstellung des zuverlässigen Betriebs, die Analyse und Behebung von Störungen, das Monitoring sowie die Abstimmung mit verschiedenen Fach- und IT-Teams.",
    },
    highlights: {
      en: [
        "Supported enterprise Java, MQ, file-transfer and Unix-based integration services",
        "Handled real-time major incidents and performed root-cause analysis",
        "Implemented and improved monitoring and alerting to meet SLAs",
        "Created tools to automate repetitive operational processes",
        "Coordinated with development, infrastructure and business teams",
        "Supported and guided team members and new joiners",
      ],
      de: [
        "Betreuung von Java-, MQ-, File-Transfer- und Unix-basierten Integrationsdiensten",
        "Bearbeitung kritischer Produktionsstörungen und Durchführung von Ursachenanalysen",
        "Implementierung und Optimierung von Monitoring und Alerting zur Einhaltung der SLAs",
        "Entwicklung von Tools zur Automatisierung wiederkehrender Betriebsaufgaben",
        "Koordination mit Entwicklungs-, Infrastruktur- und Fachbereichsteams",
        "Unterstützung und Einarbeitung von Teammitgliedern",
      ],
    },
    technologies: [
      "Java",
      "Unix",
      "Shell",
      "SQL",
      "Oracle",
      "MQ",
      "File Transfer",
      "Monitoring",
      "Agile",
    ],
  },
  {
    id: "application-management",
    period: {
      en: "2013 — 2017",
      de: "2013 — 2017",
    },
    role: {
      en: "Software Engineer — Application Management",
      de: "Software Engineer – Application Management",
    },
    company: {
      en: "Credit Suisse · Cognizant Switzerland · Zürich",
      de: "Credit Suisse · Cognizant Switzerland · Zürich",
    },
    icon: Cog,
    description: {
      en: "Java development and application management for enterprise integration systems, combining software engineering with configuration, testing and coordination across application and business teams.",
      de: "Java-Entwicklung und Application Management für Integrationssysteme in einer Unternehmensumgebung. Die Tätigkeit umfasste Softwareentwicklung, Konfigurationsmanagement, Tests sowie die Zusammenarbeit mit Anwendungs- und Fachbereichsteams.",
    },
    highlights: {
      en: [
        "Developed Java/J2EE parser and MQ/file-transfer functionality",
        "Supported Unix-based Java applications",
        "Implemented application-integration requirements",
        "Performed unit and system integration testing",
        "Used Oracle queries for performance measurement and statistics",
        "Coordinated technical dependencies across connected applications",
      ],
      de: [
        "Entwicklung von Java/J2EE-Parsern sowie MQ- und File-Transfer-Funktionalitäten",
        "Betreuung von Java-Anwendungen auf Unix-Systemen",
        "Umsetzung von Anforderungen zur Anwendungsintegration",
        "Durchführung von Unit-Tests und Systemintegrationstests",
        "Verwendung von Oracle-SQL-Abfragen für Performancemessungen und statistische Auswertungen",
        "Koordination technischer Abhängigkeiten zwischen verbundenen Anwendungen",
      ],
    },
    technologies: [
      "Java",
      "J2EE",
      "Unix",
      "Oracle",
      "SQL",
      "MQ",
      "File Transfer",
      "Integration",
    ],
  },
  {
    id: "mes-gateway",
    period: {
      en: "2013 — 2013",
      de: "2013",
    },
    role: {
      en: "Software Engineer — MES Gateway Development",
      de: "Software Engineer – MES-Gateway-Entwicklung",
    },
    company: {
      en: "Meyer Burger · Switzerland",
      de: "Meyer Burger · Schweiz",
    },
    icon: Wrench,
    description: {
      en: "Developed gateway software and HMI integrations for manufacturing execution systems used in photovoltaic module production lines.",
      de: "Entwicklung von Gateway-Software und HMI-Integrationen für Manufacturing Execution Systems (MES), die in Produktionslinien für Photovoltaikmodule eingesetzt werden.",
    },
    highlights: {
      en: [
        "Designed MES gateways and HMI interfaces",
        "Developed primarily in Java",
        "Worked with PLC programming and manufacturing-system integration",
        "Contributed to production-line automation software",
      ],
      de: [
        "Konzeption und Entwicklung von MES-Gateways und HMI-Schnittstellen",
        "Softwareentwicklung hauptsächlich mit Java",
        "Arbeit mit SPS-Programmierung und der Integration von Fertigungssystemen",
        "Mitarbeit an Software zur Automatisierung von Produktionslinien",
      ],
    },
    technologies: [
      "Java",
      "JavaScript",
      "Python",
      "JRuby",
      "TwinCAT",
      "PLC",
      "SVN",
    ],
  },
  {
    id: "applied-materials",
    period: {
      en: "2010 — 2011",
      de: "2010 — 2011",
    },
    role: {
      en: "Software Developer — ADC",
      de: "Softwareentwicklerin – ADC",
    },
    company: {
      en: "Applied Materials · Bangalore, India",
      de: "Applied Materials · Bangalore, Indien",
    },
    icon: Code2,
    description: {
      en: "Java development for an Automatic Defect Classification system used in semiconductor wafer inspection, covering the software lifecycle from requirements and design through development, testing and defect resolution.",
      de: "Java-Entwicklung für ein System zur automatischen Fehlerklassifizierung (Automatic Defect Classification, ADC) bei der Inspektion von Halbleiter-Wafern. Die Aufgaben deckten den Softwareentwicklungszyklus von der Anforderungsanalyse und dem Design über die Implementierung und Tests bis zur Fehlerbehebung ab.",
    },
    highlights: {
      en: [
        "Analyzed requirements and designed Java classes and functionality",
        "Developed application features and automated unit tests",
        "Performed end-to-end system testing",
        "Resolved critical defects across application modules and tools",
        "Worked with Oracle and Microsoft SQL databases",
        "Produced technical and design documentation",
      ],
      de: [
        "Analyse von Anforderungen und Entwurf von Java-Klassen und Funktionalitäten",
        "Entwicklung von Anwendungsfunktionen und automatisierten Unit-Tests",
        "Durchführung von End-to-End-Systemtests",
        "Behebung kritischer Fehler in Anwendungsmodulen und Tools",
        "Arbeit mit Oracle- und Microsoft-SQL-Datenbanken",
        "Erstellung technischer Dokumentationen und Designdokumente",
      ],
    },
    technologies: [
      "Java",
      "Spring",
      "Hibernate",
      "JSP",
      "JDBC",
      "CORBA",
      "Oracle",
      "MSSQL",
      "Ant",
    ],
  },
  {
    id: "cisco",
    period: {
      en: "2009",
      de: "2009",
    },
    role: {
      en: "Trainee Software Engineer",
      de: "Software Engineer – Praktikum",
    },
    company: {
      en: "Cisco · India",
      de: "Cisco · Indien",
    },
    icon: BriefcaseBusiness,
    description: {
      en: "Worked on Cisco WAAS Manager, developing Java-based device-management functionality for Wide Area Application Engines.",
      de: "Mitarbeit am Cisco WAAS Manager mit Schwerpunkt auf der Entwicklung Java-basierter Geräteverwaltungsfunktionen für Wide Area Application Engines.",
    },
    highlights: {
      en: [
        "Developed interface-management functionality",
        "Built GUI, object, parser and communication modules",
        "Worked with socket-based communication",
        "Designed a simulator for testing device-manager behaviour",
      ],
      de: [
        "Entwicklung von Funktionen zur Schnittstellenverwaltung",
        "Implementierung von GUI-, Objekt-, Parser- und Kommunikationsmodulen",
        "Arbeit mit Socket-basierter Kommunikation",
        "Entwicklung eines Simulators zum Testen des Verhaltens der Geräteverwaltung",
      ],
    },
    technologies: [
      "Java",
      "JDK 1.6",
      "Sockets",
      "POJO",
      "NetBeans",
      "C",
      "C++",
    ],
  },
];

// =====================================================
// TIMELINE CARD
// =====================================================

function TimelineCard({ experience, index, language }) {
  const Icon = experience.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid md:grid-cols-2 md:gap-16">
      {/* Timeline dot */}
      <div className="absolute left-[7px] top-9 z-10 md:left-1/2 md:-translate-x-1/2">
        <div className="flex size-4 items-center justify-center rounded-full border border-purple-400/60 bg-black shadow-[0_0_18px_rgba(168,85,247,0.35)]">
          <div className="size-1.5 rounded-full bg-purple-400" />
        </div>
      </div>

      <div
        className={`ml-10 md:ml-0 ${
          isLeft
            ? "md:col-start-1 md:pr-4"
            : "md:col-start-2 md:pl-4"
        }`}
      >
        <RevealOnScroll>
          <Card className="group border-white/10 bg-zinc-950/70 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-950">
            <CardContent className="p-6 sm:p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-medium text-purple-400">
                    {experience.period[language]}
                  </p>

                  <h2 className="text-xl font-semibold leading-snug text-white">
                    {experience.role[language]}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {experience.company[language]}
                  </p>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Icon className="size-4 text-zinc-400" />
                </div>
              </div>

              <p className="leading-7 text-zinc-400">
                {experience.description[language]}
              </p>

              <ul className="mt-6 space-y-2.5">
                {experience.highlights[language].map(
                  (highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-zinc-400"
                    >
                      <span className="mt-[10px] size-1 shrink-0 rounded-full bg-purple-400/80" />
                      <span>{highlight}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map(
                  (technology) => (
                    <Badge
                      key={technology}
                      variant="outline"
                      className="border-white/10 bg-white/[0.025] font-normal text-zinc-400"
                    >
                      {technology}
                    </Badge>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </div>
    </div>
  );
}

// =====================================================
// EXPERIENCE PAGE
// =====================================================

export default function ExperiencePage() {
  const { language } = useLanguage();

  const lang = language === "de" ? "de" : "en";
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              {t.label}
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t.highlight}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              {t.description}
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical timeline */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[14px] top-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/40 to-blue-500/0 md:left-1/2"
          />

          <div className="space-y-10 md:space-y-14">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={experience.id}
                experience={experience}
                index={index}
                language={lang}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
