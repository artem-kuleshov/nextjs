import { MenuItem } from "@/components/MenuItem"
import { PAGES } from "@/config/pages.config"

export function ShopMenu() {
  return (
    <nav className="flex gap-6 mb-3 text-white/80">
      <MenuItem href={PAGES.SHOP} label="SSR"/>
      <MenuItem href={PAGES.SSG} label="SSG"/>
      <MenuItem href={PAGES.ISR} label="ISR"/>
    </nav>
  )
}