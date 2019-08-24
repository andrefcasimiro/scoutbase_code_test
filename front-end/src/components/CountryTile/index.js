// @flow
import React from "react"
import { withHandlers } from "recompose"
import type { Country } from "../../data/countries/types"
import { Paragraph } from "../../componentsStyled/Typography"
import {
  TileWrap,
  Content,
  ContentWrap,
  Section,
} from "./styled"

type Props = {|
  country: Country,
|}

const CountryTile = ({ country, handleClick }) => (
  <TileWrap onClick={handleClick}>
    <ContentWrap>
      <Content>
        <Section>
          <h2>{country.emoji}</h2>
        </Section>
        <Section>
          <h3>{country.name}</h3>
          <Paragraph>({country.continent.name})</Paragraph>
        </Section>
      </Content>
      <Content>
        <Paragraph>
          {country.languages && country.languages.map(language => language.name).join(', ')}
        </Paragraph>
      </Content>
      <Content>
        <Paragraph>
          {country.languages && country.languages.map(language => language.native).join(', ')}
        </Paragraph>
      </Content>
    </ContentWrap>
  </TileWrap>
)

const enhancer: HOC<*, Props> = withHandlers({
  handleClick: props => () => {
    return window.location.assign(`/countries/${props.country.code}`)
  }
})

export default enhancer(CountryTile)
