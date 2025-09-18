import { Titles } from "./shared/sharedTypes";

export type HighlightNode = {
  id: string;
  careerHighlights: {
    icon: string;
    description: string;
  };
};

export type Resume = {
  highlightsSectionTitle: string;
  buttonIcon: string;
  buttonLabel: string;
  resumeDownloadLink: string;
};

export type Page = {
  title: string;
  titles: Titles;
  resume: Resume;
};

export type Data = {
  page: Page;
  careerHighlights: {
    nodes: HighlightNode[];
  };
};
