import BlogPostPage from "@/components/BlogPostPage";
import getGraphQLData from "@/lib/getGraphQLData";
import { gql } from "@apollo/client";
import { notFound } from "next/navigation";

const GET_BLOG_POST_DATA = gql`
  query BlogPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      subtitle {
        subtitle
      }
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          filePath
        }
      }
      dateGmt
      modifiedGmt
      author {
        node {
          firstName
          lastName
        }
      }
      content
    }
  }
`;

type Params = Promise<{
  slug: string;
}>;

type Data = {
  post: {
    author: {
      node: {
        firstName: string;
        lastName: string;
      };
    };
    categories: {
      nodes: {
        name: string;
      }[];
    };
    content: string;
    dateGmt: string;
    featuredImage: {
      node: {
        altText: string;
        filePath: string;
      };
    };
    modifiedGmt: string;
    subtitle: {
      subtitle: string;
    };
    title: string;
  };
};

export default async function SingleBlogPage({ params }: { params: Params }) {
  const { slug } = await params;

  const data = await getGraphQLData<Data>(GET_BLOG_POST_DATA, { slug });

  try {
    const formattedData = {
      category: data.post.categories.nodes[0].name,
      title: data.post.title,
      subtitle: data.post.subtitle.subtitle,
      meta: {
        author: `${data.post.author.node.firstName} ${data.post.author.node.lastName}`,
        published: data.post.dateGmt,
        updated: data.post.modifiedGmt,
      },
      image: {
        altText: data.post.featuredImage.node.altText,
        filePath: data.post.featuredImage.node.filePath,
      },
      content: data.post.content,
    };

    return <BlogPostPage data={formattedData} />;
  } catch (error) {
    console.error("Error loading blog post data", error);
    notFound();
  }
}
