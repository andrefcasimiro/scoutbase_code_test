import { movies as movieList } from '../../constants/movies'

export const movies = ctx => {
  const { user } = ctx

  if (user && user.id) {
    return movieList
  }

  return movieList.map(movie => ({
    id: movie.id,
    title: movie.title,
    actors: movie.actors,
    rating: movie.rating,
    year: movie.year,
  }))
}
