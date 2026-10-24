import { useState } from "react";
import emailjs from "emailjs-com";

import {
  AlertCircle,
  CheckCircle2,
  Code2,
  LoaderCircle,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useLanguage } from "@/i18n/useLanguage";

const GITHUB_URL = "https://github.com/A-nu-1";
const CONTACT_EMAIL = "rajendra.anupama@gmail.com";

const MAGENWIL_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=M%C3%A4genwil%2C%20Aargau%2C%20Switzerland";

// =====================================================
// ENGLISH / GERMAN TRANSLATIONS
// =====================================================

const translations = {
  en: {
    label: "Get In Touch",
    heading: "Let's build something",
    highlight: "useful.",
    introduction:
      "I'm open to software engineering opportunities, freelance work and conversations around practical web, mobile and enterprise software.",

    availability: "Available for opportunities",
    locationHeading: "Based in Aargau.",
    locationDescription:
      "Open to flexible software engineering opportunities in Aargau, Zürich and surrounding areas.",

    location: "Location",
    locationValue: "Mägenwil, Aargau, Switzerland",
    email: "Email",

    authorization: "Work authorization",
    permit: "Switzerland · C Permit",

    form: {
      heading: "Send me a message",
      description:
        "Tell me a little about the opportunity, project or question.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell me what you would like to discuss...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully. Thank you for getting in touch.",
      error:
        "Something went wrong while sending your message. Please try again.",
    },
  },

  de: {
    label: "Kontakt",
    heading: "Ich freue mich auf",
    highlight: "Ihre Nachricht!",
    introduction:
      "Ich freue mich über berufliche Möglichkeiten in der Softwareentwicklung, freiberufliche Projekte und den Austausch über praktische Lösungen im Bereich Web-, Mobile- und Unternehmenssoftware.",

    availability: "Offen für neue berufliche Möglichkeiten",
    locationHeading: "Wohnhaft im Aargau.",
    locationDescription:
      "Ich interessiere mich für flexible Tätigkeiten in der Softwareentwicklung im Aargau, in Zürich und in der näheren Umgebung.",

    location: "Standort",
    locationValue: "Mägenwil, Aargau, Schweiz",
    email: "E-Mail",

    authorization: "Arbeitsbewilligung",
    permit: "Schweiz · Niederlassungsbewilligung C",

    form: {
      heading: "Schreiben Sie mir",
      description:
        "Erzählen Sie mir kurz von Ihrer Stelle, Ihrem Projekt oder Ihrer Frage.",
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      message: "Nachricht",
      messagePlaceholder: "Worüber möchten Sie mit mir sprechen?",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      success:
        "Ihre Nachricht wurde erfolgreich gesendet. Vielen Dank für Ihre Kontaktaufnahme.",
      error:
        "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    },
  },
};

// =====================================================
// CONTACT PAGE
// =====================================================

export default function ContactPage() {
  const { language } = useLanguage();
  const lang = language === "de" ? "de" : "en";
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  // Store status type rather than translated message,
  // so the displayed message switches with EN / DE.
  const [status, setStatus] = useState({
    type: "",
    detail: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.type) {
      setStatus({
        type: "",
        detail: "",
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (sending) return;

    const form = event.currentTarget;

    setSending(true);

    setStatus({
      type: "",
      detail: "",
    });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      console.log("Email sent successfully:", result);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setStatus({
        type: "success",
        detail: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        detail: error?.text || error?.message || "",
      });
    } finally {
      setSending(false);
    }
  }

  const statusMessage =
    status.type === "success"
      ? t.form.success
      : status.type === "error"
        ? t.form.error
        : "";

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-32 sm:px-8 lg:px-10">
        {/* INTRODUCTION */}
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
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
              {t.introduction}
            </p>
          </div>
        </RevealOnScroll>

        {/* CONTACT AREA */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <RevealOnScroll>
            <div className="space-y-5">
              <Card className="border-white/10 bg-zinc-950/60 shadow-none">
                <CardContent className="p-6">
                  <Badge
                    variant="outline"
                    className="mb-6 border-purple-400/30 bg-purple-400/10 text-purple-300"
                  >
                    {t.availability}
                  </Badge>

                  <h2 className="text-2xl font-semibold text-white">
                    {t.locationHeading}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {t.locationDescription}
                  </p>

                  <div className="mt-7 space-y-5">
                    {/* LOCATION */}
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                        <MapPin className="size-4 text-purple-400" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-white">
                          {t.location}
                        </p>

                        <a
                          href={MAGENWIL_MAP_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 inline-block text-sm text-zinc-500 transition-colors hover:text-purple-300"
                        >
                          {t.locationValue}
                        </a>
                      </div>
                    </div>

                    {/* GITHUB */}
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                        <Code2 className="size-4 text-purple-400" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-white">GitHub</p>

                        <a
                          href={GITHUB_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 inline-block text-sm text-zinc-500 transition-colors hover:text-purple-300"
                        >
                          github.com/A-nu-1
                        </a>
                      </div>
                    </div>

                    {/* EMAIL */}
                    {CONTACT_EMAIL !== "YOUR_PUBLIC_EMAIL" && (
                      <div className="flex gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                          <Mail className="size-4 text-purple-400" />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white">
                            {t.email}
                          </p>

                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="mt-1 inline-block break-all text-sm text-zinc-500 transition-colors hover:text-purple-300"
                          >
                            {CONTACT_EMAIL}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* WORK AUTHORIZATION */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  {t.authorization}
                </p>

                <p className="mt-3 text-sm font-medium text-zinc-300">
                  {t.permit}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* CONTACT FORM */}
          <RevealOnScroll>
            <Card className="border-white/10 bg-zinc-950/60 shadow-none">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-7">
                  <h2 className="text-2xl font-semibold text-white">
                    {t.form.heading}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {t.form.description}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      {t.form.name}
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder={t.form.namePlaceholder}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/50 focus:bg-white/[0.05]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      {t.form.email}
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/50 focus:bg-white/[0.05]"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      {t.form.message}
                    </label>

                    <textarea
                      rows={7}
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.form.messagePlaceholder}
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/50 focus:bg-white/[0.05]"
                    />
                  </div>

                  {/* STATUS MESSAGE */}
                  {statusMessage && (
                    <div
                      role="status"
                      className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${
                        status.type === "success"
                          ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                          : "border-red-400/20 bg-red-400/[0.06] text-red-300"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                      ) : (
                        <AlertCircle className="mt-0.5 size-4 shrink-0" />
                      )}

                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {sending ? (
                      <>
                        <LoaderCircle className="size-4 animate-spin" />
                        {t.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        {t.form.send}
                      </>
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
