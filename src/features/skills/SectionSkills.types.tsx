export type SectionSkillsDataApi = {
    page: {
        title: string;
        titles: {
            mainTitle: string;
            secondaryTitle: string;
        };
    };
    technologies: {
        nodes: {
            id: number;
            technologies: {
                icon: string;
                label: string;
            };
        }[];
    };
};

export type SectionSkillsDataUi = {
    sectionId: string;
    name: string;
    titles: {
        title: string;
        subtitle: string;
    };
    skills: {
        id: number;
        label: string;
        icon: string;
    }[];
};
