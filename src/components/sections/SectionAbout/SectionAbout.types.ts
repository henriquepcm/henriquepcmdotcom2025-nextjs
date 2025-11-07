export type SectionData = {
    id: string;
    name: string;
    titles: {
        title: string;
        subtitle: string;
    };
    button: {
        label: string;
        icon: string;
        link: string;
    };
    text: string;
    infoBlockList: InfoBlockItem[];
};

export type InfoBlockItem = {
    id: string;
    careerHighlights: {
        icon: string;
        description: string;
    };
};
