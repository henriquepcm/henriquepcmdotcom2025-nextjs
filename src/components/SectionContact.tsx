import { gql } from "@apollo/client";
import getGraphQLData from "@/utilities/getGraphQLData";
import SectionContactRender from "./SectionContactRender";
import { Data } from "@/types/contactTypes";

const GET_CONTACT_DATA = gql`
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

export default async function SectionContact() {
  try {
    const data = await getGraphQLData<Data>(GET_CONTACT_DATA);

    if (!data) {
      console.error("Missing contact data");
      throw new Error("Missing contact data");
    }

    return <SectionContactRender data={data} />;
  } catch (error) {
    console.error("Error loading contact data", error);
    return <div>Error loading contact data.</div>;
  }
}
