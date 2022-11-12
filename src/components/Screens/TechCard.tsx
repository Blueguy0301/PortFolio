import { memo } from "react"
import { usePresence, motion } from "framer-motion"
type TechCardProps = {
  id: string
  stack: string
}
const TechCard = ({ id, stack }: TechCardProps) => {
  const [isPresent, safeToRemove] = usePresence()
  const animation = {
    layout: true,
    layoutId: id,
    initial: "out",
    animate: isPresent ? "in" : "out",
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { duration: 0.3, ease: "easeInOut" },
    variants: {
      in: { scale: 1, transition: { duration: 0.3 } },
      out: { scale: 0, transition: { duration: 0.3 } },
    },
  }
  return (
    <motion.div
      {...animation}
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card"
    >
      <>
        {/* <img
          src={`/assets/svg/${stack}`}
          className=""
          alt="Tech Pic"
          loading="lazy"
        /> */}
        <div className="p-5">
          <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {stack}
          </h5>
        </div>
      </>
    </motion.div>
  )
}

export default memo(TechCard)
