import { Menu } from "@/types/headerTypes";
import ButtonContact from "./ButtonContact";

export default function MenuMain({ items, button }: Menu) {
  return (
    <nav
      aria-label="Website main menu"
      className="hidden flex-row items-center md:gap-5 lg:flex lg:gap-10"
    >
      <ul className="flex flex-row text-[0.6rem] uppercase tracking-[0.15rem] text-white md:gap-5 lg:gap-10">
        {items.map((item) => {
          const excluded = ["Footer", "Header", "Contact"];

          if (excluded.includes(item.title)) {
            return null;
          }
          return (
            <li key={item.id}>
              <a
                href={`#${item.title}`}
                aria-label={`Go to the ${item.title} section"`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ButtonContact button={button} />
    </nav>
  );
}
