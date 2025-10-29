import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
