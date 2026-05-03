// from 21st.dev — Text Marque (adapté)
"use client";

import { useRef, useEffect, forwardRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

interface TextMarqueeProps {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
  scrollDependent?: boolean;
  delay?: number;
  /** Nombre de répétitions du contenu */
  repeat?: number;
}

export const TextMarquee = forwardRef<HTMLDivElement, TextMarqueeProps>(
  (
    {
      children,
      baseVelocity = -3,
      className,
      scrollDependent = true,
      delay = 0,
      repeat = 4,
    },
    ref
  ) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
      clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

    const directionFactor = useRef<number>(1);
    const hasStarted = useRef(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        hasStarted.current = true;
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    useAnimationFrame((t, delta) => {
      if (!hasStarted.current) return;

      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (scrollDependent) {
        if (velocityFactor.get() < 0) {
          directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
          directionFactor.current = 1;
        }
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        ref={ref}
        className="overflow-hidden whitespace-nowrap flex flex-nowrap"
      >
        <motion.div
          className="flex whitespace-nowrap gap-10 flex-nowrap"
          style={{ x }}
        >
          {Array.from({ length: repeat }).map((_, i) => (
            <span key={i} className={cn("block", className)}>
              {children}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }
);

TextMarquee.displayName = "TextMarquee";
