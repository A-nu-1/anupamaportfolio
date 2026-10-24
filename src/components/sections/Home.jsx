import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "@/i18n/useLanguage";

import Anu from "../../assets/Anu.jpeg";

export const Home = () => {
  const { language, t } = useLanguage();

  const localizedPath = (path) =>
    language === "de" ? `${path}?lang=de` : path;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24"
    >
      {/* Very subtle background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-blue-700/5 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            {/* ==================================================
                TEXT
            ================================================== */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <Badge
                  variant="outline"
                  className="border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
                >
                  <Code2 className="mr-2 size-3.5 text-purple-400" />
                  {t.home.role}
                </Badge>
              </div>

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
                Java · Enterprise · Full-Stack · Mobile
              </p>

              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {t.home.greeting}{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Anupama.
                </span>
              </h1>

              <h2 className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-zinc-200 sm:text-3xl">
                {t.home.headline}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 lg:mx-0 lg:text-lg">
                {t.home.description}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  nativeButton={false}
                  render={<Link to={localizedPath("/projects")} />}
                  className="min-w-40 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-purple-950/20 transition-transform hover:-translate-y-0.5"
                >
                  {t.home.projects}
                  <ArrowRight className="ml-2 size-4" />
                </Button>

                <Button
                  size="lg"
                  nativeButton={false}
                  variant="outline"
                  render={<Link to={localizedPath("/experience")} />}
                  className="min-w-40 border-white/15 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.07] hover:text-white"
                >
                  {t.home.experience}
                </Button>
              </div>

              {/* Small engineering summary */}
              <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-zinc-500 lg:justify-start">
                {t.home.specialties.map((item, index) => (
                  <span key={item} className="contents">
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="hidden text-zinc-700 sm:inline"
                      >
                        /
                      </span>
                    )}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* ==================================================
                PORTRAIT
            ================================================== */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative">
                {/* Background halo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-8 rounded-full bg-purple-500/15 blur-3xl"
                />

                {/* Outer geometric gradient */}
                <div
                  className="relative h-[330px] w-[270px] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-[3px] sm:h-[390px] sm:w-[320px] lg:h-[440px] lg:w-[360px]"
                  style={{
                    clipPath:
                      "polygon(18% 0, 82% 0, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0 82%, 0 18%)",
                  }}
                >
                  {/* Dark gap inside the frame */}
                  <div
                    className="h-full w-full bg-zinc-950 p-[7px]"
                    style={{
                      clipPath:
                        "polygon(18% 0, 82% 0, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0 82%, 0 18%)",
                    }}
                  >
                    <img
                      src={Anu}
                      alt="Anupama Rajendra"
                      className="h-full w-full object-cover object-top"
                      style={{
                        clipPath:
                          "polygon(18% 0, 82% 0, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0 82%, 0 18%)",
                      }}
                    />
                  </div>
                </div>

                {/* Decorative corners */}
                <div
                  aria-hidden="true"
                  className="absolute -right-4 top-14 h-16 w-px bg-gradient-to-b from-purple-400 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="absolute -right-4 top-14 h-px w-16 bg-gradient-to-r from-purple-400 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 left-14 h-16 w-px bg-gradient-to-t from-blue-400 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 left-14 h-px w-16 bg-gradient-to-l from-blue-400 to-transparent"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
