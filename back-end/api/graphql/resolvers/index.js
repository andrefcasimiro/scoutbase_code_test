import { mergeResolvers } from 'merge-graphql-schemas'
import Auth from './Auth'
import Movie from './Movie'

const resolvers = [
  Auth,
  Movie,
]

export default mergeResolvers(resolvers)
