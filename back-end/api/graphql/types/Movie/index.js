export default `
  type Movie {
    id: Int
    title: String
    year: Int
    rating: String
    scoutbase_rating: String
    actors: [Actor]
  }

  type Actor {
    name: String
    birthday: String
    country: String
    directors: [Director]
  }

  type Director {
    name: String
    birthday: String
    country: String
  }

  type Query {
    getMovieById(id: Int!): Movie
    getMovieByTitle(title: String!): Movie
    listMovies: [Movie]
  }
`
