"use client";
import { motion, AnimatePresence } from "framer-motion";

export const FormWrapper = ({ children, step }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
