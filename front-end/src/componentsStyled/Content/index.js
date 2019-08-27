import React from "react"
import {
  Container,
  FullWidthWrapper,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const Content = ({ children }: Props) => (
  <FullWidthWrapper>
    <Container>
      {children}
    </Container>
  </FullWidthWrapper>
)

export default Content
