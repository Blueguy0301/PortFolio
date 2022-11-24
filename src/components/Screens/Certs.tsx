import React from "react"
import Screen from "../Screen"
import { AnimatePresence, motion, Variants } from "framer-motion"
import CertBox from "../CertBox"
import type { screenProps } from "../../types"
import useObserver from "./useObserver"
//stagger children : meaning bago mag animate sa next, kailangan matapos si nth postiion
const certs = ({ setActive }: screenProps) => {
  const childVariant: Variants | undefined = {
    hidden: {
      opacity: 0,
    },
    visible: (i) => {
      return {
        opacity: 1,
        transition: {
          staggerChildren: 5.5,
          delay: i * 0.5,
        },
      }
    },
    exit: {},
  }
  const { ref } = useObserver({ setActive }, "Certificates")
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Screen id="certificates" ref={ref}>
      <>
        <h1>certs</h1>
        <AnimatePresence>
          {data.map((value, i) => {
            return <CertBox value={value.toString()} pos={i} key={i} />
          })}
        </AnimatePresence>
      </>
    </Screen>
  )
}

export default certs
