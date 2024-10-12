import React, { useState, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
  durationMs?: number;
};

export default function FadeInOnScroll({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  delayMs: delay = 0,
  durationMs: duration = 1000,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setIsVisible(true);
          else setIsVisible(false);
        }
      },
      { root: null, rootMargin, threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "fade-in" : "fade-out"}`}
      style={{
        transition: `opacity ${duration}ms ease-out ${delay}ms`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
