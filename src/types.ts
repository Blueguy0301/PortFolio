import type { ReactElement, Dispatch, SetStateAction, LegacyRef } from "react"
export type screenProps = {
  setActive: Dispatch<SetStateAction<string>>
}
export type certs = {
  title: string
  image: string
}
export type propTypes = {
  children: ReactElement
  className?: string
  [x: string]: any
}
export type tech = {
  title?: string
  shortDesc?: string
  Desc?: string
  Link?: string
  TechStack?: string[]
  Features?: string[]
  image?: string
  repoLink?: string
}
export type sideBarProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  data: tech
}

export type writerTypes = {
  id?: string
}
export type TechCardProps = {
  stack: string
}
export type techStack = { stack: string; skillType: string }
export type loadingProps = {
  isLoading: boolean
}
export type screenRef = LegacyRef<HTMLDivElement> | undefined
