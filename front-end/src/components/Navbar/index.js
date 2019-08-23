// @flow
import React from "react"
import Logo from "../Logo"
import Navlinks from "../Navlinks"
import { appConfig } from "../../global/config"
import {
  NavWrap,
  NavContent,
} from "./styled"

type Props = {|
  children?: React.Node,
|}

const Navbar = ({ children }: Props) => (
  <NavWrap>
    <NavContent>
      {children ||
        <React.Fragment>
          <Logo>{appConfig.appName}</Logo>
          <Navlinks />
        </React.Fragment>
      }
    </NavContent>
  </NavWrap>
)

export default Navbar
