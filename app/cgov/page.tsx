import Container from "../components/Container";
import SimpleDivider from "../components/SimpleDivider";

export default function CgovPage() {
  return (
    <div className="bg-black">
      {/* Hero Section - Added top padding */}
      <div className="min-h-[40vh] pt-16 md:pt-24">
        <Container className="h-full">
          <div className="flex h-full flex-col justify-center py-6">
            <div className="flex max-w-full w-full flex-col gap-4 pl-2 md:pl-8 lg:pl-16">
              <div className="flex flex-col gap-3">
                <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[16rem] font-bold leading-[0.8] tracking-tighter text-white">
                  CGOV
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 overflow-hidden text-ellipsis max-w-full">
                  <span className="whitespace-nowrap sm:whitespace-normal md:whitespace-nowrap">
                    Cardano Governance Platform
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
      
      {/* Simple white bar divider - full width */}
      <SimpleDivider width="full" thickness="medium" className="my-8" />
      
      {/* Content placeholder */}
      <div className="py-8">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">COMING SOON</h2>
          <p className="text-gray-300 max-w-2xl">
            Carefully crafted governance tools
          </p>
        </Container>
      </div>
      
      {/* Simple white bar divider - full width */}
      <SimpleDivider width="full" thickness="thin" className="my-12" />
    </div>
  );
}