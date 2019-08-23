// @flow
import styled from "styled-components"
import theme from "../../global/theme"
import { mq } from "../../common/mediaQueries"

export const TileWrap = styled.div`
  display: flex;
  position: relative;
  width: 70%;
  height: 5rem;
  background: ${theme.color.white};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: .2s all;
  box-shadow: 0 1rem 5rem 0 rgba(0,0,0,0.05);
  margin: 0.2rem 0;

  ${mq("max").tabletWide} {
    width: 90%;
    height: 100%;
  }

  ${mq("max").tablet} {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 5rem 0 rgba(0,0,0,0.2);
    position: relative;
    cursor: pointer;
    border-bottom: 0.5rem solid ${theme.color.primary};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  align-items: center;
  min-width: 30rem;
  justify-content: flex-start;

  ${mq("max").tablet} {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`

export const Section = styled.div`
  display: flex;
  margin: 0 1rem;
`

export const Paragraph = styled.p`
  color: grey;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;


  ${mq("max").tablet} {
    justify-content: space-evenly;
    flex-direction: column;
  }
`
