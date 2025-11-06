import SectionSkillsRender from "./SectionSkillsRender";
import { gql } from "@apollo/client";
import getGraphQLData from "@/lib/getGraphQLData";
import { Data } from "@/types/skillsType";

const GET_SKILLS_DATA = gql`
    query Skill {
        page(id: "skills", idType: URI) {
            title
            titles {
                mainTitle
                secondaryTitle
            }
        }
        technologies(first: 100) {
            nodes {
                id
                technologies {
                    icon
                    label
                }
            }
        }
    }
`;

export default async function SectionSkills() {
    try {
        const data = await getGraphQLData<Data>(GET_SKILLS_DATA);

        if (!data) {
            console.error("Missing skills data");
            throw new Error("Missing skills data");
        }

        return <SectionSkillsRender data={data} />;
    } catch (error) {
        console.error("Error loading skills data", error);
        return <div>Error loading skills data.</div>;
    }
}
