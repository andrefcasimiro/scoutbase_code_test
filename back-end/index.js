const express = require('express')
const expressGraphQL = require('express-graphql')
const jwt = require('express-jwt')
const decode = require('jwt-decode')
import schema from './api/graphql'

const port = 4000
const app = express()

// Auth middleware
const auth = jwt({
  secret: 'secretKey',
  credentialsRequired: false,
})

app.use('/graphql',
  auth,
  expressGraphQL(request => {
      const token = request.headers.authorization
      const user = token ? decode(token) : null

      return {
        schema,
        graphiql: true,
        context: {
          user,
        }
      }
    },
  )
)

app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
})
