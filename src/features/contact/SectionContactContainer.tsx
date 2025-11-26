import getGraphQLData from "@/lib/getGraphQLData";
import SectionContact from "./SectionContact";
import { GET_CONTACT_DATA } from "./SectionContact.query";
import ErrorMessage from "@/components/Error/ErrorMessage";
import { ContactApiResponse } from "./SectionContact.types";

export default async function SectionContactContainer() {
    const section = "Contact Section";

    try {
        const data = await getGraphQLData<ContactApiResponse>(GET_CONTACT_DATA);

        if (!data) {
            console.error("Missing contact data");
            throw new Error("Missing contact data");
        }

        type ContactItems = typeof data.page.contactItems;
        type ContactItemsKeys = keyof ContactItems;

        const keys = Object.keys(data.page.contactItems) as ContactItemsKeys[];
        const excludedKeys = ["__typename", "name", "role"];

        const contactItems = keys
            .filter((key) => !excludedKeys.includes(key))
            .map((key, i) => ({
                id: `${key}-contact-item-${i}`,
                value: data.page.contactItems[key],
                icon: data.page.contactItems[`${key}Icon` as ContactItemsKeys],
            }))
            .filter((item) => !item.value.startsWith("<svg"));

        const socialSites = data.socialSites.nodes.map((site) => {
            return {
                id: site.id,
                label: site.socialSites.label,
                url: site.socialSites.link,
                icon: site.socialSites.icon,
            };
        });

        const contactData = {
            section: {
                id: data.page.title,
                name: data.page.title,
                title: data.page.titles.mainTitle,
            },
            user: {
                name: data.page.contactItems.name,
                role: data.page.contactItems.role,
                contactItems,
                socialSites,
            },
        };

        return <SectionContact contact={contactData} />;
    } catch (error) {
        const message = `We couldn't load the data for: "${section}"`;
        console.error(message, error);
        return <ErrorMessage message={message} />;
    }
}
