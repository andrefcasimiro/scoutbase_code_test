import { mergeTypes } from 'merge-graphql-schemas'
import Auth from './Auth'
import Movie from './Movie'
import User from './User'

const typeDefs = [
  Auth,
  Movie,
  User,
]

export default mergeTypes(typeDefs, { all: true })
