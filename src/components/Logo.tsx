interface BrandData {
     logo: string;
     link: string;
}

interface BrandDataProps {
     data: BrandData;
}

export default function Logo({ data }: BrandDataProps) {
     return (
          <a
               dangerouslySetInnerHTML={{ __html: data.logo }}
               href={data.link}
               aria-label="Go to the home section"
               className="w-20"
          ></a>
     );
}
