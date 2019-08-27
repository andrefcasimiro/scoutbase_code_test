export type Query = {
  gql: any,
  selector?: string[],
  transform?: any => any,
}

export type Mutation = {
  gql: any,
  selector?: string[],
  refetch?: Query<any>[],
}
