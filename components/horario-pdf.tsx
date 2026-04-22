"use client"

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer"

const diasSemana = ["2ª FEIRA", "3ª FEIRA", "4ª FEIRA", "5ª FEIRA", "6ª FEIRA"]

type LinhaTabela =
  | { tipo: "aula"; tempo: string; horaInicio: string; horaFim: string; ordem: number }
  | { tipo: "intervalo"; horaInicio: string; horaFim: string }

const linhasManha: LinhaTabela[] = [
  { tipo: "aula", tempo: "1º manhã", horaInicio: "7H30", horaFim: "8H15", ordem: 1 },
  { tipo: "aula", tempo: "2º manhã", horaInicio: "8H15", horaFim: "9H00", ordem: 2 },
  { tipo: "intervalo", horaInicio: "9H00", horaFim: "9H15" },
  { tipo: "aula", tempo: "3º manhã", horaInicio: "9H15", horaFim: "10H00", ordem: 3 },
  { tipo: "aula", tempo: "4º manhã", horaInicio: "10H00", horaFim: "10H45", ordem: 4 },
  { tipo: "intervalo", horaInicio: "10H45", horaFim: "11H00" },
  { tipo: "aula", tempo: "5º manhã", horaInicio: "11H00", horaFim: "11H45", ordem: 5 },
  { tipo: "aula", tempo: "6º manhã", horaInicio: "11H45", horaFim: "12H30", ordem: 6 },
]

const linhasTarde: LinhaTabela[] = [
  { tipo: "aula", tempo: "1º tarde", horaInicio: "13H00", horaFim: "13H45", ordem: 1 },
  { tipo: "aula", tempo: "2º tarde", horaInicio: "13H45", horaFim: "14H30", ordem: 2 },
  { tipo: "intervalo", horaInicio: "14H30", horaFim: "14H45" },
  { tipo: "aula", tempo: "3º tarde", horaInicio: "14H45", horaFim: "15H30", ordem: 3 },
  { tipo: "aula", tempo: "4º tarde", horaInicio: "15H30", horaFim: "16H15", ordem: 4 },
  { tipo: "intervalo", horaInicio: "16H15", horaFim: "16H30" },
  { tipo: "aula", tempo: "5º tarde", horaInicio: "16H30", horaFim: "17H15", ordem: 5 },
  { tipo: "aula", tempo: "6º tarde", horaInicio: "17H15", horaFim: "18H00", ordem: 6 },
]

interface Aula {
  disciplina: string
  professor: string
  sala: string
  turma?: string
}

type HorarioData = {
  [key: string]: {
    [periodo: string]: {
      [dia: string]: {
        [ordem: number]: Aula | null
      }
    }
  }
}

interface HorarioPDFProps {
  horario: HorarioData
  targetKey: string
  isProf: boolean
}

const s = StyleSheet.create({
  page: {
    padding: 18,
    paddingBottom: 24,
    fontFamily: "Helvetica",
    fontSize: 6,
  },
  header: {
    marginBottom: 6,
    textAlign: "center",
  },
  title: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 7,
    color: "#666",
  },
  sectionLabel: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
    marginTop: 6,
    color: "#1a1a1a",
  },
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
  },
  headerCell: {
    fontFamily: "Helvetica-Bold",
    fontSize: 6,
    textAlign: "center",
    padding: 2,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#c0c0c0",
  },
  colTempo: { width: "9%" },
  colHora: { width: "8%" },
  colDia: { width: "16.6%" },
  row: {
    flexDirection: "row",
    minHeight: 26,
  },
  intervaloRow: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    minHeight: 10,
  },
  cell: {
    padding: 2,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#c0c0c0",
    justifyContent: "center",
  },
  cellTempo: {
    width: "9%",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    fontSize: 5.5,
  },
  cellHora: {
    width: "8%",
    textAlign: "center",
    fontSize: 5.5,
  },
  cellDia: {
    width: "16.6%",
  },
  aulaBox: {
    backgroundColor: "#1a1a2e",
    borderRadius: 2,
    padding: 2,
  },
  aulaDisciplina: {
    fontFamily: "Helvetica-Bold",
    fontSize: 5.5,
    color: "#ffffff",
    textTransform: "uppercase",
    marginBottom: 1,
  },
  aulaInfo: {
    fontSize: 5,
    color: "#e0e0e0",
  },
  emptyCell: {
    fontSize: 5,
    color: "#ccc",
    fontStyle: "italic",
    textAlign: "center",
  },
  intervaloLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 5,
    textAlign: "center",
    color: "#999",
  },
  footer: {
    position: "absolute",
    bottom: 8,
    left: 18,
    right: 18,
    fontSize: 6,
    color: "#999",
    textAlign: "center",
  },
})

function CelulaAulaPDF({ aula, isProf }: { aula: Aula | null; isProf: boolean }) {
  if (!aula) {
    return <Text style={s.emptyCell}>---</Text>
  }
  return (
    <View style={s.aulaBox}>
      <Text style={s.aulaDisciplina}>{aula.disciplina}</Text>
      <Text style={s.aulaInfo}>
        {isProf ? `Turma ${aula.turma}` : `Prof. ${aula.professor}`}
      </Text>
      <Text style={s.aulaInfo}>Sala {aula.sala}</Text>
    </View>
  )
}

function TabelaPeriodoPDF({
  linhas,
  periodo,
  targetKey,
  horario,
  isProf,
}: {
  linhas: LinhaTabela[]
  periodo: string
  targetKey: string
  horario: HorarioData
  isProf: boolean
}) {
  const getAula = (dia: string, ordem: number): Aula | null =>
    horario[targetKey]?.[periodo]?.[dia]?.[ordem] ?? null

  return (
    <View style={s.table}>
      <View style={s.headerRow}>
        <View style={[s.headerCell, s.colTempo]}>
          <Text>TEMPO</Text>
        </View>
        <View style={[s.headerCell, s.colHora]}>
          <Text>HORA</Text>
        </View>
        {diasSemana.map((dia) => (
          <View key={dia} style={[s.headerCell, s.colDia]}>
            <Text>{dia}</Text>
          </View>
        ))}
      </View>

      {linhas.map((linha, i) => {
        if (linha.tipo === "intervalo") {
          return (
            <View key={`interv-${i}`} style={s.intervaloRow}>
              <View style={[s.cell, s.cellTempo]}>
                <Text style={s.intervaloLabel}>INTERVALO</Text>
              </View>
              <View style={[s.cell, s.cellHora]}>
                <Text style={s.intervaloLabel}>
                  {linha.horaInicio} - {linha.horaFim}
                </Text>
              </View>
              {diasSemana.map((dia) => (
                <View key={dia} style={[s.cell, s.cellDia]} />
              ))}
            </View>
          )
        }

        return (
          <View key={`aula-${linha.ordem}`} style={s.row} wrap={false}>
            <View style={[s.cell, s.cellTempo]}>
              <Text>{linha.tempo}</Text>
            </View>
            <View style={[s.cell, s.cellHora]}>
              <Text>
                {linha.horaInicio}
              </Text>
              <Text style={{ color: "#999" }}>
                {linha.horaFim}
              </Text>
            </View>
            {diasSemana.map((dia) => (
              <View key={dia} style={[s.cell, s.cellDia]}>
                <CelulaAulaPDF aula={getAula(dia, linha.ordem)} isProf={isProf} />
              </View>
            ))}
          </View>
        )
      })}
    </View>
  )
}

export function HorarioPDF({ horario, targetKey, isProf }: HorarioPDFProps) {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={s.page}>
        <View style={s.header}>
          <Text style={s.title}>
            Horário - {isProf ? "Prof. " : "Turma "}{targetKey}
          </Text>
          <Text style={s.subtitle}>Calendário Semanal</Text>
        </View>

        <Text style={s.sectionLabel}>Periodo da Manha</Text>
        <TabelaPeriodoPDF
          linhas={linhasManha}
          periodo="manha"
          targetKey={targetKey}
          horario={horario}
          isProf={isProf}
        />

        <Text style={s.sectionLabel}>Periodo da Tarde</Text>
        <TabelaPeriodoPDF
          linhas={linhasTarde}
          periodo="tarde"
          targetKey={targetKey}
          horario={horario}
          isProf={isProf}
        />

        <Text style={s.footer}>
          Gerado automaticamente pelo Sistema AURA
        </Text>
      </Page>
    </Document>
  )
}
