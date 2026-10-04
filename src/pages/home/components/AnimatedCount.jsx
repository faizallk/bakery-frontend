import React, { useEffect, useState } from "react";

function AnimatedCount({
  end = 0,
  start = false,
  duration = 1200,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Jab tak section visible nahi hai
    if (!start) {
      setCount(0);
      return;
    }

    // Har baar animation 0 se
    setCount(0);

    if (end <= 0) {
      return;
    }

    // Kitne steps me count complete hoga
    const totalSteps = end;

    // Minimum 50ms rakhenge
    const intervalTime = Math.max(
      duration / totalSteps,
      50
    );

    let currentCount = 0;

    const counter = setInterval(() => {
      currentCount += 1;

      setCount(currentCount);

      if (currentCount >= end) {
        clearInterval(counter);
        setCount(end);
      }
    }, intervalTime);

    return () => {
      clearInterval(counter);
    };
  }, [start, end, duration]);

  return <span>{count}</span>;
}

export default AnimatedCount;