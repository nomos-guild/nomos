import { ReactNode } from "react";

type ObjectiveCardProps = {
  title: string;
  objective: string;
  purpose: string;
};

export default function ObjectiveCard({ title, objective, purpose }: ObjectiveCardProps) {
  return (
    <div className="border border-gray-800 bg-black hover:border-white transition-duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="space-y-4">
          <div>
            <p className="text-white font-medium mb-1">Objective:</p>
            <p className="text-gray-300">{objective}</p>
          </div>
          <div>
            <p className="text-white font-medium mb-1">Purpose:</p>
            <p className="text-gray-300">{purpose}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
