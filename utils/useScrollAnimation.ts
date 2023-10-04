import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

export default function useScrollAnimation(margin?: string) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: margin || "0px 0px -200px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [ref, controls];
}
