import { useEffect, lazy, Suspense } from "react"
import { useState } from "react"
import { LazyMotion, m, AnimatePresence } from "framer-motion"
import LoadingScreen from "./components/LoadingScreen"
import "./css/burger.css"
import type { Variants } from "framer-motion"
import Hero from "./components/Screens/Hero"
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
const loadFeatures = () => {
  const temp: any = import("./features").then((res: any) => res.default)
  return temp
}
const AboutMe = lazy(async () => import("./components/Screens/AboutMe"))
const Technologies = lazy(() => import("./components/Screens/Technologies"))
const Projects = lazy(() => import("./components/Screens/Projects"))
const Certs = lazy(() => import("./components/Screens/Certs"))

function App() {
  const [active, setActive] = useState("")
  const [visible, setVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const onClickHandle = () => setVisible(false)
  return (
    <>
      <LazyMotion features={loadFeatures} strict>
        <AnimatePresence>
          {visible && (
            <m.div
              key="modal"
              variants={menuVariant}
              animate={visible ? "visible" : "hidden"}
              className="fixed bottom-5 z-50 flex w-full flex-wrap items-center justify-evenly gap-3 p-5 bg-blue-800"
              initial="hidden"
              transition={{ delayChildren: 3 }}
              exit="hidden"
            >
              <h3 className="text-white w-full">Navigation</h3>
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
          )}
        </AnimatePresence>
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
      <Suspense fallback={<LoadingScreen isLoading={isLoading} />}>
        <AboutMe setActive={setActive} />
        <Projects setActive={setActive} />
        <Technologies setActive={setActive} />
        <Certs setActive={setActive} />
      </Suspense>
    </>
  )
}

export default App
