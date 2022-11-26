import { motion, AnimatePresence, Variants } from "framer-motion"

const backdrop: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
}

const Modal = ({
  showModal,
  link,
  setModal,
}: {
  showModal: boolean
  link: string
  setModal: any
}) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.button
          className="fixed h-screen w-full bg-black/75 z-[80] top-0"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          type="button"
          onClick={() => setModal(false)}
        >
          <motion.div
            className=" m-auto w-full h-full  flex flex-wrap items-center"
            variants={modal}
          >
            <img
              src={link}
              alt="certificate"
              className="max-h-full w-[75%] m-auto "
              loading="lazy"
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default Modal
