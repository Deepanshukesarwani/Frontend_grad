"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
  "/frame1.png",
  "/frame2.png",
  "/frame3.png",
  "/frame4.png",
  "/frame5.png",
  "/frame6.png",
  "/frame7.png",
  "/frame8.png",
  "/frame9.png",
  "/frame10.png",
  "/frame11.png",
  "/frame12.png",
  "/frame13.png",
  "/frame14.png",
];

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (visibleIndex < logos.length) {
      const timeout = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setShowSplash(false);
        onFinish();
      }, 1500); // Delay to allow exit animation
    }
  }, [visibleIndex]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }} // Final animation before loading main content
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Splash Frame ${index + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: index <= visibleIndex ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

