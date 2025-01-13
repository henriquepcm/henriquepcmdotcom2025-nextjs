import getGraphQLData from "@/utilities/getGraphQLData";
import SectionHomeRender from "./SectionHomeRender";
import { gql } from "@apollo/client";
import { HomeData } from "./Animations/HomeAnimation";
import ErrorMessage from "./Error/ErrorMessage";

const GET_HOME_DATA = gql`
     query Home {
          home {
               title
               subtitle
          }
     }
`;

export default async function SectionHome() {
     try {
          const data = await getGraphQLData<{ home: HomeData }>(GET_HOME_DATA);

          if (!data) {
               console.log("Missing home data");
               throw new Error("Missing home data");
          }

          return <SectionHomeRender data={data.home} />;
     } catch (error) {
          return <ErrorMessage error={error} />;
     }
}
