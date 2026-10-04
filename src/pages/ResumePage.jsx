import { useRef } from "react";
import { Printer } from "lucide-react";

export default function ResumePage() {
  const resumeRef = useRef(null);

  function handlePrint() {
    if (!resumeRef.current) return;

    const printWindow = window.open("", "_blank", "width=900,height=1200");

    if (!printWindow) return;

    const resumeHtml = resumeRef.current.outerHTML;

    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Anupama Rajendra - Resume</title>

          <style>
            * {
              box-sizing: border-box;
            }

            html,
            body {
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
              gap: 22px;
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

            .resume-job-summary {
              margin-top: 1px !important;
              font-size: 8px !important;
            }

            .resume-older-jobs {
              display: grid;
              gap: 2px;
              margin-top: 3px;
            }

            .resume-older-jobs > div {
              display: flex;
              justify-content: space-between;
              gap: 14px;
              font-size: 8px;
              line-height: 1.25;
            }

            .resume-older-jobs span {
              color: #71717a;
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
          </style>
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
      <div className="no-print mx-auto mb-6 flex max-w-[210mm] justify-end">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
        >
          <Printer className="size-4" />
          Print Resume
        </button>
      </div>

      <article
        ref={resumeRef}
        className="resume-page mx-auto bg-white text-zinc-900 shadow-2xl"
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="resume-header">
          <div>
            <h1>Anupama Rajendra</h1>

            <p className="resume-title">
              Software Engineer · Java · Enterprise Integration · Full-Stack ·
              Mobile
            </p>
          </div>

          <div className="resume-contact">
            <span>
              <strong>Mägenwil, Aargau, Switzerland</strong>
            </span>

            <span>
              Work authorization: <strong>Swiss C Permit</strong>
            </span>

            <span>
              Phone: <strong>+41 77 970 4370</strong>
            </span>

            <span>
              Email: <strong>rajendra.anupama@gmail.com</strong>
            </span>
          </div>
        </header>

        {/* =====================================================
            PROFILE
        ===================================================== */}
        <section className="resume-section">
          <h2>Profile</h2>

          <p>
            Software engineer with extensive experience in{" "}
            <strong>Java, enterprise integration and production systems</strong>
            , combined with recent hands-on development of modern{" "}
            <strong>web and Android applications</strong>. Experienced across
            development, automation, operations and complete product delivery.
          </p>
        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}
        <section className="resume-section">
          <h2>Technical Skills</h2>

          <div className="resume-skills">
            <p>
              <strong>Core Engineering:</strong> Java, J2EE, Spring, Hibernate,
              OOP
            </p>

            <p>
              <strong>Database & SQL:</strong> SQL, PostgreSQL, Oracle, MSSQL
            </p>

            <p>
              <strong>Unix & Automation:</strong> Unix, Shell Scripting,
              production automation
            </p>

            <p>
              <strong>Web:</strong> React, Next.js, TypeScript, JavaScript,
              Tailwind CSS
            </p>

            <p>
              <strong>Mobile:</strong> React Native, Expo
            </p>

            <p>
              <strong>Backend:</strong> Node.js, Supabase, Prisma, REST APIs
            </p>

            <p>
              <strong>Integration:</strong> MQ, File Transfer, Enterprise
              Integration
            </p>

            <p>
              <strong>Tools:</strong> Git, GitHub, Firebase FCM, ImageKit,
              Vercel
            </p>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}
        <section className="resume-section">
          <h2>Professional Experience</h2>

          {/* =====================================================
      CURRENT
  ===================================================== */}
          <div className="resume-job resume-job-featured">
            <div className="resume-job-heading">
              <div>
                <h3>Freelance / Independent Software Engineer</h3>

                <p>Independent Software Development · Switzerland</p>
              </div>

              <strong>01/2023 – Present</strong>
            </div>

            <ul>
              <li>
                Continuing hands-on software engineering while balancing family
                responsibilities, with a focus on modern{" "}
                <strong>web, mobile and full-stack development</strong>.
              </li>

              <li>
                Design and build applications across frontend, backend,
                database, authentication, integrations, deployment and
                production operations.
              </li>

              <li>
                Work with technologies including{" "}
                <strong>
                  React, Next.js, TypeScript, React Native, Expo, Node.js,
                  PostgreSQL and Supabase
                </strong>
                .
              </li>
            </ul>
          </div>

          {/* =====================================================
      CREDIT SUISSE — PRODUCTION SUPPORT / INTEGRATION
  ===================================================== */}
          <div className="resume-job">
            <div className="resume-job-heading">
              <div>
                <h3>Software Engineer · Production Support / Integration</h3>

                <p>
                  Credit Suisse · Cognizant Switzerland · Zürich, Switzerland
                </p>
              </div>

              <strong>12/2017 – 12/2022</strong>
            </div>

            <ul>
              <li>
                Supported business-critical{" "}
                <strong>
                  Java, SQL,UNIX shell scripting, MQ, file-transfer and
                  Unix-based integration services
                </strong>{" "}
                in an SLA-driven production environment.
              </li>

              <li>
                Managed production incidents, monitoring and operational
                improvements, including{" "}
                <strong>automation of repetitive daily processes</strong>.
              </li>
            </ul>
          </div>

          {/* =====================================================
      CREDIT SUISSE — APPLICATION MANAGEMENT
  ===================================================== */}
          <div className="resume-job">
            <div className="resume-job-heading">
              <div>
                <h3>Software Engineer · Application Management / Java</h3>

                <p>
                  Credit Suisse · Cognizant Switzerland · Zürich, Switzerland
                </p>
              </div>

              <strong>04/2013 – 12/2017</strong>
            </div>

            <ul>
              <li>
                Developed and supported{" "}
                <strong>Java/J2EE, MQ and file-transfer integration</strong>{" "}
                functionality.
              </li>

              <li>
                Worked across Unix applications, system integration testing, SQL
                / Oracle analysis and coordination with application and business
                teams.
              </li>
            </ul>
          </div>

          {/* =====================================================
      EARLIER EXPERIENCE
  ===================================================== */}
          <div className="resume-job">
            <div className="resume-job-heading">
              <div>
                <h3>Software Engineer · MES Gateway Development</h3>

                <p>Meyer Burger · Switzerland</p>
              </div>

              <strong>01/2013 – 04/2013</strong>
            </div>

            <p className="resume-job-summary">
              <ul>
                <li>
                  Java-based manufacturing integration and MES gateway
                  development for photovoltaic production systems.
                </li>
              </ul>
            </p>
          </div>

          <div className="resume-job">
            <div className="resume-job-heading">
              <div>
                <h3>Software Developer · Automatic Defect Classification</h3>

                <p>Applied Materials · Bangalore, India</p>
              </div>

              <strong>03/2010 – 10/2011</strong>
            </div>

            <p className="resume-job-summary">
              <ul>
                <li>
                  Java software development for semiconductor wafer inspection
                  and automatic defect-classification systems.
                </li>
                <li>
                  Java development with Oracle / MSSQL-backed semiconductor
                  software.
                </li>
              </ul>
            </p>
          </div>

          <div className="resume-job">
            <div className="resume-job-heading">
              <div>
                <h3>Trainee Software Engineer</h3>

                <p>Cisco · India</p>
              </div>

              <strong>07/2008 – 07/2009</strong>
            </div>

            <p className="resume-job-summary">
              <ul>
                <li>
                  Java development for device-management functionality within
                  Cisco WAAS Manager.
                </li>
              </ul>
            </p>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}
        <section className="resume-section">
          <h2>Selected Projects</h2>

          <div className="resume-projects">
            <div>
              <strong>Client Commerce Platforms</strong>
              <span>
                Lucky&apos;s Collection + A Home Cook · Web + Android · AI ·
                Supabase · Firebase · caching
              </span>
            </div>

            <div>
              <strong>Bhajans</strong>
              <span>
                Multilingual devotional lyrics platform for my spiritual
                community · Web + Android
              </span>
            </div>

            <div>
              <strong>Travel Planner</strong>
              <span>
                Trip planning, itineraries, interactive maps and travel
                visualization
              </span>
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ===================================================== */}
        <section className="resume-section">
          <h2>Education</h2>

          <div className="resume-education">
            <div>
              <strong>Bachelor of Engineering in Computer Science</strong>

              <span>
                BNM Institute of Technology · Visvesvaraya Technological
                University · India
              </span>

              <span>
                <strong>Graduated with Distinction</strong> · Ranked among the
                top 3 in the state
              </span>

              <span>
                <strong>Prior education:</strong> 12 years of school education in India (10 years
                primary/secondary + 2 years higher secondary / pre-university)
              </span>
            </div>

            <strong>2005 – 2009</strong>
          </div>
        </section>

        {/* =====================================================
            LANGUAGES
        ===================================================== */}
        <section className="resume-section resume-languages">
          <h2>Languages</h2>

          <p>
            <strong>English:</strong> Fluent &nbsp; · &nbsp;
            <strong>German:</strong> B1 Certified &nbsp; · &nbsp;
            <strong>Kannada:</strong> Native &nbsp; · &nbsp; 
            <strong>Hindi:</strong> Fluent &nbsp; · &nbsp;
            <strong>Telugu:</strong> Fluent &nbsp; · &nbsp;
            <strong>Sanskrit:</strong> Fluent            
          </p>
        </section>
      </article>
    </main>
  );
}
