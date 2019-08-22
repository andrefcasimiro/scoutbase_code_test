const express = require('express')
const expressGraphQL = require('express-graphql')
const jwt = require('express-jwt')
const decode = require('jwt-decode')
const path = require('path')
const bodyParser = require('body-parser')
import schema from './api/graphql'

const port = 4000
const app = express()

// This is a small hack to emulate the jwt we would actually send via our client authorization header
let fakeAuthorizationHeader = ''
export const setAuthorizationHeader = (token) => {
  fakeAuthorizationHeader = token
}

// Auth middleware
const auth = jwt({
  secret: 'secretKey',
  credentialsRequired: false,
})

app.use('/graphql',
  auth,
  expressGraphQL(request => {
      const token = request.headers.authorization || fakeAuthorizationHeader
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

app.use('/scripts', express.static(path.join(__dirname, '/public/scripts')))

app.get('/create-account', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/views/create-account/index.html'))
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/views/home/index.html'))
})
