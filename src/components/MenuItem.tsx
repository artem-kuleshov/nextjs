'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string
  label: string
}

export function MenuItem({href, label}: Props) {
  
  const pathname = usePathname()

  const isActive = (href === pathname)
  
  return <Link className={isActive ? 'text-white' : ''} href={href}>{label}</Link>
}