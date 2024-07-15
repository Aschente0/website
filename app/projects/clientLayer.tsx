"use client"

import ClientButton from "@/components/Buttons/ClientButton";
import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/client";
import { ProjectsQuery, ProjectSummary, projectsQuery } from "@/sanity/queries/projects";
import { useState } from "react";

export default function Projects({ children, itemsPerPage }: { children?: React.ReactNode, itemsPerPage: number }) {
  const [projects, setProjects] = useState<ProjectSummary[]>([]) // excludes first page
  const [pagination, setPagination] = useState({
    nextPage: 1,
    hasNext: true
  })
  const fetchMore = async () => {
    // fetch the next page
    if (pagination.hasNext) {
      const fetchProjects = await client.fetch<ProjectsQuery>(projectsQuery, {
        start: pagination.nextPage*itemsPerPage,
        end: pagination.nextPage*itemsPerPage + itemsPerPage
      })
      // references to new data to update projects state with
      const newProjects = fetchProjects.projects
      const newHasNext = fetchProjects.hasNext > 0;
      setProjects(oldProjects => [...newProjects, ...oldProjects])
      setPagination(oldPagination => ({
        hasNext: newHasNext,
        nextPage: newHasNext ? oldPagination.nextPage + 1 : oldPagination.nextPage
      }))
    }
  }

  return (
    <div>
      {/* Hero section and first page */}
      {children} {/* Pre-rendered section via server components */}
      {/* Load More elements are loaded via client-side */}
      <div className="flex flex-col tablet:gap-16 gap-8">
        {projects.map(project => {
          return (
            <ProjectCard key={project._id} project={project} />
          )
        })}
      </div>

      <div className="mt-16 w-full inline-flex justify-center">
        {pagination.hasNext ?
          <ClientButton colour="#F0F0F0" onClick={fetchMore}>
            <p className="text-xl">Load more</p>
          </ClientButton> :
          <p className="text-xl">No more results.</p>
        }
      </div> 

    </div>
  )
}