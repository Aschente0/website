import { client } from "@/sanity/client";
import { GlobalDataQuery, globalDataQuery } from "@/sanity/queries/global";
import Link from "next/link";

export default async function Footer() {
  const globalData = await client.fetch<GlobalDataQuery>(globalDataQuery);
  return (
    <div className="bg-gray-900 flex text-white text-lg p-[4rem] relative gap-[8rem]">
      <div className="flex flex-col gap-4">
        <Link className="cursor-pointer" href="/">Home</Link>
        <Link className="cursor-pointer" href="/projects">Projects</Link>
        <Link className="cursor-pointer" href="/experience">Experience & Partnerships</Link>
        <Link className="cursor-pointer" href="/blogs">Blog</Link>
      </div>
      <div className="flex flex-col gap-4">
        <a href={globalData.githubUrl} rel="noreferrer noopener" target="_blank">Github</a>
        <a href={globalData.linkedinUrl} rel="noreferrer noopener" target="_blank">LinkedIn</a>
      </div>
      <p className="absolute right-6 bottom-3">© 2021 - 2024 Carlos Lam</p>
    </div>
  )
}