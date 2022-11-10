import {useEffect} from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Screen from "./components/Screen";
import AboutMe from "./components/AboutMe";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  // todo create a nav bar (horizontal)
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
