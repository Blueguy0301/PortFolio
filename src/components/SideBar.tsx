import React, { Fragment, useMemo } from "react"
import { Dialog, Transition } from "@headlessui/react"
import GitHubButton from "react-github-btn"
import ReactLogo from "./svgs/stacks/ReactLogo"
import ExpressLogo from "./svgs/stacks/ExpressLogo"
import MongoDBLogo from "./svgs/stacks/MongoDBLogo"
import SQLiteLogo from "./svgs/stacks/SQLiteLogo"
import PhpLogo from "./svgs/stacks/PhpLogo"
import NodeJsLogo from "./svgs/stacks/NodeJsLogo"
import Tailwind from "./svgs/stacks/Tailwind"
import Sass from "./svgs/stacks/Sass"
type tech = {
  title?: string
  shortDesc?: string
  Desc?: string
  Link?: string
  TechStack?: string[]
  Features?: string[]
  image?: string
  repoLink?: string
}
type sideBarProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  data: tech
}

export default function SideBar(props: sideBarProps) {
  const { open, setOpen, data } = props
  const techStack = useMemo(() => {
    return (
      data?.TechStack?.map((tech) => {
        if (tech.includes("React")) {
          return <ReactLogo key={tech} />
        }
        if (tech.includes("Express")) {
          return <ExpressLogo key={tech} />
        }
        if (tech.includes("MongoDB")) {
          return <MongoDBLogo key={tech} />
        }
        if (tech.includes("SQLite")) {
          return <SQLiteLogo key={tech} />
        }
        if (tech.includes("PHP")) {
          return <PhpLogo key={tech} />
        }
        if (tech.includes("NodeJS")) {
          return <NodeJsLogo key={tech} />
        }
        if (tech.includes("Tailwind")) {
          return <Tailwind key={tech} />
        }
        if (tech.includes("Sass")) {
          return <Sass key={tech} />
        }
      }) ?? []
    )
  }, [data])
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          width={30}
                          height={30}
                        >
                          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                        </svg>
                        {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        {data.title}
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <h4 className="text-lg text-blue-700 py-5">
                          About {data.title ?? "this project"}
                        </h4>
                        <p className="text-l ml-5 text-justify">{data.Desc}</p>
                        {data.Features && (
                          <>
                            <h4 className="text-lg text-blue-700 py-2">
                              Features
                            </h4>
                            <ul className="list-disc p-1">
                              {data?.Features?.map((text, i) => {
                                // console.log(text)
                                return (
                                  <li
                                    className="relative ml-5 text-justify"
                                    key={i}
                                  >
                                    {text}
                                  </li>
                                )
                              })}
                            </ul>
                          </>
                        )}
                        {/* tech stack */}
                        <div>
                          <h4 className="text-lg text-blue-700 py-2">
                            Tech Stack
                          </h4>
                          <div className="logos flex-row flex gap-1 items-center justify-evenly w-[100%] flex-wrap">
                            {techStack}
                          </div>
                        </div>
                        <div className="btn-group">
                          <h4 className="text-lg text-blue-700 py-2">Links</h4>
                          <GitHubButton
                            href={data?.repoLink ?? ""}
                            data-size="large"
                            aria-label="Repository on GitHub"
                          >
                            Repository
                          </GitHubButton>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
