import { PAGES } from "@/config/pages.config"
import type { ITweet } from "@/shared/types/tweet.interface"
import Link from "next/link"

interface Props {
  tweet: ITweet
}

export function Tweet({tweet}: Props) {
  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
      <Link href={PAGES.PROFILE(tweet.author)} className="font-semibold mb-2">@{tweet.author}</Link>
      <p className="text-white/90">{tweet.text}</p>
    </div>
  )
}