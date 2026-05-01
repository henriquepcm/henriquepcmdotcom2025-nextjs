import { cache } from "react";
import { notFound } from "next/navigation";
import { gql } from "@apollo/client";
import BlogPost from "@/features/blog/components/BlogPost/BlogPost";
import getGraphQLData from "@/lib/getGraphQLData";

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

export const getPostData = cache(async (slug: string) => {
    const data = await getGraphQLData<Data>(GET_BLOG_POST_DATA, { slug });
    if (!data) {
        notFound();
    }

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

    return formattedData;
});

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const post = await getPostData(slug);
    const NEXT_PUBLIC_WP_URL = process.env.NEXT_PUBLIC_WP_URL;

    return {
        title: post.title,
        description: post.subtitle,
        authors: [
            {
                name: post.meta.author,
                url: "https://henriquepcm.com",
            },
        ],
        alternates: {
            canonical: `https://henriquepcm.com/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.subtitle,
            url: `https://henriquepcm.com/blog/${slug}`,
            siteName: "henriquepcm.com",
            images: [
                {
                    url: `${NEXT_PUBLIC_WP_URL}/${post.image.filePath}`,
                    width: 1200,
                    height: 630,
                    alt: post.image.altText,
                },
            ],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.subtitle,
            images: [`${NEXT_PUBLIC_WP_URL}/${post.image.filePath}`],
        },
    };
}

export default async function SinglBlogPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    return <BlogPost data={post} />;
}
