module.exports = [
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
"[project]/Projecto-AURA/.next-internal/server/app/disciplinas/page/actions.js { ACTIONS_MODULE0 => \"[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
"[project]/Projecto-AURA/.next-internal/server/app/disciplinas/page/actions.js { ACTIONS_MODULE0 => \"[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "008908a0fde4f45924f2bc7857c2c94789115c7240",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodas"],
    "406862d2d1ab68a9f7d1bd5c35e0fc219c2dfb1a0f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarDisciplina"],
    "40b817e78a43edb7a389759f368236f9b85a121a22",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarDisciplina"],
    "602d5d898df46f7a5dd338280b768026fdbdaec997",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarDisciplinaAction"],
    "6080c2626b95f495942dfa8ab6e924d3d627173b75",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarDisciplina"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$disciplinas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Projecto-AURA/.next-internal/server/app/disciplinas/page/actions.js { ACTIONS_MODULE0 => "[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projecto-AURA/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$disciplinas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f2e$next$2d$internal$2f$server$2f$app$2f$disciplinas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Projecto$2d$AURA$2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=Projecto-AURA_a4f54115._.js.map