"use client"

import BlogCard from "@/components/BlogCard";
import ClientButton from "@/components/Buttons/ClientButton";
import { client } from "@/sanity/client";
import { BlogSummary, BlogsQuery, blogsQuery } from "@/sanity/queries/blogs";
import { ProjectsQuery, ProjectSummary, projectsQuery } from "@/sanity/queries/projects";
import { RevalidationTag } from "@/sanity/utils";
import { useState } from "react";

export default function Projects({ children, itemsPerPage }: { children?: React.ReactNode, itemsPerPage: number }) {
  const [blogs, setBlogs] = useState<BlogSummary[]>([]) // excludes first page
  const [pagination, setPagination] = useState({
    nextPage: 1,
    hasNext: true
  })
  const fetchMore = async () => {
    // fetch the next page
    if (pagination.hasNext) {
      const fetchBlogs = await client.fetch<BlogsQuery>(blogsQuery, {
        start: pagination.nextPage * itemsPerPage,
        end: pagination.nextPage * itemsPerPage + itemsPerPage
      }, {
        next: {
          tags: [RevalidationTag.blog]
        }
      })
      // references to new data to update projects state with
      const newBlogs = fetchBlogs.blogs
      const newHasNext = fetchBlogs.hasNext > 0;
      setBlogs(oldBlogs => [...newBlogs, ...oldBlogs])
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
      <div className="flex flex-col gap-8 tablet:gap-16">
        {blogs.map(blog => {
          return (
            <BlogCard key={blog._id} blog={blog} />
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