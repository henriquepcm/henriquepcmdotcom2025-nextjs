import getGraphQLData from "@/lib/getGraphQLData";
import { gql } from "@apollo/client";
import { Data } from "@/types/aboutTypes";
import SectionAbout from "./SectionAbout";

const GET_ABOUT_DATA = gql`
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

export default async function SectionAboutContainer() {
    try {
        const data = await getGraphQLData<Data>(GET_ABOUT_DATA);

        if (!data) {
            console.error("Missing about data");
            throw new Error("Missing about data");
        }

        const sortedHighlights = [...data.careerHighlights.nodes].sort(
            (a, b) => a.menuOrder - b.menuOrder,
        );

        const formattedData = {
            ...data,
            careerHighlights: { nodes: sortedHighlights },
        };

        return <SectionAbout data={formattedData} />;
    } catch (error) {
        console.error("Error loading about data", error);
        return <div>Error loading about data.</div>;
    }
}
