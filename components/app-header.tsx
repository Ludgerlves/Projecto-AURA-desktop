"use client"

import { Bell, Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type AppHeaderProps = {
  headerCollapsed?: boolean
  onMenuClick?: () => void
}

export function AppHeader({ headerCollapsed = false, onMenuClick }: AppHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex shrink-0 items-center justify-between gap-3 overflow-hidden border-b border-border/80 bg-card/85 px-4 py-0 backdrop-blur-md transition-all duration-300 ease-out sm:px-6",
        headerCollapsed
          ? "max-h-0 min-h-0 border-transparent py-0 opacity-0 [pointer-events:none]"
          : "max-h-16 min-h-16 opacity-100 py-2"
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 md:hidden"
          onClick={onMenuClick}
          aria-label="Abrir menu"
        >
          <Menu className="size-5 text-foreground" />
        </Button>
        <div className="relative min-w-0 max-w-md flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar..."
            className="h-10 rounded-xl border-border/80 bg-muted/50 pl-10 shadow-inner shadow-slate-900/[0.02] placeholder:text-muted-foreground/70"
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <Button variant="ghost" size="icon" className="relative rounded-xl text-muted-foreground hover:text-foreground">
          <Bell className="size-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 rounded-xl px-2 sm:px-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                <User className="size-4 text-primary" />
              </div>
              <div className="hidden text-left md:block">
                <p className="text-sm font-medium leading-tight text-foreground">Admin</p>
                <p className="text-xs text-muted-foreground">Administrador</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-xl border-border/80 shadow-lg">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Configuracoes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
