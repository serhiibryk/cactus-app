import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      alert(`GraphQL error: ${message}`);
      console.warn("[GraphQL error]", { message, locations, path });
    });
  }

  if (networkError) {
    alert(`Network error: ${networkError.message}`);
    console.warn("[Network error]", networkError);
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
