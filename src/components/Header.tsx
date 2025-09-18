import getGraphQLData from "@/utilities/getGraphQLData";
import HeaderRender from "./HeaderRender";
import { gql } from "@apollo/client";
import { Data } from "@/types/headerTypes";

const GET_HEADER_DATA = gql`
  query Header {
    page(id: "header", idType: URI) {
      header {
        logo
        buttonLabel
        buttonLink
      }
    }
    pages {
      nodes {
        id
        title
        menuOrder
      }
    }
  }
`;

export default async function Header() {
  try {
    const data = await getGraphQLData<Data>(GET_HEADER_DATA);

    if (!data) {
      console.error("Missing header data");
      throw new Error("Missing header data");
    }

    return <HeaderRender data={data} />;
  } catch (error) {
    console.error("Error loading header data", error);
    return <div>Error loading header data.</div>;
  }
}
