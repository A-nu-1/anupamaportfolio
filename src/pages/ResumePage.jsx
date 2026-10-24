
import { useRef, useState } from "react";
import {
  Check,
  ClipboardCopy,
  Download,
  Printer,
} from "lucide-react";

import { useLanguage } from "@/i18n/useLanguage";

// =====================================================
// RESUME DATA — ENGLISH / GERMAN
// =====================================================

const common = {
  name: "Anupama Rajendra",
  phone: "+41 77 970 4370",
  email: "rajendra.anupama@gmail.com",
};

const resumeData = {
  en: {
    title:
      "Software Engineer · Java · Enterprise Integration · Full-Stack · Mobile",

    location: "Mägenwil, Aargau, Switzerland",
    workAuthorization: "Work authorization",
    permit: "Swiss C Permit",
    phoneLabel: "Phone",
    emailLabel: "Email",

    headings: {
      profile: "Profile",
      skills: "Technical Skills",
      experience: "Professional Experience",
      projects: "Selected Projects",
      education: "Education",
      languages: "Languages",
    },

    actions: {
      copy: "Copy Resume",
      copied: "Copied!",
      download: "Download TXT",
      print: "Print Resume",
    },

    profile:
      "Software engineer with extensive experience in Java, enterprise integration and production systems, combined with recent hands-on development of modern web and Android applications. Experienced across development, automation, operations and complete product delivery.",

    skills: [
      ["Core Engineering", "Java, J2EE, Spring, Hibernate, OOP"],
      ["Database & SQL", "SQL, PostgreSQL, Oracle, MSSQL"],
      [
        "Unix & Automation",
        "Unix, Shell Scripting, production automation",
      ],
      [
        "Web",
        "React, Next.js, TypeScript, JavaScript, Tailwind CSS",
      ],
      ["Mobile", "React Native, Expo"],
      [
        "Backend",
        "Node.js, Supabase, Prisma, REST APIs",
      ],
      [
        "Integration",
        "MQ, File Transfer, Enterprise Integration",
      ],
      [
        "Tools",
        "Git, GitHub, Firebase FCM, ImageKit, Vercel",
      ],
    ],

    jobs: [
      {
        period: "01/2023 – Present",
        role: "Freelance / Independent Software Engineer",
        company:
          "Independent Software Development · Switzerland",
        highlights: [
          "Continuing hands-on software engineering while balancing family responsibilities, with a focus on modern web, mobile and full-stack development.",
          "Design and build applications across frontend, backend, database, authentication, integrations, deployment and production operations.",
          "Work with technologies including React, Next.js, TypeScript, React Native, Expo, Node.js, PostgreSQL and Supabase.",
        ],
      },
      {
        period: "12/2017 – 12/2022",
        role:
          "Software Engineer · Production Support / Integration",
        company:
          "Credit Suisse · Cognizant Switzerland · Zürich, Switzerland",
        highlights: [
          "Supported business-critical Java, SQL, Unix shell scripting, MQ, file-transfer and Unix-based integration services in an SLA-driven production environment.",
          "Managed production incidents, monitoring and operational improvements, including automation of repetitive daily processes.",
        ],
      },
      {
        period: "04/2013 – 12/2017",
        role:
          "Software Engineer · Application Management / Java",
        company:
          "Credit Suisse · Cognizant Switzerland · Zürich, Switzerland",
        highlights: [
          "Developed and supported Java/J2EE, MQ and file-transfer integration functionality.",
          "Worked across Unix applications, system integration testing, SQL / Oracle analysis and coordination with application and business teams.",
        ],
      },
      {
        period: "01/2013 – 04/2013",
        role: "Software Engineer · MES Gateway Development",
        company: "Meyer Burger · Switzerland",
        highlights: [
          "Java-based manufacturing integration and MES gateway development for photovoltaic production systems.",
        ],
      },
      {
        period: "03/2010 – 10/2011",
        role:
          "Software Developer · Automatic Defect Classification",
        company: "Applied Materials · Bangalore, India",
        highlights: [
          "Java software development for semiconductor wafer inspection and automatic defect-classification systems.",
          "Java development with Oracle / MSSQL-backed semiconductor software.",
        ],
      },
      {
        period: "07/2008 – 07/2009",
        role: "Trainee Software Engineer",
        company: "Cisco · India",
        highlights: [
          "Java development for device-management functionality within Cisco WAAS Manager.",
        ],
      },
    ],

    projects: [
      {
        name: "Client Commerce Platforms",
        description:
          "Lucky's Collection + A Home Cook · Web + Android · AI · Supabase · Firebase · caching",
      },
      {
        name: "Bhajans",
        description:
          "Multilingual devotional lyrics platform for my spiritual community · Web + Android",
      },
      {
        name: "Travel Planner",
        description:
          "Trip planning, itineraries, interactive maps and travel visualization",
      },
    ],

    education: {
      degree: "Bachelor of Engineering in Computer Science",
      institution:
        "BNM Institute of Technology · Visvesvaraya Technological University · India",
      distinction: "Graduated with Distinction",
      ranking: "Ranked among the top 3 in the state",
      prior:
        "Prior education: 12 years of school education in India (10 years primary/secondary + 2 years higher secondary / pre-university)",
      period: "2005 – 2009",
    },

    languages: [
      ["English", "Fluent"],
      ["German", "B1 Certified"],
      ["Kannada", "Native"],
      ["Hindi", "Fluent"],
      ["Telugu", "Fluent"],
      ["Sanskrit", "Fluent"],
    ],
  },

  de: {
    title:
      "Softwareentwicklerin · Java · Unternehmensintegration · Full-Stack · Mobile",

    location: "Mägenwil, Aargau, Schweiz",
    workAuthorization: "Arbeitsbewilligung",
    permit: "Niederlassungsbewilligung C",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",

    headings: {
      profile: "Profil",
      skills: "Technische Kompetenzen",
      experience: "Berufserfahrung",
      projects: "Ausgewählte Projekte",
      education: "Ausbildung",
      languages: "Sprachkenntnisse",
    },

    actions: {
      copy: "Lebenslauf kopieren",
      copied: "Kopiert!",
      download: "TXT herunterladen",
      print: "Lebenslauf drucken",
    },

    profile:
      "Softwareentwicklerin mit langjähriger Erfahrung in Java, der Integration von Unternehmensanwendungen und im produktiven IT-Betrieb. Ergänzend dazu praktische Erfahrung in der Entwicklung moderner Web- und Android-Anwendungen. Kompetenzen in Softwareentwicklung, Automatisierung, Application Management, IT-Betrieb sowie in der vollständigen Umsetzung digitaler Produkte.",

    skills: [
      [
        "Softwareentwicklung",
        "Java, J2EE, Spring, Hibernate, OOP",
      ],
      [
        "Datenbanken & SQL",
        "SQL, PostgreSQL, Oracle, MSSQL",
      ],
      [
        "Unix & Automatisierung",
        "Unix, Shell Scripting, Automatisierung von Betriebsprozessen",
      ],
      [
        "Webentwicklung",
        "React, Next.js, TypeScript, JavaScript, Tailwind CSS",
      ],
      ["Mobile Entwicklung", "React Native, Expo"],
      [
        "Backend",
        "Node.js, Supabase, Prisma, REST APIs",
      ],
      [
        "Systemintegration",
        "MQ, File Transfer, Integration von Unternehmensanwendungen",
      ],
      [
        "Werkzeuge",
        "Git, GitHub, Firebase FCM, ImageKit, Vercel",
      ],
    ],

    jobs: [
      {
        period: "01/2023 – Heute",
        role:
          "Eigenständige Softwareentwicklung / Freelance",
        company:
          "Eigenständige Softwareprojekte · Schweiz",
        highlights: [
          "Fortführung der praktischen Softwareentwicklung während einer familienorientierten Berufsphase mit Schwerpunkt auf modernen Web-, Mobile- und Full-Stack-Anwendungen.",
          "Konzeption und Entwicklung vollständiger Anwendungen mit Frontend, Backend, Datenbanken, Authentifizierung, Schnittstellen, Bereitstellung und produktivem Betrieb.",
          "Einsatz von React, Next.js, TypeScript, React Native, Expo, Node.js, PostgreSQL und Supabase.",
        ],
      },
      {
        period: "12/2017 – 12/2022",
        role:
          "Software Engineer · Produktionssupport / Integration",
        company:
          "Credit Suisse · Cognizant Switzerland · Zürich, Schweiz",
        highlights: [
          "Betreuung geschäftskritischer Java-, SQL-, Unix-Shell-, MQ- und File-Transfer-basierter Integrationsdienste in einer produktiven Umgebung mit definierten Service Level Agreements (SLAs).",
          "Bearbeitung von Produktionsstörungen, Monitoring und Optimierung von Betriebsprozessen, einschliesslich der Automatisierung wiederkehrender Aufgaben.",
        ],
      },
      {
        period: "04/2013 – 12/2017",
        role:
          "Software Engineer · Application Management / Java",
        company:
          "Credit Suisse · Cognizant Switzerland · Zürich, Schweiz",
        highlights: [
          "Entwicklung und Betreuung von Java/J2EE-Anwendungen sowie MQ- und File-Transfer-Integrationsfunktionen.",
          "Arbeit mit Unix-Anwendungen, Systemintegrationstests, SQL-/Oracle-Analysen sowie Koordination mit Anwendungs- und Fachbereichsteams.",
        ],
      },
      {
        period: "01/2013 – 04/2013",
        role:
          "Software Engineer · MES-Gateway-Entwicklung",
        company: "Meyer Burger · Schweiz",
        highlights: [
          "Java-basierte Integration von Fertigungssystemen und Entwicklung von MES-Gateways für Photovoltaik-Produktionsanlagen.",
        ],
      },
      {
        period: "03/2010 – 10/2011",
        role:
          "Softwareentwicklerin · Automatische Fehlerklassifizierung",
        company: "Applied Materials · Bangalore, Indien",
        highlights: [
          "Java-Softwareentwicklung für die Inspektion von Halbleiter-Wafern und Systeme zur automatischen Fehlerklassifizierung.",
          "Entwicklung von Java-Anwendungen mit Oracle- und MSSQL-Datenbanken für Halbleitersysteme.",
        ],
      },
      {
        period: "07/2008 – 07/2009",
        role: "Software Engineer · Praktikum",
        company: "Cisco · Indien",
        highlights: [
          "Java-Entwicklung von Geräteverwaltungsfunktionen innerhalb des Cisco WAAS Managers.",
        ],
      },
    ],

    projects: [
      {
        name: "E-Commerce-Plattformen für Kunden",
        description:
          "Lucky's Collection + A Home Cook · Web + Android · KI · Supabase · Firebase · Caching",
      },
      {
        name: "Bhajans",
        description:
          "Mehrsprachige Plattform für spirituelle Liedtexte, entwickelt für meine Gemeinschaft · Web + Android",
      },
      {
        name: "Travel Planner",
        description:
          "Reiseplanung, Reiserouten, interaktive Karten und Visualisierung von Reisen",
      },
    ],

    education: {
      degree: "Bachelor of Engineering in Informatik",
      institution:
        "BNM Institute of Technology · Visvesvaraya Technological University · Indien",
      distinction: "Abschluss mit Auszeichnung",
      ranking:
        "Unter den drei besten Studierenden des Bundesstaates",
      prior:
        "Vorherige Schulbildung: 12 Schuljahre in Indien (10 Jahre Primar- und Sekundarstufe + 2 Jahre höhere Sekundarstufe / voruniversitäre Ausbildung)",
      period: "2005 – 2009",
    },

    languages: [
      ["Englisch", "Fliessend"],
      ["Deutsch", "B1-Zertifikat"],
      ["Kannada", "Muttersprache"],
      ["Hindi", "Fliessend"],
      ["Telugu", "Fliessend"],
      ["Sanskrit", "Fliessend"],
    ],
  },
};

// =====================================================
// BUILD PLAIN TEXT FROM THE SAME RESUME DATA
// =====================================================

function buildResumeText(data) {
  const lines = [
    common.name.toUpperCase(),
    "",
    data.title,
    "",
    data.location,
    `${data.workAuthorization}: ${data.permit}`,
    `${data.phoneLabel}: ${common.phone}`,
    `${data.emailLabel}: ${common.email}`,
    "",
    data.headings.profile.toUpperCase(),
    "",
    data.profile,
    "",
    data.headings.skills.toUpperCase(),
    "",
  ];

  data.skills.forEach(([label, value]) => {
    lines.push(`${label}: ${value}`);
  });

  lines.push(
    "",
    data.headings.experience.toUpperCase(),
    "",
  );

  data.jobs.forEach((job) => {
    lines.push(
      job.period,
      job.role,
      job.company,
      "",
    );

    job.highlights.forEach((highlight) => {
      lines.push(`• ${highlight}`);
    });

    lines.push("");
  });

  lines.push(
    data.headings.projects.toUpperCase(),
    "",
  );

  data.projects.forEach((project) => {
    lines.push(
      project.name,
      project.description,
      "",
    );
  });

  lines.push(
    data.headings.education.toUpperCase(),
    "",
    data.education.period,
    data.education.degree,
    data.education.institution,
    data.education.distinction,
    data.education.ranking,
    data.education.prior,
    "",
    data.headings.languages.toUpperCase(),
    "",
  );

  data.languages.forEach(([name, level]) => {
    lines.push(`${name}: ${level}`);
  });

  return lines.join("\n").trim();
}

// =====================================================
// PRINT STYLES
// =====================================================

const PRINT_CSS = `
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: white;
    color: #18181b;
    font-family: Arial, Helvetica, sans-serif;
  }

  @page {
    size: A4 portrait;
    margin: 10mm 12mm;
  }

  .resume-page {
    width: 100%;
    margin: 0;
    padding: 0;
    background: white;
    color: #18181b;
  }

  .resume-header {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    border-bottom: 2px solid #27272a;
    padding-bottom: 8px;
  }

  .resume-header h1 {
    margin: 0;
    font-size: 23px;
    line-height: 1;
    font-weight: 800;
  }

  .resume-title {
    margin: 5px 0 0;
    font-size: 9.5px;
    font-weight: 600;
    color: #52525b;
  }

  .resume-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1px;
    font-size: 8.3px;
    line-height: 1.3;
    color: #52525b;
  }

  .resume-contact strong {
    color: #18181b;
  }

  .resume-section {
    margin-top: 8px;
  }

  .resume-section > h2 {
    margin: 0 0 4px;
    border-bottom: 1px solid #d4d4d8;
    padding-bottom: 2px;
    font-size: 9px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #18181b;
  }

  .resume-section p {
    margin: 0;
    font-size: 8.3px;
    line-height: 1.32;
    color: #3f3f46;
  }

  .resume-section strong {
    color: #18181b;
    font-weight: 700;
  }

  .resume-skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px 18px;
  }

  .resume-job {
    margin-bottom: 5px;
    break-inside: avoid;
  }

  .resume-job-featured {
    margin-bottom: 6px;
  }

  .resume-job-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
  }

  .resume-job-heading h3 {
    margin: 0;
    font-size: 8.8px;
    font-weight: 800;
  }

  .resume-job-heading p {
    margin-top: 1px;
    font-size: 8px;
    color: #71717a;
  }

  .resume-job-heading > strong {
    flex-shrink: 0;
    font-size: 8px;
    white-space: nowrap;
  }

  .resume-job ul {
    margin: 2px 0 0;
    padding-left: 14px;
  }

  .resume-job li {
    margin: 0;
    font-size: 8px;
    line-height: 1.28;
    color: #3f3f46;
  }

  .resume-projects {
    display: grid;
    gap: 2px;
  }

  .resume-projects > div {
    display: grid;
    grid-template-columns: 135px 1fr;
    gap: 7px;
    font-size: 8px;
    line-height: 1.25;
    break-inside: avoid;
  }

  .resume-projects span {
    color: #52525b;
  }

  .resume-education {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    font-size: 8px;
    line-height: 1.3;
    break-inside: avoid;
  }

  .resume-education > div {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .resume-education span {
    color: #52525b;
  }

  .resume-languages {
    margin-top: 7px;
  }

  @media print {
    .resume-job,
    .resume-projects > div,
    .resume-education {
      break-inside: avoid;
    }
  }
`;

// =====================================================
// RESUME PAGE
// =====================================================

export default function ResumePage() {
  const { language } = useLanguage();

  const lang = language === "de" ? "de" : "en";
  const data = resumeData[lang];

  const resumeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const resumeText = buildResumeText(data);

  // ===================================================
  // COPY RESUME
  // ===================================================

  async function handleCopyResume() {
    try {
      await navigator.clipboard.writeText(resumeText);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy resume:", error);
    }
  }

  // ===================================================
  // DOWNLOAD TXT
  // ===================================================

  function handleDownloadText() {
    const blob = new Blob([resumeText], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download =
      lang === "de"
        ? "Anupama_Rajendra_Lebenslauf_DE.txt"
        : "Anupama_Rajendra_Resume_EN.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  // ===================================================
  // PRINT RESUME / SAVE AS PDF
  // ===================================================

  function handlePrint() {
    if (!resumeRef.current) return;

    const printWindow = window.open(
      "",
      "_blank",
      "width=900,height=1200"
    );

    if (!printWindow) return;

    const resumeHtml = resumeRef.current.outerHTML;

    const documentTitle =
      lang === "de"
        ? "Anupama Rajendra - Lebenslauf"
        : "Anupama Rajendra - Resume";

    printWindow.document.write(`
      <!doctype html>
      <html lang="${lang}">
        <head>
          <meta charset="UTF-8" />
          <title>${documentTitle}</title>
          <style>${PRINT_CSS}</style>
        </head>

        <body>
          ${resumeHtml}

          <script>
            window.onload = function () {
              setTimeout(function () {
                window.print();
              }, 250);
            };

            window.onafterprint = function () {
              window.close();
            };
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  }

  return (
    <main className="resume-screen min-h-screen bg-zinc-950 px-4 py-24 sm:px-6">
      {/* =====================================================
          ACTION BUTTONS
      ===================================================== */}

      <div className="no-print mx-auto mb-6 flex max-w-[210mm] flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={handleCopyResume}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
        >
          {copied ? (
            <>
              <Check className="size-4 text-emerald-400" />
              {data.actions.copied}
            </>
          ) : (
            <>
              <ClipboardCopy className="size-4" />
              {data.actions.copy}
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleDownloadText}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
        >
          <Download className="size-4" />
          {data.actions.download}
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-100"
        >
          <Printer className="size-4" />
          {data.actions.print}
        </button>
      </div>

      {/* =====================================================
          RESUME DOCUMENT
      ===================================================== */}

      <article
        ref={resumeRef}
        className="resume-page mx-auto bg-white text-zinc-900 shadow-2xl"
      >
        {/* HEADER */}
        <header className="resume-header">
          <div>
            <h1>{common.name}</h1>

            <p className="resume-title">
              {data.title}
            </p>
          </div>

          <div className="resume-contact">
            <span>
              <strong>{data.location}</strong>
            </span>

            <span>
              {data.workAuthorization}:{" "}
              <strong>{data.permit}</strong>
            </span>

            <span>
              {data.phoneLabel}:{" "}
              <strong>{common.phone}</strong>
            </span>

            <span>
              {data.emailLabel}:{" "}
              <strong>{common.email}</strong>
            </span>
          </div>
        </header>

        {/* PROFILE */}
        <section className="resume-section">
          <h2>{data.headings.profile}</h2>
          <p>{data.profile}</p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="resume-section">
          <h2>{data.headings.skills}</h2>

          <div className="resume-skills">
            {data.skills.map(([label, value]) => (
              <p key={label}>
                <strong>{label}:</strong> {value}
              </p>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="resume-section">
          <h2>{data.headings.experience}</h2>

          {data.jobs.map((job, index) => (
            <div
              key={`${job.period}-${index}`}
              className={`resume-job ${
                index === 0 ? "resume-job-featured" : ""
              }`}
            >
              <div className="resume-job-heading">
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}</p>
                </div>

                <strong>{job.period}</strong>
              </div>

              <ul>
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section className="resume-section">
          <h2>{data.headings.projects}</h2>

          <div className="resume-projects">
            {data.projects.map((project) => (
              <div key={project.name}>
                <strong>{project.name}</strong>
                <span>{project.description}</span>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="resume-section">
          <h2>{data.headings.education}</h2>

          <div className="resume-education">
            <div>
              <strong>{data.education.degree}</strong>
              <span>{data.education.institution}</span>

              <span>
                <strong>
                  {data.education.distinction}
                </strong>
                {" · "}
                {data.education.ranking}
              </span>

              <span>{data.education.prior}</span>
            </div>

            <strong>{data.education.period}</strong>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="resume-section resume-languages">
          <h2>{data.headings.languages}</h2>

          <p>
            {data.languages.map(([name, level], index) => (
              <span key={name}>
                {index > 0 && "  ·  "}
                <strong>{name}:</strong> {level}
              </span>
            ))}
          </p>
        </section>
      </article>
    </main>
  );
}
