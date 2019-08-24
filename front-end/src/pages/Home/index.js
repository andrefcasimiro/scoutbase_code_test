// @flow
import React from "react"
import { Link } from "../../componentsStyled/Typography"
import {
  Group,
  Item,
  Section,
} from "../../componentsStyled/Layout"

const Home = () => (
  <React.Fragment>
    <Group>
      <Item>
        <Section fullRadius>
          <h2>Welcome.</h2>
          <p>This front-end app was built by andré fernandes (andrefcasimiro@gmail.com) as a coding challenge for <Link href="https://scoutbase.com/">Scoutbase</Link>.</p>
          <p>To start using it, navigate to the <Link href="/countries">countries</Link> tab and choose a country from the list.</p>
        </Section>
      </Item>
    </Group>
  </React.Fragment>
)

export default Home
