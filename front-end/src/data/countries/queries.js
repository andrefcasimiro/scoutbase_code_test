import gql from "graphql-tag"
import type { Country } from "./types"
import type { Query } from "../../global/graphql/types"

export const countries: Query<Country[]> = {
  gql: gql`
    query countries {
      # Write your query or mutation here
      countries {
        code
        name
        continent {
          name
        }
        languages {
          name
        }
      }
    }
  `,
  selector: ["countries"],
}
