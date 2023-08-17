import { useEffect } from "react";

export default function useClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(e);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
