import ErrorMessage from "@/components/Error/ErrorMessage";
import getGraphQLData from "@/lib/getGraphQLData";
import { GET_HOME_DATA } from "./SectionHome.query";
import SectionHome from "./SectionHome";
import { HomeApiResponse } from "./SectionHome.types";

export default async function SectionHomeContainer() {
    const section = "Home Section";
    try {
        const homeData = await getGraphQLData<HomeApiResponse>(GET_HOME_DATA);

        if (!homeData) {
            console.error("Missing home data");
            throw new Error("Missing home data");
        }

        const homeTitles = {
            primary: homeData.page.titles.mainTitle,
            secondary: homeData.page.titles.secondaryTitle,
        };

        return <SectionHome titles={homeTitles} />;
    } catch (error) {
        const message = `We couldn't load the data for: "${section}"`;
        console.error(message, error);
        return <ErrorMessage message={message} />;
    }
}
