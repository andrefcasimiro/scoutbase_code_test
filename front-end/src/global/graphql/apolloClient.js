import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"

const graphqlURI = "https://countries.trevorblades.com"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: graphqlURI }),
})

export default client
