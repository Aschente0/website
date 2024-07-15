import Image from "next/image";
import Hero from "@/components/Hero";
import { client } from "@/sanity/client"
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Blog, blogQuery } from "@/sanity/queries/blogs";
import { BackButton } from "./clientComponents";
import { RevalidationTag } from "@/sanity/utils";

export default async function BlogPage({ params }: { params: { blog: string } }) {
  const blogData = await client.fetch<Blog>(blogQuery, {
    slug: params.blog
  }, {
    next: {
      tags: [RevalidationTag.blog]
    }
  });
  return (
    <main className="min-h-[100rem] bg-gray-300">
      {/* Hero section */}
      <section> 
        <Hero>
            <div className="absolute w-full z-10 bottom-0 px-24 pb-24 pt-12 bg-gray-100 bg-opacity-95">
              <div className="w-[75vw] mx-auto">
                <div className="flex flex-col items-center">
                  <div className="flex justify-between items-center w-full">
                    <BackButton />
                    <div className="min-w-[10rem] min-h-[10rem] relative">
                      <Image
                        src={blogData.logo}
                        alt={blogData.title}
                        fill={true}
                        style={{
                          objectFit: "contain"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <h1 className="text-h4 text-center">{blogData.title}</h1>
                <div className="w-full text-center text-lg mt-8">{blogData.date}</div>
              </div>
            </div>
            <Image
              src={blogData.heroImage}
              alt={blogData.title}
              fill={true}
              style={{
                objectFit: "cover"
              }}
            />
        </Hero>
      </section>
      {/* Content section */}
      <section className="pt-[80vh] p-16">
        <MarkdownRenderer content={blogData.content} />
      </section>
    </main>
  );
}
