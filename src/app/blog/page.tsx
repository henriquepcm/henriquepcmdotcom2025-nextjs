import ErrorMessage from "@/components/Error/ErrorMessage";
import Blog from "@/components/features/Blog/Blog";
import getGraphQLData from "@/lib/getGraphQLData";
import { gql } from "@apollo/client";

const GET_BLOG_POSTS = gql`
  {
    posts {
      nodes {
        id
        title
        slug
        subtitle {
          subtitle
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            filePath
          }
        }
      }
    }
  }
`;

export default async function BlogHome() {
  try {
    const posts = await getGraphQLData(GET_BLOG_POSTS);

    const formattedPosts = posts.posts.nodes.map((post) => ({
      id: post.id,
      title: post.title,
      subtitle: post.subtitle.subtitle,
      slug: post.slug,
      category: {
        name: post.categories.nodes[0].name,
        slug: post.categories.nodes[0].slug,
      },
      image: {
        altText: post.featuredImage.node.altText,
        filePath: post.featuredImage.node.filePath,
      },
    }));

    return <Blog posts={formattedPosts} />;
  } catch (error) {
    return <ErrorMessage error={error} />;
  }
}
