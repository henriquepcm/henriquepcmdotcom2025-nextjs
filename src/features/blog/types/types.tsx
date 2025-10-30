export type FormattedPostType = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: {
    name: string;
    slug: string;
  };
  image: {
    altText: string;
    filePath: string;
  };
};

export type ImageType = {
  altText: string;
  filePath: string;
};

export type CategoryType = {
  slug: string;
  name: string;
};
