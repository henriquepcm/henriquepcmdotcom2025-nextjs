import { gql } from "@apollo/client";
import { ContactData } from "./SectionContactRender";
import getGraphQLData from "@/utilities/getGraphQLData";
import SectionContactRender from "./SectionContactRender";

const GET_CONTACT_DATA = gql`
     query Contact {
          contact {
               section
               title
               name
               buttons {
                    id
                    label
                    icon
                    link
               }
               contactDetails {
                    id
                    icon
                    label
               }
               messageSentTitle
               messageSentMessage
               roleFirstLine
               roleSecondLine
          }
     }
`;

export default async function SectionContact() {
     try {
          const data = await getGraphQLData<{ contact: ContactData }>(
               GET_CONTACT_DATA
          );

          if (!data.contact) {
               console.log("Missing contact data");
               throw new Error("Missing contact data");
          }

          return <SectionContactRender data={data.contact} />;
     } catch (error) {
          console.error("Error loading contact data", error);
          return <div>Error loading contact data.</div>;
     }
}
