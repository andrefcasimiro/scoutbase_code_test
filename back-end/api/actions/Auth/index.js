const jsonwebtoken = require('jsonwebtoken')
import { hash, compare } from '../../helpers/bcrypt'

const users = []

export const createUser = async args => {
  const { username, password } = args.input

  const user = users.find(user => user.username === username)

  if (user) {
    throw new Error('User already exists.')
  }

  const hashedPassword = await hash(password)

  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword, // bcrypt.hash
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

  return {
    token,
    user: newUser,
  }
}

export const login = async args => {
  const { username, password } = args.input

  const user = users.find(user => user.username === username)

  if (!user) {
    throw new Error('Could not find an account with this username.')
  }

  const passwordsMatch = await compare(password, user.password)
  if (!passwordsMatch) {
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

  return {
    token,
    user,
  }
}
