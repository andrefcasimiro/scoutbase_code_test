// @flow
import React from "react"
import { Query } from "react-apollo"
import withQuery from "../../hocs/withQuery"
import { countries } from "../../data/countries/queries"
import type { Country } from "../../data/countries/types"
import Spinner from "../../componentsStyled/Spinner"

const Countries = ({ data }: Country[]) => data && data.length
  ? data.map((country, index) => <p>{country.name}</p>)
  : <Spinner />

export default withQuery(countries)(Countries)
