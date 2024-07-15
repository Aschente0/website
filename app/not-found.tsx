import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/client";
import { NotFoundPageQuery, notFoundPageQuery } from "@/sanity/queries/404";
import { RevalidationTag } from "@/sanity/utils";
import Link from 'next/link'
 
export default async function NotFound() {
  const fetchData = await client.fetch<NotFoundPageQuery>(notFoundPageQuery, {
  }, {
    next: {
      tags: [RevalidationTag.blog, RevalidationTag.project]
    }
  });
  const {project, blog} = fetchData
  return (
    <div className="p-8 tablet:p-0">
      <div className="bg-gray-100 w-full flex flex-col justify-center items-center p-16">
        <div>
          <h1 className="text-h1 text-center text-bold">Page Not Found</h1>
          <h2 className="text-xl text-center pt-8"><Link href="/" className="text-blue-600">Return home</Link> or take a look at my latest project/blogpost!</h2>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        <ProjectCard key={project._id} project={project}/>
        <BlogCard key={blog._id} blog={blog}/>
      </div>
    </div>
  )
}