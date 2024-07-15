'use server'
 
import { RevalidationTag } from "@/sanity/utils"
import { revalidateTag } from 'next/cache'
 
export default async function revalidate(tag: RevalidationTag) {
  revalidateTag(tag)
}