import { useEffect, RefObject } from "react";

export const useOutsideClick = (
  ref1: RefObject<HTMLUListElement | null>,
  ref2: RefObject<HTMLButtonElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;

      if (
        //Menu closes when the user clicks anywhere but the menu itself and the burger icon
        ref1.current &&
        !ref1.current.contains(target) &&
        ref2.current &&
        !ref2.current.contains(target)
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref1, ref2, callback]);
};
