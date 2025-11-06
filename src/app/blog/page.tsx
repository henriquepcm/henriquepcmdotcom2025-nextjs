import ErrorMessage from "@/components/Error/ErrorMessage";
import Blog from "@/features/blog/components/Blog/Blog";
import { FormattedPostType } from "@/features/blog/types/types";
import getGraphQLData from "@/lib/getGraphQLData";
import { gql } from "@apollo/client";

type Posts = {
    posts: {
        nodes: PostsNodes[];
    };
};

type PostsNodes = {
    id: string;
    title: string;
    slug: string;
    subtitle: {
        subtitle: string;
    };
    categories: {
        nodes: CategoriesNodes[];
    };
    featuredImage: {
        node: {
            altText: string;
            filePath: string;
        };
    };
};

type CategoriesNodes = {
    name: string;
    slug: string;
};

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
        const posts = await getGraphQLData<Posts>(GET_BLOG_POSTS);

        const formattedPosts: FormattedPostType[] = posts.posts.nodes.map(
            (post) => ({
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
            }),
        );

        return <Blog posts={formattedPosts} />;
    } catch (error) {
        return <ErrorMessage error={error} />;
    }
}
