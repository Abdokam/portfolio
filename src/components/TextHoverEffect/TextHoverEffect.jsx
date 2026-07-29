import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./textHoverEffect.css";

function TextHoverEffect({
  text = "NURUI",
  duration = 0.2,
  className = "",
}) {
  const svgRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const [maskPosition, setMaskPosition] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();

    setMaskPosition({
      cx: `${((cursor.x - rect.left) / rect.width) * 100}%`,
      cy: `${((cursor.y - rect.top) / rect.height) * 100}%`,
    });
  }, [cursor]);

  return (
    <div className={`text-hover-container ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 1200 250"
        xmlns="http://www.w3.org/2000/svg"
        onMouseMove={(e) =>
          setCursor({
            x: e.clientX,
            y: e.clientY,
          })
        }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <defs>
          <linearGradient id="textGradient">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#3ca2fa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            r="18%"
            initial={{
              cx: "50%",
              cy: "50%",
            }}
            animate={maskPosition}
            transition={{
              duration,
            }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="mask">
            <rect
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>

        {/* Outline */}

        <motion.text
          x="50%"
          y="62%"
          textAnchor="middle"
          className="outline-text"
          initial={{
            strokeDasharray: 2500,
            strokeDashoffset: 2500,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.text>

        {/* Hover Glow */}

        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          className="hover-text"
          mask="url(#mask)"
          style={{
            opacity: hovered ? 1 : 0,
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export default TextHoverEffect;