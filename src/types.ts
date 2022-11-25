import type { Dispatch, SetStateAction } from "react"
export type screenProps = {
  setActive: Dispatch<SetStateAction<string>>
}
export type certs = {
  title: string
  image: string
}
