"use client";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const AyeFinTextOverlay = ({
  onComplete,
}: {
  onComplete: () => void;
}) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const svgRef = React.useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-10 flex items-center justify-center bg-black/20"
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 400 120"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none"
      >
        <defs>
          <linearGradient
            id="ayefinGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            <stop offset="0%" stopColor="#46AEE2" />
            <stop offset="25%" stopColor="#214C73" />
            <stop offset="50%" stopColor="#0F2740" />
            <stop offset="75%" stopColor="#5CCF8A" />
            <stop offset="100%" stopColor="#46AEE2" />
          </linearGradient>

          <motion.radialGradient
            id="ayefinRevealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{ duration: 0, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="ayefinTextMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#ayefinRevealMask)"
            />
          </mask>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.5"
          className="fill-transparent stroke-white/30 font-bold text-8xl md:text-9xl"
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          AyeFin
        </text>
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.5"
          className="fill-transparent stroke-white/50 font-bold text-8xl md:text-9xl"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: 1000,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
          AyeFin
        </motion.text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#ayefinGradient)"
          strokeWidth="0.5"
          mask="url(#ayefinTextMask)"
          className="fill-transparent font-bold text-8xl md:text-9xl"
        >
          AyeFin
        </text>
      </svg>
    </motion.div>
  );
};
