'use client'

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";

export function MyProfile() {
  
  const router = useRouter()
  
  return <div>    
      <div className="mb-3">
        My Profile
      </div>
      <button 
        className="btn btn-blue" 
        onClick={() => router.push(PAGES.HOME)}>
          Go to home
      </button>
    </div>
}