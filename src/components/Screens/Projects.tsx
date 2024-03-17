import type { screenProps } from "../../types"
import { useCallback, useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper"
import Screen from "../Screen"
import SideBar from "../SideBar"
import { Projects as projectsMade } from "../Data"
import { useInView } from "react-intersection-observer"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import useObserver from "../useObserver"

const SwiperData = {
  spaceBetween: 50,
  className: "swiper-projects md:max-w-full",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
}

const Projects = ({ setActive }: screenProps) => {
  const [open, setOpen] = useState(false)
  const [projectData, setProjectData] = useState({})
  const handleOnclick = useCallback((data: object) => {
    return () => {
      setOpen(!open)
      setProjectData(data)
    }
  }, [])
  const { ref } = useObserver({ setActive }, "Projects")
  return (
    <Screen className="relative projects" id="projects" ref={ref}>
      <div className="flex flex-col justify-center flex-grow ">
        <h1 className="w-full">
          <span className="p-3 ">Projects</span>
        </h1>
        <SideBar open={open} setOpen={setOpen} data={projectData} />
        <div className="flex-grow flex justify-center mt-auto">
          <Swiper {...SwiperData}>
            {projectsMade.map((project) => {
              return (
                <SwiperSlide className="relative " key={project.title}>
                  <img
                    src={project.image}
                    alt="screenshot of the project"
                    className="image"
                    width={1366}
                    height={768}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 w-[100%] h-1/4   bg-black/75 p-3 md:h-1/4">
                    <div className="text">
                      <h2 className="text-blue-600 text-3xl">
                        {project.title}
                      </h2>

                      <p className="text-base text-white line-clamp-1">
                        {project.shortDesc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleOnclick(project)}
                      className="bg-blue-800  text-white p-3 rounded-xl absolute bottom-2 right-3 button"
                    >
                      Learn More
                    </button>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </Screen>
  )
}

export default Projects
