import { useEffect } from "react"
import Hero from "./components/Screens/Hero"
import AboutMe from "./components/Screens/AboutMe"
import Technologies from "./components/Screens/Technologies"
import AOS from "aos"
import Projects from "./components/Screens/Projects"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  // todo create a nav bar (horizontal)
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
    </>
  )
}

export default App
