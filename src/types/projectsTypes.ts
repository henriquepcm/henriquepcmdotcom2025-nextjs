import { Page } from "./shared/sharedTypes";

export type Projects = {
    nodes: ProjectNode[];
};

export type ProjectNode = {
    id: string;
    projects: {
        buttonLabel1: string;
        buttonIcon1: string;
        buttonLink1: string;
        buttonLabel2: string;
        buttonIcon2: string;
        buttonLink2: string;
        description: string;
        descriptionItem1: string;
        descriptionItem2: string;
        descriptionItem3: string;
        descriptionItem4: string;
        descriptionItem5: string;
        descriptionItem6: string;
        labelItem1: string;
        labelItem2: string;
        labelItem3: string;
        labelItem4: string;
        labelItem5: string;
        labelItem6: string;
        title: string;
        image: {
            node: {
                altText: string;
                filePath: string;
            };
        };
    };
};

export type Data = {
    page: Page;
    projects: Projects;
};
