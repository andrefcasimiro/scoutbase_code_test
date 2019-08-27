import styled from "styled-components"
import theme from "../../global/theme"

export const NavWrap = styled.div`
  background: ${theme.color.primary};
  width: 100%;
  height: 13rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`
