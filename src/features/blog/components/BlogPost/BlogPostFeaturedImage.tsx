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
        <figure className="w-full overflow-hidden">
            <Image
                alt={image.altText}
                priority
                src={`${WP_URL}/${image.filePath}`}
                width={1280}
                height={672}
                className="mt-8"
                unoptimized
            ></Image>
        </figure>
    );
}
