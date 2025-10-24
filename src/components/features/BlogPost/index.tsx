import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import FeaturedImage from "./FeaturedImage";
import Header from "./Header";
import Meta from "./Meta";
import Subtitle from "./Subtitle";
import TableOfContents from "./TableOfContents";
import Text from "./Text";
import Title from "./Title";

export default function BlogPost({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-36 flex w-full items-center justify-center">
      <article className="flex w-11/12 flex-col xl:w-8/12">{children}</article>
    </div>
  );
}

BlogPost.Header = Header;
BlogPost.Title = Title;
BlogPost.Subtitle = Subtitle;
BlogPost.Meta = Meta;
BlogPost.FeaturedImage = FeaturedImage;
BlogPost.Content = Content;
BlogPost.Breadcrumb = Breadcrumb;
BlogPost.TableOfContents = TableOfContents;
BlogPost.Text = Text;
