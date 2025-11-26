import { gql } from "@apollo/client";

export const GET_CONTACT_DATA = gql`
    query Contact {
        page(id: "contact", idType: URI) {
            contactItems {
                email
                emailIcon
                location
                locationIcon
                name
                role
                timezone
                timezoneIcon
            }
            title
            titles {
                mainTitle
                secondaryTitle
            }
        }
        socialSites {
            nodes {
                id
                socialSites {
                    icon
                    label
                    link
                }
            }
        }
    }
`;
