import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface EaseInProps {
  children: React.ReactNode;
  duration?: number;
  fromDirection?: "top" | "right" | "bottom" | "left";
  offset?: number;
}

export const EaseIn: React.FC<EaseInProps> = ({
  children,
  duration = 1,
  fromDirection = "bottom",
  offset = 0,
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

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

  // Determine the initial position based on the fromDirection and offset
  const initialPosition = {
    top: { y: -offset, x: 0 },
    right: { y: 0, x: offset },
    bottom: { y: offset, x: 0 },
    left: { y: 0, x: -offset },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialPosition[fromDirection] }}
      animate={{ opacity: inView ? 1 : 0, y: 0, x: 0 }}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
