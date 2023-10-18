import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { screenProps } from "../types"
const useObserver = ({ setActive }: screenProps, name: string) => {
  const { ref, inView } = useInView({
    rootMargin: "0px",
    threshold: 0.2,
  })
  useEffect(() => {
    if (inView) {
      setActive(name)
      // set scroll of id to 0
      const element = document.getElementById(name)
      // set elemet scroll postion to 0
      element?.scrollTo(0, 0)
      console.log("set scroll of id to 0")
    }
    return () => {}
  }, [inView])
  return { ref, inView }
}

export default useObserver
