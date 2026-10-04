import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";

import { Home } from "./components/sections/Home";
import { HomeOverview } from "./components/sections/HomeOverview";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ClientCommercePage from "./pages/ClientCommercePage";
import BhajansProjectPage from "./pages/BhajansProjectPage";

function HomePage() {
  return (
    <>
      <Home />
      <HomeOverview />
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div
        className={`min-h-screen bg-black text-zinc-100 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/experience" element={<ExperiencePage />} />

          <Route path="/projects" element={<ProjectsPage />} />

          <Route
            path="/projects/client-commerce"
            element={<ClientCommercePage />}
          />

          <Route path="/projects/bhajans" element={<BhajansProjectPage />} />

          <Route path="/resume" element={<ResumePage />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
