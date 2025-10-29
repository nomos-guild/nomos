import { ReactNode } from "react";

type TaskStatus = "done" | "in_progress" | "planned" | "upcoming";

type TaskCardProps = {
  title: string;
  children: ReactNode;
  status?: TaskStatus;
  assignees?: string[];
  date?: string;
  links?: { label: string; url: string }[];
};

export default function TaskCard({ 
  title, 
  children, 
  status = "planned",
  assignees,
  date,
  links
}: TaskCardProps) {
  // Status styles
  const statusStyles = {
    done: "bg-white text-black",
    in_progress: "bg-gray-300 text-black",
    planned: "bg-gray-700 text-white",
    upcoming: "border border-white text-white"
  };

  const statusLabels = {
    done: "Done",
    in_progress: "In Progress",
    planned: "Planned",
    upcoming: "Upcoming"
  };

  return (
    <div className="border border-gray-800 bg-black hover:border-white transition-duration-300">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium">{title}</h4>
          <span className={`text-xs px-2 py-1 rounded-full ${statusStyles[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
        
        {/* Task meta information */}
        {(assignees || date) && (
          <div className="flex flex-col text-xs text-gray-400 mb-3">
            {assignees && assignees.length > 0 && (
              <div className="mb-1">
                <span className="font-medium">Charge:</span> {assignees.join(", ")}
              </div>
            )}
            {date && (
              <div>
                <span className="font-medium">Date:</span> {date}
              </div>
            )}
          </div>
        )}
        
        {/* Task description */}
        <div className="text-gray-300 text-sm mb-3">
          {children}
        </div>
        
        {/* Task links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs bg-gray-900 hover:bg-gray-800 text-white px-2 py-1 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}