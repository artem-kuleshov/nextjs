import { Header } from "@/components/Header";
import type { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren) {
	return (
    <div className="min-h-screen">	
			<Header/>
      <div className="flex justify-center px-10 py-8">		
				<div className="w-full">
					{children}
				</div>	
			</div>
		</div>
	)
}