import Screen from "../Screen"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Facebook from "../svgs/Facebook"
import Telegram from "../svgs/Telegram"
import Mail from "../svgs/Mail"
import Github from "../svgs/Github"
import "../../css/animations.css"
const AboutMe = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: "0px",
    threshold: 0.3,
  })
  const [show, setShow] = useState("")

  useEffect(() => {
    if (inView) {
      // console.log("in view")
      setShow("show")
    } else {
      // console.log("not in view")
      setShow("")
    }
  }, [inView])
  return (
    <div ref={ref} data-aos="zoom-out" data-aos-easing="ease-in-sine">
      <Screen className="relative flex-row">
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
          <div className="w-screen ">
            <h1 className="text-6xl text-center  text-blue-700">
              About Robert
            </h1>
          </div>
          <div className="w-1/2 p-5 flex-grow">
            <img
              src="/assets/Untitled.png"
              alt=""
              width="300"
              height="300"
              className="m-auto "
            />
            <div className="bottom mt-20  flex flex-col justify-end">
              <h3>My Social Networks</h3>
              <div className="flex flex-wrap items-center justify-evenly flex-row  gap-3">
                <div className="grow flex justify-evenly items-center">
                  <Telegram />
                  <Facebook />
                  <Mail />
                  <Github />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow w-1/2 px-5  basis-96">
            <div className="flex-grow">
              <p className="text-justify bg-blue-700 text-white p-5 rounded-3xl mb-10 ">
                I am 20 years old and a developer from The Philippines. I am a
                self taught programmer for over 2 years. I am a full stack web
                developer. Outside the screen, I am curious person that likes to
                know how things work. I am also fond of reading and exploring
                the things I am not familliar with.
              </p>
              <div className="bg-blue-700 text-white p-5 rounded-3xl ">
                <h3 className="text-left text-white"> My hobbies are...</h3>
                <ul className="list-decimal ml-10">
                  <li className="mt-3">Manga/Anime</li>
                  <li className="mt-3">Light Novel</li>
                  <li className="mt-3">Gaming</li>
                  <li className="mt-3">Books</li>
                  <li className="mt-3">Programming</li>
                </ul>
              </div>
            </div>
            <a
              className="button-small mt-5 inline-block"
              href="/assets/resume.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </>
      </Screen>
    </div>
  )
}

export default AboutMe
