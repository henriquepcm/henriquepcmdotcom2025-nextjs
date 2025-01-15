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
     items: ItemProps[];
     button: ButtonProps;
}

export default function MenuMain({ items, button }: MenuMainProps) {
     return (
          <nav
               aria-label="Website main menu"
               className="hidden lg:flex flex-row md:gap-5 lg:gap-10 items-center"
          >
               <ul className="flex flex-row md:gap-5 lg:gap-10 uppercase text-[0.6rem] text-white tracking-[0.15rem]">
                    {items.map((item) => {
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
               <ButtonContact button={button} />
          </nav>
     );
}
