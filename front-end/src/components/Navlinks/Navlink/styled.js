import styled, { css } from "styled-components"
import theme from "../../../global/theme"

export const StyledNavlink = styled.a`
  position: relative;
  color: ${theme.color.white};
  margin-left: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  transition: 0.2s all;

  &:hover {
    background: ${theme.color.white};
    color: ${theme.color.primary};
  }

  ${p => p.active && css`
    background: ${theme.color.primaryDark};
  `}
`
