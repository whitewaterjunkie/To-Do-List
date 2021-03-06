import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Color from "./Color";
import { GrClose } from "react-icons/gr";
export default function ColorWrapper({ color, setColor }) {
  const [show, setShow] = useState(false);

  const initial = -42;
  const toggle = () => {
    setShow(!show);
  };
  const active = {
    backgroundColor:
      color[0] === "yellow"
        ? "#efb93b"
        : color[0] === "red"
        ? "#e46f6f"
        : color[0] === "blue"
        ? "#5e9fe0"
        : color[0] === "gray"
        ? "#9e9e9e"
        : color[0] === "green"
        ? "#3f5e32"
        : color[0] === "pink"
        ? "#dd7cad"
        : color[0] === "purple"
        ? "#a45dca"
        : "",
  };
  return (
    <motion.div className="absolute bottom-5 left-5 ">
      <AnimatePresence>
        {!show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-3 items-center cursor-pointer"
            onClick={toggle}
          >
            <div
              className={`w-4 h-4 md:w-8 md:h-8 rounded-[50%]`}
              style={active}
            ></div>
            <p className="dark:text-white transition duration-300 text-[.5rem] md:text-xs">
              {color[0]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <div className="flex gap-3 absolute bottom-0 items-center">
            {color.map((e, i) => {
              return (
                <Color
                  color={e}
                  key={e}
                  initial={initial}
                  setColor={setColor}
                  index={i}
                  onClick={toggle}
                  colors={color}
                />
              );
            })}
            <motion.p
              onClick={toggle}
              initial={{ x: `${initial * (color.length + 1)}px`, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: `${initial * (color.length + 1)}px`, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                duration: 0.3,
              }}
              className="text-[.5rem] md:text-sm dark:text-[#cecece] cursor-pointer bg-[#6b6b6b32] rounded-[50%] w-4 h-4 md:w-8 md:h-8 flex justify-center items-center "
            >
              <GrClose />
            </motion.p>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
