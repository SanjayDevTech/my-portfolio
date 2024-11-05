"use client";
import { useEffect, useRef } from "react"

export default function BlackWhite() {
  const ref = useRef<HTMLDivElement >(null);
  useEffect(() => {
    if (!ref.current) return;
    const blackWhite = ref.current;
    let x = 0, y = 15;
    const xMax = 15, yMax = 15;
    const xMin = -15, yMin = -15;
    const increment = 5;
    let xDirection = increment, yDirection = -increment;
    const interval = setInterval(() => {
      blackWhite.style.transform = `translate(${x}px, ${x}px)`;
      x += xDirection;
      y += yDirection;
      if (x >= xMax) xDirection = -increment;
      if (x < xMin) xDirection = increment;
      if (y >= yMax) yDirection = -increment;
      if (y < -yMin) yDirection = increment;

    }, 200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full absolute overflow-hidden opacity-10" ref={ref}>
      <div className="w-[400%] h-[400%] opacity-40 bg-black-white inset-[-200%]" />
    </div>
  )
}
