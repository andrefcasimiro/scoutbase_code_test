// @flow
import React from "react"
import { Query } from "react-apollo"
import withQuery from "../../hocs/withQuery"
import { countries } from "../../data/countries/queries"
import type { Country } from "../../data/countries/types"
import Spinner from "../../componentsStyled/Spinner"
import CountryTile from "../../components/CountryTile"
import { Wrap } from "./styled"

const Countries = ({ data }: Country[]) => data && data.length
  ? <Wrap>
      {data.map((country, index) => {
        const initial = country.name.charAt(0)
        const nextInitial = data[index+1] && data[index+1].name.charAt(0)
        const drawIndex = initial !== nextInitial

        return (
          <React.Fragment key={index}>
            {index === 0 && <h2 key={index + 1}>{initial}</h2>}
            <CountryTile key={index + 2} country={country} />
            {drawIndex && <h2 key={index + 3}>{nextInitial}</h2>}
          </React.Fragment>
        )
      })}
    </Wrap>
  : <Spinner />

export default withQuery(countries)(Countries)
