import React from "react"
import Screen from "./Screen"
type props = {
  children: React.ReactNode
  className?: string
  title: string
  img?: string
}
const Text = (props: props) => {
  return (
    <Screen className="flex flex-row p-3 lg:!flex-nowrap">
      <div className="flex items-center justify-center min-w-[50%] flex-col p-3 ">
        <h3 className="text-center text-5xl py-3">{props.title}</h3>
        {props.img && <img src={props.img} className=" max-h-full" />}
      </div>
      <span className="flex flex-row flex-wrap break-words text-justify items-center justify-center text-xl px-3 max-w-full md:!max-w-[50%] overflow-auto">
        {props.children}
      </span>
    </Screen>
  )
}

export default Text
