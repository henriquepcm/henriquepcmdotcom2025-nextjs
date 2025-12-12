import ErrorMessage from "@/components/Error/ErrorMessage";
import sortByKey from "@/app/utils/sortByProperty";
import getGraphQLData from "@/lib/getGraphQLData";
import SectionAbout from "./SectionAbout";
import { GET_ABOUT_DATA } from "./SectionAbout.query";
import { Data } from "@/types/aboutTypes";

export default async function SectionAboutContainer() {
    const section = "About Section";

    try {
        const data = await getGraphQLData<Data>(GET_ABOUT_DATA);

        if (!data) {
            throw new Error(
                `No data returned from the query or data is invalid for: ${section}`,
            );
        }

        const infoBlockListSorted = sortByKey(
            data.careerHighlights.nodes,
            "menuOrder",
        );

        const sectionAboutData = {
            sectionId: data.page.title,
            name: data.page.title,
            titles: {
                title: data.page.titles.mainTitle,
                subtitle: data.page.titles.secondaryTitle,
            },
            button: {
                label: data.page.resume.buttonLabel,
                icon: data.page.resume.buttonIcon,
                link: data.page.resume.resumeDownloadLink,
            },
            text: data.page.resume.highlightsSectionTitle,
            infoBlockList: infoBlockListSorted,
        };

        return <SectionAbout data={sectionAboutData} />;
    } catch (error) {
        const message = `We couldn't load the data for: "${section}"`;
        console.error(message, error);
        return <ErrorMessage message={message} />;
    }
}
