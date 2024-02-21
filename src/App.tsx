import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/navbar/navbar"
import SectionContext from "./context/SectionContext";
import Home from "./sections/home/home";
import About from "./sections/about/about";
import Works from "./sections/works";
import Skills from "./sections/skills";
import Services from "./sections/services";
import GlobalIntersectionObserverContext from "./context/GlobalIntersectionObserverContext";
import { sectionToLabel } from "./utils";

export default function App() {

  const [activeSection, setActiveSection] = useState("");

  const sectionContext = useMemo(() => [activeSection, (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }] as const, [activeSection, setActiveSection]);
  const observer = useMemo(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.75, 1.0]
    }
    function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }
    return new IntersectionObserver(callback, options);
  }, []);

  useEffect(() => {
    let title = "Sanjay S - Portfolio";
    if (activeSection) {
      title = `${title} | ${sectionToLabel(activeSection)}`;
    }
    document.title = title;
  }, [activeSection]);

  return (
    <GlobalIntersectionObserverContext.Provider value={observer}>
      <SectionContext.Provider value={sectionContext}>
        <Navbar />
        <main>
          <Home />
          <About />
          <Works />
          <Skills />
          <Services />
        </main>
      </SectionContext.Provider>
    </GlobalIntersectionObserverContext.Provider>
  );
}
