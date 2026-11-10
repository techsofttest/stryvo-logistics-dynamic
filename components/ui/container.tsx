import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`w-[calc(100%-2.5rem)] md:w-[calc(100%-3rem)] lg:w-[min(1440px,calc(100%-9vw))] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

