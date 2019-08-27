import styled, { css } from "styled-components"
import theme from "../global/theme"
import { mq } from "../common/mediaQueries"

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
  width: 100%;
  margin-top: 1rem;

  ${mq("min").tabletWide} {
    margin: 1rem;
  }
`

export const Label = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 0;

border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
width: 100%;
color: ${theme.color.white};
min-height: 3rem;
padding: 1rem;
background-image: linear-gradient(to bottom, ${theme.color.primaryLight}, ${theme.color.primary});
`

export const Section = styled.div`
display: flex;
position: relative;
width: 100%;
background: ${theme.color.white};
flex-direction: column;
box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.05);
margin-bottom: 1rem;
padding: 0 1rem;

border-bottom-left-radius: 1rem;
border-bottom-right-radius: 1rem;

${p => p.fullRadius && css`
  border-radius: 1rem;
`}
`