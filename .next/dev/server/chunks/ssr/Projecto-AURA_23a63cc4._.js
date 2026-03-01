module.exports = [
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
"[project]/Projecto-AURA/.next-internal/server/app/turmas/page/actions.js { ACTIONS_MODULE0 => \"[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
"[project]/Projecto-AURA/.next-internal/server/app/turmas/page/actions.js { ACTIONS_MODULE0 => \"[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "004900fc134d59c076887af818dd794da4aaa8a2d1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarCursos"],
    "0055b16a3fae72aac40edaa67b81be07792b68794b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodasTurmas"],
    "007bf27f35baa11e9a8e2923ffcefaec91483cc0b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarClasses"],
    "402291abd140bba179792473e7e5ccaf2a603fc052",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarTurma"],
    "4035ea8c3cb9b60e27811b673e1e34aee8b86de37f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarClasse"],
    "409449a837802197768cca534621659f89a79c7c4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarCurso"],
    "40bb2bc3923ae6f035aacc99db179a44502c97f833",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarCurso"],
    "40f777cc3b23127c51059cf9c7e249c24ccbfbdd74",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarClasse"],
    "40f8a125e8bf54253850189b1409f05c6b7736e48d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarTurma"],
    "603de0a6b2c1c73d2994f9dcb3d7df010bc1cdd062",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarTurma"],
    "60409710b9a6d221e0a86c4b3e68e32d6c002cf098",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarClasse"],
    "604c637a4921e1340685f5a05f55126c6f766505f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarCurso"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$turmas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Projecto-AURA/.next-internal/server/app/turmas/page/actions.js { ACTIONS_MODULE0 => "[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$turmas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$turmas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=Projecto-AURA_23a63cc4._.js.map