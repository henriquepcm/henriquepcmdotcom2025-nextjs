import BlogPostContent from "./BlogPostContent";
import BlogPostFeaturedImage from "./BlogPostFeaturedImage";
import BlogPostHeader from "./BlogPostHeader";
import BlogPostMeta from "./BlogPostMeta";
import BlogPostRoot from "./BlogPostRoot";
import BlogPostSubtitle from "./BlogPostSubtitle";
import BlogPostTableOfContents from "./BlogPostTableOfContents";
import BlogPostText from "./BlogPostText";
import BlogPostTitle from "./BlogPostTitle";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

type BlogPostProps = {
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

export default function BlogPost({ data }: BlogPostProps) {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: data.title, href: `/blog/${data.category}/${data.title}` },
    ];

    return (
        <BlogPost.Root>
            <BlogPost.Header>
                <Breadcrumb items={breadcrumbItems} />
                <BlogPost.Title title={data.title} />
                <BlogPost.Subtitle subtitle={data.subtitle} />
                <BlogPost.Meta meta={data.meta} />
                <BlogPost.FeaturedImage image={data.image} />
            </BlogPost.Header>
            <BlogPost.Content content={data.content} />
        </BlogPost.Root>
    );
}

BlogPost.Root = BlogPostRoot;
BlogPost.Header = BlogPostHeader;
BlogPost.Title = BlogPostTitle;
BlogPost.Subtitle = BlogPostSubtitle;
BlogPost.Meta = BlogPostMeta;
BlogPost.FeaturedImage = BlogPostFeaturedImage;
BlogPost.Content = BlogPostContent;
BlogPost.Breadcrumb = Breadcrumb;
BlogPost.TableOfContents = BlogPostTableOfContents;
BlogPost.Text = BlogPostText;
