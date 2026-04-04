"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  DoorOpen,
  Clock,
  Calendar,
  FileText,
  Settings,
  Sparkles,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Professores", href: "/professores", icon: Users },
  { name: "Turmas", href: "/turmas", icon: GraduationCap },
  { name: "Disciplinas", href: "/disciplinas", icon: BookOpen },
  { name: "Salas", href: "/salas", icon: DoorOpen },
  { name: "Tempos", href: "/tempos", icon: Clock },
  { name: "Horarios", href: "/horarios", icon: Calendar },
  { name: "Gerar Horarios", href: "/gerar", icon: Sparkles },
  { name: "Requisicoes", href: "/requisicoes", icon: FileText },
]

type AppSidebarProps = {
  mobileOpen?: boolean
  onNavigate?: () => void
  onCloseMobile?: () => void
}

export function AppSidebar({
  mobileOpen = false,
  onNavigate,
  onCloseMobile,
}: AppSidebarProps) {
  const pathname = usePathname()

  const linkClass = (isActive: boolean) =>
    cn(
      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
      "md:justify-center md:group-hover/sidebar:justify-start",
      isActive
        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm shadow-primary/15"
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    )

  const sectionClass =
    "mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground md:max-h-0 md:opacity-0 md:overflow-hidden md:mb-0 md:group-hover/sidebar:mb-3 md:group-hover/sidebar:max-h-8 md:group-hover/sidebar:opacity-100 md:transition-all md:duration-200"

  const labelClass =
    "truncate md:hidden md:group-hover/sidebar:inline"

  return (
    <aside
      className={cn(
        "group/sidebar flex h-screen flex-col overflow-hidden border-r border-sidebar-border bg-sidebar/90 backdrop-blur-md",
        "shadow-[inset_-1px_0_0_rgba(15,23,42,0.06)]",
        "transition-[transform,width] duration-300 ease-in-out",
        "fixed left-0 top-0 z-50 w-[min(17.5rem,88vw)] -translate-x-full",
        "md:static md:z-30 md:w-18 md:translate-x-0 md:hover:w-64",
        mobileOpen && "translate-x-0"
      )}
    >
      <div className="flex h-full min-w-64 flex-col">
        <div className="flex h-17 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border px-4 md:px-3 md:group-hover/sidebar:px-4">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-3"
            onClick={onNavigate}
          >
            <Image
              src="/AURA-LOGO.jpeg"
              alt="AURA"
              width={44}
              height={44}
              className="size-10 shrink-0 rounded-2xl object-cover shadow-sm ring-1 ring-border/70"
              priority
            />
            <span
              className={cn(
                "text-lg font-semibold tracking-tight text-foreground",
                "md:opacity-0 md:group-hover/sidebar:opacity-100 md:transition-opacity md:duration-200",
                "whitespace-nowrap"
              )}
            >
              AURA
            </span>
          </Link>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 md:hidden"
            onClick={onCloseMobile}
            aria-label="Fechar menu"
          >
            <X className="size-5" />
          </Button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto overflow-x-hidden p-3 md:px-2 md:group-hover/sidebar:px-3">
          <div>
            <p className={sectionClass}>Menu Principal</p>
            {navigation.slice(0, 1).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClass(isActive)}
                  onClick={onNavigate}
                >
                  <item.icon className="size-5 shrink-0" />
                  <span className={labelClass}>{item.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="pt-2">
            <p className={sectionClass}>Gestao de Dados</p>
            {navigation.slice(1, 6).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClass(isActive)}
                  onClick={onNavigate}
                >
                  <item.icon className="size-5 shrink-0" />
                  <span className={labelClass}>{item.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="pt-2">
            <p className={sectionClass}>Horarios</p>
            {navigation.slice(6).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClass(isActive)}
                  onClick={onNavigate}
                >
                  <item.icon className="size-5 shrink-0" />
                  <span className={labelClass}>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        <div className="border-t border-sidebar-border p-3 md:px-2 md:group-hover/sidebar:px-3">
          <Link
            href="/configuracoes"
            className={linkClass(pathname === "/configuracoes")}
            onClick={onNavigate}
          >
            <Settings className="size-5 shrink-0" />
            <span className={labelClass}>Configuracoes</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}
