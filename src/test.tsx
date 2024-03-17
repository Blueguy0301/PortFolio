import React from "react"
import { useState } from "react"

const test = () => {
  //create a lazy suspend with % of data loaded
  const [isLoading, setIsLoading] = useState(true)
  //calculate the % of data loaded
  //when the % is 100% then set isLoading to false
  const [percentLoaded, setPercentLoaded] = useState(0)
  //when isLoading is false then render the page
  if (!isLoading) {
    return <div>test</div>
  }
  //when isLoading is true then render the loading screen
  return <div>test</div>

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return <div>test</div>
}

export default test
