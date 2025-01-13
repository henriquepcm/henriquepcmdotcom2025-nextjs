import SectionSkillsRender from "./SectionSkillsRender";
import { gql } from "@apollo/client";
import getGraphQLData from "@/utilities/getGraphQLData";
import { SkillsData } from "./SectionSkillsRender";

const GET_SKILLS_DATA = gql`
     query Skill {
          skill {
               section
               title
               description
               skillCards {
                    id
                    icon
                    label
               }
          }
     }
`;

export default async function SectionSkills() {
     try {
          const data = await getGraphQLData<{ skill: SkillsData }>(
               GET_SKILLS_DATA
          );

          if (!data.skill) {
               console.log("Missing skills data");
               throw new Error("Missing skills data");
          }

          return <SectionSkillsRender data={data.skill} />;
     } catch (error) {
          console.error("Error loading skills data", error);
          return <div>Error loading skills data.</div>;
     }
}
