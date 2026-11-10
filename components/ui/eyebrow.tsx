import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  theme?: "light" | "dark";
  slashColor?: "red" | "white";
  className?: string;
}

export function Eyebrow({
  children,
  theme = "dark",
  slashColor,
  className = "",
}: EyebrowProps) {
  const textColor = theme === "light" ? "text-white/88" : "text-[#55595a]";
  const slashCls = slashColor === "white" ? "text-white" : "text-[#ed292f]";

  return (
    <p
      className={`flex items-center gap-2 m-0 mb-5 sm:mb-6.5 text-sm font-semibold tracking-wider leading-snug ${textColor} ${className}`}
    >
      <span className={`${slashCls} font-black text-base tracking-tighter select-none inline-block shrink-0`}>
        //
      </span>
      {children}
    </p>
  );
}
