import { z } from "zod"

/**
 * Códigos de erro da aplicação para mensagens consistentes.
 */
export const ErrorCodes = {
  VALIDATION: "VALIDATION",
  NOT_FOUND: "NOT_FOUND",
  CONFLICT: "CONFLICT",
  FOREIGN_KEY: "FOREIGN_KEY",
  UNKNOWN: "UNKNOWN",
} as const

/**
 * Erro personalizado com código e mensagem amigável.
 */
export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: keyof typeof ErrorCodes = "UNKNOWN",
    public readonly statusCode: number = 400
  ) {
    super(message)
    this.name = "AppError"
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

/**
 * Verifica se o erro é do Prisma (PrismaClientKnownRequestError).
 */
function isPrismaError(error: unknown): error is { code: string; meta?: Record<string, unknown> } {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code: string }).code === "string" &&
    (error as { code: string }).code.startsWith("P")
  )
}

/**
 * Converte erros do Prisma em mensagens amigáveis.
 */
function getPrismaErrorMessage(code: string, meta?: Record<string, unknown>): string {
  switch (code) {
    case "P2002": {
      const target = (meta?.target as string[] | undefined)?.[0]
      const field = target ? ` (${target})` : ""
      return `Já existe um registo com estes dados${field}. Corrija e tente novamente.`
    }
    case "P2003":
      return "Referência inválida: o registo associado não existe ou não pode ser usado."
    case "P2025":
      return "Registo não encontrado. Pode já ter sido eliminado ou o identificador é inválido."
    default:
      return "Ocorreu um erro na base de dados. Tente novamente."
  }
}

/**
 * Obtém a primeira mensagem de erro dos field errors do Zod para mostrar como resumo.
 */
export function getZodFirstMessage(error: z.ZodError): string {
  const first = error.errors[0]
  if (!first) return "Erro de validação nos dados introduzidos."
  const path = first.path.join(".")
  const msg = first.message
  return path ? `${path}: ${msg}` : msg
}

/**
 * Trata qualquer erro e devolve uma mensagem segura e amigável para mostrar ao utilizador.
 * Usar nas server actions antes de retornar { success: false, message }.
 */
export function getActionErrorMessage(error: unknown): string {
  if (error instanceof z.ZodError) {
    return getZodFirstMessage(error)
  }
  if (error instanceof AppError) {
    return error.message
  }
  if (isPrismaError(error)) {
    return getPrismaErrorMessage(error.code, error.meta)
  }
  if (error instanceof Error) {
    // Não expor mensagens técnicas em produção; pode logar error.message
    const msg = error.message
    if (msg.includes("Unique constraint") || msg.includes("duplicate")) {
      return "Já existe um registo com estes dados. Corrija e tente novamente."
    }
    if (msg.includes("Foreign key") || msg.includes("constraint")) {
      return "Referência inválida: o registo associado não existe."
    }
    if (msg.includes("Record to delete") || msg.includes("not found")) {
      return "Registo não encontrado. Pode já ter sido eliminado."
    }
    return msg || "Ocorreu um erro inesperado. Tente novamente."
  }
  return "Ocorreu um erro inesperado. Tente novamente."
}

/**
 * Extrai erros por campo a partir de um ZodError (para mostrar junto aos inputs).
 */
export function getZodFieldErrors(
  error: z.ZodError
): Record<string, string[] | undefined> {
  return error.flatten().fieldErrors as Record<string, string[] | undefined>
}
