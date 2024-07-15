import Hero from "@/components/Hero";
import { client } from "@/sanity/client";
import { ProjectsQuery, projectsQuery } from "@/sanity/queries/projects";
import ClientLayer from "./clientLayer"
import ProjectCard from "@/components/ProjectCard";

const ITEMS_PER_PAGE = 3

export default async function Projects() {
  const fetchProjects = await client.fetch<ProjectsQuery>(projectsQuery, {
    start: 0,
    end: 0 + ITEMS_PER_PAGE
  });

  return (
    <div className="">
      <Hero>
        <ProjectCard project={fetchProjects.projects[0]} />
      </Hero>
      <div className={`pt-[65vh] tablet:pt-[85vh]`}>
        <div className="flex flex-col gap-8 tablet:gap-16 p-8 tablet:p-0">
          {fetchProjects.projects.slice(1).map(project => {
            return (
              <ProjectCard key={project._id} project={project}/>
            )
          })}
          <div className="w-full justify-center">
            <ClientLayer itemsPerPage={ITEMS_PER_PAGE} />
          </div>
        </div>
      </div>
    </div>
  )
}