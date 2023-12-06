import { RefObject, useEffect } from "react";

export default function useClickAwayListener<
  T extends HTMLElement = HTMLElement,
>(ref: RefObject<T>, setOpen: (state: boolean) => void) {
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, setOpen]);
}
