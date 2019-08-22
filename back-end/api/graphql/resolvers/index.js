import { mergeResolvers } from 'merge-graphql-schemas'
import Auth from './Auth'

const resolvers = [
  Auth,
]

export default mergeResolvers(resolvers)
