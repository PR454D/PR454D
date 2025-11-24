"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail, FileText, Home, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Sidebar() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === "/" && pathname !== "/") return false
        return pathname.startsWith(path)
    }

    const navItems = [
        { href: "/", label: "Blog", icon: Home },
        { href: "/resume", label: "Resume", icon: FileText },
        // { href: "/about", label: "About", icon: User },
    ]

    return (
        <aside className="w-full md:w-64 bg-sidebar border-b md:border-b-0 md:border-r border-sidebar-border flex flex-col md:h-screen md:fixed md:inset-y-0 z-50">
            <div className="p-6">
                <Link href="/" className="block">
                    <h1 className="text-2xl font-bold text-sidebar-foreground">Prasad Sawool</h1>
                    <p className="text-sm text-muted-foreground mt-1">Software Engineer</p>
                </Link>
            </div>

            <nav className="flex-1 px-4 pb-4 md:pb-0 overflow-y-auto">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href)
                                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-6 border-t border-sidebar-border mt-auto">
                <div className="flex items-center gap-2 mb-4">
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <Link href="https://github.com/PR454D" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <Link href="https://linkedin.com/in/prasadsawool/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">© 2025</span>
                    <ThemeToggle />
                </div>
            </div>
        </aside>
    )
}
