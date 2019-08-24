// @flow
import styled, { css } from "styled-components"
import theme from "../../global/theme"
import { mq } from "../../common/mediaQueries"

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  align-items: center;
  width: 100%;
  min-height: 8rem;

  justify-content: flex-start;

  ${mq("max").tablet} {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }

  ${mq("min").tablet} {
    margin-left: 1rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  max-width: 90rem;
`
