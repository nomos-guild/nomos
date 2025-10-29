import Container from "./components/Container";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem-200px)] bg-black pt-16 md:pt-24"> {/* Added top padding */}
      <Container className="h-full">
        <div className="flex h-full flex-col justify-center py-8 md:py-16">
          <div className="flex max-w-full w-full flex-col gap-6 md:gap-12 pl-2 md:pl-8 lg:pl-16">
            <div className="flex flex-col gap-4 md:gap-8">
              <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[16rem] font-bold leading-[0.8] tracking-tighter text-white">
                NOMOS
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 overflow-hidden text-ellipsis max-w-full">
                <span className="whitespace-nowrap sm:whitespace-normal md:whitespace-nowrap">
                  Tools, initiatives and architecture to advance Cardano Onchain Governance.
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Fibonacci blocks SVG - full width */}
      <div className="w-full">
        <img 
          src="/fiboblockz.svg" 
          alt="Fibonacci Blocks Pattern" 
          className="w-full h-auto"
        />
      </div>
      
      <Container className="h-full py-8 md:py-16">
        <div className="flex pl-2 md:pl-8 lg:pl-16">
          <div className="h-1 w-24 md:w-32 bg-white"></div>
        </div>
      </Container>
    </div>
  );
}