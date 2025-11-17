import { gql } from "@apollo/client";

export const GET_PROJECTS_DATA = gql`
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
