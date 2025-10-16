import { MyProfile } from "@/app/(public)/my-profile/MyProfile"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'My profile'
}

export default function ExplorePage() {
  return <MyProfile/>
}