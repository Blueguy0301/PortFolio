import type { propTypes, screenRef } from "../types"
import { forwardRef } from "react"

const Screen = forwardRef(
  ({ children, className, ...rest }: propTypes, ref: screenRef) => {
    return (
      <div
        className={`screen  flex flex-wrap ${className ?? ""} `}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Screen
