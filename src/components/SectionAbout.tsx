import getGraphQLData from "@/utilities/getGraphQLData";
import SectionAboutRender from "./SectionAboutRender";
import { gql } from "@apollo/client";
import { Data } from "@/types/aboutTypes";

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
        careerHighlights {
          icon
          description
        }
      }
    }
  }
`;

export default async function SectionAbout() {
  try {
    const data = await getGraphQLData<Data>(GET_ABOUT_DATA);

    if (!data) {
      console.error("Missing about data");
      throw new Error("Missing about data");
    }

    return <SectionAboutRender data={data} />;
  } catch (error) {
    console.error("Error loading about data", error);
    return <div>Error loading about data.</div>;
  }
}
