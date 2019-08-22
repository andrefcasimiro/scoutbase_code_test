import { login, createUser } from '../../../actions/Auth'

export default {
  Mutation: {
    createUser: (root, args) => {
      return new Promise((resolve, reject) => {
        if (!args) {
          reject('No arguments were provided!')
        }

        const result = createUser(args)

        if (result && result.error) {
          reject(result.error)
        }

        resolve(result)
      })
    },
    login: (root, args) => {
      return new Promise((resolve, reject) => {
        if (!args) {
          reject('No arguments were provided!')
        }

        const result = login(args)

        if (result && result.error) {
          reject(result.error)
        }

        resolve(result)
      })
    },
  },
}
