import React from "react"
import Group from "../../componentsStyled/Group"
import Navlink from "./Navlink"
import { appConfig } from "../../global/config"

type Props = {|
  menu: Array<{
    title: string,
    path: string,
  }>,
|}

const Navlinks = ({ menu = appConfig.appLinks }: Props) => (
  <Group>
    {Object.values(menu).map((option, index) => {
      return (
        <Navlink to={option.path} key={index}>
          {option.title}
        </Navlink>
      )
    })}
  </Group>
)

export default Navlinks
