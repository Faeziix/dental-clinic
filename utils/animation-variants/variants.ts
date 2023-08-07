import { Variants } from "framer-motion";

type Args = {
  delay?: number;
  duration?: number;
  x?: number;
};

type VariantGenerator = (args?: Args) => Variants;

export const variantGenerator: VariantGenerator = ({
  delay = 0,
  duration = 0.7,
  x = 100,
} = {}) => ({
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      ease: "easeOut",
      delay: delay,
    },
  },
  hidden: {
    opacity: 0,
    x: x,
  },
});

export const textVariant: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};
