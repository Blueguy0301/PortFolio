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
    }
    return () => {}
  }, [inView])
  return { ref, inView }
}

export default useObserver
