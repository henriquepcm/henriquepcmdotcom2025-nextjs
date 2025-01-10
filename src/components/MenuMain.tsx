import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ButtonContact from "./ButtonContact";

interface ItemProps {
     id: string;
     label: string;
     link: string;
}

interface ButtonProps {
     link: string;
     label: string;
}

interface MenuMainProps {
     items?: ItemProps[];
     button?: ButtonProps;
     loading: boolean;
}

export default function MenuMain({ items, button, loading }: MenuMainProps) {
     if (loading)
          return (
               <div className="hidden lg:flex flex-row md:gap-5 lg:gap-10 items-center">
                    <ul className="flex flex-row md:gap-5 lg:gap-10">
                         {[...Array(4)].map((_, index) => (
                              <li key={index}>
                                   <Skeleton width={80} height={28} />
                              </li>
                         ))}
                    </ul>
                    <Skeleton width={110} height={38} />
               </div>
          );
     return (
          <nav
               aria-label="Website main menu"
               className="hidden lg:flex flex-row md:gap-5 lg:gap-10 items-center"
          >
               <ul className="flex flex-row md:gap-5 lg:gap-10 uppercase text-[0.6rem] text-white tracking-[0.15rem]">
                    {items &&
                         items.map((item) => {
                              return (
                                   <li key={item.id}>
                                        <a
                                             href={item.link}
                                             aria-label={`Go to the ${item.label} section"`}
                                        >
                                             {item.label}
                                        </a>
                                   </li>
                              );
                         })}
               </ul>
               {button && <ButtonContact button={button} />}
          </nav>
     );
}
