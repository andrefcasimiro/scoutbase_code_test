import gql from "graphql-tag"
import type { Country } from "./types"
import type { Query } from "../../global/graphql/types"

export const country: Query<Country> = {
  gql: gql`
    query country($code: String) {
      country(code: $code) {
        code
        name
        continent {
          name
        }
        languages {
          name
        }
        emoji
        currency
        phone
      }
    }
  `,
  selector: ["country"],
}

export const countries: Query<Country[]> = {
  gql: gql`
    query countries {
      countries {
        code
        name
        continent {
          name
        }
        languages {
          name
        }
        emoji
      }
    }
  `,
  selector: ["countries"],
  transform: data => {
    if (data && data.length) {
      const sorted = data.sort((a, b) => {
        const textA = a.name.toUpperCase()
        const textB = b.name.toUpperCase()

        if (textA < textB) {
          return -1
        }
        if (textA > textB) {
          return 1
        }

        return 0
      })

      return sorted
    }
  }
}
