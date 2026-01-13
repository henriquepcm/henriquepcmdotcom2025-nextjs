import Image from "next/image";

const WP_URL = process.env.NEXT_PUBLIC_WP_URL;

if (!WP_URL) {
    throw new Error("NEXT_PUBLIC_WP_URL is not defined");
}

type FeaturedImageProps = {
    image: {
        altText: string;
        filePath: string;
    };
};

export default function BlogPostFeaturedImage({ image }: FeaturedImageProps) {
    return (
        <figure className="aspect-[600/630] w-full overflow-hidden md:aspect-[1200/630]">
            <Image
                alt={image.altText}
                priority
                src={`${WP_URL}/${image.filePath}`}
                width={1200}
                height={630}
                className="mt-8 h-full w-full object-cover object-right"
            ></Image>
        </figure>
    );
}
