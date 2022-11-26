import { useEffect, useState } from "react"
import type { loadingProps } from "../types"

const LoadingScreen = ({ isLoading }: loadingProps) => {
  return (
    <div className="fixed z-[100] top-0 h-screen w-full bg-black/75">
      <div className="lds-ellipsis ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingScreen
