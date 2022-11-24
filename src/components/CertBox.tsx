import { useEffect, useMemo } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
const squareVariants = {
  visible: (delay: number) => {
    return {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: delay * 0.1 },
    }
  },
  hidden: { opacity: 0, scale: 0 },
}

const CertBox = ({ value, pos }: { value: string; pos: number }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    rootMargin: "0px",
    threshold: 0.2,
  })
  useMemo(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [inView])
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={squareVariants}
      animate={controls}
      custom={pos}
      className=""
    >
      <p className="text-blue-700 p-10 bg-white m-5">{value}</p>
    </motion.div>
  )
}

export default CertBox
