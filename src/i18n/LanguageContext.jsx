import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { LanguageContext } from "./language-context";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact",
    },
    home: {
      role: "Software Engineer",
      greeting: "Hi, I'm",
      headline: "I build software that solves real-world problems.",
      description:
        "Software engineer with a background in Java and enterprise systems, now building modern web and mobile products from idea to deployment.",
      projects: "View Projects",
      experience: "My Experience",
      specialties: [
        "Java & Enterprise Systems",
        "Web & Mobile",
        "Automation & Integration",
      ],
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      experience: "Berufserfahrung",
      projects: "Projekte",
      resume: "Lebenslauf",
      contact: "Kontakt",
    },
    home: {
      role: "Softwareentwicklerin",
      greeting: "Hallo, ich bin",
      headline: "Ich entwickle Software, die echte Probleme löst.",
      description:
        "Softwareentwicklerin mit Erfahrung in Java und Enterprise-Systemen. Heute entwickle ich moderne Web- und Mobilanwendungen – von der Idee bis zur Bereitstellung.",
      projects: "Projekte ansehen",
      experience: "Meine Berufserfahrung",
      specialties: [
        "Java & Enterprise-Systeme",
        "Web- & Mobilentwicklung",
        "Automatisierung & Integration",
      ],
    },
  },
};

export function LanguageProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const language = searchParams.get("lang") === "de" ? "de" : "en";

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage) => {
    setSearchParams(
      (previous) => {
        const next = new URLSearchParams(previous);

        if (nextLanguage === "de") {
          next.set("lang", "de");
        } else {
          next.delete("lang");
        }

        return next;
      },
      { replace: true },
    );
  };

  const t = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
