import { gql } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://graphql-pokemon.now.sh/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export const fetch = async () => {
  let data;

  await client
    .query({
      query: gql`
        {
          pokemons(first: 10000) {
            id
            name
            image
            classification
            types
          }
        }
      `
    })
    .then(result => {
      console.log(result.data.pokemons);
      data = result.data.pokemons;
    });

  return data;
};
