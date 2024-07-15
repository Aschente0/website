"use client"
import { useRouter } from 'next/navigation' 

export const BackButton = () => {
  const router = useRouter()
  return (
    <a className="text-lg cursor-pointer" onClick={() => router.back()}>Go back</a>
  )
  
}