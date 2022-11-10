import Screen from "./Screen"
import { useEffect, useMemo, useState } from "react"
import { useInView } from "react-intersection-observer"
import "../css/animations.css"
import Facebook from "./svgs/Facebook"
import Telegram from "./svgs/Telegram"
import Mail from "./svgs/Mail"
import Github from "./svgs/Github"
const AboutMe = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: "0px",
    threshold: 0.3,
  })
  const [show, setShow] = useState("")

  useEffect(() => {
    if (inView) {
      console.log("in view")
      setShow("show")
    } else {
      console.log("not in view")
      setShow("")
    }
  }, [inView])
  return (
    <div
      className="block"
      ref={ref}
      data-aos="zoom-out"
      data-aos-easing="ease-in-sine"
    >
      <Screen className="relative flex-col">
        <>
          <svg
            id="visual-svg"
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g id="circles">
              <circle
                className={`circle ${inView ? "show" : "hide"}`}
                r="145"
                cx="42"
                cy="480"
              />
              <circle
                className={`circle ${inView ? "show" : "hide"}`}
                r="122"
                cx="800"
                cy="542"
              />
              <circle
                className={`circle ${inView ? "show" : "hide"}`}
                r="119"
                cx="866"
                cy="142"
              />
              <circle
                className={`circle ${inView ? "show" : "hide"}`}
                r="132"
                cx="24"
                cy="115"
              />
              <circle
                className={`circle ${inView ? "show" : "hide"}`}
                r="123"
                cx="537"
                cy="183"
              />
            </g>
          </svg>
          <div className="group-left ">
            <h1 className="text-6xl text-center  text-blue-700">
              About Robert
            </h1>
          </div>
          <div className="group-right flex-grow">picture here</div>
          <div className=" bottom w-screen ">
            <h3 className="text-blue-800 text-2xl text-center"> Socials</h3>
            <div className="flex flex-wrap items-center justify-evenly flex-row  gap-3">
              <div className="grow flex justify-evenly items-center">
                <Telegram />
                <Facebook />
                <Mail />
                <Github />
              </div>
            </div>
          </div>
        </>
      </Screen>
    </div>
  )
}

export default AboutMe
