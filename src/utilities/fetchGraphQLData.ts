export default async function fetchGraphQLData() {
     const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

     if (!endpoint) {
          throw new Error("GraphQL endpoint is not defined.");
     }

     const { data } = await fetch(endpoint, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               query: `
               query Header {
                    header {
                         menuItems {
                         id
                         label
                         link
                    }
                    button {
                         label
                         link
                    }
                    brand {
                         logo
                         link
               }
          }
     }
               `,
          }),
          next: { revalidate: 10 },
     }).then((res) => res.json());

     return data;
}
