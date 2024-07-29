import { StyleProvider } from "@ant-design/cssinjs"
import { ConfigProvider } from "antd"
import type { PlasmoCSConfig, PlasmoCSUIProps } from "plasmo"
import type { FC } from "react"

import AppUi from "~app-ui"

export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/jobs/*"]
}

export const getRootContainer = () => {
  return new Promise((resolve) => {
    const rootContainer = document.createElement("div")
    document.body.appendChild(rootContainer)
    resolve(rootContainer)
  })
}

const PlasmoOverlay: FC<PlasmoCSUIProps> = () => {
  return (
    <ConfigProvider>
      <StyleProvider>
        <AppUi />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default PlasmoOverlay
