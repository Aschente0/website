import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-20 h-[6.25rem] pl-[4rem] flex items-center text-lg gap-[4rem] bg-gray-600 drop-shadow-md">
      <Link className="cursor-pointer" href="/">Home</Link>
      <Link className="cursor-pointer" href="/about">About</Link>
      <Link className="cursor-pointer" href="/projects">Projects</Link>
      <Link className="cursor-pointer" href="/blogs">Blog</Link>
    </div>
  )
}