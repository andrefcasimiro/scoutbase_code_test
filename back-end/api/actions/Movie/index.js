import { movies } from '../../constants/movies'

export const getMovie = (args, ctx) => {
  console.log('ctx: ', ctx)
  console.log('args: ', args)

  const { title, id } = args.input

  let movie
  if (title) {
    movie = movies.find(movie => movie.title === title)
  }

  if (id) {
    movie = movies.find(movie => movie.id === id)
  }

  if (!movie) {
    throw new Error('Could not find this movie.')
  }

  console.log('movie: ', movie)

  return movie
}

/*
  query {
    listMovies {
      id
      title
      scoutbase_rating
      actors {
        name
        directors {
          name
        }
      }
    }
  }
*/

export const listMovies = ctx => {
  const { user } = ctx

  if (user && user.id) {
    return movies
  }

  return movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    actors: movie.actors,
    rating: movie.rating,
  }))
}
