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

const experiences = [
  {
    period: "2023 — Present",
    role: "Career & Family Phase",
    company: "Independent Projects · Mägenwil, Switzerland",
    icon: Code2,
    description:
      "A family-focused career phase while continuing hands-on software engineering through independent web and mobile products. Building complete applications from idea and architecture through implementation and deployment.",
    highlights: [
      "Full-stack web and mobile development",
      "Product architecture and database design",
      "Authentication, APIs and deployment",
    ],
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
    period: "2017 — 2022",
    role: "Software Engineer — Production Support / Integration",
    company: "Credit Suisse · Cognizant Switzerland · Zürich",
    icon: ServerCog,
    description:
      "Engineering and second-level production support for enterprise application integration services, with responsibility for reliable operations, incident resolution, monitoring and stakeholder coordination.",
    highlights: [
      "Supported enterprise Java, MQ, file-transfer and Unix-based integration services",
      "Handled real-time major incidents and performed root-cause analysis",
      "Implemented and improved monitoring and alerting to meet SLAs",
      "Created tools to automate repetitive operational processes",
      "Coordinated with development, infrastructure and business teams",
      "Supported and guided team members and new joiners",
    ],
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
    period: "2013 — 2017",
    role: "Software Engineer — Application Management",
    company: "Credit Suisse · Cognizant Switzerland · Zürich",
    icon: Cog,
    description:
      "Java development and application management for enterprise integration systems, combining software engineering with configuration, testing and coordination across application and business teams.",
    highlights: [
      "Developed Java/J2EE parser and MQ/file-transfer functionality",
      "Supported Unix-based Java applications",
      "Implemented application-integration requirements",
      "Performed unit and system integration testing",
      "Used Oracle queries for performance measurement and statistics",
      "Coordinated technical dependencies across connected applications",
    ],
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
    period: "2013 — 2013",
    role: "Software Engineer — MES Gateway Development",
    company: "Meyer Burger · Switzerland",
    icon: Wrench,
    description:
      "Developed gateway software and HMI integrations for manufacturing execution systems used in photovoltaic module production lines.",
    highlights: [
      "Designed MES gateways and HMI interfaces",
      "Developed primarily in Java",
      "Worked with PLC programming and manufacturing-system integration",
      "Contributed to production-line automation software",
    ],
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
    period: "2009 — 2011",
    role: "Software Developer — ADC",
    company: "Applied Materials · Bangalore, India",
    icon: Code2,
    description:
      "Java development for an Automatic Defect Classification system used in semiconductor wafer inspection, covering the software lifecycle from requirements and design through development, testing and defect resolution.",
    highlights: [
      "Analyzed requirements and designed Java classes and functionality",
      "Developed application features and automated unit tests",
      "Performed end-to-end system testing",
      "Resolved critical defects across application modules and tools",
      "Worked with Oracle and Microsoft SQL databases",
      "Produced technical and design documentation",
    ],
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
    period: "2009",
    role: "Trainee Software Engineer",
    company: "Cisco · India",
    icon: BriefcaseBusiness,
    description:
      "Worked on Cisco WAAS Manager, developing Java-based device-management functionality for Wide Area Application Engines.",
    highlights: [
      "Developed interface-management functionality",
      "Built GUI, object, parser and communication modules",
      "Worked with socket-based communication",
      "Designed a simulator for testing device-manager behaviour",
    ],
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

function TimelineCard({ experience, index }) {
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
                    {experience.period}
                  </p>

                  <h2 className="text-xl font-semibold leading-snug text-white">
                    {experience.role}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {experience.company}
                  </p>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Icon className="size-4 text-zinc-400" />
                </div>
              </div>

              <p className="leading-7 text-zinc-400">
                {experience.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-zinc-400"
                  >
                    <span className="mt-[10px] size-1 shrink-0 rounded-full bg-purple-400/80" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                    className="border-white/10 bg-white/[0.025] font-normal text-zinc-400"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Career Journey
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Experience that{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                speaks through engineering.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              From Java development and enterprise integration to production
              engineering and modern full-stack products — a career built
              around solving practical technical problems.
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
                key={`${experience.period}-${experience.role}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}