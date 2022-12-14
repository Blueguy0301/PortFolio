import Screen from "../Screen"
import TypeWritter from "../TypeWritter"
import type { screenProps } from "../../types"
import useObserver from "../useObserver"
const Hero = ({ setActive }: screenProps) => {
  const { ref } = useObserver({ setActive }, "Hero")
  const heroText = "Angelo A. Maminta"
  return (
    <Screen className="relative max-h-screen" id="heroText" ref={ref}>
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
