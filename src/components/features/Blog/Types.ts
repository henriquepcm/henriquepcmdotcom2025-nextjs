export type FormattedPosts = {
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
