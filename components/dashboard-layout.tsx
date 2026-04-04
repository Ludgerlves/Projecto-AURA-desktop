"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const mainRef = useRef<HTMLDivElement>(null)
  const [headerCollapsed, setHeaderCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  const onMainScroll = useCallback(() => {
    const el = mainRef.current
    if (!el) return
    const y = el.scrollTop
    const delta = y - lastScrollY.current
    if (y < 32) {
      setHeaderCollapsed(false)
    } else if (delta > 6) {
      setHeaderCollapsed(true)
    } else if (delta < -6) {
      setHeaderCollapsed(false)
    }
    lastScrollY.current = y
  }, [])

  useEffect(() => {
    const el = mainRef.current
    if (!el) return
    el.addEventListener("scroll", onMainScroll, { passive: true })
    return () => el.removeEventListener("scroll", onMainScroll)
  }, [onMainScroll])

  return (
    <div className="flex min-h-screen bg-background">
      {mobileMenuOpen ? (
        <button
          type="button"
          aria-label="Fechar menu"
          className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-[2px] transition-opacity md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}

      <AppSidebar
        mobileOpen={mobileMenuOpen}
        onNavigate={() => setMobileMenuOpen(false)}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader
          headerCollapsed={headerCollapsed}
          onMenuClick={() => setMobileMenuOpen((o) => !o)}
        />
        <main
          ref={mainRef}
          className={cn(
            "flex-1 overflow-auto px-4 py-5 sm:px-6 sm:py-6",
            "transition-[padding-top] duration-300 ease-out"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
