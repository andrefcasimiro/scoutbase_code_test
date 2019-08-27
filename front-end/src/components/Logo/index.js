import React from "react"
import { LogoContainer } from "./styled"

type Props = {|
  children: React.Node | string,
|}

const Logo = ({ children }: Props) => (
  <LogoContainer onClick={() => window.location.assign('/')}>
    {children}
  </LogoContainer>
)

export default Logo
