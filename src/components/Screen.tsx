import type { ReactElement } from "react"
type propTypes = {
  children: ReactElement
  className?: string
  ref?: any
}
const Screen = (props: propTypes) => {
  if (props.ref) {
    console.log("first")
    return (
      <div
        className={`h-screen flex flex-wrap ${props?.className ?? ""}`}
        ref={props.ref}
      >
        {props.children}
      </div>
    )
  } else {
    return (
      <div
        className={`screen min-h-screen flex flex-wrap ${
          props?.className ?? ""
        } `}
      >
        {props.children}
      </div>
    )
  }
}

export default Screen
