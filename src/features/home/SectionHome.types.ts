export type HomeApiTitles = {
    titles: {
        mainTitle: string;
        secondaryTitle: string;
    };
};

export type HomeApiResponse = {
    page: HomeApiTitles;
};

export type HomeTitles = {
    primary: string;
    secondary: string;
};
