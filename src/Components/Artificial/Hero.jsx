import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ComponentOne() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Move paragraph down and fade it out as you scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="h-screen bg-blue-200 flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="text-center">
        <h1 className="text-4xl font-bold">Component One</h1>
        <p className="mt-4 text-xl">I’m a paragraph moving to Component Two.</p>
      </motion.div>
    </div>
  );
}
