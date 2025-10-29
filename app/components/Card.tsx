import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  blockPosition?: "top" | "middle" | "bottom";
};

export default function Card({ title, children, blockPosition = "top" }: CardProps) {
  // Define different block positions
  const blockStyles = {
    top: "before:top-0",
    middle: "before:top-1/2 before:-translate-y-1/2",
    bottom: "before:bottom-0"
  };

  return (
    <div className={`border border-gray-800 bg-black hover:border-white transition-colors duration-300 relative overflow-hidden before:absolute before:left-0 ${blockStyles[blockPosition]} before:h-16 before:w-4 before:bg-white`}>
      <div className="p-6 md:p-8 pl-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}