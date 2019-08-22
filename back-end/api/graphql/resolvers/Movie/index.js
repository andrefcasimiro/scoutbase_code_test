import { listMovies } from '../../../actions/Movie'

export default {
  Query: {
    listMovies: (root, args, ctx) => {
      return new Promise((resolve, reject) => {
        const result = listMovies(ctx)

        console.log('root: ', root)
        console.log('args: ', args)

        if (result && result.error) {
          reject(result.error)
        }

        resolve(result)
      })
    },
  },
}
