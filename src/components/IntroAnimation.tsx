"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SEEN_KEY = "s73_intro_seen_v1";

function getLenis() {
  return (window as unknown as Record<string, unknown>).__lenis as
    | { stop: () => void; start: () => void }
    | undefined;
}

function unlockScroll() {
  document.body.style.overflow = "";
  getLenis()?.start();
}

export function IntroAnimation() {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const seen = sessionStorage.getItem(SEEN_KEY);
    if (seen) {
      setShow(false);
      unlockScroll();
      return;
    }
    setShow(true);
    document.body.style.overflow = "hidden";
    getLenis()?.stop();

    const t = setTimeout(() => {
      sessionStorage.setItem(SEEN_KEY, "1");
      setShow(false);
      unlockScroll();
    }, 2000);

    return () => {
      clearTimeout(t);
      unlockScroll();
    };
  }, []);

  useEffect(() => {
    if (!show) {
      unlockScroll();
    }
  }, [show]);

  return (
    <>
      {/* Cover to prevent hero flash before hydration */}
      {show && (
        <div className="fixed inset-0 z-[99] bg-background pointer-events-none" />
      )}
      <AnimatePresence>
        {show && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
          >
            {/* Logo reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
              animate={{
                opacity: [0, 1, 1, 1],
                scale: [0.92, 1, 1, 1.08],
                filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(0px)"],
              }}
              transition={{
                duration: 2,
                times: [0, 0.2, 0.85, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-[280px] md:w-[420px] h-[120px] md:h-[180px]"
            >
              <Image
                src="/logo_blanc.svg"
                alt="Studio 73"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 280px, 420px"
              />
            </motion.div>

            {/* Bottom curtain that slides up at exit */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "100%" }}
              exit={{
                y: "0%",
                transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
              }}
              className="absolute inset-0 bg-background"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
