import React, { useEffect, useRef } from "react";
import { Variants, motion, useAnimation, useInView } from "framer-motion";

function Layers({ step, i, lang }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    margin: "0px 0px -300px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  const imageRightVariant: Variants = {
    initial: {
      opacity: 0,
      x: lang === "en" ? "5%" : "-5%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageLeftVariant: Variants = {
    initial: {
      opacity: 0,
      x: lang === "en" ? "-5%" : "5%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const descriptionVariant: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            staggerChildren: 0.1,
            when: "beforeChildren",
            duration: 0.2,
            ease: "easeOut",
          },
        },
        hidden: {
          opacity: 0,
          x:
            i == 1
              ? lang === "en"
                ? "1%"
                : "-1%"
              : lang === "en"
              ? "-1%"
              : "1%",
        },
      }}
      initial="hidden"
      key={step.title}
      animate={controls}
      className={`flex flex-col md:gap-8 ${
        i == 1 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <motion.div
        variants={i == 1 ? imageLeftVariant : imageRightVariant}
        className="relative mb-4 w-full"
      >
        {step.image}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        variants={descriptionVariant}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex max-w-xl basis-full flex-col gap-2"
      >
        <div className="relative flex items-center gap-2">
          {step.icon}
          <h3 className="h-full">{step.title}</h3>
        </div>
        <p className="">{step.description}</p>
      </motion.div>
    </motion.section>
  );
}

export default Layers;
