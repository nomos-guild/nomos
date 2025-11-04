"use client";

import Container from "../components/Container";
import SimpleDivider from "../components/SimpleDivider";
import TaskCard from "../components/TaskCard";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
            <div className="md:border-r md:border-white md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold bg-white text-black mb-4 px-4 py-2 block">Tools</h3>
              <div className="text-gray-400 text-sm mb-4">Open source tools for onchain governance.</div>
              <div className="space-y-4">
                <TaskCard 
                  title="Proposal Viewer Tool" 
                >
                  A tool to view proposals as well as respective votes and voting rationales 
                </TaskCard>
                <TaskCard 
                  title="Proposal Submission Tool" 
                >
                  A tool to submit any types of onhcain proposals through a deposit crowdfunding smart contract
                </TaskCard>
                <TaskCard 
                  title="Proposal Voting Tool" 
                >
                  A Tool for DReps and SPOs to submit votes on submitted onchain proposals
                </TaskCard>
              </div>
            </div>

            <div className="md:border-r md:border-white md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold bg-white text-black mb-4 px-4 py-2 block">Platform</h3>
              <div className="text-gray-400 text-sm mb-4">CGOV Platform features & enhancements</div>
              <div className="space-y-4">
                <TaskCard 
                  title="User Accounts & Onchain ID" 
                >
                  Allowing users to create individual & team accounts via a onchain ID solution
                </TaskCard>
                <TaskCard 
                  title="Proposal Dashboard & Forum" 
                >
                  To display Proposals and details as well as a forum feature to discuss proposals
                </TaskCard>
                <TaskCard 
                  title="Treasury Dashboard & Analytics" 
                >
                  Dashboard to track and display treasury statistics and metrics
                </TaskCard>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-white text-black mb-4 px-4 py-2 block">Resources</h3>
              <div className="text-gray-400 text-sm mb-4">Helpful platform resources for developers and users</div>
              <div className="space-y-4">
                <TaskCard 
                  title="Platform APIs" 
                >
                  Well documented APIs to allow 3rd party integrations with CGOV platform
                </TaskCard>
                <TaskCard 
                  title="Docs & Guides" 
                >
                  Comprehensive documentation and guides for users and developers
                </TaskCard>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="h-64 md:h-96" />
    </div>
  );
}
