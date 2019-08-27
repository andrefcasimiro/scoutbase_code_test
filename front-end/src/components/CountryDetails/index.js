import React from "react"
import { withHandlers } from "recompose"
import type { Country } from "../../data/countries/types"
import Button from "../../componentsStyled/Button"
import Caret from "../../componentsStyled/Caret"
import {
  Label,
  Section,
  Group,
  Item,
} from "../../componentsStyled/Layout"
import {
  Content,
  Wrapper,
} from "./styled"

type Props = {|
  country: Country,
|}

const CountryDetails = ({ country, handleClick, handleBack }) => (
  <Wrapper>
    <Group>
      <Item>
        <Label>Country</Label>
        <Section>
          <Content>
            <h2>{country.emoji} &nbsp; {country.name}</h2>
          </Content>
        </Section>
      </Item>
    </Group>

    <Group>
      <Item>
        <Label>Continent</Label>
        <Section>
          <Content>
            <p>{country.continent.name}</p>
          </Content>
        </Section>
      </Item>

      <Item>
        <Label>Languages</Label>
        <Section>
          <Content>
            <p>{country.languages && country.languages.map(language => language.name).join(', ')}</p>
          </Content>
        </Section>
        <Section fullRadius>
          <Content>
            <p>{country.languages && country.languages.map(language => language.native).join(', ')}</p>
          </Content>
        </Section>
      </Item>

      <Item>
        <Label>Currency</Label>
        <Section>
          <Content>
            <p>{country.currency}</p>
          </Content>
        </Section>
      </Item>

      <Item>
        <Label>Phone</Label>
        <Section>
          <Content>
            <p>{country.phone}</p>
          </Content>
        </Section>
      </Item>
    </Group>

    <Button onClick={handleBack}><Caret /> Go back to countries</Button>
  </Wrapper>
)

const enhancer: HOC<*, Props> = withHandlers({
  handleClick: props => () => {
    return window.location.assign(`/countries/${props.country.code}`)
  },
  handleBack: props => () => {
    return window.location.assign(`/countries`)
  },
})

export default enhancer(CountryDetails)
