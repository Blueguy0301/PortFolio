import { useCallback, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Screen from "./Screen"
import SideBar from "./SideBar"
import { Projects as projectsMade } from "./Data"
import "swiper/css"
type data = {}
const SwiperData = {
  spaceBetween: 50,
  className: "swiper-projects",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
}
const Projects = () => {
  const [open, setOpen] = useState(false)
  const [projectData, setProjectData] = useState({})
  const handleOnclick = useCallback((data: data) => {
    return () => {
      setOpen(!open)
      setProjectData(data)
    }
  }, [])
  return (
    <div data-aos="fade-right">
      <Screen className="relative projects">
        <>
          <h1 className="text-6xl text-center  text-blue-700  w-screen flex-shrink relative z-10">
            Projects
          </h1>
          <SideBar open={open} setOpen={setOpen} data={projectData} />

          <div className="flex-grow max-height-[100%]">
            <Swiper {...SwiperData}>
              {projectsMade.map((project) => {
                // console.log(project)
                return (
                  <SwiperSlide className={` relative`}>
                    <img
                      src={project.image}
                      alt="screenshot of the project"
                      className="image"
                    />
                    <div className="absolute bottom-0 w-[100%] h-1/4  bg-black/75 p-3">
                      <h2 className="text-blue-600 text-3xl">
                        {project.title}
                      </h2>

                      <p className="text-lg text-white">{project.shortDesc}</p>
                      <button type="button" onClick={handleOnclick(project)}>
                        open sidebar
                      </button>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </>
      </Screen>
    </div>
  )
}

export default Projects
