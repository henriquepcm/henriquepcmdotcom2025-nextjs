import { useState, useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { BurgerIcon } from "./icons/BurgerIcon";
import { Menu } from "@/types/headerTypes";

export default function MenuMobile({ items, button }: Menu) {
     const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
     const menuRef = useRef<HTMLUListElement | null>(null);
     const menuIconRef = useRef<HTMLButtonElement | null>(null);

     function handleMenuVisibility() {
          setIsMobileMenuVisible((prev) => !prev);
     }

     useOutsideClick(menuRef, menuIconRef, () => setIsMobileMenuVisible(false));

     return (
          <div className="relative lg:hidden">
               <button
                    aria-label="open the mobile menu"
                    ref={menuIconRef}
                    onClick={handleMenuVisibility}
                    className="hover:rounded-full items-center p-1 justify-center duration-300 hover:bg-henriquepcmpink"
               >
                    <BurgerIcon className="size-6 text-white" />
               </button>

               <nav
                    aria-label="Website mobile menu"
                    className={`${
                         isMobileMenuVisible
                              ? "opacity-100 visible"
                              : "rotate-45 opacity-0 invisible"
                    } bg-henriquepcmdarkpurple border border-henriquepcmbasepurple w-60 absolute right-0 top-10 rounded-md shadow-[-15px_20px_20px_rgba(0,0,0,0.4)] transition-all transition-translate-y duration-300 ease-in-out origin-top-right`}
               >
                    <ul
                         ref={menuRef}
                         className="flex flex-col justify-center p-10 gap-5 uppercase text-[0.6rem] text-white tracking-[0.15rem]"
                    >
                         {items.map((item) => {
                              const excluded = ["Footer", "Header", "Contact"];

                              if (excluded.includes(item.title)) {
                                   return null;
                              }
                              return (
                                   <li key={item.id}>
                                        <a
                                             onClick={handleMenuVisibility}
                                             className="block"
                                             href={`#${item.title}`}
                                             aria-label={`Go to the ${item.title} section"`}
                                        >
                                             {item.title}
                                        </a>
                                   </li>
                              );
                         })}
                         <li>
                              <a
                                   onClick={handleMenuVisibility}
                                   className="block"
                                   href={button.link}
                              >
                                   {button.label}
                              </a>
                         </li>
                    </ul>
               </nav>
          </div>
     );
}
