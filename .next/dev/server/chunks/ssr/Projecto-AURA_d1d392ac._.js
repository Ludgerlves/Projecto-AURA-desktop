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
"[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"004900fc134d59c076887af818dd794da4aaa8a2d1":"listarCursos","0055b16a3fae72aac40edaa67b81be07792b68794b":"listarTodasTurmas","007bf27f35baa11e9a8e2923ffcefaec91483cc0b3":"listarClasses","402291abd140bba179792473e7e5ccaf2a603fc052":"apagarTurma","4035ea8c3cb9b60e27811b673e1e34aee8b86de37f":"criarClasse","409449a837802197768cca534621659f89a79c7c4c":"apagarCurso","40bb2bc3923ae6f035aacc99db179a44502c97f833":"criarCurso","40f777cc3b23127c51059cf9c7e249c24ccbfbdd74":"apagarClasse","40f8a125e8bf54253850189b1409f05c6b7736e48d":"criarTurma","603de0a6b2c1c73d2994f9dcb3d7df010bc1cdd062":"atualizarTurma","60409710b9a6d221e0a86c4b3e68e32d6c002cf098":"atualizarClasse","604c637a4921e1340685f5a05f55126c6f766505f0":"atualizarCurso"},"",""] */ __turbopack_context__.s([
    "apagarClasse",
    ()=>apagarClasse,
    "apagarCurso",
    ()=>apagarCurso,
    "apagarTurma",
    ()=>apagarTurma,
    "atualizarClasse",
    ()=>atualizarClasse,
    "atualizarCurso",
    ()=>atualizarCurso,
    "atualizarTurma",
    ()=>atualizarTurma,
    "criarClasse",
    ()=>criarClasse,
    "criarCurso",
    ()=>criarCurso,
    "criarTurma",
    ()=>criarTurma,
    "listarClasses",
    ()=>listarClasses,
    "listarCursos",
    ()=>listarCursos,
    "listarTodasTurmas",
    ()=>listarTodasTurmas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Service/Turma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Service/Classe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Service/Curso.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Validation/Turma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Validation/Classe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Validation/Curso.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
async function criarTurma(formData) {
    try {
        const nome = formData.get('nome');
        const classe = formData.get('classe');
        const curso = formData.get('curso');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTurmaSchema"].parse({
            nome,
            classe,
            curso
        });
        const turma = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].criarTurma(validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: turma,
            message: 'Turma criada com sucesso!'
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
async function atualizarTurma(id, formData) {
    try {
        const nome = formData.get('nome');
        const classeRaw = formData.get('classe');
        const cursoRaw = formData.get('curso');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTurmaSchema"].parse({
            nome: nome || undefined,
            classe: classeRaw || undefined,
            curso: cursoRaw || undefined
        });
        const turma = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].atualizarTurma(id, validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: turma,
            message: 'Turma atualizada com sucesso!'
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
async function apagarTurma(id) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].apagarTurma(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: result,
            message: 'Turma apagada com sucesso!'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarTodasTurmas() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].listarTodasTurmas();
}
async function criarClasse(formData) {
    try {
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClasseSchema"].parse({
            nome
        });
        const classe = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].criarTurma(validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: classe,
            message: 'Classe criada com sucesso!'
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
async function atualizarClasse(nomeClasse, formData) {
    try {
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateClasseSchema"].parse({
            nome: nome || undefined
        });
        const classe = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].atualizarTurma(nomeClasse, validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: classe,
            message: 'Classe atualizada com sucesso!'
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
async function apagarClasse(nomeClasse) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].apagarTurma(nomeClasse);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: result,
            message: 'Classe apagada com sucesso!'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarClasses() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].listarTodasTurmas();
}
async function criarCurso(formData) {
    try {
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCursoSchema"].parse({
            nome
        });
        const curso = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cursoService"].criarCurso(validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: curso,
            message: 'Curso criado com sucesso!'
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
async function atualizarCurso(nomeCurso, formData) {
    try {
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCursoSchema"].parse({
            nome: nome || undefined
        });
        const curso = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cursoService"].atualizarCurso(nomeCurso, validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: curso,
            message: 'Curso atualizado com sucesso!'
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
async function apagarCurso(nomeCurso) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cursoService"].apagarCurso(nomeCurso);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: result,
            message: 'Curso apagado com sucesso!'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarCursos() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cursoService"].listarTodosCursos();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    criarTurma,
    atualizarTurma,
    apagarTurma,
    listarTodasTurmas,
    criarClasse,
    atualizarClasse,
    apagarClasse,
    listarClasses,
    criarCurso,
    atualizarCurso,
    apagarCurso,
    listarCursos
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarTurma, "40f8a125e8bf54253850189b1409f05c6b7736e48d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarTurma, "603de0a6b2c1c73d2994f9dcb3d7df010bc1cdd062", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarTurma, "402291abd140bba179792473e7e5ccaf2a603fc052", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarTodasTurmas, "0055b16a3fae72aac40edaa67b81be07792b68794b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarClasse, "4035ea8c3cb9b60e27811b673e1e34aee8b86de37f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarClasse, "60409710b9a6d221e0a86c4b3e68e32d6c002cf098", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarClasse, "40f777cc3b23127c51059cf9c7e249c24ccbfbdd74", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarClasses, "007bf27f35baa11e9a8e2923ffcefaec91483cc0b3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarCurso, "40bb2bc3923ae6f035aacc99db179a44502c97f833", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarCurso, "604c637a4921e1340685f5a05f55126c6f766505f0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarCurso, "409449a837802197768cca534621659f89a79c7c4c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarCursos, "004900fc134d59c076887af818dd794da4aaa8a2d1", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"008908a0fde4f45924f2bc7857c2c94789115c7240":"listarTodas","406862d2d1ab68a9f7d1bd5c35e0fc219c2dfb1a0f":"criarDisciplina","40b817e78a43edb7a389759f368236f9b85a121a22":"apagarDisciplina","602d5d898df46f7a5dd338280b768026fdbdaec997":"criarDisciplinaAction","6080c2626b95f495942dfa8ab6e924d3d627173b75":"atualizarDisciplina"},"",""] */ __turbopack_context__.s([
    "apagarDisciplina",
    ()=>apagarDisciplina,
    "atualizarDisciplina",
    ()=>atualizarDisciplina,
    "criarDisciplina",
    ()=>criarDisciplina,
    "criarDisciplinaAction",
    ()=>criarDisciplinaAction,
    "listarTodas",
    ()=>listarTodas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Service/Disciplinas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Disciplina$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Validation/Disciplina.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function criarDisciplina(formData) {
    try {
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Disciplina$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDisciplinaSchema"].parse({
            nome
        });
        const disciplina = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disciplinaService"].criar(validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/disciplinas');
        return {
            success: true,
            data: disciplina,
            message: 'Disciplina criada com sucesso!'
        };
    } catch (error) {
        console.error('Erro ao criar disciplina:', error);
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
async function criarDisciplinaAction(prevState, formData) {
    return await criarDisciplina(formData);
}
async function atualizarDisciplina(id, formData) {
    try {
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Validation$2f$Disciplina$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDisciplinaSchema"].parse({
            nome: nome || undefined
        });
        const disciplina = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disciplinaService"].atualizar(id, validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/disciplinas');
        return {
            success: true,
            data: disciplina,
            message: 'Disciplina atualizada com sucesso!'
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
async function apagarDisciplina(id) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disciplinaService"].apagar(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/disciplinas');
        return {
            success: true,
            data: result,
            message: 'Disciplina apagada com sucesso!'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarTodas() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disciplinaService"].listarTodas();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    criarDisciplina,
    criarDisciplinaAction,
    atualizarDisciplina,
    apagarDisciplina,
    listarTodas
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarDisciplina, "406862d2d1ab68a9f7d1bd5c35e0fc219c2dfb1a0f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarDisciplinaAction, "602d5d898df46f7a5dd338280b768026fdbdaec997", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarDisciplina, "6080c2626b95f495942dfa8ab6e924d3d627173b75", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarDisciplina, "40b817e78a43edb7a389759f368236f9b85a121a22", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarTodas, "008908a0fde4f45924f2bc7857c2c94789115c7240", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/app/dashboard-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"004d7bc323ae3f16947e2f476ce52e4e4bc886b913":"getAulasHoje","005b41b59e249b4969f7e24a19ebd5d923c99d59ee":"getDashboardStats"},"",""] */ __turbopack_context__.s([
    "getAulasHoje",
    ()=>getAulasHoje,
    "getDashboardStats",
    ()=>getDashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Sala$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/lib/Service/Sala.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Sala$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Sala$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
async function getDashboardStats() {
    const [professores, turmas, disciplinas, salas] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodos"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodasTurmas"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodas"])(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$Service$2f$Sala$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["salaService"].listarTodasSalas()
    ]);
    return {
        professores: professores.length,
        turmas: turmas.length,
        disciplinas: disciplinas.length,
        salas: salas.length
    };
}
//* Obtém o nome do dia da semana em português
function getDiaSemanaHoje() {
    const dias = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ];
    const hoje = new Date().getDay();
    return dias[hoje];
}
async function getAulasHoje() {
    const diaHoje = getDiaSemanaHoje();
    // Buscar o dia da semana no banco
    const diaSemana = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].diaSemana.findUnique({
        where: {
            nome: diaHoje
        }
    });
    if (!diaSemana) {
        return [];
    }
    // Buscar TempoLectivo do dia de hoje com todas as relações
    const aulas = await __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tempoLectivo.findMany({
        where: {
            diaSemana: diaSemana.nome
        },
        include: {
            Disciplina: true,
            Turma: true,
            Sala: true,
            Professor: true,
            Periodo: true,
            DiaSemana: true
        },
        orderBy: [
            {
                ordem: 'asc'
            },
            {
                periodoId: 'asc'
            }
        ]
    });
    return aulas.map((aula)=>({
            id: aula.idTempoLectivo,
            time: aula.Periodo.periodo,
            subject: aula.Disciplina.nome,
            turma: aula.Turma.nome,
            room: aula.Sala.nome,
            professor: aula.Professor.nome,
            ordem: aula.ordem
        }));
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDashboardStats,
    getAulasHoje
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDashboardStats, "005b41b59e249b4969f7e24a19ebd5d923c99d59ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAulasHoje, "004d7bc323ae3f16947e2f476ce52e4e4bc886b913", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Projecto-AURA/app/dashboard-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/dashboard-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Projecto-AURA/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Projecto-AURA/app/dashboard-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "000fa4ea59e10b257cdc3aae421e982f838bb4908d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarDiasSemana"],
    "0017d19310bdf68aeaa31043770417a007954061e7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarDisciplinas"],
    "004900fc134d59c076887af818dd794da4aaa8a2d1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarCursos"],
    "004d7bc323ae3f16947e2f476ce52e4e4bc886b913",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAulasHoje"],
    "0055b16a3fae72aac40edaa67b81be07792b68794b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodasTurmas"],
    "005b41b59e249b4969f7e24a19ebd5d923c99d59ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardStats"],
    "007bf27f35baa11e9a8e2923ffcefaec91483cc0b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarClasses"],
    "00883e943b204ccb5ecb492f9e69dd05d452159f5b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodos"],
    "008908a0fde4f45924f2bc7857c2c94789115c7240",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodas"],
    "00b5c9f395fd967403fc54a3c12662ed88f07e5567",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarPeriodos"],
    "402291abd140bba179792473e7e5ccaf2a603fc052",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarTurma"],
    "4035ea8c3cb9b60e27811b673e1e34aee8b86de37f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarClasse"],
    "406862d2d1ab68a9f7d1bd5c35e0fc219c2dfb1a0f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarDisciplina"],
    "4068b1696fcf812e202458f94e2e85d50916bd1e19",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarProfessor"],
    "406a9cf2c110ca5210aca72425a60e8bb951c9ee4d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarProfessor"],
    "409449a837802197768cca534621659f89a79c7c4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarCurso"],
    "40abf5e1a75756bca182c865fc3c11f936b0019e2b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["showProfessor"],
    "40b817e78a43edb7a389759f368236f9b85a121a22",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarDisciplina"],
    "40bb2bc3923ae6f035aacc99db179a44502c97f833",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarCurso"],
    "40f777cc3b23127c51059cf9c7e249c24ccbfbdd74",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarClasse"],
    "40f8a125e8bf54253850189b1409f05c6b7736e48d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarTurma"],
    "602d5d898df46f7a5dd338280b768026fdbdaec997",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarDisciplinaAction"],
    "603cce55e97e73ad6a60db635c5074d3a30be189d3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarDisponibilidade"],
    "603de0a6b2c1c73d2994f9dcb3d7df010bc1cdd062",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarTurma"],
    "60409710b9a6d221e0a86c4b3e68e32d6c002cf098",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarClasse"],
    "604c637a4921e1340685f5a05f55126c6f766505f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarCurso"],
    "606b08ff8df8f471d324c20544b24757a563770164",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarProfessorAction"],
    "6073c656a0bd0da616efe3408a86f2fdfc5467a949",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarProfessor"],
    "6080c2626b95f495942dfa8ab6e924d3d627173b75",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarDisciplina"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Projecto-AURA/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Projecto-AURA/app/dashboard-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/dashboard-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=Projecto-AURA_d1d392ac._.js.map