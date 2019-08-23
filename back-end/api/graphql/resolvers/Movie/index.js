import { movies } from '../../../actions/Movie'

export default {
  Query: {
    movies: (root, args, ctx) => {
      return new Promise((resolve, reject) => {
        const result = movies(ctx)

        if (result && result.error) {
          reject(result.error)
        }

        resolve(result)
      })
    },
  },
}
