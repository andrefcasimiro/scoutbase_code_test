import styled from "styled-components"
import theme from "../../global/theme"
import { mq } from "../../common/mediaQueries"

export const LogoContainer = styled.h1`
  display: flex;
  justify-content: center;
  color: ${theme.color.white};
  font-size: 6.2rem;
  margin: 0;

  ${mq("max").tabletWide} {
    font-size: 4rem;
  }

  cursor: pointer;
`
