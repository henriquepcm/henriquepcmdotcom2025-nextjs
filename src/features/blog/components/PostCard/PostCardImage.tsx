import Image from "next/image";
import type { ImageType } from "../../types/types";

const WP_URL = process.env.NEXT_PUBLIC_WP_URL;

if (!WP_URL) {
    throw new Error("NEXT_PUBLIC_WP_URL is not defined");
}

export default function PostCardImage({ image }: { image: ImageType }) {
    return (
        <div className="overflow-hidden">
            <Image
                src={`${WP_URL}/${image.filePath}`}
                alt={image.altText}
                width={766}
                height={402}
                className="transition duration-300 group-hover:scale-105"
                unoptimized
            />
        </div>
    );
}
