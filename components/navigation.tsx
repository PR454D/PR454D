"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="border-b border-border">
      <div className="max-w-3xl w-full mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
          Prasad
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className={`text-sm transition-colors ${isActive("/about") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`text-sm transition-colors ${isActive("/blog") || pathname.startsWith("/blog/") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
