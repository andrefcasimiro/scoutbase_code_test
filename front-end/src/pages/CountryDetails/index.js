// @flow
import React from "react"
import { Query } from "react-apollo"
import withQuery from "../../hocs/withQuery"
import { country } from "../../data/countries/queries"
import type { Country } from "../../data/countries/types"
import Spinner from "../../componentsStyled/Spinner"
import CountryDetails from "../../components/CountryDetails"
import { Wrap } from "./styled"

const Countries = ({ data }: Country) => data
  ? <Wrap>
      <CountryDetails country={data} />
    </Wrap>
  : <Spinner />

export default withQuery(country, {
  variables: () => {
    const urlParams = window.location.href.split('/')
    const code = urlParams[urlParams.length - 1]

    return {
      code
    }
  },
})(Countries)
