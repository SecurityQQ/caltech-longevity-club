"use client"
import { Gravity, MatterBody } from "@/components/ui/gravity";

const jobs = [
    {
      title: "Longevity Scientist",
      color: "hsl(220, 70%, 50%)", // Bright blue
      description: "Study aging and develop anti-aging therapies"
    },
    {
      title: "CRISPR Gene Engineer",
      color: "hsl(280, 65%, 60%)", // Purple
      description: "Edit DNA to reverse aging and prevent disease"
    },
    {
      title: "AI Biologist",
      color: "hsl(160, 60%, 45%)", // Teal
      description: "Use AI to discover longevity drugs"
    },
    {
      title: "Stem Cell Expert",
      color: "hsl(340, 75%, 55%)", // Rose
      description: "Regrow tissues and organs with stem cells"
    },
    {
      title: "Neurohacker",
      color: "hsl(30, 80%, 55%)", // Orange
      description: "Enhance brain function and prevent cognitive decline"
    },
    {
      title: "Regenerative Doctor",
      color: "hsl(150, 60%, 45%)", // Green
      description: "Develop treatments to repair aging damage"
    },
    {
      title: "Biohacker",
      color: "hsl(200, 70%, 50%)", // Sky blue
      description: "Experiment with biology to enhance lifespan"
    },
    {
      title: "Epigenetics Researcher",
      color: "hsl(320, 65%, 55%)", // Pink
      description: "Reprogram cells to restore youth"
    },
    {
      title: "Longevity AI Engineer",
      color: "hsl(130, 60%, 45%)", // Forest green
      description: "Build AI models for lifespan optimization"
    },
    {
      title: "Cryonics Consultant",
      color: "hsl(260, 65%, 55%)", // Violet
      description: "Preserve and revive humans with cryotech"
    },
    {
      title: "Bioinformatics Wizard",
      color: "hsl(180, 60%, 45%)", // Cyan
      description: "Analyze genetic data to predict aging trends"
    },
    {
      title: "Hormone Hacker",
      color: "hsl(350, 75%, 55%)", // Red
      description: "Optimize hormones for longevity"
    },
    {
      title: "Nutrigenomics Guru",
      color: "hsl(40, 80%, 55%)", // Gold
      description: "Create personalized diets based on DNA"
    },
    {
      title: "Venture Capitalist",
      color: "hsl(170, 60%, 45%)", // Sea green
      description: "Fund startups working on life extension"
    },
    {
      title: "Cybernetic Designer",
      color: "hsl(240, 65%, 55%)", // Deep blue
      description: "Create implants to enhance human lifespan"
    }
  ];
  

export const SkeletonFour = () => {
  return (
    <div className="w-full h-[500px] relative font-sans bg-[hsl(240,10%,3.9%)] rounded-xl overflow-hidden">
      <Gravity 
        gravity={{ x: 0, y: 0.5 }}
        className="w-full h-full"
        addTopWall={true}
      >
        {jobs.map((job, index) => {
          const xPos = ((index % 4) * 20 + 15) + "%";
          const yPos = (Math.floor(index / 4) * 12 + 10) + "%";
          const angle = (index * 13) % 360;

          return (
            <MatterBody
              key={job.title}
              matterBodyOptions={{ 
                friction: 0.2,
                restitution: 0.5,
                density: 0.3,
                chamfer: { radius: 5 },
              }}
              x={xPos}
              y={yPos}
              angle={angle}
            >
              <div 
                className="group relative cursor-grab active:cursor-grabbing"
                style={{ touchAction: 'none' }}
              >
                <div
                  className="text-xs sm:text-sm md:text-base text-white rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-sm"
                  style={{ 
                    backgroundColor: job.color,
                    boxShadow: `0 0 20px ${job.color}33`
                  }}
                >
                  {job.title}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] bg-black/90 text-white p-1 rounded whitespace-nowrap z-10">
                  {job.description}
                </div>
              </div>
            </MatterBody>
          );
        })}
      </Gravity>
    </div>
  );
}; 