export default `
  type User {
    id: Int
    username: String
    email: String
  }

  type Query {
    getUserById(id: Int!): User
    listUsers(filter: listUsersFilter): [User]
  }

  input listUsersFilter {
    id: [Int!]
    name: [String!]
  }
`
