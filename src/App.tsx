import { useEffect, useRef } from "react"
import Hero from "./components/Screens/Hero"
import AboutMe from "./components/Screens/AboutMe"
import Technologies from "./components/Screens/Technologies"
import Certs from "./components/Screens/Certs"
import Projects from "./components/Screens/Projects"
import { useState } from "react"
import { motion, Variant, Variants } from "framer-motion"
import "./css/burger.css"
// const handleScroll = () => window.scrollTo({ behavior: "smooth", top: 0 })
const menuVariant: Variants | undefined = {
  visible: {
    transition: {
      staggerChildren: 3,
      delayChildren: 3,
    },
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}
const anchorVariant: Variants | undefined = {
  visible: (n: number) => {
    return {
      opacity: 1,
      transition: {
        delay: n * 0.1,
        when: "beforeChildren",
      },
      visibility: "visible",
    }
  },
  hidden: {
    visibility: "hidden",
    opacity: 0,
  },
}
function App() {
  const [active, setActive] = useState("")
  const [visible, setVisible] = useState(false)
  const prev = useRef<string>()

  useEffect(() => {
    prev.current = active
  }, [active])
  // todo: change the nav bar divto motion.div to animate
  return (
    <>
      <motion.div
        variants={menuVariant}
        animate={visible ? "visible" : "hidden"}
        className="fixed bottom-10 z-50 flex w-full flex-wrap items-center justify-evenly gap-3 px-3"
        initial="hidden"
        transition={{ delayChildren: 3 }}
      >
        <motion.a
          variants={anchorVariant}
          custom={1}
          type="button"
          className={`button-small ${
            active === "Hero" && "active"
          } flex-grow text-center`}
          href="#heroText"
        >
          Home
        </motion.a>
        <motion.a
          variants={anchorVariant}
          custom={2}
          href="#aboutMe"
          type="button"
          className={`button-small ${
            active === "AboutMe" && "active"
          } flex-grow text-center`}
        >
          About Me
        </motion.a>
        <motion.a
          variants={anchorVariant}
          custom={3}
          href="#projects"
          type="button"
          className={`button-small ${
            active === "Projects" && "active"
          } flex-grow text-center`}
        >
          Projects
        </motion.a>
        <motion.a
          variants={anchorVariant}
          custom={4}
          href="#techs"
          type="button"
          className={`button-small ${
            active === "Technologies" && "active"
          } flex-grow text-center`}
        >
          Technologies
        </motion.a>
        <motion.a
          variants={anchorVariant}
          custom={5}
          href="#certificates"
          type="button"
          className={`button-small ${
            active === "Certificates" && "active"
          } flex-grow text-center `}
        >
          Certificates
        </motion.a>
      </motion.div>
      <Hero setActive={setActive} />
      <AboutMe setActive={setActive} />
      <Projects setActive={setActive} />
      <Technologies setActive={setActive} />
      <Certs setActive={setActive} />
      <button
        type="button"
        className=" fixed top-1 right-1 z-50 "
        onClick={() => {
          setVisible(!visible)
        }}
      >
        <div id="nav-icon1" className={visible ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </>
  )
}

export default App
