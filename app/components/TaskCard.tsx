import { ReactNode } from "react";

type TaskStatus = "done" | "in_progress" | "planned" | "upcoming";

type TaskCardProps = {
  title: string;
  children: ReactNode;
  status?: TaskStatus; // kept for backwards compatibility (hidden by default)
  owner?: string; // new owner tag, e.g., "Mesh" or "SIDAN Lab"
  href?: string; // optional link to make entire card clickable
  assignees?: string[];
  date?: string;
  links?: { label: string; url: string }[];
};

export default function TaskCard({ 
  title, 
  children, 
  status = "planned",
  owner,
  href,
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

  const CardInner = (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xl md:text-2xl">{title}</h4>
          {owner ? (
            <span className="text-xs px-2 py-1 bg-white text-black rounded-none border border-gray-300">
              {owner}
            </span>
          ) : null}
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
                className="text-xs bg-white text-black border border-gray-300 rounded-none px-2 py-1 transition-colors hover:bg-black hover:text-white hover:border-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
  );

  return (
    <div className={`border border-gray-800 bg-black transition-colors duration-300 transform transition-transform ease-in-out duration-300 hover:scale-[1.02] ${href ? 'hover:border-white cursor-pointer' : ''}`}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-white">
          {CardInner}
        </a>
      ) : (
          CardInner
      )}
    </div>
  );
}