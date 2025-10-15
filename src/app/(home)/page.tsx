import { TWEETS } from "@/shared/data/tweets.data";
import { Tweet } from "./Tweet";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <div className="space-y-6">
          {TWEETS.map(tweet => 
            <Tweet 
              key={tweet.author}
              tweet={tweet}
            />
          )}
        </div>
      </div>
    </div>
  )
}
