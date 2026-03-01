module.exports = [
"[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/generated/prisma/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/dotenv/config.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const connectionString = process.env.DATABASE_URL;
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaPg"]({
    connectionString
});
const prisma = new __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaClient"]({
    adapter
});
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/lib/Service/Professores.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProfessorCRUD",
    ()=>ProfessorCRUD,
    "professorService",
    ()=>professorService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const DIAS_SEMANA = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira"
];
const PERIODOS = [
    "Manhã",
    "Tarde"
];
const professorInclude = {
    Professor: {
        include: {
            ProfDisciplinas: {
                include: {
                    Disciplina: true
                }
            }
        }
    }
};
async function ensureDisponibilidadeRefsExist() {
    await Promise.all([
        ...DIAS_SEMANA.map((nome)=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].diaSemana.upsert({
                where: {
                    nome
                },
                update: {},
                create: {
                    nome
                }
            })),
        ...PERIODOS.map((periodo)=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].periodo.upsert({
                where: {
                    periodo
                },
                update: {},
                create: {
                    periodo
                }
            }))
    ]);
}
class ProfessorCRUD {
    async criarProfessor(data) {
        if (data.disponibilidade && data.disponibilidade.length > 0) {
            await ensureDisponibilidadeRefsExist();
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.create({
            data: {
                nome: data.nome,
                email: data.email,
                updated_at: new Date(),
                telefone: data.telefone,
                ProfDisciplinas: {
                    create: data.disciplinaIds.map((id)=>({
                            disciplinaId: id
                        }))
                },
                ...data.disponibilidade && data.disponibilidade.length > 0 ? {
                    Disponibilidade: {
                        create: data.disponibilidade.map((d)=>({
                                diaSemana: d.diaSemana,
                                periodoId: d.periodoId,
                                ordem: d.ordem
                            }))
                    }
                } : {}
            }
        });
    }
    async atualizarProfessor(id_professor, data) {
        const existente = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.findUnique({
            where: {
                id_professor
            }
        });
        if (!existente) {
            throw new Error("Professor não encontrado");
        }
        if (data.disciplinaIds) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profDisciplinas.deleteMany({
                where: {
                    professorId: existente.id_professor
                }
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profDisciplinas.createMany({
                data: data.disciplinaIds.map((id)=>({
                        professorId: existente.id_professor,
                        disciplinaId: id
                    }))
            });
        }
        if (data.disponibilidade) {
            await ensureDisponibilidadeRefsExist();
            await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disponibilidade.deleteMany({
                where: {
                    professorId: existente.id_professor
                }
            });
            if (data.disponibilidade.length > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disponibilidade.createMany({
                    data: data.disponibilidade.map((d)=>({
                            professorId: existente.id_professor,
                            diaSemana: d.diaSemana,
                            periodoId: d.periodoId,
                            ordem: d.ordem
                        }))
                });
            }
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.update({
            where: {
                id_professor
            },
            data: {
                nome: data.nome ?? undefined,
                email: data.email ?? undefined,
                telefone: data.telefone ?? undefined,
                updated_at: new Date()
            }
        });
    }
    async showProfessor(id_professor) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.findUnique({
            where: {
                id_professor
            }
        });
    }
    async listarTodos() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.findMany({
            select: {
                id_professor: true,
                nome: true,
                email: true,
                telefone: true,
                ProfDisciplinas: {
                    include: {
                        Disciplina: true
                    }
                },
                Disponibilidade: {
                    select: {
                        idDisponibilidade: true,
                        diaSemana: true,
                        periodoId: true,
                        ordem: true,
                        DiaSemana: {
                            select: {
                                nome: true
                            }
                        },
                        Periodo: {
                            select: {
                                periodo: true
                            }
                        }
                    }
                }
            }
        });
    }
    async apagarProfessor(id_professor) {
        const professor = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.findUnique({
            where: {
                id_professor
            },
            include: {
                ProfDisciplinas: true
            }
        });
        if (!professor) {
            throw new Error("Professor não encontrado");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profDisciplinas.deleteMany({
            where: {
                professorId: professor.id_professor
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profTurma.deleteMany({
            where: {
                professorId: id_professor
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disponibilidade.deleteMany({
            where: {
                professorId: id_professor
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tempoLectivo.deleteMany({
            where: {
                professorId: id_professor
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.delete({
            where: {
                id_professor: professor.id_professor
            }
        });
        return {
            message: "Professor eliminado com sucesso"
        };
    }
}
const professorService = new ProfessorCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/lib/Service/Turma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TurmaCRUD",
    ()=>TurmaCRUD,
    "turmaService",
    ()=>turmaService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class TurmaCRUD {
    async criarTurma(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.create({
            data
        });
    }
    async atualizarTurma(id, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.update({
            where: {
                idTurma: id
            },
            data
        });
    }
    async showTurma(id) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.findUnique({
            where: {
                idTurma: id
            }
        });
    }
    async listarTodasTurmas() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.findMany({
            orderBy: {
                nome: "asc"
            }
        });
    }
    async apagarTurma(id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.delete({
            where: {
                idTurma: id
            }
        });
        return {
            message: "Turma eliminada com sucesso"
        };
    }
}
const turmaService = new TurmaCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/lib/Service/Classe.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ClasseCRUD",
    ()=>ClasseCRUD,
    "classeService",
    ()=>classeService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class ClasseCRUD {
    async criarTurma(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.create({
            data
        });
    }
    async atualizarTurma(nomeClasse, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.update({
            where: {
                nome: nomeClasse
            },
            data
        });
    }
    async showTurma(nomeClasse) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.findUnique({
            where: {
                nome: nomeClasse
            }
        });
    }
    async listarTodasTurmas() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.findMany({
            orderBy: {
                nome: "asc"
            }
        });
    }
    async apagarTurma(nomeClasse) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.delete({
            where: {
                nome: nomeClasse
            }
        });
        return {
            message: "Turma eliminada com sucesso"
        };
    }
}
const classeService = new ClasseCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/lib/Service/Curso.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CursoCRUD",
    ()=>CursoCRUD,
    "cursoService",
    ()=>cursoService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class CursoCRUD {
    async criarCurso(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.create({
            data
        });
    }
    async atualizarCurso(nomeCurso, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.update({
            where: {
                nome: nomeCurso
            },
            data
        });
    }
    async showCurso(nomeCurso) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.findUnique({
            where: {
                nome: nomeCurso
            }
        });
    }
    async listarTodosCursos() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.findMany({
            orderBy: {
                nome: "asc"
            }
        });
    }
    async apagarCurso(nomeCurso) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.delete({
            where: {
                nome: nomeCurso
            }
        });
        return {
            message: "Curso eliminado com sucesso"
        };
    }
}
const cursoService = new CursoCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/lib/Service/Disciplinas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DisciplinaCRUD",
    ()=>DisciplinaCRUD,
    "disciplinaService",
    ()=>disciplinaService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class DisciplinaCRUD {
    async criar(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disciplina.create({
            data
        });
    }
    async atualizar(id, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disciplina.update({
            where: {
                idDisciplina: id
            },
            data
        });
    }
    async mostrar(id) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disciplina.findUnique({
            where: {
                idDisciplina: id
            }
        });
    }
    async listarTodas() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disciplina.findMany({
            orderBy: {
                nome: 'asc'
            }
        });
    }
    async apagar(id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disciplina.delete({
            where: {
                idDisciplina: id
            }
        });
        return {
            message: "Disciplina eliminada com sucesso"
        };
    }
}
const disciplinaService = new DisciplinaCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/lib/Service/Sala.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SalaCRUD",
    ()=>SalaCRUD,
    "salaService",
    ()=>salaService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class SalaCRUD {
    async criarSala(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].sala.create({
            data
        });
    }
    async atualizarSala(id, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].sala.update({
            where: {
                idSala: id
            },
            data
        });
    }
    async showSala(id) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].sala.findUnique({
            where: {
                idSala: id
            }
        });
    }
    async listarTodasSalas() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].sala.findMany({
            orderBy: {
                nome: "asc"
            }
        });
    }
    async apagarSala(id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].sala.delete({
            where: {
                idSala: id
            }
        });
        return {
            message: "Sala eliminada com sucesso"
        };
    }
}
const salaService = new SalaCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/lib/Validation/Usuario.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseCreateProfessorSchema",
    ()=>baseCreateProfessorSchema,
    "createProfessorFormSchema",
    ()=>createProfessorFormSchema,
    "disponibilidadeItemSchema",
    ()=>disponibilidadeItemSchema,
    "updateProfessorSchema",
    ()=>updateProfessorSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const disponibilidadeItemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    diaSemana: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Dia da semana é obrigatório"),
    periodoId: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Período é obrigatório"),
    ordem: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().default(1)
});
const baseCreateProfessorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Email inválido").optional().nullable(),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>v.replace(/\D/g, "")).refine((v)=>v.length >= 8 && v.length <= 15, "Telefone inválido"),
    disciplinaIds: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive()).min(1, "O professor deve ter pelo menos uma disciplina"),
    disponibilidade: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(disponibilidadeItemSchema).optional()
});
const createProfessorFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Email inválido"),
    disciplinaIds: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive()).min(1, "O professor deve ter pelo menos uma disciplina"),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>v.replace(/\D/g, "")).refine((v)=>v.length >= 8 && v.length <= 15, "Telefone inválido"),
    disponibilidade: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(disponibilidadeItemSchema).optional()
});
const updateProfessorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Nome deve ter pelo menos 3 caracteres").optional(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Email inválido").optional(),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>v.replace(/\D/g, "")).refine((v)=>v.length >= 8 && v.length <= 15, "Telefone inválido").optional(),
    disciplinaIds: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive()).min(1, "O professor deve ter pelo menos uma disciplina").optional(),
    disponibilidade: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(disponibilidadeItemSchema).optional()
}).refine((data)=>data.nome || data.email || data.telefone || data.disciplinaIds || data.disponibilidade, {
    message: "Informe ao menos um campo para atualizar",
    path: [
        "nome"
    ]
});
}),
"[project]/Projecto-AURA/lib/Validation/Turma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTurmaSchema",
    ()=>createTurmaSchema,
    "updateTurmaSchema",
    ()=>updateTurmaSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createTurmaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    classe: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().min(1, "Classe é obrigatória"),
    curso: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().min(1, "Curso é obrigatório")
});
const updateTurmaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres").optional(),
    classe: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().min(1, "Classe é obrigatória").optional(),
    curso: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().min(1, "Curso é obrigatório").optional()
}).refine((data)=>data.nome || data.classe || data.curso, {
    message: "Informe ao menos um campo para atualizar",
    path: [
        "nome"
    ]
});
}),
"[project]/Projecto-AURA/lib/Validation/Classe.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClasseSchema",
    ()=>createClasseSchema,
    "updateClasseSchema",
    ()=>updateClasseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createClasseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
const updateClasseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
}),
"[project]/Projecto-AURA/lib/Validation/Curso.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCursoSchema",
    ()=>createCursoSchema,
    "updateCursoSchema",
    ()=>updateCursoSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createCursoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
const updateCursoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
}),
"[project]/Projecto-AURA/lib/Validation/Disciplina.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDisciplinaSchema",
    ()=>createDisciplinaSchema,
    "updateDisciplinaSchema",
    ()=>updateDisciplinaSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createDisciplinaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
const updateDisciplinaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
}),
];

//# sourceMappingURL=Projecto-AURA_lib_f9063486._.js.map