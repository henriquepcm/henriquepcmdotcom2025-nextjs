import SectionProjectsRender from "./SectionProjectsRender";
import getGraphQLData from "@/utilities/getGraphQLData";
import { ProjectsData } from "./SectionProjectsRender";
import { gql } from "@apollo/client";

const GET_PROJECTS_DATA = gql`
     query Projects {
          projects {
               documentId
               section
               title
               description
               buttons {
                    id
                    label
                    icon
                    link
               }
               projectDetails {
                    id
                    title
                    description
               }
          }
     }
`;

export default async function SectionProjects() {
     try {
          const data = await getGraphQLData<{ projects: ProjectsData[] }>(
               GET_PROJECTS_DATA
          );

          if (!data.projects) {
               console.log("Missing projects data");
               throw new Error("Missing projects data");
          }

          return <SectionProjectsRender data={data.projects} />;
     } catch (error) {
          console.error("Error loading projects data", error);
          return <div>Error loading projects data.</div>;
     }
}
