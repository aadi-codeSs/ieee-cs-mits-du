"use client";

import React, { CSSProperties } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  padding?: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  borderRadius?: string;
  fontSize?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  width,
  height,
  padding = "0.625rem 1.5rem",
  bgColor = "#0A2A4A",
  textColor = "#ffffff",
  hoverBgColor = "#154C79",
  hoverTextColor,
  borderRadius = "0.5rem",
  fontSize = "0.9375rem",
  className = "",
  disabled = false,
  type = "button",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const style: CSSProperties = {
    fontFamily: "inter",
    letterSpacing: "-0.025em",
    fontWeight: 500,
    width,
    height,
    padding: width && height ? undefined : padding,
    backgroundColor: isHovered && !disabled ? hoverBgColor : bgColor,
    color: isHovered && hoverTextColor && !disabled ? hoverTextColor : textColor,
    borderRadius,
    fontSize,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
      className={[
        "inline-flex items-center justify-center font-inter",
        "font-medium tracking-wide",
        "border-none outline-none",
        "transition-all duration-200 ease-in-out",
        "select-none",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
        "active:scale-[0.97]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;


// ─── Example Usage ───────────────────────────────────────────────────────────
//
// import Button from "@/components/Button";
//
// export default function HeroSection() {
//   return (
//     <div className="flex gap-4">
//       {/* Primary */}
//       <Button
//         text="Join IEEE"
//         width="200px"
//         height="50px"
//         bgColor="#0A2A4A"
//         textColor="white"
//         hoverBgColor="#154C79"
//         onClick={() => console.log("Joining...")}
//       />
//
//       {/* Outline-style via className */}
//       <Button
//         text="Learn More"
//         padding="0.625rem 2rem"
//         bgColor="transparent"
//         textColor="#0A2A4A"
//         hoverBgColor="#0A2A4A"
//         hoverTextColor="white"
//         className="border border-[#0A2A4A]"
//       />
//
//       {/* Pill shape */}
//       <Button
//         text="Get Started"
//         padding="0.75rem 2.5rem"
//         bgColor="#2563EB"
//         hoverBgColor="#1D4ED8"
//         borderRadius="9999px"
//         fontSize="1rem"
//       />
//
//       {/* Disabled state */}
//       <Button
//         text="Unavailable"
//         bgColor="#0A2A4A"
//         textColor="white"
//         disabled
//       />
//     </div>
//   );
// }