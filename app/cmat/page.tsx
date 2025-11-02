"use client";

import { useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import TaskCard from "../components/TaskCard";
import SimpleDivider from "../components/SimpleDivider";
import SidePanel from "../components/SidePanel";

type TaskData = {
  title: string;
  description: string;
  status: "done" | "in_progress" | "planned" | "upcoming";
  assignees?: string[];
  date?: string;
  links?: { label: string; url: string }[];
  additionalContent?: string; 
};

export default function Page() {
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
    <div className="bg-black">
      <div className="min-h-[40vh] pt-16 md:pt-24"> 
        <Container className="h-full">
          <div className="flex h-full flex-col justify-center py-6">
            <div className="flex max-w-full w-full flex-col gap-4 pl-2 md:pl-8 lg:pl-16">
              <div className="flex flex-col gap-3">
                <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[16rem] font-bold leading-[0.8] tracking-tighter text-white">
                  CMAT
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 overflow-hidden text-ellipsis max-w-full">
                  <span className="whitespace-nowrap sm:whitespace-normal md:whitespace-nowrap">
                    Cardano Multi Asset Treasury
                  </span>
                </p>
              </div>
              <div className="flex gap-6 mb-2">
                <div className="h-1 w-24 md:w-32 bg-white"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <div className="w-full mt-20">
        <img 
          src="/fiboblockz.svg" 
          alt="Fibonacci Blocks Pattern" 
          className="w-full h-auto"
        />
      </div>
      
      <div className="h-32 md:h-120"></div>
      
      <div className="py-8">
        <Container>
          <h2 className="text-3xl md:text-8xl font-bold mb-6 text-white">ABOUT</h2>
          
          <p className="text-gray-300 mb-8 max-w-3xl">
            Cardano&apos;s on-chain treasury (part of the Voltaire governance era) currently holds funds in ADA only.
            However, there is growing interest in allowing the treasury to support multiple assets.
            This initiative aims to outline the motivation and objectives as well as the planned steps ahead
            towards the establishment of an Cardano multi asset treasury.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card title="Purpose" blockPosition="top">
              <p>
                To improve Treasury sustainability by introducing a Multi Asset Treasury, allowing the Cardano Treasury to not only receive and distribute Ada but to handle a wide rnge of assets.
              </p>
            </Card>
            
            <Card title="Features" blockPosition="middle">
              <p>
                CMAT will introduce specific features which ensure a secure and stable management of treasury assets, while staying fully compatible to Cardano onchain governance (CIP1694)
              </p>
            </Card>
            
            <Card title="Benefits" blockPosition="bottom">
              <p>
                By implementing CMAT, the Treasury enables a wide range of economic possibilites and yet untapped opportunities
              </p>
            </Card>
          </div>
        </Container>
      </div>
      
    <div className="h-32 md:h-120"></div>

      <SimpleDivider width="full" thickness="thin" className="my-12" />
      
      <div className="py-8">
        <Container>
          <h2 className="text-3xl md:text-8xl font-bold mb-8 text-white">ROADMAP</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:border-r md:border-white md:pr-8">
              <h3 className="text-xl font-bold bg-white text-black mb-4 px-4 py-2 block">IDEATION</h3>
              <div className="text-gray-400 text-sm mb-4">
                Initial thoughts and documents to introduce the concept of a multi asset treasury.
              </div>
              <div className="space-y-4">
                <TaskCard 
                  title="Draft & Publish CMAT Forum post" 
                  status="done"
                  assignees={["Hinson", "Felix"]}
                  date="September"
                  links={[
                    { label: "Draft", url: "https://docs.google.com/document/d/1SCxDwppfsLyLpT-Rt5lmCQI04fP_dlwsVq2_jOBldm8/edit?tab=t.0" },
                    { label: "Forum", url: "https://forum.cardano.org/t/cardano-multi-asset-treasury-cmat/149984" }
                  ]}
                  onClick={() => handleTaskClick({
                    title: "Draft & Publish CMAT Forum post",
                    description: "Draft & publish an initial CMAT introduction post on the Cardano Forum",
                    status: "done",
                    assignees: ["Hinson", "Felix"],
                    date: "September",
                    links: [
                      { label: "Draft", url: "https://docs.google.com/document/d/1SCxDwppfsLyLpT-Rt5lmCQI04fP_dlwsVq2_jOBldm8/edit?tab=t.0" },
                      { label: "Forum", url: "https://forum.cardano.org/t/cardano-multi-asset-treasury-cmat/149984" }
                    ],
                    additionalContent: `
                      <h4>Context & Rationale</h4>
                      <p>This forum post serves as the initial public introduction to the Cardano Multi-Asset Treasury (CMAT) initiative, providing the community with background information and the motivation behind the proposal.</p>
                      
                      <h4>Key Objectives</h4>
                      <ul>
                        <li>Raise awareness about the limitations of the current ADA-only treasury</li>
                        <li>Present the benefits of multi-asset treasury support</li>
                        <li>Gather community feedback and concerns</li>
                        <li>Build consensus around the initiative</li>
                      </ul>
                      
                      <h4>Community Response</h4>
                      <p>The post received significant engagement from the Cardano community, with constructive feedback and questions that helped shape the subsequent CPS development.</p>
                    `
                  })}
                >
                  Draft & publish an initial CMAT introduction post on the Cardano Forum
                </TaskCard>
                
                <TaskCard 
                  title="Draft & Publish CMAT CPS" 
                  status="done"
                  assignees={["Hinson", "Felix", "Nicolas"]}
                  date="October"
                  links={[
                    { label: "Draft", url: "https://hackmd.io/@Mesh-Team/BkfaE1Z0ge" },
                    { label: "Github", url: "https://github.com/cardano-foundation/CIPs/pull/1103" }
                  ]}
                  onClick={() => handleTaskClick({
                    title: "Draft & Publish CMAT CPS",
                    description: "Draft & publish the initial CPS (Cardano Problem Statement)",
                    status: "done",
                    assignees: ["Hinson", "Felix", "Nicolas"],
                    date: "October",
                    links: [
                      { label: "Draft", url: "https://hackmd.io/@Mesh-Team/BkfaE1Z0ge" },
                      { label: "Github", url: "https://github.com/cardano-foundation/CIPs/pull/1103" }
                    ]
                  })}
                >
                  Draft & publish the initial CPS (Cardano Problem Statement)
                </TaskCard>
              </div>
            </div>
            
            <div className="md:border-r md:border-white md:pr-8">
              <h3 className="text-xl font-bold bg-white text-black mb-4 px-4 py-2 block">DESIGN</h3>
              <div className="text-gray-400 text-sm mb-4">
                Online and offline events to share ideas, get feedback and insights to design intitial concepts.
              </div>
              <div className="space-y-4">
                <TaskCard 
                  title="Ambassador CMAT Session" 
                  status="planned"
                  assignees={["Hinson", "Felix"]}
                  date="November 8"
                  links={[
                    { label: "Event", url: "https://ambassador-workshop.netlify.app/agenda/" }
                  ]}
                  onClick={() => handleTaskClick({
                    title: "Ambassador CMAT Session",
                    description: "Prepare and host a CMAT session at the Cardano Ambassadors workshop",
                    status: "planned",
                    assignees: ["Hinson", "Felix"],
                    date: "November 8",
                    links: [{ label: "Event", url: "https://ambassador-workshop.netlify.app/agenda/" }]
                  })}
                >
                  Prepare and host a CMAT session at the Cardano Ambassadors workshop
                </TaskCard>
                
                <TaskCard 
                  title="Cardano Summit Workshop" 
                  status="planned"
                  assignees={["Hinson", "Felix", "Nicolas"]}
                  date="November 11"
                  links={[
                    { label: "Event", url: "https://luma.com/geuyhoq1" }
                  ]}
                  onClick={() => handleTaskClick({
                    title: "Cardano Summit Workshop",
                    description: "Prepare and host a CMAT workshop at the Cardano Summit Day0 Event",
                    status: "planned",
                    assignees: ["Hinson", "Felix", "Nicolas"],
                    date: "November 11",
                    links: [{ label: "Event", url: "https://luma.com/geuyhoq1" }]
                  })}
                >
                  Prepare and host a CMAT workshop at the Cardano Summit Day0 Event
                </TaskCard>
                
                <TaskCard 
                  title="Cardano Summit Roundtable" 
                  status="planned"
                  assignees={["Hinson", "Nicolas", "Sam", "Yogi"]}
                  date="November 11"
                  onClick={() => handleTaskClick({
                    title: "Cardano Summit Roundtable",
                    description: "Prepare and host a CAMT Roundtable discussion on Summit Day0 Event",
                    status: "planned",
                    assignees: ["Hinson", "Nicolas", "Sam", "Yogi"],
                    date: "November 11"
                  })}
                >
                  Prepare and host a CAMT Roundtable discussion on Summit Day0 Event
                </TaskCard>
                
                <TaskCard 
                  title="CPS becomes CIP" 
                  status="planned"
                  assignees={["Hinson", "Felix", "Nicolas"]}
                  date="December"
                  onClick={() => handleTaskClick({
                    title: "CPS becomes CIP",
                    description: "Draft & submit the initial CMAT CIP (Cardano Improvement Proposal) based on the initial CMAT CPS (Cardano Problem Statement)",
                    status: "planned",
                    assignees: ["Hinson", "Felix", "Nicolas"],
                    date: "December"
                  })}
                >
                  Draft & submit the initial CMAT CIP (Cardano Improvement Proposal) based on the initial CMAT CPS (Cardano Problem Statement)
                </TaskCard>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold bg-white text-black mb-4 px-4 py-2 block">IMPLEMENTATION</h3>
              <div className="text-gray-400 text-sm mb-4">
                Respective governance actions to propose the implemention of the multi asset treasury on all required layers.
              </div>
              <div className="space-y-4">
                <TaskCard 
                  title="Submit CMAT Info Action" 
                  status="upcoming"
                  assignees={["Hinson"]}
                  date="January"
                  onClick={() => handleTaskClick({
                    title: "Submit CMAT Info Action",
                    description: "Submit an info action to introduce CMAT CIP to voters",
                    status: "upcoming",
                    assignees: ["Hinson"],
                    date: "January"
                  })}
                >
                  Submit an info action to introduce CMAT CIP to voters
                </TaskCard>
                
                <TaskCard 
                  title="Submit CMAT Constitution updates" 
                  status="upcoming"
                  assignees={["Hinson"]}
                  date="January"
                  onClick={() => handleTaskClick({
                    title: "Submit CMAT Constitution updates",
                    description: "Submit a \"Update to the constitution\" gov action according to CMAT requirements",
                    status: "upcoming",
                    assignees: ["Hinson"],
                    date: "January"
                  })}
                >
                  Submit a "Update to the constitution" gov action according to CMAT requirements
                </TaskCard>
                
                <TaskCard 
                  title="Submit CMAT Hard Fork Initiation" 
                  status="upcoming"
                  assignees={["Hinson"]}
                  date="January"
                  onClick={() => handleTaskClick({
                    title: "Submit CMAT Hard Fork Initiation",
                    description: "Submit a \"Hard Fork Initiation\" gov action to initiate the CMAT Hard Fork",
                    status: "upcoming",
                    assignees: ["Hinson"],
                    date: "January"
                  })}
                >
                  Submit a "Hard Fork Initiation" gov action to initiate the CMAT Hard Fork
                </TaskCard>
              </div>
            </div>
          </div>
        </Container>
      </div>

        <div className="h-32 md:h-120"></div>

      <SimpleDivider width="full" thickness="thin" className="my-12" />
      
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
                      <span className="text-gray-400 text-sm font-medium">Charge:</span>
                      <p className="text-white">{selectedTask.assignees.join(", ")}</p>
                    </div>
                  )}
                  {selectedTask.date && (
                    <div>
                      <span className="text-gray-400 text-sm font-medium">Date:</span>
                      <p className="text-white">{selectedTask.date}</p>
                    </div>
                  )}
                </div>
              </>
            )}
            
            {selectedTask.additionalContent && (
              <>
                <div className="border-t border-gray-800 mt-6"></div>
                <div className="pt-6 [&_*]:text-gray-300 [&_p]:mb-4 [&_h4]:text-white [&_h4]:font-medium [&_h4]:mb-2 [&_h4]:mt-6 [&_h4:first-of-type]:mt-0 [&_h4]:text-lg [&_h4]:border-t [&_h4]:border-gray-800 [&_h4]:pt-4 [&_h4:first-of-type]:border-t-0 [&_h4:first-of-type]:pt-0 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-2 [&_a]:text-white [&_a]:underline [&_a]:hover:text-gray-300 [&_strong]:text-white [&_code]:bg-gray-900 [&_code]:px-1 [&_code]:rounded">
                  <div dangerouslySetInnerHTML={{ __html: selectedTask.additionalContent }} />
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
    </div>
  );
}
