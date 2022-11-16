import Screen from "../Screen"
import { motion, LayoutGroup, AnimatePresence } from "framer-motion"
import { useState, useCallback } from "react"
import TechCard from "./TechCard"
import { all } from "../Data"
const container = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}
const buttons = [
  "All",
  "Front End",
  "Back End",
  "UI",
  "Version Control",
  "DevOps",
  "Database",
]
type techStack = { stack: string; skillType: string }

const isSelected = "isSelected"

const Technologies = () => {
  const [selected, setSelected] = useState("All")
  const [items, setItems] = useState<techStack[]>(all)
  const setTypeSkills = useCallback((typeSelected: string) => {
    return () => {
      setSelected(typeSelected)
      if (typeSelected === "All") {
        setItems(all)
      } else {
        setItems(items.filter((skill) => skill.skillType === typeSelected))
      }
    }
  }, [])

  return (
    <Screen className="flex-col relative">
      <>
        <h1 className="tech leading-loose">Techonologies</h1>
        <div className="btn-group">
          {buttons.map((buttonName) => (
            <button
              type="button"
              key={buttonName}
              onClick={setTypeSkills(buttonName)}
              className={`button-small button ${
                selected === buttonName ? isSelected : ""
              }`}
            >
              {buttonName}
            </button>
          ))}
        </div>
        <div className="tech-container">
          <motion.div
            className="technologies"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <LayoutGroup>
              <AnimatePresence>
                {items.map((item) => (
                  <TechCard stack={item.stack} key={item.stack} />
                ))}
              </AnimatePresence>
            </LayoutGroup>
          </motion.div>
        </div>
      </>
    </Screen>
  )
}

export default Technologies
