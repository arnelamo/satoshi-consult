import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface StaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  duration?: number;
  fromDirection?: "top" | "right" | "bottom" | "left";
  offset?: number;
  staggerDelay?: number;
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  duration = 0.5,
  fromDirection = "bottom",
  offset = 10,
  staggerDelay = 0.2,
  className,
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const currentRef = ref.current; // Capture the current value of ref

    if (!currentRef) return; // Ensure ref is not null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1, // Adjust this value to trigger the animation earlier or later
      },
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          ease: "easeInOut",
          delay: i * staggerDelay,
        },
      }));
    }
  }, [inView, controls, duration, staggerDelay]);

  // Determine the initial position based on the fromDirection and offset
  const initialPosition = {
    top: { y: -offset, x: 0 },
    right: { y: 0, x: offset },
    bottom: { y: offset, x: 0 },
    left: { y: 0, x: -offset },
  };

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <motion.div
          custom={i}
          initial={{ opacity: 0, ...initialPosition[fromDirection] }}
          animate={controls}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
