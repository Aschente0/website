import Hero from "@/components/Hero";
import { client } from "@/sanity/client";
import ClientLayer from "./clientLayer"
import { BlogsQuery, blogsQuery } from "@/sanity/queries/blogs";
import BlogCard from "@/components/BlogCard";
import { RevalidationTag } from "@/sanity/utils";

const ITEMS_PER_PAGE = 3

export default async function Projects() {
  const fetchBlogs = await client.fetch<BlogsQuery>(blogsQuery, {
    start: 0,
    end: 0 + ITEMS_PER_PAGE
  }, {
    next: {
      tags: [RevalidationTag.blog]
    }
  });
  return (
    <div className="">
      <Hero>
        <BlogCard blog={fetchBlogs.blogs[0]}/>
      </Hero>
      <div className={`pt-[65vh] tablet:pt-[85vh]`}>
        <div className="flex flex-col gap-8 tablet:gap-16 p-8 tablet:p-0">
          {fetchBlogs.blogs.slice(1).map(blog => {
            return (
              <BlogCard key={blog._id} blog={blog}/>
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