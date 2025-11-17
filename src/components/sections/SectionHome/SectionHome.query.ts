import { gql } from "@apollo/client";

export const GET_HOME_DATA = gql`
    query Home {
        page(id: "home", idType: URI) {
            titles {
                mainTitle
                secondaryTitle
            }
        }
    }
`;
