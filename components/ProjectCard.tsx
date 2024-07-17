import Image from "next/image";
import Button from "./Buttons/Button";
import Link from "next/link";
import { ProjectSummary } from "@/sanity/queries/projects";
import ElevatedLogoWrapper from "./ElevatedLogoWrapper";

export default function ProjectCard({ project }: {project: ProjectSummary }) {
  return (
    <div className="h-[100%] relative">
      <Image
        src={project.heroImage}
        alt={`${project.title}Hero`}
        className="z-0"
        fill={true}
        style={{
          objectFit: "cover",
          objectPosition: "50% top"
        }}
        priority
      />
      <div className="w-[80%] tablet:w-[50%] h-[100%] px-16 py-24 z-10 flex flex-col justify-end relative">
        <div className="absolute w-full h-full top-0 left-0 opacity-95 z-0"
          style={{ 
            backgroundColor: project.themeColour.hex,
          }}
        ></div>
        <div className="z-10"
          style={{
            color: project.textColour.hex,
          }}
        >
          <div className="h-[4rem] max-w-[15rem]">
            <ElevatedLogoWrapper>
              <Image
                src={project.fullLogo}
                alt={`${project.title}Logo`}
                fill={true}
                style={{
                  objectFit: "contain",
                  objectPosition: "0% bottom"
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ElevatedLogoWrapper>

          </div>
          <p className="text-h4 phone:text-h3 font-bold mt-8">{project.title}</p>
          <p className="text-h6 font-light mt-8">{project.subtitle}</p>
          <div className="mt-14">
            <Link href={`/projects/${project.slug}`} className="z-10">
              <Button colour={project.textColour.hex}>
                <p className="text-xl font-light" style={{ color: project.themeColour.hex }}>Details</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}