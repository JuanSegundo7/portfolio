"use client";

import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

export function WavyBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const primaryColor = "#71C56F";
  const lineColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const accentLineColor = isDark
    ? "rgba(113, 197, 111, 0.2)"
    : "rgba(113, 197, 111, 0.3)";

  const generateWavyLines = () => {
    const lines = [];
    const numberOfLines = 30;

    for (let i = 0; i < numberOfLines; i++) {
      const isAccent = i % 4 === 0;
      const color = isAccent ? accentLineColor : lineColor;
      const opacity = 0.1 + (i / numberOfLines) * 0.6;
      const height = 460 + i * 10;

      const baseAmplitude = 30 + (i % 7) * 10;
      const amplitude = baseAmplitude;

      const animationDuration = 5 + Math.random() * 3;
      const delay = i * 0.08 + Math.random() * 0.2;

      const createWavePath = (modifier = 1, offsetModifier = 0) => {
        const offset = 50 * offsetModifier;

        return `
          M${0 + offset},${height - amplitude * 0.3 * modifier} 
          C${150 + offset},${height - amplitude * 0.4 * modifier} 
          ${300 + offset},${height + amplitude * 0.4 * modifier} 
         ${450 + offset},${height - amplitude * 0.4 * modifier} 
          S${750 + offset},${height + amplitude * 0.3 * modifier} 
          ${900 + offset},${height - amplitude * 0.4 * modifier} 
          S${1200 + offset},${height + amplitude * 0.3 * modifier} 
          ${1350 + offset},${height - amplitude * 0.4 * modifier} 
          S${1650 + offset},${height + amplitude * 0.4 * modifier} 
          ${1800 + offset},${height - amplitude * 0.4 * modifier} 
          S${2100 + offset},${height + amplitude * 0.4 * modifier} 
          ${2250 + offset},${height - amplitude * 0.4 * modifier} 
          S${2550 + offset},${height + amplitude * 0.3 * modifier} 
          ${2700 + offset},${height}
          `

          .replace(/\s+/g, " ")
          .trim();
      };

      const initialPath = createWavePath(1, 0);

      lines.push(
        <motion.path
          key={i}
          d={initialPath}
          stroke={isAccent ? primaryColor : color}
          strokeWidth={isAccent ? 1.5 : 1}
          strokeOpacity={opacity}
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: 1,
            d: [
              initialPath,
              createWavePath(1.3, -0.2),
              createWavePath(0.8, 0.2),
              createWavePath(1.1, -0.1),
              createWavePath(0.9, 0.1),
              initialPath,
            ],
          }}
          transition={{
            opacity: { duration: 0.2, delay },
            pathLength: { duration: 2, delay },
            d: {
              repeat: Infinity,
              duration: animationDuration,
              ease: "easeInOut",
              delay,
            },
          }}
        />
      );
    }

    return lines;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 2700 800"
        preserveAspectRatio="none"
        style={{ height: "70%" }}
      >
        {generateWavyLines()}
      </svg>
    </div>
  );
}
