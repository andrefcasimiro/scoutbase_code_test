import styled from "styled-components"
import theme from "../global/theme"

export const Paragraph = styled.p`
  color: grey;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`

export const Link = styled.a`
  color: ${theme.color.primary};

  &:hover {
    text-decoration: underline;
  }
`
