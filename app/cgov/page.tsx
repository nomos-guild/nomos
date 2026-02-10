"use client";

import Container from "../components/Container";
import SimpleDivider from "../components/SimpleDivider";
import TaskCard from "../components/TaskCard";
import SidePanel from "../components/SidePanel";
import { useEffect, useRef, useState } from "react";

type TaskData = {
  title: string;
  description: string;
  status?: "done" | "in_progress" | "planned" | "upcoming";
  objective?: string;
  developers?: string[];
  link?: { label: string; url: string };
  cardPreview: string;
  date?: string;
};

type CardCategory = {
  title: string;
  description: string;
  cards: TaskData[];
};

const cardData: CardCategory[] = [
  {
    title: "Tools",
    description: "Open source tools for onchain governance.",
    cards: [
      {
        title: "Proposal Viewer Tool",
        cardPreview: "To read proposals and voting rationales and to get voting overview & insights",
        description: "To read proposals and voting rationales and to get voting overview & insights",
        status: "done", 
        date: "January 2025",
        objective: "Provide a fancy & friendly interface to view and analyze onchain proposals",
        developers: ["Mesh & SIDAN Lab"],
        link: { label: "More", url: "https://app.cgov.io/" }
      },
      {
        title: "Proposal Voting Tool",
        cardPreview: "A Tool for DReps to submit votes on submitted onchain proposals",
        description: "A Tool for DReps to submit votes on submitted onchain proposals",
        status: "done", 
        date: "February 2026",
        objective: "Facilitate voting for DReps on governance proposals",
        developers: ["Mesh & SIDAN Lab"],
        link: { label: "More", url: "#" }
      },
      {
        title: "Proposal Submission Tool",
        cardPreview: "A tool to submit any types of onchain proposals through a deposit crowdfunding smart contract",
        description: "A tool to submit any types of onchain proposals through a deposit crowdfunding smart contract",
        status: "in_progress", 
        date: "February - March 2026",
        objective: "To make it more easy and financially affordable for anyone to submit onchain proposals through a smart contract feature which allows anyone to contribute to the deposit needed to submit a onchain proposal",
        developers: ["Mesh & SIDAN Lab"],
        link: { label: "More", url: "#" }
      }
    ]
  },
  {
    title: "Platform",
    description: "CGOV Platform features & enhancements",
    cards: [
      {
        title: "DRp & Treasury Dashboards",
        cardPreview: "Dashboards to track and display DRep and treasury statistics and metrics",       
        description: "Dashboards to track and display DRep and treasury statistics and metrics",
        status: "in_progress", 
        date: "February - March 2026",
        objective: "Provide comprehensive treasury insights and analytics",
        developers: ["Mesh & SIDAN Lab"],
        link: { label: "More", url: "#" }
      },
      {
        title: "User Accounts & Onchain ID",
        cardPreview: "Allowing users to create individual & team accounts via a onchain ID solution",
        description: "Allowing users to create individual & team accounts via a onchain ID solution",
        status: "planned", 
        date: "TBD",
        objective: "To ensure quality engagments and to prevent bot activities taking over important discussions",
        developers: ["Mesh & SIDAN Lab"],
        link: { label: "More", url: "#" }
      },
      {
        title: "Proposal Forum",
        cardPreview: "Proposal forum feature for users to discuss proposals",
        description: "To display Proposals and details as well as a forum feature to discuss proposals",
        status: "planned", 
        date: "TBD",
        objective: "To have a overview on all past and active proposals and to allow users with onchin id to engage in proposal specific threads aka forum",
        developers: ["Mesh & SIDAN Lab"],
        link: { label: "More", url: "#" }
      }
    ]
  },
  {
    title: "Resources",
    description: "Helpful platform resources for developers and users",
    cards: [
      {
        title: "Platform APIs",
        cardPreview: "Well documented APIs to allow 3rd party integrations with CGOV platform",       
        description: "Well documented APIs to allow 3rd party integrations with CGOV platform",
        status: "planned", 
        date: "TBD",
        objective: "Enable third-party integrations through comprehensive APIs",
        developers: ["Mesh & SIDAN Lab"],
        link: { label: "More", url: "#" }
      },
      {
        title: "Docs & Guides",
        cardPreview: "Comprehensive documentation and guides for users and developers",       
        description: "Comprehensive documentation and guides for users and developers",
        status: "planned", 
        date: "TBD",
        objective: "Provide clear documentation for platform users and developers",
        developers: ["Mesh & SIDAN Lab"],
        link: { label: "More", url: "#" }
      }
    ]
  }
];

export default function Page() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);

  const handleTaskClick = (task: TaskData) => {
    setSelectedTask(task);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleCards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black">
      <div className="min-h-[40vh] pt-16 md:pt-24">
        <Container className="h-full">
          <div className="flex h-full flex-col justify-center py-6">
            <div className="flex max-w-full w-full flex-col gap-4 pl-2 md:pl-8 lg:pl-16">
              <div className="flex flex-col gap-3">
                <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[16rem] font-bold leading-[0.8] tracking-tighter text-white">
                  CGOV
                </h1>
              </div>
              <div className="flex gap-6 mb-2">
                <div className="h-1 w-24 md:w-32 bg-white"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
     <div className="w-full">
        <img 
          src="/fiboblockz.svg" 
          alt="Fibonacci Blocks Pattern" 
          className="w-full h-auto"
        />
      </div>
      
      <div className="h-64 md:h-96" />

      <div className="py-16 md:py-24">
        <Container>
          <h2 className="text-5xl md:text-8xl font-bold mb-9 text-white">ROADMAP . . .</h2>
          <p className="text-gray-400 max-w-3xl mb-9">
            CGOV will build and assemble a wide range of specific tools to support engagements at Cardano Onchain Governance, once tools are shipped, we will merge everything into a common platform, aka CGOV
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={categoryIndex < cardData.length - 1 ? "md:border-r md:border-white md:pr-8" : ""}
              >
                <h3 className="text-2xl md:text-3xl font-bold bg-white text-black mb-4 px-4 py-2 block">
                  {category.title}
                </h3>
                <div className="text-gray-400 text-sm mb-4">{category.description}</div>
                <div className="space-y-4">
                  {category.cards.map((card, cardIndex) => (
                    <TaskCard
                      key={cardIndex}
                      title={card.title}
                      status={card.status}
                      date={card.date}
                      onClick={() => handleTaskClick(card)}
                    >
                      {card.cardPreview}
                    </TaskCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="h-64 md:h-96" />

      <div className="py-16 md:py-24">
        <Container>
          <h2 className="text-5xl md:text-8xl font-bold mb-9 text-white">DEPLOYMENT FLOW . . .</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            The CGOV platform will be deployed in phases, starting with core tools and progressing to integrated platform features.
          </p>

          {/* V1 Section */}
          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white text-black px-6 py-3 text-2xl md:text-4xl font-bold">
                V1
              </div>
              <div className="h-1 flex-1 bg-white"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="relative">
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 border border-white text-white bg-black">
                    MILESTONE 1
                  </span>
                </div>
                <TaskCard
                  title="Proposal Viewer Tool"
                  onClick={() => handleTaskClick(cardData[0].cards[0])}
                >
                  {cardData[0].cards[0].cardPreview}
                </TaskCard>
              </div>
              
              <div className="relative">
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 border border-white text-white bg-black">
                    MILESTONE 2
                  </span>
                </div>
                <TaskCard
                  title="Proposal Submission Tool"
                  onClick={() => handleTaskClick(cardData[0].cards[1])}
                >
                  {cardData[0].cards[1].cardPreview}
                </TaskCard>
              </div>
              
              <div className="relative">
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 border border-white text-white bg-black">
                    MILESTONE 3
                  </span>
                </div>
                <TaskCard
                  title="Proposal Voting Tool"
                  onClick={() => handleTaskClick(cardData[0].cards[2])}
                >
                  {cardData[0].cards[2].cardPreview}
                </TaskCard>
              </div>
            </div>
          </div>

    

          {/* V2 Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white text-black px-6 py-3 text-2xl md:text-4xl font-bold">
                V2
              </div>
              <div className="h-1 flex-1 bg-white"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="relative">
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 border border-white text-white bg-black">
                    MILESTONE 1
                  </span>
                </div>
                <TaskCard
                  title="User Accounts & Onchain ID"
                  onClick={() => handleTaskClick(cardData[1].cards[0])}
                >
                  {cardData[1].cards[0].cardPreview}
                </TaskCard>
              </div>
              
              <div className="relative">
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 border border-white text-white bg-black">
                    MILESTONE 2
                  </span>
                </div>
                <TaskCard
                  title="Forum"
                  onClick={() => handleTaskClick(cardData[1].cards[1])}
                >
                  {cardData[1].cards[1].cardPreview}
                </TaskCard>
              </div>
              
              <div className="relative">
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 border border-white text-white bg-black">
                    MILESTONE 3
                  </span>
                </div>
                <TaskCard
                  title="Treasury Dashboard & Analytics"
                  onClick={() => handleTaskClick(cardData[1].cards[2])}
                >
                  {cardData[1].cards[2].cardPreview}
                </TaskCard>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="h-64 md:h-96" />

      {selectedTask && (
        <SidePanel
          isOpen={isPanelOpen}
          onClose={handleClosePanel}
          title={selectedTask.title}
        >
          <div className="space-y-0">
            {/* Status Section */}
            {selectedTask.status && (
              <>
                <div className="pb-6">
                  <span className={`text-xs px-3 py-1 border ${
                    selectedTask.status === "done" 
                      ? "bg-white text-black border-white" 
                      : selectedTask.status === "in_progress"
                      ? "bg-white text-black border-white"
                      : "border-white text-white"
                  }`}>
                    {selectedTask.status === "planned" ? "PLANNED" : selectedTask.status === "in_progress" ? "IN PROGRESS" : selectedTask.status === "upcoming" ? "UPCOMING" : "DONE"}
                  </span>
                </div>
                <div className="border-t border-white"></div>
              </>
            )}
            
            {/* Description Section */}
            <div className="pt-6 pb-6">
              <h3 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">Description</h3>
              <p className="text-white">{selectedTask.description}</p>
            </div>
            
            {/* Objective Section */}
            {selectedTask.objective && (
              <>
                <div className="border-t border-white"></div>
                <div className="pt-6 pb-6">
                  <h3 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">Objective</h3>
                  <p className="text-white">{selectedTask.objective}</p>
                </div>
              </>
            )}
            
            {/* Developers Section */}
            {selectedTask.developers && selectedTask.developers.length > 0 && (
              <>
                <div className="border-t border-white"></div>
                <div className="pt-6 pb-6">
                  <h3 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">Developers</h3>
                  <p className="text-white">{selectedTask.developers.join(", ")}</p>
                </div>
              </>
            )}
            
            {/* Link Section */}
            {selectedTask.link && (
              <>
                <div className="border-t border-white"></div>
                <div className="pt-6 pb-6">
                  <h3 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">Link</h3>
                  <a
                    href={selectedTask.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black border border-white px-4 py-2 text-sm transition-colors hover:bg-black hover:text-white hover:border-white"
                  >
                    {selectedTask.link.label || "More"} →
                  </a>
                </div>
              </>
            )}
          </div>
        </SidePanel>
      )}
    </div>
  );
}
