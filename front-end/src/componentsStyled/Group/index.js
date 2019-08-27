import React from "react"
import {
  Wrapper,
  Item,
} from "../Grid/styled"

type Props = {|
  children: React.Node,
|}

const Group = ({ children }: Props) => {
  if (!Array.isArray(children)) {
    return null
  }

  return (
    <Wrapper>
      {children.map((child, index) =>
        <Item key={index}>{child}</Item>
      )}
    </Wrapper>
  )
}

export default Group
