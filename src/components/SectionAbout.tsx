import getGraphQLData from "@/utilities/getGraphQLData";
import SectionAboutRender from "./SectionAboutRender";
import { AboutData } from "./SectionAboutRender";
import { gql } from "@apollo/client";

const GET_ABOUT_DATA = gql`
     query About {
          about {
               section
               title
               description
               careerThings {
                    id
                    description
                    icon
               }
               button {
                    id
                    label
                    icon
                    link
               }
               titleCareerThings
          }
     }
`;

export default async function SectionAbout() {
     try {
          const data = await getGraphQLData<{ about: AboutData }>(
               GET_ABOUT_DATA
          );

          if (!data.about) {
               console.log("Missing about data");
               throw new Error("Missing about data");
          }

          return <SectionAboutRender data={data.about} />;
     } catch (error) {
          console.error("Error loading about data", error);
          return <div>Error loading about data.</div>;
     }
}
