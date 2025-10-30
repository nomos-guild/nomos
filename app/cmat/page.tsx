import Container from "../components/Container";
import Card from "../components/Card";
import TaskCard from "../components/TaskCard";
import ObjectiveCard from "../components/ObjectiveCard";
import SimpleDivider from "../components/SimpleDivider";

export default function Page() {
  return (
    <div className="bg-black">
      {/* Hero Section - Added top padding */}
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
      
      {/* Fibonacci blocks SVG - full width */}
      <div className="w-full mt-20">
        <img 
          src="/fiboblockz.svg" 
          alt="Fibonacci Blocks Pattern" 
          className="w-full h-auto"
        />
      </div>
      
      {/* Spacer for more breathing room */}
      <div className="h-32 md:h-120"></div>
      
      {/* About Section */}
      <div className="py-8">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">ABOUT</h2>
          
          <p className="text-gray-300 mb-8 max-w-3xl">
            Cardano&apos;s on-chain treasury (part of the Voltaire governance era) currently holds funds in ADA only.
            However, there is growing interest in allowing the treasury to support multiple assets.
            This initiative aims to outline the motivation and objectives as well as the planned steps ahead
            towards the establishment of an Cardano multi asset treasury.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 - Block at top */}
            <Card title="Purpose" blockPosition="top">
              <p>
                To improve Treasury sustainability by introducing a Multi Asset Treasury, allowing the Cardano Treasury to not only receive and distribute Ada but to handle a wide rnge of assets.
              </p>
            </Card>
            
            {/* Card 2 - Block in middle */}
            <Card title="Features" blockPosition="middle">
              <p>
                CMAT will introduce specific features which ensure a secure and stable management of treasury assets, while staying fully compatible to Cardano onchain governance (CIP1694)
              </p>
            </Card>
            
            {/* Card 3 - Block at bottom */}
            <Card title="Benefits" blockPosition="bottom">
              <p>
                By implementing CMAT, the Treasury enables a wide range of economic possibilites and yet untapped opportunities
              </p>
            </Card>
          </div>
        </Container>
      </div>
      
    {/* Spacer for more breathing room */}
    <div className="h-32 md:h-120"></div>

      {/* Simple white bar divider - full width */}
      <SimpleDivider width="full" thickness="thin" className="my-12" />
      
      {/* Roadmap Section */}
      <div className="py-8">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">ROADMAP (WIP)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ideation Column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">IDEATION</h3>
              <div className="text-gray-400 text-sm mb-4">
                Async and in-person initiatives to share ideas, get feedback and ideate the multi asset treasury.
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
                >
                  Draft & publish the initial CPS (Cardano Problem Statement)
                </TaskCard>
              </div>
            </div>
            
            {/* Design Column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">DESIGN</h3>
              <div className="text-gray-400 text-sm mb-4">
                Design and submit respective CPSs and CIPs to propose design decisions.
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
                >
                  Prepare and host a CMAT workshop at the Cardano Summit Day0 Event
                </TaskCard>
                
                <TaskCard 
                  title="Cardano Summit Roundtable" 
                  status="planned"
                  assignees={["Hinson", "Nicolas", "Sam", "Yogi"]}
                  date="November 11"
                >
                  Prepare and host a CAMT Roundtable discussion on Summit Day0 Event
                </TaskCard>
                
                <TaskCard 
                  title="CPS becomes CIP" 
                  status="planned"
                  assignees={["Hinson", "Felix", "Nicolas"]}
                  date="December"
                >
                  Draft & submit the initial CMAT CIP (Cardano Improvement Proposal) based on the initial CMAT CPS (Cardano Problem Statement)
                </TaskCard>
              </div>
            </div>
            
            {/* Implementation Column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">IMPLEMENTATION</h3>
              <div className="text-gray-400 text-sm mb-4">
                Respective governance actions will be submitted to implement the multi asset treasury.
              </div>
              <div className="space-y-4">
                <TaskCard 
                  title="Submit CMAT Info Action" 
                  status="upcoming"
                  assignees={["Hinson"]}
                  date="January"
                >
                  Submit an info action to introduce CMAT CIP to voters
                </TaskCard>
                
                <TaskCard 
                  title="Submit CMAT Constitution updates" 
                  status="upcoming"
                  assignees={["Hinson"]}
                  date="January"
                >
                  Submit a "Update to the constitution" gov action according to CMAT requirements
                </TaskCard>
                
                <TaskCard 
                  title="Submit CMAT Hard Fork Initiation" 
                  status="upcoming"
                  assignees={["Hinson"]}
                  date="January"
                >
                  Submit a "Hard Fork Initiation" gov action to initiate the CMAT Hard Fork
                </TaskCard>
              </div>
            </div>
          </div>
        </Container>
      </div>

        {/* Spacer for more breathing room */}
        <div className="h-32 md:h-120"></div>

      {/* Final divider - full width */}
      <SimpleDivider width="full" thickness="thin" className="my-12" />
    </div>
  );
}
