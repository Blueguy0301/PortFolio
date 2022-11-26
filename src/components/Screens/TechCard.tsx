import { memo } from "react"
import { usePresence, motion } from "framer-motion"
import type { TechCardProps } from "../../types"

const TechCard = ({ stack }: TechCardProps) => {
  const [isPresent, safeToRemove] = usePresence()
  const animation = {
    layout: true,
    layoutId: stack,
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
      className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card"
    >
      <>
        <img
          src={`/assets/stacks/${stack}.svg`}
          className="m-auto"
          alt="Tech Pic"
        />
        <div className="p-5">
          <h5 className="text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
            {stack}
          </h5>
        </div>
      </>
    </motion.div>
  )
}

export default memo(TechCard)
