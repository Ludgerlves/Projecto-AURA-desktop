
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Classe
 * 
 */
export type Classe = $Result.DefaultSelection<Prisma.$ClassePayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model DiaSemana
 * 
 */
export type DiaSemana = $Result.DefaultSelection<Prisma.$DiaSemanaPayload>
/**
 * Model Disciplina
 * 
 */
export type Disciplina = $Result.DefaultSelection<Prisma.$DisciplinaPayload>
/**
 * Model Disponibilidade
 * 
 */
export type Disponibilidade = $Result.DefaultSelection<Prisma.$DisponibilidadePayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Periodo
 * 
 */
export type Periodo = $Result.DefaultSelection<Prisma.$PeriodoPayload>
/**
 * Model ProfDisciplinas
 * 
 */
export type ProfDisciplinas = $Result.DefaultSelection<Prisma.$ProfDisciplinasPayload>
/**
 * Model ProfTurma
 * 
 */
export type ProfTurma = $Result.DefaultSelection<Prisma.$ProfTurmaPayload>
/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model TempoLectivo
 * 
 */
export type TempoLectivo = $Result.DefaultSelection<Prisma.$TempoLectivoPayload>
/**
 * Model Turma
 * 
 */
export type Turma = $Result.DefaultSelection<Prisma.$TurmaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Classes
 * const classes = await prisma.classe.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Classes
   * const classes = await prisma.classe.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.classe`: Exposes CRUD operations for the **Classe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classe.findMany()
    * ```
    */
  get classe(): Prisma.ClasseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diaSemana`: Exposes CRUD operations for the **DiaSemana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiaSemanas
    * const diaSemanas = await prisma.diaSemana.findMany()
    * ```
    */
  get diaSemana(): Prisma.DiaSemanaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **Disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.DisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibilidade`: Exposes CRUD operations for the **Disponibilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilidades
    * const disponibilidades = await prisma.disponibilidade.findMany()
    * ```
    */
  get disponibilidade(): Prisma.DisponibilidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.periodo`: Exposes CRUD operations for the **Periodo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Periodos
    * const periodos = await prisma.periodo.findMany()
    * ```
    */
  get periodo(): Prisma.PeriodoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profDisciplinas`: Exposes CRUD operations for the **ProfDisciplinas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfDisciplinas
    * const profDisciplinas = await prisma.profDisciplinas.findMany()
    * ```
    */
  get profDisciplinas(): Prisma.ProfDisciplinasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profTurma`: Exposes CRUD operations for the **ProfTurma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfTurmas
    * const profTurmas = await prisma.profTurma.findMany()
    * ```
    */
  get profTurma(): Prisma.ProfTurmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempoLectivo`: Exposes CRUD operations for the **TempoLectivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempoLectivos
    * const tempoLectivos = await prisma.tempoLectivo.findMany()
    * ```
    */
  get tempoLectivo(): Prisma.TempoLectivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Classe: 'Classe',
    Curso: 'Curso',
    DiaSemana: 'DiaSemana',
    Disciplina: 'Disciplina',
    Disponibilidade: 'Disponibilidade',
    Professor: 'Professor',
    Periodo: 'Periodo',
    ProfDisciplinas: 'ProfDisciplinas',
    ProfTurma: 'ProfTurma',
    Sala: 'Sala',
    TempoLectivo: 'TempoLectivo',
    Turma: 'Turma'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "classe" | "curso" | "diaSemana" | "disciplina" | "disponibilidade" | "professor" | "periodo" | "profDisciplinas" | "profTurma" | "sala" | "tempoLectivo" | "turma"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Classe: {
        payload: Prisma.$ClassePayload<ExtArgs>
        fields: Prisma.ClasseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClasseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClasseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          findFirst: {
            args: Prisma.ClasseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClasseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          findMany: {
            args: Prisma.ClasseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          create: {
            args: Prisma.ClasseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          createMany: {
            args: Prisma.ClasseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClasseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          delete: {
            args: Prisma.ClasseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          update: {
            args: Prisma.ClasseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          deleteMany: {
            args: Prisma.ClasseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClasseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClasseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          upsert: {
            args: Prisma.ClasseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          aggregate: {
            args: Prisma.ClasseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasse>
          }
          groupBy: {
            args: Prisma.ClasseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClasseCountArgs<ExtArgs>
            result: $Utils.Optional<ClasseCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      DiaSemana: {
        payload: Prisma.$DiaSemanaPayload<ExtArgs>
        fields: Prisma.DiaSemanaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiaSemanaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiaSemanaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          findFirst: {
            args: Prisma.DiaSemanaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiaSemanaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          findMany: {
            args: Prisma.DiaSemanaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          create: {
            args: Prisma.DiaSemanaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          createMany: {
            args: Prisma.DiaSemanaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiaSemanaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          delete: {
            args: Prisma.DiaSemanaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          update: {
            args: Prisma.DiaSemanaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          deleteMany: {
            args: Prisma.DiaSemanaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiaSemanaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiaSemanaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          upsert: {
            args: Prisma.DiaSemanaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          aggregate: {
            args: Prisma.DiaSemanaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiaSemana>
          }
          groupBy: {
            args: Prisma.DiaSemanaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiaSemanaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiaSemanaCountArgs<ExtArgs>
            result: $Utils.Optional<DiaSemanaCountAggregateOutputType> | number
          }
        }
      }
      Disciplina: {
        payload: Prisma.$DisciplinaPayload<ExtArgs>
        fields: Prisma.DisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findFirst: {
            args: Prisma.DisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findMany: {
            args: Prisma.DisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          create: {
            args: Prisma.DisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          createMany: {
            args: Prisma.DisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          delete: {
            args: Prisma.DisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          update: {
            args: Prisma.DisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.DisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.DisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      Disponibilidade: {
        payload: Prisma.$DisponibilidadePayload<ExtArgs>
        fields: Prisma.DisponibilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          findFirst: {
            args: Prisma.DisponibilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          findMany: {
            args: Prisma.DisponibilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          create: {
            args: Prisma.DisponibilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          createMany: {
            args: Prisma.DisponibilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisponibilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          delete: {
            args: Prisma.DisponibilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          update: {
            args: Prisma.DisponibilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          deleteMany: {
            args: Prisma.DisponibilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          upsert: {
            args: Prisma.DisponibilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          aggregate: {
            args: Prisma.DisponibilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibilidade>
          }
          groupBy: {
            args: Prisma.DisponibilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadeCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Periodo: {
        payload: Prisma.$PeriodoPayload<ExtArgs>
        fields: Prisma.PeriodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findFirst: {
            args: Prisma.PeriodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findMany: {
            args: Prisma.PeriodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          create: {
            args: Prisma.PeriodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          createMany: {
            args: Prisma.PeriodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeriodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          delete: {
            args: Prisma.PeriodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          update: {
            args: Prisma.PeriodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          deleteMany: {
            args: Prisma.PeriodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeriodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          upsert: {
            args: Prisma.PeriodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          aggregate: {
            args: Prisma.PeriodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriodo>
          }
          groupBy: {
            args: Prisma.PeriodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodoCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodoCountAggregateOutputType> | number
          }
        }
      }
      ProfDisciplinas: {
        payload: Prisma.$ProfDisciplinasPayload<ExtArgs>
        fields: Prisma.ProfDisciplinasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfDisciplinasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfDisciplinasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          findFirst: {
            args: Prisma.ProfDisciplinasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfDisciplinasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          findMany: {
            args: Prisma.ProfDisciplinasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>[]
          }
          create: {
            args: Prisma.ProfDisciplinasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          createMany: {
            args: Prisma.ProfDisciplinasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfDisciplinasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>[]
          }
          delete: {
            args: Prisma.ProfDisciplinasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          update: {
            args: Prisma.ProfDisciplinasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          deleteMany: {
            args: Prisma.ProfDisciplinasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfDisciplinasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfDisciplinasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>[]
          }
          upsert: {
            args: Prisma.ProfDisciplinasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          aggregate: {
            args: Prisma.ProfDisciplinasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfDisciplinas>
          }
          groupBy: {
            args: Prisma.ProfDisciplinasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfDisciplinasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfDisciplinasCountArgs<ExtArgs>
            result: $Utils.Optional<ProfDisciplinasCountAggregateOutputType> | number
          }
        }
      }
      ProfTurma: {
        payload: Prisma.$ProfTurmaPayload<ExtArgs>
        fields: Prisma.ProfTurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfTurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfTurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>
          }
          findFirst: {
            args: Prisma.ProfTurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfTurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>
          }
          findMany: {
            args: Prisma.ProfTurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>[]
          }
          create: {
            args: Prisma.ProfTurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>
          }
          createMany: {
            args: Prisma.ProfTurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfTurmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>[]
          }
          delete: {
            args: Prisma.ProfTurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>
          }
          update: {
            args: Prisma.ProfTurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>
          }
          deleteMany: {
            args: Prisma.ProfTurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfTurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfTurmaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>[]
          }
          upsert: {
            args: Prisma.ProfTurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfTurmaPayload>
          }
          aggregate: {
            args: Prisma.ProfTurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfTurma>
          }
          groupBy: {
            args: Prisma.ProfTurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfTurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfTurmaCountArgs<ExtArgs>
            result: $Utils.Optional<ProfTurmaCountAggregateOutputType> | number
          }
        }
      }
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      TempoLectivo: {
        payload: Prisma.$TempoLectivoPayload<ExtArgs>
        fields: Prisma.TempoLectivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempoLectivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempoLectivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>
          }
          findFirst: {
            args: Prisma.TempoLectivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempoLectivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>
          }
          findMany: {
            args: Prisma.TempoLectivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>[]
          }
          create: {
            args: Prisma.TempoLectivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>
          }
          createMany: {
            args: Prisma.TempoLectivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempoLectivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>[]
          }
          delete: {
            args: Prisma.TempoLectivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>
          }
          update: {
            args: Prisma.TempoLectivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>
          }
          deleteMany: {
            args: Prisma.TempoLectivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempoLectivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempoLectivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>[]
          }
          upsert: {
            args: Prisma.TempoLectivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempoLectivoPayload>
          }
          aggregate: {
            args: Prisma.TempoLectivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempoLectivo>
          }
          groupBy: {
            args: Prisma.TempoLectivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempoLectivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempoLectivoCountArgs<ExtArgs>
            result: $Utils.Optional<TempoLectivoCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: Prisma.$TurmaPayload<ExtArgs>
        fields: Prisma.TurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TurmaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    classe?: ClasseOmit
    curso?: CursoOmit
    diaSemana?: DiaSemanaOmit
    disciplina?: DisciplinaOmit
    disponibilidade?: DisponibilidadeOmit
    professor?: ProfessorOmit
    periodo?: PeriodoOmit
    profDisciplinas?: ProfDisciplinasOmit
    profTurma?: ProfTurmaOmit
    sala?: SalaOmit
    tempoLectivo?: TempoLectivoOmit
    turma?: TurmaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClasseCountOutputType
   */

  export type ClasseCountOutputType = {
    Turma: number
  }

  export type ClasseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turma?: boolean | ClasseCountOutputTypeCountTurmaArgs
  }

  // Custom InputTypes
  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClasseCountOutputType
     */
    select?: ClasseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeCountTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    Turma: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turma?: boolean | CursoCountOutputTypeCountTurmaArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type DiaSemanaCountOutputType
   */

  export type DiaSemanaCountOutputType = {
    Disponibilidade: number
    TempoLectivo: number
  }

  export type DiaSemanaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | DiaSemanaCountOutputTypeCountDisponibilidadeArgs
    TempoLectivo?: boolean | DiaSemanaCountOutputTypeCountTempoLectivoArgs
  }

  // Custom InputTypes
  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemanaCountOutputType
     */
    select?: DiaSemanaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeCountDisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
  }

  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeCountTempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempoLectivoWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    ProfDisciplinas: number
    TempoLectivo: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProfDisciplinas?: boolean | DisciplinaCountOutputTypeCountProfDisciplinasArgs
    TempoLectivo?: boolean | DisciplinaCountOutputTypeCountTempoLectivoArgs
  }

  // Custom InputTypes
  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinaCountOutputType
     */
    select?: DisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountProfDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfDisciplinasWhereInput
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountTempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempoLectivoWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    Disponibilidade: number
    ProfDisciplinas: number
    ProfTurma: number
    TempoLectivo: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | ProfessorCountOutputTypeCountDisponibilidadeArgs
    ProfDisciplinas?: boolean | ProfessorCountOutputTypeCountProfDisciplinasArgs
    ProfTurma?: boolean | ProfessorCountOutputTypeCountProfTurmaArgs
    TempoLectivo?: boolean | ProfessorCountOutputTypeCountTempoLectivoArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountDisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountProfDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfDisciplinasWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountProfTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfTurmaWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountTempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempoLectivoWhereInput
  }


  /**
   * Count Type PeriodoCountOutputType
   */

  export type PeriodoCountOutputType = {
    Disponibilidade: number
    TempoLectivo: number
  }

  export type PeriodoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | PeriodoCountOutputTypeCountDisponibilidadeArgs
    TempoLectivo?: boolean | PeriodoCountOutputTypeCountTempoLectivoArgs
  }

  // Custom InputTypes
  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodoCountOutputType
     */
    select?: PeriodoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeCountDisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
  }

  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeCountTempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempoLectivoWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    TempoLectivo: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TempoLectivo?: boolean | SalaCountOutputTypeCountTempoLectivoArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountTempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempoLectivoWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    ProfTurma: number
    TempoLectivo: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProfTurma?: boolean | TurmaCountOutputTypeCountProfTurmaArgs
    TempoLectivo?: boolean | TurmaCountOutputTypeCountTempoLectivoArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountProfTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfTurmaWhereInput
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountTempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempoLectivoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Classe
   */

  export type AggregateClasse = {
    _count: ClasseCountAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  export type ClasseMinAggregateOutputType = {
    nome: string | null
  }

  export type ClasseMaxAggregateOutputType = {
    nome: string | null
  }

  export type ClasseCountAggregateOutputType = {
    nome: number
    _all: number
  }


  export type ClasseMinAggregateInputType = {
    nome?: true
  }

  export type ClasseMaxAggregateInputType = {
    nome?: true
  }

  export type ClasseCountAggregateInputType = {
    nome?: true
    _all?: true
  }

  export type ClasseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classe to aggregate.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClasseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasseMaxAggregateInputType
  }

  export type GetClasseAggregateType<T extends ClasseAggregateArgs> = {
        [P in keyof T & keyof AggregateClasse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasse[P]>
      : GetScalarType<T[P], AggregateClasse[P]>
  }




  export type ClasseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasseWhereInput
    orderBy?: ClasseOrderByWithAggregationInput | ClasseOrderByWithAggregationInput[]
    by: ClasseScalarFieldEnum[] | ClasseScalarFieldEnum
    having?: ClasseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasseCountAggregateInputType | true
    _min?: ClasseMinAggregateInputType
    _max?: ClasseMaxAggregateInputType
  }

  export type ClasseGroupByOutputType = {
    nome: string
    _count: ClasseCountAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  type GetClasseGroupByPayload<T extends ClasseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasseGroupByOutputType[P]>
            : GetScalarType<T[P], ClasseGroupByOutputType[P]>
        }
      >
    >


  export type ClasseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    Turma?: boolean | Classe$TurmaArgs<ExtArgs>
    _count?: boolean | ClasseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectScalar = {
    nome?: boolean
  }

  export type ClasseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome", ExtArgs["result"]["classe"]>
  export type ClasseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turma?: boolean | Classe$TurmaArgs<ExtArgs>
    _count?: boolean | ClasseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClasseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClasseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classe"
    objects: {
      Turma: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
    }, ExtArgs["result"]["classe"]>
    composites: {}
  }

  type ClasseGetPayload<S extends boolean | null | undefined | ClasseDefaultArgs> = $Result.GetResult<Prisma.$ClassePayload, S>

  type ClasseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClasseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasseCountAggregateInputType | true
    }

  export interface ClasseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classe'], meta: { name: 'Classe' } }
    /**
     * Find zero or one Classe that matches the filter.
     * @param {ClasseFindUniqueArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClasseFindUniqueArgs>(args: SelectSubset<T, ClasseFindUniqueArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClasseFindUniqueOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClasseFindUniqueOrThrowArgs>(args: SelectSubset<T, ClasseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindFirstArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClasseFindFirstArgs>(args?: SelectSubset<T, ClasseFindFirstArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindFirstOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClasseFindFirstOrThrowArgs>(args?: SelectSubset<T, ClasseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classe.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classe.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const classeWithNomeOnly = await prisma.classe.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends ClasseFindManyArgs>(args?: SelectSubset<T, ClasseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classe.
     * @param {ClasseCreateArgs} args - Arguments to create a Classe.
     * @example
     * // Create one Classe
     * const Classe = await prisma.classe.create({
     *   data: {
     *     // ... data to create a Classe
     *   }
     * })
     * 
     */
    create<T extends ClasseCreateArgs>(args: SelectSubset<T, ClasseCreateArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClasseCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClasseCreateManyArgs>(args?: SelectSubset<T, ClasseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClasseCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `nome`
     * const classeWithNomeOnly = await prisma.classe.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClasseCreateManyAndReturnArgs>(args?: SelectSubset<T, ClasseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classe.
     * @param {ClasseDeleteArgs} args - Arguments to delete one Classe.
     * @example
     * // Delete one Classe
     * const Classe = await prisma.classe.delete({
     *   where: {
     *     // ... filter to delete one Classe
     *   }
     * })
     * 
     */
    delete<T extends ClasseDeleteArgs>(args: SelectSubset<T, ClasseDeleteArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classe.
     * @param {ClasseUpdateArgs} args - Arguments to update one Classe.
     * @example
     * // Update one Classe
     * const classe = await prisma.classe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClasseUpdateArgs>(args: SelectSubset<T, ClasseUpdateArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClasseDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClasseDeleteManyArgs>(args?: SelectSubset<T, ClasseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClasseUpdateManyArgs>(args: SelectSubset<T, ClasseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClasseUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `nome`
     * const classeWithNomeOnly = await prisma.classe.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClasseUpdateManyAndReturnArgs>(args: SelectSubset<T, ClasseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classe.
     * @param {ClasseUpsertArgs} args - Arguments to update or create a Classe.
     * @example
     * // Update or create a Classe
     * const classe = await prisma.classe.upsert({
     *   create: {
     *     // ... data to create a Classe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classe we want to update
     *   }
     * })
     */
    upsert<T extends ClasseUpsertArgs>(args: SelectSubset<T, ClasseUpsertArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classe.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClasseCountArgs>(
      args?: Subset<T, ClasseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClasseAggregateArgs>(args: Subset<T, ClasseAggregateArgs>): Prisma.PrismaPromise<GetClasseAggregateType<T>>

    /**
     * Group by Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClasseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClasseGroupByArgs['orderBy'] }
        : { orderBy?: ClasseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClasseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classe model
   */
  readonly fields: ClasseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClasseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Turma<T extends Classe$TurmaArgs<ExtArgs> = {}>(args?: Subset<T, Classe$TurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classe model
   */
  interface ClasseFieldRefs {
    readonly nome: FieldRef<"Classe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Classe findUnique
   */
  export type ClasseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe findUniqueOrThrow
   */
  export type ClasseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe findFirst
   */
  export type ClasseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe findFirstOrThrow
   */
  export type ClasseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe findMany
   */
  export type ClasseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe create
   */
  export type ClasseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The data needed to create a Classe.
     */
    data: XOR<ClasseCreateInput, ClasseUncheckedCreateInput>
  }

  /**
   * Classe createMany
   */
  export type ClasseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClasseCreateManyInput | ClasseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe createManyAndReturn
   */
  export type ClasseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClasseCreateManyInput | ClasseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe update
   */
  export type ClasseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The data needed to update a Classe.
     */
    data: XOR<ClasseUpdateInput, ClasseUncheckedUpdateInput>
    /**
     * Choose, which Classe to update.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe updateMany
   */
  export type ClasseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClasseUpdateManyMutationInput, ClasseUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classe updateManyAndReturn
   */
  export type ClasseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClasseUpdateManyMutationInput, ClasseUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classe upsert
   */
  export type ClasseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The filter to search for the Classe to update in case it exists.
     */
    where: ClasseWhereUniqueInput
    /**
     * In case the Classe found by the `where` argument doesn't exist, create a new Classe with this data.
     */
    create: XOR<ClasseCreateInput, ClasseUncheckedCreateInput>
    /**
     * In case the Classe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClasseUpdateInput, ClasseUncheckedUpdateInput>
  }

  /**
   * Classe delete
   */
  export type ClasseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter which Classe to delete.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe deleteMany
   */
  export type ClasseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Classe.Turma
   */
  export type Classe$TurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Classe without action
   */
  export type ClasseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoMinAggregateOutputType = {
    nome: string | null
  }

  export type CursoMaxAggregateOutputType = {
    nome: string | null
  }

  export type CursoCountAggregateOutputType = {
    nome: number
    _all: number
  }


  export type CursoMinAggregateInputType = {
    nome?: true
  }

  export type CursoMaxAggregateInputType = {
    nome?: true
  }

  export type CursoCountAggregateInputType = {
    nome?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    nome: string
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    Turma?: boolean | Curso$TurmaArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    nome?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turma?: boolean | Curso$TurmaArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      Turma: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const cursoWithNomeOnly = await prisma.curso.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `nome`
     * const cursoWithNomeOnly = await prisma.curso.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `nome`
     * const cursoWithNomeOnly = await prisma.curso.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Turma<T extends Curso$TurmaArgs<ExtArgs> = {}>(args?: Subset<T, Curso$TurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly nome: FieldRef<"Curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso updateManyAndReturn
   */
  export type CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.Turma
   */
  export type Curso$TurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model DiaSemana
   */

  export type AggregateDiaSemana = {
    _count: DiaSemanaCountAggregateOutputType | null
    _min: DiaSemanaMinAggregateOutputType | null
    _max: DiaSemanaMaxAggregateOutputType | null
  }

  export type DiaSemanaMinAggregateOutputType = {
    nome: string | null
  }

  export type DiaSemanaMaxAggregateOutputType = {
    nome: string | null
  }

  export type DiaSemanaCountAggregateOutputType = {
    nome: number
    _all: number
  }


  export type DiaSemanaMinAggregateInputType = {
    nome?: true
  }

  export type DiaSemanaMaxAggregateInputType = {
    nome?: true
  }

  export type DiaSemanaCountAggregateInputType = {
    nome?: true
    _all?: true
  }

  export type DiaSemanaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaSemana to aggregate.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiaSemanas
    **/
    _count?: true | DiaSemanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiaSemanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiaSemanaMaxAggregateInputType
  }

  export type GetDiaSemanaAggregateType<T extends DiaSemanaAggregateArgs> = {
        [P in keyof T & keyof AggregateDiaSemana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiaSemana[P]>
      : GetScalarType<T[P], AggregateDiaSemana[P]>
  }




  export type DiaSemanaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaSemanaWhereInput
    orderBy?: DiaSemanaOrderByWithAggregationInput | DiaSemanaOrderByWithAggregationInput[]
    by: DiaSemanaScalarFieldEnum[] | DiaSemanaScalarFieldEnum
    having?: DiaSemanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiaSemanaCountAggregateInputType | true
    _min?: DiaSemanaMinAggregateInputType
    _max?: DiaSemanaMaxAggregateInputType
  }

  export type DiaSemanaGroupByOutputType = {
    nome: string
    _count: DiaSemanaCountAggregateOutputType | null
    _min: DiaSemanaMinAggregateOutputType | null
    _max: DiaSemanaMaxAggregateOutputType | null
  }

  type GetDiaSemanaGroupByPayload<T extends DiaSemanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiaSemanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiaSemanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiaSemanaGroupByOutputType[P]>
            : GetScalarType<T[P], DiaSemanaGroupByOutputType[P]>
        }
      >
    >


  export type DiaSemanaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    Disponibilidade?: boolean | DiaSemana$DisponibilidadeArgs<ExtArgs>
    TempoLectivo?: boolean | DiaSemana$TempoLectivoArgs<ExtArgs>
    _count?: boolean | DiaSemanaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectScalar = {
    nome?: boolean
  }

  export type DiaSemanaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome", ExtArgs["result"]["diaSemana"]>
  export type DiaSemanaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | DiaSemana$DisponibilidadeArgs<ExtArgs>
    TempoLectivo?: boolean | DiaSemana$TempoLectivoArgs<ExtArgs>
    _count?: boolean | DiaSemanaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiaSemanaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiaSemanaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiaSemanaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiaSemana"
    objects: {
      Disponibilidade: Prisma.$DisponibilidadePayload<ExtArgs>[]
      TempoLectivo: Prisma.$TempoLectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
    }, ExtArgs["result"]["diaSemana"]>
    composites: {}
  }

  type DiaSemanaGetPayload<S extends boolean | null | undefined | DiaSemanaDefaultArgs> = $Result.GetResult<Prisma.$DiaSemanaPayload, S>

  type DiaSemanaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiaSemanaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiaSemanaCountAggregateInputType | true
    }

  export interface DiaSemanaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiaSemana'], meta: { name: 'DiaSemana' } }
    /**
     * Find zero or one DiaSemana that matches the filter.
     * @param {DiaSemanaFindUniqueArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiaSemanaFindUniqueArgs>(args: SelectSubset<T, DiaSemanaFindUniqueArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiaSemana that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiaSemanaFindUniqueOrThrowArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiaSemanaFindUniqueOrThrowArgs>(args: SelectSubset<T, DiaSemanaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaSemana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindFirstArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiaSemanaFindFirstArgs>(args?: SelectSubset<T, DiaSemanaFindFirstArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaSemana that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindFirstOrThrowArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiaSemanaFindFirstOrThrowArgs>(args?: SelectSubset<T, DiaSemanaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiaSemanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiaSemanas
     * const diaSemanas = await prisma.diaSemana.findMany()
     * 
     * // Get first 10 DiaSemanas
     * const diaSemanas = await prisma.diaSemana.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const diaSemanaWithNomeOnly = await prisma.diaSemana.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends DiaSemanaFindManyArgs>(args?: SelectSubset<T, DiaSemanaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiaSemana.
     * @param {DiaSemanaCreateArgs} args - Arguments to create a DiaSemana.
     * @example
     * // Create one DiaSemana
     * const DiaSemana = await prisma.diaSemana.create({
     *   data: {
     *     // ... data to create a DiaSemana
     *   }
     * })
     * 
     */
    create<T extends DiaSemanaCreateArgs>(args: SelectSubset<T, DiaSemanaCreateArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiaSemanas.
     * @param {DiaSemanaCreateManyArgs} args - Arguments to create many DiaSemanas.
     * @example
     * // Create many DiaSemanas
     * const diaSemana = await prisma.diaSemana.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiaSemanaCreateManyArgs>(args?: SelectSubset<T, DiaSemanaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiaSemanas and returns the data saved in the database.
     * @param {DiaSemanaCreateManyAndReturnArgs} args - Arguments to create many DiaSemanas.
     * @example
     * // Create many DiaSemanas
     * const diaSemana = await prisma.diaSemana.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiaSemanas and only return the `nome`
     * const diaSemanaWithNomeOnly = await prisma.diaSemana.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiaSemanaCreateManyAndReturnArgs>(args?: SelectSubset<T, DiaSemanaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiaSemana.
     * @param {DiaSemanaDeleteArgs} args - Arguments to delete one DiaSemana.
     * @example
     * // Delete one DiaSemana
     * const DiaSemana = await prisma.diaSemana.delete({
     *   where: {
     *     // ... filter to delete one DiaSemana
     *   }
     * })
     * 
     */
    delete<T extends DiaSemanaDeleteArgs>(args: SelectSubset<T, DiaSemanaDeleteArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiaSemana.
     * @param {DiaSemanaUpdateArgs} args - Arguments to update one DiaSemana.
     * @example
     * // Update one DiaSemana
     * const diaSemana = await prisma.diaSemana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiaSemanaUpdateArgs>(args: SelectSubset<T, DiaSemanaUpdateArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiaSemanas.
     * @param {DiaSemanaDeleteManyArgs} args - Arguments to filter DiaSemanas to delete.
     * @example
     * // Delete a few DiaSemanas
     * const { count } = await prisma.diaSemana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiaSemanaDeleteManyArgs>(args?: SelectSubset<T, DiaSemanaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaSemanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiaSemanas
     * const diaSemana = await prisma.diaSemana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiaSemanaUpdateManyArgs>(args: SelectSubset<T, DiaSemanaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaSemanas and returns the data updated in the database.
     * @param {DiaSemanaUpdateManyAndReturnArgs} args - Arguments to update many DiaSemanas.
     * @example
     * // Update many DiaSemanas
     * const diaSemana = await prisma.diaSemana.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiaSemanas and only return the `nome`
     * const diaSemanaWithNomeOnly = await prisma.diaSemana.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiaSemanaUpdateManyAndReturnArgs>(args: SelectSubset<T, DiaSemanaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiaSemana.
     * @param {DiaSemanaUpsertArgs} args - Arguments to update or create a DiaSemana.
     * @example
     * // Update or create a DiaSemana
     * const diaSemana = await prisma.diaSemana.upsert({
     *   create: {
     *     // ... data to create a DiaSemana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiaSemana we want to update
     *   }
     * })
     */
    upsert<T extends DiaSemanaUpsertArgs>(args: SelectSubset<T, DiaSemanaUpsertArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiaSemanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaCountArgs} args - Arguments to filter DiaSemanas to count.
     * @example
     * // Count the number of DiaSemanas
     * const count = await prisma.diaSemana.count({
     *   where: {
     *     // ... the filter for the DiaSemanas we want to count
     *   }
     * })
    **/
    count<T extends DiaSemanaCountArgs>(
      args?: Subset<T, DiaSemanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiaSemanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiaSemana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiaSemanaAggregateArgs>(args: Subset<T, DiaSemanaAggregateArgs>): Prisma.PrismaPromise<GetDiaSemanaAggregateType<T>>

    /**
     * Group by DiaSemana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiaSemanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiaSemanaGroupByArgs['orderBy'] }
        : { orderBy?: DiaSemanaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiaSemanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiaSemanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiaSemana model
   */
  readonly fields: DiaSemanaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiaSemana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiaSemanaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Disponibilidade<T extends DiaSemana$DisponibilidadeArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemana$DisponibilidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TempoLectivo<T extends DiaSemana$TempoLectivoArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemana$TempoLectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiaSemana model
   */
  interface DiaSemanaFieldRefs {
    readonly nome: FieldRef<"DiaSemana", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiaSemana findUnique
   */
  export type DiaSemanaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana findUniqueOrThrow
   */
  export type DiaSemanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana findFirst
   */
  export type DiaSemanaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana findFirstOrThrow
   */
  export type DiaSemanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana findMany
   */
  export type DiaSemanaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemanas to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana create
   */
  export type DiaSemanaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The data needed to create a DiaSemana.
     */
    data: XOR<DiaSemanaCreateInput, DiaSemanaUncheckedCreateInput>
  }

  /**
   * DiaSemana createMany
   */
  export type DiaSemanaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiaSemanas.
     */
    data: DiaSemanaCreateManyInput | DiaSemanaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaSemana createManyAndReturn
   */
  export type DiaSemanaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * The data used to create many DiaSemanas.
     */
    data: DiaSemanaCreateManyInput | DiaSemanaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaSemana update
   */
  export type DiaSemanaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The data needed to update a DiaSemana.
     */
    data: XOR<DiaSemanaUpdateInput, DiaSemanaUncheckedUpdateInput>
    /**
     * Choose, which DiaSemana to update.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana updateMany
   */
  export type DiaSemanaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiaSemanas.
     */
    data: XOR<DiaSemanaUpdateManyMutationInput, DiaSemanaUncheckedUpdateManyInput>
    /**
     * Filter which DiaSemanas to update
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to update.
     */
    limit?: number
  }

  /**
   * DiaSemana updateManyAndReturn
   */
  export type DiaSemanaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * The data used to update DiaSemanas.
     */
    data: XOR<DiaSemanaUpdateManyMutationInput, DiaSemanaUncheckedUpdateManyInput>
    /**
     * Filter which DiaSemanas to update
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to update.
     */
    limit?: number
  }

  /**
   * DiaSemana upsert
   */
  export type DiaSemanaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The filter to search for the DiaSemana to update in case it exists.
     */
    where: DiaSemanaWhereUniqueInput
    /**
     * In case the DiaSemana found by the `where` argument doesn't exist, create a new DiaSemana with this data.
     */
    create: XOR<DiaSemanaCreateInput, DiaSemanaUncheckedCreateInput>
    /**
     * In case the DiaSemana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiaSemanaUpdateInput, DiaSemanaUncheckedUpdateInput>
  }

  /**
   * DiaSemana delete
   */
  export type DiaSemanaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter which DiaSemana to delete.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana deleteMany
   */
  export type DiaSemanaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaSemanas to delete
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to delete.
     */
    limit?: number
  }

  /**
   * DiaSemana.Disponibilidade
   */
  export type DiaSemana$DisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    cursor?: DisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * DiaSemana.TempoLectivo
   */
  export type DiaSemana$TempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    where?: TempoLectivoWhereInput
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    cursor?: TempoLectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * DiaSemana without action
   */
  export type DiaSemanaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
  }


  /**
   * Model Disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaAvgAggregateOutputType = {
    idDisciplina: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    idDisciplina: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    idDisciplina: number | null
    nome: string | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    idDisciplina: number | null
    nome: string | null
  }

  export type DisciplinaCountAggregateOutputType = {
    idDisciplina: number
    nome: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    idDisciplina?: true
  }

  export type DisciplinaSumAggregateInputType = {
    idDisciplina?: true
  }

  export type DisciplinaMinAggregateInputType = {
    idDisciplina?: true
    nome?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    idDisciplina?: true
    nome?: true
  }

  export type DisciplinaCountAggregateInputType = {
    idDisciplina?: true
    nome?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplina to aggregate.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type DisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithAggregationInput | DisciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: DisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _avg?: DisciplinaAvgAggregateInputType
    _sum?: DisciplinaSumAggregateInputType
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    idDisciplina: number
    nome: string
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends DisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDisciplina?: boolean
    nome?: boolean
    ProfDisciplinas?: boolean | Disciplina$ProfDisciplinasArgs<ExtArgs>
    TempoLectivo?: boolean | Disciplina$TempoLectivoArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDisciplina?: boolean
    nome?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDisciplina?: boolean
    nome?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectScalar = {
    idDisciplina?: boolean
    nome?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idDisciplina" | "nome", ExtArgs["result"]["disciplina"]>
  export type DisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProfDisciplinas?: boolean | Disciplina$ProfDisciplinasArgs<ExtArgs>
    TempoLectivo?: boolean | Disciplina$TempoLectivoArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {
      ProfDisciplinas: Prisma.$ProfDisciplinasPayload<ExtArgs>[]
      TempoLectivo: Prisma.$TempoLectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idDisciplina: number
      nome: string
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type DisciplinaGetPayload<S extends boolean | null | undefined | DisciplinaDefaultArgs> = $Result.GetResult<Prisma.$DisciplinaPayload, S>

  type DisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface DisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplina'], meta: { name: 'Disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {DisciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinaFindUniqueArgs>(args: SelectSubset<T, DisciplinaFindUniqueArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinaFindFirstArgs>(args?: SelectSubset<T, DisciplinaFindFirstArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `idDisciplina`
     * const disciplinaWithIdDisciplinaOnly = await prisma.disciplina.findMany({ select: { idDisciplina: true } })
     * 
     */
    findMany<T extends DisciplinaFindManyArgs>(args?: SelectSubset<T, DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {DisciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends DisciplinaCreateArgs>(args: SelectSubset<T, DisciplinaCreateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {DisciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinaCreateManyArgs>(args?: SelectSubset<T, DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplinas and returns the data saved in the database.
     * @param {DisciplinaCreateManyAndReturnArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplinas and only return the `idDisciplina`
     * const disciplinaWithIdDisciplinaOnly = await prisma.disciplina.createManyAndReturn({
     *   select: { idDisciplina: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disciplina.
     * @param {DisciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends DisciplinaDeleteArgs>(args: SelectSubset<T, DisciplinaDeleteArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {DisciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinaUpdateArgs>(args: SelectSubset<T, DisciplinaUpdateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinaDeleteManyArgs>(args?: SelectSubset<T, DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinaUpdateManyArgs>(args: SelectSubset<T, DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas and returns the data updated in the database.
     * @param {DisciplinaUpdateManyAndReturnArgs} args - Arguments to update many Disciplinas.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplinas and only return the `idDisciplina`
     * const disciplinaWithIdDisciplinaOnly = await prisma.disciplina.updateManyAndReturn({
     *   select: { idDisciplina: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disciplina.
     * @param {DisciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinaUpsertArgs>(args: SelectSubset<T, DisciplinaUpsertArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinaCountArgs>(
      args?: Subset<T, DisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplina model
   */
  readonly fields: DisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProfDisciplinas<T extends Disciplina$ProfDisciplinasArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$ProfDisciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TempoLectivo<T extends Disciplina$TempoLectivoArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$TempoLectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disciplina model
   */
  interface DisciplinaFieldRefs {
    readonly idDisciplina: FieldRef<"Disciplina", 'Int'>
    readonly nome: FieldRef<"Disciplina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disciplina findUnique
   */
  export type DisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findUniqueOrThrow
   */
  export type DisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findFirst
   */
  export type DisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findFirstOrThrow
   */
  export type DisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findMany
   */
  export type DisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina create
   */
  export type DisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplina.
     */
    data: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
  }

  /**
   * Disciplina createMany
   */
  export type DisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina createManyAndReturn
   */
  export type DisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina update
   */
  export type DisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplina.
     */
    data: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
    /**
     * Choose, which Disciplina to update.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina updateMany
   */
  export type DisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina updateManyAndReturn
   */
  export type DisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina upsert
   */
  export type DisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplina to update in case it exists.
     */
    where: DisciplinaWhereUniqueInput
    /**
     * In case the Disciplina found by the `where` argument doesn't exist, create a new Disciplina with this data.
     */
    create: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
    /**
     * In case the Disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
  }

  /**
   * Disciplina delete
   */
  export type DisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter which Disciplina to delete.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina deleteMany
   */
  export type DisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to delete.
     */
    limit?: number
  }

  /**
   * Disciplina.ProfDisciplinas
   */
  export type Disciplina$ProfDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    where?: ProfDisciplinasWhereInput
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    cursor?: ProfDisciplinasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * Disciplina.TempoLectivo
   */
  export type Disciplina$TempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    where?: TempoLectivoWhereInput
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    cursor?: TempoLectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * Disciplina without action
   */
  export type DisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model Disponibilidade
   */

  export type AggregateDisponibilidade = {
    _count: DisponibilidadeCountAggregateOutputType | null
    _avg: DisponibilidadeAvgAggregateOutputType | null
    _sum: DisponibilidadeSumAggregateOutputType | null
    _min: DisponibilidadeMinAggregateOutputType | null
    _max: DisponibilidadeMaxAggregateOutputType | null
  }

  export type DisponibilidadeAvgAggregateOutputType = {
    idDisponibilidade: number | null
    ordem: number | null
    professorId: number | null
  }

  export type DisponibilidadeSumAggregateOutputType = {
    idDisponibilidade: number | null
    ordem: number | null
    professorId: number | null
  }

  export type DisponibilidadeMinAggregateOutputType = {
    idDisponibilidade: number | null
    diaSemana: string | null
    periodoId: string | null
    ordem: number | null
    professorId: number | null
  }

  export type DisponibilidadeMaxAggregateOutputType = {
    idDisponibilidade: number | null
    diaSemana: string | null
    periodoId: string | null
    ordem: number | null
    professorId: number | null
  }

  export type DisponibilidadeCountAggregateOutputType = {
    idDisponibilidade: number
    diaSemana: number
    periodoId: number
    ordem: number
    professorId: number
    _all: number
  }


  export type DisponibilidadeAvgAggregateInputType = {
    idDisponibilidade?: true
    ordem?: true
    professorId?: true
  }

  export type DisponibilidadeSumAggregateInputType = {
    idDisponibilidade?: true
    ordem?: true
    professorId?: true
  }

  export type DisponibilidadeMinAggregateInputType = {
    idDisponibilidade?: true
    diaSemana?: true
    periodoId?: true
    ordem?: true
    professorId?: true
  }

  export type DisponibilidadeMaxAggregateInputType = {
    idDisponibilidade?: true
    diaSemana?: true
    periodoId?: true
    ordem?: true
    professorId?: true
  }

  export type DisponibilidadeCountAggregateInputType = {
    idDisponibilidade?: true
    diaSemana?: true
    periodoId?: true
    ordem?: true
    professorId?: true
    _all?: true
  }

  export type DisponibilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidade to aggregate.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilidades
    **/
    _count?: true | DisponibilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisponibilidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisponibilidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibilidadeMaxAggregateInputType
  }

  export type GetDisponibilidadeAggregateType<T extends DisponibilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibilidade[P]>
      : GetScalarType<T[P], AggregateDisponibilidade[P]>
  }




  export type DisponibilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithAggregationInput | DisponibilidadeOrderByWithAggregationInput[]
    by: DisponibilidadeScalarFieldEnum[] | DisponibilidadeScalarFieldEnum
    having?: DisponibilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibilidadeCountAggregateInputType | true
    _avg?: DisponibilidadeAvgAggregateInputType
    _sum?: DisponibilidadeSumAggregateInputType
    _min?: DisponibilidadeMinAggregateInputType
    _max?: DisponibilidadeMaxAggregateInputType
  }

  export type DisponibilidadeGroupByOutputType = {
    idDisponibilidade: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    _count: DisponibilidadeCountAggregateOutputType | null
    _avg: DisponibilidadeAvgAggregateOutputType | null
    _sum: DisponibilidadeSumAggregateOutputType | null
    _min: DisponibilidadeMinAggregateOutputType | null
    _max: DisponibilidadeMaxAggregateOutputType | null
  }

  type GetDisponibilidadeGroupByPayload<T extends DisponibilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>
        }
      >
    >


  export type DisponibilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDisponibilidade?: boolean
    diaSemana?: boolean
    periodoId?: boolean
    ordem?: boolean
    professorId?: boolean
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDisponibilidade?: boolean
    diaSemana?: boolean
    periodoId?: boolean
    ordem?: boolean
    professorId?: boolean
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDisponibilidade?: boolean
    diaSemana?: boolean
    periodoId?: boolean
    ordem?: boolean
    professorId?: boolean
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectScalar = {
    idDisponibilidade?: boolean
    diaSemana?: boolean
    periodoId?: boolean
    ordem?: boolean
    professorId?: boolean
  }

  export type DisponibilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idDisponibilidade" | "diaSemana" | "periodoId" | "ordem" | "professorId", ExtArgs["result"]["disponibilidade"]>
  export type DisponibilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type DisponibilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $DisponibilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibilidade"
    objects: {
      DiaSemana: Prisma.$DiaSemanaPayload<ExtArgs>
      Periodo: Prisma.$PeriodoPayload<ExtArgs>
      Professor: Prisma.$ProfessorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idDisponibilidade: number
      diaSemana: string
      periodoId: string
      ordem: number
      professorId: number
    }, ExtArgs["result"]["disponibilidade"]>
    composites: {}
  }

  type DisponibilidadeGetPayload<S extends boolean | null | undefined | DisponibilidadeDefaultArgs> = $Result.GetResult<Prisma.$DisponibilidadePayload, S>

  type DisponibilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibilidadeCountAggregateInputType | true
    }

  export interface DisponibilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibilidade'], meta: { name: 'Disponibilidade' } }
    /**
     * Find zero or one Disponibilidade that matches the filter.
     * @param {DisponibilidadeFindUniqueArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibilidadeFindUniqueArgs>(args: SelectSubset<T, DisponibilidadeFindUniqueArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibilidadeFindUniqueOrThrowArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindFirstArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibilidadeFindFirstArgs>(args?: SelectSubset<T, DisponibilidadeFindFirstArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindFirstOrThrowArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilidades
     * const disponibilidades = await prisma.disponibilidade.findMany()
     * 
     * // Get first 10 Disponibilidades
     * const disponibilidades = await prisma.disponibilidade.findMany({ take: 10 })
     * 
     * // Only select the `idDisponibilidade`
     * const disponibilidadeWithIdDisponibilidadeOnly = await prisma.disponibilidade.findMany({ select: { idDisponibilidade: true } })
     * 
     */
    findMany<T extends DisponibilidadeFindManyArgs>(args?: SelectSubset<T, DisponibilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibilidade.
     * @param {DisponibilidadeCreateArgs} args - Arguments to create a Disponibilidade.
     * @example
     * // Create one Disponibilidade
     * const Disponibilidade = await prisma.disponibilidade.create({
     *   data: {
     *     // ... data to create a Disponibilidade
     *   }
     * })
     * 
     */
    create<T extends DisponibilidadeCreateArgs>(args: SelectSubset<T, DisponibilidadeCreateArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilidades.
     * @param {DisponibilidadeCreateManyArgs} args - Arguments to create many Disponibilidades.
     * @example
     * // Create many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibilidadeCreateManyArgs>(args?: SelectSubset<T, DisponibilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disponibilidades and returns the data saved in the database.
     * @param {DisponibilidadeCreateManyAndReturnArgs} args - Arguments to create many Disponibilidades.
     * @example
     * // Create many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disponibilidades and only return the `idDisponibilidade`
     * const disponibilidadeWithIdDisponibilidadeOnly = await prisma.disponibilidade.createManyAndReturn({
     *   select: { idDisponibilidade: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisponibilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, DisponibilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disponibilidade.
     * @param {DisponibilidadeDeleteArgs} args - Arguments to delete one Disponibilidade.
     * @example
     * // Delete one Disponibilidade
     * const Disponibilidade = await prisma.disponibilidade.delete({
     *   where: {
     *     // ... filter to delete one Disponibilidade
     *   }
     * })
     * 
     */
    delete<T extends DisponibilidadeDeleteArgs>(args: SelectSubset<T, DisponibilidadeDeleteArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibilidade.
     * @param {DisponibilidadeUpdateArgs} args - Arguments to update one Disponibilidade.
     * @example
     * // Update one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibilidadeUpdateArgs>(args: SelectSubset<T, DisponibilidadeUpdateArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilidades.
     * @param {DisponibilidadeDeleteManyArgs} args - Arguments to filter Disponibilidades to delete.
     * @example
     * // Delete a few Disponibilidades
     * const { count } = await prisma.disponibilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibilidadeDeleteManyArgs>(args?: SelectSubset<T, DisponibilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibilidadeUpdateManyArgs>(args: SelectSubset<T, DisponibilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidades and returns the data updated in the database.
     * @param {DisponibilidadeUpdateManyAndReturnArgs} args - Arguments to update many Disponibilidades.
     * @example
     * // Update many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disponibilidades and only return the `idDisponibilidade`
     * const disponibilidadeWithIdDisponibilidadeOnly = await prisma.disponibilidade.updateManyAndReturn({
     *   select: { idDisponibilidade: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisponibilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disponibilidade.
     * @param {DisponibilidadeUpsertArgs} args - Arguments to update or create a Disponibilidade.
     * @example
     * // Update or create a Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.upsert({
     *   create: {
     *     // ... data to create a Disponibilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibilidade we want to update
     *   }
     * })
     */
    upsert<T extends DisponibilidadeUpsertArgs>(args: SelectSubset<T, DisponibilidadeUpsertArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeCountArgs} args - Arguments to filter Disponibilidades to count.
     * @example
     * // Count the number of Disponibilidades
     * const count = await prisma.disponibilidade.count({
     *   where: {
     *     // ... the filter for the Disponibilidades we want to count
     *   }
     * })
    **/
    count<T extends DisponibilidadeCountArgs>(
      args?: Subset<T, DisponibilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisponibilidadeAggregateArgs>(args: Subset<T, DisponibilidadeAggregateArgs>): Prisma.PrismaPromise<GetDisponibilidadeAggregateType<T>>

    /**
     * Group by Disponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisponibilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibilidadeGroupByArgs['orderBy'] }
        : { orderBy?: DisponibilidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisponibilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibilidade model
   */
  readonly fields: DisponibilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiaSemana<T extends DiaSemanaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemanaDefaultArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Periodo<T extends PeriodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodoDefaultArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disponibilidade model
   */
  interface DisponibilidadeFieldRefs {
    readonly idDisponibilidade: FieldRef<"Disponibilidade", 'Int'>
    readonly diaSemana: FieldRef<"Disponibilidade", 'String'>
    readonly periodoId: FieldRef<"Disponibilidade", 'String'>
    readonly ordem: FieldRef<"Disponibilidade", 'Int'>
    readonly professorId: FieldRef<"Disponibilidade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Disponibilidade findUnique
   */
  export type DisponibilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade findUniqueOrThrow
   */
  export type DisponibilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade findFirst
   */
  export type DisponibilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidades.
     */
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade findFirstOrThrow
   */
  export type DisponibilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidades.
     */
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade findMany
   */
  export type DisponibilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidades to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade create
   */
  export type DisponibilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Disponibilidade.
     */
    data: XOR<DisponibilidadeCreateInput, DisponibilidadeUncheckedCreateInput>
  }

  /**
   * Disponibilidade createMany
   */
  export type DisponibilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilidades.
     */
    data: DisponibilidadeCreateManyInput | DisponibilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibilidade createManyAndReturn
   */
  export type DisponibilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Disponibilidades.
     */
    data: DisponibilidadeCreateManyInput | DisponibilidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibilidade update
   */
  export type DisponibilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Disponibilidade.
     */
    data: XOR<DisponibilidadeUpdateInput, DisponibilidadeUncheckedUpdateInput>
    /**
     * Choose, which Disponibilidade to update.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade updateMany
   */
  export type DisponibilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilidades.
     */
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidades to update
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to update.
     */
    limit?: number
  }

  /**
   * Disponibilidade updateManyAndReturn
   */
  export type DisponibilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to update Disponibilidades.
     */
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidades to update
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibilidade upsert
   */
  export type DisponibilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Disponibilidade to update in case it exists.
     */
    where: DisponibilidadeWhereUniqueInput
    /**
     * In case the Disponibilidade found by the `where` argument doesn't exist, create a new Disponibilidade with this data.
     */
    create: XOR<DisponibilidadeCreateInput, DisponibilidadeUncheckedCreateInput>
    /**
     * In case the Disponibilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibilidadeUpdateInput, DisponibilidadeUncheckedUpdateInput>
  }

  /**
   * Disponibilidade delete
   */
  export type DisponibilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter which Disponibilidade to delete.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade deleteMany
   */
  export type DisponibilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidades to delete
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to delete.
     */
    limit?: number
  }

  /**
   * Disponibilidade without action
   */
  export type DisponibilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    id_professor: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    id_professor: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    id_professor: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id_professor: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfessorCountAggregateOutputType = {
    id_professor: number
    nome: number
    email: number
    telefone: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    id_professor?: true
  }

  export type ProfessorSumAggregateInputType = {
    id_professor?: true
  }

  export type ProfessorMinAggregateInputType = {
    id_professor?: true
    nome?: true
    email?: true
    telefone?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id_professor?: true
    nome?: true
    email?: true
    telefone?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfessorCountAggregateInputType = {
    id_professor?: true
    nome?: true
    email?: true
    telefone?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id_professor: number
    nome: string
    email: string | null
    telefone: string | null
    created_at: Date
    updated_at: Date
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    created_at?: boolean
    updated_at?: boolean
    Disponibilidade?: boolean | Professor$DisponibilidadeArgs<ExtArgs>
    ProfDisciplinas?: boolean | Professor$ProfDisciplinasArgs<ExtArgs>
    ProfTurma?: boolean | Professor$ProfTurmaArgs<ExtArgs>
    TempoLectivo?: boolean | Professor$TempoLectivoArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id_professor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_professor" | "nome" | "email" | "telefone" | "created_at" | "updated_at", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | Professor$DisponibilidadeArgs<ExtArgs>
    ProfDisciplinas?: boolean | Professor$ProfDisciplinasArgs<ExtArgs>
    ProfTurma?: boolean | Professor$ProfTurmaArgs<ExtArgs>
    TempoLectivo?: boolean | Professor$TempoLectivoArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      Disponibilidade: Prisma.$DisponibilidadePayload<ExtArgs>[]
      ProfDisciplinas: Prisma.$ProfDisciplinasPayload<ExtArgs>[]
      ProfTurma: Prisma.$ProfTurmaPayload<ExtArgs>[]
      TempoLectivo: Prisma.$TempoLectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_professor: number
      nome: string
      email: string | null
      telefone: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.findMany({ select: { id_professor: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.createManyAndReturn({
     *   select: { id_professor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.updateManyAndReturn({
     *   select: { id_professor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Disponibilidade<T extends Professor$DisponibilidadeArgs<ExtArgs> = {}>(args?: Subset<T, Professor$DisponibilidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProfDisciplinas<T extends Professor$ProfDisciplinasArgs<ExtArgs> = {}>(args?: Subset<T, Professor$ProfDisciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProfTurma<T extends Professor$ProfTurmaArgs<ExtArgs> = {}>(args?: Subset<T, Professor$ProfTurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TempoLectivo<T extends Professor$TempoLectivoArgs<ExtArgs> = {}>(args?: Subset<T, Professor$TempoLectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id_professor: FieldRef<"Professor", 'Int'>
    readonly nome: FieldRef<"Professor", 'String'>
    readonly email: FieldRef<"Professor", 'String'>
    readonly telefone: FieldRef<"Professor", 'String'>
    readonly created_at: FieldRef<"Professor", 'DateTime'>
    readonly updated_at: FieldRef<"Professor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.Disponibilidade
   */
  export type Professor$DisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    cursor?: DisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Professor.ProfDisciplinas
   */
  export type Professor$ProfDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    where?: ProfDisciplinasWhereInput
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    cursor?: ProfDisciplinasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * Professor.ProfTurma
   */
  export type Professor$ProfTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    where?: ProfTurmaWhereInput
    orderBy?: ProfTurmaOrderByWithRelationInput | ProfTurmaOrderByWithRelationInput[]
    cursor?: ProfTurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfTurmaScalarFieldEnum | ProfTurmaScalarFieldEnum[]
  }

  /**
   * Professor.TempoLectivo
   */
  export type Professor$TempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    where?: TempoLectivoWhereInput
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    cursor?: TempoLectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Periodo
   */

  export type AggregatePeriodo = {
    _count: PeriodoCountAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  export type PeriodoMinAggregateOutputType = {
    periodo: string | null
  }

  export type PeriodoMaxAggregateOutputType = {
    periodo: string | null
  }

  export type PeriodoCountAggregateOutputType = {
    periodo: number
    _all: number
  }


  export type PeriodoMinAggregateInputType = {
    periodo?: true
  }

  export type PeriodoMaxAggregateInputType = {
    periodo?: true
  }

  export type PeriodoCountAggregateInputType = {
    periodo?: true
    _all?: true
  }

  export type PeriodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodo to aggregate.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Periodos
    **/
    _count?: true | PeriodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodoMaxAggregateInputType
  }

  export type GetPeriodoAggregateType<T extends PeriodoAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriodo[P]>
      : GetScalarType<T[P], AggregatePeriodo[P]>
  }




  export type PeriodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodoWhereInput
    orderBy?: PeriodoOrderByWithAggregationInput | PeriodoOrderByWithAggregationInput[]
    by: PeriodoScalarFieldEnum[] | PeriodoScalarFieldEnum
    having?: PeriodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodoCountAggregateInputType | true
    _min?: PeriodoMinAggregateInputType
    _max?: PeriodoMaxAggregateInputType
  }

  export type PeriodoGroupByOutputType = {
    periodo: string
    _count: PeriodoCountAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  type GetPeriodoGroupByPayload<T extends PeriodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
        }
      >
    >


  export type PeriodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    periodo?: boolean
    Disponibilidade?: boolean | Periodo$DisponibilidadeArgs<ExtArgs>
    TempoLectivo?: boolean | Periodo$TempoLectivoArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    periodo?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    periodo?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectScalar = {
    periodo?: boolean
  }

  export type PeriodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"periodo", ExtArgs["result"]["periodo"]>
  export type PeriodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | Periodo$DisponibilidadeArgs<ExtArgs>
    TempoLectivo?: boolean | Periodo$TempoLectivoArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeriodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PeriodoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeriodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Periodo"
    objects: {
      Disponibilidade: Prisma.$DisponibilidadePayload<ExtArgs>[]
      TempoLectivo: Prisma.$TempoLectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      periodo: string
    }, ExtArgs["result"]["periodo"]>
    composites: {}
  }

  type PeriodoGetPayload<S extends boolean | null | undefined | PeriodoDefaultArgs> = $Result.GetResult<Prisma.$PeriodoPayload, S>

  type PeriodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeriodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriodoCountAggregateInputType | true
    }

  export interface PeriodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Periodo'], meta: { name: 'Periodo' } }
    /**
     * Find zero or one Periodo that matches the filter.
     * @param {PeriodoFindUniqueArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodoFindUniqueArgs>(args: SelectSubset<T, PeriodoFindUniqueArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Periodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeriodoFindUniqueOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodoFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodoFindFirstArgs>(args?: SelectSubset<T, PeriodoFindFirstArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodoFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Periodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periodos
     * const periodos = await prisma.periodo.findMany()
     * 
     * // Get first 10 Periodos
     * const periodos = await prisma.periodo.findMany({ take: 10 })
     * 
     * // Only select the `periodo`
     * const periodoWithPeriodoOnly = await prisma.periodo.findMany({ select: { periodo: true } })
     * 
     */
    findMany<T extends PeriodoFindManyArgs>(args?: SelectSubset<T, PeriodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Periodo.
     * @param {PeriodoCreateArgs} args - Arguments to create a Periodo.
     * @example
     * // Create one Periodo
     * const Periodo = await prisma.periodo.create({
     *   data: {
     *     // ... data to create a Periodo
     *   }
     * })
     * 
     */
    create<T extends PeriodoCreateArgs>(args: SelectSubset<T, PeriodoCreateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Periodos.
     * @param {PeriodoCreateManyArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodoCreateManyArgs>(args?: SelectSubset<T, PeriodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Periodos and returns the data saved in the database.
     * @param {PeriodoCreateManyAndReturnArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Periodos and only return the `periodo`
     * const periodoWithPeriodoOnly = await prisma.periodo.createManyAndReturn({
     *   select: { periodo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeriodoCreateManyAndReturnArgs>(args?: SelectSubset<T, PeriodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Periodo.
     * @param {PeriodoDeleteArgs} args - Arguments to delete one Periodo.
     * @example
     * // Delete one Periodo
     * const Periodo = await prisma.periodo.delete({
     *   where: {
     *     // ... filter to delete one Periodo
     *   }
     * })
     * 
     */
    delete<T extends PeriodoDeleteArgs>(args: SelectSubset<T, PeriodoDeleteArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Periodo.
     * @param {PeriodoUpdateArgs} args - Arguments to update one Periodo.
     * @example
     * // Update one Periodo
     * const periodo = await prisma.periodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodoUpdateArgs>(args: SelectSubset<T, PeriodoUpdateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Periodos.
     * @param {PeriodoDeleteManyArgs} args - Arguments to filter Periodos to delete.
     * @example
     * // Delete a few Periodos
     * const { count } = await prisma.periodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodoDeleteManyArgs>(args?: SelectSubset<T, PeriodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodoUpdateManyArgs>(args: SelectSubset<T, PeriodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos and returns the data updated in the database.
     * @param {PeriodoUpdateManyAndReturnArgs} args - Arguments to update many Periodos.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Periodos and only return the `periodo`
     * const periodoWithPeriodoOnly = await prisma.periodo.updateManyAndReturn({
     *   select: { periodo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeriodoUpdateManyAndReturnArgs>(args: SelectSubset<T, PeriodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Periodo.
     * @param {PeriodoUpsertArgs} args - Arguments to update or create a Periodo.
     * @example
     * // Update or create a Periodo
     * const periodo = await prisma.periodo.upsert({
     *   create: {
     *     // ... data to create a Periodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Periodo we want to update
     *   }
     * })
     */
    upsert<T extends PeriodoUpsertArgs>(args: SelectSubset<T, PeriodoUpsertArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoCountArgs} args - Arguments to filter Periodos to count.
     * @example
     * // Count the number of Periodos
     * const count = await prisma.periodo.count({
     *   where: {
     *     // ... the filter for the Periodos we want to count
     *   }
     * })
    **/
    count<T extends PeriodoCountArgs>(
      args?: Subset<T, PeriodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeriodoAggregateArgs>(args: Subset<T, PeriodoAggregateArgs>): Prisma.PrismaPromise<GetPeriodoAggregateType<T>>

    /**
     * Group by Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeriodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodoGroupByArgs['orderBy'] }
        : { orderBy?: PeriodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeriodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Periodo model
   */
  readonly fields: PeriodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Periodo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Disponibilidade<T extends Periodo$DisponibilidadeArgs<ExtArgs> = {}>(args?: Subset<T, Periodo$DisponibilidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TempoLectivo<T extends Periodo$TempoLectivoArgs<ExtArgs> = {}>(args?: Subset<T, Periodo$TempoLectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Periodo model
   */
  interface PeriodoFieldRefs {
    readonly periodo: FieldRef<"Periodo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Periodo findUnique
   */
  export type PeriodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findUniqueOrThrow
   */
  export type PeriodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findFirst
   */
  export type PeriodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findFirstOrThrow
   */
  export type PeriodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findMany
   */
  export type PeriodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodos to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo create
   */
  export type PeriodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Periodo.
     */
    data: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
  }

  /**
   * Periodo createMany
   */
  export type PeriodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo createManyAndReturn
   */
  export type PeriodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo update
   */
  export type PeriodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Periodo.
     */
    data: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
    /**
     * Choose, which Periodo to update.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo updateMany
   */
  export type PeriodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to update.
     */
    limit?: number
  }

  /**
   * Periodo updateManyAndReturn
   */
  export type PeriodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to update.
     */
    limit?: number
  }

  /**
   * Periodo upsert
   */
  export type PeriodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Periodo to update in case it exists.
     */
    where: PeriodoWhereUniqueInput
    /**
     * In case the Periodo found by the `where` argument doesn't exist, create a new Periodo with this data.
     */
    create: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
    /**
     * In case the Periodo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
  }

  /**
   * Periodo delete
   */
  export type PeriodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter which Periodo to delete.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo deleteMany
   */
  export type PeriodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodos to delete
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to delete.
     */
    limit?: number
  }

  /**
   * Periodo.Disponibilidade
   */
  export type Periodo$DisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    cursor?: DisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Periodo.TempoLectivo
   */
  export type Periodo$TempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    where?: TempoLectivoWhereInput
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    cursor?: TempoLectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * Periodo without action
   */
  export type PeriodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
  }


  /**
   * Model ProfDisciplinas
   */

  export type AggregateProfDisciplinas = {
    _count: ProfDisciplinasCountAggregateOutputType | null
    _avg: ProfDisciplinasAvgAggregateOutputType | null
    _sum: ProfDisciplinasSumAggregateOutputType | null
    _min: ProfDisciplinasMinAggregateOutputType | null
    _max: ProfDisciplinasMaxAggregateOutputType | null
  }

  export type ProfDisciplinasAvgAggregateOutputType = {
    idProfDisciplina: number | null
    professorId: number | null
    disciplinaId: number | null
  }

  export type ProfDisciplinasSumAggregateOutputType = {
    idProfDisciplina: number | null
    professorId: number | null
    disciplinaId: number | null
  }

  export type ProfDisciplinasMinAggregateOutputType = {
    idProfDisciplina: number | null
    professorId: number | null
    disciplinaId: number | null
  }

  export type ProfDisciplinasMaxAggregateOutputType = {
    idProfDisciplina: number | null
    professorId: number | null
    disciplinaId: number | null
  }

  export type ProfDisciplinasCountAggregateOutputType = {
    idProfDisciplina: number
    professorId: number
    disciplinaId: number
    _all: number
  }


  export type ProfDisciplinasAvgAggregateInputType = {
    idProfDisciplina?: true
    professorId?: true
    disciplinaId?: true
  }

  export type ProfDisciplinasSumAggregateInputType = {
    idProfDisciplina?: true
    professorId?: true
    disciplinaId?: true
  }

  export type ProfDisciplinasMinAggregateInputType = {
    idProfDisciplina?: true
    professorId?: true
    disciplinaId?: true
  }

  export type ProfDisciplinasMaxAggregateInputType = {
    idProfDisciplina?: true
    professorId?: true
    disciplinaId?: true
  }

  export type ProfDisciplinasCountAggregateInputType = {
    idProfDisciplina?: true
    professorId?: true
    disciplinaId?: true
    _all?: true
  }

  export type ProfDisciplinasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfDisciplinas to aggregate.
     */
    where?: ProfDisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfDisciplinas to fetch.
     */
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfDisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfDisciplinas
    **/
    _count?: true | ProfDisciplinasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfDisciplinasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfDisciplinasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfDisciplinasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfDisciplinasMaxAggregateInputType
  }

  export type GetProfDisciplinasAggregateType<T extends ProfDisciplinasAggregateArgs> = {
        [P in keyof T & keyof AggregateProfDisciplinas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfDisciplinas[P]>
      : GetScalarType<T[P], AggregateProfDisciplinas[P]>
  }




  export type ProfDisciplinasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfDisciplinasWhereInput
    orderBy?: ProfDisciplinasOrderByWithAggregationInput | ProfDisciplinasOrderByWithAggregationInput[]
    by: ProfDisciplinasScalarFieldEnum[] | ProfDisciplinasScalarFieldEnum
    having?: ProfDisciplinasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfDisciplinasCountAggregateInputType | true
    _avg?: ProfDisciplinasAvgAggregateInputType
    _sum?: ProfDisciplinasSumAggregateInputType
    _min?: ProfDisciplinasMinAggregateInputType
    _max?: ProfDisciplinasMaxAggregateInputType
  }

  export type ProfDisciplinasGroupByOutputType = {
    idProfDisciplina: number
    professorId: number
    disciplinaId: number
    _count: ProfDisciplinasCountAggregateOutputType | null
    _avg: ProfDisciplinasAvgAggregateOutputType | null
    _sum: ProfDisciplinasSumAggregateOutputType | null
    _min: ProfDisciplinasMinAggregateOutputType | null
    _max: ProfDisciplinasMaxAggregateOutputType | null
  }

  type GetProfDisciplinasGroupByPayload<T extends ProfDisciplinasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfDisciplinasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfDisciplinasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfDisciplinasGroupByOutputType[P]>
            : GetScalarType<T[P], ProfDisciplinasGroupByOutputType[P]>
        }
      >
    >


  export type ProfDisciplinasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProfDisciplina?: boolean
    professorId?: boolean
    disciplinaId?: boolean
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profDisciplinas"]>

  export type ProfDisciplinasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProfDisciplina?: boolean
    professorId?: boolean
    disciplinaId?: boolean
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profDisciplinas"]>

  export type ProfDisciplinasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProfDisciplina?: boolean
    professorId?: boolean
    disciplinaId?: boolean
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profDisciplinas"]>

  export type ProfDisciplinasSelectScalar = {
    idProfDisciplina?: boolean
    professorId?: boolean
    disciplinaId?: boolean
  }

  export type ProfDisciplinasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idProfDisciplina" | "professorId" | "disciplinaId", ExtArgs["result"]["profDisciplinas"]>
  export type ProfDisciplinasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type ProfDisciplinasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type ProfDisciplinasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $ProfDisciplinasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfDisciplinas"
    objects: {
      Disciplina: Prisma.$DisciplinaPayload<ExtArgs>
      Professor: Prisma.$ProfessorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idProfDisciplina: number
      professorId: number
      disciplinaId: number
    }, ExtArgs["result"]["profDisciplinas"]>
    composites: {}
  }

  type ProfDisciplinasGetPayload<S extends boolean | null | undefined | ProfDisciplinasDefaultArgs> = $Result.GetResult<Prisma.$ProfDisciplinasPayload, S>

  type ProfDisciplinasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfDisciplinasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfDisciplinasCountAggregateInputType | true
    }

  export interface ProfDisciplinasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfDisciplinas'], meta: { name: 'ProfDisciplinas' } }
    /**
     * Find zero or one ProfDisciplinas that matches the filter.
     * @param {ProfDisciplinasFindUniqueArgs} args - Arguments to find a ProfDisciplinas
     * @example
     * // Get one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfDisciplinasFindUniqueArgs>(args: SelectSubset<T, ProfDisciplinasFindUniqueArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfDisciplinas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfDisciplinasFindUniqueOrThrowArgs} args - Arguments to find a ProfDisciplinas
     * @example
     * // Get one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfDisciplinasFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfDisciplinasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfDisciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasFindFirstArgs} args - Arguments to find a ProfDisciplinas
     * @example
     * // Get one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfDisciplinasFindFirstArgs>(args?: SelectSubset<T, ProfDisciplinasFindFirstArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfDisciplinas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasFindFirstOrThrowArgs} args - Arguments to find a ProfDisciplinas
     * @example
     * // Get one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfDisciplinasFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfDisciplinasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfDisciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findMany()
     * 
     * // Get first 10 ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findMany({ take: 10 })
     * 
     * // Only select the `idProfDisciplina`
     * const profDisciplinasWithIdProfDisciplinaOnly = await prisma.profDisciplinas.findMany({ select: { idProfDisciplina: true } })
     * 
     */
    findMany<T extends ProfDisciplinasFindManyArgs>(args?: SelectSubset<T, ProfDisciplinasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfDisciplinas.
     * @param {ProfDisciplinasCreateArgs} args - Arguments to create a ProfDisciplinas.
     * @example
     * // Create one ProfDisciplinas
     * const ProfDisciplinas = await prisma.profDisciplinas.create({
     *   data: {
     *     // ... data to create a ProfDisciplinas
     *   }
     * })
     * 
     */
    create<T extends ProfDisciplinasCreateArgs>(args: SelectSubset<T, ProfDisciplinasCreateArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfDisciplinas.
     * @param {ProfDisciplinasCreateManyArgs} args - Arguments to create many ProfDisciplinas.
     * @example
     * // Create many ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfDisciplinasCreateManyArgs>(args?: SelectSubset<T, ProfDisciplinasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfDisciplinas and returns the data saved in the database.
     * @param {ProfDisciplinasCreateManyAndReturnArgs} args - Arguments to create many ProfDisciplinas.
     * @example
     * // Create many ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfDisciplinas and only return the `idProfDisciplina`
     * const profDisciplinasWithIdProfDisciplinaOnly = await prisma.profDisciplinas.createManyAndReturn({
     *   select: { idProfDisciplina: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfDisciplinasCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfDisciplinasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfDisciplinas.
     * @param {ProfDisciplinasDeleteArgs} args - Arguments to delete one ProfDisciplinas.
     * @example
     * // Delete one ProfDisciplinas
     * const ProfDisciplinas = await prisma.profDisciplinas.delete({
     *   where: {
     *     // ... filter to delete one ProfDisciplinas
     *   }
     * })
     * 
     */
    delete<T extends ProfDisciplinasDeleteArgs>(args: SelectSubset<T, ProfDisciplinasDeleteArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfDisciplinas.
     * @param {ProfDisciplinasUpdateArgs} args - Arguments to update one ProfDisciplinas.
     * @example
     * // Update one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfDisciplinasUpdateArgs>(args: SelectSubset<T, ProfDisciplinasUpdateArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfDisciplinas.
     * @param {ProfDisciplinasDeleteManyArgs} args - Arguments to filter ProfDisciplinas to delete.
     * @example
     * // Delete a few ProfDisciplinas
     * const { count } = await prisma.profDisciplinas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfDisciplinasDeleteManyArgs>(args?: SelectSubset<T, ProfDisciplinasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfDisciplinasUpdateManyArgs>(args: SelectSubset<T, ProfDisciplinasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfDisciplinas and returns the data updated in the database.
     * @param {ProfDisciplinasUpdateManyAndReturnArgs} args - Arguments to update many ProfDisciplinas.
     * @example
     * // Update many ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfDisciplinas and only return the `idProfDisciplina`
     * const profDisciplinasWithIdProfDisciplinaOnly = await prisma.profDisciplinas.updateManyAndReturn({
     *   select: { idProfDisciplina: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfDisciplinasUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfDisciplinasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfDisciplinas.
     * @param {ProfDisciplinasUpsertArgs} args - Arguments to update or create a ProfDisciplinas.
     * @example
     * // Update or create a ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.upsert({
     *   create: {
     *     // ... data to create a ProfDisciplinas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfDisciplinas we want to update
     *   }
     * })
     */
    upsert<T extends ProfDisciplinasUpsertArgs>(args: SelectSubset<T, ProfDisciplinasUpsertArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasCountArgs} args - Arguments to filter ProfDisciplinas to count.
     * @example
     * // Count the number of ProfDisciplinas
     * const count = await prisma.profDisciplinas.count({
     *   where: {
     *     // ... the filter for the ProfDisciplinas we want to count
     *   }
     * })
    **/
    count<T extends ProfDisciplinasCountArgs>(
      args?: Subset<T, ProfDisciplinasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfDisciplinasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfDisciplinasAggregateArgs>(args: Subset<T, ProfDisciplinasAggregateArgs>): Prisma.PrismaPromise<GetProfDisciplinasAggregateType<T>>

    /**
     * Group by ProfDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfDisciplinasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfDisciplinasGroupByArgs['orderBy'] }
        : { orderBy?: ProfDisciplinasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfDisciplinasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfDisciplinasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfDisciplinas model
   */
  readonly fields: ProfDisciplinasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfDisciplinas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfDisciplinasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfDisciplinas model
   */
  interface ProfDisciplinasFieldRefs {
    readonly idProfDisciplina: FieldRef<"ProfDisciplinas", 'Int'>
    readonly professorId: FieldRef<"ProfDisciplinas", 'Int'>
    readonly disciplinaId: FieldRef<"ProfDisciplinas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProfDisciplinas findUnique
   */
  export type ProfDisciplinasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where: ProfDisciplinasWhereUniqueInput
  }

  /**
   * ProfDisciplinas findUniqueOrThrow
   */
  export type ProfDisciplinasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where: ProfDisciplinasWhereUniqueInput
  }

  /**
   * ProfDisciplinas findFirst
   */
  export type ProfDisciplinasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where?: ProfDisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfDisciplinas to fetch.
     */
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfDisciplinas.
     */
    cursor?: ProfDisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfDisciplinas.
     */
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * ProfDisciplinas findFirstOrThrow
   */
  export type ProfDisciplinasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where?: ProfDisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfDisciplinas to fetch.
     */
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfDisciplinas.
     */
    cursor?: ProfDisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfDisciplinas.
     */
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * ProfDisciplinas findMany
   */
  export type ProfDisciplinasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where?: ProfDisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfDisciplinas to fetch.
     */
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfDisciplinas.
     */
    cursor?: ProfDisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfDisciplinas.
     */
    skip?: number
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * ProfDisciplinas create
   */
  export type ProfDisciplinasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfDisciplinas.
     */
    data: XOR<ProfDisciplinasCreateInput, ProfDisciplinasUncheckedCreateInput>
  }

  /**
   * ProfDisciplinas createMany
   */
  export type ProfDisciplinasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfDisciplinas.
     */
    data: ProfDisciplinasCreateManyInput | ProfDisciplinasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfDisciplinas createManyAndReturn
   */
  export type ProfDisciplinasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * The data used to create many ProfDisciplinas.
     */
    data: ProfDisciplinasCreateManyInput | ProfDisciplinasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfDisciplinas update
   */
  export type ProfDisciplinasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfDisciplinas.
     */
    data: XOR<ProfDisciplinasUpdateInput, ProfDisciplinasUncheckedUpdateInput>
    /**
     * Choose, which ProfDisciplinas to update.
     */
    where: ProfDisciplinasWhereUniqueInput
  }

  /**
   * ProfDisciplinas updateMany
   */
  export type ProfDisciplinasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfDisciplinas.
     */
    data: XOR<ProfDisciplinasUpdateManyMutationInput, ProfDisciplinasUncheckedUpdateManyInput>
    /**
     * Filter which ProfDisciplinas to update
     */
    where?: ProfDisciplinasWhereInput
    /**
     * Limit how many ProfDisciplinas to update.
     */
    limit?: number
  }

  /**
   * ProfDisciplinas updateManyAndReturn
   */
  export type ProfDisciplinasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * The data used to update ProfDisciplinas.
     */
    data: XOR<ProfDisciplinasUpdateManyMutationInput, ProfDisciplinasUncheckedUpdateManyInput>
    /**
     * Filter which ProfDisciplinas to update
     */
    where?: ProfDisciplinasWhereInput
    /**
     * Limit how many ProfDisciplinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfDisciplinas upsert
   */
  export type ProfDisciplinasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfDisciplinas to update in case it exists.
     */
    where: ProfDisciplinasWhereUniqueInput
    /**
     * In case the ProfDisciplinas found by the `where` argument doesn't exist, create a new ProfDisciplinas with this data.
     */
    create: XOR<ProfDisciplinasCreateInput, ProfDisciplinasUncheckedCreateInput>
    /**
     * In case the ProfDisciplinas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfDisciplinasUpdateInput, ProfDisciplinasUncheckedUpdateInput>
  }

  /**
   * ProfDisciplinas delete
   */
  export type ProfDisciplinasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter which ProfDisciplinas to delete.
     */
    where: ProfDisciplinasWhereUniqueInput
  }

  /**
   * ProfDisciplinas deleteMany
   */
  export type ProfDisciplinasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfDisciplinas to delete
     */
    where?: ProfDisciplinasWhereInput
    /**
     * Limit how many ProfDisciplinas to delete.
     */
    limit?: number
  }

  /**
   * ProfDisciplinas without action
   */
  export type ProfDisciplinasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
  }


  /**
   * Model ProfTurma
   */

  export type AggregateProfTurma = {
    _count: ProfTurmaCountAggregateOutputType | null
    _avg: ProfTurmaAvgAggregateOutputType | null
    _sum: ProfTurmaSumAggregateOutputType | null
    _min: ProfTurmaMinAggregateOutputType | null
    _max: ProfTurmaMaxAggregateOutputType | null
  }

  export type ProfTurmaAvgAggregateOutputType = {
    idProfTurma: number | null
    professorId: number | null
    turmaId: number | null
  }

  export type ProfTurmaSumAggregateOutputType = {
    idProfTurma: number | null
    professorId: number | null
    turmaId: number | null
  }

  export type ProfTurmaMinAggregateOutputType = {
    idProfTurma: number | null
    professorId: number | null
    turmaId: number | null
  }

  export type ProfTurmaMaxAggregateOutputType = {
    idProfTurma: number | null
    professorId: number | null
    turmaId: number | null
  }

  export type ProfTurmaCountAggregateOutputType = {
    idProfTurma: number
    professorId: number
    turmaId: number
    _all: number
  }


  export type ProfTurmaAvgAggregateInputType = {
    idProfTurma?: true
    professorId?: true
    turmaId?: true
  }

  export type ProfTurmaSumAggregateInputType = {
    idProfTurma?: true
    professorId?: true
    turmaId?: true
  }

  export type ProfTurmaMinAggregateInputType = {
    idProfTurma?: true
    professorId?: true
    turmaId?: true
  }

  export type ProfTurmaMaxAggregateInputType = {
    idProfTurma?: true
    professorId?: true
    turmaId?: true
  }

  export type ProfTurmaCountAggregateInputType = {
    idProfTurma?: true
    professorId?: true
    turmaId?: true
    _all?: true
  }

  export type ProfTurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfTurma to aggregate.
     */
    where?: ProfTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfTurmas to fetch.
     */
    orderBy?: ProfTurmaOrderByWithRelationInput | ProfTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfTurmas
    **/
    _count?: true | ProfTurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfTurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfTurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfTurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfTurmaMaxAggregateInputType
  }

  export type GetProfTurmaAggregateType<T extends ProfTurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateProfTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfTurma[P]>
      : GetScalarType<T[P], AggregateProfTurma[P]>
  }




  export type ProfTurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfTurmaWhereInput
    orderBy?: ProfTurmaOrderByWithAggregationInput | ProfTurmaOrderByWithAggregationInput[]
    by: ProfTurmaScalarFieldEnum[] | ProfTurmaScalarFieldEnum
    having?: ProfTurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfTurmaCountAggregateInputType | true
    _avg?: ProfTurmaAvgAggregateInputType
    _sum?: ProfTurmaSumAggregateInputType
    _min?: ProfTurmaMinAggregateInputType
    _max?: ProfTurmaMaxAggregateInputType
  }

  export type ProfTurmaGroupByOutputType = {
    idProfTurma: number
    professorId: number
    turmaId: number
    _count: ProfTurmaCountAggregateOutputType | null
    _avg: ProfTurmaAvgAggregateOutputType | null
    _sum: ProfTurmaSumAggregateOutputType | null
    _min: ProfTurmaMinAggregateOutputType | null
    _max: ProfTurmaMaxAggregateOutputType | null
  }

  type GetProfTurmaGroupByPayload<T extends ProfTurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfTurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfTurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfTurmaGroupByOutputType[P]>
            : GetScalarType<T[P], ProfTurmaGroupByOutputType[P]>
        }
      >
    >


  export type ProfTurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProfTurma?: boolean
    professorId?: boolean
    turmaId?: boolean
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profTurma"]>

  export type ProfTurmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProfTurma?: boolean
    professorId?: boolean
    turmaId?: boolean
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profTurma"]>

  export type ProfTurmaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProfTurma?: boolean
    professorId?: boolean
    turmaId?: boolean
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profTurma"]>

  export type ProfTurmaSelectScalar = {
    idProfTurma?: boolean
    professorId?: boolean
    turmaId?: boolean
  }

  export type ProfTurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idProfTurma" | "professorId" | "turmaId", ExtArgs["result"]["profTurma"]>
  export type ProfTurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }
  export type ProfTurmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }
  export type ProfTurmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }

  export type $ProfTurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfTurma"
    objects: {
      Professor: Prisma.$ProfessorPayload<ExtArgs>
      Turma: Prisma.$TurmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idProfTurma: number
      professorId: number
      turmaId: number
    }, ExtArgs["result"]["profTurma"]>
    composites: {}
  }

  type ProfTurmaGetPayload<S extends boolean | null | undefined | ProfTurmaDefaultArgs> = $Result.GetResult<Prisma.$ProfTurmaPayload, S>

  type ProfTurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfTurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfTurmaCountAggregateInputType | true
    }

  export interface ProfTurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfTurma'], meta: { name: 'ProfTurma' } }
    /**
     * Find zero or one ProfTurma that matches the filter.
     * @param {ProfTurmaFindUniqueArgs} args - Arguments to find a ProfTurma
     * @example
     * // Get one ProfTurma
     * const profTurma = await prisma.profTurma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfTurmaFindUniqueArgs>(args: SelectSubset<T, ProfTurmaFindUniqueArgs<ExtArgs>>): Prisma__ProfTurmaClient<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfTurma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfTurmaFindUniqueOrThrowArgs} args - Arguments to find a ProfTurma
     * @example
     * // Get one ProfTurma
     * const profTurma = await prisma.profTurma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfTurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfTurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfTurmaClient<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfTurma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfTurmaFindFirstArgs} args - Arguments to find a ProfTurma
     * @example
     * // Get one ProfTurma
     * const profTurma = await prisma.profTurma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfTurmaFindFirstArgs>(args?: SelectSubset<T, ProfTurmaFindFirstArgs<ExtArgs>>): Prisma__ProfTurmaClient<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfTurma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfTurmaFindFirstOrThrowArgs} args - Arguments to find a ProfTurma
     * @example
     * // Get one ProfTurma
     * const profTurma = await prisma.profTurma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfTurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfTurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfTurmaClient<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfTurmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfTurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfTurmas
     * const profTurmas = await prisma.profTurma.findMany()
     * 
     * // Get first 10 ProfTurmas
     * const profTurmas = await prisma.profTurma.findMany({ take: 10 })
     * 
     * // Only select the `idProfTurma`
     * const profTurmaWithIdProfTurmaOnly = await prisma.profTurma.findMany({ select: { idProfTurma: true } })
     * 
     */
    findMany<T extends ProfTurmaFindManyArgs>(args?: SelectSubset<T, ProfTurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfTurma.
     * @param {ProfTurmaCreateArgs} args - Arguments to create a ProfTurma.
     * @example
     * // Create one ProfTurma
     * const ProfTurma = await prisma.profTurma.create({
     *   data: {
     *     // ... data to create a ProfTurma
     *   }
     * })
     * 
     */
    create<T extends ProfTurmaCreateArgs>(args: SelectSubset<T, ProfTurmaCreateArgs<ExtArgs>>): Prisma__ProfTurmaClient<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfTurmas.
     * @param {ProfTurmaCreateManyArgs} args - Arguments to create many ProfTurmas.
     * @example
     * // Create many ProfTurmas
     * const profTurma = await prisma.profTurma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfTurmaCreateManyArgs>(args?: SelectSubset<T, ProfTurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfTurmas and returns the data saved in the database.
     * @param {ProfTurmaCreateManyAndReturnArgs} args - Arguments to create many ProfTurmas.
     * @example
     * // Create many ProfTurmas
     * const profTurma = await prisma.profTurma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfTurmas and only return the `idProfTurma`
     * const profTurmaWithIdProfTurmaOnly = await prisma.profTurma.createManyAndReturn({
     *   select: { idProfTurma: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfTurmaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfTurmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfTurma.
     * @param {ProfTurmaDeleteArgs} args - Arguments to delete one ProfTurma.
     * @example
     * // Delete one ProfTurma
     * const ProfTurma = await prisma.profTurma.delete({
     *   where: {
     *     // ... filter to delete one ProfTurma
     *   }
     * })
     * 
     */
    delete<T extends ProfTurmaDeleteArgs>(args: SelectSubset<T, ProfTurmaDeleteArgs<ExtArgs>>): Prisma__ProfTurmaClient<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfTurma.
     * @param {ProfTurmaUpdateArgs} args - Arguments to update one ProfTurma.
     * @example
     * // Update one ProfTurma
     * const profTurma = await prisma.profTurma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfTurmaUpdateArgs>(args: SelectSubset<T, ProfTurmaUpdateArgs<ExtArgs>>): Prisma__ProfTurmaClient<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfTurmas.
     * @param {ProfTurmaDeleteManyArgs} args - Arguments to filter ProfTurmas to delete.
     * @example
     * // Delete a few ProfTurmas
     * const { count } = await prisma.profTurma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfTurmaDeleteManyArgs>(args?: SelectSubset<T, ProfTurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfTurmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfTurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfTurmas
     * const profTurma = await prisma.profTurma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfTurmaUpdateManyArgs>(args: SelectSubset<T, ProfTurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfTurmas and returns the data updated in the database.
     * @param {ProfTurmaUpdateManyAndReturnArgs} args - Arguments to update many ProfTurmas.
     * @example
     * // Update many ProfTurmas
     * const profTurma = await prisma.profTurma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfTurmas and only return the `idProfTurma`
     * const profTurmaWithIdProfTurmaOnly = await prisma.profTurma.updateManyAndReturn({
     *   select: { idProfTurma: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfTurmaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfTurmaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfTurma.
     * @param {ProfTurmaUpsertArgs} args - Arguments to update or create a ProfTurma.
     * @example
     * // Update or create a ProfTurma
     * const profTurma = await prisma.profTurma.upsert({
     *   create: {
     *     // ... data to create a ProfTurma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfTurma we want to update
     *   }
     * })
     */
    upsert<T extends ProfTurmaUpsertArgs>(args: SelectSubset<T, ProfTurmaUpsertArgs<ExtArgs>>): Prisma__ProfTurmaClient<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfTurmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfTurmaCountArgs} args - Arguments to filter ProfTurmas to count.
     * @example
     * // Count the number of ProfTurmas
     * const count = await prisma.profTurma.count({
     *   where: {
     *     // ... the filter for the ProfTurmas we want to count
     *   }
     * })
    **/
    count<T extends ProfTurmaCountArgs>(
      args?: Subset<T, ProfTurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfTurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfTurma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfTurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfTurmaAggregateArgs>(args: Subset<T, ProfTurmaAggregateArgs>): Prisma.PrismaPromise<GetProfTurmaAggregateType<T>>

    /**
     * Group by ProfTurma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfTurmaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfTurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfTurmaGroupByArgs['orderBy'] }
        : { orderBy?: ProfTurmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfTurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfTurma model
   */
  readonly fields: ProfTurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfTurma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfTurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Turma<T extends TurmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurmaDefaultArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfTurma model
   */
  interface ProfTurmaFieldRefs {
    readonly idProfTurma: FieldRef<"ProfTurma", 'Int'>
    readonly professorId: FieldRef<"ProfTurma", 'Int'>
    readonly turmaId: FieldRef<"ProfTurma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProfTurma findUnique
   */
  export type ProfTurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * Filter, which ProfTurma to fetch.
     */
    where: ProfTurmaWhereUniqueInput
  }

  /**
   * ProfTurma findUniqueOrThrow
   */
  export type ProfTurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * Filter, which ProfTurma to fetch.
     */
    where: ProfTurmaWhereUniqueInput
  }

  /**
   * ProfTurma findFirst
   */
  export type ProfTurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * Filter, which ProfTurma to fetch.
     */
    where?: ProfTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfTurmas to fetch.
     */
    orderBy?: ProfTurmaOrderByWithRelationInput | ProfTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfTurmas.
     */
    cursor?: ProfTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfTurmas.
     */
    distinct?: ProfTurmaScalarFieldEnum | ProfTurmaScalarFieldEnum[]
  }

  /**
   * ProfTurma findFirstOrThrow
   */
  export type ProfTurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * Filter, which ProfTurma to fetch.
     */
    where?: ProfTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfTurmas to fetch.
     */
    orderBy?: ProfTurmaOrderByWithRelationInput | ProfTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfTurmas.
     */
    cursor?: ProfTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfTurmas.
     */
    distinct?: ProfTurmaScalarFieldEnum | ProfTurmaScalarFieldEnum[]
  }

  /**
   * ProfTurma findMany
   */
  export type ProfTurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * Filter, which ProfTurmas to fetch.
     */
    where?: ProfTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfTurmas to fetch.
     */
    orderBy?: ProfTurmaOrderByWithRelationInput | ProfTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfTurmas.
     */
    cursor?: ProfTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfTurmas.
     */
    skip?: number
    distinct?: ProfTurmaScalarFieldEnum | ProfTurmaScalarFieldEnum[]
  }

  /**
   * ProfTurma create
   */
  export type ProfTurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfTurma.
     */
    data: XOR<ProfTurmaCreateInput, ProfTurmaUncheckedCreateInput>
  }

  /**
   * ProfTurma createMany
   */
  export type ProfTurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfTurmas.
     */
    data: ProfTurmaCreateManyInput | ProfTurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfTurma createManyAndReturn
   */
  export type ProfTurmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * The data used to create many ProfTurmas.
     */
    data: ProfTurmaCreateManyInput | ProfTurmaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfTurma update
   */
  export type ProfTurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfTurma.
     */
    data: XOR<ProfTurmaUpdateInput, ProfTurmaUncheckedUpdateInput>
    /**
     * Choose, which ProfTurma to update.
     */
    where: ProfTurmaWhereUniqueInput
  }

  /**
   * ProfTurma updateMany
   */
  export type ProfTurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfTurmas.
     */
    data: XOR<ProfTurmaUpdateManyMutationInput, ProfTurmaUncheckedUpdateManyInput>
    /**
     * Filter which ProfTurmas to update
     */
    where?: ProfTurmaWhereInput
    /**
     * Limit how many ProfTurmas to update.
     */
    limit?: number
  }

  /**
   * ProfTurma updateManyAndReturn
   */
  export type ProfTurmaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * The data used to update ProfTurmas.
     */
    data: XOR<ProfTurmaUpdateManyMutationInput, ProfTurmaUncheckedUpdateManyInput>
    /**
     * Filter which ProfTurmas to update
     */
    where?: ProfTurmaWhereInput
    /**
     * Limit how many ProfTurmas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfTurma upsert
   */
  export type ProfTurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfTurma to update in case it exists.
     */
    where: ProfTurmaWhereUniqueInput
    /**
     * In case the ProfTurma found by the `where` argument doesn't exist, create a new ProfTurma with this data.
     */
    create: XOR<ProfTurmaCreateInput, ProfTurmaUncheckedCreateInput>
    /**
     * In case the ProfTurma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfTurmaUpdateInput, ProfTurmaUncheckedUpdateInput>
  }

  /**
   * ProfTurma delete
   */
  export type ProfTurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    /**
     * Filter which ProfTurma to delete.
     */
    where: ProfTurmaWhereUniqueInput
  }

  /**
   * ProfTurma deleteMany
   */
  export type ProfTurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfTurmas to delete
     */
    where?: ProfTurmaWhereInput
    /**
     * Limit how many ProfTurmas to delete.
     */
    limit?: number
  }

  /**
   * ProfTurma without action
   */
  export type ProfTurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
  }


  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    idSala: number | null
  }

  export type SalaSumAggregateOutputType = {
    idSala: number | null
  }

  export type SalaMinAggregateOutputType = {
    idSala: number | null
    nome: string | null
  }

  export type SalaMaxAggregateOutputType = {
    idSala: number | null
    nome: string | null
  }

  export type SalaCountAggregateOutputType = {
    idSala: number
    nome: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    idSala?: true
  }

  export type SalaSumAggregateInputType = {
    idSala?: true
  }

  export type SalaMinAggregateInputType = {
    idSala?: true
    nome?: true
  }

  export type SalaMaxAggregateInputType = {
    idSala?: true
    nome?: true
  }

  export type SalaCountAggregateInputType = {
    idSala?: true
    nome?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    idSala: number
    nome: string
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idSala?: boolean
    nome?: boolean
    TempoLectivo?: boolean | Sala$TempoLectivoArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idSala?: boolean
    nome?: boolean
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idSala?: boolean
    nome?: boolean
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectScalar = {
    idSala?: boolean
    nome?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idSala" | "nome", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TempoLectivo?: boolean | Sala$TempoLectivoArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      TempoLectivo: Prisma.$TempoLectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idSala: number
      nome: string
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `idSala`
     * const salaWithIdSalaOnly = await prisma.sala.findMany({ select: { idSala: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salas and returns the data saved in the database.
     * @param {SalaCreateManyAndReturnArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salas and only return the `idSala`
     * const salaWithIdSalaOnly = await prisma.sala.createManyAndReturn({
     *   select: { idSala: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas and returns the data updated in the database.
     * @param {SalaUpdateManyAndReturnArgs} args - Arguments to update many Salas.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salas and only return the `idSala`
     * const salaWithIdSalaOnly = await prisma.sala.updateManyAndReturn({
     *   select: { idSala: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TempoLectivo<T extends Sala$TempoLectivoArgs<ExtArgs> = {}>(args?: Subset<T, Sala$TempoLectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly idSala: FieldRef<"Sala", 'Int'>
    readonly nome: FieldRef<"Sala", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala createManyAndReturn
   */
  export type SalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala updateManyAndReturn
   */
  export type SalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.TempoLectivo
   */
  export type Sala$TempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    where?: TempoLectivoWhereInput
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    cursor?: TempoLectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model TempoLectivo
   */

  export type AggregateTempoLectivo = {
    _count: TempoLectivoCountAggregateOutputType | null
    _avg: TempoLectivoAvgAggregateOutputType | null
    _sum: TempoLectivoSumAggregateOutputType | null
    _min: TempoLectivoMinAggregateOutputType | null
    _max: TempoLectivoMaxAggregateOutputType | null
  }

  export type TempoLectivoAvgAggregateOutputType = {
    idTempoLectivo: number | null
    ordem: number | null
    professorId: number | null
    disciplinaId: number | null
    salaId: number | null
    turmaId: number | null
  }

  export type TempoLectivoSumAggregateOutputType = {
    idTempoLectivo: number | null
    ordem: number | null
    professorId: number | null
    disciplinaId: number | null
    salaId: number | null
    turmaId: number | null
  }

  export type TempoLectivoMinAggregateOutputType = {
    idTempoLectivo: number | null
    diaSemana: string | null
    periodoId: string | null
    ordem: number | null
    professorId: number | null
    disciplinaId: number | null
    salaId: number | null
    turmaId: number | null
  }

  export type TempoLectivoMaxAggregateOutputType = {
    idTempoLectivo: number | null
    diaSemana: string | null
    periodoId: string | null
    ordem: number | null
    professorId: number | null
    disciplinaId: number | null
    salaId: number | null
    turmaId: number | null
  }

  export type TempoLectivoCountAggregateOutputType = {
    idTempoLectivo: number
    diaSemana: number
    periodoId: number
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
    turmaId: number
    _all: number
  }


  export type TempoLectivoAvgAggregateInputType = {
    idTempoLectivo?: true
    ordem?: true
    professorId?: true
    disciplinaId?: true
    salaId?: true
    turmaId?: true
  }

  export type TempoLectivoSumAggregateInputType = {
    idTempoLectivo?: true
    ordem?: true
    professorId?: true
    disciplinaId?: true
    salaId?: true
    turmaId?: true
  }

  export type TempoLectivoMinAggregateInputType = {
    idTempoLectivo?: true
    diaSemana?: true
    periodoId?: true
    ordem?: true
    professorId?: true
    disciplinaId?: true
    salaId?: true
    turmaId?: true
  }

  export type TempoLectivoMaxAggregateInputType = {
    idTempoLectivo?: true
    diaSemana?: true
    periodoId?: true
    ordem?: true
    professorId?: true
    disciplinaId?: true
    salaId?: true
    turmaId?: true
  }

  export type TempoLectivoCountAggregateInputType = {
    idTempoLectivo?: true
    diaSemana?: true
    periodoId?: true
    ordem?: true
    professorId?: true
    disciplinaId?: true
    salaId?: true
    turmaId?: true
    _all?: true
  }

  export type TempoLectivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempoLectivo to aggregate.
     */
    where?: TempoLectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempoLectivos to fetch.
     */
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempoLectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempoLectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempoLectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempoLectivos
    **/
    _count?: true | TempoLectivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempoLectivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempoLectivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempoLectivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempoLectivoMaxAggregateInputType
  }

  export type GetTempoLectivoAggregateType<T extends TempoLectivoAggregateArgs> = {
        [P in keyof T & keyof AggregateTempoLectivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempoLectivo[P]>
      : GetScalarType<T[P], AggregateTempoLectivo[P]>
  }




  export type TempoLectivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempoLectivoWhereInput
    orderBy?: TempoLectivoOrderByWithAggregationInput | TempoLectivoOrderByWithAggregationInput[]
    by: TempoLectivoScalarFieldEnum[] | TempoLectivoScalarFieldEnum
    having?: TempoLectivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempoLectivoCountAggregateInputType | true
    _avg?: TempoLectivoAvgAggregateInputType
    _sum?: TempoLectivoSumAggregateInputType
    _min?: TempoLectivoMinAggregateInputType
    _max?: TempoLectivoMaxAggregateInputType
  }

  export type TempoLectivoGroupByOutputType = {
    idTempoLectivo: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
    turmaId: number
    _count: TempoLectivoCountAggregateOutputType | null
    _avg: TempoLectivoAvgAggregateOutputType | null
    _sum: TempoLectivoSumAggregateOutputType | null
    _min: TempoLectivoMinAggregateOutputType | null
    _max: TempoLectivoMaxAggregateOutputType | null
  }

  type GetTempoLectivoGroupByPayload<T extends TempoLectivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempoLectivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempoLectivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempoLectivoGroupByOutputType[P]>
            : GetScalarType<T[P], TempoLectivoGroupByOutputType[P]>
        }
      >
    >


  export type TempoLectivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTempoLectivo?: boolean
    diaSemana?: boolean
    periodoId?: boolean
    ordem?: boolean
    professorId?: boolean
    disciplinaId?: boolean
    salaId?: boolean
    turmaId?: boolean
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Sala?: boolean | SalaDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempoLectivo"]>

  export type TempoLectivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTempoLectivo?: boolean
    diaSemana?: boolean
    periodoId?: boolean
    ordem?: boolean
    professorId?: boolean
    disciplinaId?: boolean
    salaId?: boolean
    turmaId?: boolean
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Sala?: boolean | SalaDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempoLectivo"]>

  export type TempoLectivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTempoLectivo?: boolean
    diaSemana?: boolean
    periodoId?: boolean
    ordem?: boolean
    professorId?: boolean
    disciplinaId?: boolean
    salaId?: boolean
    turmaId?: boolean
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Sala?: boolean | SalaDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempoLectivo"]>

  export type TempoLectivoSelectScalar = {
    idTempoLectivo?: boolean
    diaSemana?: boolean
    periodoId?: boolean
    ordem?: boolean
    professorId?: boolean
    disciplinaId?: boolean
    salaId?: boolean
    turmaId?: boolean
  }

  export type TempoLectivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idTempoLectivo" | "diaSemana" | "periodoId" | "ordem" | "professorId" | "disciplinaId" | "salaId" | "turmaId", ExtArgs["result"]["tempoLectivo"]>
  export type TempoLectivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Sala?: boolean | SalaDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }
  export type TempoLectivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Sala?: boolean | SalaDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }
  export type TempoLectivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    Periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    Professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    Sala?: boolean | SalaDefaultArgs<ExtArgs>
    Turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }

  export type $TempoLectivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempoLectivo"
    objects: {
      DiaSemana: Prisma.$DiaSemanaPayload<ExtArgs>
      Disciplina: Prisma.$DisciplinaPayload<ExtArgs>
      Periodo: Prisma.$PeriodoPayload<ExtArgs>
      Professor: Prisma.$ProfessorPayload<ExtArgs>
      Sala: Prisma.$SalaPayload<ExtArgs>
      Turma: Prisma.$TurmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idTempoLectivo: number
      diaSemana: string
      periodoId: string
      ordem: number
      professorId: number
      disciplinaId: number
      salaId: number
      turmaId: number
    }, ExtArgs["result"]["tempoLectivo"]>
    composites: {}
  }

  type TempoLectivoGetPayload<S extends boolean | null | undefined | TempoLectivoDefaultArgs> = $Result.GetResult<Prisma.$TempoLectivoPayload, S>

  type TempoLectivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempoLectivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempoLectivoCountAggregateInputType | true
    }

  export interface TempoLectivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempoLectivo'], meta: { name: 'TempoLectivo' } }
    /**
     * Find zero or one TempoLectivo that matches the filter.
     * @param {TempoLectivoFindUniqueArgs} args - Arguments to find a TempoLectivo
     * @example
     * // Get one TempoLectivo
     * const tempoLectivo = await prisma.tempoLectivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempoLectivoFindUniqueArgs>(args: SelectSubset<T, TempoLectivoFindUniqueArgs<ExtArgs>>): Prisma__TempoLectivoClient<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TempoLectivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempoLectivoFindUniqueOrThrowArgs} args - Arguments to find a TempoLectivo
     * @example
     * // Get one TempoLectivo
     * const tempoLectivo = await prisma.tempoLectivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempoLectivoFindUniqueOrThrowArgs>(args: SelectSubset<T, TempoLectivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempoLectivoClient<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempoLectivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempoLectivoFindFirstArgs} args - Arguments to find a TempoLectivo
     * @example
     * // Get one TempoLectivo
     * const tempoLectivo = await prisma.tempoLectivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempoLectivoFindFirstArgs>(args?: SelectSubset<T, TempoLectivoFindFirstArgs<ExtArgs>>): Prisma__TempoLectivoClient<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempoLectivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempoLectivoFindFirstOrThrowArgs} args - Arguments to find a TempoLectivo
     * @example
     * // Get one TempoLectivo
     * const tempoLectivo = await prisma.tempoLectivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempoLectivoFindFirstOrThrowArgs>(args?: SelectSubset<T, TempoLectivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempoLectivoClient<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TempoLectivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempoLectivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempoLectivos
     * const tempoLectivos = await prisma.tempoLectivo.findMany()
     * 
     * // Get first 10 TempoLectivos
     * const tempoLectivos = await prisma.tempoLectivo.findMany({ take: 10 })
     * 
     * // Only select the `idTempoLectivo`
     * const tempoLectivoWithIdTempoLectivoOnly = await prisma.tempoLectivo.findMany({ select: { idTempoLectivo: true } })
     * 
     */
    findMany<T extends TempoLectivoFindManyArgs>(args?: SelectSubset<T, TempoLectivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TempoLectivo.
     * @param {TempoLectivoCreateArgs} args - Arguments to create a TempoLectivo.
     * @example
     * // Create one TempoLectivo
     * const TempoLectivo = await prisma.tempoLectivo.create({
     *   data: {
     *     // ... data to create a TempoLectivo
     *   }
     * })
     * 
     */
    create<T extends TempoLectivoCreateArgs>(args: SelectSubset<T, TempoLectivoCreateArgs<ExtArgs>>): Prisma__TempoLectivoClient<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TempoLectivos.
     * @param {TempoLectivoCreateManyArgs} args - Arguments to create many TempoLectivos.
     * @example
     * // Create many TempoLectivos
     * const tempoLectivo = await prisma.tempoLectivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempoLectivoCreateManyArgs>(args?: SelectSubset<T, TempoLectivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TempoLectivos and returns the data saved in the database.
     * @param {TempoLectivoCreateManyAndReturnArgs} args - Arguments to create many TempoLectivos.
     * @example
     * // Create many TempoLectivos
     * const tempoLectivo = await prisma.tempoLectivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TempoLectivos and only return the `idTempoLectivo`
     * const tempoLectivoWithIdTempoLectivoOnly = await prisma.tempoLectivo.createManyAndReturn({
     *   select: { idTempoLectivo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempoLectivoCreateManyAndReturnArgs>(args?: SelectSubset<T, TempoLectivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TempoLectivo.
     * @param {TempoLectivoDeleteArgs} args - Arguments to delete one TempoLectivo.
     * @example
     * // Delete one TempoLectivo
     * const TempoLectivo = await prisma.tempoLectivo.delete({
     *   where: {
     *     // ... filter to delete one TempoLectivo
     *   }
     * })
     * 
     */
    delete<T extends TempoLectivoDeleteArgs>(args: SelectSubset<T, TempoLectivoDeleteArgs<ExtArgs>>): Prisma__TempoLectivoClient<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TempoLectivo.
     * @param {TempoLectivoUpdateArgs} args - Arguments to update one TempoLectivo.
     * @example
     * // Update one TempoLectivo
     * const tempoLectivo = await prisma.tempoLectivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempoLectivoUpdateArgs>(args: SelectSubset<T, TempoLectivoUpdateArgs<ExtArgs>>): Prisma__TempoLectivoClient<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TempoLectivos.
     * @param {TempoLectivoDeleteManyArgs} args - Arguments to filter TempoLectivos to delete.
     * @example
     * // Delete a few TempoLectivos
     * const { count } = await prisma.tempoLectivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempoLectivoDeleteManyArgs>(args?: SelectSubset<T, TempoLectivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempoLectivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempoLectivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempoLectivos
     * const tempoLectivo = await prisma.tempoLectivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempoLectivoUpdateManyArgs>(args: SelectSubset<T, TempoLectivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempoLectivos and returns the data updated in the database.
     * @param {TempoLectivoUpdateManyAndReturnArgs} args - Arguments to update many TempoLectivos.
     * @example
     * // Update many TempoLectivos
     * const tempoLectivo = await prisma.tempoLectivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TempoLectivos and only return the `idTempoLectivo`
     * const tempoLectivoWithIdTempoLectivoOnly = await prisma.tempoLectivo.updateManyAndReturn({
     *   select: { idTempoLectivo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TempoLectivoUpdateManyAndReturnArgs>(args: SelectSubset<T, TempoLectivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TempoLectivo.
     * @param {TempoLectivoUpsertArgs} args - Arguments to update or create a TempoLectivo.
     * @example
     * // Update or create a TempoLectivo
     * const tempoLectivo = await prisma.tempoLectivo.upsert({
     *   create: {
     *     // ... data to create a TempoLectivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempoLectivo we want to update
     *   }
     * })
     */
    upsert<T extends TempoLectivoUpsertArgs>(args: SelectSubset<T, TempoLectivoUpsertArgs<ExtArgs>>): Prisma__TempoLectivoClient<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TempoLectivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempoLectivoCountArgs} args - Arguments to filter TempoLectivos to count.
     * @example
     * // Count the number of TempoLectivos
     * const count = await prisma.tempoLectivo.count({
     *   where: {
     *     // ... the filter for the TempoLectivos we want to count
     *   }
     * })
    **/
    count<T extends TempoLectivoCountArgs>(
      args?: Subset<T, TempoLectivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempoLectivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempoLectivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempoLectivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TempoLectivoAggregateArgs>(args: Subset<T, TempoLectivoAggregateArgs>): Prisma.PrismaPromise<GetTempoLectivoAggregateType<T>>

    /**
     * Group by TempoLectivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempoLectivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TempoLectivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempoLectivoGroupByArgs['orderBy'] }
        : { orderBy?: TempoLectivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TempoLectivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempoLectivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempoLectivo model
   */
  readonly fields: TempoLectivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempoLectivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempoLectivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiaSemana<T extends DiaSemanaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemanaDefaultArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Periodo<T extends PeriodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodoDefaultArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Turma<T extends TurmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurmaDefaultArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TempoLectivo model
   */
  interface TempoLectivoFieldRefs {
    readonly idTempoLectivo: FieldRef<"TempoLectivo", 'Int'>
    readonly diaSemana: FieldRef<"TempoLectivo", 'String'>
    readonly periodoId: FieldRef<"TempoLectivo", 'String'>
    readonly ordem: FieldRef<"TempoLectivo", 'Int'>
    readonly professorId: FieldRef<"TempoLectivo", 'Int'>
    readonly disciplinaId: FieldRef<"TempoLectivo", 'Int'>
    readonly salaId: FieldRef<"TempoLectivo", 'Int'>
    readonly turmaId: FieldRef<"TempoLectivo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TempoLectivo findUnique
   */
  export type TempoLectivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which TempoLectivo to fetch.
     */
    where: TempoLectivoWhereUniqueInput
  }

  /**
   * TempoLectivo findUniqueOrThrow
   */
  export type TempoLectivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which TempoLectivo to fetch.
     */
    where: TempoLectivoWhereUniqueInput
  }

  /**
   * TempoLectivo findFirst
   */
  export type TempoLectivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which TempoLectivo to fetch.
     */
    where?: TempoLectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempoLectivos to fetch.
     */
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempoLectivos.
     */
    cursor?: TempoLectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempoLectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempoLectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempoLectivos.
     */
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * TempoLectivo findFirstOrThrow
   */
  export type TempoLectivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which TempoLectivo to fetch.
     */
    where?: TempoLectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempoLectivos to fetch.
     */
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempoLectivos.
     */
    cursor?: TempoLectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempoLectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempoLectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempoLectivos.
     */
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * TempoLectivo findMany
   */
  export type TempoLectivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which TempoLectivos to fetch.
     */
    where?: TempoLectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempoLectivos to fetch.
     */
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempoLectivos.
     */
    cursor?: TempoLectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempoLectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempoLectivos.
     */
    skip?: number
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * TempoLectivo create
   */
  export type TempoLectivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * The data needed to create a TempoLectivo.
     */
    data: XOR<TempoLectivoCreateInput, TempoLectivoUncheckedCreateInput>
  }

  /**
   * TempoLectivo createMany
   */
  export type TempoLectivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempoLectivos.
     */
    data: TempoLectivoCreateManyInput | TempoLectivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempoLectivo createManyAndReturn
   */
  export type TempoLectivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * The data used to create many TempoLectivos.
     */
    data: TempoLectivoCreateManyInput | TempoLectivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempoLectivo update
   */
  export type TempoLectivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * The data needed to update a TempoLectivo.
     */
    data: XOR<TempoLectivoUpdateInput, TempoLectivoUncheckedUpdateInput>
    /**
     * Choose, which TempoLectivo to update.
     */
    where: TempoLectivoWhereUniqueInput
  }

  /**
   * TempoLectivo updateMany
   */
  export type TempoLectivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempoLectivos.
     */
    data: XOR<TempoLectivoUpdateManyMutationInput, TempoLectivoUncheckedUpdateManyInput>
    /**
     * Filter which TempoLectivos to update
     */
    where?: TempoLectivoWhereInput
    /**
     * Limit how many TempoLectivos to update.
     */
    limit?: number
  }

  /**
   * TempoLectivo updateManyAndReturn
   */
  export type TempoLectivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * The data used to update TempoLectivos.
     */
    data: XOR<TempoLectivoUpdateManyMutationInput, TempoLectivoUncheckedUpdateManyInput>
    /**
     * Filter which TempoLectivos to update
     */
    where?: TempoLectivoWhereInput
    /**
     * Limit how many TempoLectivos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempoLectivo upsert
   */
  export type TempoLectivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * The filter to search for the TempoLectivo to update in case it exists.
     */
    where: TempoLectivoWhereUniqueInput
    /**
     * In case the TempoLectivo found by the `where` argument doesn't exist, create a new TempoLectivo with this data.
     */
    create: XOR<TempoLectivoCreateInput, TempoLectivoUncheckedCreateInput>
    /**
     * In case the TempoLectivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempoLectivoUpdateInput, TempoLectivoUncheckedUpdateInput>
  }

  /**
   * TempoLectivo delete
   */
  export type TempoLectivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    /**
     * Filter which TempoLectivo to delete.
     */
    where: TempoLectivoWhereUniqueInput
  }

  /**
   * TempoLectivo deleteMany
   */
  export type TempoLectivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempoLectivos to delete
     */
    where?: TempoLectivoWhereInput
    /**
     * Limit how many TempoLectivos to delete.
     */
    limit?: number
  }

  /**
   * TempoLectivo without action
   */
  export type TempoLectivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
  }


  /**
   * Model Turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaAvgAggregateOutputType = {
    idTurma: number | null
  }

  export type TurmaSumAggregateOutputType = {
    idTurma: number | null
  }

  export type TurmaMinAggregateOutputType = {
    idTurma: number | null
    nome: string | null
    classe: string | null
    curso: string | null
  }

  export type TurmaMaxAggregateOutputType = {
    idTurma: number | null
    nome: string | null
    classe: string | null
    curso: string | null
  }

  export type TurmaCountAggregateOutputType = {
    idTurma: number
    nome: number
    classe: number
    curso: number
    _all: number
  }


  export type TurmaAvgAggregateInputType = {
    idTurma?: true
  }

  export type TurmaSumAggregateInputType = {
    idTurma?: true
  }

  export type TurmaMinAggregateInputType = {
    idTurma?: true
    nome?: true
    classe?: true
    curso?: true
  }

  export type TurmaMaxAggregateInputType = {
    idTurma?: true
    nome?: true
    classe?: true
    curso?: true
  }

  export type TurmaCountAggregateInputType = {
    idTurma?: true
    nome?: true
    classe?: true
    curso?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithAggregationInput | TurmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _avg?: TurmaAvgAggregateInputType
    _sum?: TurmaSumAggregateInputType
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    idTurma: number
    nome: string
    classe: string
    curso: string
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTurma?: boolean
    nome?: boolean
    classe?: boolean
    curso?: boolean
    ProfTurma?: boolean | Turma$ProfTurmaArgs<ExtArgs>
    TempoLectivo?: boolean | Turma$TempoLectivoArgs<ExtArgs>
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Curso?: boolean | CursoDefaultArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTurma?: boolean
    nome?: boolean
    classe?: boolean
    curso?: boolean
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTurma?: boolean
    nome?: boolean
    classe?: boolean
    curso?: boolean
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectScalar = {
    idTurma?: boolean
    nome?: boolean
    classe?: boolean
    curso?: boolean
  }

  export type TurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idTurma" | "nome" | "classe" | "curso", ExtArgs["result"]["turma"]>
  export type TurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProfTurma?: boolean | Turma$ProfTurmaArgs<ExtArgs>
    TempoLectivo?: boolean | Turma$TempoLectivoArgs<ExtArgs>
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Curso?: boolean | CursoDefaultArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $TurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turma"
    objects: {
      ProfTurma: Prisma.$ProfTurmaPayload<ExtArgs>[]
      TempoLectivo: Prisma.$TempoLectivoPayload<ExtArgs>[]
      Classe: Prisma.$ClassePayload<ExtArgs>
      Curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idTurma: number
      nome: string
      classe: string
      curso: string
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type TurmaGetPayload<S extends boolean | null | undefined | TurmaDefaultArgs> = $Result.GetResult<Prisma.$TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurmaFindUniqueArgs>(args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurmaFindFirstArgs>(args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `idTurma`
     * const turmaWithIdTurmaOnly = await prisma.turma.findMany({ select: { idTurma: true } })
     * 
     */
    findMany<T extends TurmaFindManyArgs>(args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends TurmaCreateArgs>(args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurmaCreateManyArgs>(args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turmas and returns the data saved in the database.
     * @param {TurmaCreateManyAndReturnArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turmas and only return the `idTurma`
     * const turmaWithIdTurmaOnly = await prisma.turma.createManyAndReturn({
     *   select: { idTurma: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurmaCreateManyAndReturnArgs>(args?: SelectSubset<T, TurmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends TurmaDeleteArgs>(args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurmaUpdateArgs>(args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurmaDeleteManyArgs>(args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurmaUpdateManyArgs>(args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas and returns the data updated in the database.
     * @param {TurmaUpdateManyAndReturnArgs} args - Arguments to update many Turmas.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turmas and only return the `idTurma`
     * const turmaWithIdTurmaOnly = await prisma.turma.updateManyAndReturn({
     *   select: { idTurma: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TurmaUpdateManyAndReturnArgs>(args: SelectSubset<T, TurmaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends TurmaUpsertArgs>(args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turma model
   */
  readonly fields: TurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProfTurma<T extends Turma$ProfTurmaArgs<ExtArgs> = {}>(args?: Subset<T, Turma$ProfTurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TempoLectivo<T extends Turma$TempoLectivoArgs<ExtArgs> = {}>(args?: Subset<T, Turma$TempoLectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Classe<T extends ClasseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClasseDefaultArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turma model
   */
  interface TurmaFieldRefs {
    readonly idTurma: FieldRef<"Turma", 'Int'>
    readonly nome: FieldRef<"Turma", 'String'>
    readonly classe: FieldRef<"Turma", 'String'>
    readonly curso: FieldRef<"Turma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Turma findUnique
   */
  export type TurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findFirst
   */
  export type TurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }

  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turma createManyAndReturn
   */
  export type TurmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
  }

  /**
   * Turma updateManyAndReturn
   */
  export type TurmaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }

  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to delete.
     */
    limit?: number
  }

  /**
   * Turma.ProfTurma
   */
  export type Turma$ProfTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfTurma
     */
    select?: ProfTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfTurma
     */
    omit?: ProfTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfTurmaInclude<ExtArgs> | null
    where?: ProfTurmaWhereInput
    orderBy?: ProfTurmaOrderByWithRelationInput | ProfTurmaOrderByWithRelationInput[]
    cursor?: ProfTurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfTurmaScalarFieldEnum | ProfTurmaScalarFieldEnum[]
  }

  /**
   * Turma.TempoLectivo
   */
  export type Turma$TempoLectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempoLectivo
     */
    select?: TempoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempoLectivo
     */
    omit?: TempoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempoLectivoInclude<ExtArgs> | null
    where?: TempoLectivoWhereInput
    orderBy?: TempoLectivoOrderByWithRelationInput | TempoLectivoOrderByWithRelationInput[]
    cursor?: TempoLectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempoLectivoScalarFieldEnum | TempoLectivoScalarFieldEnum[]
  }

  /**
   * Turma without action
   */
  export type TurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClasseScalarFieldEnum: {
    nome: 'nome'
  };

  export type ClasseScalarFieldEnum = (typeof ClasseScalarFieldEnum)[keyof typeof ClasseScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    nome: 'nome'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const DiaSemanaScalarFieldEnum: {
    nome: 'nome'
  };

  export type DiaSemanaScalarFieldEnum = (typeof DiaSemanaScalarFieldEnum)[keyof typeof DiaSemanaScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    idDisciplina: 'idDisciplina',
    nome: 'nome'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const DisponibilidadeScalarFieldEnum: {
    idDisponibilidade: 'idDisponibilidade',
    diaSemana: 'diaSemana',
    periodoId: 'periodoId',
    ordem: 'ordem',
    professorId: 'professorId'
  };

  export type DisponibilidadeScalarFieldEnum = (typeof DisponibilidadeScalarFieldEnum)[keyof typeof DisponibilidadeScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id_professor: 'id_professor',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const PeriodoScalarFieldEnum: {
    periodo: 'periodo'
  };

  export type PeriodoScalarFieldEnum = (typeof PeriodoScalarFieldEnum)[keyof typeof PeriodoScalarFieldEnum]


  export const ProfDisciplinasScalarFieldEnum: {
    idProfDisciplina: 'idProfDisciplina',
    professorId: 'professorId',
    disciplinaId: 'disciplinaId'
  };

  export type ProfDisciplinasScalarFieldEnum = (typeof ProfDisciplinasScalarFieldEnum)[keyof typeof ProfDisciplinasScalarFieldEnum]


  export const ProfTurmaScalarFieldEnum: {
    idProfTurma: 'idProfTurma',
    professorId: 'professorId',
    turmaId: 'turmaId'
  };

  export type ProfTurmaScalarFieldEnum = (typeof ProfTurmaScalarFieldEnum)[keyof typeof ProfTurmaScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    idSala: 'idSala',
    nome: 'nome'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const TempoLectivoScalarFieldEnum: {
    idTempoLectivo: 'idTempoLectivo',
    diaSemana: 'diaSemana',
    periodoId: 'periodoId',
    ordem: 'ordem',
    professorId: 'professorId',
    disciplinaId: 'disciplinaId',
    salaId: 'salaId',
    turmaId: 'turmaId'
  };

  export type TempoLectivoScalarFieldEnum = (typeof TempoLectivoScalarFieldEnum)[keyof typeof TempoLectivoScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    idTurma: 'idTurma',
    nome: 'nome',
    classe: 'classe',
    curso: 'curso'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClasseWhereInput = {
    AND?: ClasseWhereInput | ClasseWhereInput[]
    OR?: ClasseWhereInput[]
    NOT?: ClasseWhereInput | ClasseWhereInput[]
    nome?: StringFilter<"Classe"> | string
    Turma?: TurmaListRelationFilter
  }

  export type ClasseOrderByWithRelationInput = {
    nome?: SortOrder
    Turma?: TurmaOrderByRelationAggregateInput
  }

  export type ClasseWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: ClasseWhereInput | ClasseWhereInput[]
    OR?: ClasseWhereInput[]
    NOT?: ClasseWhereInput | ClasseWhereInput[]
    Turma?: TurmaListRelationFilter
  }, "nome">

  export type ClasseOrderByWithAggregationInput = {
    nome?: SortOrder
    _count?: ClasseCountOrderByAggregateInput
    _max?: ClasseMaxOrderByAggregateInput
    _min?: ClasseMinOrderByAggregateInput
  }

  export type ClasseScalarWhereWithAggregatesInput = {
    AND?: ClasseScalarWhereWithAggregatesInput | ClasseScalarWhereWithAggregatesInput[]
    OR?: ClasseScalarWhereWithAggregatesInput[]
    NOT?: ClasseScalarWhereWithAggregatesInput | ClasseScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"Classe"> | string
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    nome?: StringFilter<"Curso"> | string
    Turma?: TurmaListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    nome?: SortOrder
    Turma?: TurmaOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    Turma?: TurmaListRelationFilter
  }, "nome">

  export type CursoOrderByWithAggregationInput = {
    nome?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"Curso"> | string
  }

  export type DiaSemanaWhereInput = {
    AND?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    OR?: DiaSemanaWhereInput[]
    NOT?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    nome?: StringFilter<"DiaSemana"> | string
    Disponibilidade?: DisponibilidadeListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
  }

  export type DiaSemanaOrderByWithRelationInput = {
    nome?: SortOrder
    Disponibilidade?: DisponibilidadeOrderByRelationAggregateInput
    TempoLectivo?: TempoLectivoOrderByRelationAggregateInput
  }

  export type DiaSemanaWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    OR?: DiaSemanaWhereInput[]
    NOT?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    Disponibilidade?: DisponibilidadeListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
  }, "nome" | "nome">

  export type DiaSemanaOrderByWithAggregationInput = {
    nome?: SortOrder
    _count?: DiaSemanaCountOrderByAggregateInput
    _max?: DiaSemanaMaxOrderByAggregateInput
    _min?: DiaSemanaMinOrderByAggregateInput
  }

  export type DiaSemanaScalarWhereWithAggregatesInput = {
    AND?: DiaSemanaScalarWhereWithAggregatesInput | DiaSemanaScalarWhereWithAggregatesInput[]
    OR?: DiaSemanaScalarWhereWithAggregatesInput[]
    NOT?: DiaSemanaScalarWhereWithAggregatesInput | DiaSemanaScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"DiaSemana"> | string
  }

  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    idDisciplina?: IntFilter<"Disciplina"> | number
    nome?: StringFilter<"Disciplina"> | string
    ProfDisciplinas?: ProfDisciplinasListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
  }

  export type DisciplinaOrderByWithRelationInput = {
    idDisciplina?: SortOrder
    nome?: SortOrder
    ProfDisciplinas?: ProfDisciplinasOrderByRelationAggregateInput
    TempoLectivo?: TempoLectivoOrderByRelationAggregateInput
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    idDisciplina?: number
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    nome?: StringFilter<"Disciplina"> | string
    ProfDisciplinas?: ProfDisciplinasListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
  }, "idDisciplina">

  export type DisciplinaOrderByWithAggregationInput = {
    idDisciplina?: SortOrder
    nome?: SortOrder
    _count?: DisciplinaCountOrderByAggregateInput
    _avg?: DisciplinaAvgOrderByAggregateInput
    _max?: DisciplinaMaxOrderByAggregateInput
    _min?: DisciplinaMinOrderByAggregateInput
    _sum?: DisciplinaSumOrderByAggregateInput
  }

  export type DisciplinaScalarWhereWithAggregatesInput = {
    AND?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    OR?: DisciplinaScalarWhereWithAggregatesInput[]
    NOT?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    idDisciplina?: IntWithAggregatesFilter<"Disciplina"> | number
    nome?: StringWithAggregatesFilter<"Disciplina"> | string
  }

  export type DisponibilidadeWhereInput = {
    AND?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    OR?: DisponibilidadeWhereInput[]
    NOT?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    idDisponibilidade?: IntFilter<"Disponibilidade"> | number
    diaSemana?: StringFilter<"Disponibilidade"> | string
    periodoId?: StringFilter<"Disponibilidade"> | string
    ordem?: IntFilter<"Disponibilidade"> | number
    professorId?: IntFilter<"Disponibilidade"> | number
    DiaSemana?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
    Periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
    Professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }

  export type DisponibilidadeOrderByWithRelationInput = {
    idDisponibilidade?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    DiaSemana?: DiaSemanaOrderByWithRelationInput
    Periodo?: PeriodoOrderByWithRelationInput
    Professor?: ProfessorOrderByWithRelationInput
  }

  export type DisponibilidadeWhereUniqueInput = Prisma.AtLeast<{
    idDisponibilidade?: number
    AND?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    OR?: DisponibilidadeWhereInput[]
    NOT?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    diaSemana?: StringFilter<"Disponibilidade"> | string
    periodoId?: StringFilter<"Disponibilidade"> | string
    ordem?: IntFilter<"Disponibilidade"> | number
    professorId?: IntFilter<"Disponibilidade"> | number
    DiaSemana?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
    Periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
    Professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }, "idDisponibilidade">

  export type DisponibilidadeOrderByWithAggregationInput = {
    idDisponibilidade?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    _count?: DisponibilidadeCountOrderByAggregateInput
    _avg?: DisponibilidadeAvgOrderByAggregateInput
    _max?: DisponibilidadeMaxOrderByAggregateInput
    _min?: DisponibilidadeMinOrderByAggregateInput
    _sum?: DisponibilidadeSumOrderByAggregateInput
  }

  export type DisponibilidadeScalarWhereWithAggregatesInput = {
    AND?: DisponibilidadeScalarWhereWithAggregatesInput | DisponibilidadeScalarWhereWithAggregatesInput[]
    OR?: DisponibilidadeScalarWhereWithAggregatesInput[]
    NOT?: DisponibilidadeScalarWhereWithAggregatesInput | DisponibilidadeScalarWhereWithAggregatesInput[]
    idDisponibilidade?: IntWithAggregatesFilter<"Disponibilidade"> | number
    diaSemana?: StringWithAggregatesFilter<"Disponibilidade"> | string
    periodoId?: StringWithAggregatesFilter<"Disponibilidade"> | string
    ordem?: IntWithAggregatesFilter<"Disponibilidade"> | number
    professorId?: IntWithAggregatesFilter<"Disponibilidade"> | number
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id_professor?: IntFilter<"Professor"> | number
    nome?: StringFilter<"Professor"> | string
    email?: StringNullableFilter<"Professor"> | string | null
    telefone?: StringNullableFilter<"Professor"> | string | null
    created_at?: DateTimeFilter<"Professor"> | Date | string
    updated_at?: DateTimeFilter<"Professor"> | Date | string
    Disponibilidade?: DisponibilidadeListRelationFilter
    ProfDisciplinas?: ProfDisciplinasListRelationFilter
    ProfTurma?: ProfTurmaListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Disponibilidade?: DisponibilidadeOrderByRelationAggregateInput
    ProfDisciplinas?: ProfDisciplinasOrderByRelationAggregateInput
    ProfTurma?: ProfTurmaOrderByRelationAggregateInput
    TempoLectivo?: TempoLectivoOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id_professor?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    nome?: StringFilter<"Professor"> | string
    email?: StringNullableFilter<"Professor"> | string | null
    telefone?: StringNullableFilter<"Professor"> | string | null
    created_at?: DateTimeFilter<"Professor"> | Date | string
    updated_at?: DateTimeFilter<"Professor"> | Date | string
    Disponibilidade?: DisponibilidadeListRelationFilter
    ProfDisciplinas?: ProfDisciplinasListRelationFilter
    ProfTurma?: ProfTurmaListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
  }, "id_professor">

  export type ProfessorOrderByWithAggregationInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id_professor?: IntWithAggregatesFilter<"Professor"> | number
    nome?: StringWithAggregatesFilter<"Professor"> | string
    email?: StringNullableWithAggregatesFilter<"Professor"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Professor"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
  }

  export type PeriodoWhereInput = {
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    periodo?: StringFilter<"Periodo"> | string
    Disponibilidade?: DisponibilidadeListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
  }

  export type PeriodoOrderByWithRelationInput = {
    periodo?: SortOrder
    Disponibilidade?: DisponibilidadeOrderByRelationAggregateInput
    TempoLectivo?: TempoLectivoOrderByRelationAggregateInput
  }

  export type PeriodoWhereUniqueInput = Prisma.AtLeast<{
    periodo?: string
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    Disponibilidade?: DisponibilidadeListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
  }, "periodo">

  export type PeriodoOrderByWithAggregationInput = {
    periodo?: SortOrder
    _count?: PeriodoCountOrderByAggregateInput
    _max?: PeriodoMaxOrderByAggregateInput
    _min?: PeriodoMinOrderByAggregateInput
  }

  export type PeriodoScalarWhereWithAggregatesInput = {
    AND?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    OR?: PeriodoScalarWhereWithAggregatesInput[]
    NOT?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    periodo?: StringWithAggregatesFilter<"Periodo"> | string
  }

  export type ProfDisciplinasWhereInput = {
    AND?: ProfDisciplinasWhereInput | ProfDisciplinasWhereInput[]
    OR?: ProfDisciplinasWhereInput[]
    NOT?: ProfDisciplinasWhereInput | ProfDisciplinasWhereInput[]
    idProfDisciplina?: IntFilter<"ProfDisciplinas"> | number
    professorId?: IntFilter<"ProfDisciplinas"> | number
    disciplinaId?: IntFilter<"ProfDisciplinas"> | number
    Disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    Professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }

  export type ProfDisciplinasOrderByWithRelationInput = {
    idProfDisciplina?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    Disciplina?: DisciplinaOrderByWithRelationInput
    Professor?: ProfessorOrderByWithRelationInput
  }

  export type ProfDisciplinasWhereUniqueInput = Prisma.AtLeast<{
    idProfDisciplina?: number
    professorId_disciplinaId?: ProfDisciplinasProfessorIdDisciplinaIdCompoundUniqueInput
    AND?: ProfDisciplinasWhereInput | ProfDisciplinasWhereInput[]
    OR?: ProfDisciplinasWhereInput[]
    NOT?: ProfDisciplinasWhereInput | ProfDisciplinasWhereInput[]
    professorId?: IntFilter<"ProfDisciplinas"> | number
    disciplinaId?: IntFilter<"ProfDisciplinas"> | number
    Disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    Professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }, "idProfDisciplina" | "professorId_disciplinaId">

  export type ProfDisciplinasOrderByWithAggregationInput = {
    idProfDisciplina?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    _count?: ProfDisciplinasCountOrderByAggregateInput
    _avg?: ProfDisciplinasAvgOrderByAggregateInput
    _max?: ProfDisciplinasMaxOrderByAggregateInput
    _min?: ProfDisciplinasMinOrderByAggregateInput
    _sum?: ProfDisciplinasSumOrderByAggregateInput
  }

  export type ProfDisciplinasScalarWhereWithAggregatesInput = {
    AND?: ProfDisciplinasScalarWhereWithAggregatesInput | ProfDisciplinasScalarWhereWithAggregatesInput[]
    OR?: ProfDisciplinasScalarWhereWithAggregatesInput[]
    NOT?: ProfDisciplinasScalarWhereWithAggregatesInput | ProfDisciplinasScalarWhereWithAggregatesInput[]
    idProfDisciplina?: IntWithAggregatesFilter<"ProfDisciplinas"> | number
    professorId?: IntWithAggregatesFilter<"ProfDisciplinas"> | number
    disciplinaId?: IntWithAggregatesFilter<"ProfDisciplinas"> | number
  }

  export type ProfTurmaWhereInput = {
    AND?: ProfTurmaWhereInput | ProfTurmaWhereInput[]
    OR?: ProfTurmaWhereInput[]
    NOT?: ProfTurmaWhereInput | ProfTurmaWhereInput[]
    idProfTurma?: IntFilter<"ProfTurma"> | number
    professorId?: IntFilter<"ProfTurma"> | number
    turmaId?: IntFilter<"ProfTurma"> | number
    Professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    Turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }

  export type ProfTurmaOrderByWithRelationInput = {
    idProfTurma?: SortOrder
    professorId?: SortOrder
    turmaId?: SortOrder
    Professor?: ProfessorOrderByWithRelationInput
    Turma?: TurmaOrderByWithRelationInput
  }

  export type ProfTurmaWhereUniqueInput = Prisma.AtLeast<{
    idProfTurma?: number
    professorId_turmaId?: ProfTurmaProfessorIdTurmaIdCompoundUniqueInput
    AND?: ProfTurmaWhereInput | ProfTurmaWhereInput[]
    OR?: ProfTurmaWhereInput[]
    NOT?: ProfTurmaWhereInput | ProfTurmaWhereInput[]
    professorId?: IntFilter<"ProfTurma"> | number
    turmaId?: IntFilter<"ProfTurma"> | number
    Professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    Turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }, "idProfTurma" | "professorId_turmaId">

  export type ProfTurmaOrderByWithAggregationInput = {
    idProfTurma?: SortOrder
    professorId?: SortOrder
    turmaId?: SortOrder
    _count?: ProfTurmaCountOrderByAggregateInput
    _avg?: ProfTurmaAvgOrderByAggregateInput
    _max?: ProfTurmaMaxOrderByAggregateInput
    _min?: ProfTurmaMinOrderByAggregateInput
    _sum?: ProfTurmaSumOrderByAggregateInput
  }

  export type ProfTurmaScalarWhereWithAggregatesInput = {
    AND?: ProfTurmaScalarWhereWithAggregatesInput | ProfTurmaScalarWhereWithAggregatesInput[]
    OR?: ProfTurmaScalarWhereWithAggregatesInput[]
    NOT?: ProfTurmaScalarWhereWithAggregatesInput | ProfTurmaScalarWhereWithAggregatesInput[]
    idProfTurma?: IntWithAggregatesFilter<"ProfTurma"> | number
    professorId?: IntWithAggregatesFilter<"ProfTurma"> | number
    turmaId?: IntWithAggregatesFilter<"ProfTurma"> | number
  }

  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    idSala?: IntFilter<"Sala"> | number
    nome?: StringFilter<"Sala"> | string
    TempoLectivo?: TempoLectivoListRelationFilter
  }

  export type SalaOrderByWithRelationInput = {
    idSala?: SortOrder
    nome?: SortOrder
    TempoLectivo?: TempoLectivoOrderByRelationAggregateInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    idSala?: number
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    nome?: StringFilter<"Sala"> | string
    TempoLectivo?: TempoLectivoListRelationFilter
  }, "idSala">

  export type SalaOrderByWithAggregationInput = {
    idSala?: SortOrder
    nome?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _avg?: SalaAvgOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
    _sum?: SalaSumOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    idSala?: IntWithAggregatesFilter<"Sala"> | number
    nome?: StringWithAggregatesFilter<"Sala"> | string
  }

  export type TempoLectivoWhereInput = {
    AND?: TempoLectivoWhereInput | TempoLectivoWhereInput[]
    OR?: TempoLectivoWhereInput[]
    NOT?: TempoLectivoWhereInput | TempoLectivoWhereInput[]
    idTempoLectivo?: IntFilter<"TempoLectivo"> | number
    diaSemana?: StringFilter<"TempoLectivo"> | string
    periodoId?: StringFilter<"TempoLectivo"> | string
    ordem?: IntFilter<"TempoLectivo"> | number
    professorId?: IntFilter<"TempoLectivo"> | number
    disciplinaId?: IntFilter<"TempoLectivo"> | number
    salaId?: IntFilter<"TempoLectivo"> | number
    turmaId?: IntFilter<"TempoLectivo"> | number
    DiaSemana?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
    Disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    Periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
    Professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    Sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    Turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }

  export type TempoLectivoOrderByWithRelationInput = {
    idTempoLectivo?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    salaId?: SortOrder
    turmaId?: SortOrder
    DiaSemana?: DiaSemanaOrderByWithRelationInput
    Disciplina?: DisciplinaOrderByWithRelationInput
    Periodo?: PeriodoOrderByWithRelationInput
    Professor?: ProfessorOrderByWithRelationInput
    Sala?: SalaOrderByWithRelationInput
    Turma?: TurmaOrderByWithRelationInput
  }

  export type TempoLectivoWhereUniqueInput = Prisma.AtLeast<{
    idTempoLectivo?: number
    AND?: TempoLectivoWhereInput | TempoLectivoWhereInput[]
    OR?: TempoLectivoWhereInput[]
    NOT?: TempoLectivoWhereInput | TempoLectivoWhereInput[]
    diaSemana?: StringFilter<"TempoLectivo"> | string
    periodoId?: StringFilter<"TempoLectivo"> | string
    ordem?: IntFilter<"TempoLectivo"> | number
    professorId?: IntFilter<"TempoLectivo"> | number
    disciplinaId?: IntFilter<"TempoLectivo"> | number
    salaId?: IntFilter<"TempoLectivo"> | number
    turmaId?: IntFilter<"TempoLectivo"> | number
    DiaSemana?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
    Disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    Periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
    Professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    Sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    Turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }, "idTempoLectivo">

  export type TempoLectivoOrderByWithAggregationInput = {
    idTempoLectivo?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    salaId?: SortOrder
    turmaId?: SortOrder
    _count?: TempoLectivoCountOrderByAggregateInput
    _avg?: TempoLectivoAvgOrderByAggregateInput
    _max?: TempoLectivoMaxOrderByAggregateInput
    _min?: TempoLectivoMinOrderByAggregateInput
    _sum?: TempoLectivoSumOrderByAggregateInput
  }

  export type TempoLectivoScalarWhereWithAggregatesInput = {
    AND?: TempoLectivoScalarWhereWithAggregatesInput | TempoLectivoScalarWhereWithAggregatesInput[]
    OR?: TempoLectivoScalarWhereWithAggregatesInput[]
    NOT?: TempoLectivoScalarWhereWithAggregatesInput | TempoLectivoScalarWhereWithAggregatesInput[]
    idTempoLectivo?: IntWithAggregatesFilter<"TempoLectivo"> | number
    diaSemana?: StringWithAggregatesFilter<"TempoLectivo"> | string
    periodoId?: StringWithAggregatesFilter<"TempoLectivo"> | string
    ordem?: IntWithAggregatesFilter<"TempoLectivo"> | number
    professorId?: IntWithAggregatesFilter<"TempoLectivo"> | number
    disciplinaId?: IntWithAggregatesFilter<"TempoLectivo"> | number
    salaId?: IntWithAggregatesFilter<"TempoLectivo"> | number
    turmaId?: IntWithAggregatesFilter<"TempoLectivo"> | number
  }

  export type TurmaWhereInput = {
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    idTurma?: IntFilter<"Turma"> | number
    nome?: StringFilter<"Turma"> | string
    classe?: StringFilter<"Turma"> | string
    curso?: StringFilter<"Turma"> | string
    ProfTurma?: ProfTurmaListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
    Classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    Curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }

  export type TurmaOrderByWithRelationInput = {
    idTurma?: SortOrder
    nome?: SortOrder
    classe?: SortOrder
    curso?: SortOrder
    ProfTurma?: ProfTurmaOrderByRelationAggregateInput
    TempoLectivo?: TempoLectivoOrderByRelationAggregateInput
    Classe?: ClasseOrderByWithRelationInput
    Curso?: CursoOrderByWithRelationInput
  }

  export type TurmaWhereUniqueInput = Prisma.AtLeast<{
    idTurma?: number
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    nome?: StringFilter<"Turma"> | string
    classe?: StringFilter<"Turma"> | string
    curso?: StringFilter<"Turma"> | string
    ProfTurma?: ProfTurmaListRelationFilter
    TempoLectivo?: TempoLectivoListRelationFilter
    Classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    Curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }, "idTurma">

  export type TurmaOrderByWithAggregationInput = {
    idTurma?: SortOrder
    nome?: SortOrder
    classe?: SortOrder
    curso?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _avg?: TurmaAvgOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
    _sum?: TurmaSumOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    OR?: TurmaScalarWhereWithAggregatesInput[]
    NOT?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    idTurma?: IntWithAggregatesFilter<"Turma"> | number
    nome?: StringWithAggregatesFilter<"Turma"> | string
    classe?: StringWithAggregatesFilter<"Turma"> | string
    curso?: StringWithAggregatesFilter<"Turma"> | string
  }

  export type ClasseCreateInput = {
    nome: string
    Turma?: TurmaCreateNestedManyWithoutClasseInput
  }

  export type ClasseUncheckedCreateInput = {
    nome: string
    Turma?: TurmaUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClasseUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUpdateManyWithoutClasseNestedInput
  }

  export type ClasseUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type ClasseCreateManyInput = {
    nome: string
  }

  export type ClasseUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ClasseUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateInput = {
    nome: string
    Turma?: TurmaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    nome: string
    Turma?: TurmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Turma?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    nome: string
  }

  export type CursoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DiaSemanaCreateInput = {
    nome: string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutDiaSemanaInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaUncheckedCreateInput = {
    nome: string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutDiaSemanaInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutDiaSemanaNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DiaSemanaUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DiaSemanaCreateManyInput = {
    nome: string
  }

  export type DiaSemanaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DiaSemanaUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaCreateInput = {
    nome: string
    ProfDisciplinas?: ProfDisciplinasCreateNestedManyWithoutDisciplinaInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateInput = {
    idDisciplina?: number
    nome: string
    ProfDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutDisciplinaInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ProfDisciplinas?: ProfDisciplinasUpdateManyWithoutDisciplinaNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateInput = {
    idDisciplina?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ProfDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaCreateManyInput = {
    idDisciplina?: number
    nome: string
  }

  export type DisciplinaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaUncheckedUpdateManyInput = {
    idDisciplina?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutDisponibilidadeInput
    Periodo: PeriodoCreateNestedOneWithoutDisponibilidadeInput
    Professor: ProfessorCreateNestedOneWithoutDisponibilidadeInput
  }

  export type DisponibilidadeUncheckedCreateInput = {
    idDisponibilidade?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
  }

  export type DisponibilidadeUpdateInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutDisponibilidadeNestedInput
    Periodo?: PeriodoUpdateOneRequiredWithoutDisponibilidadeNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutDisponibilidadeNestedInput
  }

  export type DisponibilidadeUncheckedUpdateInput = {
    idDisponibilidade?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeCreateManyInput = {
    idDisponibilidade?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
  }

  export type DisponibilidadeUpdateManyMutationInput = {
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeUncheckedUpdateManyInput = {
    idDisponibilidade?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessorCreateInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutProfessorInput
    ProfDisciplinas?: ProfDisciplinasCreateNestedManyWithoutProfessorInput
    ProfTurma?: ProfTurmaCreateNestedManyWithoutProfessorInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id_professor?: number
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput
    ProfDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput
    ProfTurma?: ProfTurmaUncheckedCreateNestedManyWithoutProfessorInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutProfessorNestedInput
    ProfDisciplinas?: ProfDisciplinasUpdateManyWithoutProfessorNestedInput
    ProfTurma?: ProfTurmaUpdateManyWithoutProfessorNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput
    ProfDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput
    ProfTurma?: ProfTurmaUncheckedUpdateManyWithoutProfessorNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id_professor?: number
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
  }

  export type ProfessorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodoCreateInput = {
    periodo: string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutPeriodoInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateInput = {
    periodo: string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutPeriodoInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUpdateInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutPeriodoNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutPeriodoNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoCreateManyInput = {
    periodo: string
  }

  export type PeriodoUpdateManyMutationInput = {
    periodo?: StringFieldUpdateOperationsInput | string
  }

  export type PeriodoUncheckedUpdateManyInput = {
    periodo?: StringFieldUpdateOperationsInput | string
  }

  export type ProfDisciplinasCreateInput = {
    Disciplina: DisciplinaCreateNestedOneWithoutProfDisciplinasInput
    Professor: ProfessorCreateNestedOneWithoutProfDisciplinasInput
  }

  export type ProfDisciplinasUncheckedCreateInput = {
    idProfDisciplina?: number
    professorId: number
    disciplinaId: number
  }

  export type ProfDisciplinasUpdateInput = {
    Disciplina?: DisciplinaUpdateOneRequiredWithoutProfDisciplinasNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutProfDisciplinasNestedInput
  }

  export type ProfDisciplinasUncheckedUpdateInput = {
    idProfDisciplina?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfDisciplinasCreateManyInput = {
    idProfDisciplina?: number
    professorId: number
    disciplinaId: number
  }

  export type ProfDisciplinasUpdateManyMutationInput = {

  }

  export type ProfDisciplinasUncheckedUpdateManyInput = {
    idProfDisciplina?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfTurmaCreateInput = {
    Professor: ProfessorCreateNestedOneWithoutProfTurmaInput
    Turma: TurmaCreateNestedOneWithoutProfTurmaInput
  }

  export type ProfTurmaUncheckedCreateInput = {
    idProfTurma?: number
    professorId: number
    turmaId: number
  }

  export type ProfTurmaUpdateInput = {
    Professor?: ProfessorUpdateOneRequiredWithoutProfTurmaNestedInput
    Turma?: TurmaUpdateOneRequiredWithoutProfTurmaNestedInput
  }

  export type ProfTurmaUncheckedUpdateInput = {
    idProfTurma?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfTurmaCreateManyInput = {
    idProfTurma?: number
    professorId: number
    turmaId: number
  }

  export type ProfTurmaUpdateManyMutationInput = {

  }

  export type ProfTurmaUncheckedUpdateManyInput = {
    idProfTurma?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type SalaCreateInput = {
    nome: string
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateInput = {
    idSala?: number
    nome: string
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    idSala?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    idSala?: number
    nome: string
  }

  export type SalaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type SalaUncheckedUpdateManyInput = {
    idSala?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TempoLectivoCreateInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutTempoLectivoInput
    Disciplina: DisciplinaCreateNestedOneWithoutTempoLectivoInput
    Periodo: PeriodoCreateNestedOneWithoutTempoLectivoInput
    Professor: ProfessorCreateNestedOneWithoutTempoLectivoInput
    Sala: SalaCreateNestedOneWithoutTempoLectivoInput
    Turma: TurmaCreateNestedOneWithoutTempoLectivoInput
  }

  export type TempoLectivoUncheckedCreateInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
    turmaId: number
  }

  export type TempoLectivoUpdateInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Disciplina?: DisciplinaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Periodo?: PeriodoUpdateOneRequiredWithoutTempoLectivoNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutTempoLectivoNestedInput
    Sala?: SalaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Turma?: TurmaUpdateOneRequiredWithoutTempoLectivoNestedInput
  }

  export type TempoLectivoUncheckedUpdateInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoCreateManyInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
    turmaId: number
  }

  export type TempoLectivoUpdateManyMutationInput = {
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUncheckedUpdateManyInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TurmaCreateInput = {
    nome: string
    ProfTurma?: ProfTurmaCreateNestedManyWithoutTurmaInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutTurmaInput
    Classe: ClasseCreateNestedOneWithoutTurmaInput
    Curso: CursoCreateNestedOneWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    idTurma?: number
    nome: string
    classe: string
    curso: string
    ProfTurma?: ProfTurmaUncheckedCreateNestedManyWithoutTurmaInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ProfTurma?: ProfTurmaUpdateManyWithoutTurmaNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutTurmaNestedInput
    Classe?: ClasseUpdateOneRequiredWithoutTurmaNestedInput
    Curso?: CursoUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    idTurma?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    ProfTurma?: ProfTurmaUncheckedUpdateManyWithoutTurmaNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    idTurma?: number
    nome: string
    classe: string
    curso: string
  }

  export type TurmaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    idTurma?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TurmaListRelationFilter = {
    every?: TurmaWhereInput
    some?: TurmaWhereInput
    none?: TurmaWhereInput
  }

  export type TurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClasseCountOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type ClasseMaxOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type ClasseMinOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CursoCountOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type DisponibilidadeListRelationFilter = {
    every?: DisponibilidadeWhereInput
    some?: DisponibilidadeWhereInput
    none?: DisponibilidadeWhereInput
  }

  export type TempoLectivoListRelationFilter = {
    every?: TempoLectivoWhereInput
    some?: TempoLectivoWhereInput
    none?: TempoLectivoWhereInput
  }

  export type DisponibilidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TempoLectivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiaSemanaCountOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type DiaSemanaMaxOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type DiaSemanaMinOrderByAggregateInput = {
    nome?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfDisciplinasListRelationFilter = {
    every?: ProfDisciplinasWhereInput
    some?: ProfDisciplinasWhereInput
    none?: ProfDisciplinasWhereInput
  }

  export type ProfDisciplinasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplinaCountOrderByAggregateInput = {
    idDisciplina?: SortOrder
    nome?: SortOrder
  }

  export type DisciplinaAvgOrderByAggregateInput = {
    idDisciplina?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    idDisciplina?: SortOrder
    nome?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    idDisciplina?: SortOrder
    nome?: SortOrder
  }

  export type DisciplinaSumOrderByAggregateInput = {
    idDisciplina?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DiaSemanaScalarRelationFilter = {
    is?: DiaSemanaWhereInput
    isNot?: DiaSemanaWhereInput
  }

  export type PeriodoScalarRelationFilter = {
    is?: PeriodoWhereInput
    isNot?: PeriodoWhereInput
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type DisponibilidadeCountOrderByAggregateInput = {
    idDisponibilidade?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
  }

  export type DisponibilidadeAvgOrderByAggregateInput = {
    idDisponibilidade?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
  }

  export type DisponibilidadeMaxOrderByAggregateInput = {
    idDisponibilidade?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
  }

  export type DisponibilidadeMinOrderByAggregateInput = {
    idDisponibilidade?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
  }

  export type DisponibilidadeSumOrderByAggregateInput = {
    idDisponibilidade?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfTurmaListRelationFilter = {
    every?: ProfTurmaWhereInput
    some?: ProfTurmaWhereInput
    none?: ProfTurmaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfTurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    id_professor?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    id_professor?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PeriodoCountOrderByAggregateInput = {
    periodo?: SortOrder
  }

  export type PeriodoMaxOrderByAggregateInput = {
    periodo?: SortOrder
  }

  export type PeriodoMinOrderByAggregateInput = {
    periodo?: SortOrder
  }

  export type DisciplinaScalarRelationFilter = {
    is?: DisciplinaWhereInput
    isNot?: DisciplinaWhereInput
  }

  export type ProfDisciplinasProfessorIdDisciplinaIdCompoundUniqueInput = {
    professorId: number
    disciplinaId: number
  }

  export type ProfDisciplinasCountOrderByAggregateInput = {
    idProfDisciplina?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type ProfDisciplinasAvgOrderByAggregateInput = {
    idProfDisciplina?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type ProfDisciplinasMaxOrderByAggregateInput = {
    idProfDisciplina?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type ProfDisciplinasMinOrderByAggregateInput = {
    idProfDisciplina?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type ProfDisciplinasSumOrderByAggregateInput = {
    idProfDisciplina?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type TurmaScalarRelationFilter = {
    is?: TurmaWhereInput
    isNot?: TurmaWhereInput
  }

  export type ProfTurmaProfessorIdTurmaIdCompoundUniqueInput = {
    professorId: number
    turmaId: number
  }

  export type ProfTurmaCountOrderByAggregateInput = {
    idProfTurma?: SortOrder
    professorId?: SortOrder
    turmaId?: SortOrder
  }

  export type ProfTurmaAvgOrderByAggregateInput = {
    idProfTurma?: SortOrder
    professorId?: SortOrder
    turmaId?: SortOrder
  }

  export type ProfTurmaMaxOrderByAggregateInput = {
    idProfTurma?: SortOrder
    professorId?: SortOrder
    turmaId?: SortOrder
  }

  export type ProfTurmaMinOrderByAggregateInput = {
    idProfTurma?: SortOrder
    professorId?: SortOrder
    turmaId?: SortOrder
  }

  export type ProfTurmaSumOrderByAggregateInput = {
    idProfTurma?: SortOrder
    professorId?: SortOrder
    turmaId?: SortOrder
  }

  export type SalaCountOrderByAggregateInput = {
    idSala?: SortOrder
    nome?: SortOrder
  }

  export type SalaAvgOrderByAggregateInput = {
    idSala?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    idSala?: SortOrder
    nome?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    idSala?: SortOrder
    nome?: SortOrder
  }

  export type SalaSumOrderByAggregateInput = {
    idSala?: SortOrder
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type TempoLectivoCountOrderByAggregateInput = {
    idTempoLectivo?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    salaId?: SortOrder
    turmaId?: SortOrder
  }

  export type TempoLectivoAvgOrderByAggregateInput = {
    idTempoLectivo?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    salaId?: SortOrder
    turmaId?: SortOrder
  }

  export type TempoLectivoMaxOrderByAggregateInput = {
    idTempoLectivo?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    salaId?: SortOrder
    turmaId?: SortOrder
  }

  export type TempoLectivoMinOrderByAggregateInput = {
    idTempoLectivo?: SortOrder
    diaSemana?: SortOrder
    periodoId?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    salaId?: SortOrder
    turmaId?: SortOrder
  }

  export type TempoLectivoSumOrderByAggregateInput = {
    idTempoLectivo?: SortOrder
    ordem?: SortOrder
    professorId?: SortOrder
    disciplinaId?: SortOrder
    salaId?: SortOrder
    turmaId?: SortOrder
  }

  export type ClasseScalarRelationFilter = {
    is?: ClasseWhereInput
    isNot?: ClasseWhereInput
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type TurmaCountOrderByAggregateInput = {
    idTurma?: SortOrder
    nome?: SortOrder
    classe?: SortOrder
    curso?: SortOrder
  }

  export type TurmaAvgOrderByAggregateInput = {
    idTurma?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    idTurma?: SortOrder
    nome?: SortOrder
    classe?: SortOrder
    curso?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    idTurma?: SortOrder
    nome?: SortOrder
    classe?: SortOrder
    curso?: SortOrder
  }

  export type TurmaSumOrderByAggregateInput = {
    idTurma?: SortOrder
  }

  export type TurmaCreateNestedManyWithoutClasseInput = {
    create?: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput> | TurmaCreateWithoutClasseInput[] | TurmaUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutClasseInput | TurmaCreateOrConnectWithoutClasseInput[]
    createMany?: TurmaCreateManyClasseInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutClasseInput = {
    create?: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput> | TurmaCreateWithoutClasseInput[] | TurmaUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutClasseInput | TurmaCreateOrConnectWithoutClasseInput[]
    createMany?: TurmaCreateManyClasseInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TurmaUpdateManyWithoutClasseNestedInput = {
    create?: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput> | TurmaCreateWithoutClasseInput[] | TurmaUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutClasseInput | TurmaCreateOrConnectWithoutClasseInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutClasseInput | TurmaUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: TurmaCreateManyClasseInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutClasseInput | TurmaUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutClasseInput | TurmaUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput> | TurmaCreateWithoutClasseInput[] | TurmaUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutClasseInput | TurmaCreateOrConnectWithoutClasseInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutClasseInput | TurmaUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: TurmaCreateManyClasseInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutClasseInput | TurmaUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutClasseInput | TurmaUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type DisponibilidadeCreateNestedManyWithoutDiaSemanaInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput> | DisponibilidadeCreateWithoutDiaSemanaInput[] | DisponibilidadeUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaSemanaInput | DisponibilidadeCreateOrConnectWithoutDiaSemanaInput[]
    createMany?: DisponibilidadeCreateManyDiaSemanaInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type TempoLectivoCreateNestedManyWithoutDiaSemanaInput = {
    create?: XOR<TempoLectivoCreateWithoutDiaSemanaInput, TempoLectivoUncheckedCreateWithoutDiaSemanaInput> | TempoLectivoCreateWithoutDiaSemanaInput[] | TempoLectivoUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutDiaSemanaInput | TempoLectivoCreateOrConnectWithoutDiaSemanaInput[]
    createMany?: TempoLectivoCreateManyDiaSemanaInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUncheckedCreateNestedManyWithoutDiaSemanaInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput> | DisponibilidadeCreateWithoutDiaSemanaInput[] | DisponibilidadeUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaSemanaInput | DisponibilidadeCreateOrConnectWithoutDiaSemanaInput[]
    createMany?: DisponibilidadeCreateManyDiaSemanaInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type TempoLectivoUncheckedCreateNestedManyWithoutDiaSemanaInput = {
    create?: XOR<TempoLectivoCreateWithoutDiaSemanaInput, TempoLectivoUncheckedCreateWithoutDiaSemanaInput> | TempoLectivoCreateWithoutDiaSemanaInput[] | TempoLectivoUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutDiaSemanaInput | TempoLectivoCreateOrConnectWithoutDiaSemanaInput[]
    createMany?: TempoLectivoCreateManyDiaSemanaInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUpdateManyWithoutDiaSemanaNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput> | DisponibilidadeCreateWithoutDiaSemanaInput[] | DisponibilidadeUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaSemanaInput | DisponibilidadeCreateOrConnectWithoutDiaSemanaInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput | DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput[]
    createMany?: DisponibilidadeCreateManyDiaSemanaInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput | DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput | DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type TempoLectivoUpdateManyWithoutDiaSemanaNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutDiaSemanaInput, TempoLectivoUncheckedCreateWithoutDiaSemanaInput> | TempoLectivoCreateWithoutDiaSemanaInput[] | TempoLectivoUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutDiaSemanaInput | TempoLectivoCreateOrConnectWithoutDiaSemanaInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutDiaSemanaInput | TempoLectivoUpsertWithWhereUniqueWithoutDiaSemanaInput[]
    createMany?: TempoLectivoCreateManyDiaSemanaInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutDiaSemanaInput | TempoLectivoUpdateWithWhereUniqueWithoutDiaSemanaInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutDiaSemanaInput | TempoLectivoUpdateManyWithWhereWithoutDiaSemanaInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput> | DisponibilidadeCreateWithoutDiaSemanaInput[] | DisponibilidadeUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaSemanaInput | DisponibilidadeCreateOrConnectWithoutDiaSemanaInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput | DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput[]
    createMany?: DisponibilidadeCreateManyDiaSemanaInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput | DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput | DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type TempoLectivoUncheckedUpdateManyWithoutDiaSemanaNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutDiaSemanaInput, TempoLectivoUncheckedCreateWithoutDiaSemanaInput> | TempoLectivoCreateWithoutDiaSemanaInput[] | TempoLectivoUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutDiaSemanaInput | TempoLectivoCreateOrConnectWithoutDiaSemanaInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutDiaSemanaInput | TempoLectivoUpsertWithWhereUniqueWithoutDiaSemanaInput[]
    createMany?: TempoLectivoCreateManyDiaSemanaInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutDiaSemanaInput | TempoLectivoUpdateWithWhereUniqueWithoutDiaSemanaInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutDiaSemanaInput | TempoLectivoUpdateManyWithWhereWithoutDiaSemanaInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type ProfDisciplinasCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput> | ProfDisciplinasCreateWithoutDisciplinaInput[] | ProfDisciplinasUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutDisciplinaInput | ProfDisciplinasCreateOrConnectWithoutDisciplinaInput[]
    createMany?: ProfDisciplinasCreateManyDisciplinaInputEnvelope
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
  }

  export type TempoLectivoCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<TempoLectivoCreateWithoutDisciplinaInput, TempoLectivoUncheckedCreateWithoutDisciplinaInput> | TempoLectivoCreateWithoutDisciplinaInput[] | TempoLectivoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutDisciplinaInput | TempoLectivoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: TempoLectivoCreateManyDisciplinaInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type ProfDisciplinasUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput> | ProfDisciplinasCreateWithoutDisciplinaInput[] | ProfDisciplinasUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutDisciplinaInput | ProfDisciplinasCreateOrConnectWithoutDisciplinaInput[]
    createMany?: ProfDisciplinasCreateManyDisciplinaInputEnvelope
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
  }

  export type TempoLectivoUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<TempoLectivoCreateWithoutDisciplinaInput, TempoLectivoUncheckedCreateWithoutDisciplinaInput> | TempoLectivoCreateWithoutDisciplinaInput[] | TempoLectivoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutDisciplinaInput | TempoLectivoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: TempoLectivoCreateManyDisciplinaInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type ProfDisciplinasUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput> | ProfDisciplinasCreateWithoutDisciplinaInput[] | ProfDisciplinasUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutDisciplinaInput | ProfDisciplinasCreateOrConnectWithoutDisciplinaInput[]
    upsert?: ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput | ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: ProfDisciplinasCreateManyDisciplinaInputEnvelope
    set?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    disconnect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    delete?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    update?: ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput | ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput | ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
  }

  export type TempoLectivoUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutDisciplinaInput, TempoLectivoUncheckedCreateWithoutDisciplinaInput> | TempoLectivoCreateWithoutDisciplinaInput[] | TempoLectivoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutDisciplinaInput | TempoLectivoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutDisciplinaInput | TempoLectivoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: TempoLectivoCreateManyDisciplinaInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutDisciplinaInput | TempoLectivoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutDisciplinaInput | TempoLectivoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput> | ProfDisciplinasCreateWithoutDisciplinaInput[] | ProfDisciplinasUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutDisciplinaInput | ProfDisciplinasCreateOrConnectWithoutDisciplinaInput[]
    upsert?: ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput | ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: ProfDisciplinasCreateManyDisciplinaInputEnvelope
    set?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    disconnect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    delete?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    update?: ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput | ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput | ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
  }

  export type TempoLectivoUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutDisciplinaInput, TempoLectivoUncheckedCreateWithoutDisciplinaInput> | TempoLectivoCreateWithoutDisciplinaInput[] | TempoLectivoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutDisciplinaInput | TempoLectivoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutDisciplinaInput | TempoLectivoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: TempoLectivoCreateManyDisciplinaInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutDisciplinaInput | TempoLectivoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutDisciplinaInput | TempoLectivoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type DiaSemanaCreateNestedOneWithoutDisponibilidadeInput = {
    create?: XOR<DiaSemanaCreateWithoutDisponibilidadeInput, DiaSemanaUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutDisponibilidadeInput
    connect?: DiaSemanaWhereUniqueInput
  }

  export type PeriodoCreateNestedOneWithoutDisponibilidadeInput = {
    create?: XOR<PeriodoCreateWithoutDisponibilidadeInput, PeriodoUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutDisponibilidadeInput
    connect?: PeriodoWhereUniqueInput
  }

  export type ProfessorCreateNestedOneWithoutDisponibilidadeInput = {
    create?: XOR<ProfessorCreateWithoutDisponibilidadeInput, ProfessorUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisponibilidadeInput
    connect?: ProfessorWhereUniqueInput
  }

  export type DiaSemanaUpdateOneRequiredWithoutDisponibilidadeNestedInput = {
    create?: XOR<DiaSemanaCreateWithoutDisponibilidadeInput, DiaSemanaUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutDisponibilidadeInput
    upsert?: DiaSemanaUpsertWithoutDisponibilidadeInput
    connect?: DiaSemanaWhereUniqueInput
    update?: XOR<XOR<DiaSemanaUpdateToOneWithWhereWithoutDisponibilidadeInput, DiaSemanaUpdateWithoutDisponibilidadeInput>, DiaSemanaUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type PeriodoUpdateOneRequiredWithoutDisponibilidadeNestedInput = {
    create?: XOR<PeriodoCreateWithoutDisponibilidadeInput, PeriodoUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutDisponibilidadeInput
    upsert?: PeriodoUpsertWithoutDisponibilidadeInput
    connect?: PeriodoWhereUniqueInput
    update?: XOR<XOR<PeriodoUpdateToOneWithWhereWithoutDisponibilidadeInput, PeriodoUpdateWithoutDisponibilidadeInput>, PeriodoUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type ProfessorUpdateOneRequiredWithoutDisponibilidadeNestedInput = {
    create?: XOR<ProfessorCreateWithoutDisponibilidadeInput, ProfessorUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisponibilidadeInput
    upsert?: ProfessorUpsertWithoutDisponibilidadeInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutDisponibilidadeInput, ProfessorUpdateWithoutDisponibilidadeInput>, ProfessorUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type DisponibilidadeCreateNestedManyWithoutProfessorInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput> | DisponibilidadeCreateWithoutProfessorInput[] | DisponibilidadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfessorInput | DisponibilidadeCreateOrConnectWithoutProfessorInput[]
    createMany?: DisponibilidadeCreateManyProfessorInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type ProfDisciplinasCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput> | ProfDisciplinasCreateWithoutProfessorInput[] | ProfDisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutProfessorInput | ProfDisciplinasCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfDisciplinasCreateManyProfessorInputEnvelope
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
  }

  export type ProfTurmaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfTurmaCreateWithoutProfessorInput, ProfTurmaUncheckedCreateWithoutProfessorInput> | ProfTurmaCreateWithoutProfessorInput[] | ProfTurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfTurmaCreateOrConnectWithoutProfessorInput | ProfTurmaCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfTurmaCreateManyProfessorInputEnvelope
    connect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
  }

  export type TempoLectivoCreateNestedManyWithoutProfessorInput = {
    create?: XOR<TempoLectivoCreateWithoutProfessorInput, TempoLectivoUncheckedCreateWithoutProfessorInput> | TempoLectivoCreateWithoutProfessorInput[] | TempoLectivoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutProfessorInput | TempoLectivoCreateOrConnectWithoutProfessorInput[]
    createMany?: TempoLectivoCreateManyProfessorInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput> | DisponibilidadeCreateWithoutProfessorInput[] | DisponibilidadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfessorInput | DisponibilidadeCreateOrConnectWithoutProfessorInput[]
    createMany?: DisponibilidadeCreateManyProfessorInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput> | ProfDisciplinasCreateWithoutProfessorInput[] | ProfDisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutProfessorInput | ProfDisciplinasCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfDisciplinasCreateManyProfessorInputEnvelope
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
  }

  export type ProfTurmaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfTurmaCreateWithoutProfessorInput, ProfTurmaUncheckedCreateWithoutProfessorInput> | ProfTurmaCreateWithoutProfessorInput[] | ProfTurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfTurmaCreateOrConnectWithoutProfessorInput | ProfTurmaCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfTurmaCreateManyProfessorInputEnvelope
    connect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
  }

  export type TempoLectivoUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<TempoLectivoCreateWithoutProfessorInput, TempoLectivoUncheckedCreateWithoutProfessorInput> | TempoLectivoCreateWithoutProfessorInput[] | TempoLectivoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutProfessorInput | TempoLectivoCreateOrConnectWithoutProfessorInput[]
    createMany?: TempoLectivoCreateManyProfessorInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DisponibilidadeUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput> | DisponibilidadeCreateWithoutProfessorInput[] | DisponibilidadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfessorInput | DisponibilidadeCreateOrConnectWithoutProfessorInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput | DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: DisponibilidadeCreateManyProfessorInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput | DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutProfessorInput | DisponibilidadeUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type ProfDisciplinasUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput> | ProfDisciplinasCreateWithoutProfessorInput[] | ProfDisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutProfessorInput | ProfDisciplinasCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput | ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfDisciplinasCreateManyProfessorInputEnvelope
    set?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    disconnect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    delete?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    update?: ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput | ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput | ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
  }

  export type ProfTurmaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfTurmaCreateWithoutProfessorInput, ProfTurmaUncheckedCreateWithoutProfessorInput> | ProfTurmaCreateWithoutProfessorInput[] | ProfTurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfTurmaCreateOrConnectWithoutProfessorInput | ProfTurmaCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfTurmaUpsertWithWhereUniqueWithoutProfessorInput | ProfTurmaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfTurmaCreateManyProfessorInputEnvelope
    set?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    disconnect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    delete?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    connect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    update?: ProfTurmaUpdateWithWhereUniqueWithoutProfessorInput | ProfTurmaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfTurmaUpdateManyWithWhereWithoutProfessorInput | ProfTurmaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfTurmaScalarWhereInput | ProfTurmaScalarWhereInput[]
  }

  export type TempoLectivoUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutProfessorInput, TempoLectivoUncheckedCreateWithoutProfessorInput> | TempoLectivoCreateWithoutProfessorInput[] | TempoLectivoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutProfessorInput | TempoLectivoCreateOrConnectWithoutProfessorInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutProfessorInput | TempoLectivoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: TempoLectivoCreateManyProfessorInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutProfessorInput | TempoLectivoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutProfessorInput | TempoLectivoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput> | DisponibilidadeCreateWithoutProfessorInput[] | DisponibilidadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfessorInput | DisponibilidadeCreateOrConnectWithoutProfessorInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput | DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: DisponibilidadeCreateManyProfessorInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput | DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutProfessorInput | DisponibilidadeUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput> | ProfDisciplinasCreateWithoutProfessorInput[] | ProfDisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutProfessorInput | ProfDisciplinasCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput | ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfDisciplinasCreateManyProfessorInputEnvelope
    set?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    disconnect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    delete?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    update?: ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput | ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput | ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
  }

  export type ProfTurmaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfTurmaCreateWithoutProfessorInput, ProfTurmaUncheckedCreateWithoutProfessorInput> | ProfTurmaCreateWithoutProfessorInput[] | ProfTurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfTurmaCreateOrConnectWithoutProfessorInput | ProfTurmaCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfTurmaUpsertWithWhereUniqueWithoutProfessorInput | ProfTurmaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfTurmaCreateManyProfessorInputEnvelope
    set?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    disconnect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    delete?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    connect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    update?: ProfTurmaUpdateWithWhereUniqueWithoutProfessorInput | ProfTurmaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfTurmaUpdateManyWithWhereWithoutProfessorInput | ProfTurmaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfTurmaScalarWhereInput | ProfTurmaScalarWhereInput[]
  }

  export type TempoLectivoUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutProfessorInput, TempoLectivoUncheckedCreateWithoutProfessorInput> | TempoLectivoCreateWithoutProfessorInput[] | TempoLectivoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutProfessorInput | TempoLectivoCreateOrConnectWithoutProfessorInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutProfessorInput | TempoLectivoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: TempoLectivoCreateManyProfessorInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutProfessorInput | TempoLectivoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutProfessorInput | TempoLectivoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type DisponibilidadeCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput> | DisponibilidadeCreateWithoutPeriodoInput[] | DisponibilidadeUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutPeriodoInput | DisponibilidadeCreateOrConnectWithoutPeriodoInput[]
    createMany?: DisponibilidadeCreateManyPeriodoInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type TempoLectivoCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<TempoLectivoCreateWithoutPeriodoInput, TempoLectivoUncheckedCreateWithoutPeriodoInput> | TempoLectivoCreateWithoutPeriodoInput[] | TempoLectivoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutPeriodoInput | TempoLectivoCreateOrConnectWithoutPeriodoInput[]
    createMany?: TempoLectivoCreateManyPeriodoInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUncheckedCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput> | DisponibilidadeCreateWithoutPeriodoInput[] | DisponibilidadeUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutPeriodoInput | DisponibilidadeCreateOrConnectWithoutPeriodoInput[]
    createMany?: DisponibilidadeCreateManyPeriodoInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type TempoLectivoUncheckedCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<TempoLectivoCreateWithoutPeriodoInput, TempoLectivoUncheckedCreateWithoutPeriodoInput> | TempoLectivoCreateWithoutPeriodoInput[] | TempoLectivoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutPeriodoInput | TempoLectivoCreateOrConnectWithoutPeriodoInput[]
    createMany?: TempoLectivoCreateManyPeriodoInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput> | DisponibilidadeCreateWithoutPeriodoInput[] | DisponibilidadeUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutPeriodoInput | DisponibilidadeCreateOrConnectWithoutPeriodoInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput | DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: DisponibilidadeCreateManyPeriodoInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput | DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput | DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type TempoLectivoUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutPeriodoInput, TempoLectivoUncheckedCreateWithoutPeriodoInput> | TempoLectivoCreateWithoutPeriodoInput[] | TempoLectivoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutPeriodoInput | TempoLectivoCreateOrConnectWithoutPeriodoInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutPeriodoInput | TempoLectivoUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: TempoLectivoCreateManyPeriodoInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutPeriodoInput | TempoLectivoUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutPeriodoInput | TempoLectivoUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput> | DisponibilidadeCreateWithoutPeriodoInput[] | DisponibilidadeUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutPeriodoInput | DisponibilidadeCreateOrConnectWithoutPeriodoInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput | DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: DisponibilidadeCreateManyPeriodoInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput | DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput | DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type TempoLectivoUncheckedUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutPeriodoInput, TempoLectivoUncheckedCreateWithoutPeriodoInput> | TempoLectivoCreateWithoutPeriodoInput[] | TempoLectivoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutPeriodoInput | TempoLectivoCreateOrConnectWithoutPeriodoInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutPeriodoInput | TempoLectivoUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: TempoLectivoCreateManyPeriodoInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutPeriodoInput | TempoLectivoUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutPeriodoInput | TempoLectivoUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type DisciplinaCreateNestedOneWithoutProfDisciplinasInput = {
    create?: XOR<DisciplinaCreateWithoutProfDisciplinasInput, DisciplinaUncheckedCreateWithoutProfDisciplinasInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfDisciplinasInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type ProfessorCreateNestedOneWithoutProfDisciplinasInput = {
    create?: XOR<ProfessorCreateWithoutProfDisciplinasInput, ProfessorUncheckedCreateWithoutProfDisciplinasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfDisciplinasInput
    connect?: ProfessorWhereUniqueInput
  }

  export type DisciplinaUpdateOneRequiredWithoutProfDisciplinasNestedInput = {
    create?: XOR<DisciplinaCreateWithoutProfDisciplinasInput, DisciplinaUncheckedCreateWithoutProfDisciplinasInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfDisciplinasInput
    upsert?: DisciplinaUpsertWithoutProfDisciplinasInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutProfDisciplinasInput, DisciplinaUpdateWithoutProfDisciplinasInput>, DisciplinaUncheckedUpdateWithoutProfDisciplinasInput>
  }

  export type ProfessorUpdateOneRequiredWithoutProfDisciplinasNestedInput = {
    create?: XOR<ProfessorCreateWithoutProfDisciplinasInput, ProfessorUncheckedCreateWithoutProfDisciplinasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfDisciplinasInput
    upsert?: ProfessorUpsertWithoutProfDisciplinasInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutProfDisciplinasInput, ProfessorUpdateWithoutProfDisciplinasInput>, ProfessorUncheckedUpdateWithoutProfDisciplinasInput>
  }

  export type ProfessorCreateNestedOneWithoutProfTurmaInput = {
    create?: XOR<ProfessorCreateWithoutProfTurmaInput, ProfessorUncheckedCreateWithoutProfTurmaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfTurmaInput
    connect?: ProfessorWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutProfTurmaInput = {
    create?: XOR<TurmaCreateWithoutProfTurmaInput, TurmaUncheckedCreateWithoutProfTurmaInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutProfTurmaInput
    connect?: TurmaWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutProfTurmaNestedInput = {
    create?: XOR<ProfessorCreateWithoutProfTurmaInput, ProfessorUncheckedCreateWithoutProfTurmaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfTurmaInput
    upsert?: ProfessorUpsertWithoutProfTurmaInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutProfTurmaInput, ProfessorUpdateWithoutProfTurmaInput>, ProfessorUncheckedUpdateWithoutProfTurmaInput>
  }

  export type TurmaUpdateOneRequiredWithoutProfTurmaNestedInput = {
    create?: XOR<TurmaCreateWithoutProfTurmaInput, TurmaUncheckedCreateWithoutProfTurmaInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutProfTurmaInput
    upsert?: TurmaUpsertWithoutProfTurmaInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutProfTurmaInput, TurmaUpdateWithoutProfTurmaInput>, TurmaUncheckedUpdateWithoutProfTurmaInput>
  }

  export type TempoLectivoCreateNestedManyWithoutSalaInput = {
    create?: XOR<TempoLectivoCreateWithoutSalaInput, TempoLectivoUncheckedCreateWithoutSalaInput> | TempoLectivoCreateWithoutSalaInput[] | TempoLectivoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutSalaInput | TempoLectivoCreateOrConnectWithoutSalaInput[]
    createMany?: TempoLectivoCreateManySalaInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type TempoLectivoUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<TempoLectivoCreateWithoutSalaInput, TempoLectivoUncheckedCreateWithoutSalaInput> | TempoLectivoCreateWithoutSalaInput[] | TempoLectivoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutSalaInput | TempoLectivoCreateOrConnectWithoutSalaInput[]
    createMany?: TempoLectivoCreateManySalaInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type TempoLectivoUpdateManyWithoutSalaNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutSalaInput, TempoLectivoUncheckedCreateWithoutSalaInput> | TempoLectivoCreateWithoutSalaInput[] | TempoLectivoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutSalaInput | TempoLectivoCreateOrConnectWithoutSalaInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutSalaInput | TempoLectivoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: TempoLectivoCreateManySalaInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutSalaInput | TempoLectivoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutSalaInput | TempoLectivoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type TempoLectivoUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutSalaInput, TempoLectivoUncheckedCreateWithoutSalaInput> | TempoLectivoCreateWithoutSalaInput[] | TempoLectivoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutSalaInput | TempoLectivoCreateOrConnectWithoutSalaInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutSalaInput | TempoLectivoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: TempoLectivoCreateManySalaInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutSalaInput | TempoLectivoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutSalaInput | TempoLectivoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type DiaSemanaCreateNestedOneWithoutTempoLectivoInput = {
    create?: XOR<DiaSemanaCreateWithoutTempoLectivoInput, DiaSemanaUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutTempoLectivoInput
    connect?: DiaSemanaWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutTempoLectivoInput = {
    create?: XOR<DisciplinaCreateWithoutTempoLectivoInput, DisciplinaUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutTempoLectivoInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type PeriodoCreateNestedOneWithoutTempoLectivoInput = {
    create?: XOR<PeriodoCreateWithoutTempoLectivoInput, PeriodoUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutTempoLectivoInput
    connect?: PeriodoWhereUniqueInput
  }

  export type ProfessorCreateNestedOneWithoutTempoLectivoInput = {
    create?: XOR<ProfessorCreateWithoutTempoLectivoInput, ProfessorUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutTempoLectivoInput
    connect?: ProfessorWhereUniqueInput
  }

  export type SalaCreateNestedOneWithoutTempoLectivoInput = {
    create?: XOR<SalaCreateWithoutTempoLectivoInput, SalaUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: SalaCreateOrConnectWithoutTempoLectivoInput
    connect?: SalaWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutTempoLectivoInput = {
    create?: XOR<TurmaCreateWithoutTempoLectivoInput, TurmaUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutTempoLectivoInput
    connect?: TurmaWhereUniqueInput
  }

  export type DiaSemanaUpdateOneRequiredWithoutTempoLectivoNestedInput = {
    create?: XOR<DiaSemanaCreateWithoutTempoLectivoInput, DiaSemanaUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutTempoLectivoInput
    upsert?: DiaSemanaUpsertWithoutTempoLectivoInput
    connect?: DiaSemanaWhereUniqueInput
    update?: XOR<XOR<DiaSemanaUpdateToOneWithWhereWithoutTempoLectivoInput, DiaSemanaUpdateWithoutTempoLectivoInput>, DiaSemanaUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type DisciplinaUpdateOneRequiredWithoutTempoLectivoNestedInput = {
    create?: XOR<DisciplinaCreateWithoutTempoLectivoInput, DisciplinaUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutTempoLectivoInput
    upsert?: DisciplinaUpsertWithoutTempoLectivoInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutTempoLectivoInput, DisciplinaUpdateWithoutTempoLectivoInput>, DisciplinaUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type PeriodoUpdateOneRequiredWithoutTempoLectivoNestedInput = {
    create?: XOR<PeriodoCreateWithoutTempoLectivoInput, PeriodoUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutTempoLectivoInput
    upsert?: PeriodoUpsertWithoutTempoLectivoInput
    connect?: PeriodoWhereUniqueInput
    update?: XOR<XOR<PeriodoUpdateToOneWithWhereWithoutTempoLectivoInput, PeriodoUpdateWithoutTempoLectivoInput>, PeriodoUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type ProfessorUpdateOneRequiredWithoutTempoLectivoNestedInput = {
    create?: XOR<ProfessorCreateWithoutTempoLectivoInput, ProfessorUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutTempoLectivoInput
    upsert?: ProfessorUpsertWithoutTempoLectivoInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutTempoLectivoInput, ProfessorUpdateWithoutTempoLectivoInput>, ProfessorUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type SalaUpdateOneRequiredWithoutTempoLectivoNestedInput = {
    create?: XOR<SalaCreateWithoutTempoLectivoInput, SalaUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: SalaCreateOrConnectWithoutTempoLectivoInput
    upsert?: SalaUpsertWithoutTempoLectivoInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutTempoLectivoInput, SalaUpdateWithoutTempoLectivoInput>, SalaUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type TurmaUpdateOneRequiredWithoutTempoLectivoNestedInput = {
    create?: XOR<TurmaCreateWithoutTempoLectivoInput, TurmaUncheckedCreateWithoutTempoLectivoInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutTempoLectivoInput
    upsert?: TurmaUpsertWithoutTempoLectivoInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutTempoLectivoInput, TurmaUpdateWithoutTempoLectivoInput>, TurmaUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type ProfTurmaCreateNestedManyWithoutTurmaInput = {
    create?: XOR<ProfTurmaCreateWithoutTurmaInput, ProfTurmaUncheckedCreateWithoutTurmaInput> | ProfTurmaCreateWithoutTurmaInput[] | ProfTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ProfTurmaCreateOrConnectWithoutTurmaInput | ProfTurmaCreateOrConnectWithoutTurmaInput[]
    createMany?: ProfTurmaCreateManyTurmaInputEnvelope
    connect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
  }

  export type TempoLectivoCreateNestedManyWithoutTurmaInput = {
    create?: XOR<TempoLectivoCreateWithoutTurmaInput, TempoLectivoUncheckedCreateWithoutTurmaInput> | TempoLectivoCreateWithoutTurmaInput[] | TempoLectivoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutTurmaInput | TempoLectivoCreateOrConnectWithoutTurmaInput[]
    createMany?: TempoLectivoCreateManyTurmaInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type ClasseCreateNestedOneWithoutTurmaInput = {
    create?: XOR<ClasseCreateWithoutTurmaInput, ClasseUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutTurmaInput
    connect?: ClasseWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutTurmaInput = {
    create?: XOR<CursoCreateWithoutTurmaInput, CursoUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmaInput
    connect?: CursoWhereUniqueInput
  }

  export type ProfTurmaUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<ProfTurmaCreateWithoutTurmaInput, ProfTurmaUncheckedCreateWithoutTurmaInput> | ProfTurmaCreateWithoutTurmaInput[] | ProfTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ProfTurmaCreateOrConnectWithoutTurmaInput | ProfTurmaCreateOrConnectWithoutTurmaInput[]
    createMany?: ProfTurmaCreateManyTurmaInputEnvelope
    connect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
  }

  export type TempoLectivoUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<TempoLectivoCreateWithoutTurmaInput, TempoLectivoUncheckedCreateWithoutTurmaInput> | TempoLectivoCreateWithoutTurmaInput[] | TempoLectivoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutTurmaInput | TempoLectivoCreateOrConnectWithoutTurmaInput[]
    createMany?: TempoLectivoCreateManyTurmaInputEnvelope
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
  }

  export type ProfTurmaUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<ProfTurmaCreateWithoutTurmaInput, ProfTurmaUncheckedCreateWithoutTurmaInput> | ProfTurmaCreateWithoutTurmaInput[] | ProfTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ProfTurmaCreateOrConnectWithoutTurmaInput | ProfTurmaCreateOrConnectWithoutTurmaInput[]
    upsert?: ProfTurmaUpsertWithWhereUniqueWithoutTurmaInput | ProfTurmaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: ProfTurmaCreateManyTurmaInputEnvelope
    set?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    disconnect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    delete?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    connect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    update?: ProfTurmaUpdateWithWhereUniqueWithoutTurmaInput | ProfTurmaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: ProfTurmaUpdateManyWithWhereWithoutTurmaInput | ProfTurmaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: ProfTurmaScalarWhereInput | ProfTurmaScalarWhereInput[]
  }

  export type TempoLectivoUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutTurmaInput, TempoLectivoUncheckedCreateWithoutTurmaInput> | TempoLectivoCreateWithoutTurmaInput[] | TempoLectivoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutTurmaInput | TempoLectivoCreateOrConnectWithoutTurmaInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutTurmaInput | TempoLectivoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: TempoLectivoCreateManyTurmaInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutTurmaInput | TempoLectivoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutTurmaInput | TempoLectivoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type ClasseUpdateOneRequiredWithoutTurmaNestedInput = {
    create?: XOR<ClasseCreateWithoutTurmaInput, ClasseUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutTurmaInput
    upsert?: ClasseUpsertWithoutTurmaInput
    connect?: ClasseWhereUniqueInput
    update?: XOR<XOR<ClasseUpdateToOneWithWhereWithoutTurmaInput, ClasseUpdateWithoutTurmaInput>, ClasseUncheckedUpdateWithoutTurmaInput>
  }

  export type CursoUpdateOneRequiredWithoutTurmaNestedInput = {
    create?: XOR<CursoCreateWithoutTurmaInput, CursoUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmaInput
    upsert?: CursoUpsertWithoutTurmaInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutTurmaInput, CursoUpdateWithoutTurmaInput>, CursoUncheckedUpdateWithoutTurmaInput>
  }

  export type ProfTurmaUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<ProfTurmaCreateWithoutTurmaInput, ProfTurmaUncheckedCreateWithoutTurmaInput> | ProfTurmaCreateWithoutTurmaInput[] | ProfTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ProfTurmaCreateOrConnectWithoutTurmaInput | ProfTurmaCreateOrConnectWithoutTurmaInput[]
    upsert?: ProfTurmaUpsertWithWhereUniqueWithoutTurmaInput | ProfTurmaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: ProfTurmaCreateManyTurmaInputEnvelope
    set?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    disconnect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    delete?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    connect?: ProfTurmaWhereUniqueInput | ProfTurmaWhereUniqueInput[]
    update?: ProfTurmaUpdateWithWhereUniqueWithoutTurmaInput | ProfTurmaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: ProfTurmaUpdateManyWithWhereWithoutTurmaInput | ProfTurmaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: ProfTurmaScalarWhereInput | ProfTurmaScalarWhereInput[]
  }

  export type TempoLectivoUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<TempoLectivoCreateWithoutTurmaInput, TempoLectivoUncheckedCreateWithoutTurmaInput> | TempoLectivoCreateWithoutTurmaInput[] | TempoLectivoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: TempoLectivoCreateOrConnectWithoutTurmaInput | TempoLectivoCreateOrConnectWithoutTurmaInput[]
    upsert?: TempoLectivoUpsertWithWhereUniqueWithoutTurmaInput | TempoLectivoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: TempoLectivoCreateManyTurmaInputEnvelope
    set?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    disconnect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    delete?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    connect?: TempoLectivoWhereUniqueInput | TempoLectivoWhereUniqueInput[]
    update?: TempoLectivoUpdateWithWhereUniqueWithoutTurmaInput | TempoLectivoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: TempoLectivoUpdateManyWithWhereWithoutTurmaInput | TempoLectivoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TurmaCreateWithoutClasseInput = {
    nome: string
    ProfTurma?: ProfTurmaCreateNestedManyWithoutTurmaInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutTurmaInput
    Curso: CursoCreateNestedOneWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutClasseInput = {
    idTurma?: number
    nome: string
    curso: string
    ProfTurma?: ProfTurmaUncheckedCreateNestedManyWithoutTurmaInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutClasseInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput>
  }

  export type TurmaCreateManyClasseInputEnvelope = {
    data: TurmaCreateManyClasseInput | TurmaCreateManyClasseInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutClasseInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutClasseInput, TurmaUncheckedUpdateWithoutClasseInput>
    create: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutClasseInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutClasseInput, TurmaUncheckedUpdateWithoutClasseInput>
  }

  export type TurmaUpdateManyWithWhereWithoutClasseInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutClasseInput>
  }

  export type TurmaScalarWhereInput = {
    AND?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    OR?: TurmaScalarWhereInput[]
    NOT?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    idTurma?: IntFilter<"Turma"> | number
    nome?: StringFilter<"Turma"> | string
    classe?: StringFilter<"Turma"> | string
    curso?: StringFilter<"Turma"> | string
  }

  export type TurmaCreateWithoutCursoInput = {
    nome: string
    ProfTurma?: ProfTurmaCreateNestedManyWithoutTurmaInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutTurmaInput
    Classe: ClasseCreateNestedOneWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutCursoInput = {
    idTurma?: number
    nome: string
    classe: string
    ProfTurma?: ProfTurmaUncheckedCreateNestedManyWithoutTurmaInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaCreateManyCursoInputEnvelope = {
    data: TurmaCreateManyCursoInput | TurmaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
  }

  export type TurmaUpdateManyWithWhereWithoutCursoInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutCursoInput>
  }

  export type DisponibilidadeCreateWithoutDiaSemanaInput = {
    ordem: number
    Periodo: PeriodoCreateNestedOneWithoutDisponibilidadeInput
    Professor: ProfessorCreateNestedOneWithoutDisponibilidadeInput
  }

  export type DisponibilidadeUncheckedCreateWithoutDiaSemanaInput = {
    idDisponibilidade?: number
    periodoId: string
    ordem: number
    professorId: number
  }

  export type DisponibilidadeCreateOrConnectWithoutDiaSemanaInput = {
    where: DisponibilidadeWhereUniqueInput
    create: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput>
  }

  export type DisponibilidadeCreateManyDiaSemanaInputEnvelope = {
    data: DisponibilidadeCreateManyDiaSemanaInput | DisponibilidadeCreateManyDiaSemanaInput[]
    skipDuplicates?: boolean
  }

  export type TempoLectivoCreateWithoutDiaSemanaInput = {
    ordem: number
    Disciplina: DisciplinaCreateNestedOneWithoutTempoLectivoInput
    Periodo: PeriodoCreateNestedOneWithoutTempoLectivoInput
    Professor: ProfessorCreateNestedOneWithoutTempoLectivoInput
    Sala: SalaCreateNestedOneWithoutTempoLectivoInput
    Turma: TurmaCreateNestedOneWithoutTempoLectivoInput
  }

  export type TempoLectivoUncheckedCreateWithoutDiaSemanaInput = {
    idTempoLectivo?: number
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
    turmaId: number
  }

  export type TempoLectivoCreateOrConnectWithoutDiaSemanaInput = {
    where: TempoLectivoWhereUniqueInput
    create: XOR<TempoLectivoCreateWithoutDiaSemanaInput, TempoLectivoUncheckedCreateWithoutDiaSemanaInput>
  }

  export type TempoLectivoCreateManyDiaSemanaInputEnvelope = {
    data: TempoLectivoCreateManyDiaSemanaInput | TempoLectivoCreateManyDiaSemanaInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput = {
    where: DisponibilidadeWhereUniqueInput
    update: XOR<DisponibilidadeUpdateWithoutDiaSemanaInput, DisponibilidadeUncheckedUpdateWithoutDiaSemanaInput>
    create: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput>
  }

  export type DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput = {
    where: DisponibilidadeWhereUniqueInput
    data: XOR<DisponibilidadeUpdateWithoutDiaSemanaInput, DisponibilidadeUncheckedUpdateWithoutDiaSemanaInput>
  }

  export type DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput = {
    where: DisponibilidadeScalarWhereInput
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaInput>
  }

  export type DisponibilidadeScalarWhereInput = {
    AND?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
    OR?: DisponibilidadeScalarWhereInput[]
    NOT?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
    idDisponibilidade?: IntFilter<"Disponibilidade"> | number
    diaSemana?: StringFilter<"Disponibilidade"> | string
    periodoId?: StringFilter<"Disponibilidade"> | string
    ordem?: IntFilter<"Disponibilidade"> | number
    professorId?: IntFilter<"Disponibilidade"> | number
  }

  export type TempoLectivoUpsertWithWhereUniqueWithoutDiaSemanaInput = {
    where: TempoLectivoWhereUniqueInput
    update: XOR<TempoLectivoUpdateWithoutDiaSemanaInput, TempoLectivoUncheckedUpdateWithoutDiaSemanaInput>
    create: XOR<TempoLectivoCreateWithoutDiaSemanaInput, TempoLectivoUncheckedCreateWithoutDiaSemanaInput>
  }

  export type TempoLectivoUpdateWithWhereUniqueWithoutDiaSemanaInput = {
    where: TempoLectivoWhereUniqueInput
    data: XOR<TempoLectivoUpdateWithoutDiaSemanaInput, TempoLectivoUncheckedUpdateWithoutDiaSemanaInput>
  }

  export type TempoLectivoUpdateManyWithWhereWithoutDiaSemanaInput = {
    where: TempoLectivoScalarWhereInput
    data: XOR<TempoLectivoUpdateManyMutationInput, TempoLectivoUncheckedUpdateManyWithoutDiaSemanaInput>
  }

  export type TempoLectivoScalarWhereInput = {
    AND?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
    OR?: TempoLectivoScalarWhereInput[]
    NOT?: TempoLectivoScalarWhereInput | TempoLectivoScalarWhereInput[]
    idTempoLectivo?: IntFilter<"TempoLectivo"> | number
    diaSemana?: StringFilter<"TempoLectivo"> | string
    periodoId?: StringFilter<"TempoLectivo"> | string
    ordem?: IntFilter<"TempoLectivo"> | number
    professorId?: IntFilter<"TempoLectivo"> | number
    disciplinaId?: IntFilter<"TempoLectivo"> | number
    salaId?: IntFilter<"TempoLectivo"> | number
    turmaId?: IntFilter<"TempoLectivo"> | number
  }

  export type ProfDisciplinasCreateWithoutDisciplinaInput = {
    Professor: ProfessorCreateNestedOneWithoutProfDisciplinasInput
  }

  export type ProfDisciplinasUncheckedCreateWithoutDisciplinaInput = {
    idProfDisciplina?: number
    professorId: number
  }

  export type ProfDisciplinasCreateOrConnectWithoutDisciplinaInput = {
    where: ProfDisciplinasWhereUniqueInput
    create: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput>
  }

  export type ProfDisciplinasCreateManyDisciplinaInputEnvelope = {
    data: ProfDisciplinasCreateManyDisciplinaInput | ProfDisciplinasCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type TempoLectivoCreateWithoutDisciplinaInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutTempoLectivoInput
    Periodo: PeriodoCreateNestedOneWithoutTempoLectivoInput
    Professor: ProfessorCreateNestedOneWithoutTempoLectivoInput
    Sala: SalaCreateNestedOneWithoutTempoLectivoInput
    Turma: TurmaCreateNestedOneWithoutTempoLectivoInput
  }

  export type TempoLectivoUncheckedCreateWithoutDisciplinaInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    salaId: number
    turmaId: number
  }

  export type TempoLectivoCreateOrConnectWithoutDisciplinaInput = {
    where: TempoLectivoWhereUniqueInput
    create: XOR<TempoLectivoCreateWithoutDisciplinaInput, TempoLectivoUncheckedCreateWithoutDisciplinaInput>
  }

  export type TempoLectivoCreateManyDisciplinaInputEnvelope = {
    data: TempoLectivoCreateManyDisciplinaInput | TempoLectivoCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: ProfDisciplinasWhereUniqueInput
    update: XOR<ProfDisciplinasUpdateWithoutDisciplinaInput, ProfDisciplinasUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput>
  }

  export type ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: ProfDisciplinasWhereUniqueInput
    data: XOR<ProfDisciplinasUpdateWithoutDisciplinaInput, ProfDisciplinasUncheckedUpdateWithoutDisciplinaInput>
  }

  export type ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput = {
    where: ProfDisciplinasScalarWhereInput
    data: XOR<ProfDisciplinasUpdateManyMutationInput, ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type ProfDisciplinasScalarWhereInput = {
    AND?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
    OR?: ProfDisciplinasScalarWhereInput[]
    NOT?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
    idProfDisciplina?: IntFilter<"ProfDisciplinas"> | number
    professorId?: IntFilter<"ProfDisciplinas"> | number
    disciplinaId?: IntFilter<"ProfDisciplinas"> | number
  }

  export type TempoLectivoUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: TempoLectivoWhereUniqueInput
    update: XOR<TempoLectivoUpdateWithoutDisciplinaInput, TempoLectivoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<TempoLectivoCreateWithoutDisciplinaInput, TempoLectivoUncheckedCreateWithoutDisciplinaInput>
  }

  export type TempoLectivoUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: TempoLectivoWhereUniqueInput
    data: XOR<TempoLectivoUpdateWithoutDisciplinaInput, TempoLectivoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type TempoLectivoUpdateManyWithWhereWithoutDisciplinaInput = {
    where: TempoLectivoScalarWhereInput
    data: XOR<TempoLectivoUpdateManyMutationInput, TempoLectivoUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type DiaSemanaCreateWithoutDisponibilidadeInput = {
    nome: string
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaUncheckedCreateWithoutDisponibilidadeInput = {
    nome: string
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaCreateOrConnectWithoutDisponibilidadeInput = {
    where: DiaSemanaWhereUniqueInput
    create: XOR<DiaSemanaCreateWithoutDisponibilidadeInput, DiaSemanaUncheckedCreateWithoutDisponibilidadeInput>
  }

  export type PeriodoCreateWithoutDisponibilidadeInput = {
    periodo: string
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateWithoutDisponibilidadeInput = {
    periodo: string
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoCreateOrConnectWithoutDisponibilidadeInput = {
    where: PeriodoWhereUniqueInput
    create: XOR<PeriodoCreateWithoutDisponibilidadeInput, PeriodoUncheckedCreateWithoutDisponibilidadeInput>
  }

  export type ProfessorCreateWithoutDisponibilidadeInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    ProfDisciplinas?: ProfDisciplinasCreateNestedManyWithoutProfessorInput
    ProfTurma?: ProfTurmaCreateNestedManyWithoutProfessorInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutDisponibilidadeInput = {
    id_professor?: number
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    ProfDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput
    ProfTurma?: ProfTurmaUncheckedCreateNestedManyWithoutProfessorInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutDisponibilidadeInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutDisponibilidadeInput, ProfessorUncheckedCreateWithoutDisponibilidadeInput>
  }

  export type DiaSemanaUpsertWithoutDisponibilidadeInput = {
    update: XOR<DiaSemanaUpdateWithoutDisponibilidadeInput, DiaSemanaUncheckedUpdateWithoutDisponibilidadeInput>
    create: XOR<DiaSemanaCreateWithoutDisponibilidadeInput, DiaSemanaUncheckedCreateWithoutDisponibilidadeInput>
    where?: DiaSemanaWhereInput
  }

  export type DiaSemanaUpdateToOneWithWhereWithoutDisponibilidadeInput = {
    where?: DiaSemanaWhereInput
    data: XOR<DiaSemanaUpdateWithoutDisponibilidadeInput, DiaSemanaUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type DiaSemanaUpdateWithoutDisponibilidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DiaSemanaUncheckedUpdateWithoutDisponibilidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutDiaSemanaNestedInput
  }

  export type PeriodoUpsertWithoutDisponibilidadeInput = {
    update: XOR<PeriodoUpdateWithoutDisponibilidadeInput, PeriodoUncheckedUpdateWithoutDisponibilidadeInput>
    create: XOR<PeriodoCreateWithoutDisponibilidadeInput, PeriodoUncheckedCreateWithoutDisponibilidadeInput>
    where?: PeriodoWhereInput
  }

  export type PeriodoUpdateToOneWithWhereWithoutDisponibilidadeInput = {
    where?: PeriodoWhereInput
    data: XOR<PeriodoUpdateWithoutDisponibilidadeInput, PeriodoUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type PeriodoUpdateWithoutDisponibilidadeInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateWithoutDisponibilidadeInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type ProfessorUpsertWithoutDisponibilidadeInput = {
    update: XOR<ProfessorUpdateWithoutDisponibilidadeInput, ProfessorUncheckedUpdateWithoutDisponibilidadeInput>
    create: XOR<ProfessorCreateWithoutDisponibilidadeInput, ProfessorUncheckedCreateWithoutDisponibilidadeInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutDisponibilidadeInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutDisponibilidadeInput, ProfessorUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type ProfessorUpdateWithoutDisponibilidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ProfDisciplinas?: ProfDisciplinasUpdateManyWithoutProfessorNestedInput
    ProfTurma?: ProfTurmaUpdateManyWithoutProfessorNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutDisponibilidadeInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ProfDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput
    ProfTurma?: ProfTurmaUncheckedUpdateManyWithoutProfessorNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type DisponibilidadeCreateWithoutProfessorInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutDisponibilidadeInput
    Periodo: PeriodoCreateNestedOneWithoutDisponibilidadeInput
  }

  export type DisponibilidadeUncheckedCreateWithoutProfessorInput = {
    idDisponibilidade?: number
    diaSemana: string
    periodoId: string
    ordem: number
  }

  export type DisponibilidadeCreateOrConnectWithoutProfessorInput = {
    where: DisponibilidadeWhereUniqueInput
    create: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput>
  }

  export type DisponibilidadeCreateManyProfessorInputEnvelope = {
    data: DisponibilidadeCreateManyProfessorInput | DisponibilidadeCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type ProfDisciplinasCreateWithoutProfessorInput = {
    Disciplina: DisciplinaCreateNestedOneWithoutProfDisciplinasInput
  }

  export type ProfDisciplinasUncheckedCreateWithoutProfessorInput = {
    idProfDisciplina?: number
    disciplinaId: number
  }

  export type ProfDisciplinasCreateOrConnectWithoutProfessorInput = {
    where: ProfDisciplinasWhereUniqueInput
    create: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput>
  }

  export type ProfDisciplinasCreateManyProfessorInputEnvelope = {
    data: ProfDisciplinasCreateManyProfessorInput | ProfDisciplinasCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type ProfTurmaCreateWithoutProfessorInput = {
    Turma: TurmaCreateNestedOneWithoutProfTurmaInput
  }

  export type ProfTurmaUncheckedCreateWithoutProfessorInput = {
    idProfTurma?: number
    turmaId: number
  }

  export type ProfTurmaCreateOrConnectWithoutProfessorInput = {
    where: ProfTurmaWhereUniqueInput
    create: XOR<ProfTurmaCreateWithoutProfessorInput, ProfTurmaUncheckedCreateWithoutProfessorInput>
  }

  export type ProfTurmaCreateManyProfessorInputEnvelope = {
    data: ProfTurmaCreateManyProfessorInput | ProfTurmaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type TempoLectivoCreateWithoutProfessorInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutTempoLectivoInput
    Disciplina: DisciplinaCreateNestedOneWithoutTempoLectivoInput
    Periodo: PeriodoCreateNestedOneWithoutTempoLectivoInput
    Sala: SalaCreateNestedOneWithoutTempoLectivoInput
    Turma: TurmaCreateNestedOneWithoutTempoLectivoInput
  }

  export type TempoLectivoUncheckedCreateWithoutProfessorInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    disciplinaId: number
    salaId: number
    turmaId: number
  }

  export type TempoLectivoCreateOrConnectWithoutProfessorInput = {
    where: TempoLectivoWhereUniqueInput
    create: XOR<TempoLectivoCreateWithoutProfessorInput, TempoLectivoUncheckedCreateWithoutProfessorInput>
  }

  export type TempoLectivoCreateManyProfessorInputEnvelope = {
    data: TempoLectivoCreateManyProfessorInput | TempoLectivoCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput = {
    where: DisponibilidadeWhereUniqueInput
    update: XOR<DisponibilidadeUpdateWithoutProfessorInput, DisponibilidadeUncheckedUpdateWithoutProfessorInput>
    create: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput>
  }

  export type DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput = {
    where: DisponibilidadeWhereUniqueInput
    data: XOR<DisponibilidadeUpdateWithoutProfessorInput, DisponibilidadeUncheckedUpdateWithoutProfessorInput>
  }

  export type DisponibilidadeUpdateManyWithWhereWithoutProfessorInput = {
    where: DisponibilidadeScalarWhereInput
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput = {
    where: ProfDisciplinasWhereUniqueInput
    update: XOR<ProfDisciplinasUpdateWithoutProfessorInput, ProfDisciplinasUncheckedUpdateWithoutProfessorInput>
    create: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput>
  }

  export type ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput = {
    where: ProfDisciplinasWhereUniqueInput
    data: XOR<ProfDisciplinasUpdateWithoutProfessorInput, ProfDisciplinasUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput = {
    where: ProfDisciplinasScalarWhereInput
    data: XOR<ProfDisciplinasUpdateManyMutationInput, ProfDisciplinasUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ProfTurmaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: ProfTurmaWhereUniqueInput
    update: XOR<ProfTurmaUpdateWithoutProfessorInput, ProfTurmaUncheckedUpdateWithoutProfessorInput>
    create: XOR<ProfTurmaCreateWithoutProfessorInput, ProfTurmaUncheckedCreateWithoutProfessorInput>
  }

  export type ProfTurmaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: ProfTurmaWhereUniqueInput
    data: XOR<ProfTurmaUpdateWithoutProfessorInput, ProfTurmaUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfTurmaUpdateManyWithWhereWithoutProfessorInput = {
    where: ProfTurmaScalarWhereInput
    data: XOR<ProfTurmaUpdateManyMutationInput, ProfTurmaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ProfTurmaScalarWhereInput = {
    AND?: ProfTurmaScalarWhereInput | ProfTurmaScalarWhereInput[]
    OR?: ProfTurmaScalarWhereInput[]
    NOT?: ProfTurmaScalarWhereInput | ProfTurmaScalarWhereInput[]
    idProfTurma?: IntFilter<"ProfTurma"> | number
    professorId?: IntFilter<"ProfTurma"> | number
    turmaId?: IntFilter<"ProfTurma"> | number
  }

  export type TempoLectivoUpsertWithWhereUniqueWithoutProfessorInput = {
    where: TempoLectivoWhereUniqueInput
    update: XOR<TempoLectivoUpdateWithoutProfessorInput, TempoLectivoUncheckedUpdateWithoutProfessorInput>
    create: XOR<TempoLectivoCreateWithoutProfessorInput, TempoLectivoUncheckedCreateWithoutProfessorInput>
  }

  export type TempoLectivoUpdateWithWhereUniqueWithoutProfessorInput = {
    where: TempoLectivoWhereUniqueInput
    data: XOR<TempoLectivoUpdateWithoutProfessorInput, TempoLectivoUncheckedUpdateWithoutProfessorInput>
  }

  export type TempoLectivoUpdateManyWithWhereWithoutProfessorInput = {
    where: TempoLectivoScalarWhereInput
    data: XOR<TempoLectivoUpdateManyMutationInput, TempoLectivoUncheckedUpdateManyWithoutProfessorInput>
  }

  export type DisponibilidadeCreateWithoutPeriodoInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutDisponibilidadeInput
    Professor: ProfessorCreateNestedOneWithoutDisponibilidadeInput
  }

  export type DisponibilidadeUncheckedCreateWithoutPeriodoInput = {
    idDisponibilidade?: number
    diaSemana: string
    ordem: number
    professorId: number
  }

  export type DisponibilidadeCreateOrConnectWithoutPeriodoInput = {
    where: DisponibilidadeWhereUniqueInput
    create: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput>
  }

  export type DisponibilidadeCreateManyPeriodoInputEnvelope = {
    data: DisponibilidadeCreateManyPeriodoInput | DisponibilidadeCreateManyPeriodoInput[]
    skipDuplicates?: boolean
  }

  export type TempoLectivoCreateWithoutPeriodoInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutTempoLectivoInput
    Disciplina: DisciplinaCreateNestedOneWithoutTempoLectivoInput
    Professor: ProfessorCreateNestedOneWithoutTempoLectivoInput
    Sala: SalaCreateNestedOneWithoutTempoLectivoInput
    Turma: TurmaCreateNestedOneWithoutTempoLectivoInput
  }

  export type TempoLectivoUncheckedCreateWithoutPeriodoInput = {
    idTempoLectivo?: number
    diaSemana: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
    turmaId: number
  }

  export type TempoLectivoCreateOrConnectWithoutPeriodoInput = {
    where: TempoLectivoWhereUniqueInput
    create: XOR<TempoLectivoCreateWithoutPeriodoInput, TempoLectivoUncheckedCreateWithoutPeriodoInput>
  }

  export type TempoLectivoCreateManyPeriodoInputEnvelope = {
    data: TempoLectivoCreateManyPeriodoInput | TempoLectivoCreateManyPeriodoInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput = {
    where: DisponibilidadeWhereUniqueInput
    update: XOR<DisponibilidadeUpdateWithoutPeriodoInput, DisponibilidadeUncheckedUpdateWithoutPeriodoInput>
    create: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput>
  }

  export type DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput = {
    where: DisponibilidadeWhereUniqueInput
    data: XOR<DisponibilidadeUpdateWithoutPeriodoInput, DisponibilidadeUncheckedUpdateWithoutPeriodoInput>
  }

  export type DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput = {
    where: DisponibilidadeScalarWhereInput
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyWithoutPeriodoInput>
  }

  export type TempoLectivoUpsertWithWhereUniqueWithoutPeriodoInput = {
    where: TempoLectivoWhereUniqueInput
    update: XOR<TempoLectivoUpdateWithoutPeriodoInput, TempoLectivoUncheckedUpdateWithoutPeriodoInput>
    create: XOR<TempoLectivoCreateWithoutPeriodoInput, TempoLectivoUncheckedCreateWithoutPeriodoInput>
  }

  export type TempoLectivoUpdateWithWhereUniqueWithoutPeriodoInput = {
    where: TempoLectivoWhereUniqueInput
    data: XOR<TempoLectivoUpdateWithoutPeriodoInput, TempoLectivoUncheckedUpdateWithoutPeriodoInput>
  }

  export type TempoLectivoUpdateManyWithWhereWithoutPeriodoInput = {
    where: TempoLectivoScalarWhereInput
    data: XOR<TempoLectivoUpdateManyMutationInput, TempoLectivoUncheckedUpdateManyWithoutPeriodoInput>
  }

  export type DisciplinaCreateWithoutProfDisciplinasInput = {
    nome: string
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutProfDisciplinasInput = {
    idDisciplina?: number
    nome: string
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutProfDisciplinasInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutProfDisciplinasInput, DisciplinaUncheckedCreateWithoutProfDisciplinasInput>
  }

  export type ProfessorCreateWithoutProfDisciplinasInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutProfessorInput
    ProfTurma?: ProfTurmaCreateNestedManyWithoutProfessorInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutProfDisciplinasInput = {
    id_professor?: number
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput
    ProfTurma?: ProfTurmaUncheckedCreateNestedManyWithoutProfessorInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutProfDisciplinasInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutProfDisciplinasInput, ProfessorUncheckedCreateWithoutProfDisciplinasInput>
  }

  export type DisciplinaUpsertWithoutProfDisciplinasInput = {
    update: XOR<DisciplinaUpdateWithoutProfDisciplinasInput, DisciplinaUncheckedUpdateWithoutProfDisciplinasInput>
    create: XOR<DisciplinaCreateWithoutProfDisciplinasInput, DisciplinaUncheckedCreateWithoutProfDisciplinasInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutProfDisciplinasInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutProfDisciplinasInput, DisciplinaUncheckedUpdateWithoutProfDisciplinasInput>
  }

  export type DisciplinaUpdateWithoutProfDisciplinasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutProfDisciplinasInput = {
    idDisciplina?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type ProfessorUpsertWithoutProfDisciplinasInput = {
    update: XOR<ProfessorUpdateWithoutProfDisciplinasInput, ProfessorUncheckedUpdateWithoutProfDisciplinasInput>
    create: XOR<ProfessorCreateWithoutProfDisciplinasInput, ProfessorUncheckedCreateWithoutProfDisciplinasInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutProfDisciplinasInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutProfDisciplinasInput, ProfessorUncheckedUpdateWithoutProfDisciplinasInput>
  }

  export type ProfessorUpdateWithoutProfDisciplinasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutProfessorNestedInput
    ProfTurma?: ProfTurmaUpdateManyWithoutProfessorNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutProfDisciplinasInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput
    ProfTurma?: ProfTurmaUncheckedUpdateManyWithoutProfessorNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateWithoutProfTurmaInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutProfessorInput
    ProfDisciplinas?: ProfDisciplinasCreateNestedManyWithoutProfessorInput
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutProfTurmaInput = {
    id_professor?: number
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput
    ProfDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutProfTurmaInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutProfTurmaInput, ProfessorUncheckedCreateWithoutProfTurmaInput>
  }

  export type TurmaCreateWithoutProfTurmaInput = {
    nome: string
    TempoLectivo?: TempoLectivoCreateNestedManyWithoutTurmaInput
    Classe: ClasseCreateNestedOneWithoutTurmaInput
    Curso: CursoCreateNestedOneWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutProfTurmaInput = {
    idTurma?: number
    nome: string
    classe: string
    curso: string
    TempoLectivo?: TempoLectivoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutProfTurmaInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutProfTurmaInput, TurmaUncheckedCreateWithoutProfTurmaInput>
  }

  export type ProfessorUpsertWithoutProfTurmaInput = {
    update: XOR<ProfessorUpdateWithoutProfTurmaInput, ProfessorUncheckedUpdateWithoutProfTurmaInput>
    create: XOR<ProfessorCreateWithoutProfTurmaInput, ProfessorUncheckedCreateWithoutProfTurmaInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutProfTurmaInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutProfTurmaInput, ProfessorUncheckedUpdateWithoutProfTurmaInput>
  }

  export type ProfessorUpdateWithoutProfTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutProfessorNestedInput
    ProfDisciplinas?: ProfDisciplinasUpdateManyWithoutProfessorNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutProfTurmaInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput
    ProfDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type TurmaUpsertWithoutProfTurmaInput = {
    update: XOR<TurmaUpdateWithoutProfTurmaInput, TurmaUncheckedUpdateWithoutProfTurmaInput>
    create: XOR<TurmaCreateWithoutProfTurmaInput, TurmaUncheckedCreateWithoutProfTurmaInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutProfTurmaInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutProfTurmaInput, TurmaUncheckedUpdateWithoutProfTurmaInput>
  }

  export type TurmaUpdateWithoutProfTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUpdateManyWithoutTurmaNestedInput
    Classe?: ClasseUpdateOneRequiredWithoutTurmaNestedInput
    Curso?: CursoUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutProfTurmaInput = {
    idTurma?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TempoLectivoCreateWithoutSalaInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutTempoLectivoInput
    Disciplina: DisciplinaCreateNestedOneWithoutTempoLectivoInput
    Periodo: PeriodoCreateNestedOneWithoutTempoLectivoInput
    Professor: ProfessorCreateNestedOneWithoutTempoLectivoInput
    Turma: TurmaCreateNestedOneWithoutTempoLectivoInput
  }

  export type TempoLectivoUncheckedCreateWithoutSalaInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    turmaId: number
  }

  export type TempoLectivoCreateOrConnectWithoutSalaInput = {
    where: TempoLectivoWhereUniqueInput
    create: XOR<TempoLectivoCreateWithoutSalaInput, TempoLectivoUncheckedCreateWithoutSalaInput>
  }

  export type TempoLectivoCreateManySalaInputEnvelope = {
    data: TempoLectivoCreateManySalaInput | TempoLectivoCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type TempoLectivoUpsertWithWhereUniqueWithoutSalaInput = {
    where: TempoLectivoWhereUniqueInput
    update: XOR<TempoLectivoUpdateWithoutSalaInput, TempoLectivoUncheckedUpdateWithoutSalaInput>
    create: XOR<TempoLectivoCreateWithoutSalaInput, TempoLectivoUncheckedCreateWithoutSalaInput>
  }

  export type TempoLectivoUpdateWithWhereUniqueWithoutSalaInput = {
    where: TempoLectivoWhereUniqueInput
    data: XOR<TempoLectivoUpdateWithoutSalaInput, TempoLectivoUncheckedUpdateWithoutSalaInput>
  }

  export type TempoLectivoUpdateManyWithWhereWithoutSalaInput = {
    where: TempoLectivoScalarWhereInput
    data: XOR<TempoLectivoUpdateManyMutationInput, TempoLectivoUncheckedUpdateManyWithoutSalaInput>
  }

  export type DiaSemanaCreateWithoutTempoLectivoInput = {
    nome: string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaUncheckedCreateWithoutTempoLectivoInput = {
    nome: string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaCreateOrConnectWithoutTempoLectivoInput = {
    where: DiaSemanaWhereUniqueInput
    create: XOR<DiaSemanaCreateWithoutTempoLectivoInput, DiaSemanaUncheckedCreateWithoutTempoLectivoInput>
  }

  export type DisciplinaCreateWithoutTempoLectivoInput = {
    nome: string
    ProfDisciplinas?: ProfDisciplinasCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutTempoLectivoInput = {
    idDisciplina?: number
    nome: string
    ProfDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutTempoLectivoInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutTempoLectivoInput, DisciplinaUncheckedCreateWithoutTempoLectivoInput>
  }

  export type PeriodoCreateWithoutTempoLectivoInput = {
    periodo: string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateWithoutTempoLectivoInput = {
    periodo: string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoCreateOrConnectWithoutTempoLectivoInput = {
    where: PeriodoWhereUniqueInput
    create: XOR<PeriodoCreateWithoutTempoLectivoInput, PeriodoUncheckedCreateWithoutTempoLectivoInput>
  }

  export type ProfessorCreateWithoutTempoLectivoInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutProfessorInput
    ProfDisciplinas?: ProfDisciplinasCreateNestedManyWithoutProfessorInput
    ProfTurma?: ProfTurmaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutTempoLectivoInput = {
    id_professor?: number
    nome: string
    email?: string | null
    telefone?: string | null
    created_at?: Date | string
    updated_at: Date | string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput
    ProfDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput
    ProfTurma?: ProfTurmaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutTempoLectivoInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutTempoLectivoInput, ProfessorUncheckedCreateWithoutTempoLectivoInput>
  }

  export type SalaCreateWithoutTempoLectivoInput = {
    nome: string
  }

  export type SalaUncheckedCreateWithoutTempoLectivoInput = {
    idSala?: number
    nome: string
  }

  export type SalaCreateOrConnectWithoutTempoLectivoInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutTempoLectivoInput, SalaUncheckedCreateWithoutTempoLectivoInput>
  }

  export type TurmaCreateWithoutTempoLectivoInput = {
    nome: string
    ProfTurma?: ProfTurmaCreateNestedManyWithoutTurmaInput
    Classe: ClasseCreateNestedOneWithoutTurmaInput
    Curso: CursoCreateNestedOneWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutTempoLectivoInput = {
    idTurma?: number
    nome: string
    classe: string
    curso: string
    ProfTurma?: ProfTurmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutTempoLectivoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutTempoLectivoInput, TurmaUncheckedCreateWithoutTempoLectivoInput>
  }

  export type DiaSemanaUpsertWithoutTempoLectivoInput = {
    update: XOR<DiaSemanaUpdateWithoutTempoLectivoInput, DiaSemanaUncheckedUpdateWithoutTempoLectivoInput>
    create: XOR<DiaSemanaCreateWithoutTempoLectivoInput, DiaSemanaUncheckedCreateWithoutTempoLectivoInput>
    where?: DiaSemanaWhereInput
  }

  export type DiaSemanaUpdateToOneWithWhereWithoutTempoLectivoInput = {
    where?: DiaSemanaWhereInput
    data: XOR<DiaSemanaUpdateWithoutTempoLectivoInput, DiaSemanaUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type DiaSemanaUpdateWithoutTempoLectivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DiaSemanaUncheckedUpdateWithoutTempoLectivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DisciplinaUpsertWithoutTempoLectivoInput = {
    update: XOR<DisciplinaUpdateWithoutTempoLectivoInput, DisciplinaUncheckedUpdateWithoutTempoLectivoInput>
    create: XOR<DisciplinaCreateWithoutTempoLectivoInput, DisciplinaUncheckedCreateWithoutTempoLectivoInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutTempoLectivoInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutTempoLectivoInput, DisciplinaUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type DisciplinaUpdateWithoutTempoLectivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ProfDisciplinas?: ProfDisciplinasUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutTempoLectivoInput = {
    idDisciplina?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ProfDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type PeriodoUpsertWithoutTempoLectivoInput = {
    update: XOR<PeriodoUpdateWithoutTempoLectivoInput, PeriodoUncheckedUpdateWithoutTempoLectivoInput>
    create: XOR<PeriodoCreateWithoutTempoLectivoInput, PeriodoUncheckedCreateWithoutTempoLectivoInput>
    where?: PeriodoWhereInput
  }

  export type PeriodoUpdateToOneWithWhereWithoutTempoLectivoInput = {
    where?: PeriodoWhereInput
    data: XOR<PeriodoUpdateWithoutTempoLectivoInput, PeriodoUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type PeriodoUpdateWithoutTempoLectivoInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateWithoutTempoLectivoInput = {
    periodo?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type ProfessorUpsertWithoutTempoLectivoInput = {
    update: XOR<ProfessorUpdateWithoutTempoLectivoInput, ProfessorUncheckedUpdateWithoutTempoLectivoInput>
    create: XOR<ProfessorCreateWithoutTempoLectivoInput, ProfessorUncheckedCreateWithoutTempoLectivoInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutTempoLectivoInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutTempoLectivoInput, ProfessorUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type ProfessorUpdateWithoutTempoLectivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutProfessorNestedInput
    ProfDisciplinas?: ProfDisciplinasUpdateManyWithoutProfessorNestedInput
    ProfTurma?: ProfTurmaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutTempoLectivoInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput
    ProfDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput
    ProfTurma?: ProfTurmaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type SalaUpsertWithoutTempoLectivoInput = {
    update: XOR<SalaUpdateWithoutTempoLectivoInput, SalaUncheckedUpdateWithoutTempoLectivoInput>
    create: XOR<SalaCreateWithoutTempoLectivoInput, SalaUncheckedCreateWithoutTempoLectivoInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutTempoLectivoInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutTempoLectivoInput, SalaUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type SalaUpdateWithoutTempoLectivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type SalaUncheckedUpdateWithoutTempoLectivoInput = {
    idSala?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaUpsertWithoutTempoLectivoInput = {
    update: XOR<TurmaUpdateWithoutTempoLectivoInput, TurmaUncheckedUpdateWithoutTempoLectivoInput>
    create: XOR<TurmaCreateWithoutTempoLectivoInput, TurmaUncheckedCreateWithoutTempoLectivoInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutTempoLectivoInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutTempoLectivoInput, TurmaUncheckedUpdateWithoutTempoLectivoInput>
  }

  export type TurmaUpdateWithoutTempoLectivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ProfTurma?: ProfTurmaUpdateManyWithoutTurmaNestedInput
    Classe?: ClasseUpdateOneRequiredWithoutTurmaNestedInput
    Curso?: CursoUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutTempoLectivoInput = {
    idTurma?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    ProfTurma?: ProfTurmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type ProfTurmaCreateWithoutTurmaInput = {
    Professor: ProfessorCreateNestedOneWithoutProfTurmaInput
  }

  export type ProfTurmaUncheckedCreateWithoutTurmaInput = {
    idProfTurma?: number
    professorId: number
  }

  export type ProfTurmaCreateOrConnectWithoutTurmaInput = {
    where: ProfTurmaWhereUniqueInput
    create: XOR<ProfTurmaCreateWithoutTurmaInput, ProfTurmaUncheckedCreateWithoutTurmaInput>
  }

  export type ProfTurmaCreateManyTurmaInputEnvelope = {
    data: ProfTurmaCreateManyTurmaInput | ProfTurmaCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type TempoLectivoCreateWithoutTurmaInput = {
    ordem: number
    DiaSemana: DiaSemanaCreateNestedOneWithoutTempoLectivoInput
    Disciplina: DisciplinaCreateNestedOneWithoutTempoLectivoInput
    Periodo: PeriodoCreateNestedOneWithoutTempoLectivoInput
    Professor: ProfessorCreateNestedOneWithoutTempoLectivoInput
    Sala: SalaCreateNestedOneWithoutTempoLectivoInput
  }

  export type TempoLectivoUncheckedCreateWithoutTurmaInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
  }

  export type TempoLectivoCreateOrConnectWithoutTurmaInput = {
    where: TempoLectivoWhereUniqueInput
    create: XOR<TempoLectivoCreateWithoutTurmaInput, TempoLectivoUncheckedCreateWithoutTurmaInput>
  }

  export type TempoLectivoCreateManyTurmaInputEnvelope = {
    data: TempoLectivoCreateManyTurmaInput | TempoLectivoCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type ClasseCreateWithoutTurmaInput = {
    nome: string
  }

  export type ClasseUncheckedCreateWithoutTurmaInput = {
    nome: string
  }

  export type ClasseCreateOrConnectWithoutTurmaInput = {
    where: ClasseWhereUniqueInput
    create: XOR<ClasseCreateWithoutTurmaInput, ClasseUncheckedCreateWithoutTurmaInput>
  }

  export type CursoCreateWithoutTurmaInput = {
    nome: string
  }

  export type CursoUncheckedCreateWithoutTurmaInput = {
    nome: string
  }

  export type CursoCreateOrConnectWithoutTurmaInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutTurmaInput, CursoUncheckedCreateWithoutTurmaInput>
  }

  export type ProfTurmaUpsertWithWhereUniqueWithoutTurmaInput = {
    where: ProfTurmaWhereUniqueInput
    update: XOR<ProfTurmaUpdateWithoutTurmaInput, ProfTurmaUncheckedUpdateWithoutTurmaInput>
    create: XOR<ProfTurmaCreateWithoutTurmaInput, ProfTurmaUncheckedCreateWithoutTurmaInput>
  }

  export type ProfTurmaUpdateWithWhereUniqueWithoutTurmaInput = {
    where: ProfTurmaWhereUniqueInput
    data: XOR<ProfTurmaUpdateWithoutTurmaInput, ProfTurmaUncheckedUpdateWithoutTurmaInput>
  }

  export type ProfTurmaUpdateManyWithWhereWithoutTurmaInput = {
    where: ProfTurmaScalarWhereInput
    data: XOR<ProfTurmaUpdateManyMutationInput, ProfTurmaUncheckedUpdateManyWithoutTurmaInput>
  }

  export type TempoLectivoUpsertWithWhereUniqueWithoutTurmaInput = {
    where: TempoLectivoWhereUniqueInput
    update: XOR<TempoLectivoUpdateWithoutTurmaInput, TempoLectivoUncheckedUpdateWithoutTurmaInput>
    create: XOR<TempoLectivoCreateWithoutTurmaInput, TempoLectivoUncheckedCreateWithoutTurmaInput>
  }

  export type TempoLectivoUpdateWithWhereUniqueWithoutTurmaInput = {
    where: TempoLectivoWhereUniqueInput
    data: XOR<TempoLectivoUpdateWithoutTurmaInput, TempoLectivoUncheckedUpdateWithoutTurmaInput>
  }

  export type TempoLectivoUpdateManyWithWhereWithoutTurmaInput = {
    where: TempoLectivoScalarWhereInput
    data: XOR<TempoLectivoUpdateManyMutationInput, TempoLectivoUncheckedUpdateManyWithoutTurmaInput>
  }

  export type ClasseUpsertWithoutTurmaInput = {
    update: XOR<ClasseUpdateWithoutTurmaInput, ClasseUncheckedUpdateWithoutTurmaInput>
    create: XOR<ClasseCreateWithoutTurmaInput, ClasseUncheckedCreateWithoutTurmaInput>
    where?: ClasseWhereInput
  }

  export type ClasseUpdateToOneWithWhereWithoutTurmaInput = {
    where?: ClasseWhereInput
    data: XOR<ClasseUpdateWithoutTurmaInput, ClasseUncheckedUpdateWithoutTurmaInput>
  }

  export type ClasseUpdateWithoutTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ClasseUncheckedUpdateWithoutTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUpsertWithoutTurmaInput = {
    update: XOR<CursoUpdateWithoutTurmaInput, CursoUncheckedUpdateWithoutTurmaInput>
    create: XOR<CursoCreateWithoutTurmaInput, CursoUncheckedCreateWithoutTurmaInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutTurmaInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutTurmaInput, CursoUncheckedUpdateWithoutTurmaInput>
  }

  export type CursoUpdateWithoutTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUncheckedUpdateWithoutTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateManyClasseInput = {
    idTurma?: number
    nome: string
    curso: string
  }

  export type TurmaUpdateWithoutClasseInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ProfTurma?: ProfTurmaUpdateManyWithoutTurmaNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutTurmaNestedInput
    Curso?: CursoUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutClasseInput = {
    idTurma?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    ProfTurma?: ProfTurmaUncheckedUpdateManyWithoutTurmaNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutClasseInput = {
    idTurma?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateManyCursoInput = {
    idTurma?: number
    nome: string
    classe: string
  }

  export type TurmaUpdateWithoutCursoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ProfTurma?: ProfTurmaUpdateManyWithoutTurmaNestedInput
    TempoLectivo?: TempoLectivoUpdateManyWithoutTurmaNestedInput
    Classe?: ClasseUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutCursoInput = {
    idTurma?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    ProfTurma?: ProfTurmaUncheckedUpdateManyWithoutTurmaNestedInput
    TempoLectivo?: TempoLectivoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutCursoInput = {
    idTurma?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateManyDiaSemanaInput = {
    idDisponibilidade?: number
    periodoId: string
    ordem: number
    professorId: number
  }

  export type TempoLectivoCreateManyDiaSemanaInput = {
    idTempoLectivo?: number
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
    turmaId: number
  }

  export type DisponibilidadeUpdateWithoutDiaSemanaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    Periodo?: PeriodoUpdateOneRequiredWithoutDisponibilidadeNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutDisponibilidadeNestedInput
  }

  export type DisponibilidadeUncheckedUpdateWithoutDiaSemanaInput = {
    idDisponibilidade?: IntFieldUpdateOperationsInput | number
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaInput = {
    idDisponibilidade?: IntFieldUpdateOperationsInput | number
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUpdateWithoutDiaSemanaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    Disciplina?: DisciplinaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Periodo?: PeriodoUpdateOneRequiredWithoutTempoLectivoNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutTempoLectivoNestedInput
    Sala?: SalaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Turma?: TurmaUpdateOneRequiredWithoutTempoLectivoNestedInput
  }

  export type TempoLectivoUncheckedUpdateWithoutDiaSemanaInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUncheckedUpdateManyWithoutDiaSemanaInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfDisciplinasCreateManyDisciplinaInput = {
    idProfDisciplina?: number
    professorId: number
  }

  export type TempoLectivoCreateManyDisciplinaInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    salaId: number
    turmaId: number
  }

  export type ProfDisciplinasUpdateWithoutDisciplinaInput = {
    Professor?: ProfessorUpdateOneRequiredWithoutProfDisciplinasNestedInput
  }

  export type ProfDisciplinasUncheckedUpdateWithoutDisciplinaInput = {
    idProfDisciplina?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaInput = {
    idProfDisciplina?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUpdateWithoutDisciplinaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Periodo?: PeriodoUpdateOneRequiredWithoutTempoLectivoNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutTempoLectivoNestedInput
    Sala?: SalaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Turma?: TurmaUpdateOneRequiredWithoutTempoLectivoNestedInput
  }

  export type TempoLectivoUncheckedUpdateWithoutDisciplinaInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUncheckedUpdateManyWithoutDisciplinaInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeCreateManyProfessorInput = {
    idDisponibilidade?: number
    diaSemana: string
    periodoId: string
    ordem: number
  }

  export type ProfDisciplinasCreateManyProfessorInput = {
    idProfDisciplina?: number
    disciplinaId: number
  }

  export type ProfTurmaCreateManyProfessorInput = {
    idProfTurma?: number
    turmaId: number
  }

  export type TempoLectivoCreateManyProfessorInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    disciplinaId: number
    salaId: number
    turmaId: number
  }

  export type DisponibilidadeUpdateWithoutProfessorInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutDisponibilidadeNestedInput
    Periodo?: PeriodoUpdateOneRequiredWithoutDisponibilidadeNestedInput
  }

  export type DisponibilidadeUncheckedUpdateWithoutProfessorInput = {
    idDisponibilidade?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutProfessorInput = {
    idDisponibilidade?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ProfDisciplinasUpdateWithoutProfessorInput = {
    Disciplina?: DisciplinaUpdateOneRequiredWithoutProfDisciplinasNestedInput
  }

  export type ProfDisciplinasUncheckedUpdateWithoutProfessorInput = {
    idProfDisciplina?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfDisciplinasUncheckedUpdateManyWithoutProfessorInput = {
    idProfDisciplina?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfTurmaUpdateWithoutProfessorInput = {
    Turma?: TurmaUpdateOneRequiredWithoutProfTurmaNestedInput
  }

  export type ProfTurmaUncheckedUpdateWithoutProfessorInput = {
    idProfTurma?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfTurmaUncheckedUpdateManyWithoutProfessorInput = {
    idProfTurma?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUpdateWithoutProfessorInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Disciplina?: DisciplinaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Periodo?: PeriodoUpdateOneRequiredWithoutTempoLectivoNestedInput
    Sala?: SalaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Turma?: TurmaUpdateOneRequiredWithoutTempoLectivoNestedInput
  }

  export type TempoLectivoUncheckedUpdateWithoutProfessorInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUncheckedUpdateManyWithoutProfessorInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeCreateManyPeriodoInput = {
    idDisponibilidade?: number
    diaSemana: string
    ordem: number
    professorId: number
  }

  export type TempoLectivoCreateManyPeriodoInput = {
    idTempoLectivo?: number
    diaSemana: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
    turmaId: number
  }

  export type DisponibilidadeUpdateWithoutPeriodoInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutDisponibilidadeNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutDisponibilidadeNestedInput
  }

  export type DisponibilidadeUncheckedUpdateWithoutPeriodoInput = {
    idDisponibilidade?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutPeriodoInput = {
    idDisponibilidade?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUpdateWithoutPeriodoInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Disciplina?: DisciplinaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutTempoLectivoNestedInput
    Sala?: SalaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Turma?: TurmaUpdateOneRequiredWithoutTempoLectivoNestedInput
  }

  export type TempoLectivoUncheckedUpdateWithoutPeriodoInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUncheckedUpdateManyWithoutPeriodoInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoCreateManySalaInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    turmaId: number
  }

  export type TempoLectivoUpdateWithoutSalaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Disciplina?: DisciplinaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Periodo?: PeriodoUpdateOneRequiredWithoutTempoLectivoNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutTempoLectivoNestedInput
    Turma?: TurmaUpdateOneRequiredWithoutTempoLectivoNestedInput
  }

  export type TempoLectivoUncheckedUpdateWithoutSalaInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUncheckedUpdateManyWithoutSalaInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfTurmaCreateManyTurmaInput = {
    idProfTurma?: number
    professorId: number
  }

  export type TempoLectivoCreateManyTurmaInput = {
    idTempoLectivo?: number
    diaSemana: string
    periodoId: string
    ordem: number
    professorId: number
    disciplinaId: number
    salaId: number
  }

  export type ProfTurmaUpdateWithoutTurmaInput = {
    Professor?: ProfessorUpdateOneRequiredWithoutProfTurmaNestedInput
  }

  export type ProfTurmaUncheckedUpdateWithoutTurmaInput = {
    idProfTurma?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfTurmaUncheckedUpdateManyWithoutTurmaInput = {
    idProfTurma?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUpdateWithoutTurmaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    DiaSemana?: DiaSemanaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Disciplina?: DisciplinaUpdateOneRequiredWithoutTempoLectivoNestedInput
    Periodo?: PeriodoUpdateOneRequiredWithoutTempoLectivoNestedInput
    Professor?: ProfessorUpdateOneRequiredWithoutTempoLectivoNestedInput
    Sala?: SalaUpdateOneRequiredWithoutTempoLectivoNestedInput
  }

  export type TempoLectivoUncheckedUpdateWithoutTurmaInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
  }

  export type TempoLectivoUncheckedUpdateManyWithoutTurmaInput = {
    idTempoLectivo?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    periodoId?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    disciplinaId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}