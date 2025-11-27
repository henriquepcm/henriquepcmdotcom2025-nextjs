import getGraphQLData from "@/lib/getGraphQLData";
import { GET_PROJECTS_DATA } from "./SectionProjects.query";
import SectionProjects from "./SectionProjects";
import ErrorMessage from "@/components/Error/ErrorMessage";
import { slugify } from "@/lib/slugify";
import { DataApiResponse } from "./SectionProjects.types";

export default async function SectionProjectsContainer() {
    const section = "Projects Section";

    try {
        const data = await getGraphQLData<DataApiResponse>(GET_PROJECTS_DATA);

        if (!data) {
            console.error("Missing projects data");
            throw new Error("Missing projects data");
        }

        const projectsData = data.projects.nodes.map((project) => {
            // Get all keys from project.projects, but keep only those
            // whose values are strings (filtering out objects like "image")
            const keys = Object.keys(project.projects).filter((key) => {
                const value =
                    project.projects[key as keyof typeof project.projects];
                return typeof value === "string";
            });

            // Helper to safely get a string field value from project.projects.
            // If the value isn't a string (e.g. it's an object), return an empty string.
            const getString = (field: string): string => {
                const value =
                    project.projects[field as keyof typeof project.projects];
                return typeof value === "string" ? value : "";
            };

            const buttons = keys
                .filter((key) => key.startsWith("buttonLabel"))
                .map((key) => {
                    const index = key.match(/\d+$/)?.[0];

                    return {
                        id: `${project.id}-button-${index}`,
                        label: getString(`buttonLabel${index}`),
                        link: getString(`buttonLink${index}`),
                        icon: getString(`buttonIcon${index}`),
                    };
                })
                .filter((btn) => btn.label !== null);

            const infoBlockItems = keys
                .filter((key) => key.startsWith("labelItem"))
                .map((key) => {
                    const index = key.match(/\d+$/)?.[0];
                    return {
                        id: `${project.id}-infoBlockItem-${index}`,
                        label: getString(`labelItem${index}`),
                        description: getString(`descriptionItem${index}`),
                    };
                })
                .filter((key) => key.label !== null);

            return {
                id: project.id,
                sectionId: slugify(project.projects.title),
                title: project.projects.title,
                description: project.projects.description,
                buttons,
                infoBlockItems,
            };
        });

        return <SectionProjects projects={projectsData} />;
    } catch (error) {
        const message = `We couldn't load the data for: "${section}"`;
        console.error(message, error);
        return <ErrorMessage message={message} />;
    }
}
