"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  GraduationCap,
  BookOpen,
  DoorOpen,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

interface DashboardStats {
  professores: number
  turmas: number
  disciplinas: number
  salas: number
}

interface AulaHoje {
  id: number
  time: string
  subject: string
  turma: string
  room: string
  professor: string
  ordem: number
}

interface DashboardContentProps {
  stats: DashboardStats
  aulasHoje: AulaHoje[]
}


export function DashboardContent({ stats, aulasHoje }: DashboardContentProps) {
  const statsData = [
    {
      title: "Professores",
      value: stats.professores.toString(),
      icon: Users,
      change: "Total registados",
      href: "/professores",
    },
    {
      title: "Turmas",
      value: stats.turmas.toString(),
      icon: GraduationCap,
      change: "Total registadas",
      href: "/turmas",
    },
    {
      title: "Disciplinas",
      value: stats.disciplinas.toString(),
      icon: BookOpen,
      change: "Total registadas",
      href: "/disciplinas",
    },
    {
      title: "Salas",
      value: stats.salas.toString(),
      icon: DoorOpen,
      change: "Total registadas",
      href: "/salas",
    },
  ]
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Visao geral do sistema de geracao de horarios
          </p>
        </div>
        <Link href="/gerar">
          <Button className="gap-2">
            <Sparkles className="h-4 w-4" />
            Gerar Horarios
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="transition-colors hover:bg-card/80">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Today's Schedule Preview */}
      <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Aulas de Hoje</CardTitle>
            <Link href="/horarios">
              <Button variant="ghost" size="sm" className="gap-1">
                Ver horario completo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aulasHoje.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Nenhuma aula agendada para hoje
                </p>
              ) : (
                aulasHoje.slice(0, 4).map((classItem) => (
                  <div
                    key={classItem.id}
                    className="flex items-center gap-4 rounded-lg border border-border p-4"
                  >
                    <div className="flex h-12 w-16 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <span className="text-lg font-bold">{classItem.time}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{classItem.subject}</p>
                        <Badge variant="outline">{classItem.turma}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {classItem.room} - {classItem.professor}
                      </p>
                    </div>
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acoes Rapidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/professores">
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4 bg-transparent">
                <Users className="h-6 w-6" />
                <span>Adicionar Professor</span>
              </Button>
            </Link>
            <Link href="/turmas">
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4 bg-transparent">
                <GraduationCap className="h-6 w-6" />
                <span>Nova Turma</span>
              </Button>
            </Link>
            <Link href="/gerar">
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4 bg-transparent">
                <Sparkles className="h-6 w-6" />
                <span>Gerar Horarios</span>
              </Button>
            </Link>
            <Link href="/horarios">
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4 bg-transparent">
                <Calendar className="h-6 w-6" />
                <span>Ver Horarios</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
