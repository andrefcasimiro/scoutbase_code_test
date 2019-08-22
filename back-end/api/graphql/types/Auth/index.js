export default `
  type Auth {
    token: String
    user: User
  }

  type Mutation {
    login(input: AuthInput!): Auth
    createUser(input: AuthInput!): Auth
  }

  input AuthInput {
    username: String
    password: String
  }
`
