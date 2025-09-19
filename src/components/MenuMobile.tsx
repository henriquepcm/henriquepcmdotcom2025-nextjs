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
        className="hover:bg-brandprimary items-center justify-center p-1 duration-300 hover:rounded-full"
      >
        <BurgerIcon className="text-brandtextprimary size-6" />
      </button>

      <nav
        aria-label="Website mobile menu"
        className={`${
          isMobileMenuVisible
            ? "visible opacity-100"
            : "invisible rotate-45 opacity-0"
        } transition-translate-y bg-brandsurface border-brandborder absolute right-0 top-10 w-60 origin-top-right rounded-md border shadow-[-15px_20px_20px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out`}
      >
        <ul
          ref={menuRef}
          className="flex flex-col justify-center gap-5 p-10 text-[0.6rem] uppercase tracking-[0.15rem] text-white"
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
