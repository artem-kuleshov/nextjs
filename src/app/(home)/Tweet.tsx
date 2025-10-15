import type { ITweet } from "@/shared/types/tweet.interface"

interface Props {
  tweet: ITweet
}

export function Tweet({tweet}: Props) {
  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
      <div className="font-semibold mb-2">@{tweet.author}</div>
      <p className="text-white/90">{tweet.text}</p>
    </div>
  )
}