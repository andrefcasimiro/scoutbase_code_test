// @flow
import React from "react"
import { StyledNavlink } from "./styled"

type Props = {|
  children: string,
  to: string,
|}

const Navlink = ({ children, to }: Props) => {
  const urlParams = window.location.href.split('/')
  const active =
    urlParams[urlParams.length - 1] === "" && children === 'Home' ||
    urlParams[urlParams.length - 1].toLocaleLowerCase() === children.toLocaleLowerCase()

  return (
    <StyledNavlink active={active} href={to}>{children}</StyledNavlink>
  )
}

export default Navlink
