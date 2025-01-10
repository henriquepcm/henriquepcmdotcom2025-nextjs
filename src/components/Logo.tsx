import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface BrandProps {
     logo: string;
     link: string;
}

interface LogoProps {
     brand?: BrandProps;
     loading: boolean;
}

export default function Logo({ brand, loading }: LogoProps) {
     if (loading) return <Skeleton width={80} height={28} />;
     if (brand)
          return (
               <a
                    dangerouslySetInnerHTML={{ __html: brand.logo }}
                    href={brand.link}
                    aria-label="Go to the home section"
                    className="w-20"
               ></a>
          );
}
