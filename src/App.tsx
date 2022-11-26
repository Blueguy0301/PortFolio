import { lazy, Suspense } from "react"
import Hero from "./components/Screens/Hero"
import { useState } from "react"
import { LazyMotion, m } from "framer-motion"
import type { Variants } from "framer-motion"
import "./css/burger.css"
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
const AboutMe = lazy(() => {
  return import("./components/Screens/AboutMe")
})
const Technologies = lazy(() => {
  return import("./components/Screens/Technologies")
})
const Certs = lazy(() => {
  return import("./components/Screens/Certs")
})
const Projects = lazy(() => {
  return import("./components/Screens/Projects")
})
const loadFeatures = async () => {
  const temp: any = import("./features").then((res: any) => res.default)
  return temp
}

function App() {
  const [active, setActive] = useState("")
  const [visible, setVisible] = useState(false)
  const onClickHandle = () => setVisible(false)

  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.div
          variants={menuVariant}
          animate={visible ? "visible" : "hidden"}
          className="fixed bottom-10 z-50 flex w-full flex-wrap items-center justify-evenly gap-3 px-3"
          initial="hidden"
          transition={{ delayChildren: 3 }}
        >
          <m.a
            onClick={onClickHandle}
            variants={anchorVariant}
            custom={1}
            type="button"
            className={`button-small ${
              active === "Hero" && "active"
            } flex-grow text-center`}
            href="#heroText"
          >
            Home
          </m.a>
          <m.a
            onClick={onClickHandle}
            variants={anchorVariant}
            custom={2}
            href="#aboutMe"
            type="button"
            className={`button-small ${
              active === "AboutMe" && "active"
            } flex-grow text-center`}
          >
            About Me
          </m.a>
          <m.a
            onClick={onClickHandle}
            variants={anchorVariant}
            custom={3}
            href="#projects"
            type="button"
            className={`button-small ${
              active === "Projects" && "active"
            } flex-grow text-center`}
          >
            Projects
          </m.a>
          <m.a
            onClick={onClickHandle}
            variants={anchorVariant}
            custom={4}
            href="#techs"
            type="button"
            className={`button-small ${
              active === "Technologies" && "active"
            } flex-grow text-center`}
          >
            Technologies
          </m.a>
          <m.a
            onClick={onClickHandle}
            variants={anchorVariant}
            custom={5}
            href="#certificates"
            type="button"
            className={`button-small ${
              active === "Certificates" && "active"
            } flex-grow text-center `}
          >
            Certificates
          </m.a>
        </m.div>
      </LazyMotion>

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
      <Hero setActive={setActive} />
      <Suspense fallback={<>isLoading...</>}>
        <AboutMe setActive={setActive} />
        <Projects setActive={setActive} />
        <Technologies setActive={setActive} />
        <Certs setActive={setActive} />
      </Suspense>
    </>
  )
}

export default App
