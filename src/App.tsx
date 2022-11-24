import { useEffect, useRef } from "react"
import Hero from "./components/Screens/Hero"
import AboutMe from "./components/Screens/AboutMe"
import Technologies from "./components/Screens/Technologies"
import Certs from "./components/Screens/Certs"
import AOS from "aos"
import Projects from "./components/Screens/Projects"
import "aos/dist/aos.css"
import { useState } from "react"
const handleScroll = () => window.scrollTo({ behavior: "smooth", top: 0 })

function App() {
  const [active, setActive] = useState("")
  const [visible, setVisible] = useState(false)
  const prev = useRef<string>()

  useEffect(() => {
    AOS.init()
  }, [])
  useEffect(() => {
    prev.current = active
  }, [active])
  // todo create a nav bar (horizontal)
  return (
    <>
      <div
        className={`fixed bottom-10 flex items-center z-50 w-screen justify-evenly  ${
          !visible ? "invisible" : "visible"
        }`}
      >
        <a
          type="button"
          className={`bg-blue-700 p-5 text-white ${
            active === "Hero" && "active"
          }`}
          href="#heroText"
        >
          Home
        </a>
        <a
          href="#aboutMe"
          type="button"
          className={`bg-blue-700 p-5 text-white ${
            active === "AboutMe" && "active"
          }`}
        >
          About Me
        </a>
        <a
          href="#projects"
          type="button"
          className={`bg-blue-700 p-5 text-white ${
            active === "Projects" && "active"
          }`}
        >
          Projects
        </a>
        <a
          href="#techs"
          type="button"
          className={`bg-blue-700 p-5 text-white ${
            active === "Technologies" && "active"
          }`}
        >
          Technologies
        </a>
        <a
          href="#certificates"
          type="button"
          className={`bg-blue-700 p-5 text-white ${
            active === "Certificates" && "active"
          }`}
        >
          Certificates
        </a>
      </div>
      <Hero setActive={setActive} />
      <AboutMe setActive={setActive} />
      <Projects setActive={setActive} />
      <Technologies setActive={setActive} />
      <Certs setActive={setActive} />

      <button
        type="button"
        className=" fixed top-0 right-10 z-50"
        onClick={handleScroll}
      >
        scroll to top
      </button>
      <button
        type="button"
        className=" fixed top-0 left-10 z-50"
        onClick={() => setVisible((prev) => !prev)}
      >
        menu
      </button>
    </>
  )
}

export default App
