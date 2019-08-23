// @flow
import React from "react"
import { withHandlers } from "recompose"
import Logo from "../Logo"
import SecondaryNavbar from "../SecondaryNavbar"
import Navlinks from "../Navlinks"
import { appConfig } from "../../global/config"
import type { Country } from "../../data/countries/types"
import {
  TileWrap,
  Content,
  ContentWrap,
  Section,
  Paragraph,
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
    </ContentWrap>
  </TileWrap>
)

const enhancer: HOC<*, Props> = withHandlers({
  handleClick: props => () => {
    return window.location.assign(`/countries/${props.country.code}`)
  }
})

export default enhancer(CountryTile)
