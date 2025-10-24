import BlogPost from "./features/BlogPost";

type BlogPostPageProps = {
  data: {
    category: string;
    title: string;
    subtitle: string;
    meta: {
      author: string;
      published: string;
      updated: string;
    };
    image: {
      altText: string;
      filePath: string;
    };
    content: string;
  };
};

export default function BlogPostPage({ data }: BlogPostPageProps) {
  return (
    <BlogPost>
      <BlogPost.Header>
        <BlogPost.Breadcrumb category={data.category} />
        <BlogPost.Title title={data.title} />
        <BlogPost.Subtitle subtitle={data.subtitle} />
        <BlogPost.Meta meta={data.meta} />
        <BlogPost.FeaturedImage image={data.image} />
      </BlogPost.Header>
      <BlogPost.Content content={data.content} />
    </BlogPost>
  );
}
