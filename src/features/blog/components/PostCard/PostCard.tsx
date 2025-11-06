import { FormattedPostType } from "../../types/types";
import PostCardCategory from "./PostCardCategory";
import PostCardImage from "./PostCardImage";
import PostCardLink from "./PostCardLink";
import PostCardRoot from "./PostCardRoot";
import PostCardSubtitle from "./PostCardSubtitle";
import PostCardTitle from "./PostCardTitle";

export default function PostCard({ post }: { post: FormattedPostType }) {
    return (
        <PostCard.Root>
            <PostCard.Link postSlug={post.slug}>
                <PostCard.Image image={post.image} />
                <PostCard.Title title={post.title} />
                <PostCard.Subtitle subtitle={post.subtitle} />
            </PostCard.Link>
        </PostCard.Root>
    );
}

PostCard.Root = PostCardRoot;
PostCard.Category = PostCardCategory;
PostCard.Link = PostCardLink;
PostCard.Image = PostCardImage;
PostCard.Title = PostCardTitle;
PostCard.Subtitle = PostCardSubtitle;
