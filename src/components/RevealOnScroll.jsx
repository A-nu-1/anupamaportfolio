import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");

          // Once revealed, we don't need to keep watching it.
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
};