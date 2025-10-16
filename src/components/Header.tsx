import { PAGES } from "@/config/pages.config";
import { MenuItem } from "./MenuItem";

export function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-betwwen bg-black">
      <nav className="flex gap-6 text-white/80">  
        <MenuItem href={PAGES.HOME} label="Home" />
        <MenuItem href={PAGES.EXPLORE} label="Explore" />
        <MenuItem href={PAGES.MY_PROFILE} label="My profile" />
        <MenuItem href={PAGES.SHOP} label="Shop" />
      </nav>
    </header>
  )
}