import type { LegacyRef, ReactElement } from "react"
import { forwardRef } from "react"
type propTypes = {
  children: ReactElement
  className?: string
  [x: string]: any
}

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
