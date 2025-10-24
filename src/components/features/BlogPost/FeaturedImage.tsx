import Image from "next/image";

type FeaturedImageProps = {
  image: {
    altText: string;
    filePath: string;
  };
};

export default function FeaturedImage({ image }: FeaturedImageProps) {
  return (
    <figure className="aspect-[600/630] w-full overflow-hidden md:aspect-[1200/630]">
      <Image
        alt={image.altText}
        src={`https://henriquepochmann1757952828696.1281916.meusitehostgator.com.br/${image.filePath}`}
        width={1200}
        height={630}
        className="mt-8 h-full w-full object-cover object-right"
      ></Image>
    </figure>
  );
}
