import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CardProps {
  // Container
  width?: string;
  height?: string;
  backgroundColor?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  className?: string;

  // Logo / Image
  logoSrc: string;
  logoWidth?: string;
  logoHeight?: string;
  logoAlt?: string;

  // Heading
  headingText: string;
  headingFont?: string;
  headingFontSize?: string;
  headingColor?: string;
  headingTracking?: string;

  // Description
  descriptionText: string;
  descriptionFont?: string;
  descriptionFontSize?: string;
  descriptionColor?: string;
  descriptionTracking?: string;
  descriptionSpacing?: string;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const defaults = {
  width: "260px",
  height: "auto",
  backgroundColor: "#ffffff",
  border: "1px solid",
  borderColor: "#E5E7EB",
  borderRadius: "16px",

  logoWidth: "52px",
  logoHeight: "52px",
  logoAlt: "Card logo",

  headingFont: "inherit",
  headingFontSize: "1.125rem",   // 18px
  headingColor: "#111827",
  headingTracking: "-0.01em",

  descriptionFont: "inherit",
  descriptionFontSize: "0.9rem", // ~14.4px
  descriptionColor: "#6B7280",
  descriptionTracking: "0em",
  descriptionSpacing: "8px",
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Card({
  width = defaults.width,
  height = defaults.height,
  backgroundColor = defaults.backgroundColor,
  border = defaults.border,
  borderColor = defaults.borderColor,
  borderRadius = defaults.borderRadius,
  className = "",

  logoSrc,
  logoWidth = defaults.logoWidth,
  logoHeight = defaults.logoHeight,
  logoAlt = defaults.logoAlt,

  headingText,
  headingFont = defaults.headingFont,
  headingFontSize = defaults.headingFontSize,
  headingColor = defaults.headingColor,
  headingTracking = defaults.headingTracking,

  descriptionText,
  descriptionFont = defaults.descriptionFont,
  descriptionFontSize = defaults.descriptionFontSize,
  descriptionColor = defaults.descriptionColor,
  descriptionTracking = defaults.descriptionTracking,
  descriptionSpacing = defaults.descriptionSpacing,
}: CardProps) {
  return (
    <div
      className={`
        group flex flex-col items-start
        p-6 gap-4
        cursor-default select-none
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)]
        ${className}
      `}
      style={{
        width,
        height,
        backgroundColor,
        border,
        borderColor,
        borderRadius,
      }}
    >
      {/* Logo */}
      <div
        className="
          flex items-center justify-center
          rounded-xl p-2
          bg-[#E1E5EA]
          transition-colors duration-300
          ml-[]
        "
      >
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={parseInt(logoWidth, 10) || 52}
          height={parseInt(logoHeight, 10) || 52}
          style={{ width: logoWidth, height: logoHeight, objectFit: "contain" }}
          priority={false}
          className=""
        />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        {/* Heading */}
        <h3
          className="font-semibold leading-snug"
          style={{
            fontFamily: headingFont,
            fontSize: headingFontSize,
            color: headingColor,
            letterSpacing: headingTracking,
          }}
        >
          {headingText}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed"
          style={{
            fontFamily: descriptionFont,
            fontSize: descriptionFontSize,
            color: descriptionColor,
            letterSpacing: descriptionTracking,
            marginTop: descriptionSpacing,
          }}
        >
          {descriptionText}
        </p>
      </div>
    </div>
  );
}