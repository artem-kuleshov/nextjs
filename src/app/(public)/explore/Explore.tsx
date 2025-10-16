'use client'

import { useSearchParams } from "next/navigation"

export function Explore() {
  const searchParams = useSearchParams()
  
  const tag = searchParams.get('tag')

  return <div>
    <h1>{tag}</h1>
  </div>
}