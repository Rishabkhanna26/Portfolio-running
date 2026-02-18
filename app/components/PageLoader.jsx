"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const getLetterAnimation = (i) => ({
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  });

  const letters = ["R", "I", "S", "H", "A", "B"];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
          <div className="relative px-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="absolute -inset-20 sm:-inset-32 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
            />

            <div className="relative flex items-center gap-0.5 sm:gap-1 md:gap-2">
              {letters.map((letter, i) => {
                const animation = getLetterAnimation(i);
                return (
                  <motion.div key={i} {...animation} className="relative">
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                        {letter}
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        delay: i * 0.08 + 0.3,
                        duration: 0.4,
                      }}
                      className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left"
                    />
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="mt-4 sm:mt-6 md:mt-8 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-4 sm:mt-6 text-center"
            >
              <div className="flex items-center justify-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-teal-500/10 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
