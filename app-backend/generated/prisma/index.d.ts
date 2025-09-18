
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cargo
 * 
 */
export type Cargo = $Result.DefaultSelection<Prisma.$CargoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Veiculo
 * 
 */
export type Veiculo = $Result.DefaultSelection<Prisma.$VeiculoPayload>
/**
 * Model RelatorioExpedicaoDiaria
 * 
 */
export type RelatorioExpedicaoDiaria = $Result.DefaultSelection<Prisma.$RelatorioExpedicaoDiariaPayload>
/**
 * Model RelatorioExpedicaoMensal
 * 
 */
export type RelatorioExpedicaoMensal = $Result.DefaultSelection<Prisma.$RelatorioExpedicaoMensalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cargos
 * const cargos = await prisma.cargo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Cargos
   * const cargos = await prisma.cargo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.cargo`: Exposes CRUD operations for the **Cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.CargoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veiculo`: Exposes CRUD operations for the **Veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.VeiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatorioExpedicaoDiaria`: Exposes CRUD operations for the **RelatorioExpedicaoDiaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelatorioExpedicaoDiarias
    * const relatorioExpedicaoDiarias = await prisma.relatorioExpedicaoDiaria.findMany()
    * ```
    */
  get relatorioExpedicaoDiaria(): Prisma.RelatorioExpedicaoDiariaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatorioExpedicaoMensal`: Exposes CRUD operations for the **RelatorioExpedicaoMensal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelatorioExpedicaoMensals
    * const relatorioExpedicaoMensals = await prisma.relatorioExpedicaoMensal.findMany()
    * ```
    */
  get relatorioExpedicaoMensal(): Prisma.RelatorioExpedicaoMensalDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Cargo: 'Cargo',
    Usuario: 'Usuario',
    Cliente: 'Cliente',
    Produto: 'Produto',
    Veiculo: 'Veiculo',
    RelatorioExpedicaoDiaria: 'RelatorioExpedicaoDiaria',
    RelatorioExpedicaoMensal: 'RelatorioExpedicaoMensal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cargo" | "usuario" | "cliente" | "produto" | "veiculo" | "relatorioExpedicaoDiaria" | "relatorioExpedicaoMensal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cargo: {
        payload: Prisma.$CargoPayload<ExtArgs>
        fields: Prisma.CargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findFirst: {
            args: Prisma.CargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findMany: {
            args: Prisma.CargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          create: {
            args: Prisma.CargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          createMany: {
            args: Prisma.CargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CargoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          delete: {
            args: Prisma.CargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          update: {
            args: Prisma.CargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          deleteMany: {
            args: Prisma.CargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CargoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          upsert: {
            args: Prisma.CargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.CargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Veiculo: {
        payload: Prisma.$VeiculoPayload<ExtArgs>
        fields: Prisma.VeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findFirst: {
            args: Prisma.VeiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findMany: {
            args: Prisma.VeiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          create: {
            args: Prisma.VeiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          createMany: {
            args: Prisma.VeiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          delete: {
            args: Prisma.VeiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          update: {
            args: Prisma.VeiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          upsert: {
            args: Prisma.VeiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.VeiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
          }
        }
      }
      RelatorioExpedicaoDiaria: {
        payload: Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>
        fields: Prisma.RelatorioExpedicaoDiariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatorioExpedicaoDiariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatorioExpedicaoDiariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>
          }
          findFirst: {
            args: Prisma.RelatorioExpedicaoDiariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatorioExpedicaoDiariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>
          }
          findMany: {
            args: Prisma.RelatorioExpedicaoDiariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>[]
          }
          create: {
            args: Prisma.RelatorioExpedicaoDiariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>
          }
          createMany: {
            args: Prisma.RelatorioExpedicaoDiariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelatorioExpedicaoDiariaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>[]
          }
          delete: {
            args: Prisma.RelatorioExpedicaoDiariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>
          }
          update: {
            args: Prisma.RelatorioExpedicaoDiariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>
          }
          deleteMany: {
            args: Prisma.RelatorioExpedicaoDiariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatorioExpedicaoDiariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelatorioExpedicaoDiariaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>[]
          }
          upsert: {
            args: Prisma.RelatorioExpedicaoDiariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoDiariaPayload>
          }
          aggregate: {
            args: Prisma.RelatorioExpedicaoDiariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatorioExpedicaoDiaria>
          }
          groupBy: {
            args: Prisma.RelatorioExpedicaoDiariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatorioExpedicaoDiariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatorioExpedicaoDiariaCountArgs<ExtArgs>
            result: $Utils.Optional<RelatorioExpedicaoDiariaCountAggregateOutputType> | number
          }
        }
      }
      RelatorioExpedicaoMensal: {
        payload: Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>
        fields: Prisma.RelatorioExpedicaoMensalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatorioExpedicaoMensalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatorioExpedicaoMensalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>
          }
          findFirst: {
            args: Prisma.RelatorioExpedicaoMensalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatorioExpedicaoMensalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>
          }
          findMany: {
            args: Prisma.RelatorioExpedicaoMensalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>[]
          }
          create: {
            args: Prisma.RelatorioExpedicaoMensalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>
          }
          createMany: {
            args: Prisma.RelatorioExpedicaoMensalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelatorioExpedicaoMensalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>[]
          }
          delete: {
            args: Prisma.RelatorioExpedicaoMensalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>
          }
          update: {
            args: Prisma.RelatorioExpedicaoMensalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>
          }
          deleteMany: {
            args: Prisma.RelatorioExpedicaoMensalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatorioExpedicaoMensalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelatorioExpedicaoMensalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>[]
          }
          upsert: {
            args: Prisma.RelatorioExpedicaoMensalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioExpedicaoMensalPayload>
          }
          aggregate: {
            args: Prisma.RelatorioExpedicaoMensalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatorioExpedicaoMensal>
          }
          groupBy: {
            args: Prisma.RelatorioExpedicaoMensalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatorioExpedicaoMensalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatorioExpedicaoMensalCountArgs<ExtArgs>
            result: $Utils.Optional<RelatorioExpedicaoMensalCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    cargo?: CargoOmit
    usuario?: UsuarioOmit
    cliente?: ClienteOmit
    produto?: ProdutoOmit
    veiculo?: VeiculoOmit
    relatorioExpedicaoDiaria?: RelatorioExpedicaoDiariaOmit
    relatorioExpedicaoMensal?: RelatorioExpedicaoMensalOmit
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
   * Count Type CargoCountOutputType
   */

  export type CargoCountOutputType = {
    usuarios: number
  }

  export type CargoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | CargoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoCountOutputType
     */
    select?: CargoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    relatoriosDiarios: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatoriosDiarios?: boolean | UsuarioCountOutputTypeCountRelatoriosDiariosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRelatoriosDiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioExpedicaoDiariaWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    relatoriosDiarios: number
    relatoriosMensais: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatoriosDiarios?: boolean | ClienteCountOutputTypeCountRelatoriosDiariosArgs
    relatoriosMensais?: boolean | ClienteCountOutputTypeCountRelatoriosMensaisArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountRelatoriosDiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioExpedicaoDiariaWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountRelatoriosMensaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioExpedicaoMensalWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    relatoriosDiarios: number
    relatoriosMensais: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatoriosDiarios?: boolean | ProdutoCountOutputTypeCountRelatoriosDiariosArgs
    relatoriosMensais?: boolean | ProdutoCountOutputTypeCountRelatoriosMensaisArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountRelatoriosDiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioExpedicaoDiariaWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountRelatoriosMensaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioExpedicaoMensalWhereInput
  }


  /**
   * Count Type VeiculoCountOutputType
   */

  export type VeiculoCountOutputType = {
    relatoriosDiarios: number
  }

  export type VeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatoriosDiarios?: boolean | VeiculoCountOutputTypeCountRelatoriosDiariosArgs
  }

  // Custom InputTypes
  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoCountOutputType
     */
    select?: VeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountRelatoriosDiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioExpedicaoDiariaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    id: number | null
  }

  export type CargoSumAggregateOutputType = {
    id: number | null
  }

  export type CargoMinAggregateOutputType = {
    id: number | null
    cargo: string | null
  }

  export type CargoMaxAggregateOutputType = {
    id: number | null
    cargo: string | null
  }

  export type CargoCountAggregateOutputType = {
    id: number
    cargo: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    id?: true
  }

  export type CargoSumAggregateInputType = {
    id?: true
  }

  export type CargoMinAggregateInputType = {
    id?: true
    cargo?: true
  }

  export type CargoMaxAggregateInputType = {
    id?: true
    cargo?: true
  }

  export type CargoCountAggregateInputType = {
    id?: true
    cargo?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargo to aggregate.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type CargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithAggregationInput | CargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: CargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    id: number
    cargo: string
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends CargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type CargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
    usuarios?: boolean | Cargo$usuariosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
  }, ExtArgs["result"]["cargo"]>

  export type CargoSelectScalar = {
    id?: boolean
    cargo?: boolean
  }

  export type CargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cargo", ExtArgs["result"]["cargo"]>
  export type CargoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Cargo$usuariosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CargoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CargoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cargo"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cargo: string
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type CargoGetPayload<S extends boolean | null | undefined | CargoDefaultArgs> = $Result.GetResult<Prisma.$CargoPayload, S>

  type CargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface CargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cargo'], meta: { name: 'Cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {CargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargoFindUniqueArgs>(args: SelectSubset<T, CargoFindUniqueArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargoFindUniqueOrThrowArgs>(args: SelectSubset<T, CargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargoFindFirstArgs>(args?: SelectSubset<T, CargoFindFirstArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargoFindFirstOrThrowArgs>(args?: SelectSubset<T, CargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargoWithIdOnly = await prisma.cargo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargoFindManyArgs>(args?: SelectSubset<T, CargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {CargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends CargoCreateArgs>(args: SelectSubset<T, CargoCreateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {CargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargoCreateManyArgs>(args?: SelectSubset<T, CargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cargos and returns the data saved in the database.
     * @param {CargoCreateManyAndReturnArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CargoCreateManyAndReturnArgs>(args?: SelectSubset<T, CargoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cargo.
     * @param {CargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends CargoDeleteArgs>(args: SelectSubset<T, CargoDeleteArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {CargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargoUpdateArgs>(args: SelectSubset<T, CargoUpdateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {CargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargoDeleteManyArgs>(args?: SelectSubset<T, CargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargoUpdateManyArgs>(args: SelectSubset<T, CargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos and returns the data updated in the database.
     * @param {CargoUpdateManyAndReturnArgs} args - Arguments to update many Cargos.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CargoUpdateManyAndReturnArgs>(args: SelectSubset<T, CargoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cargo.
     * @param {CargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends CargoUpsertArgs>(args: SelectSubset<T, CargoUpsertArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends CargoCountArgs>(
      args?: Subset<T, CargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoGroupByArgs} args - Group by arguments.
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
      T extends CargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargoGroupByArgs['orderBy'] }
        : { orderBy?: CargoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cargo model
   */
  readonly fields: CargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Cargo$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cargo model
   */
  interface CargoFieldRefs {
    readonly id: FieldRef<"Cargo", 'Int'>
    readonly cargo: FieldRef<"Cargo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cargo findUnique
   */
  export type CargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findUniqueOrThrow
   */
  export type CargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findFirst
   */
  export type CargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findFirstOrThrow
   */
  export type CargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findMany
   */
  export type CargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo create
   */
  export type CargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cargo.
     */
    data: XOR<CargoCreateInput, CargoUncheckedCreateInput>
  }

  /**
   * Cargo createMany
   */
  export type CargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargo createManyAndReturn
   */
  export type CargoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargo update
   */
  export type CargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cargo.
     */
    data: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
    /**
     * Choose, which Cargo to update.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo updateMany
   */
  export type CargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargo updateManyAndReturn
   */
  export type CargoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargo upsert
   */
  export type CargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cargo to update in case it exists.
     */
    where: CargoWhereUniqueInput
    /**
     * In case the Cargo found by the `where` argument doesn't exist, create a new Cargo with this data.
     */
    create: XOR<CargoCreateInput, CargoUncheckedCreateInput>
    /**
     * In case the Cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
  }

  /**
   * Cargo delete
   */
  export type CargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter which Cargo to delete.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo deleteMany
   */
  export type CargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargos to delete
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to delete.
     */
    limit?: number
  }

  /**
   * Cargo.usuarios
   */
  export type Cargo$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Cargo without action
   */
  export type CargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    cargoId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    cargoId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    username: string | null
    senha: string | null
    cargoId: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    username: string | null
    senha: string | null
    cargoId: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    username: number
    senha: number
    cargoId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    cargoId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    cargoId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    username?: true
    senha?: true
    cargoId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    username?: true
    senha?: true
    cargoId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    username?: true
    senha?: true
    cargoId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    username: string
    senha: string
    cargoId: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    username?: boolean
    senha?: boolean
    cargoId?: boolean
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
    relatoriosDiarios?: boolean | Usuario$relatoriosDiariosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    username?: boolean
    senha?: boolean
    cargoId?: boolean
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    username?: boolean
    senha?: boolean
    cargoId?: boolean
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    username?: boolean
    senha?: boolean
    cargoId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "username" | "senha" | "cargoId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
    relatoriosDiarios?: boolean | Usuario$relatoriosDiariosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      cargo: Prisma.$CargoPayload<ExtArgs>
      relatoriosDiarios: Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      username: string
      senha: string
      cargoId: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cargo<T extends CargoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CargoDefaultArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatoriosDiarios<T extends Usuario$relatoriosDiariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$relatoriosDiariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly cargoId: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.relatoriosDiarios
   */
  export type Usuario$relatoriosDiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    where?: RelatorioExpedicaoDiariaWhereInput
    orderBy?: RelatorioExpedicaoDiariaOrderByWithRelationInput | RelatorioExpedicaoDiariaOrderByWithRelationInput[]
    cursor?: RelatorioExpedicaoDiariaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioExpedicaoDiariaScalarFieldEnum | RelatorioExpedicaoDiariaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    CPF: string | null
    CNPJ: string | null
    endereco: string | null
    telefone: string | null
    codigoIdentificacao: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    CPF: string | null
    CNPJ: string | null
    endereco: string | null
    telefone: string | null
    codigoIdentificacao: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    CPF: number
    CNPJ: number
    endereco: number
    telefone: number
    codigoIdentificacao: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    CPF?: true
    CNPJ?: true
    endereco?: true
    telefone?: true
    codigoIdentificacao?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    CPF?: true
    CNPJ?: true
    endereco?: true
    telefone?: true
    codigoIdentificacao?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    CPF?: true
    CNPJ?: true
    endereco?: true
    telefone?: true
    codigoIdentificacao?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    CPF: string
    CNPJ: string
    endereco: string
    telefone: string
    codigoIdentificacao: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    CPF?: boolean
    CNPJ?: boolean
    endereco?: boolean
    telefone?: boolean
    codigoIdentificacao?: boolean
    relatoriosDiarios?: boolean | Cliente$relatoriosDiariosArgs<ExtArgs>
    relatoriosMensais?: boolean | Cliente$relatoriosMensaisArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    CPF?: boolean
    CNPJ?: boolean
    endereco?: boolean
    telefone?: boolean
    codigoIdentificacao?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    CPF?: boolean
    CNPJ?: boolean
    endereco?: boolean
    telefone?: boolean
    codigoIdentificacao?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    CPF?: boolean
    CNPJ?: boolean
    endereco?: boolean
    telefone?: boolean
    codigoIdentificacao?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "CPF" | "CNPJ" | "endereco" | "telefone" | "codigoIdentificacao", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatoriosDiarios?: boolean | Cliente$relatoriosDiariosArgs<ExtArgs>
    relatoriosMensais?: boolean | Cliente$relatoriosMensaisArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      relatoriosDiarios: Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>[]
      relatoriosMensais: Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      CPF: string
      CNPJ: string
      endereco: string
      telefone: string
      codigoIdentificacao: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relatoriosDiarios<T extends Cliente$relatoriosDiariosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$relatoriosDiariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatoriosMensais<T extends Cliente$relatoriosMensaisArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$relatoriosMensaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly CPF: FieldRef<"Cliente", 'String'>
    readonly CNPJ: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly codigoIdentificacao: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.relatoriosDiarios
   */
  export type Cliente$relatoriosDiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    where?: RelatorioExpedicaoDiariaWhereInput
    orderBy?: RelatorioExpedicaoDiariaOrderByWithRelationInput | RelatorioExpedicaoDiariaOrderByWithRelationInput[]
    cursor?: RelatorioExpedicaoDiariaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioExpedicaoDiariaScalarFieldEnum | RelatorioExpedicaoDiariaScalarFieldEnum[]
  }

  /**
   * Cliente.relatoriosMensais
   */
  export type Cliente$relatoriosMensaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    where?: RelatorioExpedicaoMensalWhereInput
    orderBy?: RelatorioExpedicaoMensalOrderByWithRelationInput | RelatorioExpedicaoMensalOrderByWithRelationInput[]
    cursor?: RelatorioExpedicaoMensalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioExpedicaoMensalScalarFieldEnum | RelatorioExpedicaoMensalScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    quantidade: Decimal | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    quantidade: Decimal | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    undMedida: string | null
    quantidade: Decimal | null
    validade: Date | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    undMedida: string | null
    quantidade: Decimal | null
    validade: Date | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    undMedida: number
    quantidade: number
    validade: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    undMedida?: true
    quantidade?: true
    validade?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    undMedida?: true
    quantidade?: true
    validade?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    undMedida?: true
    quantidade?: true
    validade?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    undMedida: string
    quantidade: Decimal
    validade: Date
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    undMedida?: boolean
    quantidade?: boolean
    validade?: boolean
    relatoriosDiarios?: boolean | Produto$relatoriosDiariosArgs<ExtArgs>
    relatoriosMensais?: boolean | Produto$relatoriosMensaisArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    undMedida?: boolean
    quantidade?: boolean
    validade?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    undMedida?: boolean
    quantidade?: boolean
    validade?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    undMedida?: boolean
    quantidade?: boolean
    validade?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "undMedida" | "quantidade" | "validade", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatoriosDiarios?: boolean | Produto$relatoriosDiariosArgs<ExtArgs>
    relatoriosMensais?: boolean | Produto$relatoriosMensaisArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      relatoriosDiarios: Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>[]
      relatoriosMensais: Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      undMedida: string
      quantidade: Prisma.Decimal
      validade: Date
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relatoriosDiarios<T extends Produto$relatoriosDiariosArgs<ExtArgs> = {}>(args?: Subset<T, Produto$relatoriosDiariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatoriosMensais<T extends Produto$relatoriosMensaisArgs<ExtArgs> = {}>(args?: Subset<T, Produto$relatoriosMensaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly undMedida: FieldRef<"Produto", 'String'>
    readonly quantidade: FieldRef<"Produto", 'Decimal'>
    readonly validade: FieldRef<"Produto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.relatoriosDiarios
   */
  export type Produto$relatoriosDiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    where?: RelatorioExpedicaoDiariaWhereInput
    orderBy?: RelatorioExpedicaoDiariaOrderByWithRelationInput | RelatorioExpedicaoDiariaOrderByWithRelationInput[]
    cursor?: RelatorioExpedicaoDiariaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioExpedicaoDiariaScalarFieldEnum | RelatorioExpedicaoDiariaScalarFieldEnum[]
  }

  /**
   * Produto.relatoriosMensais
   */
  export type Produto$relatoriosMensaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    where?: RelatorioExpedicaoMensalWhereInput
    orderBy?: RelatorioExpedicaoMensalOrderByWithRelationInput | RelatorioExpedicaoMensalOrderByWithRelationInput[]
    cursor?: RelatorioExpedicaoMensalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioExpedicaoMensalScalarFieldEnum | RelatorioExpedicaoMensalScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoAvgAggregateOutputType = {
    id: number | null
  }

  export type VeiculoSumAggregateOutputType = {
    id: number | null
  }

  export type VeiculoMinAggregateOutputType = {
    id: number | null
    modelo: string | null
    placa: string | null
    categoria: string | null
    marca: string | null
  }

  export type VeiculoMaxAggregateOutputType = {
    id: number | null
    modelo: string | null
    placa: string | null
    categoria: string | null
    marca: string | null
  }

  export type VeiculoCountAggregateOutputType = {
    id: number
    modelo: number
    placa: number
    categoria: number
    marca: number
    _all: number
  }


  export type VeiculoAvgAggregateInputType = {
    id?: true
  }

  export type VeiculoSumAggregateInputType = {
    id?: true
  }

  export type VeiculoMinAggregateInputType = {
    id?: true
    modelo?: true
    placa?: true
    categoria?: true
    marca?: true
  }

  export type VeiculoMaxAggregateInputType = {
    id?: true
    modelo?: true
    placa?: true
    categoria?: true
    marca?: true
  }

  export type VeiculoCountAggregateInputType = {
    id?: true
    modelo?: true
    placa?: true
    categoria?: true
    marca?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculo to aggregate.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veiculos
    **/
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type VeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithAggregationInput | VeiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: VeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _avg?: VeiculoAvgAggregateInputType
    _sum?: VeiculoSumAggregateInputType
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    id: number
    modelo: string
    placa: string
    categoria: string
    marca: string
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends VeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    placa?: boolean
    categoria?: boolean
    marca?: boolean
    relatoriosDiarios?: boolean | Veiculo$relatoriosDiariosArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    placa?: boolean
    categoria?: boolean
    marca?: boolean
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    placa?: boolean
    categoria?: boolean
    marca?: boolean
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectScalar = {
    id?: boolean
    modelo?: boolean
    placa?: boolean
    categoria?: boolean
    marca?: boolean
  }

  export type VeiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelo" | "placa" | "categoria" | "marca", ExtArgs["result"]["veiculo"]>
  export type VeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatoriosDiarios?: boolean | Veiculo$relatoriosDiariosArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VeiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veiculo"
    objects: {
      relatoriosDiarios: Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelo: string
      placa: string
      categoria: string
      marca: string
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }

  type VeiculoGetPayload<S extends boolean | null | undefined | VeiculoDefaultArgs> = $Result.GetResult<Prisma.$VeiculoPayload, S>

  type VeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface VeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veiculo'], meta: { name: 'Veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {VeiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeiculoFindUniqueArgs>(args: SelectSubset<T, VeiculoFindUniqueArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VeiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeiculoFindFirstArgs>(args?: SelectSubset<T, VeiculoFindFirstArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VeiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeiculoFindManyArgs>(args?: SelectSubset<T, VeiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veiculo.
     * @param {VeiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
     */
    create<T extends VeiculoCreateArgs>(args: SelectSubset<T, VeiculoCreateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veiculos.
     * @param {VeiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeiculoCreateManyArgs>(args?: SelectSubset<T, VeiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {VeiculoCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VeiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veiculo.
     * @param {VeiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
     */
    delete<T extends VeiculoDeleteArgs>(args: SelectSubset<T, VeiculoDeleteArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veiculo.
     * @param {VeiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeiculoUpdateArgs>(args: SelectSubset<T, VeiculoUpdateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veiculos.
     * @param {VeiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeiculoDeleteManyArgs>(args?: SelectSubset<T, VeiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeiculoUpdateManyArgs>(args: SelectSubset<T, VeiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos and returns the data updated in the database.
     * @param {VeiculoUpdateManyAndReturnArgs} args - Arguments to update many Veiculos.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends VeiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VeiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veiculo.
     * @param {VeiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
     */
    upsert<T extends VeiculoUpsertArgs>(args: SelectSubset<T, VeiculoUpsertArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoCountArgs>(
      args?: Subset<T, VeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoGroupByArgs} args - Group by arguments.
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
      T extends VeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veiculo model
   */
  readonly fields: VeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relatoriosDiarios<T extends Veiculo$relatoriosDiariosArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$relatoriosDiariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Veiculo model
   */
  interface VeiculoFieldRefs {
    readonly id: FieldRef<"Veiculo", 'Int'>
    readonly modelo: FieldRef<"Veiculo", 'String'>
    readonly placa: FieldRef<"Veiculo", 'String'>
    readonly categoria: FieldRef<"Veiculo", 'String'>
    readonly marca: FieldRef<"Veiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Veiculo findUnique
   */
  export type VeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findUniqueOrThrow
   */
  export type VeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findFirst
   */
  export type VeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findFirstOrThrow
   */
  export type VeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findMany
   */
  export type VeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo create
   */
  export type VeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Veiculo.
     */
    data: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
  }

  /**
   * Veiculo createMany
   */
  export type VeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veiculo createManyAndReturn
   */
  export type VeiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veiculo update
   */
  export type VeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Veiculo.
     */
    data: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
    /**
     * Choose, which Veiculo to update.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo updateMany
   */
  export type VeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
  }

  /**
   * Veiculo updateManyAndReturn
   */
  export type VeiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
  }

  /**
   * Veiculo upsert
   */
  export type VeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Veiculo to update in case it exists.
     */
    where: VeiculoWhereUniqueInput
    /**
     * In case the Veiculo found by the `where` argument doesn't exist, create a new Veiculo with this data.
     */
    create: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
    /**
     * In case the Veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
  }

  /**
   * Veiculo delete
   */
  export type VeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter which Veiculo to delete.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo deleteMany
   */
  export type VeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to delete
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to delete.
     */
    limit?: number
  }

  /**
   * Veiculo.relatoriosDiarios
   */
  export type Veiculo$relatoriosDiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    where?: RelatorioExpedicaoDiariaWhereInput
    orderBy?: RelatorioExpedicaoDiariaOrderByWithRelationInput | RelatorioExpedicaoDiariaOrderByWithRelationInput[]
    cursor?: RelatorioExpedicaoDiariaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioExpedicaoDiariaScalarFieldEnum | RelatorioExpedicaoDiariaScalarFieldEnum[]
  }

  /**
   * Veiculo without action
   */
  export type VeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
  }


  /**
   * Model RelatorioExpedicaoDiaria
   */

  export type AggregateRelatorioExpedicaoDiaria = {
    _count: RelatorioExpedicaoDiariaCountAggregateOutputType | null
    _avg: RelatorioExpedicaoDiariaAvgAggregateOutputType | null
    _sum: RelatorioExpedicaoDiariaSumAggregateOutputType | null
    _min: RelatorioExpedicaoDiariaMinAggregateOutputType | null
    _max: RelatorioExpedicaoDiariaMaxAggregateOutputType | null
  }

  export type RelatorioExpedicaoDiariaAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    notaFiscal: number | null
    temperatura: Decimal | null
    usuarioId: number | null
    veiculoId: number | null
    produtoId: number | null
    clienteId: number | null
  }

  export type RelatorioExpedicaoDiariaSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    notaFiscal: number | null
    temperatura: Decimal | null
    usuarioId: number | null
    veiculoId: number | null
    produtoId: number | null
    clienteId: number | null
  }

  export type RelatorioExpedicaoDiariaMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    notaFiscal: number | null
    dataProducao: Date | null
    destino: string | null
    temperatura: Decimal | null
    condicaoSanitaria: boolean | null
    entregador: string | null
    usuarioId: number | null
    veiculoId: number | null
    produtoId: number | null
    clienteId: number | null
  }

  export type RelatorioExpedicaoDiariaMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    notaFiscal: number | null
    dataProducao: Date | null
    destino: string | null
    temperatura: Decimal | null
    condicaoSanitaria: boolean | null
    entregador: string | null
    usuarioId: number | null
    veiculoId: number | null
    produtoId: number | null
    clienteId: number | null
  }

  export type RelatorioExpedicaoDiariaCountAggregateOutputType = {
    id: number
    quantidade: number
    notaFiscal: number
    dataProducao: number
    destino: number
    temperatura: number
    condicaoSanitaria: number
    entregador: number
    usuarioId: number
    veiculoId: number
    produtoId: number
    clienteId: number
    _all: number
  }


  export type RelatorioExpedicaoDiariaAvgAggregateInputType = {
    id?: true
    quantidade?: true
    notaFiscal?: true
    temperatura?: true
    usuarioId?: true
    veiculoId?: true
    produtoId?: true
    clienteId?: true
  }

  export type RelatorioExpedicaoDiariaSumAggregateInputType = {
    id?: true
    quantidade?: true
    notaFiscal?: true
    temperatura?: true
    usuarioId?: true
    veiculoId?: true
    produtoId?: true
    clienteId?: true
  }

  export type RelatorioExpedicaoDiariaMinAggregateInputType = {
    id?: true
    quantidade?: true
    notaFiscal?: true
    dataProducao?: true
    destino?: true
    temperatura?: true
    condicaoSanitaria?: true
    entregador?: true
    usuarioId?: true
    veiculoId?: true
    produtoId?: true
    clienteId?: true
  }

  export type RelatorioExpedicaoDiariaMaxAggregateInputType = {
    id?: true
    quantidade?: true
    notaFiscal?: true
    dataProducao?: true
    destino?: true
    temperatura?: true
    condicaoSanitaria?: true
    entregador?: true
    usuarioId?: true
    veiculoId?: true
    produtoId?: true
    clienteId?: true
  }

  export type RelatorioExpedicaoDiariaCountAggregateInputType = {
    id?: true
    quantidade?: true
    notaFiscal?: true
    dataProducao?: true
    destino?: true
    temperatura?: true
    condicaoSanitaria?: true
    entregador?: true
    usuarioId?: true
    veiculoId?: true
    produtoId?: true
    clienteId?: true
    _all?: true
  }

  export type RelatorioExpedicaoDiariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatorioExpedicaoDiaria to aggregate.
     */
    where?: RelatorioExpedicaoDiariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioExpedicaoDiarias to fetch.
     */
    orderBy?: RelatorioExpedicaoDiariaOrderByWithRelationInput | RelatorioExpedicaoDiariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatorioExpedicaoDiariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioExpedicaoDiarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioExpedicaoDiarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelatorioExpedicaoDiarias
    **/
    _count?: true | RelatorioExpedicaoDiariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelatorioExpedicaoDiariaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelatorioExpedicaoDiariaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatorioExpedicaoDiariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatorioExpedicaoDiariaMaxAggregateInputType
  }

  export type GetRelatorioExpedicaoDiariaAggregateType<T extends RelatorioExpedicaoDiariaAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatorioExpedicaoDiaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatorioExpedicaoDiaria[P]>
      : GetScalarType<T[P], AggregateRelatorioExpedicaoDiaria[P]>
  }




  export type RelatorioExpedicaoDiariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioExpedicaoDiariaWhereInput
    orderBy?: RelatorioExpedicaoDiariaOrderByWithAggregationInput | RelatorioExpedicaoDiariaOrderByWithAggregationInput[]
    by: RelatorioExpedicaoDiariaScalarFieldEnum[] | RelatorioExpedicaoDiariaScalarFieldEnum
    having?: RelatorioExpedicaoDiariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatorioExpedicaoDiariaCountAggregateInputType | true
    _avg?: RelatorioExpedicaoDiariaAvgAggregateInputType
    _sum?: RelatorioExpedicaoDiariaSumAggregateInputType
    _min?: RelatorioExpedicaoDiariaMinAggregateInputType
    _max?: RelatorioExpedicaoDiariaMaxAggregateInputType
  }

  export type RelatorioExpedicaoDiariaGroupByOutputType = {
    id: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date
    destino: string
    temperatura: Decimal
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    veiculoId: number
    produtoId: number
    clienteId: number
    _count: RelatorioExpedicaoDiariaCountAggregateOutputType | null
    _avg: RelatorioExpedicaoDiariaAvgAggregateOutputType | null
    _sum: RelatorioExpedicaoDiariaSumAggregateOutputType | null
    _min: RelatorioExpedicaoDiariaMinAggregateOutputType | null
    _max: RelatorioExpedicaoDiariaMaxAggregateOutputType | null
  }

  type GetRelatorioExpedicaoDiariaGroupByPayload<T extends RelatorioExpedicaoDiariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatorioExpedicaoDiariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatorioExpedicaoDiariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatorioExpedicaoDiariaGroupByOutputType[P]>
            : GetScalarType<T[P], RelatorioExpedicaoDiariaGroupByOutputType[P]>
        }
      >
    >


  export type RelatorioExpedicaoDiariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    notaFiscal?: boolean
    dataProducao?: boolean
    destino?: boolean
    temperatura?: boolean
    condicaoSanitaria?: boolean
    entregador?: boolean
    usuarioId?: boolean
    veiculoId?: boolean
    produtoId?: boolean
    clienteId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioExpedicaoDiaria"]>

  export type RelatorioExpedicaoDiariaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    notaFiscal?: boolean
    dataProducao?: boolean
    destino?: boolean
    temperatura?: boolean
    condicaoSanitaria?: boolean
    entregador?: boolean
    usuarioId?: boolean
    veiculoId?: boolean
    produtoId?: boolean
    clienteId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioExpedicaoDiaria"]>

  export type RelatorioExpedicaoDiariaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    notaFiscal?: boolean
    dataProducao?: boolean
    destino?: boolean
    temperatura?: boolean
    condicaoSanitaria?: boolean
    entregador?: boolean
    usuarioId?: boolean
    veiculoId?: boolean
    produtoId?: boolean
    clienteId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioExpedicaoDiaria"]>

  export type RelatorioExpedicaoDiariaSelectScalar = {
    id?: boolean
    quantidade?: boolean
    notaFiscal?: boolean
    dataProducao?: boolean
    destino?: boolean
    temperatura?: boolean
    condicaoSanitaria?: boolean
    entregador?: boolean
    usuarioId?: boolean
    veiculoId?: boolean
    produtoId?: boolean
    clienteId?: boolean
  }

  export type RelatorioExpedicaoDiariaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "notaFiscal" | "dataProducao" | "destino" | "temperatura" | "condicaoSanitaria" | "entregador" | "usuarioId" | "veiculoId" | "produtoId" | "clienteId", ExtArgs["result"]["relatorioExpedicaoDiaria"]>
  export type RelatorioExpedicaoDiariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type RelatorioExpedicaoDiariaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type RelatorioExpedicaoDiariaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $RelatorioExpedicaoDiariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelatorioExpedicaoDiaria"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      veiculo: Prisma.$VeiculoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      notaFiscal: number
      dataProducao: Date
      destino: string
      temperatura: Prisma.Decimal
      condicaoSanitaria: boolean
      entregador: string
      usuarioId: number
      veiculoId: number
      produtoId: number
      clienteId: number
    }, ExtArgs["result"]["relatorioExpedicaoDiaria"]>
    composites: {}
  }

  type RelatorioExpedicaoDiariaGetPayload<S extends boolean | null | undefined | RelatorioExpedicaoDiariaDefaultArgs> = $Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload, S>

  type RelatorioExpedicaoDiariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatorioExpedicaoDiariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatorioExpedicaoDiariaCountAggregateInputType | true
    }

  export interface RelatorioExpedicaoDiariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelatorioExpedicaoDiaria'], meta: { name: 'RelatorioExpedicaoDiaria' } }
    /**
     * Find zero or one RelatorioExpedicaoDiaria that matches the filter.
     * @param {RelatorioExpedicaoDiariaFindUniqueArgs} args - Arguments to find a RelatorioExpedicaoDiaria
     * @example
     * // Get one RelatorioExpedicaoDiaria
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatorioExpedicaoDiariaFindUniqueArgs>(args: SelectSubset<T, RelatorioExpedicaoDiariaFindUniqueArgs<ExtArgs>>): Prisma__RelatorioExpedicaoDiariaClient<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelatorioExpedicaoDiaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatorioExpedicaoDiariaFindUniqueOrThrowArgs} args - Arguments to find a RelatorioExpedicaoDiaria
     * @example
     * // Get one RelatorioExpedicaoDiaria
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatorioExpedicaoDiariaFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatorioExpedicaoDiariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatorioExpedicaoDiariaClient<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatorioExpedicaoDiaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoDiariaFindFirstArgs} args - Arguments to find a RelatorioExpedicaoDiaria
     * @example
     * // Get one RelatorioExpedicaoDiaria
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatorioExpedicaoDiariaFindFirstArgs>(args?: SelectSubset<T, RelatorioExpedicaoDiariaFindFirstArgs<ExtArgs>>): Prisma__RelatorioExpedicaoDiariaClient<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatorioExpedicaoDiaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoDiariaFindFirstOrThrowArgs} args - Arguments to find a RelatorioExpedicaoDiaria
     * @example
     * // Get one RelatorioExpedicaoDiaria
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatorioExpedicaoDiariaFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatorioExpedicaoDiariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatorioExpedicaoDiariaClient<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelatorioExpedicaoDiarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoDiariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelatorioExpedicaoDiarias
     * const relatorioExpedicaoDiarias = await prisma.relatorioExpedicaoDiaria.findMany()
     * 
     * // Get first 10 RelatorioExpedicaoDiarias
     * const relatorioExpedicaoDiarias = await prisma.relatorioExpedicaoDiaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatorioExpedicaoDiariaWithIdOnly = await prisma.relatorioExpedicaoDiaria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelatorioExpedicaoDiariaFindManyArgs>(args?: SelectSubset<T, RelatorioExpedicaoDiariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelatorioExpedicaoDiaria.
     * @param {RelatorioExpedicaoDiariaCreateArgs} args - Arguments to create a RelatorioExpedicaoDiaria.
     * @example
     * // Create one RelatorioExpedicaoDiaria
     * const RelatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.create({
     *   data: {
     *     // ... data to create a RelatorioExpedicaoDiaria
     *   }
     * })
     * 
     */
    create<T extends RelatorioExpedicaoDiariaCreateArgs>(args: SelectSubset<T, RelatorioExpedicaoDiariaCreateArgs<ExtArgs>>): Prisma__RelatorioExpedicaoDiariaClient<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelatorioExpedicaoDiarias.
     * @param {RelatorioExpedicaoDiariaCreateManyArgs} args - Arguments to create many RelatorioExpedicaoDiarias.
     * @example
     * // Create many RelatorioExpedicaoDiarias
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatorioExpedicaoDiariaCreateManyArgs>(args?: SelectSubset<T, RelatorioExpedicaoDiariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelatorioExpedicaoDiarias and returns the data saved in the database.
     * @param {RelatorioExpedicaoDiariaCreateManyAndReturnArgs} args - Arguments to create many RelatorioExpedicaoDiarias.
     * @example
     * // Create many RelatorioExpedicaoDiarias
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelatorioExpedicaoDiarias and only return the `id`
     * const relatorioExpedicaoDiariaWithIdOnly = await prisma.relatorioExpedicaoDiaria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelatorioExpedicaoDiariaCreateManyAndReturnArgs>(args?: SelectSubset<T, RelatorioExpedicaoDiariaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelatorioExpedicaoDiaria.
     * @param {RelatorioExpedicaoDiariaDeleteArgs} args - Arguments to delete one RelatorioExpedicaoDiaria.
     * @example
     * // Delete one RelatorioExpedicaoDiaria
     * const RelatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.delete({
     *   where: {
     *     // ... filter to delete one RelatorioExpedicaoDiaria
     *   }
     * })
     * 
     */
    delete<T extends RelatorioExpedicaoDiariaDeleteArgs>(args: SelectSubset<T, RelatorioExpedicaoDiariaDeleteArgs<ExtArgs>>): Prisma__RelatorioExpedicaoDiariaClient<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelatorioExpedicaoDiaria.
     * @param {RelatorioExpedicaoDiariaUpdateArgs} args - Arguments to update one RelatorioExpedicaoDiaria.
     * @example
     * // Update one RelatorioExpedicaoDiaria
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatorioExpedicaoDiariaUpdateArgs>(args: SelectSubset<T, RelatorioExpedicaoDiariaUpdateArgs<ExtArgs>>): Prisma__RelatorioExpedicaoDiariaClient<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelatorioExpedicaoDiarias.
     * @param {RelatorioExpedicaoDiariaDeleteManyArgs} args - Arguments to filter RelatorioExpedicaoDiarias to delete.
     * @example
     * // Delete a few RelatorioExpedicaoDiarias
     * const { count } = await prisma.relatorioExpedicaoDiaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatorioExpedicaoDiariaDeleteManyArgs>(args?: SelectSubset<T, RelatorioExpedicaoDiariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatorioExpedicaoDiarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoDiariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelatorioExpedicaoDiarias
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatorioExpedicaoDiariaUpdateManyArgs>(args: SelectSubset<T, RelatorioExpedicaoDiariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatorioExpedicaoDiarias and returns the data updated in the database.
     * @param {RelatorioExpedicaoDiariaUpdateManyAndReturnArgs} args - Arguments to update many RelatorioExpedicaoDiarias.
     * @example
     * // Update many RelatorioExpedicaoDiarias
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelatorioExpedicaoDiarias and only return the `id`
     * const relatorioExpedicaoDiariaWithIdOnly = await prisma.relatorioExpedicaoDiaria.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RelatorioExpedicaoDiariaUpdateManyAndReturnArgs>(args: SelectSubset<T, RelatorioExpedicaoDiariaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelatorioExpedicaoDiaria.
     * @param {RelatorioExpedicaoDiariaUpsertArgs} args - Arguments to update or create a RelatorioExpedicaoDiaria.
     * @example
     * // Update or create a RelatorioExpedicaoDiaria
     * const relatorioExpedicaoDiaria = await prisma.relatorioExpedicaoDiaria.upsert({
     *   create: {
     *     // ... data to create a RelatorioExpedicaoDiaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelatorioExpedicaoDiaria we want to update
     *   }
     * })
     */
    upsert<T extends RelatorioExpedicaoDiariaUpsertArgs>(args: SelectSubset<T, RelatorioExpedicaoDiariaUpsertArgs<ExtArgs>>): Prisma__RelatorioExpedicaoDiariaClient<$Result.GetResult<Prisma.$RelatorioExpedicaoDiariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelatorioExpedicaoDiarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoDiariaCountArgs} args - Arguments to filter RelatorioExpedicaoDiarias to count.
     * @example
     * // Count the number of RelatorioExpedicaoDiarias
     * const count = await prisma.relatorioExpedicaoDiaria.count({
     *   where: {
     *     // ... the filter for the RelatorioExpedicaoDiarias we want to count
     *   }
     * })
    **/
    count<T extends RelatorioExpedicaoDiariaCountArgs>(
      args?: Subset<T, RelatorioExpedicaoDiariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatorioExpedicaoDiariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelatorioExpedicaoDiaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoDiariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelatorioExpedicaoDiariaAggregateArgs>(args: Subset<T, RelatorioExpedicaoDiariaAggregateArgs>): Prisma.PrismaPromise<GetRelatorioExpedicaoDiariaAggregateType<T>>

    /**
     * Group by RelatorioExpedicaoDiaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoDiariaGroupByArgs} args - Group by arguments.
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
      T extends RelatorioExpedicaoDiariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatorioExpedicaoDiariaGroupByArgs['orderBy'] }
        : { orderBy?: RelatorioExpedicaoDiariaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelatorioExpedicaoDiariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatorioExpedicaoDiariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelatorioExpedicaoDiaria model
   */
  readonly fields: RelatorioExpedicaoDiariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelatorioExpedicaoDiaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatorioExpedicaoDiariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    veiculo<T extends VeiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoDefaultArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RelatorioExpedicaoDiaria model
   */
  interface RelatorioExpedicaoDiariaFieldRefs {
    readonly id: FieldRef<"RelatorioExpedicaoDiaria", 'Int'>
    readonly quantidade: FieldRef<"RelatorioExpedicaoDiaria", 'Int'>
    readonly notaFiscal: FieldRef<"RelatorioExpedicaoDiaria", 'Int'>
    readonly dataProducao: FieldRef<"RelatorioExpedicaoDiaria", 'DateTime'>
    readonly destino: FieldRef<"RelatorioExpedicaoDiaria", 'String'>
    readonly temperatura: FieldRef<"RelatorioExpedicaoDiaria", 'Decimal'>
    readonly condicaoSanitaria: FieldRef<"RelatorioExpedicaoDiaria", 'Boolean'>
    readonly entregador: FieldRef<"RelatorioExpedicaoDiaria", 'String'>
    readonly usuarioId: FieldRef<"RelatorioExpedicaoDiaria", 'Int'>
    readonly veiculoId: FieldRef<"RelatorioExpedicaoDiaria", 'Int'>
    readonly produtoId: FieldRef<"RelatorioExpedicaoDiaria", 'Int'>
    readonly clienteId: FieldRef<"RelatorioExpedicaoDiaria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RelatorioExpedicaoDiaria findUnique
   */
  export type RelatorioExpedicaoDiariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoDiaria to fetch.
     */
    where: RelatorioExpedicaoDiariaWhereUniqueInput
  }

  /**
   * RelatorioExpedicaoDiaria findUniqueOrThrow
   */
  export type RelatorioExpedicaoDiariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoDiaria to fetch.
     */
    where: RelatorioExpedicaoDiariaWhereUniqueInput
  }

  /**
   * RelatorioExpedicaoDiaria findFirst
   */
  export type RelatorioExpedicaoDiariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoDiaria to fetch.
     */
    where?: RelatorioExpedicaoDiariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioExpedicaoDiarias to fetch.
     */
    orderBy?: RelatorioExpedicaoDiariaOrderByWithRelationInput | RelatorioExpedicaoDiariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatorioExpedicaoDiarias.
     */
    cursor?: RelatorioExpedicaoDiariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioExpedicaoDiarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioExpedicaoDiarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatorioExpedicaoDiarias.
     */
    distinct?: RelatorioExpedicaoDiariaScalarFieldEnum | RelatorioExpedicaoDiariaScalarFieldEnum[]
  }

  /**
   * RelatorioExpedicaoDiaria findFirstOrThrow
   */
  export type RelatorioExpedicaoDiariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoDiaria to fetch.
     */
    where?: RelatorioExpedicaoDiariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioExpedicaoDiarias to fetch.
     */
    orderBy?: RelatorioExpedicaoDiariaOrderByWithRelationInput | RelatorioExpedicaoDiariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatorioExpedicaoDiarias.
     */
    cursor?: RelatorioExpedicaoDiariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioExpedicaoDiarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioExpedicaoDiarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatorioExpedicaoDiarias.
     */
    distinct?: RelatorioExpedicaoDiariaScalarFieldEnum | RelatorioExpedicaoDiariaScalarFieldEnum[]
  }

  /**
   * RelatorioExpedicaoDiaria findMany
   */
  export type RelatorioExpedicaoDiariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoDiarias to fetch.
     */
    where?: RelatorioExpedicaoDiariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioExpedicaoDiarias to fetch.
     */
    orderBy?: RelatorioExpedicaoDiariaOrderByWithRelationInput | RelatorioExpedicaoDiariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelatorioExpedicaoDiarias.
     */
    cursor?: RelatorioExpedicaoDiariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioExpedicaoDiarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioExpedicaoDiarias.
     */
    skip?: number
    distinct?: RelatorioExpedicaoDiariaScalarFieldEnum | RelatorioExpedicaoDiariaScalarFieldEnum[]
  }

  /**
   * RelatorioExpedicaoDiaria create
   */
  export type RelatorioExpedicaoDiariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * The data needed to create a RelatorioExpedicaoDiaria.
     */
    data: XOR<RelatorioExpedicaoDiariaCreateInput, RelatorioExpedicaoDiariaUncheckedCreateInput>
  }

  /**
   * RelatorioExpedicaoDiaria createMany
   */
  export type RelatorioExpedicaoDiariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelatorioExpedicaoDiarias.
     */
    data: RelatorioExpedicaoDiariaCreateManyInput | RelatorioExpedicaoDiariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelatorioExpedicaoDiaria createManyAndReturn
   */
  export type RelatorioExpedicaoDiariaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * The data used to create many RelatorioExpedicaoDiarias.
     */
    data: RelatorioExpedicaoDiariaCreateManyInput | RelatorioExpedicaoDiariaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatorioExpedicaoDiaria update
   */
  export type RelatorioExpedicaoDiariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * The data needed to update a RelatorioExpedicaoDiaria.
     */
    data: XOR<RelatorioExpedicaoDiariaUpdateInput, RelatorioExpedicaoDiariaUncheckedUpdateInput>
    /**
     * Choose, which RelatorioExpedicaoDiaria to update.
     */
    where: RelatorioExpedicaoDiariaWhereUniqueInput
  }

  /**
   * RelatorioExpedicaoDiaria updateMany
   */
  export type RelatorioExpedicaoDiariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelatorioExpedicaoDiarias.
     */
    data: XOR<RelatorioExpedicaoDiariaUpdateManyMutationInput, RelatorioExpedicaoDiariaUncheckedUpdateManyInput>
    /**
     * Filter which RelatorioExpedicaoDiarias to update
     */
    where?: RelatorioExpedicaoDiariaWhereInput
    /**
     * Limit how many RelatorioExpedicaoDiarias to update.
     */
    limit?: number
  }

  /**
   * RelatorioExpedicaoDiaria updateManyAndReturn
   */
  export type RelatorioExpedicaoDiariaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * The data used to update RelatorioExpedicaoDiarias.
     */
    data: XOR<RelatorioExpedicaoDiariaUpdateManyMutationInput, RelatorioExpedicaoDiariaUncheckedUpdateManyInput>
    /**
     * Filter which RelatorioExpedicaoDiarias to update
     */
    where?: RelatorioExpedicaoDiariaWhereInput
    /**
     * Limit how many RelatorioExpedicaoDiarias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatorioExpedicaoDiaria upsert
   */
  export type RelatorioExpedicaoDiariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * The filter to search for the RelatorioExpedicaoDiaria to update in case it exists.
     */
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    /**
     * In case the RelatorioExpedicaoDiaria found by the `where` argument doesn't exist, create a new RelatorioExpedicaoDiaria with this data.
     */
    create: XOR<RelatorioExpedicaoDiariaCreateInput, RelatorioExpedicaoDiariaUncheckedCreateInput>
    /**
     * In case the RelatorioExpedicaoDiaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatorioExpedicaoDiariaUpdateInput, RelatorioExpedicaoDiariaUncheckedUpdateInput>
  }

  /**
   * RelatorioExpedicaoDiaria delete
   */
  export type RelatorioExpedicaoDiariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
    /**
     * Filter which RelatorioExpedicaoDiaria to delete.
     */
    where: RelatorioExpedicaoDiariaWhereUniqueInput
  }

  /**
   * RelatorioExpedicaoDiaria deleteMany
   */
  export type RelatorioExpedicaoDiariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatorioExpedicaoDiarias to delete
     */
    where?: RelatorioExpedicaoDiariaWhereInput
    /**
     * Limit how many RelatorioExpedicaoDiarias to delete.
     */
    limit?: number
  }

  /**
   * RelatorioExpedicaoDiaria without action
   */
  export type RelatorioExpedicaoDiariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoDiaria
     */
    select?: RelatorioExpedicaoDiariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoDiaria
     */
    omit?: RelatorioExpedicaoDiariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoDiariaInclude<ExtArgs> | null
  }


  /**
   * Model RelatorioExpedicaoMensal
   */

  export type AggregateRelatorioExpedicaoMensal = {
    _count: RelatorioExpedicaoMensalCountAggregateOutputType | null
    _avg: RelatorioExpedicaoMensalAvgAggregateOutputType | null
    _sum: RelatorioExpedicaoMensalSumAggregateOutputType | null
    _min: RelatorioExpedicaoMensalMinAggregateOutputType | null
    _max: RelatorioExpedicaoMensalMaxAggregateOutputType | null
  }

  export type RelatorioExpedicaoMensalAvgAggregateOutputType = {
    id: number | null
    quantidade: Decimal | null
    temperatura: Decimal | null
    produtoId: number | null
    clienteId: number | null
  }

  export type RelatorioExpedicaoMensalSumAggregateOutputType = {
    id: number | null
    quantidade: Decimal | null
    temperatura: Decimal | null
    produtoId: number | null
    clienteId: number | null
  }

  export type RelatorioExpedicaoMensalMinAggregateOutputType = {
    id: number | null
    quantidade: Decimal | null
    destino: string | null
    temperatura: Decimal | null
    entregador: string | null
    dataProducao: Date | null
    dataExpedicao: Date | null
    produtoId: number | null
    clienteId: number | null
  }

  export type RelatorioExpedicaoMensalMaxAggregateOutputType = {
    id: number | null
    quantidade: Decimal | null
    destino: string | null
    temperatura: Decimal | null
    entregador: string | null
    dataProducao: Date | null
    dataExpedicao: Date | null
    produtoId: number | null
    clienteId: number | null
  }

  export type RelatorioExpedicaoMensalCountAggregateOutputType = {
    id: number
    quantidade: number
    destino: number
    temperatura: number
    entregador: number
    dataProducao: number
    dataExpedicao: number
    produtoId: number
    clienteId: number
    _all: number
  }


  export type RelatorioExpedicaoMensalAvgAggregateInputType = {
    id?: true
    quantidade?: true
    temperatura?: true
    produtoId?: true
    clienteId?: true
  }

  export type RelatorioExpedicaoMensalSumAggregateInputType = {
    id?: true
    quantidade?: true
    temperatura?: true
    produtoId?: true
    clienteId?: true
  }

  export type RelatorioExpedicaoMensalMinAggregateInputType = {
    id?: true
    quantidade?: true
    destino?: true
    temperatura?: true
    entregador?: true
    dataProducao?: true
    dataExpedicao?: true
    produtoId?: true
    clienteId?: true
  }

  export type RelatorioExpedicaoMensalMaxAggregateInputType = {
    id?: true
    quantidade?: true
    destino?: true
    temperatura?: true
    entregador?: true
    dataProducao?: true
    dataExpedicao?: true
    produtoId?: true
    clienteId?: true
  }

  export type RelatorioExpedicaoMensalCountAggregateInputType = {
    id?: true
    quantidade?: true
    destino?: true
    temperatura?: true
    entregador?: true
    dataProducao?: true
    dataExpedicao?: true
    produtoId?: true
    clienteId?: true
    _all?: true
  }

  export type RelatorioExpedicaoMensalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatorioExpedicaoMensal to aggregate.
     */
    where?: RelatorioExpedicaoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioExpedicaoMensals to fetch.
     */
    orderBy?: RelatorioExpedicaoMensalOrderByWithRelationInput | RelatorioExpedicaoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatorioExpedicaoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioExpedicaoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioExpedicaoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelatorioExpedicaoMensals
    **/
    _count?: true | RelatorioExpedicaoMensalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelatorioExpedicaoMensalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelatorioExpedicaoMensalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatorioExpedicaoMensalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatorioExpedicaoMensalMaxAggregateInputType
  }

  export type GetRelatorioExpedicaoMensalAggregateType<T extends RelatorioExpedicaoMensalAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatorioExpedicaoMensal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatorioExpedicaoMensal[P]>
      : GetScalarType<T[P], AggregateRelatorioExpedicaoMensal[P]>
  }




  export type RelatorioExpedicaoMensalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioExpedicaoMensalWhereInput
    orderBy?: RelatorioExpedicaoMensalOrderByWithAggregationInput | RelatorioExpedicaoMensalOrderByWithAggregationInput[]
    by: RelatorioExpedicaoMensalScalarFieldEnum[] | RelatorioExpedicaoMensalScalarFieldEnum
    having?: RelatorioExpedicaoMensalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatorioExpedicaoMensalCountAggregateInputType | true
    _avg?: RelatorioExpedicaoMensalAvgAggregateInputType
    _sum?: RelatorioExpedicaoMensalSumAggregateInputType
    _min?: RelatorioExpedicaoMensalMinAggregateInputType
    _max?: RelatorioExpedicaoMensalMaxAggregateInputType
  }

  export type RelatorioExpedicaoMensalGroupByOutputType = {
    id: number
    quantidade: Decimal
    destino: string
    temperatura: Decimal
    entregador: string
    dataProducao: Date
    dataExpedicao: Date
    produtoId: number
    clienteId: number
    _count: RelatorioExpedicaoMensalCountAggregateOutputType | null
    _avg: RelatorioExpedicaoMensalAvgAggregateOutputType | null
    _sum: RelatorioExpedicaoMensalSumAggregateOutputType | null
    _min: RelatorioExpedicaoMensalMinAggregateOutputType | null
    _max: RelatorioExpedicaoMensalMaxAggregateOutputType | null
  }

  type GetRelatorioExpedicaoMensalGroupByPayload<T extends RelatorioExpedicaoMensalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatorioExpedicaoMensalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatorioExpedicaoMensalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatorioExpedicaoMensalGroupByOutputType[P]>
            : GetScalarType<T[P], RelatorioExpedicaoMensalGroupByOutputType[P]>
        }
      >
    >


  export type RelatorioExpedicaoMensalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    destino?: boolean
    temperatura?: boolean
    entregador?: boolean
    dataProducao?: boolean
    dataExpedicao?: boolean
    produtoId?: boolean
    clienteId?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioExpedicaoMensal"]>

  export type RelatorioExpedicaoMensalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    destino?: boolean
    temperatura?: boolean
    entregador?: boolean
    dataProducao?: boolean
    dataExpedicao?: boolean
    produtoId?: boolean
    clienteId?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioExpedicaoMensal"]>

  export type RelatorioExpedicaoMensalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    destino?: boolean
    temperatura?: boolean
    entregador?: boolean
    dataProducao?: boolean
    dataExpedicao?: boolean
    produtoId?: boolean
    clienteId?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioExpedicaoMensal"]>

  export type RelatorioExpedicaoMensalSelectScalar = {
    id?: boolean
    quantidade?: boolean
    destino?: boolean
    temperatura?: boolean
    entregador?: boolean
    dataProducao?: boolean
    dataExpedicao?: boolean
    produtoId?: boolean
    clienteId?: boolean
  }

  export type RelatorioExpedicaoMensalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "destino" | "temperatura" | "entregador" | "dataProducao" | "dataExpedicao" | "produtoId" | "clienteId", ExtArgs["result"]["relatorioExpedicaoMensal"]>
  export type RelatorioExpedicaoMensalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type RelatorioExpedicaoMensalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type RelatorioExpedicaoMensalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $RelatorioExpedicaoMensalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelatorioExpedicaoMensal"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: Prisma.Decimal
      destino: string
      temperatura: Prisma.Decimal
      entregador: string
      dataProducao: Date
      dataExpedicao: Date
      produtoId: number
      clienteId: number
    }, ExtArgs["result"]["relatorioExpedicaoMensal"]>
    composites: {}
  }

  type RelatorioExpedicaoMensalGetPayload<S extends boolean | null | undefined | RelatorioExpedicaoMensalDefaultArgs> = $Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload, S>

  type RelatorioExpedicaoMensalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatorioExpedicaoMensalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatorioExpedicaoMensalCountAggregateInputType | true
    }

  export interface RelatorioExpedicaoMensalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelatorioExpedicaoMensal'], meta: { name: 'RelatorioExpedicaoMensal' } }
    /**
     * Find zero or one RelatorioExpedicaoMensal that matches the filter.
     * @param {RelatorioExpedicaoMensalFindUniqueArgs} args - Arguments to find a RelatorioExpedicaoMensal
     * @example
     * // Get one RelatorioExpedicaoMensal
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatorioExpedicaoMensalFindUniqueArgs>(args: SelectSubset<T, RelatorioExpedicaoMensalFindUniqueArgs<ExtArgs>>): Prisma__RelatorioExpedicaoMensalClient<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelatorioExpedicaoMensal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatorioExpedicaoMensalFindUniqueOrThrowArgs} args - Arguments to find a RelatorioExpedicaoMensal
     * @example
     * // Get one RelatorioExpedicaoMensal
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatorioExpedicaoMensalFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatorioExpedicaoMensalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatorioExpedicaoMensalClient<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatorioExpedicaoMensal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoMensalFindFirstArgs} args - Arguments to find a RelatorioExpedicaoMensal
     * @example
     * // Get one RelatorioExpedicaoMensal
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatorioExpedicaoMensalFindFirstArgs>(args?: SelectSubset<T, RelatorioExpedicaoMensalFindFirstArgs<ExtArgs>>): Prisma__RelatorioExpedicaoMensalClient<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatorioExpedicaoMensal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoMensalFindFirstOrThrowArgs} args - Arguments to find a RelatorioExpedicaoMensal
     * @example
     * // Get one RelatorioExpedicaoMensal
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatorioExpedicaoMensalFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatorioExpedicaoMensalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatorioExpedicaoMensalClient<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelatorioExpedicaoMensals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoMensalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelatorioExpedicaoMensals
     * const relatorioExpedicaoMensals = await prisma.relatorioExpedicaoMensal.findMany()
     * 
     * // Get first 10 RelatorioExpedicaoMensals
     * const relatorioExpedicaoMensals = await prisma.relatorioExpedicaoMensal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatorioExpedicaoMensalWithIdOnly = await prisma.relatorioExpedicaoMensal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelatorioExpedicaoMensalFindManyArgs>(args?: SelectSubset<T, RelatorioExpedicaoMensalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelatorioExpedicaoMensal.
     * @param {RelatorioExpedicaoMensalCreateArgs} args - Arguments to create a RelatorioExpedicaoMensal.
     * @example
     * // Create one RelatorioExpedicaoMensal
     * const RelatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.create({
     *   data: {
     *     // ... data to create a RelatorioExpedicaoMensal
     *   }
     * })
     * 
     */
    create<T extends RelatorioExpedicaoMensalCreateArgs>(args: SelectSubset<T, RelatorioExpedicaoMensalCreateArgs<ExtArgs>>): Prisma__RelatorioExpedicaoMensalClient<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelatorioExpedicaoMensals.
     * @param {RelatorioExpedicaoMensalCreateManyArgs} args - Arguments to create many RelatorioExpedicaoMensals.
     * @example
     * // Create many RelatorioExpedicaoMensals
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatorioExpedicaoMensalCreateManyArgs>(args?: SelectSubset<T, RelatorioExpedicaoMensalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelatorioExpedicaoMensals and returns the data saved in the database.
     * @param {RelatorioExpedicaoMensalCreateManyAndReturnArgs} args - Arguments to create many RelatorioExpedicaoMensals.
     * @example
     * // Create many RelatorioExpedicaoMensals
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelatorioExpedicaoMensals and only return the `id`
     * const relatorioExpedicaoMensalWithIdOnly = await prisma.relatorioExpedicaoMensal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelatorioExpedicaoMensalCreateManyAndReturnArgs>(args?: SelectSubset<T, RelatorioExpedicaoMensalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelatorioExpedicaoMensal.
     * @param {RelatorioExpedicaoMensalDeleteArgs} args - Arguments to delete one RelatorioExpedicaoMensal.
     * @example
     * // Delete one RelatorioExpedicaoMensal
     * const RelatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.delete({
     *   where: {
     *     // ... filter to delete one RelatorioExpedicaoMensal
     *   }
     * })
     * 
     */
    delete<T extends RelatorioExpedicaoMensalDeleteArgs>(args: SelectSubset<T, RelatorioExpedicaoMensalDeleteArgs<ExtArgs>>): Prisma__RelatorioExpedicaoMensalClient<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelatorioExpedicaoMensal.
     * @param {RelatorioExpedicaoMensalUpdateArgs} args - Arguments to update one RelatorioExpedicaoMensal.
     * @example
     * // Update one RelatorioExpedicaoMensal
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatorioExpedicaoMensalUpdateArgs>(args: SelectSubset<T, RelatorioExpedicaoMensalUpdateArgs<ExtArgs>>): Prisma__RelatorioExpedicaoMensalClient<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelatorioExpedicaoMensals.
     * @param {RelatorioExpedicaoMensalDeleteManyArgs} args - Arguments to filter RelatorioExpedicaoMensals to delete.
     * @example
     * // Delete a few RelatorioExpedicaoMensals
     * const { count } = await prisma.relatorioExpedicaoMensal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatorioExpedicaoMensalDeleteManyArgs>(args?: SelectSubset<T, RelatorioExpedicaoMensalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatorioExpedicaoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoMensalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelatorioExpedicaoMensals
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatorioExpedicaoMensalUpdateManyArgs>(args: SelectSubset<T, RelatorioExpedicaoMensalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatorioExpedicaoMensals and returns the data updated in the database.
     * @param {RelatorioExpedicaoMensalUpdateManyAndReturnArgs} args - Arguments to update many RelatorioExpedicaoMensals.
     * @example
     * // Update many RelatorioExpedicaoMensals
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelatorioExpedicaoMensals and only return the `id`
     * const relatorioExpedicaoMensalWithIdOnly = await prisma.relatorioExpedicaoMensal.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RelatorioExpedicaoMensalUpdateManyAndReturnArgs>(args: SelectSubset<T, RelatorioExpedicaoMensalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelatorioExpedicaoMensal.
     * @param {RelatorioExpedicaoMensalUpsertArgs} args - Arguments to update or create a RelatorioExpedicaoMensal.
     * @example
     * // Update or create a RelatorioExpedicaoMensal
     * const relatorioExpedicaoMensal = await prisma.relatorioExpedicaoMensal.upsert({
     *   create: {
     *     // ... data to create a RelatorioExpedicaoMensal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelatorioExpedicaoMensal we want to update
     *   }
     * })
     */
    upsert<T extends RelatorioExpedicaoMensalUpsertArgs>(args: SelectSubset<T, RelatorioExpedicaoMensalUpsertArgs<ExtArgs>>): Prisma__RelatorioExpedicaoMensalClient<$Result.GetResult<Prisma.$RelatorioExpedicaoMensalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelatorioExpedicaoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoMensalCountArgs} args - Arguments to filter RelatorioExpedicaoMensals to count.
     * @example
     * // Count the number of RelatorioExpedicaoMensals
     * const count = await prisma.relatorioExpedicaoMensal.count({
     *   where: {
     *     // ... the filter for the RelatorioExpedicaoMensals we want to count
     *   }
     * })
    **/
    count<T extends RelatorioExpedicaoMensalCountArgs>(
      args?: Subset<T, RelatorioExpedicaoMensalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatorioExpedicaoMensalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelatorioExpedicaoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoMensalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelatorioExpedicaoMensalAggregateArgs>(args: Subset<T, RelatorioExpedicaoMensalAggregateArgs>): Prisma.PrismaPromise<GetRelatorioExpedicaoMensalAggregateType<T>>

    /**
     * Group by RelatorioExpedicaoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioExpedicaoMensalGroupByArgs} args - Group by arguments.
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
      T extends RelatorioExpedicaoMensalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatorioExpedicaoMensalGroupByArgs['orderBy'] }
        : { orderBy?: RelatorioExpedicaoMensalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelatorioExpedicaoMensalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatorioExpedicaoMensalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelatorioExpedicaoMensal model
   */
  readonly fields: RelatorioExpedicaoMensalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelatorioExpedicaoMensal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatorioExpedicaoMensalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RelatorioExpedicaoMensal model
   */
  interface RelatorioExpedicaoMensalFieldRefs {
    readonly id: FieldRef<"RelatorioExpedicaoMensal", 'Int'>
    readonly quantidade: FieldRef<"RelatorioExpedicaoMensal", 'Decimal'>
    readonly destino: FieldRef<"RelatorioExpedicaoMensal", 'String'>
    readonly temperatura: FieldRef<"RelatorioExpedicaoMensal", 'Decimal'>
    readonly entregador: FieldRef<"RelatorioExpedicaoMensal", 'String'>
    readonly dataProducao: FieldRef<"RelatorioExpedicaoMensal", 'DateTime'>
    readonly dataExpedicao: FieldRef<"RelatorioExpedicaoMensal", 'DateTime'>
    readonly produtoId: FieldRef<"RelatorioExpedicaoMensal", 'Int'>
    readonly clienteId: FieldRef<"RelatorioExpedicaoMensal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RelatorioExpedicaoMensal findUnique
   */
  export type RelatorioExpedicaoMensalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoMensal to fetch.
     */
    where: RelatorioExpedicaoMensalWhereUniqueInput
  }

  /**
   * RelatorioExpedicaoMensal findUniqueOrThrow
   */
  export type RelatorioExpedicaoMensalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoMensal to fetch.
     */
    where: RelatorioExpedicaoMensalWhereUniqueInput
  }

  /**
   * RelatorioExpedicaoMensal findFirst
   */
  export type RelatorioExpedicaoMensalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoMensal to fetch.
     */
    where?: RelatorioExpedicaoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioExpedicaoMensals to fetch.
     */
    orderBy?: RelatorioExpedicaoMensalOrderByWithRelationInput | RelatorioExpedicaoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatorioExpedicaoMensals.
     */
    cursor?: RelatorioExpedicaoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioExpedicaoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioExpedicaoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatorioExpedicaoMensals.
     */
    distinct?: RelatorioExpedicaoMensalScalarFieldEnum | RelatorioExpedicaoMensalScalarFieldEnum[]
  }

  /**
   * RelatorioExpedicaoMensal findFirstOrThrow
   */
  export type RelatorioExpedicaoMensalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoMensal to fetch.
     */
    where?: RelatorioExpedicaoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioExpedicaoMensals to fetch.
     */
    orderBy?: RelatorioExpedicaoMensalOrderByWithRelationInput | RelatorioExpedicaoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatorioExpedicaoMensals.
     */
    cursor?: RelatorioExpedicaoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioExpedicaoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioExpedicaoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatorioExpedicaoMensals.
     */
    distinct?: RelatorioExpedicaoMensalScalarFieldEnum | RelatorioExpedicaoMensalScalarFieldEnum[]
  }

  /**
   * RelatorioExpedicaoMensal findMany
   */
  export type RelatorioExpedicaoMensalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioExpedicaoMensals to fetch.
     */
    where?: RelatorioExpedicaoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioExpedicaoMensals to fetch.
     */
    orderBy?: RelatorioExpedicaoMensalOrderByWithRelationInput | RelatorioExpedicaoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelatorioExpedicaoMensals.
     */
    cursor?: RelatorioExpedicaoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioExpedicaoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioExpedicaoMensals.
     */
    skip?: number
    distinct?: RelatorioExpedicaoMensalScalarFieldEnum | RelatorioExpedicaoMensalScalarFieldEnum[]
  }

  /**
   * RelatorioExpedicaoMensal create
   */
  export type RelatorioExpedicaoMensalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * The data needed to create a RelatorioExpedicaoMensal.
     */
    data: XOR<RelatorioExpedicaoMensalCreateInput, RelatorioExpedicaoMensalUncheckedCreateInput>
  }

  /**
   * RelatorioExpedicaoMensal createMany
   */
  export type RelatorioExpedicaoMensalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelatorioExpedicaoMensals.
     */
    data: RelatorioExpedicaoMensalCreateManyInput | RelatorioExpedicaoMensalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelatorioExpedicaoMensal createManyAndReturn
   */
  export type RelatorioExpedicaoMensalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * The data used to create many RelatorioExpedicaoMensals.
     */
    data: RelatorioExpedicaoMensalCreateManyInput | RelatorioExpedicaoMensalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatorioExpedicaoMensal update
   */
  export type RelatorioExpedicaoMensalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * The data needed to update a RelatorioExpedicaoMensal.
     */
    data: XOR<RelatorioExpedicaoMensalUpdateInput, RelatorioExpedicaoMensalUncheckedUpdateInput>
    /**
     * Choose, which RelatorioExpedicaoMensal to update.
     */
    where: RelatorioExpedicaoMensalWhereUniqueInput
  }

  /**
   * RelatorioExpedicaoMensal updateMany
   */
  export type RelatorioExpedicaoMensalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelatorioExpedicaoMensals.
     */
    data: XOR<RelatorioExpedicaoMensalUpdateManyMutationInput, RelatorioExpedicaoMensalUncheckedUpdateManyInput>
    /**
     * Filter which RelatorioExpedicaoMensals to update
     */
    where?: RelatorioExpedicaoMensalWhereInput
    /**
     * Limit how many RelatorioExpedicaoMensals to update.
     */
    limit?: number
  }

  /**
   * RelatorioExpedicaoMensal updateManyAndReturn
   */
  export type RelatorioExpedicaoMensalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * The data used to update RelatorioExpedicaoMensals.
     */
    data: XOR<RelatorioExpedicaoMensalUpdateManyMutationInput, RelatorioExpedicaoMensalUncheckedUpdateManyInput>
    /**
     * Filter which RelatorioExpedicaoMensals to update
     */
    where?: RelatorioExpedicaoMensalWhereInput
    /**
     * Limit how many RelatorioExpedicaoMensals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatorioExpedicaoMensal upsert
   */
  export type RelatorioExpedicaoMensalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * The filter to search for the RelatorioExpedicaoMensal to update in case it exists.
     */
    where: RelatorioExpedicaoMensalWhereUniqueInput
    /**
     * In case the RelatorioExpedicaoMensal found by the `where` argument doesn't exist, create a new RelatorioExpedicaoMensal with this data.
     */
    create: XOR<RelatorioExpedicaoMensalCreateInput, RelatorioExpedicaoMensalUncheckedCreateInput>
    /**
     * In case the RelatorioExpedicaoMensal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatorioExpedicaoMensalUpdateInput, RelatorioExpedicaoMensalUncheckedUpdateInput>
  }

  /**
   * RelatorioExpedicaoMensal delete
   */
  export type RelatorioExpedicaoMensalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
    /**
     * Filter which RelatorioExpedicaoMensal to delete.
     */
    where: RelatorioExpedicaoMensalWhereUniqueInput
  }

  /**
   * RelatorioExpedicaoMensal deleteMany
   */
  export type RelatorioExpedicaoMensalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatorioExpedicaoMensals to delete
     */
    where?: RelatorioExpedicaoMensalWhereInput
    /**
     * Limit how many RelatorioExpedicaoMensals to delete.
     */
    limit?: number
  }

  /**
   * RelatorioExpedicaoMensal without action
   */
  export type RelatorioExpedicaoMensalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioExpedicaoMensal
     */
    select?: RelatorioExpedicaoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioExpedicaoMensal
     */
    omit?: RelatorioExpedicaoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioExpedicaoMensalInclude<ExtArgs> | null
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


  export const CargoScalarFieldEnum: {
    id: 'id',
    cargo: 'cargo'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    username: 'username',
    senha: 'senha',
    cargoId: 'cargoId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    CPF: 'CPF',
    CNPJ: 'CNPJ',
    endereco: 'endereco',
    telefone: 'telefone',
    codigoIdentificacao: 'codigoIdentificacao'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    undMedida: 'undMedida',
    quantidade: 'quantidade',
    validade: 'validade'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const VeiculoScalarFieldEnum: {
    id: 'id',
    modelo: 'modelo',
    placa: 'placa',
    categoria: 'categoria',
    marca: 'marca'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const RelatorioExpedicaoDiariaScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    notaFiscal: 'notaFiscal',
    dataProducao: 'dataProducao',
    destino: 'destino',
    temperatura: 'temperatura',
    condicaoSanitaria: 'condicaoSanitaria',
    entregador: 'entregador',
    usuarioId: 'usuarioId',
    veiculoId: 'veiculoId',
    produtoId: 'produtoId',
    clienteId: 'clienteId'
  };

  export type RelatorioExpedicaoDiariaScalarFieldEnum = (typeof RelatorioExpedicaoDiariaScalarFieldEnum)[keyof typeof RelatorioExpedicaoDiariaScalarFieldEnum]


  export const RelatorioExpedicaoMensalScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    destino: 'destino',
    temperatura: 'temperatura',
    entregador: 'entregador',
    dataProducao: 'dataProducao',
    dataExpedicao: 'dataExpedicao',
    produtoId: 'produtoId',
    clienteId: 'clienteId'
  };

  export type RelatorioExpedicaoMensalScalarFieldEnum = (typeof RelatorioExpedicaoMensalScalarFieldEnum)[keyof typeof RelatorioExpedicaoMensalScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type CargoWhereInput = {
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    id?: IntFilter<"Cargo"> | number
    cargo?: StringFilter<"Cargo"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type CargoOrderByWithRelationInput = {
    id?: SortOrder
    cargo?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type CargoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    cargo?: StringFilter<"Cargo"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type CargoOrderByWithAggregationInput = {
    id?: SortOrder
    cargo?: SortOrder
    _count?: CargoCountOrderByAggregateInput
    _avg?: CargoAvgOrderByAggregateInput
    _max?: CargoMaxOrderByAggregateInput
    _min?: CargoMinOrderByAggregateInput
    _sum?: CargoSumOrderByAggregateInput
  }

  export type CargoScalarWhereWithAggregatesInput = {
    AND?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    OR?: CargoScalarWhereWithAggregatesInput[]
    NOT?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cargo"> | number
    cargo?: StringWithAggregatesFilter<"Cargo"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    cargoId?: IntFilter<"Usuario"> | number
    cargo?: XOR<CargoScalarRelationFilter, CargoWhereInput>
    relatoriosDiarios?: RelatorioExpedicaoDiariaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    cargoId?: SortOrder
    cargo?: CargoOrderByWithRelationInput
    relatoriosDiarios?: RelatorioExpedicaoDiariaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    cargoId?: IntFilter<"Usuario"> | number
    cargo?: XOR<CargoScalarRelationFilter, CargoWhereInput>
    relatoriosDiarios?: RelatorioExpedicaoDiariaListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    cargoId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    cargoId?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    CPF?: StringFilter<"Cliente"> | string
    CNPJ?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    codigoIdentificacao?: StringFilter<"Cliente"> | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaListRelationFilter
    relatoriosMensais?: RelatorioExpedicaoMensalListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    CPF?: SortOrder
    CNPJ?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    codigoIdentificacao?: SortOrder
    relatoriosDiarios?: RelatorioExpedicaoDiariaOrderByRelationAggregateInput
    relatoriosMensais?: RelatorioExpedicaoMensalOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    CPF?: StringFilter<"Cliente"> | string
    CNPJ?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    codigoIdentificacao?: StringFilter<"Cliente"> | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaListRelationFilter
    relatoriosMensais?: RelatorioExpedicaoMensalListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    CPF?: SortOrder
    CNPJ?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    codigoIdentificacao?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    CPF?: StringWithAggregatesFilter<"Cliente"> | string
    CNPJ?: StringWithAggregatesFilter<"Cliente"> | string
    endereco?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    codigoIdentificacao?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    undMedida?: StringFilter<"Produto"> | string
    quantidade?: DecimalFilter<"Produto"> | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFilter<"Produto"> | Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaListRelationFilter
    relatoriosMensais?: RelatorioExpedicaoMensalListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    undMedida?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrder
    relatoriosDiarios?: RelatorioExpedicaoDiariaOrderByRelationAggregateInput
    relatoriosMensais?: RelatorioExpedicaoMensalOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    undMedida?: StringFilter<"Produto"> | string
    quantidade?: DecimalFilter<"Produto"> | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFilter<"Produto"> | Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaListRelationFilter
    relatoriosMensais?: RelatorioExpedicaoMensalListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    undMedida?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    undMedida?: StringWithAggregatesFilter<"Produto"> | string
    quantidade?: DecimalWithAggregatesFilter<"Produto"> | Decimal | DecimalJsLike | number | string
    validade?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
  }

  export type VeiculoWhereInput = {
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    id?: IntFilter<"Veiculo"> | number
    modelo?: StringFilter<"Veiculo"> | string
    placa?: StringFilter<"Veiculo"> | string
    categoria?: StringFilter<"Veiculo"> | string
    marca?: StringFilter<"Veiculo"> | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaListRelationFilter
  }

  export type VeiculoOrderByWithRelationInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    categoria?: SortOrder
    marca?: SortOrder
    relatoriosDiarios?: RelatorioExpedicaoDiariaOrderByRelationAggregateInput
  }

  export type VeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    modelo?: StringFilter<"Veiculo"> | string
    placa?: StringFilter<"Veiculo"> | string
    categoria?: StringFilter<"Veiculo"> | string
    marca?: StringFilter<"Veiculo"> | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaListRelationFilter
  }, "id">

  export type VeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    categoria?: SortOrder
    marca?: SortOrder
    _count?: VeiculoCountOrderByAggregateInput
    _avg?: VeiculoAvgOrderByAggregateInput
    _max?: VeiculoMaxOrderByAggregateInput
    _min?: VeiculoMinOrderByAggregateInput
    _sum?: VeiculoSumOrderByAggregateInput
  }

  export type VeiculoScalarWhereWithAggregatesInput = {
    AND?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    OR?: VeiculoScalarWhereWithAggregatesInput[]
    NOT?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Veiculo"> | number
    modelo?: StringWithAggregatesFilter<"Veiculo"> | string
    placa?: StringWithAggregatesFilter<"Veiculo"> | string
    categoria?: StringWithAggregatesFilter<"Veiculo"> | string
    marca?: StringWithAggregatesFilter<"Veiculo"> | string
  }

  export type RelatorioExpedicaoDiariaWhereInput = {
    AND?: RelatorioExpedicaoDiariaWhereInput | RelatorioExpedicaoDiariaWhereInput[]
    OR?: RelatorioExpedicaoDiariaWhereInput[]
    NOT?: RelatorioExpedicaoDiariaWhereInput | RelatorioExpedicaoDiariaWhereInput[]
    id?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    quantidade?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    notaFiscal?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    dataProducao?: DateTimeFilter<"RelatorioExpedicaoDiaria"> | Date | string
    destino?: StringFilter<"RelatorioExpedicaoDiaria"> | string
    temperatura?: DecimalFilter<"RelatorioExpedicaoDiaria"> | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFilter<"RelatorioExpedicaoDiaria"> | boolean
    entregador?: StringFilter<"RelatorioExpedicaoDiaria"> | string
    usuarioId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    veiculoId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    produtoId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    clienteId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    veiculo?: XOR<VeiculoScalarRelationFilter, VeiculoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type RelatorioExpedicaoDiariaOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    notaFiscal?: SortOrder
    dataProducao?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    condicaoSanitaria?: SortOrder
    entregador?: SortOrder
    usuarioId?: SortOrder
    veiculoId?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    veiculo?: VeiculoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type RelatorioExpedicaoDiariaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RelatorioExpedicaoDiariaWhereInput | RelatorioExpedicaoDiariaWhereInput[]
    OR?: RelatorioExpedicaoDiariaWhereInput[]
    NOT?: RelatorioExpedicaoDiariaWhereInput | RelatorioExpedicaoDiariaWhereInput[]
    quantidade?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    notaFiscal?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    dataProducao?: DateTimeFilter<"RelatorioExpedicaoDiaria"> | Date | string
    destino?: StringFilter<"RelatorioExpedicaoDiaria"> | string
    temperatura?: DecimalFilter<"RelatorioExpedicaoDiaria"> | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFilter<"RelatorioExpedicaoDiaria"> | boolean
    entregador?: StringFilter<"RelatorioExpedicaoDiaria"> | string
    usuarioId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    veiculoId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    produtoId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    clienteId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    veiculo?: XOR<VeiculoScalarRelationFilter, VeiculoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type RelatorioExpedicaoDiariaOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    notaFiscal?: SortOrder
    dataProducao?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    condicaoSanitaria?: SortOrder
    entregador?: SortOrder
    usuarioId?: SortOrder
    veiculoId?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
    _count?: RelatorioExpedicaoDiariaCountOrderByAggregateInput
    _avg?: RelatorioExpedicaoDiariaAvgOrderByAggregateInput
    _max?: RelatorioExpedicaoDiariaMaxOrderByAggregateInput
    _min?: RelatorioExpedicaoDiariaMinOrderByAggregateInput
    _sum?: RelatorioExpedicaoDiariaSumOrderByAggregateInput
  }

  export type RelatorioExpedicaoDiariaScalarWhereWithAggregatesInput = {
    AND?: RelatorioExpedicaoDiariaScalarWhereWithAggregatesInput | RelatorioExpedicaoDiariaScalarWhereWithAggregatesInput[]
    OR?: RelatorioExpedicaoDiariaScalarWhereWithAggregatesInput[]
    NOT?: RelatorioExpedicaoDiariaScalarWhereWithAggregatesInput | RelatorioExpedicaoDiariaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | number
    quantidade?: IntWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | number
    notaFiscal?: IntWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | number
    dataProducao?: DateTimeWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | Date | string
    destino?: StringWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | string
    temperatura?: DecimalWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | boolean
    entregador?: StringWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | string
    usuarioId?: IntWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | number
    veiculoId?: IntWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | number
    produtoId?: IntWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | number
    clienteId?: IntWithAggregatesFilter<"RelatorioExpedicaoDiaria"> | number
  }

  export type RelatorioExpedicaoMensalWhereInput = {
    AND?: RelatorioExpedicaoMensalWhereInput | RelatorioExpedicaoMensalWhereInput[]
    OR?: RelatorioExpedicaoMensalWhereInput[]
    NOT?: RelatorioExpedicaoMensalWhereInput | RelatorioExpedicaoMensalWhereInput[]
    id?: IntFilter<"RelatorioExpedicaoMensal"> | number
    quantidade?: DecimalFilter<"RelatorioExpedicaoMensal"> | Decimal | DecimalJsLike | number | string
    destino?: StringFilter<"RelatorioExpedicaoMensal"> | string
    temperatura?: DecimalFilter<"RelatorioExpedicaoMensal"> | Decimal | DecimalJsLike | number | string
    entregador?: StringFilter<"RelatorioExpedicaoMensal"> | string
    dataProducao?: DateTimeFilter<"RelatorioExpedicaoMensal"> | Date | string
    dataExpedicao?: DateTimeFilter<"RelatorioExpedicaoMensal"> | Date | string
    produtoId?: IntFilter<"RelatorioExpedicaoMensal"> | number
    clienteId?: IntFilter<"RelatorioExpedicaoMensal"> | number
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type RelatorioExpedicaoMensalOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    entregador?: SortOrder
    dataProducao?: SortOrder
    dataExpedicao?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type RelatorioExpedicaoMensalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RelatorioExpedicaoMensalWhereInput | RelatorioExpedicaoMensalWhereInput[]
    OR?: RelatorioExpedicaoMensalWhereInput[]
    NOT?: RelatorioExpedicaoMensalWhereInput | RelatorioExpedicaoMensalWhereInput[]
    quantidade?: DecimalFilter<"RelatorioExpedicaoMensal"> | Decimal | DecimalJsLike | number | string
    destino?: StringFilter<"RelatorioExpedicaoMensal"> | string
    temperatura?: DecimalFilter<"RelatorioExpedicaoMensal"> | Decimal | DecimalJsLike | number | string
    entregador?: StringFilter<"RelatorioExpedicaoMensal"> | string
    dataProducao?: DateTimeFilter<"RelatorioExpedicaoMensal"> | Date | string
    dataExpedicao?: DateTimeFilter<"RelatorioExpedicaoMensal"> | Date | string
    produtoId?: IntFilter<"RelatorioExpedicaoMensal"> | number
    clienteId?: IntFilter<"RelatorioExpedicaoMensal"> | number
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type RelatorioExpedicaoMensalOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    entregador?: SortOrder
    dataProducao?: SortOrder
    dataExpedicao?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
    _count?: RelatorioExpedicaoMensalCountOrderByAggregateInput
    _avg?: RelatorioExpedicaoMensalAvgOrderByAggregateInput
    _max?: RelatorioExpedicaoMensalMaxOrderByAggregateInput
    _min?: RelatorioExpedicaoMensalMinOrderByAggregateInput
    _sum?: RelatorioExpedicaoMensalSumOrderByAggregateInput
  }

  export type RelatorioExpedicaoMensalScalarWhereWithAggregatesInput = {
    AND?: RelatorioExpedicaoMensalScalarWhereWithAggregatesInput | RelatorioExpedicaoMensalScalarWhereWithAggregatesInput[]
    OR?: RelatorioExpedicaoMensalScalarWhereWithAggregatesInput[]
    NOT?: RelatorioExpedicaoMensalScalarWhereWithAggregatesInput | RelatorioExpedicaoMensalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RelatorioExpedicaoMensal"> | number
    quantidade?: DecimalWithAggregatesFilter<"RelatorioExpedicaoMensal"> | Decimal | DecimalJsLike | number | string
    destino?: StringWithAggregatesFilter<"RelatorioExpedicaoMensal"> | string
    temperatura?: DecimalWithAggregatesFilter<"RelatorioExpedicaoMensal"> | Decimal | DecimalJsLike | number | string
    entregador?: StringWithAggregatesFilter<"RelatorioExpedicaoMensal"> | string
    dataProducao?: DateTimeWithAggregatesFilter<"RelatorioExpedicaoMensal"> | Date | string
    dataExpedicao?: DateTimeWithAggregatesFilter<"RelatorioExpedicaoMensal"> | Date | string
    produtoId?: IntWithAggregatesFilter<"RelatorioExpedicaoMensal"> | number
    clienteId?: IntWithAggregatesFilter<"RelatorioExpedicaoMensal"> | number
  }

  export type CargoCreateInput = {
    cargo: string
    usuarios?: UsuarioCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateInput = {
    id?: number
    cargo: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoUpdateInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoCreateManyInput = {
    id?: number
    cargo: string
  }

  export type CargoUpdateManyMutationInput = {
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type CargoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    nome: string
    username: string
    senha: string
    cargo: CargoCreateNestedOneWithoutUsuariosInput
    relatoriosDiarios?: RelatorioExpedicaoDiariaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    username: string
    senha: string
    cargoId: number
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: CargoUpdateOneRequiredWithoutUsuariosNestedInput
    relatoriosDiarios?: RelatorioExpedicaoDiariaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargoId?: IntFieldUpdateOperationsInput | number
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    username: string
    senha: string
    cargoId: number
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargoId?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateInput = {
    nome: string
    CPF: string
    CNPJ: string
    endereco: string
    telefone: string
    codigoIdentificacao: string
    relatoriosDiarios?: RelatorioExpedicaoDiariaCreateNestedManyWithoutClienteInput
    relatoriosMensais?: RelatorioExpedicaoMensalCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    CPF: string
    CNPJ: string
    endereco: string
    telefone: string
    codigoIdentificacao: string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutClienteInput
    relatoriosMensais?: RelatorioExpedicaoMensalUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    CNPJ?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUpdateManyWithoutClienteNestedInput
    relatoriosMensais?: RelatorioExpedicaoMensalUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    CNPJ?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutClienteNestedInput
    relatoriosMensais?: RelatorioExpedicaoMensalUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    CPF: string
    CNPJ: string
    endereco: string
    telefone: string
    codigoIdentificacao: string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    CNPJ?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    CNPJ?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateInput = {
    nome: string
    undMedida: string
    quantidade: Decimal | DecimalJsLike | number | string
    validade: Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaCreateNestedManyWithoutProdutoInput
    relatoriosMensais?: RelatorioExpedicaoMensalCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    undMedida: string
    quantidade: Decimal | DecimalJsLike | number | string
    validade: Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutProdutoInput
    relatoriosMensais?: RelatorioExpedicaoMensalUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    undMedida?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFieldUpdateOperationsInput | Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUpdateManyWithoutProdutoNestedInput
    relatoriosMensais?: RelatorioExpedicaoMensalUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    undMedida?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFieldUpdateOperationsInput | Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutProdutoNestedInput
    relatoriosMensais?: RelatorioExpedicaoMensalUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    undMedida: string
    quantidade: Decimal | DecimalJsLike | number | string
    validade: Date | string
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    undMedida?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    undMedida?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeiculoCreateInput = {
    modelo: string
    placa: string
    categoria: string
    marca: string
    relatoriosDiarios?: RelatorioExpedicaoDiariaCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateInput = {
    id?: number
    modelo: string
    placa: string
    categoria: string
    marca: string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUpdateInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoCreateManyInput = {
    id?: number
    modelo: string
    placa: string
    categoria: string
    marca: string
  }

  export type VeiculoUpdateManyMutationInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioExpedicaoDiariaCreateInput = {
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuario: UsuarioCreateNestedOneWithoutRelatoriosDiariosInput
    veiculo: VeiculoCreateNestedOneWithoutRelatoriosDiariosInput
    produto: ProdutoCreateNestedOneWithoutRelatoriosDiariosInput
    cliente: ClienteCreateNestedOneWithoutRelatoriosDiariosInput
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    veiculoId: number
    produtoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoDiariaUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoDiariaCreateManyInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    veiculoId: number
    produtoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoDiariaUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoMensalCreateInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    produto: ProdutoCreateNestedOneWithoutRelatoriosMensaisInput
    cliente: ClienteCreateNestedOneWithoutRelatoriosMensaisInput
  }

  export type RelatorioExpedicaoMensalUncheckedCreateInput = {
    id?: number
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    produtoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoMensalUpdateInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutRelatoriosMensaisNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRelatoriosMensaisNestedInput
  }

  export type RelatorioExpedicaoMensalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoMensalCreateManyInput = {
    id?: number
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    produtoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoMensalUpdateManyMutationInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioExpedicaoMensalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CargoCountOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
  }

  export type CargoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CargoMaxOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
  }

  export type CargoMinOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
  }

  export type CargoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CargoScalarRelationFilter = {
    is?: CargoWhereInput
    isNot?: CargoWhereInput
  }

  export type RelatorioExpedicaoDiariaListRelationFilter = {
    every?: RelatorioExpedicaoDiariaWhereInput
    some?: RelatorioExpedicaoDiariaWhereInput
    none?: RelatorioExpedicaoDiariaWhereInput
  }

  export type RelatorioExpedicaoDiariaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    cargoId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    cargoId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    cargoId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    cargoId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    cargoId?: SortOrder
  }

  export type RelatorioExpedicaoMensalListRelationFilter = {
    every?: RelatorioExpedicaoMensalWhereInput
    some?: RelatorioExpedicaoMensalWhereInput
    none?: RelatorioExpedicaoMensalWhereInput
  }

  export type RelatorioExpedicaoMensalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    CPF?: SortOrder
    CNPJ?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    codigoIdentificacao?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    CPF?: SortOrder
    CNPJ?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    codigoIdentificacao?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    CPF?: SortOrder
    CNPJ?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    codigoIdentificacao?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    undMedida?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    undMedida?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    undMedida?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type VeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    categoria?: SortOrder
    marca?: SortOrder
  }

  export type VeiculoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    categoria?: SortOrder
    marca?: SortOrder
  }

  export type VeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    categoria?: SortOrder
    marca?: SortOrder
  }

  export type VeiculoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type VeiculoScalarRelationFilter = {
    is?: VeiculoWhereInput
    isNot?: VeiculoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type RelatorioExpedicaoDiariaCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    notaFiscal?: SortOrder
    dataProducao?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    condicaoSanitaria?: SortOrder
    entregador?: SortOrder
    usuarioId?: SortOrder
    veiculoId?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type RelatorioExpedicaoDiariaAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    notaFiscal?: SortOrder
    temperatura?: SortOrder
    usuarioId?: SortOrder
    veiculoId?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type RelatorioExpedicaoDiariaMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    notaFiscal?: SortOrder
    dataProducao?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    condicaoSanitaria?: SortOrder
    entregador?: SortOrder
    usuarioId?: SortOrder
    veiculoId?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type RelatorioExpedicaoDiariaMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    notaFiscal?: SortOrder
    dataProducao?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    condicaoSanitaria?: SortOrder
    entregador?: SortOrder
    usuarioId?: SortOrder
    veiculoId?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type RelatorioExpedicaoDiariaSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    notaFiscal?: SortOrder
    temperatura?: SortOrder
    usuarioId?: SortOrder
    veiculoId?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RelatorioExpedicaoMensalCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    entregador?: SortOrder
    dataProducao?: SortOrder
    dataExpedicao?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type RelatorioExpedicaoMensalAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    temperatura?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type RelatorioExpedicaoMensalMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    entregador?: SortOrder
    dataProducao?: SortOrder
    dataExpedicao?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type RelatorioExpedicaoMensalMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    destino?: SortOrder
    temperatura?: SortOrder
    entregador?: SortOrder
    dataProducao?: SortOrder
    dataExpedicao?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type RelatorioExpedicaoMensalSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    temperatura?: SortOrder
    produtoId?: SortOrder
    clienteId?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutCargoInput = {
    create?: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput> | UsuarioCreateWithoutCargoInput[] | UsuarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargoInput | UsuarioCreateOrConnectWithoutCargoInput[]
    createMany?: UsuarioCreateManyCargoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutCargoInput = {
    create?: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput> | UsuarioCreateWithoutCargoInput[] | UsuarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargoInput | UsuarioCreateOrConnectWithoutCargoInput[]
    createMany?: UsuarioCreateManyCargoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsuarioUpdateManyWithoutCargoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput> | UsuarioCreateWithoutCargoInput[] | UsuarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargoInput | UsuarioCreateOrConnectWithoutCargoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutCargoInput | UsuarioUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: UsuarioCreateManyCargoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutCargoInput | UsuarioUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutCargoInput | UsuarioUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutCargoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput> | UsuarioCreateWithoutCargoInput[] | UsuarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutCargoInput | UsuarioCreateOrConnectWithoutCargoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutCargoInput | UsuarioUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: UsuarioCreateManyCargoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutCargoInput | UsuarioUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutCargoInput | UsuarioUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type CargoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<CargoCreateWithoutUsuariosInput, CargoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: CargoCreateOrConnectWithoutUsuariosInput
    connect?: CargoWhereUniqueInput
  }

  export type RelatorioExpedicaoDiariaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutUsuarioInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput> | RelatorioExpedicaoDiariaCreateWithoutUsuarioInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyUsuarioInputEnvelope
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutUsuarioInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput> | RelatorioExpedicaoDiariaCreateWithoutUsuarioInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyUsuarioInputEnvelope
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
  }

  export type CargoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<CargoCreateWithoutUsuariosInput, CargoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: CargoCreateOrConnectWithoutUsuariosInput
    upsert?: CargoUpsertWithoutUsuariosInput
    connect?: CargoWhereUniqueInput
    update?: XOR<XOR<CargoUpdateToOneWithWhereWithoutUsuariosInput, CargoUpdateWithoutUsuariosInput>, CargoUncheckedUpdateWithoutUsuariosInput>
  }

  export type RelatorioExpedicaoDiariaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutUsuarioInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput> | RelatorioExpedicaoDiariaCreateWithoutUsuarioInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutUsuarioInput | RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyUsuarioInputEnvelope
    set?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    delete?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    update?: RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutUsuarioInput | RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutUsuarioInput | RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutUsuarioInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput> | RelatorioExpedicaoDiariaCreateWithoutUsuarioInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutUsuarioInput | RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyUsuarioInputEnvelope
    set?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    delete?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    update?: RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutUsuarioInput | RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutUsuarioInput | RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
  }

  export type RelatorioExpedicaoDiariaCreateNestedManyWithoutClienteInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutClienteInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput> | RelatorioExpedicaoDiariaCreateWithoutClienteInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyClienteInputEnvelope
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
  }

  export type RelatorioExpedicaoMensalCreateNestedManyWithoutClienteInput = {
    create?: XOR<RelatorioExpedicaoMensalCreateWithoutClienteInput, RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput> | RelatorioExpedicaoMensalCreateWithoutClienteInput[] | RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput | RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput[]
    createMany?: RelatorioExpedicaoMensalCreateManyClienteInputEnvelope
    connect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutClienteInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput> | RelatorioExpedicaoDiariaCreateWithoutClienteInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyClienteInputEnvelope
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
  }

  export type RelatorioExpedicaoMensalUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<RelatorioExpedicaoMensalCreateWithoutClienteInput, RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput> | RelatorioExpedicaoMensalCreateWithoutClienteInput[] | RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput | RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput[]
    createMany?: RelatorioExpedicaoMensalCreateManyClienteInputEnvelope
    connect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
  }

  export type RelatorioExpedicaoDiariaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutClienteInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput> | RelatorioExpedicaoDiariaCreateWithoutClienteInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput[]
    upsert?: RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutClienteInput | RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyClienteInputEnvelope
    set?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    delete?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    update?: RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutClienteInput | RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutClienteInput | RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
  }

  export type RelatorioExpedicaoMensalUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RelatorioExpedicaoMensalCreateWithoutClienteInput, RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput> | RelatorioExpedicaoMensalCreateWithoutClienteInput[] | RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput | RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput[]
    upsert?: RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutClienteInput | RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RelatorioExpedicaoMensalCreateManyClienteInputEnvelope
    set?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    delete?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    connect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    update?: RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutClienteInput | RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RelatorioExpedicaoMensalUpdateManyWithWhereWithoutClienteInput | RelatorioExpedicaoMensalUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RelatorioExpedicaoMensalScalarWhereInput | RelatorioExpedicaoMensalScalarWhereInput[]
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutClienteInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput> | RelatorioExpedicaoDiariaCreateWithoutClienteInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput[]
    upsert?: RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutClienteInput | RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyClienteInputEnvelope
    set?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    delete?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    update?: RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutClienteInput | RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutClienteInput | RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
  }

  export type RelatorioExpedicaoMensalUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RelatorioExpedicaoMensalCreateWithoutClienteInput, RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput> | RelatorioExpedicaoMensalCreateWithoutClienteInput[] | RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput | RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput[]
    upsert?: RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutClienteInput | RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RelatorioExpedicaoMensalCreateManyClienteInputEnvelope
    set?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    delete?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    connect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    update?: RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutClienteInput | RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RelatorioExpedicaoMensalUpdateManyWithWhereWithoutClienteInput | RelatorioExpedicaoMensalUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RelatorioExpedicaoMensalScalarWhereInput | RelatorioExpedicaoMensalScalarWhereInput[]
  }

  export type RelatorioExpedicaoDiariaCreateNestedManyWithoutProdutoInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutProdutoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput> | RelatorioExpedicaoDiariaCreateWithoutProdutoInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyProdutoInputEnvelope
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
  }

  export type RelatorioExpedicaoMensalCreateNestedManyWithoutProdutoInput = {
    create?: XOR<RelatorioExpedicaoMensalCreateWithoutProdutoInput, RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput> | RelatorioExpedicaoMensalCreateWithoutProdutoInput[] | RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput | RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput[]
    createMany?: RelatorioExpedicaoMensalCreateManyProdutoInputEnvelope
    connect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutProdutoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput> | RelatorioExpedicaoDiariaCreateWithoutProdutoInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyProdutoInputEnvelope
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
  }

  export type RelatorioExpedicaoMensalUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<RelatorioExpedicaoMensalCreateWithoutProdutoInput, RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput> | RelatorioExpedicaoMensalCreateWithoutProdutoInput[] | RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput | RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput[]
    createMany?: RelatorioExpedicaoMensalCreateManyProdutoInputEnvelope
    connect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RelatorioExpedicaoDiariaUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutProdutoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput> | RelatorioExpedicaoDiariaCreateWithoutProdutoInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput[]
    upsert?: RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutProdutoInput | RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyProdutoInputEnvelope
    set?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    delete?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    update?: RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutProdutoInput | RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutProdutoInput | RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
  }

  export type RelatorioExpedicaoMensalUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<RelatorioExpedicaoMensalCreateWithoutProdutoInput, RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput> | RelatorioExpedicaoMensalCreateWithoutProdutoInput[] | RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput | RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput[]
    upsert?: RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutProdutoInput | RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: RelatorioExpedicaoMensalCreateManyProdutoInputEnvelope
    set?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    delete?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    connect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    update?: RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutProdutoInput | RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: RelatorioExpedicaoMensalUpdateManyWithWhereWithoutProdutoInput | RelatorioExpedicaoMensalUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: RelatorioExpedicaoMensalScalarWhereInput | RelatorioExpedicaoMensalScalarWhereInput[]
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutProdutoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput> | RelatorioExpedicaoDiariaCreateWithoutProdutoInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput[]
    upsert?: RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutProdutoInput | RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyProdutoInputEnvelope
    set?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    delete?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    update?: RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutProdutoInput | RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutProdutoInput | RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
  }

  export type RelatorioExpedicaoMensalUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<RelatorioExpedicaoMensalCreateWithoutProdutoInput, RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput> | RelatorioExpedicaoMensalCreateWithoutProdutoInput[] | RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput | RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput[]
    upsert?: RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutProdutoInput | RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: RelatorioExpedicaoMensalCreateManyProdutoInputEnvelope
    set?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    delete?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    connect?: RelatorioExpedicaoMensalWhereUniqueInput | RelatorioExpedicaoMensalWhereUniqueInput[]
    update?: RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutProdutoInput | RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: RelatorioExpedicaoMensalUpdateManyWithWhereWithoutProdutoInput | RelatorioExpedicaoMensalUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: RelatorioExpedicaoMensalScalarWhereInput | RelatorioExpedicaoMensalScalarWhereInput[]
  }

  export type RelatorioExpedicaoDiariaCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutVeiculoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput> | RelatorioExpedicaoDiariaCreateWithoutVeiculoInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyVeiculoInputEnvelope
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutVeiculoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput> | RelatorioExpedicaoDiariaCreateWithoutVeiculoInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyVeiculoInputEnvelope
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
  }

  export type RelatorioExpedicaoDiariaUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutVeiculoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput> | RelatorioExpedicaoDiariaCreateWithoutVeiculoInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput[]
    upsert?: RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutVeiculoInput | RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyVeiculoInputEnvelope
    set?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    delete?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    update?: RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutVeiculoInput | RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutVeiculoInput | RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<RelatorioExpedicaoDiariaCreateWithoutVeiculoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput> | RelatorioExpedicaoDiariaCreateWithoutVeiculoInput[] | RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput | RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput[]
    upsert?: RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutVeiculoInput | RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: RelatorioExpedicaoDiariaCreateManyVeiculoInputEnvelope
    set?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    disconnect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    delete?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    connect?: RelatorioExpedicaoDiariaWhereUniqueInput | RelatorioExpedicaoDiariaWhereUniqueInput[]
    update?: RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutVeiculoInput | RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutVeiculoInput | RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRelatoriosDiariosInput = {
    create?: XOR<UsuarioCreateWithoutRelatoriosDiariosInput, UsuarioUncheckedCreateWithoutRelatoriosDiariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRelatoriosDiariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VeiculoCreateNestedOneWithoutRelatoriosDiariosInput = {
    create?: XOR<VeiculoCreateWithoutRelatoriosDiariosInput, VeiculoUncheckedCreateWithoutRelatoriosDiariosInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutRelatoriosDiariosInput
    connect?: VeiculoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutRelatoriosDiariosInput = {
    create?: XOR<ProdutoCreateWithoutRelatoriosDiariosInput, ProdutoUncheckedCreateWithoutRelatoriosDiariosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutRelatoriosDiariosInput
    connect?: ProdutoWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutRelatoriosDiariosInput = {
    create?: XOR<ClienteCreateWithoutRelatoriosDiariosInput, ClienteUncheckedCreateWithoutRelatoriosDiariosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRelatoriosDiariosInput
    connect?: ClienteWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutRelatoriosDiariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutRelatoriosDiariosInput, UsuarioUncheckedCreateWithoutRelatoriosDiariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRelatoriosDiariosInput
    upsert?: UsuarioUpsertWithoutRelatoriosDiariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRelatoriosDiariosInput, UsuarioUpdateWithoutRelatoriosDiariosInput>, UsuarioUncheckedUpdateWithoutRelatoriosDiariosInput>
  }

  export type VeiculoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput = {
    create?: XOR<VeiculoCreateWithoutRelatoriosDiariosInput, VeiculoUncheckedCreateWithoutRelatoriosDiariosInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutRelatoriosDiariosInput
    upsert?: VeiculoUpsertWithoutRelatoriosDiariosInput
    connect?: VeiculoWhereUniqueInput
    update?: XOR<XOR<VeiculoUpdateToOneWithWhereWithoutRelatoriosDiariosInput, VeiculoUpdateWithoutRelatoriosDiariosInput>, VeiculoUncheckedUpdateWithoutRelatoriosDiariosInput>
  }

  export type ProdutoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput = {
    create?: XOR<ProdutoCreateWithoutRelatoriosDiariosInput, ProdutoUncheckedCreateWithoutRelatoriosDiariosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutRelatoriosDiariosInput
    upsert?: ProdutoUpsertWithoutRelatoriosDiariosInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutRelatoriosDiariosInput, ProdutoUpdateWithoutRelatoriosDiariosInput>, ProdutoUncheckedUpdateWithoutRelatoriosDiariosInput>
  }

  export type ClienteUpdateOneRequiredWithoutRelatoriosDiariosNestedInput = {
    create?: XOR<ClienteCreateWithoutRelatoriosDiariosInput, ClienteUncheckedCreateWithoutRelatoriosDiariosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRelatoriosDiariosInput
    upsert?: ClienteUpsertWithoutRelatoriosDiariosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutRelatoriosDiariosInput, ClienteUpdateWithoutRelatoriosDiariosInput>, ClienteUncheckedUpdateWithoutRelatoriosDiariosInput>
  }

  export type ProdutoCreateNestedOneWithoutRelatoriosMensaisInput = {
    create?: XOR<ProdutoCreateWithoutRelatoriosMensaisInput, ProdutoUncheckedCreateWithoutRelatoriosMensaisInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutRelatoriosMensaisInput
    connect?: ProdutoWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutRelatoriosMensaisInput = {
    create?: XOR<ClienteCreateWithoutRelatoriosMensaisInput, ClienteUncheckedCreateWithoutRelatoriosMensaisInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRelatoriosMensaisInput
    connect?: ClienteWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutRelatoriosMensaisNestedInput = {
    create?: XOR<ProdutoCreateWithoutRelatoriosMensaisInput, ProdutoUncheckedCreateWithoutRelatoriosMensaisInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutRelatoriosMensaisInput
    upsert?: ProdutoUpsertWithoutRelatoriosMensaisInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutRelatoriosMensaisInput, ProdutoUpdateWithoutRelatoriosMensaisInput>, ProdutoUncheckedUpdateWithoutRelatoriosMensaisInput>
  }

  export type ClienteUpdateOneRequiredWithoutRelatoriosMensaisNestedInput = {
    create?: XOR<ClienteCreateWithoutRelatoriosMensaisInput, ClienteUncheckedCreateWithoutRelatoriosMensaisInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRelatoriosMensaisInput
    upsert?: ClienteUpsertWithoutRelatoriosMensaisInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutRelatoriosMensaisInput, ClienteUpdateWithoutRelatoriosMensaisInput>, ClienteUncheckedUpdateWithoutRelatoriosMensaisInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutCargoInput = {
    nome: string
    username: string
    senha: string
    relatoriosDiarios?: RelatorioExpedicaoDiariaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCargoInput = {
    id?: number
    nome: string
    username: string
    senha: string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCargoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput>
  }

  export type UsuarioCreateManyCargoInputEnvelope = {
    data: UsuarioCreateManyCargoInput | UsuarioCreateManyCargoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutCargoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutCargoInput, UsuarioUncheckedUpdateWithoutCargoInput>
    create: XOR<UsuarioCreateWithoutCargoInput, UsuarioUncheckedCreateWithoutCargoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutCargoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutCargoInput, UsuarioUncheckedUpdateWithoutCargoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutCargoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutCargoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    cargoId?: IntFilter<"Usuario"> | number
  }

  export type CargoCreateWithoutUsuariosInput = {
    cargo: string
  }

  export type CargoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    cargo: string
  }

  export type CargoCreateOrConnectWithoutUsuariosInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutUsuariosInput, CargoUncheckedCreateWithoutUsuariosInput>
  }

  export type RelatorioExpedicaoDiariaCreateWithoutUsuarioInput = {
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    veiculo: VeiculoCreateNestedOneWithoutRelatoriosDiariosInput
    produto: ProdutoCreateNestedOneWithoutRelatoriosDiariosInput
    cliente: ClienteCreateNestedOneWithoutRelatoriosDiariosInput
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    veiculoId: number
    produtoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoDiariaCreateOrConnectWithoutUsuarioInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    create: XOR<RelatorioExpedicaoDiariaCreateWithoutUsuarioInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput>
  }

  export type RelatorioExpedicaoDiariaCreateManyUsuarioInputEnvelope = {
    data: RelatorioExpedicaoDiariaCreateManyUsuarioInput | RelatorioExpedicaoDiariaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CargoUpsertWithoutUsuariosInput = {
    update: XOR<CargoUpdateWithoutUsuariosInput, CargoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<CargoCreateWithoutUsuariosInput, CargoUncheckedCreateWithoutUsuariosInput>
    where?: CargoWhereInput
  }

  export type CargoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: CargoWhereInput
    data: XOR<CargoUpdateWithoutUsuariosInput, CargoUncheckedUpdateWithoutUsuariosInput>
  }

  export type CargoUpdateWithoutUsuariosInput = {
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type CargoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    update: XOR<RelatorioExpedicaoDiariaUpdateWithoutUsuarioInput, RelatorioExpedicaoDiariaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RelatorioExpedicaoDiariaCreateWithoutUsuarioInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutUsuarioInput>
  }

  export type RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    data: XOR<RelatorioExpedicaoDiariaUpdateWithoutUsuarioInput, RelatorioExpedicaoDiariaUncheckedUpdateWithoutUsuarioInput>
  }

  export type RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutUsuarioInput = {
    where: RelatorioExpedicaoDiariaScalarWhereInput
    data: XOR<RelatorioExpedicaoDiariaUpdateManyMutationInput, RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RelatorioExpedicaoDiariaScalarWhereInput = {
    AND?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
    OR?: RelatorioExpedicaoDiariaScalarWhereInput[]
    NOT?: RelatorioExpedicaoDiariaScalarWhereInput | RelatorioExpedicaoDiariaScalarWhereInput[]
    id?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    quantidade?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    notaFiscal?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    dataProducao?: DateTimeFilter<"RelatorioExpedicaoDiaria"> | Date | string
    destino?: StringFilter<"RelatorioExpedicaoDiaria"> | string
    temperatura?: DecimalFilter<"RelatorioExpedicaoDiaria"> | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFilter<"RelatorioExpedicaoDiaria"> | boolean
    entregador?: StringFilter<"RelatorioExpedicaoDiaria"> | string
    usuarioId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    veiculoId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    produtoId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
    clienteId?: IntFilter<"RelatorioExpedicaoDiaria"> | number
  }

  export type RelatorioExpedicaoDiariaCreateWithoutClienteInput = {
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuario: UsuarioCreateNestedOneWithoutRelatoriosDiariosInput
    veiculo: VeiculoCreateNestedOneWithoutRelatoriosDiariosInput
    produto: ProdutoCreateNestedOneWithoutRelatoriosDiariosInput
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    veiculoId: number
    produtoId: number
  }

  export type RelatorioExpedicaoDiariaCreateOrConnectWithoutClienteInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    create: XOR<RelatorioExpedicaoDiariaCreateWithoutClienteInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput>
  }

  export type RelatorioExpedicaoDiariaCreateManyClienteInputEnvelope = {
    data: RelatorioExpedicaoDiariaCreateManyClienteInput | RelatorioExpedicaoDiariaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type RelatorioExpedicaoMensalCreateWithoutClienteInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    produto: ProdutoCreateNestedOneWithoutRelatoriosMensaisInput
  }

  export type RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput = {
    id?: number
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    produtoId: number
  }

  export type RelatorioExpedicaoMensalCreateOrConnectWithoutClienteInput = {
    where: RelatorioExpedicaoMensalWhereUniqueInput
    create: XOR<RelatorioExpedicaoMensalCreateWithoutClienteInput, RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput>
  }

  export type RelatorioExpedicaoMensalCreateManyClienteInputEnvelope = {
    data: RelatorioExpedicaoMensalCreateManyClienteInput | RelatorioExpedicaoMensalCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutClienteInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    update: XOR<RelatorioExpedicaoDiariaUpdateWithoutClienteInput, RelatorioExpedicaoDiariaUncheckedUpdateWithoutClienteInput>
    create: XOR<RelatorioExpedicaoDiariaCreateWithoutClienteInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutClienteInput>
  }

  export type RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutClienteInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    data: XOR<RelatorioExpedicaoDiariaUpdateWithoutClienteInput, RelatorioExpedicaoDiariaUncheckedUpdateWithoutClienteInput>
  }

  export type RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutClienteInput = {
    where: RelatorioExpedicaoDiariaScalarWhereInput
    data: XOR<RelatorioExpedicaoDiariaUpdateManyMutationInput, RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutClienteInput>
  }

  export type RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutClienteInput = {
    where: RelatorioExpedicaoMensalWhereUniqueInput
    update: XOR<RelatorioExpedicaoMensalUpdateWithoutClienteInput, RelatorioExpedicaoMensalUncheckedUpdateWithoutClienteInput>
    create: XOR<RelatorioExpedicaoMensalCreateWithoutClienteInput, RelatorioExpedicaoMensalUncheckedCreateWithoutClienteInput>
  }

  export type RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutClienteInput = {
    where: RelatorioExpedicaoMensalWhereUniqueInput
    data: XOR<RelatorioExpedicaoMensalUpdateWithoutClienteInput, RelatorioExpedicaoMensalUncheckedUpdateWithoutClienteInput>
  }

  export type RelatorioExpedicaoMensalUpdateManyWithWhereWithoutClienteInput = {
    where: RelatorioExpedicaoMensalScalarWhereInput
    data: XOR<RelatorioExpedicaoMensalUpdateManyMutationInput, RelatorioExpedicaoMensalUncheckedUpdateManyWithoutClienteInput>
  }

  export type RelatorioExpedicaoMensalScalarWhereInput = {
    AND?: RelatorioExpedicaoMensalScalarWhereInput | RelatorioExpedicaoMensalScalarWhereInput[]
    OR?: RelatorioExpedicaoMensalScalarWhereInput[]
    NOT?: RelatorioExpedicaoMensalScalarWhereInput | RelatorioExpedicaoMensalScalarWhereInput[]
    id?: IntFilter<"RelatorioExpedicaoMensal"> | number
    quantidade?: DecimalFilter<"RelatorioExpedicaoMensal"> | Decimal | DecimalJsLike | number | string
    destino?: StringFilter<"RelatorioExpedicaoMensal"> | string
    temperatura?: DecimalFilter<"RelatorioExpedicaoMensal"> | Decimal | DecimalJsLike | number | string
    entregador?: StringFilter<"RelatorioExpedicaoMensal"> | string
    dataProducao?: DateTimeFilter<"RelatorioExpedicaoMensal"> | Date | string
    dataExpedicao?: DateTimeFilter<"RelatorioExpedicaoMensal"> | Date | string
    produtoId?: IntFilter<"RelatorioExpedicaoMensal"> | number
    clienteId?: IntFilter<"RelatorioExpedicaoMensal"> | number
  }

  export type RelatorioExpedicaoDiariaCreateWithoutProdutoInput = {
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuario: UsuarioCreateNestedOneWithoutRelatoriosDiariosInput
    veiculo: VeiculoCreateNestedOneWithoutRelatoriosDiariosInput
    cliente: ClienteCreateNestedOneWithoutRelatoriosDiariosInput
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    veiculoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoDiariaCreateOrConnectWithoutProdutoInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    create: XOR<RelatorioExpedicaoDiariaCreateWithoutProdutoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput>
  }

  export type RelatorioExpedicaoDiariaCreateManyProdutoInputEnvelope = {
    data: RelatorioExpedicaoDiariaCreateManyProdutoInput | RelatorioExpedicaoDiariaCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type RelatorioExpedicaoMensalCreateWithoutProdutoInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    cliente: ClienteCreateNestedOneWithoutRelatoriosMensaisInput
  }

  export type RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    clienteId: number
  }

  export type RelatorioExpedicaoMensalCreateOrConnectWithoutProdutoInput = {
    where: RelatorioExpedicaoMensalWhereUniqueInput
    create: XOR<RelatorioExpedicaoMensalCreateWithoutProdutoInput, RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput>
  }

  export type RelatorioExpedicaoMensalCreateManyProdutoInputEnvelope = {
    data: RelatorioExpedicaoMensalCreateManyProdutoInput | RelatorioExpedicaoMensalCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutProdutoInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    update: XOR<RelatorioExpedicaoDiariaUpdateWithoutProdutoInput, RelatorioExpedicaoDiariaUncheckedUpdateWithoutProdutoInput>
    create: XOR<RelatorioExpedicaoDiariaCreateWithoutProdutoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutProdutoInput>
  }

  export type RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutProdutoInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    data: XOR<RelatorioExpedicaoDiariaUpdateWithoutProdutoInput, RelatorioExpedicaoDiariaUncheckedUpdateWithoutProdutoInput>
  }

  export type RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutProdutoInput = {
    where: RelatorioExpedicaoDiariaScalarWhereInput
    data: XOR<RelatorioExpedicaoDiariaUpdateManyMutationInput, RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutProdutoInput>
  }

  export type RelatorioExpedicaoMensalUpsertWithWhereUniqueWithoutProdutoInput = {
    where: RelatorioExpedicaoMensalWhereUniqueInput
    update: XOR<RelatorioExpedicaoMensalUpdateWithoutProdutoInput, RelatorioExpedicaoMensalUncheckedUpdateWithoutProdutoInput>
    create: XOR<RelatorioExpedicaoMensalCreateWithoutProdutoInput, RelatorioExpedicaoMensalUncheckedCreateWithoutProdutoInput>
  }

  export type RelatorioExpedicaoMensalUpdateWithWhereUniqueWithoutProdutoInput = {
    where: RelatorioExpedicaoMensalWhereUniqueInput
    data: XOR<RelatorioExpedicaoMensalUpdateWithoutProdutoInput, RelatorioExpedicaoMensalUncheckedUpdateWithoutProdutoInput>
  }

  export type RelatorioExpedicaoMensalUpdateManyWithWhereWithoutProdutoInput = {
    where: RelatorioExpedicaoMensalScalarWhereInput
    data: XOR<RelatorioExpedicaoMensalUpdateManyMutationInput, RelatorioExpedicaoMensalUncheckedUpdateManyWithoutProdutoInput>
  }

  export type RelatorioExpedicaoDiariaCreateWithoutVeiculoInput = {
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuario: UsuarioCreateNestedOneWithoutRelatoriosDiariosInput
    produto: ProdutoCreateNestedOneWithoutRelatoriosDiariosInput
    cliente: ClienteCreateNestedOneWithoutRelatoriosDiariosInput
  }

  export type RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    produtoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoDiariaCreateOrConnectWithoutVeiculoInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    create: XOR<RelatorioExpedicaoDiariaCreateWithoutVeiculoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput>
  }

  export type RelatorioExpedicaoDiariaCreateManyVeiculoInputEnvelope = {
    data: RelatorioExpedicaoDiariaCreateManyVeiculoInput | RelatorioExpedicaoDiariaCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type RelatorioExpedicaoDiariaUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    update: XOR<RelatorioExpedicaoDiariaUpdateWithoutVeiculoInput, RelatorioExpedicaoDiariaUncheckedUpdateWithoutVeiculoInput>
    create: XOR<RelatorioExpedicaoDiariaCreateWithoutVeiculoInput, RelatorioExpedicaoDiariaUncheckedCreateWithoutVeiculoInput>
  }

  export type RelatorioExpedicaoDiariaUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: RelatorioExpedicaoDiariaWhereUniqueInput
    data: XOR<RelatorioExpedicaoDiariaUpdateWithoutVeiculoInput, RelatorioExpedicaoDiariaUncheckedUpdateWithoutVeiculoInput>
  }

  export type RelatorioExpedicaoDiariaUpdateManyWithWhereWithoutVeiculoInput = {
    where: RelatorioExpedicaoDiariaScalarWhereInput
    data: XOR<RelatorioExpedicaoDiariaUpdateManyMutationInput, RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type UsuarioCreateWithoutRelatoriosDiariosInput = {
    nome: string
    username: string
    senha: string
    cargo: CargoCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutRelatoriosDiariosInput = {
    id?: number
    nome: string
    username: string
    senha: string
    cargoId: number
  }

  export type UsuarioCreateOrConnectWithoutRelatoriosDiariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRelatoriosDiariosInput, UsuarioUncheckedCreateWithoutRelatoriosDiariosInput>
  }

  export type VeiculoCreateWithoutRelatoriosDiariosInput = {
    modelo: string
    placa: string
    categoria: string
    marca: string
  }

  export type VeiculoUncheckedCreateWithoutRelatoriosDiariosInput = {
    id?: number
    modelo: string
    placa: string
    categoria: string
    marca: string
  }

  export type VeiculoCreateOrConnectWithoutRelatoriosDiariosInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutRelatoriosDiariosInput, VeiculoUncheckedCreateWithoutRelatoriosDiariosInput>
  }

  export type ProdutoCreateWithoutRelatoriosDiariosInput = {
    nome: string
    undMedida: string
    quantidade: Decimal | DecimalJsLike | number | string
    validade: Date | string
    relatoriosMensais?: RelatorioExpedicaoMensalCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutRelatoriosDiariosInput = {
    id?: number
    nome: string
    undMedida: string
    quantidade: Decimal | DecimalJsLike | number | string
    validade: Date | string
    relatoriosMensais?: RelatorioExpedicaoMensalUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutRelatoriosDiariosInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutRelatoriosDiariosInput, ProdutoUncheckedCreateWithoutRelatoriosDiariosInput>
  }

  export type ClienteCreateWithoutRelatoriosDiariosInput = {
    nome: string
    CPF: string
    CNPJ: string
    endereco: string
    telefone: string
    codigoIdentificacao: string
    relatoriosMensais?: RelatorioExpedicaoMensalCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutRelatoriosDiariosInput = {
    id?: number
    nome: string
    CPF: string
    CNPJ: string
    endereco: string
    telefone: string
    codigoIdentificacao: string
    relatoriosMensais?: RelatorioExpedicaoMensalUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutRelatoriosDiariosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutRelatoriosDiariosInput, ClienteUncheckedCreateWithoutRelatoriosDiariosInput>
  }

  export type UsuarioUpsertWithoutRelatoriosDiariosInput = {
    update: XOR<UsuarioUpdateWithoutRelatoriosDiariosInput, UsuarioUncheckedUpdateWithoutRelatoriosDiariosInput>
    create: XOR<UsuarioCreateWithoutRelatoriosDiariosInput, UsuarioUncheckedCreateWithoutRelatoriosDiariosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRelatoriosDiariosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRelatoriosDiariosInput, UsuarioUncheckedUpdateWithoutRelatoriosDiariosInput>
  }

  export type UsuarioUpdateWithoutRelatoriosDiariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: CargoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRelatoriosDiariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargoId?: IntFieldUpdateOperationsInput | number
  }

  export type VeiculoUpsertWithoutRelatoriosDiariosInput = {
    update: XOR<VeiculoUpdateWithoutRelatoriosDiariosInput, VeiculoUncheckedUpdateWithoutRelatoriosDiariosInput>
    create: XOR<VeiculoCreateWithoutRelatoriosDiariosInput, VeiculoUncheckedCreateWithoutRelatoriosDiariosInput>
    where?: VeiculoWhereInput
  }

  export type VeiculoUpdateToOneWithWhereWithoutRelatoriosDiariosInput = {
    where?: VeiculoWhereInput
    data: XOR<VeiculoUpdateWithoutRelatoriosDiariosInput, VeiculoUncheckedUpdateWithoutRelatoriosDiariosInput>
  }

  export type VeiculoUpdateWithoutRelatoriosDiariosInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoUncheckedUpdateWithoutRelatoriosDiariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUpsertWithoutRelatoriosDiariosInput = {
    update: XOR<ProdutoUpdateWithoutRelatoriosDiariosInput, ProdutoUncheckedUpdateWithoutRelatoriosDiariosInput>
    create: XOR<ProdutoCreateWithoutRelatoriosDiariosInput, ProdutoUncheckedCreateWithoutRelatoriosDiariosInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutRelatoriosDiariosInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutRelatoriosDiariosInput, ProdutoUncheckedUpdateWithoutRelatoriosDiariosInput>
  }

  export type ProdutoUpdateWithoutRelatoriosDiariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    undMedida?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFieldUpdateOperationsInput | Date | string
    relatoriosMensais?: RelatorioExpedicaoMensalUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutRelatoriosDiariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    undMedida?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFieldUpdateOperationsInput | Date | string
    relatoriosMensais?: RelatorioExpedicaoMensalUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ClienteUpsertWithoutRelatoriosDiariosInput = {
    update: XOR<ClienteUpdateWithoutRelatoriosDiariosInput, ClienteUncheckedUpdateWithoutRelatoriosDiariosInput>
    create: XOR<ClienteCreateWithoutRelatoriosDiariosInput, ClienteUncheckedCreateWithoutRelatoriosDiariosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutRelatoriosDiariosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutRelatoriosDiariosInput, ClienteUncheckedUpdateWithoutRelatoriosDiariosInput>
  }

  export type ClienteUpdateWithoutRelatoriosDiariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    CNPJ?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    relatoriosMensais?: RelatorioExpedicaoMensalUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutRelatoriosDiariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    CNPJ?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    relatoriosMensais?: RelatorioExpedicaoMensalUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ProdutoCreateWithoutRelatoriosMensaisInput = {
    nome: string
    undMedida: string
    quantidade: Decimal | DecimalJsLike | number | string
    validade: Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutRelatoriosMensaisInput = {
    id?: number
    nome: string
    undMedida: string
    quantidade: Decimal | DecimalJsLike | number | string
    validade: Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutRelatoriosMensaisInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutRelatoriosMensaisInput, ProdutoUncheckedCreateWithoutRelatoriosMensaisInput>
  }

  export type ClienteCreateWithoutRelatoriosMensaisInput = {
    nome: string
    CPF: string
    CNPJ: string
    endereco: string
    telefone: string
    codigoIdentificacao: string
    relatoriosDiarios?: RelatorioExpedicaoDiariaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutRelatoriosMensaisInput = {
    id?: number
    nome: string
    CPF: string
    CNPJ: string
    endereco: string
    telefone: string
    codigoIdentificacao: string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutRelatoriosMensaisInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutRelatoriosMensaisInput, ClienteUncheckedCreateWithoutRelatoriosMensaisInput>
  }

  export type ProdutoUpsertWithoutRelatoriosMensaisInput = {
    update: XOR<ProdutoUpdateWithoutRelatoriosMensaisInput, ProdutoUncheckedUpdateWithoutRelatoriosMensaisInput>
    create: XOR<ProdutoCreateWithoutRelatoriosMensaisInput, ProdutoUncheckedCreateWithoutRelatoriosMensaisInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutRelatoriosMensaisInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutRelatoriosMensaisInput, ProdutoUncheckedUpdateWithoutRelatoriosMensaisInput>
  }

  export type ProdutoUpdateWithoutRelatoriosMensaisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    undMedida?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFieldUpdateOperationsInput | Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutRelatoriosMensaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    undMedida?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validade?: DateTimeFieldUpdateOperationsInput | Date | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ClienteUpsertWithoutRelatoriosMensaisInput = {
    update: XOR<ClienteUpdateWithoutRelatoriosMensaisInput, ClienteUncheckedUpdateWithoutRelatoriosMensaisInput>
    create: XOR<ClienteCreateWithoutRelatoriosMensaisInput, ClienteUncheckedCreateWithoutRelatoriosMensaisInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutRelatoriosMensaisInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutRelatoriosMensaisInput, ClienteUncheckedUpdateWithoutRelatoriosMensaisInput>
  }

  export type ClienteUpdateWithoutRelatoriosMensaisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    CNPJ?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutRelatoriosMensaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    CNPJ?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioCreateManyCargoInput = {
    id?: number
    nome: string
    username: string
    senha: string
  }

  export type UsuarioUpdateWithoutCargoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCargoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    relatoriosDiarios?: RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutCargoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioExpedicaoDiariaCreateManyUsuarioInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    veiculoId: number
    produtoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoDiariaUpdateWithoutUsuarioInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    veiculo?: VeiculoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    veiculoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    veiculoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoDiariaCreateManyClienteInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    veiculoId: number
    produtoId: number
  }

  export type RelatorioExpedicaoMensalCreateManyClienteInput = {
    id?: number
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    produtoId: number
  }

  export type RelatorioExpedicaoDiariaUpdateWithoutClienteInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoMensalUpdateWithoutClienteInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutRelatoriosMensaisNestedInput
  }

  export type RelatorioExpedicaoMensalUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoMensalUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoDiariaCreateManyProdutoInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    veiculoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoMensalCreateManyProdutoInput = {
    id?: number
    quantidade: Decimal | DecimalJsLike | number | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    entregador: string
    dataProducao: Date | string
    dataExpedicao: Date | string
    clienteId: number
  }

  export type RelatorioExpedicaoDiariaUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoMensalUpdateWithoutProdutoInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutRelatoriosMensaisNestedInput
  }

  export type RelatorioExpedicaoMensalUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoMensalUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entregador?: StringFieldUpdateOperationsInput | string
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataExpedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoDiariaCreateManyVeiculoInput = {
    id?: number
    quantidade: number
    notaFiscal: number
    dataProducao: Date | string
    destino: string
    temperatura: Decimal | DecimalJsLike | number | string
    condicaoSanitaria: boolean
    entregador: string
    usuarioId: number
    produtoId: number
    clienteId: number
  }

  export type RelatorioExpedicaoDiariaUpdateWithoutVeiculoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRelatoriosDiariosNestedInput
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateWithoutVeiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioExpedicaoDiariaUncheckedUpdateManyWithoutVeiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    notaFiscal?: IntFieldUpdateOperationsInput | number
    dataProducao?: DateTimeFieldUpdateOperationsInput | Date | string
    destino?: StringFieldUpdateOperationsInput | string
    temperatura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    condicaoSanitaria?: BoolFieldUpdateOperationsInput | boolean
    entregador?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
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