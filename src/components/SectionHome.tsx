import getGraphQLData from "@/utilities/getGraphQLData";
import SectionHomeRender from "./SectionHomeRender";
import { gql } from "@apollo/client";
import ErrorMessage from "./Error/ErrorMessage";
import { Data } from "@/types/homeTypes";

const GET_HOME_DATA = gql`
  query Home {
    page(id: "home", idType: URI) {
      titles {
        mainTitle
        secondaryTitle
      }
    }
  }
`;

export default async function SectionHome() {
  try {
    const data = await getGraphQLData<Data>(GET_HOME_DATA);

    if (!data) {
      console.error("Missing home data");
      throw new Error("Missing home data");
    }

    return <SectionHomeRender data={data} />;
  } catch (error) {
    return <ErrorMessage error={error} />;
  }
}
