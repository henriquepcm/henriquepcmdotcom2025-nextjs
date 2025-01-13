import getGraphQLData from "@/utilities/getGraphQLData";
import HeaderRender, { HeaderData } from "./HeaderRender";
import { gql } from "@apollo/client";

const GET_HEADER_DATA = gql`
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
`;

export default async function Header() {
     try {
          const data = await getGraphQLData<{ header: HeaderData }>(
               GET_HEADER_DATA
          );

          if (!data.header) {
               console.log("Missing header data");
               throw new Error("Missing header data");
          }

          return <HeaderRender data={data.header} />;
     } catch (error) {
          console.error("Error loading header data", error);
          return <div>Error loading header data.</div>;
     }
}
