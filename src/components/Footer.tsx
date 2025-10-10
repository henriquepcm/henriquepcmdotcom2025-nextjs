import { gql } from "@apollo/client";
import FooterRender from "./FooterRender";
import getGraphQLData from "@/lib/getGraphQLData";
import { Data } from "@/types/footerTypes";

const GET_FOOTER_DATA = gql`
  query Footer {
    page(id: "footer", idType: URI) {
      footer {
        icon
        description
      }
    }
  }
`;

export default async function Footer({ theme }: { theme: string }) {
  try {
    const data = await getGraphQLData<Data>(GET_FOOTER_DATA);

    if (!data) {
      console.error("Missing footer data");
      throw new Error("Missing footer data");
    }

    return <FooterRender data={data} theme={theme} />;
  } catch (error) {
    console.error("Error loading footer data", error);
    return <div>Error loading footer data.</div>;
  }
}
