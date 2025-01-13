import { gql } from "@apollo/client";
import { FooterData } from "./FooterRender";
import FooterRender from "./FooterRender";
import getGraphQLData from "@/utilities/getGraphQLData";

const GET_FOOTER_DATA = gql`
     query Footer {
          footer {
               icon
               text
          }
     }
`;

export default async function Footer() {
     try {
          const data = await getGraphQLData<{ footer: FooterData }>(
               GET_FOOTER_DATA
          );

          if (!data.footer) {
               console.log("Missing footer data");
               throw new Error("Missing footer data");
          }

          return <FooterRender data={data.footer} />;
     } catch (error) {
          console.error("Error loading footer data", error);
          return <div>Error loading footer data.</div>;
     }
}
