import Screen from "../Screen"

import Facebook from "../svgs/Facebook"
import Telegram from "../svgs/Telegram"
import Mail from "../svgs/Mail"
import Github from "../svgs/Github"
import "../../css/animations.css"
import type { screenProps } from "../../types"
import useObserver from "../useObserver"
const AboutMe = ({ setActive }: screenProps) => {
  const { ref, inView } = useObserver({ setActive }, "AboutMe")
  return (
    <Screen
      className="relative w-full about bg-blue-500"
      id="aboutMe"
      ref={ref}
    >
      <>
        <div className="py-3 flex flex-wrap">
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
              href="/assets/resume.docx"
              download
            >
              Download Resume
            </a>
            <div className="bottom mt-20  flex flex-col justify-end flex-grow w-full ">
              <h3 className="">My Social Networks</h3>
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
      </>
    </Screen>
  )
}

export default AboutMe
