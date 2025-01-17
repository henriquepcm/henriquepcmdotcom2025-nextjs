import { ApolloClient, InMemoryCache, DocumentNode } from "@apollo/client";

const client = new ApolloClient({
     uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
     cache: new InMemoryCache(),
});

export default async function getGraphQLData<T>(
     query: DocumentNode
): Promise<T> {
     try {
          const { data } = await client.query({
               query: query,
               fetchPolicy: "network-only", // Ensures fresh data is fetched from the server
          });

          return data as T;
     } catch (error) {
          console.error("Error executing query:", error);
          throw new Error("Error executing query");
     }
}
