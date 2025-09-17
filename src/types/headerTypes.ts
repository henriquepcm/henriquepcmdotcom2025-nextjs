export type Page = {
     header: {
          logo: string;
          buttonLabel: string;
          buttonLink: string;
     };
};

export type PageNode = {
     id: string;
     title: string;
     menuOrder: number;
};

export type Pages = {
     nodes: PageNode[];
};

export type Data = {
     page: Page;
     pages: Pages;
};

export type Button = {
     label: string;
     link: string;
};

export type Menu = {
     items: PageNode[];
     button: Button;
};
