import Screen from "../Screen"

import Facebook from "../svgs/Facebook"
import Telegram from "../svgs/Telegram"
import Mail from "../svgs/Mail"
import Github from "../svgs/Github"
import "../../css/animations.css"
import type { screenProps } from "../../types"
import useObserver from "../useObserver"
import { useEffect } from "react"
const AboutMe = ({ setActive }: screenProps) => {
  const { ref } = useObserver({ setActive }, "AboutMe")

  useEffect(() => {
    //create function that will check if the element is in the viewport
    const checkIfInViewPort = () => {
      const element = document.getElementById("AboutMe")
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInViewPort =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        if (isInViewPort) {
          // set the id with top bottom left right to animate
          const top = document.getElementById("top")
          const bottom = document.getElementById("bottom")
          const left = document.getElementById("left")
          const right = document.getElementById("right")
          if (top && bottom && left && right) {
            top.classList.add("top")
            bottom.classList.add("bottom")
            left.classList.add("left")
            right.classList.add("right")
          }
        }
      }
    }
  }, [])
  return (
    <Screen
      className="relative w-full about bg-blue-500"
      id="AboutMe"
      ref={ref}
    >
      <div className="py-3 flex flex-wrap w-full">
        <h1 className="w-full">About Me</h1>
        <div className="w-1/2 text-center flex-grow ">
          <img
            src="/assets/Profile.png"
            alt=""
            width="300"
            height="300"
            className="m-auto "
            loading="lazy"
          />
          <a
            className="button-small mt-5 inline-block "
            href="/assets/Resume (2).pdf"
            download
          >
            Download Resume
          </a>
          <div className="bottom mt-20  flex flex-col justify-end flex-grow w-full ">
            <h3 className="">Socials</h3>
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
        <div className="flex-grow min-w-1/2 px-5  basis-96 ">
          <div className="flex-grow ">
            <div className="relative h-80">
              <img
                src="/assets/iceCream/Caramel.png"
                alt=""
                className="absolute move"
                id="top"
              />
              <img
                src="/assets/iceCream/Cone.png"
                alt=""
                id="bottom"
                className="absolute move"
              />
              <img
                src="/assets/iceCream/Sprinkles.png"
                alt=""
                className="absolute move"
                id="left"
              />
              <img
                src="/assets/iceCream/Vanilla.png"
                alt=""
                id="right"
                className="absolute move"
              />
            </div>

            <div className="bg-blue-700 text-white p-5 rounded-3xl ">
              <h3 className="text-left text-white"> My hobbies are...</h3>
              <ul className="list-decimal ml-10">
                {/* loop this in the future */}
                <li className="mt-3">Watching Manga/Anime</li>
                <li className="mt-3">Reading</li>
                <li className="mt-3">Tinkering</li>
                <li className="mt-3">Gaming</li>
                <li className="mt-3">Programming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  )
}

export default AboutMe
