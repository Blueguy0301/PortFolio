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
          <h1 className="text-6xl text-center  text-blue-700  w-screen flex-shrink">
            Projects
          </h1>
          <SideBar open={open} setOpen={setOpen} data={projectData} />

          <div className="flex-grow">
            <Swiper {...SwiperData}>
              {projectsMade.map((project) => {
                // console.log(project)
                return (
                  <SwiperSlide className="border-solid border border-sky-500">
                    <div>
                      <h2>{project.title}</h2>
                      <p>{project.shortDesc}</p>
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
