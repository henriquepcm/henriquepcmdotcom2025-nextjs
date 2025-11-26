export type ContactApiResponse = {
    page: {
        contactItems: {
            email: string;
            emailIcon: string;
            location: string;
            locationIcon: string;
            name: string;
            role: string;
            timezone: string;
            timezoneIcon: string;
        };
        title: string;
        titles: {
            mainTitle: string;
            secondaryTitle: string;
        };
    };
    socialSites: {
        nodes: {
            id: string;
            socialSites: {
                icon: string;
                label: string;
                link: string;
            };
        }[];
    };
};

type SectionUi = {
    id: string;
    name: string;
    title: string;
};

export type UserUi = {
    name: string;
    role: string;
    contactItems: {
        id: string;
        icon: string;
        value: string;
    }[];
    socialSites: {
        id: string;
        label: string;
        url: string;
        icon: string;
    }[];
};

export type ContactUi = {
    section: SectionUi;
    user: UserUi;
};
