import { Data } from "@/types/projectsTypes";
import SectionProjectsRender from "./SectionProjectsRender";
import getGraphQLData from "@/lib/getGraphQLData";
import { gql } from "@apollo/client";

const GET_PROJECTS_DATA = gql`
    query Projects {
        page(id: "projects", idType: URI) {
            title
        }
        projects {
            nodes {
                id
                projects {
                    buttonLabel1
                    buttonIcon1
                    buttonLink1
                    buttonLabel2
                    buttonIcon2
                    buttonLink2
                    description
                    descriptionItem1
                    descriptionItem2
                    descriptionItem3
                    descriptionItem4
                    descriptionItem5
                    descriptionItem6
                    labelItem1
                    labelItem2
                    labelItem3
                    labelItem4
                    labelItem5
                    labelItem6
                    title
                    image {
                        node {
                            altText
                            filePath
                        }
                    }
                }
            }
        }
    }
`;

export default async function SectionProjects() {
    try {
        const data = await getGraphQLData<Data>(GET_PROJECTS_DATA);

        if (!data) {
            console.error("Missing projects data");
            throw new Error("Missing projects data");
        }

        return <SectionProjectsRender data={data} />;
    } catch (error) {
        console.error("Error loading projects data", error);
        return <div>Error loading projects data.</div>;
    }
}
