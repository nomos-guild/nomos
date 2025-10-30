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
      {/* Hero Section - Added top padding */}
      <div className="min-h-[40vh] pt-16 md:pt-24">
        <Container className="h-full">
          <div className="flex h-full flex-col justify-center py-6">
            <div className="flex max-w-full w-full flex-col gap-4 pl-2 md:pl-8 lg:pl-16">
              <div className="flex flex-col gap-3">
                <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[16rem] font-bold leading-[0.8] tracking-tighter text-white">
                  ABOUT
                </h1>
              </div>
              <div className="flex gap-6 mb-2">
                <div className="h-1 w-24 md:w-32 bg-white"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Fibonacci blocks SVG - full width */}
      <div className="w-full">
        <img 
          src="/fiboblockz.svg" 
          alt="Fibonacci Blocks Pattern" 
          className="w-full h-auto"
        />
      </div>
      
      {/* Spacer above Connecting dots */}
      <div className="h-64 md:h-96" />

      {/* Connecting dots */}
      <div className="py-16 md:py-24">
        <Container>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">Connecting dots . . .</h2>
          <p className="text-gray-400 max-w-3xl mb-8">
            Mesh & SIDAN Labs are busy building on Cardano Governance, current projects & efforts will be syncronised and coordinated to provide more complete solutions for Ada holders to engage at Cardano Governance . . . 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tooling Column */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Tooling</h3>
              <div className="text-gray-400 text-sm mb-4">Supporting builders with utilities and dev-first kits.</div>
              <div className="space-y-4">
                <TaskCard 
                  title="Mesh SDK" 
                  owner="Mesh"
                  href="https://github.com/MeshJS/mesh"
                >
                  Mesh SDK, a powerful Cardano SDK in TS which includes various governance functions
                </TaskCard>
                <TaskCard 
                  title="Crowdfund Smart Contract" 
                  owner="Mesh"
                  href="https://github.com/MeshJS/mesh-aiken-crowdfund"
                >
                  A set of smart contracts allowing anyone to submit governance action deposits as crowdfunding
                </TaskCard>
                <TaskCard 
                  title="DRep Discord Bot" 
                  owner="SIDAN Lab"
                  href="https://github.com/sidan-lab/sidan-gov-discord-bot"
                >
                  Discord bot to support DRep engagements and communities
                </TaskCard>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Products</h3>
              <div className="text-gray-400 text-sm mb-4">User-facing apps that make governance accessible.</div>
              <div className="space-y-4">
                <TaskCard 
                  title="Cardano Ambassador Tools" 
                  owner="SIDAN Lab"
                  href="https://github.com/cardano-foundation/cardano-ambassador-tool"
                >
                  Open source tools for the Cardano Ambassadors program
                </TaskCard>
                <TaskCard 
                  title="Multisignature Platform" 
                  owner="Mesh"
                  href="https://github.com/MeshJS/multisig"
                >
                  Multisig platform for DRep's
                </TaskCard>
                <TaskCard 
                  title="CGOV" 
                  owner="NOMOS"
                >
                  A platform with rich features to engage at Cardano onchain governance
                </TaskCard>
              </div>
            </div>

            {/* Architecture Column */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Architecture</h3>
              <div className="text-gray-400 text-sm mb-4">Governance Architecture improvements .</div>
              <div className="space-y-4">
                <TaskCard 
                  title="Cardano Multi Asset Treasury" 
                  owner="NOMOS"
                >
                  Introducing multi-asset features for the Cardano onchain treasury
                </TaskCard>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Spacer below Connecting dots */}
      <div className="h-64 md:h-96" />
    </div>
  );
}
