
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model DailyShipmentReport
 * 
 */
export type DailyShipmentReport = $Result.DefaultSelection<Prisma.$DailyShipmentReportPayload>
/**
 * Model MonthlyShipmentReport
 * 
 */
export type MonthlyShipmentReport = $Result.DefaultSelection<Prisma.$MonthlyShipmentReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  admin: 'admin',
  manager: 'manager'
};

export type role = (typeof role)[keyof typeof role]

}

export type role = $Enums.role

export const role: typeof $Enums.role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyShipmentReport`: Exposes CRUD operations for the **DailyShipmentReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyShipmentReports
    * const dailyShipmentReports = await prisma.dailyShipmentReport.findMany()
    * ```
    */
  get dailyShipmentReport(): Prisma.DailyShipmentReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyShipmentReport`: Exposes CRUD operations for the **MonthlyShipmentReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyShipmentReports
    * const monthlyShipmentReports = await prisma.monthlyShipmentReport.findMany()
    * ```
    */
  get monthlyShipmentReport(): Prisma.MonthlyShipmentReportDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    Client: 'Client',
    Product: 'Product',
    Vehicle: 'Vehicle',
    DailyShipmentReport: 'DailyShipmentReport',
    MonthlyShipmentReport: 'MonthlyShipmentReport'
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
      modelProps: "users" | "client" | "product" | "vehicle" | "dailyShipmentReport" | "monthlyShipmentReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      DailyShipmentReport: {
        payload: Prisma.$DailyShipmentReportPayload<ExtArgs>
        fields: Prisma.DailyShipmentReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyShipmentReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyShipmentReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>
          }
          findFirst: {
            args: Prisma.DailyShipmentReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyShipmentReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>
          }
          findMany: {
            args: Prisma.DailyShipmentReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>[]
          }
          create: {
            args: Prisma.DailyShipmentReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>
          }
          createMany: {
            args: Prisma.DailyShipmentReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyShipmentReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>[]
          }
          delete: {
            args: Prisma.DailyShipmentReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>
          }
          update: {
            args: Prisma.DailyShipmentReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>
          }
          deleteMany: {
            args: Prisma.DailyShipmentReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyShipmentReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyShipmentReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>[]
          }
          upsert: {
            args: Prisma.DailyShipmentReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyShipmentReportPayload>
          }
          aggregate: {
            args: Prisma.DailyShipmentReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyShipmentReport>
          }
          groupBy: {
            args: Prisma.DailyShipmentReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyShipmentReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyShipmentReportCountArgs<ExtArgs>
            result: $Utils.Optional<DailyShipmentReportCountAggregateOutputType> | number
          }
        }
      }
      MonthlyShipmentReport: {
        payload: Prisma.$MonthlyShipmentReportPayload<ExtArgs>
        fields: Prisma.MonthlyShipmentReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyShipmentReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyShipmentReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>
          }
          findFirst: {
            args: Prisma.MonthlyShipmentReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyShipmentReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>
          }
          findMany: {
            args: Prisma.MonthlyShipmentReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>[]
          }
          create: {
            args: Prisma.MonthlyShipmentReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>
          }
          createMany: {
            args: Prisma.MonthlyShipmentReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyShipmentReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>[]
          }
          delete: {
            args: Prisma.MonthlyShipmentReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>
          }
          update: {
            args: Prisma.MonthlyShipmentReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyShipmentReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyShipmentReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlyShipmentReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>[]
          }
          upsert: {
            args: Prisma.MonthlyShipmentReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyShipmentReportPayload>
          }
          aggregate: {
            args: Prisma.MonthlyShipmentReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyShipmentReport>
          }
          groupBy: {
            args: Prisma.MonthlyShipmentReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyShipmentReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyShipmentReportCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyShipmentReportCountAggregateOutputType> | number
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
    users?: UsersOmit
    client?: ClientOmit
    product?: ProductOmit
    vehicle?: VehicleOmit
    dailyShipmentReport?: DailyShipmentReportOmit
    monthlyShipmentReport?: MonthlyShipmentReportOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    dailyReports: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | UsersCountOutputTypeCountDailyReportsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyShipmentReportWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    dailyReports: number
    monthlyReports: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | ClientCountOutputTypeCountDailyReportsArgs
    monthlyReports?: boolean | ClientCountOutputTypeCountMonthlyReportsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyShipmentReportWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountMonthlyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyShipmentReportWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    dailyReports: number
    monthlyReports: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | ProductCountOutputTypeCountDailyReportsArgs
    monthlyReports?: boolean | ProductCountOutputTypeCountMonthlyReportsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyShipmentReportWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMonthlyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyShipmentReportWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    dailyReports: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | VehicleCountOutputTypeCountDailyReportsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyShipmentReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    role: $Enums.role
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    dailyReports?: boolean | Users$dailyReportsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | Users$dailyReportsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      dailyReports: Prisma.$DailyShipmentReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      role: $Enums.role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyReports<T extends Users$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Users$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'role'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.dailyReports
   */
  export type Users$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    where?: DailyShipmentReportWhereInput
    orderBy?: DailyShipmentReportOrderByWithRelationInput | DailyShipmentReportOrderByWithRelationInput[]
    cursor?: DailyShipmentReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyShipmentReportScalarFieldEnum | DailyShipmentReportScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    cnpj: string | null
    address: string | null
    phone: string | null
    identificationCode: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    cnpj: string | null
    address: string | null
    phone: string | null
    identificationCode: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    cnpj: number
    address: number
    phone: number
    identificationCode: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    cnpj?: true
    address?: true
    phone?: true
    identificationCode?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    cnpj?: true
    address?: true
    phone?: true
    identificationCode?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    cnpj?: true
    address?: true
    phone?: true
    identificationCode?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    cpf: string
    cnpj: string
    address: string
    phone: string
    identificationCode: string
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    cnpj?: boolean
    address?: boolean
    phone?: boolean
    identificationCode?: boolean
    dailyReports?: boolean | Client$dailyReportsArgs<ExtArgs>
    monthlyReports?: boolean | Client$monthlyReportsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    cnpj?: boolean
    address?: boolean
    phone?: boolean
    identificationCode?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    cnpj?: boolean
    address?: boolean
    phone?: boolean
    identificationCode?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    cnpj?: boolean
    address?: boolean
    phone?: boolean
    identificationCode?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "cnpj" | "address" | "phone" | "identificationCode", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | Client$dailyReportsArgs<ExtArgs>
    monthlyReports?: boolean | Client$monthlyReportsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      dailyReports: Prisma.$DailyShipmentReportPayload<ExtArgs>[]
      monthlyReports: Prisma.$MonthlyShipmentReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cpf: string
      cnpj: string
      address: string
      phone: string
      identificationCode: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyReports<T extends Client$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Client$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyReports<T extends Client$monthlyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Client$monthlyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly cpf: FieldRef<"Client", 'String'>
    readonly cnpj: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly identificationCode: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.dailyReports
   */
  export type Client$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    where?: DailyShipmentReportWhereInput
    orderBy?: DailyShipmentReportOrderByWithRelationInput | DailyShipmentReportOrderByWithRelationInput[]
    cursor?: DailyShipmentReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyShipmentReportScalarFieldEnum | DailyShipmentReportScalarFieldEnum[]
  }

  /**
   * Client.monthlyReports
   */
  export type Client$monthlyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    where?: MonthlyShipmentReportWhereInput
    orderBy?: MonthlyShipmentReportOrderByWithRelationInput | MonthlyShipmentReportOrderByWithRelationInput[]
    cursor?: MonthlyShipmentReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyShipmentReportScalarFieldEnum | MonthlyShipmentReportScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
    quantity: Decimal | null
    expiration: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
    quantity: Decimal | null
    expiration: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    quantity: number
    expiration: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    expiration?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    expiration?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    quantity?: true
    expiration?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    unit: string
    quantity: Decimal
    expiration: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    expiration?: boolean
    dailyReports?: boolean | Product$dailyReportsArgs<ExtArgs>
    monthlyReports?: boolean | Product$monthlyReportsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    expiration?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    expiration?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    quantity?: boolean
    expiration?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unit" | "quantity" | "expiration", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | Product$dailyReportsArgs<ExtArgs>
    monthlyReports?: boolean | Product$monthlyReportsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      dailyReports: Prisma.$DailyShipmentReportPayload<ExtArgs>[]
      monthlyReports: Prisma.$MonthlyShipmentReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      unit: string
      quantity: Prisma.Decimal
      expiration: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyReports<T extends Product$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Product$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyReports<T extends Product$monthlyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Product$monthlyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly quantity: FieldRef<"Product", 'Decimal'>
    readonly expiration: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.dailyReports
   */
  export type Product$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    where?: DailyShipmentReportWhereInput
    orderBy?: DailyShipmentReportOrderByWithRelationInput | DailyShipmentReportOrderByWithRelationInput[]
    cursor?: DailyShipmentReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyShipmentReportScalarFieldEnum | DailyShipmentReportScalarFieldEnum[]
  }

  /**
   * Product.monthlyReports
   */
  export type Product$monthlyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    where?: MonthlyShipmentReportWhereInput
    orderBy?: MonthlyShipmentReportOrderByWithRelationInput | MonthlyShipmentReportOrderByWithRelationInput[]
    cursor?: MonthlyShipmentReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyShipmentReportScalarFieldEnum | MonthlyShipmentReportScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    id: number | null
  }

  export type VehicleSumAggregateOutputType = {
    id: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: number | null
    model: string | null
    plate: string | null
    category: string | null
    brand: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: number | null
    model: string | null
    plate: string | null
    category: string | null
    brand: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    model: number
    plate: number
    category: number
    brand: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    id?: true
  }

  export type VehicleSumAggregateInputType = {
    id?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    model?: true
    plate?: true
    category?: true
    brand?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    model?: true
    plate?: true
    category?: true
    brand?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    model?: true
    plate?: true
    category?: true
    brand?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: number
    model: string
    plate: string
    category: string
    brand: string
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    plate?: boolean
    category?: boolean
    brand?: boolean
    dailyReports?: boolean | Vehicle$dailyReportsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    plate?: boolean
    category?: boolean
    brand?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    plate?: boolean
    category?: boolean
    brand?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    model?: boolean
    plate?: boolean
    category?: boolean
    brand?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "plate" | "category" | "brand", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | Vehicle$dailyReportsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      dailyReports: Prisma.$DailyShipmentReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string
      plate: string
      category: string
      brand: string
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyReports<T extends Vehicle$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'Int'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly category: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.dailyReports
   */
  export type Vehicle$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    where?: DailyShipmentReportWhereInput
    orderBy?: DailyShipmentReportOrderByWithRelationInput | DailyShipmentReportOrderByWithRelationInput[]
    cursor?: DailyShipmentReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyShipmentReportScalarFieldEnum | DailyShipmentReportScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model DailyShipmentReport
   */

  export type AggregateDailyShipmentReport = {
    _count: DailyShipmentReportCountAggregateOutputType | null
    _avg: DailyShipmentReportAvgAggregateOutputType | null
    _sum: DailyShipmentReportSumAggregateOutputType | null
    _min: DailyShipmentReportMinAggregateOutputType | null
    _max: DailyShipmentReportMaxAggregateOutputType | null
  }

  export type DailyShipmentReportAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    invoiceNumber: number | null
    temperature: Decimal | null
    userId: number | null
    vehicleId: number | null
    productId: number | null
    clientId: number | null
  }

  export type DailyShipmentReportSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    invoiceNumber: number | null
    temperature: Decimal | null
    userId: number | null
    vehicleId: number | null
    productId: number | null
    clientId: number | null
  }

  export type DailyShipmentReportMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    invoiceNumber: number | null
    productionDate: Date | null
    destination: string | null
    temperature: Decimal | null
    sanitaryCondition: boolean | null
    deliverer: string | null
    userId: number | null
    vehicleId: number | null
    productId: number | null
    clientId: number | null
  }

  export type DailyShipmentReportMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    invoiceNumber: number | null
    productionDate: Date | null
    destination: string | null
    temperature: Decimal | null
    sanitaryCondition: boolean | null
    deliverer: string | null
    userId: number | null
    vehicleId: number | null
    productId: number | null
    clientId: number | null
  }

  export type DailyShipmentReportCountAggregateOutputType = {
    id: number
    quantity: number
    invoiceNumber: number
    productionDate: number
    destination: number
    temperature: number
    sanitaryCondition: number
    deliverer: number
    userId: number
    vehicleId: number
    productId: number
    clientId: number
    _all: number
  }


  export type DailyShipmentReportAvgAggregateInputType = {
    id?: true
    quantity?: true
    invoiceNumber?: true
    temperature?: true
    userId?: true
    vehicleId?: true
    productId?: true
    clientId?: true
  }

  export type DailyShipmentReportSumAggregateInputType = {
    id?: true
    quantity?: true
    invoiceNumber?: true
    temperature?: true
    userId?: true
    vehicleId?: true
    productId?: true
    clientId?: true
  }

  export type DailyShipmentReportMinAggregateInputType = {
    id?: true
    quantity?: true
    invoiceNumber?: true
    productionDate?: true
    destination?: true
    temperature?: true
    sanitaryCondition?: true
    deliverer?: true
    userId?: true
    vehicleId?: true
    productId?: true
    clientId?: true
  }

  export type DailyShipmentReportMaxAggregateInputType = {
    id?: true
    quantity?: true
    invoiceNumber?: true
    productionDate?: true
    destination?: true
    temperature?: true
    sanitaryCondition?: true
    deliverer?: true
    userId?: true
    vehicleId?: true
    productId?: true
    clientId?: true
  }

  export type DailyShipmentReportCountAggregateInputType = {
    id?: true
    quantity?: true
    invoiceNumber?: true
    productionDate?: true
    destination?: true
    temperature?: true
    sanitaryCondition?: true
    deliverer?: true
    userId?: true
    vehicleId?: true
    productId?: true
    clientId?: true
    _all?: true
  }

  export type DailyShipmentReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyShipmentReport to aggregate.
     */
    where?: DailyShipmentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyShipmentReports to fetch.
     */
    orderBy?: DailyShipmentReportOrderByWithRelationInput | DailyShipmentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyShipmentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyShipmentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyShipmentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyShipmentReports
    **/
    _count?: true | DailyShipmentReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyShipmentReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyShipmentReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyShipmentReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyShipmentReportMaxAggregateInputType
  }

  export type GetDailyShipmentReportAggregateType<T extends DailyShipmentReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyShipmentReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyShipmentReport[P]>
      : GetScalarType<T[P], AggregateDailyShipmentReport[P]>
  }




  export type DailyShipmentReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyShipmentReportWhereInput
    orderBy?: DailyShipmentReportOrderByWithAggregationInput | DailyShipmentReportOrderByWithAggregationInput[]
    by: DailyShipmentReportScalarFieldEnum[] | DailyShipmentReportScalarFieldEnum
    having?: DailyShipmentReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyShipmentReportCountAggregateInputType | true
    _avg?: DailyShipmentReportAvgAggregateInputType
    _sum?: DailyShipmentReportSumAggregateInputType
    _min?: DailyShipmentReportMinAggregateInputType
    _max?: DailyShipmentReportMaxAggregateInputType
  }

  export type DailyShipmentReportGroupByOutputType = {
    id: number
    quantity: number
    invoiceNumber: number
    productionDate: Date
    destination: string
    temperature: Decimal
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    vehicleId: number
    productId: number
    clientId: number
    _count: DailyShipmentReportCountAggregateOutputType | null
    _avg: DailyShipmentReportAvgAggregateOutputType | null
    _sum: DailyShipmentReportSumAggregateOutputType | null
    _min: DailyShipmentReportMinAggregateOutputType | null
    _max: DailyShipmentReportMaxAggregateOutputType | null
  }

  type GetDailyShipmentReportGroupByPayload<T extends DailyShipmentReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyShipmentReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyShipmentReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyShipmentReportGroupByOutputType[P]>
            : GetScalarType<T[P], DailyShipmentReportGroupByOutputType[P]>
        }
      >
    >


  export type DailyShipmentReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    invoiceNumber?: boolean
    productionDate?: boolean
    destination?: boolean
    temperature?: boolean
    sanitaryCondition?: boolean
    deliverer?: boolean
    userId?: boolean
    vehicleId?: boolean
    productId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyShipmentReport"]>

  export type DailyShipmentReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    invoiceNumber?: boolean
    productionDate?: boolean
    destination?: boolean
    temperature?: boolean
    sanitaryCondition?: boolean
    deliverer?: boolean
    userId?: boolean
    vehicleId?: boolean
    productId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyShipmentReport"]>

  export type DailyShipmentReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    invoiceNumber?: boolean
    productionDate?: boolean
    destination?: boolean
    temperature?: boolean
    sanitaryCondition?: boolean
    deliverer?: boolean
    userId?: boolean
    vehicleId?: boolean
    productId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyShipmentReport"]>

  export type DailyShipmentReportSelectScalar = {
    id?: boolean
    quantity?: boolean
    invoiceNumber?: boolean
    productionDate?: boolean
    destination?: boolean
    temperature?: boolean
    sanitaryCondition?: boolean
    deliverer?: boolean
    userId?: boolean
    vehicleId?: boolean
    productId?: boolean
    clientId?: boolean
  }

  export type DailyShipmentReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "invoiceNumber" | "productionDate" | "destination" | "temperature" | "sanitaryCondition" | "deliverer" | "userId" | "vehicleId" | "productId" | "clientId", ExtArgs["result"]["dailyShipmentReport"]>
  export type DailyShipmentReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type DailyShipmentReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type DailyShipmentReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $DailyShipmentReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyShipmentReport"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      users: Prisma.$UsersPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      invoiceNumber: number
      productionDate: Date
      destination: string
      temperature: Prisma.Decimal
      sanitaryCondition: boolean
      deliverer: string
      userId: number
      vehicleId: number
      productId: number
      clientId: number
    }, ExtArgs["result"]["dailyShipmentReport"]>
    composites: {}
  }

  type DailyShipmentReportGetPayload<S extends boolean | null | undefined | DailyShipmentReportDefaultArgs> = $Result.GetResult<Prisma.$DailyShipmentReportPayload, S>

  type DailyShipmentReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyShipmentReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyShipmentReportCountAggregateInputType | true
    }

  export interface DailyShipmentReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyShipmentReport'], meta: { name: 'DailyShipmentReport' } }
    /**
     * Find zero or one DailyShipmentReport that matches the filter.
     * @param {DailyShipmentReportFindUniqueArgs} args - Arguments to find a DailyShipmentReport
     * @example
     * // Get one DailyShipmentReport
     * const dailyShipmentReport = await prisma.dailyShipmentReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyShipmentReportFindUniqueArgs>(args: SelectSubset<T, DailyShipmentReportFindUniqueArgs<ExtArgs>>): Prisma__DailyShipmentReportClient<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyShipmentReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyShipmentReportFindUniqueOrThrowArgs} args - Arguments to find a DailyShipmentReport
     * @example
     * // Get one DailyShipmentReport
     * const dailyShipmentReport = await prisma.dailyShipmentReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyShipmentReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyShipmentReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyShipmentReportClient<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyShipmentReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShipmentReportFindFirstArgs} args - Arguments to find a DailyShipmentReport
     * @example
     * // Get one DailyShipmentReport
     * const dailyShipmentReport = await prisma.dailyShipmentReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyShipmentReportFindFirstArgs>(args?: SelectSubset<T, DailyShipmentReportFindFirstArgs<ExtArgs>>): Prisma__DailyShipmentReportClient<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyShipmentReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShipmentReportFindFirstOrThrowArgs} args - Arguments to find a DailyShipmentReport
     * @example
     * // Get one DailyShipmentReport
     * const dailyShipmentReport = await prisma.dailyShipmentReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyShipmentReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyShipmentReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyShipmentReportClient<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyShipmentReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShipmentReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyShipmentReports
     * const dailyShipmentReports = await prisma.dailyShipmentReport.findMany()
     * 
     * // Get first 10 DailyShipmentReports
     * const dailyShipmentReports = await prisma.dailyShipmentReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyShipmentReportWithIdOnly = await prisma.dailyShipmentReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyShipmentReportFindManyArgs>(args?: SelectSubset<T, DailyShipmentReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyShipmentReport.
     * @param {DailyShipmentReportCreateArgs} args - Arguments to create a DailyShipmentReport.
     * @example
     * // Create one DailyShipmentReport
     * const DailyShipmentReport = await prisma.dailyShipmentReport.create({
     *   data: {
     *     // ... data to create a DailyShipmentReport
     *   }
     * })
     * 
     */
    create<T extends DailyShipmentReportCreateArgs>(args: SelectSubset<T, DailyShipmentReportCreateArgs<ExtArgs>>): Prisma__DailyShipmentReportClient<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyShipmentReports.
     * @param {DailyShipmentReportCreateManyArgs} args - Arguments to create many DailyShipmentReports.
     * @example
     * // Create many DailyShipmentReports
     * const dailyShipmentReport = await prisma.dailyShipmentReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyShipmentReportCreateManyArgs>(args?: SelectSubset<T, DailyShipmentReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyShipmentReports and returns the data saved in the database.
     * @param {DailyShipmentReportCreateManyAndReturnArgs} args - Arguments to create many DailyShipmentReports.
     * @example
     * // Create many DailyShipmentReports
     * const dailyShipmentReport = await prisma.dailyShipmentReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyShipmentReports and only return the `id`
     * const dailyShipmentReportWithIdOnly = await prisma.dailyShipmentReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyShipmentReportCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyShipmentReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyShipmentReport.
     * @param {DailyShipmentReportDeleteArgs} args - Arguments to delete one DailyShipmentReport.
     * @example
     * // Delete one DailyShipmentReport
     * const DailyShipmentReport = await prisma.dailyShipmentReport.delete({
     *   where: {
     *     // ... filter to delete one DailyShipmentReport
     *   }
     * })
     * 
     */
    delete<T extends DailyShipmentReportDeleteArgs>(args: SelectSubset<T, DailyShipmentReportDeleteArgs<ExtArgs>>): Prisma__DailyShipmentReportClient<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyShipmentReport.
     * @param {DailyShipmentReportUpdateArgs} args - Arguments to update one DailyShipmentReport.
     * @example
     * // Update one DailyShipmentReport
     * const dailyShipmentReport = await prisma.dailyShipmentReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyShipmentReportUpdateArgs>(args: SelectSubset<T, DailyShipmentReportUpdateArgs<ExtArgs>>): Prisma__DailyShipmentReportClient<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyShipmentReports.
     * @param {DailyShipmentReportDeleteManyArgs} args - Arguments to filter DailyShipmentReports to delete.
     * @example
     * // Delete a few DailyShipmentReports
     * const { count } = await prisma.dailyShipmentReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyShipmentReportDeleteManyArgs>(args?: SelectSubset<T, DailyShipmentReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyShipmentReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShipmentReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyShipmentReports
     * const dailyShipmentReport = await prisma.dailyShipmentReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyShipmentReportUpdateManyArgs>(args: SelectSubset<T, DailyShipmentReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyShipmentReports and returns the data updated in the database.
     * @param {DailyShipmentReportUpdateManyAndReturnArgs} args - Arguments to update many DailyShipmentReports.
     * @example
     * // Update many DailyShipmentReports
     * const dailyShipmentReport = await prisma.dailyShipmentReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyShipmentReports and only return the `id`
     * const dailyShipmentReportWithIdOnly = await prisma.dailyShipmentReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyShipmentReportUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyShipmentReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyShipmentReport.
     * @param {DailyShipmentReportUpsertArgs} args - Arguments to update or create a DailyShipmentReport.
     * @example
     * // Update or create a DailyShipmentReport
     * const dailyShipmentReport = await prisma.dailyShipmentReport.upsert({
     *   create: {
     *     // ... data to create a DailyShipmentReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyShipmentReport we want to update
     *   }
     * })
     */
    upsert<T extends DailyShipmentReportUpsertArgs>(args: SelectSubset<T, DailyShipmentReportUpsertArgs<ExtArgs>>): Prisma__DailyShipmentReportClient<$Result.GetResult<Prisma.$DailyShipmentReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyShipmentReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShipmentReportCountArgs} args - Arguments to filter DailyShipmentReports to count.
     * @example
     * // Count the number of DailyShipmentReports
     * const count = await prisma.dailyShipmentReport.count({
     *   where: {
     *     // ... the filter for the DailyShipmentReports we want to count
     *   }
     * })
    **/
    count<T extends DailyShipmentReportCountArgs>(
      args?: Subset<T, DailyShipmentReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyShipmentReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyShipmentReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShipmentReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyShipmentReportAggregateArgs>(args: Subset<T, DailyShipmentReportAggregateArgs>): Prisma.PrismaPromise<GetDailyShipmentReportAggregateType<T>>

    /**
     * Group by DailyShipmentReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyShipmentReportGroupByArgs} args - Group by arguments.
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
      T extends DailyShipmentReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyShipmentReportGroupByArgs['orderBy'] }
        : { orderBy?: DailyShipmentReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyShipmentReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyShipmentReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyShipmentReport model
   */
  readonly fields: DailyShipmentReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyShipmentReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyShipmentReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyShipmentReport model
   */
  interface DailyShipmentReportFieldRefs {
    readonly id: FieldRef<"DailyShipmentReport", 'Int'>
    readonly quantity: FieldRef<"DailyShipmentReport", 'Int'>
    readonly invoiceNumber: FieldRef<"DailyShipmentReport", 'Int'>
    readonly productionDate: FieldRef<"DailyShipmentReport", 'DateTime'>
    readonly destination: FieldRef<"DailyShipmentReport", 'String'>
    readonly temperature: FieldRef<"DailyShipmentReport", 'Decimal'>
    readonly sanitaryCondition: FieldRef<"DailyShipmentReport", 'Boolean'>
    readonly deliverer: FieldRef<"DailyShipmentReport", 'String'>
    readonly userId: FieldRef<"DailyShipmentReport", 'Int'>
    readonly vehicleId: FieldRef<"DailyShipmentReport", 'Int'>
    readonly productId: FieldRef<"DailyShipmentReport", 'Int'>
    readonly clientId: FieldRef<"DailyShipmentReport", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyShipmentReport findUnique
   */
  export type DailyShipmentReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyShipmentReport to fetch.
     */
    where: DailyShipmentReportWhereUniqueInput
  }

  /**
   * DailyShipmentReport findUniqueOrThrow
   */
  export type DailyShipmentReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyShipmentReport to fetch.
     */
    where: DailyShipmentReportWhereUniqueInput
  }

  /**
   * DailyShipmentReport findFirst
   */
  export type DailyShipmentReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyShipmentReport to fetch.
     */
    where?: DailyShipmentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyShipmentReports to fetch.
     */
    orderBy?: DailyShipmentReportOrderByWithRelationInput | DailyShipmentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyShipmentReports.
     */
    cursor?: DailyShipmentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyShipmentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyShipmentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyShipmentReports.
     */
    distinct?: DailyShipmentReportScalarFieldEnum | DailyShipmentReportScalarFieldEnum[]
  }

  /**
   * DailyShipmentReport findFirstOrThrow
   */
  export type DailyShipmentReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyShipmentReport to fetch.
     */
    where?: DailyShipmentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyShipmentReports to fetch.
     */
    orderBy?: DailyShipmentReportOrderByWithRelationInput | DailyShipmentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyShipmentReports.
     */
    cursor?: DailyShipmentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyShipmentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyShipmentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyShipmentReports.
     */
    distinct?: DailyShipmentReportScalarFieldEnum | DailyShipmentReportScalarFieldEnum[]
  }

  /**
   * DailyShipmentReport findMany
   */
  export type DailyShipmentReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyShipmentReports to fetch.
     */
    where?: DailyShipmentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyShipmentReports to fetch.
     */
    orderBy?: DailyShipmentReportOrderByWithRelationInput | DailyShipmentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyShipmentReports.
     */
    cursor?: DailyShipmentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyShipmentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyShipmentReports.
     */
    skip?: number
    distinct?: DailyShipmentReportScalarFieldEnum | DailyShipmentReportScalarFieldEnum[]
  }

  /**
   * DailyShipmentReport create
   */
  export type DailyShipmentReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyShipmentReport.
     */
    data: XOR<DailyShipmentReportCreateInput, DailyShipmentReportUncheckedCreateInput>
  }

  /**
   * DailyShipmentReport createMany
   */
  export type DailyShipmentReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyShipmentReports.
     */
    data: DailyShipmentReportCreateManyInput | DailyShipmentReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyShipmentReport createManyAndReturn
   */
  export type DailyShipmentReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * The data used to create many DailyShipmentReports.
     */
    data: DailyShipmentReportCreateManyInput | DailyShipmentReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyShipmentReport update
   */
  export type DailyShipmentReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyShipmentReport.
     */
    data: XOR<DailyShipmentReportUpdateInput, DailyShipmentReportUncheckedUpdateInput>
    /**
     * Choose, which DailyShipmentReport to update.
     */
    where: DailyShipmentReportWhereUniqueInput
  }

  /**
   * DailyShipmentReport updateMany
   */
  export type DailyShipmentReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyShipmentReports.
     */
    data: XOR<DailyShipmentReportUpdateManyMutationInput, DailyShipmentReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyShipmentReports to update
     */
    where?: DailyShipmentReportWhereInput
    /**
     * Limit how many DailyShipmentReports to update.
     */
    limit?: number
  }

  /**
   * DailyShipmentReport updateManyAndReturn
   */
  export type DailyShipmentReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * The data used to update DailyShipmentReports.
     */
    data: XOR<DailyShipmentReportUpdateManyMutationInput, DailyShipmentReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyShipmentReports to update
     */
    where?: DailyShipmentReportWhereInput
    /**
     * Limit how many DailyShipmentReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyShipmentReport upsert
   */
  export type DailyShipmentReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyShipmentReport to update in case it exists.
     */
    where: DailyShipmentReportWhereUniqueInput
    /**
     * In case the DailyShipmentReport found by the `where` argument doesn't exist, create a new DailyShipmentReport with this data.
     */
    create: XOR<DailyShipmentReportCreateInput, DailyShipmentReportUncheckedCreateInput>
    /**
     * In case the DailyShipmentReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyShipmentReportUpdateInput, DailyShipmentReportUncheckedUpdateInput>
  }

  /**
   * DailyShipmentReport delete
   */
  export type DailyShipmentReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter which DailyShipmentReport to delete.
     */
    where: DailyShipmentReportWhereUniqueInput
  }

  /**
   * DailyShipmentReport deleteMany
   */
  export type DailyShipmentReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyShipmentReports to delete
     */
    where?: DailyShipmentReportWhereInput
    /**
     * Limit how many DailyShipmentReports to delete.
     */
    limit?: number
  }

  /**
   * DailyShipmentReport without action
   */
  export type DailyShipmentReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyShipmentReport
     */
    select?: DailyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyShipmentReport
     */
    omit?: DailyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyShipmentReportInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyShipmentReport
   */

  export type AggregateMonthlyShipmentReport = {
    _count: MonthlyShipmentReportCountAggregateOutputType | null
    _avg: MonthlyShipmentReportAvgAggregateOutputType | null
    _sum: MonthlyShipmentReportSumAggregateOutputType | null
    _min: MonthlyShipmentReportMinAggregateOutputType | null
    _max: MonthlyShipmentReportMaxAggregateOutputType | null
  }

  export type MonthlyShipmentReportAvgAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
    temperature: Decimal | null
    productId: number | null
    clientId: number | null
  }

  export type MonthlyShipmentReportSumAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
    temperature: Decimal | null
    productId: number | null
    clientId: number | null
  }

  export type MonthlyShipmentReportMinAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
    destination: string | null
    temperature: Decimal | null
    deliverer: string | null
    productionDate: Date | null
    shipmentDate: Date | null
    productId: number | null
    clientId: number | null
  }

  export type MonthlyShipmentReportMaxAggregateOutputType = {
    id: number | null
    quantity: Decimal | null
    destination: string | null
    temperature: Decimal | null
    deliverer: string | null
    productionDate: Date | null
    shipmentDate: Date | null
    productId: number | null
    clientId: number | null
  }

  export type MonthlyShipmentReportCountAggregateOutputType = {
    id: number
    quantity: number
    destination: number
    temperature: number
    deliverer: number
    productionDate: number
    shipmentDate: number
    productId: number
    clientId: number
    _all: number
  }


  export type MonthlyShipmentReportAvgAggregateInputType = {
    id?: true
    quantity?: true
    temperature?: true
    productId?: true
    clientId?: true
  }

  export type MonthlyShipmentReportSumAggregateInputType = {
    id?: true
    quantity?: true
    temperature?: true
    productId?: true
    clientId?: true
  }

  export type MonthlyShipmentReportMinAggregateInputType = {
    id?: true
    quantity?: true
    destination?: true
    temperature?: true
    deliverer?: true
    productionDate?: true
    shipmentDate?: true
    productId?: true
    clientId?: true
  }

  export type MonthlyShipmentReportMaxAggregateInputType = {
    id?: true
    quantity?: true
    destination?: true
    temperature?: true
    deliverer?: true
    productionDate?: true
    shipmentDate?: true
    productId?: true
    clientId?: true
  }

  export type MonthlyShipmentReportCountAggregateInputType = {
    id?: true
    quantity?: true
    destination?: true
    temperature?: true
    deliverer?: true
    productionDate?: true
    shipmentDate?: true
    productId?: true
    clientId?: true
    _all?: true
  }

  export type MonthlyShipmentReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyShipmentReport to aggregate.
     */
    where?: MonthlyShipmentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyShipmentReports to fetch.
     */
    orderBy?: MonthlyShipmentReportOrderByWithRelationInput | MonthlyShipmentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyShipmentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyShipmentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyShipmentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyShipmentReports
    **/
    _count?: true | MonthlyShipmentReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyShipmentReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyShipmentReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyShipmentReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyShipmentReportMaxAggregateInputType
  }

  export type GetMonthlyShipmentReportAggregateType<T extends MonthlyShipmentReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyShipmentReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyShipmentReport[P]>
      : GetScalarType<T[P], AggregateMonthlyShipmentReport[P]>
  }




  export type MonthlyShipmentReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyShipmentReportWhereInput
    orderBy?: MonthlyShipmentReportOrderByWithAggregationInput | MonthlyShipmentReportOrderByWithAggregationInput[]
    by: MonthlyShipmentReportScalarFieldEnum[] | MonthlyShipmentReportScalarFieldEnum
    having?: MonthlyShipmentReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyShipmentReportCountAggregateInputType | true
    _avg?: MonthlyShipmentReportAvgAggregateInputType
    _sum?: MonthlyShipmentReportSumAggregateInputType
    _min?: MonthlyShipmentReportMinAggregateInputType
    _max?: MonthlyShipmentReportMaxAggregateInputType
  }

  export type MonthlyShipmentReportGroupByOutputType = {
    id: number
    quantity: Decimal
    destination: string
    temperature: Decimal
    deliverer: string
    productionDate: Date
    shipmentDate: Date
    productId: number
    clientId: number
    _count: MonthlyShipmentReportCountAggregateOutputType | null
    _avg: MonthlyShipmentReportAvgAggregateOutputType | null
    _sum: MonthlyShipmentReportSumAggregateOutputType | null
    _min: MonthlyShipmentReportMinAggregateOutputType | null
    _max: MonthlyShipmentReportMaxAggregateOutputType | null
  }

  type GetMonthlyShipmentReportGroupByPayload<T extends MonthlyShipmentReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyShipmentReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyShipmentReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyShipmentReportGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyShipmentReportGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyShipmentReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    destination?: boolean
    temperature?: boolean
    deliverer?: boolean
    productionDate?: boolean
    shipmentDate?: boolean
    productId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyShipmentReport"]>

  export type MonthlyShipmentReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    destination?: boolean
    temperature?: boolean
    deliverer?: boolean
    productionDate?: boolean
    shipmentDate?: boolean
    productId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyShipmentReport"]>

  export type MonthlyShipmentReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    destination?: boolean
    temperature?: boolean
    deliverer?: boolean
    productionDate?: boolean
    shipmentDate?: boolean
    productId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyShipmentReport"]>

  export type MonthlyShipmentReportSelectScalar = {
    id?: boolean
    quantity?: boolean
    destination?: boolean
    temperature?: boolean
    deliverer?: boolean
    productionDate?: boolean
    shipmentDate?: boolean
    productId?: boolean
    clientId?: boolean
  }

  export type MonthlyShipmentReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "destination" | "temperature" | "deliverer" | "productionDate" | "shipmentDate" | "productId" | "clientId", ExtArgs["result"]["monthlyShipmentReport"]>
  export type MonthlyShipmentReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type MonthlyShipmentReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type MonthlyShipmentReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $MonthlyShipmentReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyShipmentReport"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: Prisma.Decimal
      destination: string
      temperature: Prisma.Decimal
      deliverer: string
      productionDate: Date
      shipmentDate: Date
      productId: number
      clientId: number
    }, ExtArgs["result"]["monthlyShipmentReport"]>
    composites: {}
  }

  type MonthlyShipmentReportGetPayload<S extends boolean | null | undefined | MonthlyShipmentReportDefaultArgs> = $Result.GetResult<Prisma.$MonthlyShipmentReportPayload, S>

  type MonthlyShipmentReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyShipmentReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyShipmentReportCountAggregateInputType | true
    }

  export interface MonthlyShipmentReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyShipmentReport'], meta: { name: 'MonthlyShipmentReport' } }
    /**
     * Find zero or one MonthlyShipmentReport that matches the filter.
     * @param {MonthlyShipmentReportFindUniqueArgs} args - Arguments to find a MonthlyShipmentReport
     * @example
     * // Get one MonthlyShipmentReport
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyShipmentReportFindUniqueArgs>(args: SelectSubset<T, MonthlyShipmentReportFindUniqueArgs<ExtArgs>>): Prisma__MonthlyShipmentReportClient<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyShipmentReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyShipmentReportFindUniqueOrThrowArgs} args - Arguments to find a MonthlyShipmentReport
     * @example
     * // Get one MonthlyShipmentReport
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyShipmentReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyShipmentReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyShipmentReportClient<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyShipmentReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyShipmentReportFindFirstArgs} args - Arguments to find a MonthlyShipmentReport
     * @example
     * // Get one MonthlyShipmentReport
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyShipmentReportFindFirstArgs>(args?: SelectSubset<T, MonthlyShipmentReportFindFirstArgs<ExtArgs>>): Prisma__MonthlyShipmentReportClient<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyShipmentReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyShipmentReportFindFirstOrThrowArgs} args - Arguments to find a MonthlyShipmentReport
     * @example
     * // Get one MonthlyShipmentReport
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyShipmentReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyShipmentReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyShipmentReportClient<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyShipmentReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyShipmentReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyShipmentReports
     * const monthlyShipmentReports = await prisma.monthlyShipmentReport.findMany()
     * 
     * // Get first 10 MonthlyShipmentReports
     * const monthlyShipmentReports = await prisma.monthlyShipmentReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyShipmentReportWithIdOnly = await prisma.monthlyShipmentReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyShipmentReportFindManyArgs>(args?: SelectSubset<T, MonthlyShipmentReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyShipmentReport.
     * @param {MonthlyShipmentReportCreateArgs} args - Arguments to create a MonthlyShipmentReport.
     * @example
     * // Create one MonthlyShipmentReport
     * const MonthlyShipmentReport = await prisma.monthlyShipmentReport.create({
     *   data: {
     *     // ... data to create a MonthlyShipmentReport
     *   }
     * })
     * 
     */
    create<T extends MonthlyShipmentReportCreateArgs>(args: SelectSubset<T, MonthlyShipmentReportCreateArgs<ExtArgs>>): Prisma__MonthlyShipmentReportClient<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyShipmentReports.
     * @param {MonthlyShipmentReportCreateManyArgs} args - Arguments to create many MonthlyShipmentReports.
     * @example
     * // Create many MonthlyShipmentReports
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyShipmentReportCreateManyArgs>(args?: SelectSubset<T, MonthlyShipmentReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyShipmentReports and returns the data saved in the database.
     * @param {MonthlyShipmentReportCreateManyAndReturnArgs} args - Arguments to create many MonthlyShipmentReports.
     * @example
     * // Create many MonthlyShipmentReports
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyShipmentReports and only return the `id`
     * const monthlyShipmentReportWithIdOnly = await prisma.monthlyShipmentReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyShipmentReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyShipmentReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlyShipmentReport.
     * @param {MonthlyShipmentReportDeleteArgs} args - Arguments to delete one MonthlyShipmentReport.
     * @example
     * // Delete one MonthlyShipmentReport
     * const MonthlyShipmentReport = await prisma.monthlyShipmentReport.delete({
     *   where: {
     *     // ... filter to delete one MonthlyShipmentReport
     *   }
     * })
     * 
     */
    delete<T extends MonthlyShipmentReportDeleteArgs>(args: SelectSubset<T, MonthlyShipmentReportDeleteArgs<ExtArgs>>): Prisma__MonthlyShipmentReportClient<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyShipmentReport.
     * @param {MonthlyShipmentReportUpdateArgs} args - Arguments to update one MonthlyShipmentReport.
     * @example
     * // Update one MonthlyShipmentReport
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyShipmentReportUpdateArgs>(args: SelectSubset<T, MonthlyShipmentReportUpdateArgs<ExtArgs>>): Prisma__MonthlyShipmentReportClient<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyShipmentReports.
     * @param {MonthlyShipmentReportDeleteManyArgs} args - Arguments to filter MonthlyShipmentReports to delete.
     * @example
     * // Delete a few MonthlyShipmentReports
     * const { count } = await prisma.monthlyShipmentReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyShipmentReportDeleteManyArgs>(args?: SelectSubset<T, MonthlyShipmentReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyShipmentReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyShipmentReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyShipmentReports
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyShipmentReportUpdateManyArgs>(args: SelectSubset<T, MonthlyShipmentReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyShipmentReports and returns the data updated in the database.
     * @param {MonthlyShipmentReportUpdateManyAndReturnArgs} args - Arguments to update many MonthlyShipmentReports.
     * @example
     * // Update many MonthlyShipmentReports
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlyShipmentReports and only return the `id`
     * const monthlyShipmentReportWithIdOnly = await prisma.monthlyShipmentReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends MonthlyShipmentReportUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlyShipmentReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlyShipmentReport.
     * @param {MonthlyShipmentReportUpsertArgs} args - Arguments to update or create a MonthlyShipmentReport.
     * @example
     * // Update or create a MonthlyShipmentReport
     * const monthlyShipmentReport = await prisma.monthlyShipmentReport.upsert({
     *   create: {
     *     // ... data to create a MonthlyShipmentReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyShipmentReport we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyShipmentReportUpsertArgs>(args: SelectSubset<T, MonthlyShipmentReportUpsertArgs<ExtArgs>>): Prisma__MonthlyShipmentReportClient<$Result.GetResult<Prisma.$MonthlyShipmentReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyShipmentReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyShipmentReportCountArgs} args - Arguments to filter MonthlyShipmentReports to count.
     * @example
     * // Count the number of MonthlyShipmentReports
     * const count = await prisma.monthlyShipmentReport.count({
     *   where: {
     *     // ... the filter for the MonthlyShipmentReports we want to count
     *   }
     * })
    **/
    count<T extends MonthlyShipmentReportCountArgs>(
      args?: Subset<T, MonthlyShipmentReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyShipmentReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyShipmentReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyShipmentReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyShipmentReportAggregateArgs>(args: Subset<T, MonthlyShipmentReportAggregateArgs>): Prisma.PrismaPromise<GetMonthlyShipmentReportAggregateType<T>>

    /**
     * Group by MonthlyShipmentReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyShipmentReportGroupByArgs} args - Group by arguments.
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
      T extends MonthlyShipmentReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyShipmentReportGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyShipmentReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlyShipmentReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyShipmentReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyShipmentReport model
   */
  readonly fields: MonthlyShipmentReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyShipmentReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyShipmentReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MonthlyShipmentReport model
   */
  interface MonthlyShipmentReportFieldRefs {
    readonly id: FieldRef<"MonthlyShipmentReport", 'Int'>
    readonly quantity: FieldRef<"MonthlyShipmentReport", 'Decimal'>
    readonly destination: FieldRef<"MonthlyShipmentReport", 'String'>
    readonly temperature: FieldRef<"MonthlyShipmentReport", 'Decimal'>
    readonly deliverer: FieldRef<"MonthlyShipmentReport", 'String'>
    readonly productionDate: FieldRef<"MonthlyShipmentReport", 'DateTime'>
    readonly shipmentDate: FieldRef<"MonthlyShipmentReport", 'DateTime'>
    readonly productId: FieldRef<"MonthlyShipmentReport", 'Int'>
    readonly clientId: FieldRef<"MonthlyShipmentReport", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyShipmentReport findUnique
   */
  export type MonthlyShipmentReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyShipmentReport to fetch.
     */
    where: MonthlyShipmentReportWhereUniqueInput
  }

  /**
   * MonthlyShipmentReport findUniqueOrThrow
   */
  export type MonthlyShipmentReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyShipmentReport to fetch.
     */
    where: MonthlyShipmentReportWhereUniqueInput
  }

  /**
   * MonthlyShipmentReport findFirst
   */
  export type MonthlyShipmentReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyShipmentReport to fetch.
     */
    where?: MonthlyShipmentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyShipmentReports to fetch.
     */
    orderBy?: MonthlyShipmentReportOrderByWithRelationInput | MonthlyShipmentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyShipmentReports.
     */
    cursor?: MonthlyShipmentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyShipmentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyShipmentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyShipmentReports.
     */
    distinct?: MonthlyShipmentReportScalarFieldEnum | MonthlyShipmentReportScalarFieldEnum[]
  }

  /**
   * MonthlyShipmentReport findFirstOrThrow
   */
  export type MonthlyShipmentReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyShipmentReport to fetch.
     */
    where?: MonthlyShipmentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyShipmentReports to fetch.
     */
    orderBy?: MonthlyShipmentReportOrderByWithRelationInput | MonthlyShipmentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyShipmentReports.
     */
    cursor?: MonthlyShipmentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyShipmentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyShipmentReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyShipmentReports.
     */
    distinct?: MonthlyShipmentReportScalarFieldEnum | MonthlyShipmentReportScalarFieldEnum[]
  }

  /**
   * MonthlyShipmentReport findMany
   */
  export type MonthlyShipmentReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyShipmentReports to fetch.
     */
    where?: MonthlyShipmentReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyShipmentReports to fetch.
     */
    orderBy?: MonthlyShipmentReportOrderByWithRelationInput | MonthlyShipmentReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyShipmentReports.
     */
    cursor?: MonthlyShipmentReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyShipmentReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyShipmentReports.
     */
    skip?: number
    distinct?: MonthlyShipmentReportScalarFieldEnum | MonthlyShipmentReportScalarFieldEnum[]
  }

  /**
   * MonthlyShipmentReport create
   */
  export type MonthlyShipmentReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyShipmentReport.
     */
    data: XOR<MonthlyShipmentReportCreateInput, MonthlyShipmentReportUncheckedCreateInput>
  }

  /**
   * MonthlyShipmentReport createMany
   */
  export type MonthlyShipmentReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyShipmentReports.
     */
    data: MonthlyShipmentReportCreateManyInput | MonthlyShipmentReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyShipmentReport createManyAndReturn
   */
  export type MonthlyShipmentReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlyShipmentReports.
     */
    data: MonthlyShipmentReportCreateManyInput | MonthlyShipmentReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyShipmentReport update
   */
  export type MonthlyShipmentReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyShipmentReport.
     */
    data: XOR<MonthlyShipmentReportUpdateInput, MonthlyShipmentReportUncheckedUpdateInput>
    /**
     * Choose, which MonthlyShipmentReport to update.
     */
    where: MonthlyShipmentReportWhereUniqueInput
  }

  /**
   * MonthlyShipmentReport updateMany
   */
  export type MonthlyShipmentReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyShipmentReports.
     */
    data: XOR<MonthlyShipmentReportUpdateManyMutationInput, MonthlyShipmentReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyShipmentReports to update
     */
    where?: MonthlyShipmentReportWhereInput
    /**
     * Limit how many MonthlyShipmentReports to update.
     */
    limit?: number
  }

  /**
   * MonthlyShipmentReport updateManyAndReturn
   */
  export type MonthlyShipmentReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * The data used to update MonthlyShipmentReports.
     */
    data: XOR<MonthlyShipmentReportUpdateManyMutationInput, MonthlyShipmentReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyShipmentReports to update
     */
    where?: MonthlyShipmentReportWhereInput
    /**
     * Limit how many MonthlyShipmentReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyShipmentReport upsert
   */
  export type MonthlyShipmentReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyShipmentReport to update in case it exists.
     */
    where: MonthlyShipmentReportWhereUniqueInput
    /**
     * In case the MonthlyShipmentReport found by the `where` argument doesn't exist, create a new MonthlyShipmentReport with this data.
     */
    create: XOR<MonthlyShipmentReportCreateInput, MonthlyShipmentReportUncheckedCreateInput>
    /**
     * In case the MonthlyShipmentReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyShipmentReportUpdateInput, MonthlyShipmentReportUncheckedUpdateInput>
  }

  /**
   * MonthlyShipmentReport delete
   */
  export type MonthlyShipmentReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
    /**
     * Filter which MonthlyShipmentReport to delete.
     */
    where: MonthlyShipmentReportWhereUniqueInput
  }

  /**
   * MonthlyShipmentReport deleteMany
   */
  export type MonthlyShipmentReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyShipmentReports to delete
     */
    where?: MonthlyShipmentReportWhereInput
    /**
     * Limit how many MonthlyShipmentReports to delete.
     */
    limit?: number
  }

  /**
   * MonthlyShipmentReport without action
   */
  export type MonthlyShipmentReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyShipmentReport
     */
    select?: MonthlyShipmentReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyShipmentReport
     */
    omit?: MonthlyShipmentReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyShipmentReportInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    cnpj: 'cnpj',
    address: 'address',
    phone: 'phone',
    identificationCode: 'identificationCode'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    quantity: 'quantity',
    expiration: 'expiration'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    model: 'model',
    plate: 'plate',
    category: 'category',
    brand: 'brand'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const DailyShipmentReportScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    invoiceNumber: 'invoiceNumber',
    productionDate: 'productionDate',
    destination: 'destination',
    temperature: 'temperature',
    sanitaryCondition: 'sanitaryCondition',
    deliverer: 'deliverer',
    userId: 'userId',
    vehicleId: 'vehicleId',
    productId: 'productId',
    clientId: 'clientId'
  };

  export type DailyShipmentReportScalarFieldEnum = (typeof DailyShipmentReportScalarFieldEnum)[keyof typeof DailyShipmentReportScalarFieldEnum]


  export const MonthlyShipmentReportScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    destination: 'destination',
    temperature: 'temperature',
    deliverer: 'deliverer',
    productionDate: 'productionDate',
    shipmentDate: 'shipmentDate',
    productId: 'productId',
    clientId: 'clientId'
  };

  export type MonthlyShipmentReportScalarFieldEnum = (typeof MonthlyShipmentReportScalarFieldEnum)[keyof typeof MonthlyShipmentReportScalarFieldEnum]


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
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumroleFilter<"Users"> | $Enums.role
    dailyReports?: DailyShipmentReportListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    dailyReports?: DailyShipmentReportOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumroleFilter<"Users"> | $Enums.role
    dailyReports?: DailyShipmentReportListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumroleWithAggregatesFilter<"Users"> | $Enums.role
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    cpf?: StringFilter<"Client"> | string
    cnpj?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    identificationCode?: StringFilter<"Client"> | string
    dailyReports?: DailyShipmentReportListRelationFilter
    monthlyReports?: MonthlyShipmentReportListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    identificationCode?: SortOrder
    dailyReports?: DailyShipmentReportOrderByRelationAggregateInput
    monthlyReports?: MonthlyShipmentReportOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    cpf?: StringFilter<"Client"> | string
    cnpj?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    identificationCode?: StringFilter<"Client"> | string
    dailyReports?: DailyShipmentReportListRelationFilter
    monthlyReports?: MonthlyShipmentReportListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    identificationCode?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    cpf?: StringWithAggregatesFilter<"Client"> | string
    cnpj?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    identificationCode?: StringWithAggregatesFilter<"Client"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFilter<"Product"> | Date | string
    dailyReports?: DailyShipmentReportListRelationFilter
    monthlyReports?: MonthlyShipmentReportListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    expiration?: SortOrder
    dailyReports?: DailyShipmentReportOrderByRelationAggregateInput
    monthlyReports?: MonthlyShipmentReportOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFilter<"Product"> | Date | string
    dailyReports?: DailyShipmentReportListRelationFilter
    monthlyReports?: MonthlyShipmentReportListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    expiration?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    unit?: StringWithAggregatesFilter<"Product"> | string
    quantity?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    model?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    category?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    dailyReports?: DailyShipmentReportListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    dailyReports?: DailyShipmentReportOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    model?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    category?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    dailyReports?: DailyShipmentReportListRelationFilter
  }, "id">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicle"> | number
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    category?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type DailyShipmentReportWhereInput = {
    AND?: DailyShipmentReportWhereInput | DailyShipmentReportWhereInput[]
    OR?: DailyShipmentReportWhereInput[]
    NOT?: DailyShipmentReportWhereInput | DailyShipmentReportWhereInput[]
    id?: IntFilter<"DailyShipmentReport"> | number
    quantity?: IntFilter<"DailyShipmentReport"> | number
    invoiceNumber?: IntFilter<"DailyShipmentReport"> | number
    productionDate?: DateTimeFilter<"DailyShipmentReport"> | Date | string
    destination?: StringFilter<"DailyShipmentReport"> | string
    temperature?: DecimalFilter<"DailyShipmentReport"> | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFilter<"DailyShipmentReport"> | boolean
    deliverer?: StringFilter<"DailyShipmentReport"> | string
    userId?: IntFilter<"DailyShipmentReport"> | number
    vehicleId?: IntFilter<"DailyShipmentReport"> | number
    productId?: IntFilter<"DailyShipmentReport"> | number
    clientId?: IntFilter<"DailyShipmentReport"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type DailyShipmentReportOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    invoiceNumber?: SortOrder
    productionDate?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    sanitaryCondition?: SortOrder
    deliverer?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    users?: UsersOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type DailyShipmentReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyShipmentReportWhereInput | DailyShipmentReportWhereInput[]
    OR?: DailyShipmentReportWhereInput[]
    NOT?: DailyShipmentReportWhereInput | DailyShipmentReportWhereInput[]
    quantity?: IntFilter<"DailyShipmentReport"> | number
    invoiceNumber?: IntFilter<"DailyShipmentReport"> | number
    productionDate?: DateTimeFilter<"DailyShipmentReport"> | Date | string
    destination?: StringFilter<"DailyShipmentReport"> | string
    temperature?: DecimalFilter<"DailyShipmentReport"> | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFilter<"DailyShipmentReport"> | boolean
    deliverer?: StringFilter<"DailyShipmentReport"> | string
    userId?: IntFilter<"DailyShipmentReport"> | number
    vehicleId?: IntFilter<"DailyShipmentReport"> | number
    productId?: IntFilter<"DailyShipmentReport"> | number
    clientId?: IntFilter<"DailyShipmentReport"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id">

  export type DailyShipmentReportOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    invoiceNumber?: SortOrder
    productionDate?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    sanitaryCondition?: SortOrder
    deliverer?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
    _count?: DailyShipmentReportCountOrderByAggregateInput
    _avg?: DailyShipmentReportAvgOrderByAggregateInput
    _max?: DailyShipmentReportMaxOrderByAggregateInput
    _min?: DailyShipmentReportMinOrderByAggregateInput
    _sum?: DailyShipmentReportSumOrderByAggregateInput
  }

  export type DailyShipmentReportScalarWhereWithAggregatesInput = {
    AND?: DailyShipmentReportScalarWhereWithAggregatesInput | DailyShipmentReportScalarWhereWithAggregatesInput[]
    OR?: DailyShipmentReportScalarWhereWithAggregatesInput[]
    NOT?: DailyShipmentReportScalarWhereWithAggregatesInput | DailyShipmentReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyShipmentReport"> | number
    quantity?: IntWithAggregatesFilter<"DailyShipmentReport"> | number
    invoiceNumber?: IntWithAggregatesFilter<"DailyShipmentReport"> | number
    productionDate?: DateTimeWithAggregatesFilter<"DailyShipmentReport"> | Date | string
    destination?: StringWithAggregatesFilter<"DailyShipmentReport"> | string
    temperature?: DecimalWithAggregatesFilter<"DailyShipmentReport"> | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolWithAggregatesFilter<"DailyShipmentReport"> | boolean
    deliverer?: StringWithAggregatesFilter<"DailyShipmentReport"> | string
    userId?: IntWithAggregatesFilter<"DailyShipmentReport"> | number
    vehicleId?: IntWithAggregatesFilter<"DailyShipmentReport"> | number
    productId?: IntWithAggregatesFilter<"DailyShipmentReport"> | number
    clientId?: IntWithAggregatesFilter<"DailyShipmentReport"> | number
  }

  export type MonthlyShipmentReportWhereInput = {
    AND?: MonthlyShipmentReportWhereInput | MonthlyShipmentReportWhereInput[]
    OR?: MonthlyShipmentReportWhereInput[]
    NOT?: MonthlyShipmentReportWhereInput | MonthlyShipmentReportWhereInput[]
    id?: IntFilter<"MonthlyShipmentReport"> | number
    quantity?: DecimalFilter<"MonthlyShipmentReport"> | Decimal | DecimalJsLike | number | string
    destination?: StringFilter<"MonthlyShipmentReport"> | string
    temperature?: DecimalFilter<"MonthlyShipmentReport"> | Decimal | DecimalJsLike | number | string
    deliverer?: StringFilter<"MonthlyShipmentReport"> | string
    productionDate?: DateTimeFilter<"MonthlyShipmentReport"> | Date | string
    shipmentDate?: DateTimeFilter<"MonthlyShipmentReport"> | Date | string
    productId?: IntFilter<"MonthlyShipmentReport"> | number
    clientId?: IntFilter<"MonthlyShipmentReport"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type MonthlyShipmentReportOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    deliverer?: SortOrder
    productionDate?: SortOrder
    shipmentDate?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type MonthlyShipmentReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MonthlyShipmentReportWhereInput | MonthlyShipmentReportWhereInput[]
    OR?: MonthlyShipmentReportWhereInput[]
    NOT?: MonthlyShipmentReportWhereInput | MonthlyShipmentReportWhereInput[]
    quantity?: DecimalFilter<"MonthlyShipmentReport"> | Decimal | DecimalJsLike | number | string
    destination?: StringFilter<"MonthlyShipmentReport"> | string
    temperature?: DecimalFilter<"MonthlyShipmentReport"> | Decimal | DecimalJsLike | number | string
    deliverer?: StringFilter<"MonthlyShipmentReport"> | string
    productionDate?: DateTimeFilter<"MonthlyShipmentReport"> | Date | string
    shipmentDate?: DateTimeFilter<"MonthlyShipmentReport"> | Date | string
    productId?: IntFilter<"MonthlyShipmentReport"> | number
    clientId?: IntFilter<"MonthlyShipmentReport"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type MonthlyShipmentReportOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    deliverer?: SortOrder
    productionDate?: SortOrder
    shipmentDate?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
    _count?: MonthlyShipmentReportCountOrderByAggregateInput
    _avg?: MonthlyShipmentReportAvgOrderByAggregateInput
    _max?: MonthlyShipmentReportMaxOrderByAggregateInput
    _min?: MonthlyShipmentReportMinOrderByAggregateInput
    _sum?: MonthlyShipmentReportSumOrderByAggregateInput
  }

  export type MonthlyShipmentReportScalarWhereWithAggregatesInput = {
    AND?: MonthlyShipmentReportScalarWhereWithAggregatesInput | MonthlyShipmentReportScalarWhereWithAggregatesInput[]
    OR?: MonthlyShipmentReportScalarWhereWithAggregatesInput[]
    NOT?: MonthlyShipmentReportScalarWhereWithAggregatesInput | MonthlyShipmentReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonthlyShipmentReport"> | number
    quantity?: DecimalWithAggregatesFilter<"MonthlyShipmentReport"> | Decimal | DecimalJsLike | number | string
    destination?: StringWithAggregatesFilter<"MonthlyShipmentReport"> | string
    temperature?: DecimalWithAggregatesFilter<"MonthlyShipmentReport"> | Decimal | DecimalJsLike | number | string
    deliverer?: StringWithAggregatesFilter<"MonthlyShipmentReport"> | string
    productionDate?: DateTimeWithAggregatesFilter<"MonthlyShipmentReport"> | Date | string
    shipmentDate?: DateTimeWithAggregatesFilter<"MonthlyShipmentReport"> | Date | string
    productId?: IntWithAggregatesFilter<"MonthlyShipmentReport"> | number
    clientId?: IntWithAggregatesFilter<"MonthlyShipmentReport"> | number
  }

  export type UsersCreateInput = {
    name: string
    username: string
    password: string
    role?: $Enums.role
    dailyReports?: DailyShipmentReportCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: $Enums.role
    dailyReports?: DailyShipmentReportUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    dailyReports?: DailyShipmentReportUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    dailyReports?: DailyShipmentReportUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: $Enums.role
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
  }

  export type ClientCreateInput = {
    name: string
    cpf: string
    cnpj: string
    address: string
    phone: string
    identificationCode: string
    dailyReports?: DailyShipmentReportCreateNestedManyWithoutClientInput
    monthlyReports?: MonthlyShipmentReportCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    cpf: string
    cnpj: string
    address: string
    phone: string
    identificationCode: string
    dailyReports?: DailyShipmentReportUncheckedCreateNestedManyWithoutClientInput
    monthlyReports?: MonthlyShipmentReportUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    identificationCode?: StringFieldUpdateOperationsInput | string
    dailyReports?: DailyShipmentReportUpdateManyWithoutClientNestedInput
    monthlyReports?: MonthlyShipmentReportUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    identificationCode?: StringFieldUpdateOperationsInput | string
    dailyReports?: DailyShipmentReportUncheckedUpdateManyWithoutClientNestedInput
    monthlyReports?: MonthlyShipmentReportUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    cpf: string
    cnpj: string
    address: string
    phone: string
    identificationCode: string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    identificationCode?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    identificationCode?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    name: string
    unit: string
    quantity: Decimal | DecimalJsLike | number | string
    expiration: Date | string
    dailyReports?: DailyShipmentReportCreateNestedManyWithoutProductInput
    monthlyReports?: MonthlyShipmentReportCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    unit: string
    quantity: Decimal | DecimalJsLike | number | string
    expiration: Date | string
    dailyReports?: DailyShipmentReportUncheckedCreateNestedManyWithoutProductInput
    monthlyReports?: MonthlyShipmentReportUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyShipmentReportUpdateManyWithoutProductNestedInput
    monthlyReports?: MonthlyShipmentReportUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyShipmentReportUncheckedUpdateManyWithoutProductNestedInput
    monthlyReports?: MonthlyShipmentReportUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    unit: string
    quantity: Decimal | DecimalJsLike | number | string
    expiration: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    model: string
    plate: string
    category: string
    brand: string
    dailyReports?: DailyShipmentReportCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: number
    model: string
    plate: string
    category: string
    brand: string
    dailyReports?: DailyShipmentReportUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    dailyReports?: DailyShipmentReportUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    dailyReports?: DailyShipmentReportUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: number
    model: string
    plate: string
    category: string
    brand: string
  }

  export type VehicleUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
  }

  export type DailyShipmentReportCreateInput = {
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    client: ClientCreateNestedOneWithoutDailyReportsInput
    product: ProductCreateNestedOneWithoutDailyReportsInput
    users: UsersCreateNestedOneWithoutDailyReportsInput
    vehicle: VehicleCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyShipmentReportUncheckedCreateInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    vehicleId: number
    productId: number
    clientId: number
  }

  export type DailyShipmentReportUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutDailyReportsNestedInput
    product?: ProductUpdateOneRequiredWithoutDailyReportsNestedInput
    users?: UsersUpdateOneRequiredWithoutDailyReportsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyShipmentReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyShipmentReportCreateManyInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    vehicleId: number
    productId: number
    clientId: number
  }

  export type DailyShipmentReportUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
  }

  export type DailyShipmentReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MonthlyShipmentReportCreateInput = {
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    client: ClientCreateNestedOneWithoutMonthlyReportsInput
    product: ProductCreateNestedOneWithoutMonthlyReportsInput
  }

  export type MonthlyShipmentReportUncheckedCreateInput = {
    id?: number
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    productId: number
    clientId: number
  }

  export type MonthlyShipmentReportUpdateInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutMonthlyReportsNestedInput
    product?: ProductUpdateOneRequiredWithoutMonthlyReportsNestedInput
  }

  export type MonthlyShipmentReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MonthlyShipmentReportCreateManyInput = {
    id?: number
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    productId: number
    clientId: number
  }

  export type MonthlyShipmentReportUpdateManyMutationInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyShipmentReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
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

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type DailyShipmentReportListRelationFilter = {
    every?: DailyShipmentReportWhereInput
    some?: DailyShipmentReportWhereInput
    none?: DailyShipmentReportWhereInput
  }

  export type DailyShipmentReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
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

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type MonthlyShipmentReportListRelationFilter = {
    every?: MonthlyShipmentReportWhereInput
    some?: MonthlyShipmentReportWhereInput
    none?: MonthlyShipmentReportWhereInput
  }

  export type MonthlyShipmentReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    identificationCode?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    identificationCode?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    identificationCode?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
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

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    expiration?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    expiration?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    expiration?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
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

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    category?: SortOrder
    brand?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    category?: SortOrder
    brand?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    plate?: SortOrder
    category?: SortOrder
    brand?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type DailyShipmentReportCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    invoiceNumber?: SortOrder
    productionDate?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    sanitaryCondition?: SortOrder
    deliverer?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type DailyShipmentReportAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    invoiceNumber?: SortOrder
    temperature?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type DailyShipmentReportMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    invoiceNumber?: SortOrder
    productionDate?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    sanitaryCondition?: SortOrder
    deliverer?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type DailyShipmentReportMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    invoiceNumber?: SortOrder
    productionDate?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    sanitaryCondition?: SortOrder
    deliverer?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type DailyShipmentReportSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    invoiceNumber?: SortOrder
    temperature?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MonthlyShipmentReportCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    deliverer?: SortOrder
    productionDate?: SortOrder
    shipmentDate?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type MonthlyShipmentReportAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    temperature?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type MonthlyShipmentReportMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    deliverer?: SortOrder
    productionDate?: SortOrder
    shipmentDate?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type MonthlyShipmentReportMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    destination?: SortOrder
    temperature?: SortOrder
    deliverer?: SortOrder
    productionDate?: SortOrder
    shipmentDate?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type MonthlyShipmentReportSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    temperature?: SortOrder
    productId?: SortOrder
    clientId?: SortOrder
  }

  export type DailyShipmentReportCreateNestedManyWithoutUsersInput = {
    create?: XOR<DailyShipmentReportCreateWithoutUsersInput, DailyShipmentReportUncheckedCreateWithoutUsersInput> | DailyShipmentReportCreateWithoutUsersInput[] | DailyShipmentReportUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutUsersInput | DailyShipmentReportCreateOrConnectWithoutUsersInput[]
    createMany?: DailyShipmentReportCreateManyUsersInputEnvelope
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
  }

  export type DailyShipmentReportUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<DailyShipmentReportCreateWithoutUsersInput, DailyShipmentReportUncheckedCreateWithoutUsersInput> | DailyShipmentReportCreateWithoutUsersInput[] | DailyShipmentReportUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutUsersInput | DailyShipmentReportCreateOrConnectWithoutUsersInput[]
    createMany?: DailyShipmentReportCreateManyUsersInputEnvelope
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type DailyShipmentReportUpdateManyWithoutUsersNestedInput = {
    create?: XOR<DailyShipmentReportCreateWithoutUsersInput, DailyShipmentReportUncheckedCreateWithoutUsersInput> | DailyShipmentReportCreateWithoutUsersInput[] | DailyShipmentReportUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutUsersInput | DailyShipmentReportCreateOrConnectWithoutUsersInput[]
    upsert?: DailyShipmentReportUpsertWithWhereUniqueWithoutUsersInput | DailyShipmentReportUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: DailyShipmentReportCreateManyUsersInputEnvelope
    set?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    disconnect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    delete?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    update?: DailyShipmentReportUpdateWithWhereUniqueWithoutUsersInput | DailyShipmentReportUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: DailyShipmentReportUpdateManyWithWhereWithoutUsersInput | DailyShipmentReportUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailyShipmentReportUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<DailyShipmentReportCreateWithoutUsersInput, DailyShipmentReportUncheckedCreateWithoutUsersInput> | DailyShipmentReportCreateWithoutUsersInput[] | DailyShipmentReportUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutUsersInput | DailyShipmentReportCreateOrConnectWithoutUsersInput[]
    upsert?: DailyShipmentReportUpsertWithWhereUniqueWithoutUsersInput | DailyShipmentReportUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: DailyShipmentReportCreateManyUsersInputEnvelope
    set?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    disconnect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    delete?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    update?: DailyShipmentReportUpdateWithWhereUniqueWithoutUsersInput | DailyShipmentReportUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: DailyShipmentReportUpdateManyWithWhereWithoutUsersInput | DailyShipmentReportUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
  }

  export type DailyShipmentReportCreateNestedManyWithoutClientInput = {
    create?: XOR<DailyShipmentReportCreateWithoutClientInput, DailyShipmentReportUncheckedCreateWithoutClientInput> | DailyShipmentReportCreateWithoutClientInput[] | DailyShipmentReportUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutClientInput | DailyShipmentReportCreateOrConnectWithoutClientInput[]
    createMany?: DailyShipmentReportCreateManyClientInputEnvelope
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
  }

  export type MonthlyShipmentReportCreateNestedManyWithoutClientInput = {
    create?: XOR<MonthlyShipmentReportCreateWithoutClientInput, MonthlyShipmentReportUncheckedCreateWithoutClientInput> | MonthlyShipmentReportCreateWithoutClientInput[] | MonthlyShipmentReportUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MonthlyShipmentReportCreateOrConnectWithoutClientInput | MonthlyShipmentReportCreateOrConnectWithoutClientInput[]
    createMany?: MonthlyShipmentReportCreateManyClientInputEnvelope
    connect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
  }

  export type DailyShipmentReportUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DailyShipmentReportCreateWithoutClientInput, DailyShipmentReportUncheckedCreateWithoutClientInput> | DailyShipmentReportCreateWithoutClientInput[] | DailyShipmentReportUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutClientInput | DailyShipmentReportCreateOrConnectWithoutClientInput[]
    createMany?: DailyShipmentReportCreateManyClientInputEnvelope
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
  }

  export type MonthlyShipmentReportUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MonthlyShipmentReportCreateWithoutClientInput, MonthlyShipmentReportUncheckedCreateWithoutClientInput> | MonthlyShipmentReportCreateWithoutClientInput[] | MonthlyShipmentReportUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MonthlyShipmentReportCreateOrConnectWithoutClientInput | MonthlyShipmentReportCreateOrConnectWithoutClientInput[]
    createMany?: MonthlyShipmentReportCreateManyClientInputEnvelope
    connect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
  }

  export type DailyShipmentReportUpdateManyWithoutClientNestedInput = {
    create?: XOR<DailyShipmentReportCreateWithoutClientInput, DailyShipmentReportUncheckedCreateWithoutClientInput> | DailyShipmentReportCreateWithoutClientInput[] | DailyShipmentReportUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutClientInput | DailyShipmentReportCreateOrConnectWithoutClientInput[]
    upsert?: DailyShipmentReportUpsertWithWhereUniqueWithoutClientInput | DailyShipmentReportUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DailyShipmentReportCreateManyClientInputEnvelope
    set?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    disconnect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    delete?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    update?: DailyShipmentReportUpdateWithWhereUniqueWithoutClientInput | DailyShipmentReportUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DailyShipmentReportUpdateManyWithWhereWithoutClientInput | DailyShipmentReportUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
  }

  export type MonthlyShipmentReportUpdateManyWithoutClientNestedInput = {
    create?: XOR<MonthlyShipmentReportCreateWithoutClientInput, MonthlyShipmentReportUncheckedCreateWithoutClientInput> | MonthlyShipmentReportCreateWithoutClientInput[] | MonthlyShipmentReportUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MonthlyShipmentReportCreateOrConnectWithoutClientInput | MonthlyShipmentReportCreateOrConnectWithoutClientInput[]
    upsert?: MonthlyShipmentReportUpsertWithWhereUniqueWithoutClientInput | MonthlyShipmentReportUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MonthlyShipmentReportCreateManyClientInputEnvelope
    set?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    disconnect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    delete?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    connect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    update?: MonthlyShipmentReportUpdateWithWhereUniqueWithoutClientInput | MonthlyShipmentReportUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MonthlyShipmentReportUpdateManyWithWhereWithoutClientInput | MonthlyShipmentReportUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MonthlyShipmentReportScalarWhereInput | MonthlyShipmentReportScalarWhereInput[]
  }

  export type DailyShipmentReportUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DailyShipmentReportCreateWithoutClientInput, DailyShipmentReportUncheckedCreateWithoutClientInput> | DailyShipmentReportCreateWithoutClientInput[] | DailyShipmentReportUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutClientInput | DailyShipmentReportCreateOrConnectWithoutClientInput[]
    upsert?: DailyShipmentReportUpsertWithWhereUniqueWithoutClientInput | DailyShipmentReportUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DailyShipmentReportCreateManyClientInputEnvelope
    set?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    disconnect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    delete?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    update?: DailyShipmentReportUpdateWithWhereUniqueWithoutClientInput | DailyShipmentReportUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DailyShipmentReportUpdateManyWithWhereWithoutClientInput | DailyShipmentReportUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
  }

  export type MonthlyShipmentReportUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MonthlyShipmentReportCreateWithoutClientInput, MonthlyShipmentReportUncheckedCreateWithoutClientInput> | MonthlyShipmentReportCreateWithoutClientInput[] | MonthlyShipmentReportUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MonthlyShipmentReportCreateOrConnectWithoutClientInput | MonthlyShipmentReportCreateOrConnectWithoutClientInput[]
    upsert?: MonthlyShipmentReportUpsertWithWhereUniqueWithoutClientInput | MonthlyShipmentReportUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MonthlyShipmentReportCreateManyClientInputEnvelope
    set?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    disconnect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    delete?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    connect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    update?: MonthlyShipmentReportUpdateWithWhereUniqueWithoutClientInput | MonthlyShipmentReportUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MonthlyShipmentReportUpdateManyWithWhereWithoutClientInput | MonthlyShipmentReportUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MonthlyShipmentReportScalarWhereInput | MonthlyShipmentReportScalarWhereInput[]
  }

  export type DailyShipmentReportCreateNestedManyWithoutProductInput = {
    create?: XOR<DailyShipmentReportCreateWithoutProductInput, DailyShipmentReportUncheckedCreateWithoutProductInput> | DailyShipmentReportCreateWithoutProductInput[] | DailyShipmentReportUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutProductInput | DailyShipmentReportCreateOrConnectWithoutProductInput[]
    createMany?: DailyShipmentReportCreateManyProductInputEnvelope
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
  }

  export type MonthlyShipmentReportCreateNestedManyWithoutProductInput = {
    create?: XOR<MonthlyShipmentReportCreateWithoutProductInput, MonthlyShipmentReportUncheckedCreateWithoutProductInput> | MonthlyShipmentReportCreateWithoutProductInput[] | MonthlyShipmentReportUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MonthlyShipmentReportCreateOrConnectWithoutProductInput | MonthlyShipmentReportCreateOrConnectWithoutProductInput[]
    createMany?: MonthlyShipmentReportCreateManyProductInputEnvelope
    connect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
  }

  export type DailyShipmentReportUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DailyShipmentReportCreateWithoutProductInput, DailyShipmentReportUncheckedCreateWithoutProductInput> | DailyShipmentReportCreateWithoutProductInput[] | DailyShipmentReportUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutProductInput | DailyShipmentReportCreateOrConnectWithoutProductInput[]
    createMany?: DailyShipmentReportCreateManyProductInputEnvelope
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
  }

  export type MonthlyShipmentReportUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<MonthlyShipmentReportCreateWithoutProductInput, MonthlyShipmentReportUncheckedCreateWithoutProductInput> | MonthlyShipmentReportCreateWithoutProductInput[] | MonthlyShipmentReportUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MonthlyShipmentReportCreateOrConnectWithoutProductInput | MonthlyShipmentReportCreateOrConnectWithoutProductInput[]
    createMany?: MonthlyShipmentReportCreateManyProductInputEnvelope
    connect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
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

  export type DailyShipmentReportUpdateManyWithoutProductNestedInput = {
    create?: XOR<DailyShipmentReportCreateWithoutProductInput, DailyShipmentReportUncheckedCreateWithoutProductInput> | DailyShipmentReportCreateWithoutProductInput[] | DailyShipmentReportUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutProductInput | DailyShipmentReportCreateOrConnectWithoutProductInput[]
    upsert?: DailyShipmentReportUpsertWithWhereUniqueWithoutProductInput | DailyShipmentReportUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DailyShipmentReportCreateManyProductInputEnvelope
    set?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    disconnect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    delete?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    update?: DailyShipmentReportUpdateWithWhereUniqueWithoutProductInput | DailyShipmentReportUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DailyShipmentReportUpdateManyWithWhereWithoutProductInput | DailyShipmentReportUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
  }

  export type MonthlyShipmentReportUpdateManyWithoutProductNestedInput = {
    create?: XOR<MonthlyShipmentReportCreateWithoutProductInput, MonthlyShipmentReportUncheckedCreateWithoutProductInput> | MonthlyShipmentReportCreateWithoutProductInput[] | MonthlyShipmentReportUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MonthlyShipmentReportCreateOrConnectWithoutProductInput | MonthlyShipmentReportCreateOrConnectWithoutProductInput[]
    upsert?: MonthlyShipmentReportUpsertWithWhereUniqueWithoutProductInput | MonthlyShipmentReportUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MonthlyShipmentReportCreateManyProductInputEnvelope
    set?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    disconnect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    delete?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    connect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    update?: MonthlyShipmentReportUpdateWithWhereUniqueWithoutProductInput | MonthlyShipmentReportUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MonthlyShipmentReportUpdateManyWithWhereWithoutProductInput | MonthlyShipmentReportUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MonthlyShipmentReportScalarWhereInput | MonthlyShipmentReportScalarWhereInput[]
  }

  export type DailyShipmentReportUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DailyShipmentReportCreateWithoutProductInput, DailyShipmentReportUncheckedCreateWithoutProductInput> | DailyShipmentReportCreateWithoutProductInput[] | DailyShipmentReportUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutProductInput | DailyShipmentReportCreateOrConnectWithoutProductInput[]
    upsert?: DailyShipmentReportUpsertWithWhereUniqueWithoutProductInput | DailyShipmentReportUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DailyShipmentReportCreateManyProductInputEnvelope
    set?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    disconnect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    delete?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    update?: DailyShipmentReportUpdateWithWhereUniqueWithoutProductInput | DailyShipmentReportUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DailyShipmentReportUpdateManyWithWhereWithoutProductInput | DailyShipmentReportUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
  }

  export type MonthlyShipmentReportUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<MonthlyShipmentReportCreateWithoutProductInput, MonthlyShipmentReportUncheckedCreateWithoutProductInput> | MonthlyShipmentReportCreateWithoutProductInput[] | MonthlyShipmentReportUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MonthlyShipmentReportCreateOrConnectWithoutProductInput | MonthlyShipmentReportCreateOrConnectWithoutProductInput[]
    upsert?: MonthlyShipmentReportUpsertWithWhereUniqueWithoutProductInput | MonthlyShipmentReportUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MonthlyShipmentReportCreateManyProductInputEnvelope
    set?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    disconnect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    delete?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    connect?: MonthlyShipmentReportWhereUniqueInput | MonthlyShipmentReportWhereUniqueInput[]
    update?: MonthlyShipmentReportUpdateWithWhereUniqueWithoutProductInput | MonthlyShipmentReportUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MonthlyShipmentReportUpdateManyWithWhereWithoutProductInput | MonthlyShipmentReportUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MonthlyShipmentReportScalarWhereInput | MonthlyShipmentReportScalarWhereInput[]
  }

  export type DailyShipmentReportCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DailyShipmentReportCreateWithoutVehicleInput, DailyShipmentReportUncheckedCreateWithoutVehicleInput> | DailyShipmentReportCreateWithoutVehicleInput[] | DailyShipmentReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutVehicleInput | DailyShipmentReportCreateOrConnectWithoutVehicleInput[]
    createMany?: DailyShipmentReportCreateManyVehicleInputEnvelope
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
  }

  export type DailyShipmentReportUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DailyShipmentReportCreateWithoutVehicleInput, DailyShipmentReportUncheckedCreateWithoutVehicleInput> | DailyShipmentReportCreateWithoutVehicleInput[] | DailyShipmentReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutVehicleInput | DailyShipmentReportCreateOrConnectWithoutVehicleInput[]
    createMany?: DailyShipmentReportCreateManyVehicleInputEnvelope
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
  }

  export type DailyShipmentReportUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DailyShipmentReportCreateWithoutVehicleInput, DailyShipmentReportUncheckedCreateWithoutVehicleInput> | DailyShipmentReportCreateWithoutVehicleInput[] | DailyShipmentReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutVehicleInput | DailyShipmentReportCreateOrConnectWithoutVehicleInput[]
    upsert?: DailyShipmentReportUpsertWithWhereUniqueWithoutVehicleInput | DailyShipmentReportUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DailyShipmentReportCreateManyVehicleInputEnvelope
    set?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    disconnect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    delete?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    update?: DailyShipmentReportUpdateWithWhereUniqueWithoutVehicleInput | DailyShipmentReportUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DailyShipmentReportUpdateManyWithWhereWithoutVehicleInput | DailyShipmentReportUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
  }

  export type DailyShipmentReportUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DailyShipmentReportCreateWithoutVehicleInput, DailyShipmentReportUncheckedCreateWithoutVehicleInput> | DailyShipmentReportCreateWithoutVehicleInput[] | DailyShipmentReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DailyShipmentReportCreateOrConnectWithoutVehicleInput | DailyShipmentReportCreateOrConnectWithoutVehicleInput[]
    upsert?: DailyShipmentReportUpsertWithWhereUniqueWithoutVehicleInput | DailyShipmentReportUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DailyShipmentReportCreateManyVehicleInputEnvelope
    set?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    disconnect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    delete?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    connect?: DailyShipmentReportWhereUniqueInput | DailyShipmentReportWhereUniqueInput[]
    update?: DailyShipmentReportUpdateWithWhereUniqueWithoutVehicleInput | DailyShipmentReportUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DailyShipmentReportUpdateManyWithWhereWithoutVehicleInput | DailyShipmentReportUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<ClientCreateWithoutDailyReportsInput, ClientUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDailyReportsInput
    connect?: ClientWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<ProductCreateWithoutDailyReportsInput, ProductUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDailyReportsInput
    connect?: ProductWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<UsersCreateWithoutDailyReportsInput, UsersUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDailyReportsInput
    connect?: UsersWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<VehicleCreateWithoutDailyReportsInput, VehicleUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDailyReportsInput
    connect?: VehicleWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClientUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<ClientCreateWithoutDailyReportsInput, ClientUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDailyReportsInput
    upsert?: ClientUpsertWithoutDailyReportsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDailyReportsInput, ClientUpdateWithoutDailyReportsInput>, ClientUncheckedUpdateWithoutDailyReportsInput>
  }

  export type ProductUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<ProductCreateWithoutDailyReportsInput, ProductUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDailyReportsInput
    upsert?: ProductUpsertWithoutDailyReportsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDailyReportsInput, ProductUpdateWithoutDailyReportsInput>, ProductUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UsersUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<UsersCreateWithoutDailyReportsInput, UsersUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDailyReportsInput
    upsert?: UsersUpsertWithoutDailyReportsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDailyReportsInput, UsersUpdateWithoutDailyReportsInput>, UsersUncheckedUpdateWithoutDailyReportsInput>
  }

  export type VehicleUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<VehicleCreateWithoutDailyReportsInput, VehicleUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDailyReportsInput
    upsert?: VehicleUpsertWithoutDailyReportsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDailyReportsInput, VehicleUpdateWithoutDailyReportsInput>, VehicleUncheckedUpdateWithoutDailyReportsInput>
  }

  export type ClientCreateNestedOneWithoutMonthlyReportsInput = {
    create?: XOR<ClientCreateWithoutMonthlyReportsInput, ClientUncheckedCreateWithoutMonthlyReportsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMonthlyReportsInput
    connect?: ClientWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutMonthlyReportsInput = {
    create?: XOR<ProductCreateWithoutMonthlyReportsInput, ProductUncheckedCreateWithoutMonthlyReportsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMonthlyReportsInput
    connect?: ProductWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutMonthlyReportsNestedInput = {
    create?: XOR<ClientCreateWithoutMonthlyReportsInput, ClientUncheckedCreateWithoutMonthlyReportsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMonthlyReportsInput
    upsert?: ClientUpsertWithoutMonthlyReportsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutMonthlyReportsInput, ClientUpdateWithoutMonthlyReportsInput>, ClientUncheckedUpdateWithoutMonthlyReportsInput>
  }

  export type ProductUpdateOneRequiredWithoutMonthlyReportsNestedInput = {
    create?: XOR<ProductCreateWithoutMonthlyReportsInput, ProductUncheckedCreateWithoutMonthlyReportsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMonthlyReportsInput
    upsert?: ProductUpsertWithoutMonthlyReportsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMonthlyReportsInput, ProductUpdateWithoutMonthlyReportsInput>, ProductUncheckedUpdateWithoutMonthlyReportsInput>
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

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
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

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
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

  export type DailyShipmentReportCreateWithoutUsersInput = {
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    client: ClientCreateNestedOneWithoutDailyReportsInput
    product: ProductCreateNestedOneWithoutDailyReportsInput
    vehicle: VehicleCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyShipmentReportUncheckedCreateWithoutUsersInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    vehicleId: number
    productId: number
    clientId: number
  }

  export type DailyShipmentReportCreateOrConnectWithoutUsersInput = {
    where: DailyShipmentReportWhereUniqueInput
    create: XOR<DailyShipmentReportCreateWithoutUsersInput, DailyShipmentReportUncheckedCreateWithoutUsersInput>
  }

  export type DailyShipmentReportCreateManyUsersInputEnvelope = {
    data: DailyShipmentReportCreateManyUsersInput | DailyShipmentReportCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type DailyShipmentReportUpsertWithWhereUniqueWithoutUsersInput = {
    where: DailyShipmentReportWhereUniqueInput
    update: XOR<DailyShipmentReportUpdateWithoutUsersInput, DailyShipmentReportUncheckedUpdateWithoutUsersInput>
    create: XOR<DailyShipmentReportCreateWithoutUsersInput, DailyShipmentReportUncheckedCreateWithoutUsersInput>
  }

  export type DailyShipmentReportUpdateWithWhereUniqueWithoutUsersInput = {
    where: DailyShipmentReportWhereUniqueInput
    data: XOR<DailyShipmentReportUpdateWithoutUsersInput, DailyShipmentReportUncheckedUpdateWithoutUsersInput>
  }

  export type DailyShipmentReportUpdateManyWithWhereWithoutUsersInput = {
    where: DailyShipmentReportScalarWhereInput
    data: XOR<DailyShipmentReportUpdateManyMutationInput, DailyShipmentReportUncheckedUpdateManyWithoutUsersInput>
  }

  export type DailyShipmentReportScalarWhereInput = {
    AND?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
    OR?: DailyShipmentReportScalarWhereInput[]
    NOT?: DailyShipmentReportScalarWhereInput | DailyShipmentReportScalarWhereInput[]
    id?: IntFilter<"DailyShipmentReport"> | number
    quantity?: IntFilter<"DailyShipmentReport"> | number
    invoiceNumber?: IntFilter<"DailyShipmentReport"> | number
    productionDate?: DateTimeFilter<"DailyShipmentReport"> | Date | string
    destination?: StringFilter<"DailyShipmentReport"> | string
    temperature?: DecimalFilter<"DailyShipmentReport"> | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFilter<"DailyShipmentReport"> | boolean
    deliverer?: StringFilter<"DailyShipmentReport"> | string
    userId?: IntFilter<"DailyShipmentReport"> | number
    vehicleId?: IntFilter<"DailyShipmentReport"> | number
    productId?: IntFilter<"DailyShipmentReport"> | number
    clientId?: IntFilter<"DailyShipmentReport"> | number
  }

  export type DailyShipmentReportCreateWithoutClientInput = {
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    product: ProductCreateNestedOneWithoutDailyReportsInput
    users: UsersCreateNestedOneWithoutDailyReportsInput
    vehicle: VehicleCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyShipmentReportUncheckedCreateWithoutClientInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    vehicleId: number
    productId: number
  }

  export type DailyShipmentReportCreateOrConnectWithoutClientInput = {
    where: DailyShipmentReportWhereUniqueInput
    create: XOR<DailyShipmentReportCreateWithoutClientInput, DailyShipmentReportUncheckedCreateWithoutClientInput>
  }

  export type DailyShipmentReportCreateManyClientInputEnvelope = {
    data: DailyShipmentReportCreateManyClientInput | DailyShipmentReportCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyShipmentReportCreateWithoutClientInput = {
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    product: ProductCreateNestedOneWithoutMonthlyReportsInput
  }

  export type MonthlyShipmentReportUncheckedCreateWithoutClientInput = {
    id?: number
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    productId: number
  }

  export type MonthlyShipmentReportCreateOrConnectWithoutClientInput = {
    where: MonthlyShipmentReportWhereUniqueInput
    create: XOR<MonthlyShipmentReportCreateWithoutClientInput, MonthlyShipmentReportUncheckedCreateWithoutClientInput>
  }

  export type MonthlyShipmentReportCreateManyClientInputEnvelope = {
    data: MonthlyShipmentReportCreateManyClientInput | MonthlyShipmentReportCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type DailyShipmentReportUpsertWithWhereUniqueWithoutClientInput = {
    where: DailyShipmentReportWhereUniqueInput
    update: XOR<DailyShipmentReportUpdateWithoutClientInput, DailyShipmentReportUncheckedUpdateWithoutClientInput>
    create: XOR<DailyShipmentReportCreateWithoutClientInput, DailyShipmentReportUncheckedCreateWithoutClientInput>
  }

  export type DailyShipmentReportUpdateWithWhereUniqueWithoutClientInput = {
    where: DailyShipmentReportWhereUniqueInput
    data: XOR<DailyShipmentReportUpdateWithoutClientInput, DailyShipmentReportUncheckedUpdateWithoutClientInput>
  }

  export type DailyShipmentReportUpdateManyWithWhereWithoutClientInput = {
    where: DailyShipmentReportScalarWhereInput
    data: XOR<DailyShipmentReportUpdateManyMutationInput, DailyShipmentReportUncheckedUpdateManyWithoutClientInput>
  }

  export type MonthlyShipmentReportUpsertWithWhereUniqueWithoutClientInput = {
    where: MonthlyShipmentReportWhereUniqueInput
    update: XOR<MonthlyShipmentReportUpdateWithoutClientInput, MonthlyShipmentReportUncheckedUpdateWithoutClientInput>
    create: XOR<MonthlyShipmentReportCreateWithoutClientInput, MonthlyShipmentReportUncheckedCreateWithoutClientInput>
  }

  export type MonthlyShipmentReportUpdateWithWhereUniqueWithoutClientInput = {
    where: MonthlyShipmentReportWhereUniqueInput
    data: XOR<MonthlyShipmentReportUpdateWithoutClientInput, MonthlyShipmentReportUncheckedUpdateWithoutClientInput>
  }

  export type MonthlyShipmentReportUpdateManyWithWhereWithoutClientInput = {
    where: MonthlyShipmentReportScalarWhereInput
    data: XOR<MonthlyShipmentReportUpdateManyMutationInput, MonthlyShipmentReportUncheckedUpdateManyWithoutClientInput>
  }

  export type MonthlyShipmentReportScalarWhereInput = {
    AND?: MonthlyShipmentReportScalarWhereInput | MonthlyShipmentReportScalarWhereInput[]
    OR?: MonthlyShipmentReportScalarWhereInput[]
    NOT?: MonthlyShipmentReportScalarWhereInput | MonthlyShipmentReportScalarWhereInput[]
    id?: IntFilter<"MonthlyShipmentReport"> | number
    quantity?: DecimalFilter<"MonthlyShipmentReport"> | Decimal | DecimalJsLike | number | string
    destination?: StringFilter<"MonthlyShipmentReport"> | string
    temperature?: DecimalFilter<"MonthlyShipmentReport"> | Decimal | DecimalJsLike | number | string
    deliverer?: StringFilter<"MonthlyShipmentReport"> | string
    productionDate?: DateTimeFilter<"MonthlyShipmentReport"> | Date | string
    shipmentDate?: DateTimeFilter<"MonthlyShipmentReport"> | Date | string
    productId?: IntFilter<"MonthlyShipmentReport"> | number
    clientId?: IntFilter<"MonthlyShipmentReport"> | number
  }

  export type DailyShipmentReportCreateWithoutProductInput = {
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    client: ClientCreateNestedOneWithoutDailyReportsInput
    users: UsersCreateNestedOneWithoutDailyReportsInput
    vehicle: VehicleCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyShipmentReportUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    vehicleId: number
    clientId: number
  }

  export type DailyShipmentReportCreateOrConnectWithoutProductInput = {
    where: DailyShipmentReportWhereUniqueInput
    create: XOR<DailyShipmentReportCreateWithoutProductInput, DailyShipmentReportUncheckedCreateWithoutProductInput>
  }

  export type DailyShipmentReportCreateManyProductInputEnvelope = {
    data: DailyShipmentReportCreateManyProductInput | DailyShipmentReportCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyShipmentReportCreateWithoutProductInput = {
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    client: ClientCreateNestedOneWithoutMonthlyReportsInput
  }

  export type MonthlyShipmentReportUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    clientId: number
  }

  export type MonthlyShipmentReportCreateOrConnectWithoutProductInput = {
    where: MonthlyShipmentReportWhereUniqueInput
    create: XOR<MonthlyShipmentReportCreateWithoutProductInput, MonthlyShipmentReportUncheckedCreateWithoutProductInput>
  }

  export type MonthlyShipmentReportCreateManyProductInputEnvelope = {
    data: MonthlyShipmentReportCreateManyProductInput | MonthlyShipmentReportCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DailyShipmentReportUpsertWithWhereUniqueWithoutProductInput = {
    where: DailyShipmentReportWhereUniqueInput
    update: XOR<DailyShipmentReportUpdateWithoutProductInput, DailyShipmentReportUncheckedUpdateWithoutProductInput>
    create: XOR<DailyShipmentReportCreateWithoutProductInput, DailyShipmentReportUncheckedCreateWithoutProductInput>
  }

  export type DailyShipmentReportUpdateWithWhereUniqueWithoutProductInput = {
    where: DailyShipmentReportWhereUniqueInput
    data: XOR<DailyShipmentReportUpdateWithoutProductInput, DailyShipmentReportUncheckedUpdateWithoutProductInput>
  }

  export type DailyShipmentReportUpdateManyWithWhereWithoutProductInput = {
    where: DailyShipmentReportScalarWhereInput
    data: XOR<DailyShipmentReportUpdateManyMutationInput, DailyShipmentReportUncheckedUpdateManyWithoutProductInput>
  }

  export type MonthlyShipmentReportUpsertWithWhereUniqueWithoutProductInput = {
    where: MonthlyShipmentReportWhereUniqueInput
    update: XOR<MonthlyShipmentReportUpdateWithoutProductInput, MonthlyShipmentReportUncheckedUpdateWithoutProductInput>
    create: XOR<MonthlyShipmentReportCreateWithoutProductInput, MonthlyShipmentReportUncheckedCreateWithoutProductInput>
  }

  export type MonthlyShipmentReportUpdateWithWhereUniqueWithoutProductInput = {
    where: MonthlyShipmentReportWhereUniqueInput
    data: XOR<MonthlyShipmentReportUpdateWithoutProductInput, MonthlyShipmentReportUncheckedUpdateWithoutProductInput>
  }

  export type MonthlyShipmentReportUpdateManyWithWhereWithoutProductInput = {
    where: MonthlyShipmentReportScalarWhereInput
    data: XOR<MonthlyShipmentReportUpdateManyMutationInput, MonthlyShipmentReportUncheckedUpdateManyWithoutProductInput>
  }

  export type DailyShipmentReportCreateWithoutVehicleInput = {
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    client: ClientCreateNestedOneWithoutDailyReportsInput
    product: ProductCreateNestedOneWithoutDailyReportsInput
    users: UsersCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyShipmentReportUncheckedCreateWithoutVehicleInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    productId: number
    clientId: number
  }

  export type DailyShipmentReportCreateOrConnectWithoutVehicleInput = {
    where: DailyShipmentReportWhereUniqueInput
    create: XOR<DailyShipmentReportCreateWithoutVehicleInput, DailyShipmentReportUncheckedCreateWithoutVehicleInput>
  }

  export type DailyShipmentReportCreateManyVehicleInputEnvelope = {
    data: DailyShipmentReportCreateManyVehicleInput | DailyShipmentReportCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type DailyShipmentReportUpsertWithWhereUniqueWithoutVehicleInput = {
    where: DailyShipmentReportWhereUniqueInput
    update: XOR<DailyShipmentReportUpdateWithoutVehicleInput, DailyShipmentReportUncheckedUpdateWithoutVehicleInput>
    create: XOR<DailyShipmentReportCreateWithoutVehicleInput, DailyShipmentReportUncheckedCreateWithoutVehicleInput>
  }

  export type DailyShipmentReportUpdateWithWhereUniqueWithoutVehicleInput = {
    where: DailyShipmentReportWhereUniqueInput
    data: XOR<DailyShipmentReportUpdateWithoutVehicleInput, DailyShipmentReportUncheckedUpdateWithoutVehicleInput>
  }

  export type DailyShipmentReportUpdateManyWithWhereWithoutVehicleInput = {
    where: DailyShipmentReportScalarWhereInput
    data: XOR<DailyShipmentReportUpdateManyMutationInput, DailyShipmentReportUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ClientCreateWithoutDailyReportsInput = {
    name: string
    cpf: string
    cnpj: string
    address: string
    phone: string
    identificationCode: string
    monthlyReports?: MonthlyShipmentReportCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutDailyReportsInput = {
    id?: number
    name: string
    cpf: string
    cnpj: string
    address: string
    phone: string
    identificationCode: string
    monthlyReports?: MonthlyShipmentReportUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutDailyReportsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDailyReportsInput, ClientUncheckedCreateWithoutDailyReportsInput>
  }

  export type ProductCreateWithoutDailyReportsInput = {
    name: string
    unit: string
    quantity: Decimal | DecimalJsLike | number | string
    expiration: Date | string
    monthlyReports?: MonthlyShipmentReportCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDailyReportsInput = {
    id?: number
    name: string
    unit: string
    quantity: Decimal | DecimalJsLike | number | string
    expiration: Date | string
    monthlyReports?: MonthlyShipmentReportUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDailyReportsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDailyReportsInput, ProductUncheckedCreateWithoutDailyReportsInput>
  }

  export type UsersCreateWithoutDailyReportsInput = {
    name: string
    username: string
    password: string
    role?: $Enums.role
  }

  export type UsersUncheckedCreateWithoutDailyReportsInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: $Enums.role
  }

  export type UsersCreateOrConnectWithoutDailyReportsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDailyReportsInput, UsersUncheckedCreateWithoutDailyReportsInput>
  }

  export type VehicleCreateWithoutDailyReportsInput = {
    model: string
    plate: string
    category: string
    brand: string
  }

  export type VehicleUncheckedCreateWithoutDailyReportsInput = {
    id?: number
    model: string
    plate: string
    category: string
    brand: string
  }

  export type VehicleCreateOrConnectWithoutDailyReportsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDailyReportsInput, VehicleUncheckedCreateWithoutDailyReportsInput>
  }

  export type ClientUpsertWithoutDailyReportsInput = {
    update: XOR<ClientUpdateWithoutDailyReportsInput, ClientUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<ClientCreateWithoutDailyReportsInput, ClientUncheckedCreateWithoutDailyReportsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDailyReportsInput, ClientUncheckedUpdateWithoutDailyReportsInput>
  }

  export type ClientUpdateWithoutDailyReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    identificationCode?: StringFieldUpdateOperationsInput | string
    monthlyReports?: MonthlyShipmentReportUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutDailyReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    identificationCode?: StringFieldUpdateOperationsInput | string
    monthlyReports?: MonthlyShipmentReportUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProductUpsertWithoutDailyReportsInput = {
    update: XOR<ProductUpdateWithoutDailyReportsInput, ProductUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<ProductCreateWithoutDailyReportsInput, ProductUncheckedCreateWithoutDailyReportsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDailyReportsInput, ProductUncheckedUpdateWithoutDailyReportsInput>
  }

  export type ProductUpdateWithoutDailyReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyReports?: MonthlyShipmentReportUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDailyReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyReports?: MonthlyShipmentReportUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersUpsertWithoutDailyReportsInput = {
    update: XOR<UsersUpdateWithoutDailyReportsInput, UsersUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<UsersCreateWithoutDailyReportsInput, UsersUncheckedCreateWithoutDailyReportsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDailyReportsInput, UsersUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UsersUpdateWithoutDailyReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
  }

  export type UsersUncheckedUpdateWithoutDailyReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
  }

  export type VehicleUpsertWithoutDailyReportsInput = {
    update: XOR<VehicleUpdateWithoutDailyReportsInput, VehicleUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<VehicleCreateWithoutDailyReportsInput, VehicleUncheckedCreateWithoutDailyReportsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDailyReportsInput, VehicleUncheckedUpdateWithoutDailyReportsInput>
  }

  export type VehicleUpdateWithoutDailyReportsInput = {
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleUncheckedUpdateWithoutDailyReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateWithoutMonthlyReportsInput = {
    name: string
    cpf: string
    cnpj: string
    address: string
    phone: string
    identificationCode: string
    dailyReports?: DailyShipmentReportCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutMonthlyReportsInput = {
    id?: number
    name: string
    cpf: string
    cnpj: string
    address: string
    phone: string
    identificationCode: string
    dailyReports?: DailyShipmentReportUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutMonthlyReportsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutMonthlyReportsInput, ClientUncheckedCreateWithoutMonthlyReportsInput>
  }

  export type ProductCreateWithoutMonthlyReportsInput = {
    name: string
    unit: string
    quantity: Decimal | DecimalJsLike | number | string
    expiration: Date | string
    dailyReports?: DailyShipmentReportCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMonthlyReportsInput = {
    id?: number
    name: string
    unit: string
    quantity: Decimal | DecimalJsLike | number | string
    expiration: Date | string
    dailyReports?: DailyShipmentReportUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMonthlyReportsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMonthlyReportsInput, ProductUncheckedCreateWithoutMonthlyReportsInput>
  }

  export type ClientUpsertWithoutMonthlyReportsInput = {
    update: XOR<ClientUpdateWithoutMonthlyReportsInput, ClientUncheckedUpdateWithoutMonthlyReportsInput>
    create: XOR<ClientCreateWithoutMonthlyReportsInput, ClientUncheckedCreateWithoutMonthlyReportsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutMonthlyReportsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutMonthlyReportsInput, ClientUncheckedUpdateWithoutMonthlyReportsInput>
  }

  export type ClientUpdateWithoutMonthlyReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    identificationCode?: StringFieldUpdateOperationsInput | string
    dailyReports?: DailyShipmentReportUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutMonthlyReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    identificationCode?: StringFieldUpdateOperationsInput | string
    dailyReports?: DailyShipmentReportUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProductUpsertWithoutMonthlyReportsInput = {
    update: XOR<ProductUpdateWithoutMonthlyReportsInput, ProductUncheckedUpdateWithoutMonthlyReportsInput>
    create: XOR<ProductCreateWithoutMonthlyReportsInput, ProductUncheckedCreateWithoutMonthlyReportsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMonthlyReportsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMonthlyReportsInput, ProductUncheckedUpdateWithoutMonthlyReportsInput>
  }

  export type ProductUpdateWithoutMonthlyReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyShipmentReportUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMonthlyReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyShipmentReportUncheckedUpdateManyWithoutProductNestedInput
  }

  export type DailyShipmentReportCreateManyUsersInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    vehicleId: number
    productId: number
    clientId: number
  }

  export type DailyShipmentReportUpdateWithoutUsersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutDailyReportsNestedInput
    product?: ProductUpdateOneRequiredWithoutDailyReportsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyShipmentReportUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    vehicleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyShipmentReportUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    vehicleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyShipmentReportCreateManyClientInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    vehicleId: number
    productId: number
  }

  export type MonthlyShipmentReportCreateManyClientInput = {
    id?: number
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    productId: number
  }

  export type DailyShipmentReportUpdateWithoutClientInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutDailyReportsNestedInput
    users?: UsersUpdateOneRequiredWithoutDailyReportsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyShipmentReportUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyShipmentReportUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type MonthlyShipmentReportUpdateWithoutClientInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutMonthlyReportsNestedInput
  }

  export type MonthlyShipmentReportUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type MonthlyShipmentReportUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyShipmentReportCreateManyProductInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    vehicleId: number
    clientId: number
  }

  export type MonthlyShipmentReportCreateManyProductInput = {
    id?: number
    quantity: Decimal | DecimalJsLike | number | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    deliverer: string
    productionDate: Date | string
    shipmentDate: Date | string
    clientId: number
  }

  export type DailyShipmentReportUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutDailyReportsNestedInput
    users?: UsersUpdateOneRequiredWithoutDailyReportsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyShipmentReportUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyShipmentReportUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MonthlyShipmentReportUpdateWithoutProductInput = {
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutMonthlyReportsNestedInput
  }

  export type MonthlyShipmentReportUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MonthlyShipmentReportUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliverer?: StringFieldUpdateOperationsInput | string
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyShipmentReportCreateManyVehicleInput = {
    id?: number
    quantity: number
    invoiceNumber: number
    productionDate: Date | string
    destination: string
    temperature: Decimal | DecimalJsLike | number | string
    sanitaryCondition: boolean
    deliverer: string
    userId: number
    productId: number
    clientId: number
  }

  export type DailyShipmentReportUpdateWithoutVehicleInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutDailyReportsNestedInput
    product?: ProductUpdateOneRequiredWithoutDailyReportsNestedInput
    users?: UsersUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyShipmentReportUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyShipmentReportUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    productionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sanitaryCondition?: BoolFieldUpdateOperationsInput | boolean
    deliverer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
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