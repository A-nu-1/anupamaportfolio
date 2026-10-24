
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useLanguage } from "@/i18n/useLanguage";

const navItems = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "experience", to: "/experience" },
  { key: "projects", to: "/projects" },
  { key: "resume", to: "/resume" },
  { key: "contact", to: "/contact" },
];

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
      {["en", "de"].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
            language === lang
              ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export const Navbar = () => {
  const { language,  t } = useLanguage();

  const localizedPath = (path) =>
    language === "de" ? `${path}?lang=de` : path;

 

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to={localizedPath("/")}
          className="group flex flex-col"
        >
          <div className="font-mono text-lg font-bold tracking-tight text-white sm:text-xl">
            anupama
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-sm text-transparent">
              .likesCoding
            </span>
          </div>

          <div className="mt-1 h-px w-full overflow-hidden bg-white/10">
            <div className="h-full w-2/5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={localizedPath(item.to)}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "relative text-sm font-medium transition-colors",
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {t.nav[item.key]}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <LanguageToggle />
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation"
                  className="text-zinc-200 hover:bg-white/10 hover:text-white"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-white/10 bg-zinc-950 text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-left font-mono text-white">
                  anupama
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    .likesCoding
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 px-4 pt-6">
                <div className="mb-4 flex justify-center">
                  <LanguageToggle />
                </div>

                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={localizedPath(item.to)}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      [
                        "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white",
                      ].join(" ")
                    }
                  >
                    {t.nav[item.key]}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
