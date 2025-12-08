"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Tag, Filter, Download, LayoutDashboard } from "lucide-react"

const navItems = [
  { href: "/table/badges", label: "Badges", icon: Tag },
  { href: "/table/filters", label: "Filters", icon: Filter },
  { href: "/table/multi-select", label: "Multi Select", icon: LayoutDashboard },
  { href: "/table/export", label: "Export", icon: Download },
]

export default function TableLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen">
      <aside className="w-56 border-r bg-background flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xs font-medium text-muted-foreground mb-2">Components</h2>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="size-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
