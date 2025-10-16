import { TWEETS } from "@/shared/data/tweets.data";
import { Tweet } from "./Tweet";
import type { Metadata } from "next";
import { TweetForm } from "./TweetForm";

export const metadata: Metadata = {
  title: 'Tweets'
}

export default function Home() {
  return (
    <div>      
      <TweetForm/>
      <div className="space-y-6">
        {TWEETS.map(tweet => 
          <Tweet 
            key={tweet.author}
            tweet={tweet}
          />
        )}
      </div>
    </div>
  )
}
