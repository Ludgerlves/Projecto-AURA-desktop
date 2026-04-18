"use client"

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
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Professores", href: "/professores", icon: Users },
  { name: "Turmas", href: "/turmas", icon: GraduationCap },
  { name: "Disciplinas", href: "/disciplinas", icon: BookOpen },
  { name: "Salas", href: "/salas", icon: DoorOpen },
  { name: "Tempos", href: "/tempos", icon: Clock },
  { name: "Horários", href: "/horarios", icon: Calendar },
  { name: "Gerar Horários", href: "/gerar", icon: Sparkles },
  { name: "Requisições", href: "/requisicoes", icon: FileText },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-sidebar">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
          <Image 
            src="/Logo-AURA.png" 
            alt="Logo AURA" 
            width={32} 
            height={32}
            className="h-full w-full object-contain"
          />
        </div>
        <span className="text-lg font-semibold text-sidebar-foreground"> Aura </span>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        <div className="mb-4">
          <p className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Menu Principal
          </p>
        </div>
        {navigation.slice(0, 1).map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
        
        <div className="mb-4 mt-6">
          <p className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Gestão de Dados
          </p>
        </div>
        {navigation.slice(1, 6).map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
        
        <div className="mb-4 mt-6">
          <p className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Horários
          </p>
        </div>
        {navigation.slice(6).map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      
      <div className="border-t border-sidebar-border p-4">
        <Link
          href="/configuracoes"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <Settings className="h-5 w-5" />
          Configurações
        </Link>
      </div>
    </aside>
  )
}
