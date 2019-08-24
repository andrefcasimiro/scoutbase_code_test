// @flow
import styled from "styled-components"
import theme from "../../global/theme"
import { mq } from "../../common/mediaQueries"

export const StyledButton = styled.button`
  display: flex;
  font-size: 1.4rem;
  background: ${theme.color.white};
  padding: 1rem;
  margin: 1rem;
  color: ${theme.color.primary};
  border: none;
  cursor: pointer;
  box-shadow: 0.1rem 0.2rem 0.5rem 0 rgba(0,0,0,0.1);
  font-weight: 600;
  justify-content: center;
  width: 20rem;
  transition: 0.2s all;
  border-radius: 1rem;
  align-items: center;

  ${mq("min").tabletWide} {
    &:hover {
      transform: translateY(-0.1rem);
      position: relative;
      cursor: pointer;
      border-bottom: 0.5rem solid ${theme.color.primary};
    }
  }

  ${mq("max").tabletWide} {
    width: 100%;
    border: 0.1rem solid ${theme.color.primary};
  }
`
