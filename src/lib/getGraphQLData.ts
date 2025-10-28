import { ApolloClient, InMemoryCache, DocumentNode } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export default async function getGraphQLData<T>(
  query: DocumentNode,
  variables?: Record<string, string>,
): Promise<T> {
  try {
    const { data } = await client.query({
      query: query,
      variables,
      fetchPolicy: "network-only",
    });

    return data as T;
  } catch (error) {
    console.error("Error executing query:", error);
    throw new Error("Error executing query");
  }
}
