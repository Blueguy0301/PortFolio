import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { certs } from "../types"
const squareVariants = {
  visible: (delay: number) => {
    return {
      opacity: 1,

      transition: { duration: 0.5, delay: delay * 0.5 },
    }
  },
  hidden: { opacity: 0 },
}
const CertBox = ({
  value,
  pos,
  onClick,
}: {
  value: certs
  pos: number
  onClick: Function
}) => {
  const { ref, inView } = useInView({
    rootMargin: "0px",
    threshold: 0.2,
  })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={squareVariants}
      animate={inView ? "visible" : "hidden"}
      custom={pos}
      className=" p-10 bg-white  flex flex-col flex-grow justify-center basis-96"
    >
      <button type="button" onClick={(e) => onClick()} className="flex-grow ">
        <img
          src={value.image}
          alt=""
          width="100%"
          height="100%"
          className=" m-auto h-full w-full"
          loading="lazy"
        />
      </button>
      <p className="text-blue-700 text-center p-3">{value.title}</p>
    </motion.div>
  )
}

export default CertBox
