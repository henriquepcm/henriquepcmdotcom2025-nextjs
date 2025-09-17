import { Page } from "./shared/sharedTypes";

export type Data = {
     page: Page;
     technologies: {
          nodes: TechnologiesNode[];
     };
};

export type Technologies = {
     icon: string;
     label: string;
};

export type TechnologiesNode = {
     id: string;
     technologies: Technologies;
};
