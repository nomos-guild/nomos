"use client";

import { useState } from "react";
import Container from "../components/Container";
import TaskCard from "../components/TaskCard";
import SidePanel from "../components/SidePanel";
import type { RoadmapPhase, TaskData } from "./types";

type RoadmapSectionProps = {
  roadmap: RoadmapPhase[];
};

export default function RoadmapSection({ roadmap }: RoadmapSectionProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);

  const handleTaskClick = (task: TaskData) => {
    setSelectedTask(task);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      <div className="py-8">
        <Container>
          <h2 className="text-3xl md:text-8xl font-bold mb-8 text-white">
            ROADMAP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmap.map((phase, phaseIndex) => (
              <div
                key={phase.name}
                className={
                  phaseIndex < roadmap.length - 1
                    ? "md:border-r md:border-white md:pr-8"
                    : ""
                }
              >
                <h3 className="text-xl font-bold bg-white text-black mb-4 px-4 py-2 block">
                  {phase.name}
                </h3>
                <div className="text-gray-400 text-sm mb-4">
                  {phase.description}
                </div>
                <div className="space-y-4">
                  {phase.tasks.map((task) => (
                    <TaskCard
                      key={task.title}
                      title={task.title}
                      status={task.status}
                      assignees={task.assignees}
                      date={task.date}
                      links={task.links}
                      onClick={() => handleTaskClick(task)}
                    >
                      {task.description}
                    </TaskCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {selectedTask && (
        <SidePanel
          isOpen={isPanelOpen}
          onClose={handleClosePanel}
          title={selectedTask.title}
        >
          <div className="space-y-0">
            <div className="pb-6">
              <span className="text-xs px-2 py-1 border border-gray-800 text-gray-400">
                {selectedTask.status.toUpperCase()}
              </span>
            </div>

            <div className="border-t border-gray-800"></div>

            <div className="pt-6">
              <h3 className="text-white font-medium mb-2">Description</h3>
              <p className="text-gray-300">{selectedTask.description}</p>
            </div>

            {(selectedTask.assignees || selectedTask.date) && (
              <>
                <div className="border-t border-gray-800 mt-6"></div>
                <div className="space-y-3 pt-6">
                  {selectedTask.assignees && selectedTask.assignees.length > 0 && (
                    <div>
                      <span className="text-gray-400 text-sm font-medium">
                        Charge:
                      </span>
                      <p className="text-white">
                        {selectedTask.assignees.join(", ")}
                      </p>
                    </div>
                  )}
                  {selectedTask.date && (
                    <div>
                      <span className="text-gray-400 text-sm font-medium">
                        Date:
                      </span>
                      <p className="text-white">{selectedTask.date}</p>
                    </div>
                  )}
                </div>
              </>
            )}

            {selectedTask.additionalContent && (
              <>
                <div className="border-t border-gray-800 mt-6"></div>
                <div className="pt-6 **:text-gray-300 [&_p]:mb-4 [&_h4]:text-white [&_h4]:font-medium [&_h4]:mb-2 [&_h4]:mt-6 [&_h4:first-of-type]:mt-0 [&_h4]:text-lg [&_h4]:border-t [&_h4]:border-gray-800 [&_h4]:pt-4 [&_h4:first-of-type]:border-t-0 [&_h4:first-of-type]:pt-0 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-2 [&_a]:text-white [&_a]:underline [&_a]:hover:text-gray-300 [&_strong]:text-white [&_code]:bg-gray-900 [&_code]:px-1 [&_code]:rounded">
                  {/* additionalContent is from controlled GitHub repo - trusted source */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedTask.additionalContent,
                    }}
                  />
                </div>
              </>
            )}

            {selectedTask.links && selectedTask.links.length > 0 && (
              <>
                <div className="border-t border-gray-800 mt-6"></div>
                <div className="flex flex-wrap gap-2 pt-6">
                  {selectedTask.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-white text-black border border-gray-300 rounded-none px-3 py-2 transition-colors hover:bg-black hover:text-white hover:border-white"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </SidePanel>
      )}
    </>
  );
}
