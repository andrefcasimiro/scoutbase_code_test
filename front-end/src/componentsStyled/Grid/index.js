// @flow
import React from "react"
import {
  Wrapper,
  Item,
} from "./styled"

type Props = {||}

const Grid = ({ children }: Props) => {
  if (!Array.isArray(children)) {
    return children
  }

  return (
    <Wrapper>
      {children.map((child, index) =>
        <Item key={index}>{child}</Item>
      )}
    </Wrapper>
  )
}

export default Grid
