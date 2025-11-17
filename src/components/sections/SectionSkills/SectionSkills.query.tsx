import { gql } from "@apollo/client";

export const GET_SKILLS_DATA = gql`
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
