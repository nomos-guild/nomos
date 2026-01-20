import Container from "../components/Container";
import Card from "../components/Card";
import SimpleDivider from "../components/SimpleDivider";
import RoadmapSection from "./RoadmapSection";
import type { CmatData } from "./types";

const METADATA_URL =
  "https://raw.githubusercontent.com/nomos-guild/cmat/main/metadata.json";

async function getCmatData(): Promise<CmatData> {
  const res = await fetch(METADATA_URL, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch CMAT metadata");
  }

  return res.json();
}

export default async function Page() {
  const data = await getCmatData();

  return (
    <div className="bg-black">
      <div className="min-h-[40vh] pt-16 md:pt-24">
        <Container className="h-full">
          <div className="flex h-full flex-col justify-center py-6">
            <div className="flex max-w-full w-full flex-col gap-4 pl-2 md:pl-8 lg:pl-16">
              <div className="flex flex-col gap-3">
                <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[16rem] font-bold leading-[0.8] tracking-tighter text-white">
                  {data.hero.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 overflow-hidden text-ellipsis max-w-full">
                  <span className="whitespace-nowrap sm:whitespace-normal md:whitespace-nowrap">
                    {data.hero.subtitle}
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
          <h2 className="text-3xl md:text-8xl font-bold mb-6 text-white">
            ABOUT
          </h2>

          <p className="text-gray-300 mb-8 max-w-3xl">{data.about.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {data.about.cards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                blockPosition={card.blockPosition}
              >
                <p>{card.content}</p>
              </Card>
            ))}
          </div>
        </Container>
      </div>

      <div className="h-32 md:h-120"></div>

      <SimpleDivider width="full" thickness="thin" className="my-12" />

      <RoadmapSection roadmap={data.roadmap} />

      <div className="h-32 md:h-120"></div>

      <SimpleDivider width="full" thickness="thin" className="my-12" />
    </div>
  );
}
