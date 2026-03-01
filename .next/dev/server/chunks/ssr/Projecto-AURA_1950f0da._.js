module.exports = [
"[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"000fa4ea59e10b257cdc3aae421e982f838bb4908d":"listarDiasSemana","0017d19310bdf68aeaa31043770417a007954061e7":"listarDisciplinas","00883e943b204ccb5ecb492f9e69dd05d452159f5b":"listarTodos","00b5c9f395fd967403fc54a3c12662ed88f07e5567":"listarPeriodos","4068b1696fcf812e202458f94e2e85d50916bd1e19":"apagarProfessor","406a9cf2c110ca5210aca72425a60e8bb951c9ee4d":"criarProfessor","40abf5e1a75756bca182c865fc3c11f936b0019e2b":"showProfessor","603cce55e97e73ad6a60db635c5074d3a30be189d3":"atualizarDisponibilidade","606b08ff8df8f471d324c20544b24757a563770164":"criarProfessorAction","6073c656a0bd0da616efe3408a86f2fdfc5467a949":"atualizarProfessor"},"",""] */ __turbopack_context__.s([
    "apagarProfessor",
    ()=>apagarProfessor,
    "atualizarDisponibilidade",
    ()=>atualizarDisponibilidade,
    "atualizarProfessor",
    ()=>atualizarProfessor,
    "criarProfessor",
    ()=>criarProfessor,
    "criarProfessorAction",
    ()=>criarProfessorAction,
    "listarDiasSemana",
    ()=>listarDiasSemana,
    "listarDisciplinas",
    ()=>listarDisciplinas,
    "listarPeriodos",
    ()=>listarPeriodos,
    "listarTodos",
    ()=>listarTodos,
    "showProfessor",
    ()=>showProfessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Service/Professores.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Usuario$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Validation/Usuario.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function parseDisciplinaIds(formData) {
    const raw = formData.getAll('disciplinaIds');
    return raw.map((v)=>parseInt(String(v), 10)).filter((n)=>!isNaN(n));
}
function parseDisponibilidade(formData) {
    const raw = formData.get('disponibilidade');
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch  {
        return [];
    }
}
async function criarProfessor(formData) {
    try {
        // 1. Validação do formulário
        const nome = formData.get('nome');
        const email = formData.get('email');
        const disciplinaIds = parseDisciplinaIds(formData);
        const telefone = formData.get('telefone');
        const disponibilidade = parseDisponibilidade(formData);
        const formValidation = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Usuario$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfessorFormSchema"].safeParse({
            nome,
            email,
            disciplinaIds,
            telefone,
            disponibilidade
        });
        if (!formValidation.success) {
            return {
                success: false,
                errors: formValidation.error.flatten().fieldErrors,
                message: 'Erro de validação no formulário'
            };
        }
        // 3. Preparar dados para o Service
        const professorData = {
            nome,
            email,
            telefone,
            disciplinaIds,
            disponibilidade
        };
        // 4. Validar pelo schema central e usar o service
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Usuario$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseCreateProfessorSchema"].parse(professorData);
        const professor = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].criarProfessor(validatedData);
        // 5. Revalidar cache
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/professores');
        return {
            success: true,
            data: professor,
            message: 'Professor criado com sucesso!'
        };
    } catch (error) {
        console.error('Erro ao criar professor:', error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação'
            };
        }
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function criarProfessorAction(prevState, formData) {
    return await criarProfessor(formData);
}
async function atualizarProfessor(id, formData) {
    try {
        const nome = formData.get('nome');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const disciplinaIds = parseDisciplinaIds(formData);
        const disponibilidade = parseDisponibilidade(formData);
        const validateData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Usuario$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProfessorSchema"].parse({
            nome: nome || undefined,
            email: email || undefined,
            telefone: telefone || undefined,
            disciplinaIds: disciplinaIds.length > 0 ? disciplinaIds : undefined,
            disponibilidade: disponibilidade.length > 0 ? disponibilidade : undefined
        });
        const professor = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].atualizarProfessor(id, validateData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/professores');
        return {
            success: true,
            data: professor,
            message: 'Professor atualizado com sucesso'
        };
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação'
            };
        }
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function apagarProfessor(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].showProfessor(id);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].apagarProfessor(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/professores');
        return {
            success: true,
            data: result,
            message: 'Professor apagado com sucesso'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}
async function listarTodos() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].listarTodos();
}
async function showProfessor(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].showProfessor(id);
    } catch (error) {
        return null;
    }
}
async function listarDisciplinas() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disciplina.findMany({
        orderBy: {
            nome: 'asc'
        }
    });
}
async function atualizarDisponibilidade(professorId, slots) {
    try {
        const validated = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Usuario$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disponibilidadeItemSchema"]).parse(slots);
        await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].atualizarProfessor(professorId, {
            disponibilidade: validated
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/professores');
        return {
            success: true,
            message: 'Disponibilidade atualizada com sucesso'
        };
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                success: false,
                message: 'Dados de disponibilidade inválidos'
            };
        }
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarDiasSemana() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].diaSemana.findMany({
        orderBy: {
            nome: 'asc'
        }
    });
}
async function listarPeriodos() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].periodo.findMany({
        orderBy: {
            periodo: 'asc'
        }
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    criarProfessor,
    criarProfessorAction,
    atualizarProfessor,
    apagarProfessor,
    listarTodos,
    showProfessor,
    listarDisciplinas,
    atualizarDisponibilidade,
    listarDiasSemana,
    listarPeriodos
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarProfessor, "406a9cf2c110ca5210aca72425a60e8bb951c9ee4d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarProfessorAction, "606b08ff8df8f471d324c20544b24757a563770164", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarProfessor, "6073c656a0bd0da616efe3408a86f2fdfc5467a949", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarProfessor, "4068b1696fcf812e202458f94e2e85d50916bd1e19", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarTodos, "00883e943b204ccb5ecb492f9e69dd05d452159f5b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(showProfessor, "40abf5e1a75756bca182c865fc3c11f936b0019e2b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarDisciplinas, "0017d19310bdf68aeaa31043770417a007954061e7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarDisponibilidade, "603cce55e97e73ad6a60db635c5074d3a30be189d3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarDiasSemana, "000fa4ea59e10b257cdc3aae421e982f838bb4908d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarPeriodos, "00b5c9f395fd967403fc54a3c12662ed88f07e5567", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/.next-internal/server/app/professores/page/actions.js { ACTIONS_MODULE0 => \"[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/.next-internal/server/app/professores/page/actions.js { ACTIONS_MODULE0 => \"[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "000fa4ea59e10b257cdc3aae421e982f838bb4908d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarDiasSemana"],
    "0017d19310bdf68aeaa31043770417a007954061e7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarDisciplinas"],
    "00883e943b204ccb5ecb492f9e69dd05d452159f5b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodos"],
    "00b5c9f395fd967403fc54a3c12662ed88f07e5567",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarPeriodos"],
    "4068b1696fcf812e202458f94e2e85d50916bd1e19",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarProfessor"],
    "406a9cf2c110ca5210aca72425a60e8bb951c9ee4d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarProfessor"],
    "40abf5e1a75756bca182c865fc3c11f936b0019e2b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["showProfessor"],
    "603cce55e97e73ad6a60db635c5074d3a30be189d3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarDisponibilidade"],
    "606b08ff8df8f471d324c20544b24757a563770164",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarProfessorAction"],
    "6073c656a0bd0da616efe3408a86f2fdfc5467a949",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarProfessor"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$professores$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Projecto-AURA/.next-internal/server/app/professores/page/actions.js { ACTIONS_MODULE0 => "[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$professores$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$professores$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=Projecto-AURA_1950f0da._.js.map