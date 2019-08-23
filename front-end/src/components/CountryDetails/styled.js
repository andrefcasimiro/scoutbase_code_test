// @flow
import styled from "styled-components"
import theme from "../../global/theme"
import { mq } from "../../common/mediaQueries"

export const Section = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  background: ${theme.color.white};
  flex-direction: column;
  box-shadow: 0 1rem 5rem 0 rgba(0,0,0,0.05);
  margin-bottom: 1rem;
`

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0;
  width: 100%;
  color: ${theme.color.white};
  min-height: 3rem;
  padding: 1rem;
  background-image: linear-gradient(to bottom, ${theme.color.primaryLight}, ${theme.color.primary});
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  align-items: center;
  min-width: 30rem;
  min-height: 8rem;

  justify-content: flex-start;
  margin-left: 1rem;

  ${mq("max").tablet} {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mq("min").tabletWide} {
    flex-direction: row;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  ${mq("min").tabletWide} {
    max-width: 20%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`
