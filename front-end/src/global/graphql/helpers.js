// @flow
import { path, identity, isNil } from "ramda"
import type { Query, Mutation } from "./types"
import client from "./apolloClient"

export const getDataFromSelector = (selector: Array<string>) =>
  path(["data"].concat(selector))

export const transformResponse = (
  selector: Array<string> = [],
  transform?: Function = identity,
) => (data: Object) => {
  const selectedData = getDataFromSelector(selector)(data)

  return isNil(selectedData)
    ? undefined
    : transform(selectedData)
}

export const query = (
  { gql, transform, selector }: Query,
  variables?: Parameters,
): Promise => client.query({ query: gql, variables })

export const mutate = (
  { gql, selector }: Mutation,
  variables: Parameters,
): Promise => client.mutate({ mutation: gql, variables })
