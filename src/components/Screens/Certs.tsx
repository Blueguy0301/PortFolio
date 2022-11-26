import Screen from "../Screen"
import { AnimatePresence } from "framer-motion"
import CertBox from "../CertBox"
import type { screenProps } from "../../types"
import useObserver from "../useObserver"
import { certificates } from "../Data"
import { useState } from "react"
import Modal from "../Modal"

const certs = ({ setActive }: screenProps) => {
  const { ref } = useObserver({ setActive }, "Certificates")
  const [open, setOpen] = useState(false)
  const [imagelink, setImageLink] = useState("")
  const onClickHandler = (link: string) => {
    console.log("clicked")
    setOpen(!open)
    setImageLink(link)
  }
  return (
    <Screen id="certificates" ref={ref}>
      <div className="py-3 flex flex-wrap">
        <h1>Certificates</h1>
        <div className="flex  gap-3 justify-evenly w-full flex-wrap p-5 ">
          <AnimatePresence>
            {certificates.map((value, i) => {
              return (
                <CertBox
                  value={value}
                  pos={i}
                  key={value.title}
                  onClick={() => onClickHandler(value.image)}
                />
              )
            })}
          </AnimatePresence>
          <Modal showModal={open} link={imagelink} setModal={setOpen} />
        </div>
      </div>
    </Screen>
  )
}

export default certs
