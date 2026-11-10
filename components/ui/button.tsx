import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "dark" | "red" | "white";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export function Button({
  children,
  variant = "white",
  size = "md",
  showIcon = true,
  className = "",
  ...props
}: ButtonProps) {
  // Color themes
  const variantStyles = {
    white: "bg-white text-[#17191a] hover:bg-[#17191a] hover:text-white shadow-md",
    dark: "bg-[#17191a] text-white hover:bg-[#222526] shadow-md",
    red: "bg-[#ed292f] text-white hover:bg-[#17191a] shadow-md",
  }[variant];

  // Icon badge colors corresponding to variant
  const iconBadgeStyles = {
    white: "bg-[#ed292f] text-white",
    dark: "bg-[#ed292f] text-white",
    red: "bg-white text-[#ed292f]",
  }[variant];

  // Size variants
  const sizeStyles = {
    sm: "text-xs pl-3.5 pr-1.5 py-1.5 gap-2",
    md: "text-xs sm:text-sm pl-4 pr-1.5 py-1.5 gap-2.5",
    lg: "text-sm sm:text-base pl-5 pr-2 py-2 gap-3.5",
  }[size];

  const iconSizes = {
    sm: { box: "w-6 h-6 rounded-md", icon: 13, stroke: 2.2 },
    md: { box: "w-7 h-7 rounded-md", icon: 15, stroke: 2.4 },
    lg: { box: "w-8 h-8 sm:w-9 sm:h-9 rounded-md sm:rounded-lg", icon: 18, stroke: 2.4 },
  }[size];

  return (
    <a
      className={`group inline-flex items-center font-semibold rounded-lg transition-all duration-200 cursor-pointer ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showIcon && (
        <span
          className={`${iconSizes.box} ${iconBadgeStyles} grid place-items-center shrink-0 transition-transform duration-200 group-hover:scale-105`}
        >
          <ArrowUpRight
            size={iconSizes.icon}
            strokeWidth={iconSizes.stroke}
          />
        </span>
      )}
    </a>
  );
}
