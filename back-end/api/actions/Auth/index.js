const jsonwebtoken = require('jsonwebtoken')
import { users } from "../../constants/users"
import { setAuthorizationHeader } from "../../../index"

/*
  mutation {
    createUser(input:{username:"qe312", password:"1234"}) {
      user {
        id
        username
      }
      token
    }
  }
*/
export const createUser = args => {
  const { username, password } = args.input

  const user = users.find(user => user.username === username)

  if (user) {
    throw new Error('User already exists.')
  }

  const newUser = {
    id: users.length + 1,
    username,
    password,
  }

  users.push(newUser)

  const token = jsonwebtoken.sign({
      id: newUser.id,
      username: newUser.username,
    },
    'secretKey',
    {
      expiresIn: '1d',
    },
  )

  setAuthorizationHeader(token)

  return {
    token,
    user: newUser,
  }
}

/*
  mutation {
    login(input:{username:"user2", password:"4321qwer"}) {
      user {
        id
        username
      }
      token
    }
  }
*/
export const login = args => {
  const { username, password } = args.input

  const user = users.find(user => user.username === username)

  if (!user) {
    throw new Error('Could not find a user with this e-mail.')
  }

  if (user.password !== password) {
    throw new Error('Passwords do not match!')
  }

  const token = jsonwebtoken.sign({
      id: user.id,
      username: user.username,
    },
    'secretKey',
    {
      expiresIn: '1d',
    },
  )

  setAuthorizationHeader(token)

  return {
    token,
    user,
  }
}
