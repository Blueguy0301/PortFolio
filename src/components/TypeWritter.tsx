import { Cursor, useTypewriter } from "react-simple-typewriter"
import { Developers } from "./Data"
type writerTypes = {
  id?: string
}
const TypeWritter = ({ id, ...rest }: writerTypes) => {
  const [text]: any = useTypewriter({
    words: Developers,
    deleteSpeed: 50,
    loop: false,
    delaySpeed: 5000,
  })
  return (
    <h3 className="text-2xl sub-hero-text w-full text-center" id={id}>
      <span>{text}</span>
      <span>
        <Cursor cursorStyle="█" />
      </span>
    </h3>
  )
}

export default TypeWritter
