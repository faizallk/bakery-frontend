import React, { useEffect, useRef, useState } from "react";

function ScrollReveal({
  children,
  delay = 0,
  duration = 450, // 700 se 450 = faster
  distance = 35,  // kam distance = quick & smooth
  className = "",
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          // Sirf ek baar animation
          observer.unobserve(element);
        }
      },
      {
        // Thoda jaldi animation start hogi
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: visible ? 1 : 0,

        transform: visible
          ? "translateY(0)"
          : `translateY(${distance}px)`,

        transition: `
          opacity ${duration}ms ease-out ${delay}ms,
          transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
        `,

        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;