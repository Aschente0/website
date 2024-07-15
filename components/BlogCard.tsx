import Image from "next/image";
import Button from "./Buttons/Button";
import Link from "next/link";
import { BlogSummary } from "@/sanity/queries/blogs";

export default function BlogCard({ blog, lg }: {blog: BlogSummary, lg?: boolean }) {
  return (
    <div className="flex h-[100%] relative">
      <Image
        src={blog.heroImage}
        alt={`${blog.title}Hero`}
        className="z-0"
        fill={true}
        style={{
          objectFit: "cover",
          objectPosition: "50% top"
        }}
        priority
      />
      <div className="w-full tablet:w-[50%] h-[100%] px-8 py-8 tablet:px-16 tablet:py-24 z-10 bg-gray-100 bg-opacity-95 flex flex-col justify-end">
        <div className="relative w-[10rem] h-[10rem]">
          <Image
            src={blog.logo}
            alt={`${blog.title}Logo`}
            fill={true}
            style={{
              objectFit: "contain",
              objectPosition: "0% bottom"
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="text-h4 phone:text-h3 mt-8">{blog.title}</p>
        <div className="mt-14">
          <Link href={`/blogs/${blog.slug}`} className="z-10">
            <Button colour={blog.themeColour.hex}>
              <p className={`text-xl text-white font-light`}>View</p>
            </Button>
          </Link>
        </div>
  
      </div>
      <div className="w-[60%] z-10"></div>
    </div>
  )
}