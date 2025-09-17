import { Titles } from "./shared/sharedTypes";

type ContactItems = {
  email: string;
  emailIcon: string;
  location: string;
  locationIcon: string;
  name: string;
  role: string;
  timezone: string;
  timezoneIcon: string;
};

type SocialSites = {
  nodes: SocialSitesNode[];
};

type SocialSitesNode = {
  id: string;
  socialSites: {
    icon: string;
    link: string;
    label: string;
  };
};

export type Data = {
  page: {
    title: string;
    titles: Titles;
    contactItems: ContactItems;
  };
  socialSites: SocialSites;
};
