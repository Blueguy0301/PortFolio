import { useEffect, useState } from "react"
import Screen from "../Screen"
import TypeWritter from "../TypeWritter"
const Hero = () => {
  const heroText = "Robert A. Johnson"
  return (
    <Screen className="relative max-h-screen">
      <>
        <div className="wrapper">
          <div className="side left">
            <h1 className="hero-text" id="left">
              {heroText}
            </h1>
            <TypeWritter id="left" />
          </div>
          <div className="side right">
            <h1 className="hero-text" id="right">
              {heroText}
            </h1>
            <TypeWritter id="right" />
          </div>
        </div>
      </>
    </Screen>
  )
}

export default Hero
