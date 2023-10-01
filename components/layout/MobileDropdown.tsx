import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowRightIcon from "../icons/ArrowRightIcon";

function MobileDropdown({ children, menu, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <div
          className="my-2 flex items-center justify-between p-0"
          onClick={toggle}
        >
          {children}
          <ArrowRightIcon
            className={`${
              isOpen ? "-rotate-90" : "rotate-90"
            } invert transition`}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="relative left-0 top-0 bg-[#302782]"
          >
            <div className="flex h-full flex-col">
              {menu.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  className="my-4 px-2 text-2xl text-Neutral hover:text-purple-100"
                  onClick={onClick}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileDropdown;
