import type { LegacyRef } from "react"
import type { propTypes } from "../types"
import { forwardRef } from "react"

const Screen = forwardRef(
  (
    { children, className, ...rest }: propTypes,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) => {
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
