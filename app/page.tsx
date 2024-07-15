import Image from "next/image";
import Hero, { HERO_ELEMENT_HEIGHTS } from "@/components/Hero";
import { homePageQuery, HomePageQueryType } from "@/sanity/queries/homepage"
import { client } from "@/sanity/client"
import MarkdownRenderer from "@/components/MarkdownRenderer";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  const homePageData = await client.fetch<HomePageQueryType>(homePageQuery);
  return (
    <main className="">
      {/* Hero Section */}
      <section> 
        <Hero>
          <ProjectCard project={homePageData.featuredProject}/>
        </Hero>
      </section>
      {/* About Section */}
      <section className={`pt-[65vh] tablet:pt-[85vh]`}> {/* padding to render below hero section */}
        <div className="bg-gray-300 relative grid grid-flow-row tablet:grid-flow-col grid-cols-2 grid-rows-2 tablet:grid-rows-none tablet:grid-cols-7 gap-8 p-8 m-8 tablet:p-10 tablet:m-0">
          <div className="col-span-1 tablet:col-span-2 relative -ml-8 -mb-8 tablet:-ml-10 tablet:-mb-10 -mr-[12rem] min-[600px]:-mr-[2rem] min-[640px]:-mr-[8rem] min-[768px]:-mr-[6rem]">
            <Image
              src={homePageData.aboutSection.image}
              alt={"Carlos Lam"}
              className="z-0"
              fill={true}
              style={{
                objectFit: "contain",
                objectPosition: "left bottom"
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="col-span-1 tablet:col-span-2 z-10 flex flex-col justify-center items-center text-center mt-12">
            <p className="text-h3 font-bold">{homePageData.aboutSection.name}</p>
            <p className="text-h6">{homePageData.aboutSection.title}</p>
          </div>
          <div className="col-span-2 tablet:col-span-3 z-10 pt-10 tablet:pt-0 -mx-8 p-8 tablet:-mx-0 tablet:p-0 border-t-[2rem] tablet:border-t-0 border-gray-600">
            <MarkdownRenderer content={homePageData.aboutSection.content}/>
          </div>
        </div>

      </section>
      {/* Work and Partnership Section */}
      <section className="grid grid-flow-row grid-row-2 tablet:grid-flow-col tablet:grid-cols-2 gap-8 tablet:gap-12 px-8 tablet:px-0 tablet:pt-12">
        <div className={`col-span-1 bg-gray-300 grid grid-flow-col grid-cols-${homePageData.workHistorySection.length} p-12 gap-16`}>
          {
            homePageData.workHistorySection.map(({ fullLogo, name }) => {
              return (
                <div key={fullLogo} className="col-span-1 relative min-h-[10rem]">
                  <Image
                    src={fullLogo}
                    alt={name}
                    fill={true}
                    style={{
                      objectFit: "contain"
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )
            })
          } 
        </div>
        <div className={`col-span-1 bg-gray-300 grid grid-flow-col grid-cols-${homePageData.partnershipSection.length} p-12 gap-16`}>
          {
            homePageData.partnershipSection.map(({ fullLogo, name }) => {
              return (
                <div key={fullLogo} className="col-span-1 relative min-h-[10rem]">
                  <Image
                    src={fullLogo}
                    alt={name}
                    fill={true}
                    style={{
                      objectFit: "contain"
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  );
}
