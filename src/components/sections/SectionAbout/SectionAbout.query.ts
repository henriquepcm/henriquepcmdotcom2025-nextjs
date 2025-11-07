import { gql } from "@apollo/client";

export const GET_ABOUT_DATA = gql`
    query About {
        page(id: "about", idType: URI) {
            title
            titles {
                mainTitle
                secondaryTitle
            }
            resume {
                highlightsSectionTitle
                buttonIcon
                buttonLabel
                resumeDownloadLink
            }
        }
        careerHighlights {
            nodes {
                id
                menuOrder
                careerHighlights {
                    icon
                    description
                }
            }
        }
    }
`;
