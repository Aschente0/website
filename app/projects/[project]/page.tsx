import Image from "next/image";
import Hero from "@/components/Hero";
import { client } from "@/sanity/client"
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { BackButton } from "./clientComponents";
import { projectQuery, Project } from "@/sanity/queries/projects";
import ElevatedLogoWrapper from "@/components/ElevatedLogoWrapper";

export default async function ProjectPage({ params }: { params: { project: string } }) {
  const projectData = await client.fetch<Project>(projectQuery, {
    slug: params.project
  });
  const {r, g, b} = projectData.themeColour.rgb
  return (
    <main className="min-h-[100rem] bg-gray-300">
      {/* Hero section */}
      <section> 
        <Hero>
            <div 
              className={`absolute w-full bottom-0 px-24 pb-24 pt-12 z-10`}
              style={{ 
                backgroundColor: `rgba(${r}, ${g}, ${b}, 0.95)`
              }}
              >
                <div className="w-[75vw] mx-auto opacity-95 flex flex-col justify-between h-full"
                  style={{
                    color: projectData.textColour.hex
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex justify-between items-center w-full">
                      <BackButton />
                      <div className="relative h-[4rem] w-[15rem]">
                        <ElevatedLogoWrapper>
                          <Image
                            src={projectData.fullLogo}
                            alt={projectData.title}
                            fill={true}
                            style={{
                              objectFit: "contain"
                            }}
                          />
                        </ElevatedLogoWrapper>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-h1 font-bold text-center">{projectData.title}</h1>
                    <div className="w-full text-center text-xl mt-8">{projectData.subtitle}</div>
                  </div>
                </div>
            </div>
            <Image
              src={projectData.heroImage}
              alt={projectData.title}
              fill={true}
              style={{
                objectFit: "cover"
              }}
            />
        </Hero>
      </section>
      {/* Content section */}
      <section className="pt-[80vh] p-16">
        <MarkdownRenderer content={projectData.content} />
      </section>
    </main>
  );
}
