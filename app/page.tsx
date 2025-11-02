import Container from "./components/Container";

export default function Page() {
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
                  BUILDING OPEN SOURCE GOVERNANCE 3.0 ON CARDANO 
                </span>
              </p>
              <div className="h-48 md:h-64" />
            </div>
          </div>
        </div>
      </Container>
      
      <div className="w-full">
        <img 
          src="/fiboblockz.svg" 
          alt="Fibonacci Blocks Pattern" 
          className="w-full h-auto"
        />
      </div>
      
      <Container className="py-32 md:py-48">
        <div className="flex justify-center items-center gap-12 md:gap-20">
          <a 
            href="https://github.com/MeshJS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group hover:scale-110 hover:opacity-90 transition-all duration-300 ease-in-out transform"
          >
            <img 
              src="/mesh-white-txt.png" 
              alt="Mesh" 
              className="h-24 md:h-32 w-auto group-hover:brightness-110 transition-all duration-300"
            />
          </a>
          <a 
            href="https://github.com/sidan-lab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group hover:scale-110 hover:opacity-90 transition-all duration-300 ease-in-out transform"
          >
            <img 
              src="/sidan.png" 
              alt="Sidan" 
              className="h-24 md:h-32 w-auto group-hover:brightness-110 transition-all duration-300"
            />
          </a>
        </div>
      </Container>
      
      <Container className="h-full py-8 md:py-16">
        <div className="flex pl-2 md:pl-8 lg:pl-16">
          <div className="h-1 w-24 md:w-32 bg-white"></div>
        </div>
      </Container>
    </div>
  );
}