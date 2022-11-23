import type { ReactElement } from "react"
type propTypes = {
  children: ReactElement
  className?: string
  ref?: any
}
const Screen = (props: propTypes) => {
  return (
    <div className={`screen  flex flex-wrap ${props?.className ?? ""} `}>
      {props.children}
    </div>
  )
}

export default Screen
