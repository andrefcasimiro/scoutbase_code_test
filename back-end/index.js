const express = require('express')
const expressGraphQL = require('express-graphql')
const jwt = require('express-jwt')
const decode = require('jwt-decode')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
import schema from './api/graphql'

const port = 4000
const app = express()

// Auth middleware
const auth = jwt({
  secret: 'secretKey',
  credentialsRequired: false,
})

// Allow external clients to make requests to our API. Could be a whitelist.
const corsOptions = {
  origin: 'http://localhost:4000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

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
        },
      }
    },
  )
)

app.listen(port, () => {
  console.log(`Server has started on port ${port}.`)
})

app.use('/scripts', express.static(path.join(__dirname, '/public/scripts')))

app.get('/create-account', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/views/create-account/index.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/views/login/index.html'))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/views/home/index.html'))
})
