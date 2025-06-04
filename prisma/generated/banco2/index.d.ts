
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
 * Model ComputeInstances
 * 
 */
export type ComputeInstances = $Result.DefaultSelection<Prisma.$ComputeInstancesPayload>
/**
 * Model SubscriptionDetails
 * 
 */
export type SubscriptionDetails = $Result.DefaultSelection<Prisma.$SubscriptionDetailsPayload>
/**
 * Model TenancyDetails
 * 
 */
export type TenancyDetails = $Result.DefaultSelection<Prisma.$TenancyDetailsPayload>
/**
 * Model tenancy_details
 * 
 */
export type tenancy_details = $Result.DefaultSelection<Prisma.$tenancy_detailsPayload>
/**
 * Model CustoDiarioTotal
 * 
 */
export type CustoDiarioTotal = $Result.DefaultSelection<Prisma.$CustoDiarioTotalPayload>
/**
 * Model CustoMensalTotal
 * 
 */
export type CustoMensalTotal = $Result.DefaultSelection<Prisma.$CustoMensalTotalPayload>
/**
 * Model computeEvents
 * 
 */
export type computeEvents = $Result.DefaultSelection<Prisma.$computeEventsPayload>
/**
 * Model identityEvents
 * 
 */
export type identityEvents = $Result.DefaultSelection<Prisma.$identityEventsPayload>
/**
 * Model networkEvents
 * 
 */
export type networkEvents = $Result.DefaultSelection<Prisma.$networkEventsPayload>
/**
 * Model BlockVolume
 * 
 */
export type BlockVolume = $Result.DefaultSelection<Prisma.$BlockVolumePayload>
/**
 * Model CustoPorService
 * 
 */
export type CustoPorService = $Result.DefaultSelection<Prisma.$CustoPorServicePayload>
/**
 * Model CustoPorSkuName
 * 
 */
export type CustoPorSkuName = $Result.DefaultSelection<Prisma.$CustoPorSkuNamePayload>
/**
 * Model IdentityUsers
 * 
 */
export type IdentityUsers = $Result.DefaultSelection<Prisma.$IdentityUsersPayload>
/**
 * Model VolumesBackup
 * 
 */
export type VolumesBackup = $Result.DefaultSelection<Prisma.$VolumesBackupPayload>
/**
 * Model SubscriptionCommit
 * 
 */
export type SubscriptionCommit = $Result.DefaultSelection<Prisma.$SubscriptionCommitPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ComputeInstances
 * const computeInstances = await prisma.computeInstances.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more ComputeInstances
   * const computeInstances = await prisma.computeInstances.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.computeInstances`: Exposes CRUD operations for the **ComputeInstances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComputeInstances
    * const computeInstances = await prisma.computeInstances.findMany()
    * ```
    */
  get computeInstances(): Prisma.ComputeInstancesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionDetails`: Exposes CRUD operations for the **SubscriptionDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionDetails
    * const subscriptionDetails = await prisma.subscriptionDetails.findMany()
    * ```
    */
  get subscriptionDetails(): Prisma.SubscriptionDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenancyDetails`: Exposes CRUD operations for the **TenancyDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenancyDetails
    * const tenancyDetails = await prisma.tenancyDetails.findMany()
    * ```
    */
  get tenancyDetails(): Prisma.TenancyDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenancy_details`: Exposes CRUD operations for the **tenancy_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenancy_details
    * const tenancy_details = await prisma.tenancy_details.findMany()
    * ```
    */
  get tenancy_details(): Prisma.tenancy_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.custoDiarioTotal`: Exposes CRUD operations for the **CustoDiarioTotal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustoDiarioTotals
    * const custoDiarioTotals = await prisma.custoDiarioTotal.findMany()
    * ```
    */
  get custoDiarioTotal(): Prisma.CustoDiarioTotalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.custoMensalTotal`: Exposes CRUD operations for the **CustoMensalTotal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustoMensalTotals
    * const custoMensalTotals = await prisma.custoMensalTotal.findMany()
    * ```
    */
  get custoMensalTotal(): Prisma.CustoMensalTotalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.computeEvents`: Exposes CRUD operations for the **computeEvents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComputeEvents
    * const computeEvents = await prisma.computeEvents.findMany()
    * ```
    */
  get computeEvents(): Prisma.computeEventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identityEvents`: Exposes CRUD operations for the **identityEvents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdentityEvents
    * const identityEvents = await prisma.identityEvents.findMany()
    * ```
    */
  get identityEvents(): Prisma.identityEventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.networkEvents`: Exposes CRUD operations for the **networkEvents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NetworkEvents
    * const networkEvents = await prisma.networkEvents.findMany()
    * ```
    */
  get networkEvents(): Prisma.networkEventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockVolume`: Exposes CRUD operations for the **BlockVolume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockVolumes
    * const blockVolumes = await prisma.blockVolume.findMany()
    * ```
    */
  get blockVolume(): Prisma.BlockVolumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.custoPorService`: Exposes CRUD operations for the **CustoPorService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustoPorServices
    * const custoPorServices = await prisma.custoPorService.findMany()
    * ```
    */
  get custoPorService(): Prisma.CustoPorServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.custoPorSkuName`: Exposes CRUD operations for the **CustoPorSkuName** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustoPorSkuNames
    * const custoPorSkuNames = await prisma.custoPorSkuName.findMany()
    * ```
    */
  get custoPorSkuName(): Prisma.CustoPorSkuNameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identityUsers`: Exposes CRUD operations for the **IdentityUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdentityUsers
    * const identityUsers = await prisma.identityUsers.findMany()
    * ```
    */
  get identityUsers(): Prisma.IdentityUsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volumesBackup`: Exposes CRUD operations for the **VolumesBackup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VolumesBackups
    * const volumesBackups = await prisma.volumesBackup.findMany()
    * ```
    */
  get volumesBackup(): Prisma.VolumesBackupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionCommit`: Exposes CRUD operations for the **SubscriptionCommit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionCommits
    * const subscriptionCommits = await prisma.subscriptionCommit.findMany()
    * ```
    */
  get subscriptionCommit(): Prisma.SubscriptionCommitDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    ComputeInstances: 'ComputeInstances',
    SubscriptionDetails: 'SubscriptionDetails',
    TenancyDetails: 'TenancyDetails',
    tenancy_details: 'tenancy_details',
    CustoDiarioTotal: 'CustoDiarioTotal',
    CustoMensalTotal: 'CustoMensalTotal',
    computeEvents: 'computeEvents',
    identityEvents: 'identityEvents',
    networkEvents: 'networkEvents',
    BlockVolume: 'BlockVolume',
    CustoPorService: 'CustoPorService',
    CustoPorSkuName: 'CustoPorSkuName',
    IdentityUsers: 'IdentityUsers',
    VolumesBackup: 'VolumesBackup',
    SubscriptionCommit: 'SubscriptionCommit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db2?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "computeInstances" | "subscriptionDetails" | "tenancyDetails" | "tenancy_details" | "custoDiarioTotal" | "custoMensalTotal" | "computeEvents" | "identityEvents" | "networkEvents" | "blockVolume" | "custoPorService" | "custoPorSkuName" | "identityUsers" | "volumesBackup" | "subscriptionCommit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ComputeInstances: {
        payload: Prisma.$ComputeInstancesPayload<ExtArgs>
        fields: Prisma.ComputeInstancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComputeInstancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComputeInstancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload>
          }
          findFirst: {
            args: Prisma.ComputeInstancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComputeInstancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload>
          }
          findMany: {
            args: Prisma.ComputeInstancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload>[]
          }
          create: {
            args: Prisma.ComputeInstancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload>
          }
          createMany: {
            args: Prisma.ComputeInstancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComputeInstancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload>
          }
          update: {
            args: Prisma.ComputeInstancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload>
          }
          deleteMany: {
            args: Prisma.ComputeInstancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComputeInstancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComputeInstancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputeInstancesPayload>
          }
          aggregate: {
            args: Prisma.ComputeInstancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComputeInstances>
          }
          groupBy: {
            args: Prisma.ComputeInstancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComputeInstancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComputeInstancesCountArgs<ExtArgs>
            result: $Utils.Optional<ComputeInstancesCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionDetails: {
        payload: Prisma.$SubscriptionDetailsPayload<ExtArgs>
        fields: Prisma.SubscriptionDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload>
          }
          findMany: {
            args: Prisma.SubscriptionDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload>[]
          }
          create: {
            args: Prisma.SubscriptionDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload>
          }
          createMany: {
            args: Prisma.SubscriptionDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload>
          }
          update: {
            args: Prisma.SubscriptionDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionDetailsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionDetails>
          }
          groupBy: {
            args: Prisma.SubscriptionDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionDetailsCountAggregateOutputType> | number
          }
        }
      }
      TenancyDetails: {
        payload: Prisma.$TenancyDetailsPayload<ExtArgs>
        fields: Prisma.TenancyDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenancyDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenancyDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload>
          }
          findFirst: {
            args: Prisma.TenancyDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenancyDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload>
          }
          findMany: {
            args: Prisma.TenancyDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload>[]
          }
          create: {
            args: Prisma.TenancyDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload>
          }
          createMany: {
            args: Prisma.TenancyDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TenancyDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload>
          }
          update: {
            args: Prisma.TenancyDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload>
          }
          deleteMany: {
            args: Prisma.TenancyDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenancyDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenancyDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyDetailsPayload>
          }
          aggregate: {
            args: Prisma.TenancyDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenancyDetails>
          }
          groupBy: {
            args: Prisma.TenancyDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenancyDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenancyDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<TenancyDetailsCountAggregateOutputType> | number
          }
        }
      }
      tenancy_details: {
        payload: Prisma.$tenancy_detailsPayload<ExtArgs>
        fields: Prisma.tenancy_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tenancy_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tenancy_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload>
          }
          findFirst: {
            args: Prisma.tenancy_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tenancy_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload>
          }
          findMany: {
            args: Prisma.tenancy_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload>[]
          }
          create: {
            args: Prisma.tenancy_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload>
          }
          createMany: {
            args: Prisma.tenancy_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tenancy_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload>
          }
          update: {
            args: Prisma.tenancy_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload>
          }
          deleteMany: {
            args: Prisma.tenancy_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tenancy_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tenancy_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenancy_detailsPayload>
          }
          aggregate: {
            args: Prisma.Tenancy_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenancy_details>
          }
          groupBy: {
            args: Prisma.tenancy_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tenancy_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tenancy_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Tenancy_detailsCountAggregateOutputType> | number
          }
        }
      }
      CustoDiarioTotal: {
        payload: Prisma.$CustoDiarioTotalPayload<ExtArgs>
        fields: Prisma.CustoDiarioTotalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustoDiarioTotalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustoDiarioTotalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload>
          }
          findFirst: {
            args: Prisma.CustoDiarioTotalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustoDiarioTotalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload>
          }
          findMany: {
            args: Prisma.CustoDiarioTotalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload>[]
          }
          create: {
            args: Prisma.CustoDiarioTotalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload>
          }
          createMany: {
            args: Prisma.CustoDiarioTotalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustoDiarioTotalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload>
          }
          update: {
            args: Prisma.CustoDiarioTotalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload>
          }
          deleteMany: {
            args: Prisma.CustoDiarioTotalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustoDiarioTotalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustoDiarioTotalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoDiarioTotalPayload>
          }
          aggregate: {
            args: Prisma.CustoDiarioTotalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustoDiarioTotal>
          }
          groupBy: {
            args: Prisma.CustoDiarioTotalGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustoDiarioTotalGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustoDiarioTotalCountArgs<ExtArgs>
            result: $Utils.Optional<CustoDiarioTotalCountAggregateOutputType> | number
          }
        }
      }
      CustoMensalTotal: {
        payload: Prisma.$CustoMensalTotalPayload<ExtArgs>
        fields: Prisma.CustoMensalTotalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustoMensalTotalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustoMensalTotalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload>
          }
          findFirst: {
            args: Prisma.CustoMensalTotalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustoMensalTotalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload>
          }
          findMany: {
            args: Prisma.CustoMensalTotalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload>[]
          }
          create: {
            args: Prisma.CustoMensalTotalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload>
          }
          createMany: {
            args: Prisma.CustoMensalTotalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustoMensalTotalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload>
          }
          update: {
            args: Prisma.CustoMensalTotalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload>
          }
          deleteMany: {
            args: Prisma.CustoMensalTotalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustoMensalTotalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustoMensalTotalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoMensalTotalPayload>
          }
          aggregate: {
            args: Prisma.CustoMensalTotalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustoMensalTotal>
          }
          groupBy: {
            args: Prisma.CustoMensalTotalGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustoMensalTotalGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustoMensalTotalCountArgs<ExtArgs>
            result: $Utils.Optional<CustoMensalTotalCountAggregateOutputType> | number
          }
        }
      }
      computeEvents: {
        payload: Prisma.$computeEventsPayload<ExtArgs>
        fields: Prisma.computeEventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.computeEventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.computeEventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload>
          }
          findFirst: {
            args: Prisma.computeEventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.computeEventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload>
          }
          findMany: {
            args: Prisma.computeEventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload>[]
          }
          create: {
            args: Prisma.computeEventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload>
          }
          createMany: {
            args: Prisma.computeEventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.computeEventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload>
          }
          update: {
            args: Prisma.computeEventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload>
          }
          deleteMany: {
            args: Prisma.computeEventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.computeEventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.computeEventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$computeEventsPayload>
          }
          aggregate: {
            args: Prisma.ComputeEventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComputeEvents>
          }
          groupBy: {
            args: Prisma.computeEventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComputeEventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.computeEventsCountArgs<ExtArgs>
            result: $Utils.Optional<ComputeEventsCountAggregateOutputType> | number
          }
        }
      }
      identityEvents: {
        payload: Prisma.$identityEventsPayload<ExtArgs>
        fields: Prisma.identityEventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.identityEventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.identityEventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload>
          }
          findFirst: {
            args: Prisma.identityEventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.identityEventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload>
          }
          findMany: {
            args: Prisma.identityEventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload>[]
          }
          create: {
            args: Prisma.identityEventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload>
          }
          createMany: {
            args: Prisma.identityEventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.identityEventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload>
          }
          update: {
            args: Prisma.identityEventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload>
          }
          deleteMany: {
            args: Prisma.identityEventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.identityEventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.identityEventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$identityEventsPayload>
          }
          aggregate: {
            args: Prisma.IdentityEventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentityEvents>
          }
          groupBy: {
            args: Prisma.identityEventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentityEventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.identityEventsCountArgs<ExtArgs>
            result: $Utils.Optional<IdentityEventsCountAggregateOutputType> | number
          }
        }
      }
      networkEvents: {
        payload: Prisma.$networkEventsPayload<ExtArgs>
        fields: Prisma.networkEventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.networkEventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.networkEventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload>
          }
          findFirst: {
            args: Prisma.networkEventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.networkEventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload>
          }
          findMany: {
            args: Prisma.networkEventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload>[]
          }
          create: {
            args: Prisma.networkEventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload>
          }
          createMany: {
            args: Prisma.networkEventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.networkEventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload>
          }
          update: {
            args: Prisma.networkEventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload>
          }
          deleteMany: {
            args: Prisma.networkEventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.networkEventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.networkEventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkEventsPayload>
          }
          aggregate: {
            args: Prisma.NetworkEventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworkEvents>
          }
          groupBy: {
            args: Prisma.networkEventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkEventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.networkEventsCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkEventsCountAggregateOutputType> | number
          }
        }
      }
      BlockVolume: {
        payload: Prisma.$BlockVolumePayload<ExtArgs>
        fields: Prisma.BlockVolumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockVolumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockVolumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload>
          }
          findFirst: {
            args: Prisma.BlockVolumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockVolumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload>
          }
          findMany: {
            args: Prisma.BlockVolumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload>[]
          }
          create: {
            args: Prisma.BlockVolumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload>
          }
          createMany: {
            args: Prisma.BlockVolumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlockVolumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload>
          }
          update: {
            args: Prisma.BlockVolumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload>
          }
          deleteMany: {
            args: Prisma.BlockVolumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockVolumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlockVolumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockVolumePayload>
          }
          aggregate: {
            args: Prisma.BlockVolumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockVolume>
          }
          groupBy: {
            args: Prisma.BlockVolumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockVolumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockVolumeCountArgs<ExtArgs>
            result: $Utils.Optional<BlockVolumeCountAggregateOutputType> | number
          }
        }
      }
      CustoPorService: {
        payload: Prisma.$CustoPorServicePayload<ExtArgs>
        fields: Prisma.CustoPorServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustoPorServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustoPorServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload>
          }
          findFirst: {
            args: Prisma.CustoPorServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustoPorServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload>
          }
          findMany: {
            args: Prisma.CustoPorServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload>[]
          }
          create: {
            args: Prisma.CustoPorServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload>
          }
          createMany: {
            args: Prisma.CustoPorServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustoPorServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload>
          }
          update: {
            args: Prisma.CustoPorServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload>
          }
          deleteMany: {
            args: Prisma.CustoPorServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustoPorServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustoPorServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorServicePayload>
          }
          aggregate: {
            args: Prisma.CustoPorServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustoPorService>
          }
          groupBy: {
            args: Prisma.CustoPorServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustoPorServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustoPorServiceCountArgs<ExtArgs>
            result: $Utils.Optional<CustoPorServiceCountAggregateOutputType> | number
          }
        }
      }
      CustoPorSkuName: {
        payload: Prisma.$CustoPorSkuNamePayload<ExtArgs>
        fields: Prisma.CustoPorSkuNameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustoPorSkuNameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustoPorSkuNameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload>
          }
          findFirst: {
            args: Prisma.CustoPorSkuNameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustoPorSkuNameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload>
          }
          findMany: {
            args: Prisma.CustoPorSkuNameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload>[]
          }
          create: {
            args: Prisma.CustoPorSkuNameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload>
          }
          createMany: {
            args: Prisma.CustoPorSkuNameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustoPorSkuNameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload>
          }
          update: {
            args: Prisma.CustoPorSkuNameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload>
          }
          deleteMany: {
            args: Prisma.CustoPorSkuNameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustoPorSkuNameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustoPorSkuNameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoPorSkuNamePayload>
          }
          aggregate: {
            args: Prisma.CustoPorSkuNameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustoPorSkuName>
          }
          groupBy: {
            args: Prisma.CustoPorSkuNameGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustoPorSkuNameGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustoPorSkuNameCountArgs<ExtArgs>
            result: $Utils.Optional<CustoPorSkuNameCountAggregateOutputType> | number
          }
        }
      }
      IdentityUsers: {
        payload: Prisma.$IdentityUsersPayload<ExtArgs>
        fields: Prisma.IdentityUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdentityUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdentityUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload>
          }
          findFirst: {
            args: Prisma.IdentityUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdentityUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload>
          }
          findMany: {
            args: Prisma.IdentityUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload>[]
          }
          create: {
            args: Prisma.IdentityUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload>
          }
          createMany: {
            args: Prisma.IdentityUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IdentityUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload>
          }
          update: {
            args: Prisma.IdentityUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload>
          }
          deleteMany: {
            args: Prisma.IdentityUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdentityUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IdentityUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityUsersPayload>
          }
          aggregate: {
            args: Prisma.IdentityUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentityUsers>
          }
          groupBy: {
            args: Prisma.IdentityUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentityUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdentityUsersCountArgs<ExtArgs>
            result: $Utils.Optional<IdentityUsersCountAggregateOutputType> | number
          }
        }
      }
      VolumesBackup: {
        payload: Prisma.$VolumesBackupPayload<ExtArgs>
        fields: Prisma.VolumesBackupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolumesBackupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolumesBackupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload>
          }
          findFirst: {
            args: Prisma.VolumesBackupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolumesBackupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload>
          }
          findMany: {
            args: Prisma.VolumesBackupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload>[]
          }
          create: {
            args: Prisma.VolumesBackupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload>
          }
          createMany: {
            args: Prisma.VolumesBackupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VolumesBackupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload>
          }
          update: {
            args: Prisma.VolumesBackupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload>
          }
          deleteMany: {
            args: Prisma.VolumesBackupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolumesBackupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VolumesBackupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumesBackupPayload>
          }
          aggregate: {
            args: Prisma.VolumesBackupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolumesBackup>
          }
          groupBy: {
            args: Prisma.VolumesBackupGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolumesBackupGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolumesBackupCountArgs<ExtArgs>
            result: $Utils.Optional<VolumesBackupCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionCommit: {
        payload: Prisma.$SubscriptionCommitPayload<ExtArgs>
        fields: Prisma.SubscriptionCommitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionCommitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionCommitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionCommitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionCommitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload>
          }
          findMany: {
            args: Prisma.SubscriptionCommitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCommitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCommitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionCommitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload>
          }
          update: {
            args: Prisma.SubscriptionCommitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionCommitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionCommitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionCommitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionCommitPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionCommitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionCommit>
          }
          groupBy: {
            args: Prisma.SubscriptionCommitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCommitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCommitCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCommitCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    computeInstances?: ComputeInstancesOmit
    subscriptionDetails?: SubscriptionDetailsOmit
    tenancyDetails?: TenancyDetailsOmit
    tenancy_details?: tenancy_detailsOmit
    custoDiarioTotal?: CustoDiarioTotalOmit
    custoMensalTotal?: CustoMensalTotalOmit
    computeEvents?: computeEventsOmit
    identityEvents?: identityEventsOmit
    networkEvents?: networkEventsOmit
    blockVolume?: BlockVolumeOmit
    custoPorService?: CustoPorServiceOmit
    custoPorSkuName?: CustoPorSkuNameOmit
    identityUsers?: IdentityUsersOmit
    volumesBackup?: VolumesBackupOmit
    subscriptionCommit?: SubscriptionCommitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model ComputeInstances
   */

  export type AggregateComputeInstances = {
    _count: ComputeInstancesCountAggregateOutputType | null
    _avg: ComputeInstancesAvgAggregateOutputType | null
    _sum: ComputeInstancesSumAggregateOutputType | null
    _min: ComputeInstancesMinAggregateOutputType | null
    _max: ComputeInstancesMaxAggregateOutputType | null
  }

  export type ComputeInstancesAvgAggregateOutputType = {
    memory_in_gbs: number | null
    ocpus: number | null
    monthly_cost: number | null
  }

  export type ComputeInstancesSumAggregateOutputType = {
    memory_in_gbs: number | null
    ocpus: number | null
    monthly_cost: number | null
  }

  export type ComputeInstancesMinAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    id: string | null
    display_name: string | null
    compartment_id: string | null
    availability_domain: string | null
    fault_domain: string | null
    region: string | null
    lifecycle_state: string | null
    shape: string | null
    memory_in_gbs: number | null
    ocpus: number | null
    processor_description: string | null
    time_created: Date | null
    CreatedBy: string | null
    monthly_cost: number | null
  }

  export type ComputeInstancesMaxAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    id: string | null
    display_name: string | null
    compartment_id: string | null
    availability_domain: string | null
    fault_domain: string | null
    region: string | null
    lifecycle_state: string | null
    shape: string | null
    memory_in_gbs: number | null
    ocpus: number | null
    processor_description: string | null
    time_created: Date | null
    CreatedBy: string | null
    monthly_cost: number | null
  }

  export type ComputeInstancesCountAggregateOutputType = {
    tenancy_name: number
    tenancy_id: number
    id: number
    display_name: number
    compartment_id: number
    availability_domain: number
    fault_domain: number
    region: number
    lifecycle_state: number
    shape: number
    memory_in_gbs: number
    ocpus: number
    processor_description: number
    time_created: number
    CreatedBy: number
    monthly_cost: number
    _all: number
  }


  export type ComputeInstancesAvgAggregateInputType = {
    memory_in_gbs?: true
    ocpus?: true
    monthly_cost?: true
  }

  export type ComputeInstancesSumAggregateInputType = {
    memory_in_gbs?: true
    ocpus?: true
    monthly_cost?: true
  }

  export type ComputeInstancesMinAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    id?: true
    display_name?: true
    compartment_id?: true
    availability_domain?: true
    fault_domain?: true
    region?: true
    lifecycle_state?: true
    shape?: true
    memory_in_gbs?: true
    ocpus?: true
    processor_description?: true
    time_created?: true
    CreatedBy?: true
    monthly_cost?: true
  }

  export type ComputeInstancesMaxAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    id?: true
    display_name?: true
    compartment_id?: true
    availability_domain?: true
    fault_domain?: true
    region?: true
    lifecycle_state?: true
    shape?: true
    memory_in_gbs?: true
    ocpus?: true
    processor_description?: true
    time_created?: true
    CreatedBy?: true
    monthly_cost?: true
  }

  export type ComputeInstancesCountAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    id?: true
    display_name?: true
    compartment_id?: true
    availability_domain?: true
    fault_domain?: true
    region?: true
    lifecycle_state?: true
    shape?: true
    memory_in_gbs?: true
    ocpus?: true
    processor_description?: true
    time_created?: true
    CreatedBy?: true
    monthly_cost?: true
    _all?: true
  }

  export type ComputeInstancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComputeInstances to aggregate.
     */
    where?: ComputeInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComputeInstances to fetch.
     */
    orderBy?: ComputeInstancesOrderByWithRelationInput | ComputeInstancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComputeInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComputeInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComputeInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComputeInstances
    **/
    _count?: true | ComputeInstancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComputeInstancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComputeInstancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComputeInstancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComputeInstancesMaxAggregateInputType
  }

  export type GetComputeInstancesAggregateType<T extends ComputeInstancesAggregateArgs> = {
        [P in keyof T & keyof AggregateComputeInstances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComputeInstances[P]>
      : GetScalarType<T[P], AggregateComputeInstances[P]>
  }




  export type ComputeInstancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComputeInstancesWhereInput
    orderBy?: ComputeInstancesOrderByWithAggregationInput | ComputeInstancesOrderByWithAggregationInput[]
    by: ComputeInstancesScalarFieldEnum[] | ComputeInstancesScalarFieldEnum
    having?: ComputeInstancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComputeInstancesCountAggregateInputType | true
    _avg?: ComputeInstancesAvgAggregateInputType
    _sum?: ComputeInstancesSumAggregateInputType
    _min?: ComputeInstancesMinAggregateInputType
    _max?: ComputeInstancesMaxAggregateInputType
  }

  export type ComputeInstancesGroupByOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    id: string
    display_name: string | null
    compartment_id: string | null
    availability_domain: string | null
    fault_domain: string | null
    region: string | null
    lifecycle_state: string | null
    shape: string | null
    memory_in_gbs: number | null
    ocpus: number | null
    processor_description: string | null
    time_created: Date | null
    CreatedBy: string | null
    monthly_cost: number | null
    _count: ComputeInstancesCountAggregateOutputType | null
    _avg: ComputeInstancesAvgAggregateOutputType | null
    _sum: ComputeInstancesSumAggregateOutputType | null
    _min: ComputeInstancesMinAggregateOutputType | null
    _max: ComputeInstancesMaxAggregateOutputType | null
  }

  type GetComputeInstancesGroupByPayload<T extends ComputeInstancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComputeInstancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComputeInstancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComputeInstancesGroupByOutputType[P]>
            : GetScalarType<T[P], ComputeInstancesGroupByOutputType[P]>
        }
      >
    >


  export type ComputeInstancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenancy_id?: boolean
    id?: boolean
    display_name?: boolean
    compartment_id?: boolean
    availability_domain?: boolean
    fault_domain?: boolean
    region?: boolean
    lifecycle_state?: boolean
    shape?: boolean
    memory_in_gbs?: boolean
    ocpus?: boolean
    processor_description?: boolean
    time_created?: boolean
    CreatedBy?: boolean
    monthly_cost?: boolean
  }, ExtArgs["result"]["computeInstances"]>



  export type ComputeInstancesSelectScalar = {
    tenancy_name?: boolean
    tenancy_id?: boolean
    id?: boolean
    display_name?: boolean
    compartment_id?: boolean
    availability_domain?: boolean
    fault_domain?: boolean
    region?: boolean
    lifecycle_state?: boolean
    shape?: boolean
    memory_in_gbs?: boolean
    ocpus?: boolean
    processor_description?: boolean
    time_created?: boolean
    CreatedBy?: boolean
    monthly_cost?: boolean
  }

  export type ComputeInstancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenancy_id" | "id" | "display_name" | "compartment_id" | "availability_domain" | "fault_domain" | "region" | "lifecycle_state" | "shape" | "memory_in_gbs" | "ocpus" | "processor_description" | "time_created" | "CreatedBy" | "monthly_cost", ExtArgs["result"]["computeInstances"]>

  export type $ComputeInstancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComputeInstances"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string | null
      tenancy_id: string | null
      id: string
      display_name: string | null
      compartment_id: string | null
      availability_domain: string | null
      fault_domain: string | null
      region: string | null
      lifecycle_state: string | null
      shape: string | null
      memory_in_gbs: number | null
      ocpus: number | null
      processor_description: string | null
      time_created: Date | null
      CreatedBy: string | null
      monthly_cost: number | null
    }, ExtArgs["result"]["computeInstances"]>
    composites: {}
  }

  type ComputeInstancesGetPayload<S extends boolean | null | undefined | ComputeInstancesDefaultArgs> = $Result.GetResult<Prisma.$ComputeInstancesPayload, S>

  type ComputeInstancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComputeInstancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComputeInstancesCountAggregateInputType | true
    }

  export interface ComputeInstancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComputeInstances'], meta: { name: 'ComputeInstances' } }
    /**
     * Find zero or one ComputeInstances that matches the filter.
     * @param {ComputeInstancesFindUniqueArgs} args - Arguments to find a ComputeInstances
     * @example
     * // Get one ComputeInstances
     * const computeInstances = await prisma.computeInstances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComputeInstancesFindUniqueArgs>(args: SelectSubset<T, ComputeInstancesFindUniqueArgs<ExtArgs>>): Prisma__ComputeInstancesClient<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComputeInstances that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComputeInstancesFindUniqueOrThrowArgs} args - Arguments to find a ComputeInstances
     * @example
     * // Get one ComputeInstances
     * const computeInstances = await prisma.computeInstances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComputeInstancesFindUniqueOrThrowArgs>(args: SelectSubset<T, ComputeInstancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComputeInstancesClient<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComputeInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputeInstancesFindFirstArgs} args - Arguments to find a ComputeInstances
     * @example
     * // Get one ComputeInstances
     * const computeInstances = await prisma.computeInstances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComputeInstancesFindFirstArgs>(args?: SelectSubset<T, ComputeInstancesFindFirstArgs<ExtArgs>>): Prisma__ComputeInstancesClient<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComputeInstances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputeInstancesFindFirstOrThrowArgs} args - Arguments to find a ComputeInstances
     * @example
     * // Get one ComputeInstances
     * const computeInstances = await prisma.computeInstances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComputeInstancesFindFirstOrThrowArgs>(args?: SelectSubset<T, ComputeInstancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComputeInstancesClient<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComputeInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputeInstancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComputeInstances
     * const computeInstances = await prisma.computeInstances.findMany()
     * 
     * // Get first 10 ComputeInstances
     * const computeInstances = await prisma.computeInstances.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const computeInstancesWithTenancy_nameOnly = await prisma.computeInstances.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends ComputeInstancesFindManyArgs>(args?: SelectSubset<T, ComputeInstancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComputeInstances.
     * @param {ComputeInstancesCreateArgs} args - Arguments to create a ComputeInstances.
     * @example
     * // Create one ComputeInstances
     * const ComputeInstances = await prisma.computeInstances.create({
     *   data: {
     *     // ... data to create a ComputeInstances
     *   }
     * })
     * 
     */
    create<T extends ComputeInstancesCreateArgs>(args: SelectSubset<T, ComputeInstancesCreateArgs<ExtArgs>>): Prisma__ComputeInstancesClient<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComputeInstances.
     * @param {ComputeInstancesCreateManyArgs} args - Arguments to create many ComputeInstances.
     * @example
     * // Create many ComputeInstances
     * const computeInstances = await prisma.computeInstances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComputeInstancesCreateManyArgs>(args?: SelectSubset<T, ComputeInstancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ComputeInstances.
     * @param {ComputeInstancesDeleteArgs} args - Arguments to delete one ComputeInstances.
     * @example
     * // Delete one ComputeInstances
     * const ComputeInstances = await prisma.computeInstances.delete({
     *   where: {
     *     // ... filter to delete one ComputeInstances
     *   }
     * })
     * 
     */
    delete<T extends ComputeInstancesDeleteArgs>(args: SelectSubset<T, ComputeInstancesDeleteArgs<ExtArgs>>): Prisma__ComputeInstancesClient<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComputeInstances.
     * @param {ComputeInstancesUpdateArgs} args - Arguments to update one ComputeInstances.
     * @example
     * // Update one ComputeInstances
     * const computeInstances = await prisma.computeInstances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComputeInstancesUpdateArgs>(args: SelectSubset<T, ComputeInstancesUpdateArgs<ExtArgs>>): Prisma__ComputeInstancesClient<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComputeInstances.
     * @param {ComputeInstancesDeleteManyArgs} args - Arguments to filter ComputeInstances to delete.
     * @example
     * // Delete a few ComputeInstances
     * const { count } = await prisma.computeInstances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComputeInstancesDeleteManyArgs>(args?: SelectSubset<T, ComputeInstancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComputeInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputeInstancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComputeInstances
     * const computeInstances = await prisma.computeInstances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComputeInstancesUpdateManyArgs>(args: SelectSubset<T, ComputeInstancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ComputeInstances.
     * @param {ComputeInstancesUpsertArgs} args - Arguments to update or create a ComputeInstances.
     * @example
     * // Update or create a ComputeInstances
     * const computeInstances = await prisma.computeInstances.upsert({
     *   create: {
     *     // ... data to create a ComputeInstances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComputeInstances we want to update
     *   }
     * })
     */
    upsert<T extends ComputeInstancesUpsertArgs>(args: SelectSubset<T, ComputeInstancesUpsertArgs<ExtArgs>>): Prisma__ComputeInstancesClient<$Result.GetResult<Prisma.$ComputeInstancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComputeInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputeInstancesCountArgs} args - Arguments to filter ComputeInstances to count.
     * @example
     * // Count the number of ComputeInstances
     * const count = await prisma.computeInstances.count({
     *   where: {
     *     // ... the filter for the ComputeInstances we want to count
     *   }
     * })
    **/
    count<T extends ComputeInstancesCountArgs>(
      args?: Subset<T, ComputeInstancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComputeInstancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComputeInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputeInstancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComputeInstancesAggregateArgs>(args: Subset<T, ComputeInstancesAggregateArgs>): Prisma.PrismaPromise<GetComputeInstancesAggregateType<T>>

    /**
     * Group by ComputeInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputeInstancesGroupByArgs} args - Group by arguments.
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
      T extends ComputeInstancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComputeInstancesGroupByArgs['orderBy'] }
        : { orderBy?: ComputeInstancesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComputeInstancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComputeInstancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComputeInstances model
   */
  readonly fields: ComputeInstancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComputeInstances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComputeInstancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ComputeInstances model
   */
  interface ComputeInstancesFieldRefs {
    readonly tenancy_name: FieldRef<"ComputeInstances", 'String'>
    readonly tenancy_id: FieldRef<"ComputeInstances", 'String'>
    readonly id: FieldRef<"ComputeInstances", 'String'>
    readonly display_name: FieldRef<"ComputeInstances", 'String'>
    readonly compartment_id: FieldRef<"ComputeInstances", 'String'>
    readonly availability_domain: FieldRef<"ComputeInstances", 'String'>
    readonly fault_domain: FieldRef<"ComputeInstances", 'String'>
    readonly region: FieldRef<"ComputeInstances", 'String'>
    readonly lifecycle_state: FieldRef<"ComputeInstances", 'String'>
    readonly shape: FieldRef<"ComputeInstances", 'String'>
    readonly memory_in_gbs: FieldRef<"ComputeInstances", 'Float'>
    readonly ocpus: FieldRef<"ComputeInstances", 'Int'>
    readonly processor_description: FieldRef<"ComputeInstances", 'String'>
    readonly time_created: FieldRef<"ComputeInstances", 'DateTime'>
    readonly CreatedBy: FieldRef<"ComputeInstances", 'String'>
    readonly monthly_cost: FieldRef<"ComputeInstances", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ComputeInstances findUnique
   */
  export type ComputeInstancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * Filter, which ComputeInstances to fetch.
     */
    where: ComputeInstancesWhereUniqueInput
  }

  /**
   * ComputeInstances findUniqueOrThrow
   */
  export type ComputeInstancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * Filter, which ComputeInstances to fetch.
     */
    where: ComputeInstancesWhereUniqueInput
  }

  /**
   * ComputeInstances findFirst
   */
  export type ComputeInstancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * Filter, which ComputeInstances to fetch.
     */
    where?: ComputeInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComputeInstances to fetch.
     */
    orderBy?: ComputeInstancesOrderByWithRelationInput | ComputeInstancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComputeInstances.
     */
    cursor?: ComputeInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComputeInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComputeInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComputeInstances.
     */
    distinct?: ComputeInstancesScalarFieldEnum | ComputeInstancesScalarFieldEnum[]
  }

  /**
   * ComputeInstances findFirstOrThrow
   */
  export type ComputeInstancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * Filter, which ComputeInstances to fetch.
     */
    where?: ComputeInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComputeInstances to fetch.
     */
    orderBy?: ComputeInstancesOrderByWithRelationInput | ComputeInstancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComputeInstances.
     */
    cursor?: ComputeInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComputeInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComputeInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComputeInstances.
     */
    distinct?: ComputeInstancesScalarFieldEnum | ComputeInstancesScalarFieldEnum[]
  }

  /**
   * ComputeInstances findMany
   */
  export type ComputeInstancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * Filter, which ComputeInstances to fetch.
     */
    where?: ComputeInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComputeInstances to fetch.
     */
    orderBy?: ComputeInstancesOrderByWithRelationInput | ComputeInstancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComputeInstances.
     */
    cursor?: ComputeInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComputeInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComputeInstances.
     */
    skip?: number
    distinct?: ComputeInstancesScalarFieldEnum | ComputeInstancesScalarFieldEnum[]
  }

  /**
   * ComputeInstances create
   */
  export type ComputeInstancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * The data needed to create a ComputeInstances.
     */
    data?: XOR<ComputeInstancesCreateInput, ComputeInstancesUncheckedCreateInput>
  }

  /**
   * ComputeInstances createMany
   */
  export type ComputeInstancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComputeInstances.
     */
    data: ComputeInstancesCreateManyInput | ComputeInstancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComputeInstances update
   */
  export type ComputeInstancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * The data needed to update a ComputeInstances.
     */
    data: XOR<ComputeInstancesUpdateInput, ComputeInstancesUncheckedUpdateInput>
    /**
     * Choose, which ComputeInstances to update.
     */
    where: ComputeInstancesWhereUniqueInput
  }

  /**
   * ComputeInstances updateMany
   */
  export type ComputeInstancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComputeInstances.
     */
    data: XOR<ComputeInstancesUpdateManyMutationInput, ComputeInstancesUncheckedUpdateManyInput>
    /**
     * Filter which ComputeInstances to update
     */
    where?: ComputeInstancesWhereInput
    /**
     * Limit how many ComputeInstances to update.
     */
    limit?: number
  }

  /**
   * ComputeInstances upsert
   */
  export type ComputeInstancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * The filter to search for the ComputeInstances to update in case it exists.
     */
    where: ComputeInstancesWhereUniqueInput
    /**
     * In case the ComputeInstances found by the `where` argument doesn't exist, create a new ComputeInstances with this data.
     */
    create: XOR<ComputeInstancesCreateInput, ComputeInstancesUncheckedCreateInput>
    /**
     * In case the ComputeInstances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComputeInstancesUpdateInput, ComputeInstancesUncheckedUpdateInput>
  }

  /**
   * ComputeInstances delete
   */
  export type ComputeInstancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
    /**
     * Filter which ComputeInstances to delete.
     */
    where: ComputeInstancesWhereUniqueInput
  }

  /**
   * ComputeInstances deleteMany
   */
  export type ComputeInstancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComputeInstances to delete
     */
    where?: ComputeInstancesWhereInput
    /**
     * Limit how many ComputeInstances to delete.
     */
    limit?: number
  }

  /**
   * ComputeInstances without action
   */
  export type ComputeInstancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputeInstances
     */
    select?: ComputeInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputeInstances
     */
    omit?: ComputeInstancesOmit<ExtArgs> | null
  }


  /**
   * Model SubscriptionDetails
   */

  export type AggregateSubscriptionDetails = {
    _count: SubscriptionDetailsCountAggregateOutputType | null
    _avg: SubscriptionDetailsAvgAggregateOutputType | null
    _sum: SubscriptionDetailsSumAggregateOutputType | null
    _min: SubscriptionDetailsMinAggregateOutputType | null
    _max: SubscriptionDetailsMaxAggregateOutputType | null
  }

  export type SubscriptionDetailsAvgAggregateOutputType = {
    total_value: number | null
    used_amount: number | null
    line_net_amount: number | null
    available_amount: number | null
    total_dias_contrato: number | null
    dias_decorridos: number | null
  }

  export type SubscriptionDetailsSumAggregateOutputType = {
    total_value: number | null
    used_amount: number | null
    line_net_amount: number | null
    available_amount: number | null
    total_dias_contrato: number | null
    dias_decorridos: number | null
  }

  export type SubscriptionDetailsMinAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    home_region: string | null
    subscription_id: string | null
    service_name: string | null
    currency: string | null
    time_start: Date | null
    time_end: Date | null
    admin_email: string | null
    buyer_email: string | null
    end_user_customer: string | null
    payment_method: string | null
    pricing_model: string | null
    product: string | null
    is_having_usage: string | null
    total_value: number | null
    used_amount: number | null
    line_net_amount: number | null
    available_amount: number | null
    total_dias_contrato: number | null
    dias_decorridos: number | null
    updated: Date | null
    status: string | null
  }

  export type SubscriptionDetailsMaxAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    home_region: string | null
    subscription_id: string | null
    service_name: string | null
    currency: string | null
    time_start: Date | null
    time_end: Date | null
    admin_email: string | null
    buyer_email: string | null
    end_user_customer: string | null
    payment_method: string | null
    pricing_model: string | null
    product: string | null
    is_having_usage: string | null
    total_value: number | null
    used_amount: number | null
    line_net_amount: number | null
    available_amount: number | null
    total_dias_contrato: number | null
    dias_decorridos: number | null
    updated: Date | null
    status: string | null
  }

  export type SubscriptionDetailsCountAggregateOutputType = {
    tenancy_name: number
    tenancy_id: number
    home_region: number
    subscription_id: number
    service_name: number
    currency: number
    time_start: number
    time_end: number
    admin_email: number
    buyer_email: number
    end_user_customer: number
    payment_method: number
    pricing_model: number
    product: number
    is_having_usage: number
    total_value: number
    used_amount: number
    line_net_amount: number
    available_amount: number
    total_dias_contrato: number
    dias_decorridos: number
    updated: number
    status: number
    _all: number
  }


  export type SubscriptionDetailsAvgAggregateInputType = {
    total_value?: true
    used_amount?: true
    line_net_amount?: true
    available_amount?: true
    total_dias_contrato?: true
    dias_decorridos?: true
  }

  export type SubscriptionDetailsSumAggregateInputType = {
    total_value?: true
    used_amount?: true
    line_net_amount?: true
    available_amount?: true
    total_dias_contrato?: true
    dias_decorridos?: true
  }

  export type SubscriptionDetailsMinAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    home_region?: true
    subscription_id?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    admin_email?: true
    buyer_email?: true
    end_user_customer?: true
    payment_method?: true
    pricing_model?: true
    product?: true
    is_having_usage?: true
    total_value?: true
    used_amount?: true
    line_net_amount?: true
    available_amount?: true
    total_dias_contrato?: true
    dias_decorridos?: true
    updated?: true
    status?: true
  }

  export type SubscriptionDetailsMaxAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    home_region?: true
    subscription_id?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    admin_email?: true
    buyer_email?: true
    end_user_customer?: true
    payment_method?: true
    pricing_model?: true
    product?: true
    is_having_usage?: true
    total_value?: true
    used_amount?: true
    line_net_amount?: true
    available_amount?: true
    total_dias_contrato?: true
    dias_decorridos?: true
    updated?: true
    status?: true
  }

  export type SubscriptionDetailsCountAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    home_region?: true
    subscription_id?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    admin_email?: true
    buyer_email?: true
    end_user_customer?: true
    payment_method?: true
    pricing_model?: true
    product?: true
    is_having_usage?: true
    total_value?: true
    used_amount?: true
    line_net_amount?: true
    available_amount?: true
    total_dias_contrato?: true
    dias_decorridos?: true
    updated?: true
    status?: true
    _all?: true
  }

  export type SubscriptionDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionDetails to aggregate.
     */
    where?: SubscriptionDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionDetails to fetch.
     */
    orderBy?: SubscriptionDetailsOrderByWithRelationInput | SubscriptionDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionDetails
    **/
    _count?: true | SubscriptionDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionDetailsMaxAggregateInputType
  }

  export type GetSubscriptionDetailsAggregateType<T extends SubscriptionDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionDetails[P]>
      : GetScalarType<T[P], AggregateSubscriptionDetails[P]>
  }




  export type SubscriptionDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionDetailsWhereInput
    orderBy?: SubscriptionDetailsOrderByWithAggregationInput | SubscriptionDetailsOrderByWithAggregationInput[]
    by: SubscriptionDetailsScalarFieldEnum[] | SubscriptionDetailsScalarFieldEnum
    having?: SubscriptionDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionDetailsCountAggregateInputType | true
    _avg?: SubscriptionDetailsAvgAggregateInputType
    _sum?: SubscriptionDetailsSumAggregateInputType
    _min?: SubscriptionDetailsMinAggregateInputType
    _max?: SubscriptionDetailsMaxAggregateInputType
  }

  export type SubscriptionDetailsGroupByOutputType = {
    tenancy_name: string | null
    tenancy_id: string
    home_region: string | null
    subscription_id: string
    service_name: string | null
    currency: string | null
    time_start: Date
    time_end: Date | null
    admin_email: string | null
    buyer_email: string | null
    end_user_customer: string | null
    payment_method: string | null
    pricing_model: string | null
    product: string | null
    is_having_usage: string | null
    total_value: number | null
    used_amount: number | null
    line_net_amount: number | null
    available_amount: number | null
    total_dias_contrato: number | null
    dias_decorridos: number | null
    updated: Date | null
    status: string | null
    _count: SubscriptionDetailsCountAggregateOutputType | null
    _avg: SubscriptionDetailsAvgAggregateOutputType | null
    _sum: SubscriptionDetailsSumAggregateOutputType | null
    _min: SubscriptionDetailsMinAggregateOutputType | null
    _max: SubscriptionDetailsMaxAggregateOutputType | null
  }

  type GetSubscriptionDetailsGroupByPayload<T extends SubscriptionDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionDetailsGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenancy_id?: boolean
    home_region?: boolean
    subscription_id?: boolean
    service_name?: boolean
    currency?: boolean
    time_start?: boolean
    time_end?: boolean
    admin_email?: boolean
    buyer_email?: boolean
    end_user_customer?: boolean
    payment_method?: boolean
    pricing_model?: boolean
    product?: boolean
    is_having_usage?: boolean
    total_value?: boolean
    used_amount?: boolean
    line_net_amount?: boolean
    available_amount?: boolean
    total_dias_contrato?: boolean
    dias_decorridos?: boolean
    updated?: boolean
    status?: boolean
  }, ExtArgs["result"]["subscriptionDetails"]>



  export type SubscriptionDetailsSelectScalar = {
    tenancy_name?: boolean
    tenancy_id?: boolean
    home_region?: boolean
    subscription_id?: boolean
    service_name?: boolean
    currency?: boolean
    time_start?: boolean
    time_end?: boolean
    admin_email?: boolean
    buyer_email?: boolean
    end_user_customer?: boolean
    payment_method?: boolean
    pricing_model?: boolean
    product?: boolean
    is_having_usage?: boolean
    total_value?: boolean
    used_amount?: boolean
    line_net_amount?: boolean
    available_amount?: boolean
    total_dias_contrato?: boolean
    dias_decorridos?: boolean
    updated?: boolean
    status?: boolean
  }

  export type SubscriptionDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenancy_id" | "home_region" | "subscription_id" | "service_name" | "currency" | "time_start" | "time_end" | "admin_email" | "buyer_email" | "end_user_customer" | "payment_method" | "pricing_model" | "product" | "is_having_usage" | "total_value" | "used_amount" | "line_net_amount" | "available_amount" | "total_dias_contrato" | "dias_decorridos" | "updated" | "status", ExtArgs["result"]["subscriptionDetails"]>

  export type $SubscriptionDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionDetails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string | null
      tenancy_id: string
      home_region: string | null
      subscription_id: string
      service_name: string | null
      currency: string | null
      time_start: Date
      time_end: Date | null
      admin_email: string | null
      buyer_email: string | null
      end_user_customer: string | null
      payment_method: string | null
      pricing_model: string | null
      product: string | null
      is_having_usage: string | null
      total_value: number | null
      used_amount: number | null
      line_net_amount: number | null
      available_amount: number | null
      total_dias_contrato: number | null
      dias_decorridos: number | null
      updated: Date | null
      status: string | null
    }, ExtArgs["result"]["subscriptionDetails"]>
    composites: {}
  }

  type SubscriptionDetailsGetPayload<S extends boolean | null | undefined | SubscriptionDetailsDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionDetailsPayload, S>

  type SubscriptionDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionDetailsCountAggregateInputType | true
    }

  export interface SubscriptionDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionDetails'], meta: { name: 'SubscriptionDetails' } }
    /**
     * Find zero or one SubscriptionDetails that matches the filter.
     * @param {SubscriptionDetailsFindUniqueArgs} args - Arguments to find a SubscriptionDetails
     * @example
     * // Get one SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionDetailsFindUniqueArgs>(args: SelectSubset<T, SubscriptionDetailsFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionDetailsClient<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionDetailsFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionDetails
     * @example
     * // Get one SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionDetailsClient<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionDetailsFindFirstArgs} args - Arguments to find a SubscriptionDetails
     * @example
     * // Get one SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionDetailsFindFirstArgs>(args?: SelectSubset<T, SubscriptionDetailsFindFirstArgs<ExtArgs>>): Prisma__SubscriptionDetailsClient<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionDetailsFindFirstOrThrowArgs} args - Arguments to find a SubscriptionDetails
     * @example
     * // Get one SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionDetailsClient<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.findMany()
     * 
     * // Get first 10 SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const subscriptionDetailsWithTenancy_nameOnly = await prisma.subscriptionDetails.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends SubscriptionDetailsFindManyArgs>(args?: SelectSubset<T, SubscriptionDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionDetails.
     * @param {SubscriptionDetailsCreateArgs} args - Arguments to create a SubscriptionDetails.
     * @example
     * // Create one SubscriptionDetails
     * const SubscriptionDetails = await prisma.subscriptionDetails.create({
     *   data: {
     *     // ... data to create a SubscriptionDetails
     *   }
     * })
     * 
     */
    create<T extends SubscriptionDetailsCreateArgs>(args: SelectSubset<T, SubscriptionDetailsCreateArgs<ExtArgs>>): Prisma__SubscriptionDetailsClient<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionDetails.
     * @param {SubscriptionDetailsCreateManyArgs} args - Arguments to create many SubscriptionDetails.
     * @example
     * // Create many SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionDetailsCreateManyArgs>(args?: SelectSubset<T, SubscriptionDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubscriptionDetails.
     * @param {SubscriptionDetailsDeleteArgs} args - Arguments to delete one SubscriptionDetails.
     * @example
     * // Delete one SubscriptionDetails
     * const SubscriptionDetails = await prisma.subscriptionDetails.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionDetails
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDetailsDeleteArgs>(args: SelectSubset<T, SubscriptionDetailsDeleteArgs<ExtArgs>>): Prisma__SubscriptionDetailsClient<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionDetails.
     * @param {SubscriptionDetailsUpdateArgs} args - Arguments to update one SubscriptionDetails.
     * @example
     * // Update one SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionDetailsUpdateArgs>(args: SelectSubset<T, SubscriptionDetailsUpdateArgs<ExtArgs>>): Prisma__SubscriptionDetailsClient<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionDetails.
     * @param {SubscriptionDetailsDeleteManyArgs} args - Arguments to filter SubscriptionDetails to delete.
     * @example
     * // Delete a few SubscriptionDetails
     * const { count } = await prisma.subscriptionDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDetailsDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionDetailsUpdateManyArgs>(args: SelectSubset<T, SubscriptionDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionDetails.
     * @param {SubscriptionDetailsUpsertArgs} args - Arguments to update or create a SubscriptionDetails.
     * @example
     * // Update or create a SubscriptionDetails
     * const subscriptionDetails = await prisma.subscriptionDetails.upsert({
     *   create: {
     *     // ... data to create a SubscriptionDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionDetails we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionDetailsUpsertArgs>(args: SelectSubset<T, SubscriptionDetailsUpsertArgs<ExtArgs>>): Prisma__SubscriptionDetailsClient<$Result.GetResult<Prisma.$SubscriptionDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionDetailsCountArgs} args - Arguments to filter SubscriptionDetails to count.
     * @example
     * // Count the number of SubscriptionDetails
     * const count = await prisma.subscriptionDetails.count({
     *   where: {
     *     // ... the filter for the SubscriptionDetails we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionDetailsCountArgs>(
      args?: Subset<T, SubscriptionDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionDetailsAggregateArgs>(args: Subset<T, SubscriptionDetailsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionDetailsAggregateType<T>>

    /**
     * Group by SubscriptionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionDetailsGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionDetailsGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionDetails model
   */
  readonly fields: SubscriptionDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SubscriptionDetails model
   */
  interface SubscriptionDetailsFieldRefs {
    readonly tenancy_name: FieldRef<"SubscriptionDetails", 'String'>
    readonly tenancy_id: FieldRef<"SubscriptionDetails", 'String'>
    readonly home_region: FieldRef<"SubscriptionDetails", 'String'>
    readonly subscription_id: FieldRef<"SubscriptionDetails", 'String'>
    readonly service_name: FieldRef<"SubscriptionDetails", 'String'>
    readonly currency: FieldRef<"SubscriptionDetails", 'String'>
    readonly time_start: FieldRef<"SubscriptionDetails", 'DateTime'>
    readonly time_end: FieldRef<"SubscriptionDetails", 'DateTime'>
    readonly admin_email: FieldRef<"SubscriptionDetails", 'String'>
    readonly buyer_email: FieldRef<"SubscriptionDetails", 'String'>
    readonly end_user_customer: FieldRef<"SubscriptionDetails", 'String'>
    readonly payment_method: FieldRef<"SubscriptionDetails", 'String'>
    readonly pricing_model: FieldRef<"SubscriptionDetails", 'String'>
    readonly product: FieldRef<"SubscriptionDetails", 'String'>
    readonly is_having_usage: FieldRef<"SubscriptionDetails", 'String'>
    readonly total_value: FieldRef<"SubscriptionDetails", 'Float'>
    readonly used_amount: FieldRef<"SubscriptionDetails", 'Float'>
    readonly line_net_amount: FieldRef<"SubscriptionDetails", 'Float'>
    readonly available_amount: FieldRef<"SubscriptionDetails", 'Float'>
    readonly total_dias_contrato: FieldRef<"SubscriptionDetails", 'Int'>
    readonly dias_decorridos: FieldRef<"SubscriptionDetails", 'Int'>
    readonly updated: FieldRef<"SubscriptionDetails", 'DateTime'>
    readonly status: FieldRef<"SubscriptionDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionDetails findUnique
   */
  export type SubscriptionDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionDetails to fetch.
     */
    where: SubscriptionDetailsWhereUniqueInput
  }

  /**
   * SubscriptionDetails findUniqueOrThrow
   */
  export type SubscriptionDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionDetails to fetch.
     */
    where: SubscriptionDetailsWhereUniqueInput
  }

  /**
   * SubscriptionDetails findFirst
   */
  export type SubscriptionDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionDetails to fetch.
     */
    where?: SubscriptionDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionDetails to fetch.
     */
    orderBy?: SubscriptionDetailsOrderByWithRelationInput | SubscriptionDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionDetails.
     */
    cursor?: SubscriptionDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionDetails.
     */
    distinct?: SubscriptionDetailsScalarFieldEnum | SubscriptionDetailsScalarFieldEnum[]
  }

  /**
   * SubscriptionDetails findFirstOrThrow
   */
  export type SubscriptionDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionDetails to fetch.
     */
    where?: SubscriptionDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionDetails to fetch.
     */
    orderBy?: SubscriptionDetailsOrderByWithRelationInput | SubscriptionDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionDetails.
     */
    cursor?: SubscriptionDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionDetails.
     */
    distinct?: SubscriptionDetailsScalarFieldEnum | SubscriptionDetailsScalarFieldEnum[]
  }

  /**
   * SubscriptionDetails findMany
   */
  export type SubscriptionDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionDetails to fetch.
     */
    where?: SubscriptionDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionDetails to fetch.
     */
    orderBy?: SubscriptionDetailsOrderByWithRelationInput | SubscriptionDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionDetails.
     */
    cursor?: SubscriptionDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionDetails.
     */
    skip?: number
    distinct?: SubscriptionDetailsScalarFieldEnum | SubscriptionDetailsScalarFieldEnum[]
  }

  /**
   * SubscriptionDetails create
   */
  export type SubscriptionDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionDetails.
     */
    data?: XOR<SubscriptionDetailsCreateInput, SubscriptionDetailsUncheckedCreateInput>
  }

  /**
   * SubscriptionDetails createMany
   */
  export type SubscriptionDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionDetails.
     */
    data: SubscriptionDetailsCreateManyInput | SubscriptionDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionDetails update
   */
  export type SubscriptionDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionDetails.
     */
    data: XOR<SubscriptionDetailsUpdateInput, SubscriptionDetailsUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionDetails to update.
     */
    where: SubscriptionDetailsWhereUniqueInput
  }

  /**
   * SubscriptionDetails updateMany
   */
  export type SubscriptionDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionDetails.
     */
    data: XOR<SubscriptionDetailsUpdateManyMutationInput, SubscriptionDetailsUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionDetails to update
     */
    where?: SubscriptionDetailsWhereInput
    /**
     * Limit how many SubscriptionDetails to update.
     */
    limit?: number
  }

  /**
   * SubscriptionDetails upsert
   */
  export type SubscriptionDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionDetails to update in case it exists.
     */
    where: SubscriptionDetailsWhereUniqueInput
    /**
     * In case the SubscriptionDetails found by the `where` argument doesn't exist, create a new SubscriptionDetails with this data.
     */
    create: XOR<SubscriptionDetailsCreateInput, SubscriptionDetailsUncheckedCreateInput>
    /**
     * In case the SubscriptionDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionDetailsUpdateInput, SubscriptionDetailsUncheckedUpdateInput>
  }

  /**
   * SubscriptionDetails delete
   */
  export type SubscriptionDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
    /**
     * Filter which SubscriptionDetails to delete.
     */
    where: SubscriptionDetailsWhereUniqueInput
  }

  /**
   * SubscriptionDetails deleteMany
   */
  export type SubscriptionDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionDetails to delete
     */
    where?: SubscriptionDetailsWhereInput
    /**
     * Limit how many SubscriptionDetails to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionDetails without action
   */
  export type SubscriptionDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionDetails
     */
    select?: SubscriptionDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionDetails
     */
    omit?: SubscriptionDetailsOmit<ExtArgs> | null
  }


  /**
   * Model TenancyDetails
   */

  export type AggregateTenancyDetails = {
    _count: TenancyDetailsCountAggregateOutputType | null
    _avg: TenancyDetailsAvgAggregateOutputType | null
    _sum: TenancyDetailsSumAggregateOutputType | null
    _min: TenancyDetailsMinAggregateOutputType | null
    _max: TenancyDetailsMaxAggregateOutputType | null
  }

  export type TenancyDetailsAvgAggregateOutputType = {
    total_credit: number | null
  }

  export type TenancyDetailsSumAggregateOutputType = {
    total_credit: number | null
  }

  export type TenancyDetailsMinAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    home_region: string | null
    subscription_id: string | null
    service_name: string | null
    currency: string | null
    time_start: Date | null
    time_end: Date | null
    tenancy_status: string | null
    total_credit: number | null
  }

  export type TenancyDetailsMaxAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    home_region: string | null
    subscription_id: string | null
    service_name: string | null
    currency: string | null
    time_start: Date | null
    time_end: Date | null
    tenancy_status: string | null
    total_credit: number | null
  }

  export type TenancyDetailsCountAggregateOutputType = {
    tenancy_name: number
    tenancy_id: number
    home_region: number
    subscription_id: number
    service_name: number
    currency: number
    time_start: number
    time_end: number
    tenancy_status: number
    total_credit: number
    _all: number
  }


  export type TenancyDetailsAvgAggregateInputType = {
    total_credit?: true
  }

  export type TenancyDetailsSumAggregateInputType = {
    total_credit?: true
  }

  export type TenancyDetailsMinAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    home_region?: true
    subscription_id?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    tenancy_status?: true
    total_credit?: true
  }

  export type TenancyDetailsMaxAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    home_region?: true
    subscription_id?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    tenancy_status?: true
    total_credit?: true
  }

  export type TenancyDetailsCountAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    home_region?: true
    subscription_id?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    tenancy_status?: true
    total_credit?: true
    _all?: true
  }

  export type TenancyDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenancyDetails to aggregate.
     */
    where?: TenancyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenancyDetails to fetch.
     */
    orderBy?: TenancyDetailsOrderByWithRelationInput | TenancyDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenancyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenancyDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenancyDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenancyDetails
    **/
    _count?: true | TenancyDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenancyDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenancyDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenancyDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenancyDetailsMaxAggregateInputType
  }

  export type GetTenancyDetailsAggregateType<T extends TenancyDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenancyDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenancyDetails[P]>
      : GetScalarType<T[P], AggregateTenancyDetails[P]>
  }




  export type TenancyDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenancyDetailsWhereInput
    orderBy?: TenancyDetailsOrderByWithAggregationInput | TenancyDetailsOrderByWithAggregationInput[]
    by: TenancyDetailsScalarFieldEnum[] | TenancyDetailsScalarFieldEnum
    having?: TenancyDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenancyDetailsCountAggregateInputType | true
    _avg?: TenancyDetailsAvgAggregateInputType
    _sum?: TenancyDetailsSumAggregateInputType
    _min?: TenancyDetailsMinAggregateInputType
    _max?: TenancyDetailsMaxAggregateInputType
  }

  export type TenancyDetailsGroupByOutputType = {
    tenancy_name: string | null
    tenancy_id: string
    home_region: string | null
    subscription_id: string | null
    service_name: string | null
    currency: string | null
    time_start: Date | null
    time_end: Date | null
    tenancy_status: string | null
    total_credit: number | null
    _count: TenancyDetailsCountAggregateOutputType | null
    _avg: TenancyDetailsAvgAggregateOutputType | null
    _sum: TenancyDetailsSumAggregateOutputType | null
    _min: TenancyDetailsMinAggregateOutputType | null
    _max: TenancyDetailsMaxAggregateOutputType | null
  }

  type GetTenancyDetailsGroupByPayload<T extends TenancyDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenancyDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenancyDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenancyDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], TenancyDetailsGroupByOutputType[P]>
        }
      >
    >


  export type TenancyDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenancy_id?: boolean
    home_region?: boolean
    subscription_id?: boolean
    service_name?: boolean
    currency?: boolean
    time_start?: boolean
    time_end?: boolean
    tenancy_status?: boolean
    total_credit?: boolean
  }, ExtArgs["result"]["tenancyDetails"]>



  export type TenancyDetailsSelectScalar = {
    tenancy_name?: boolean
    tenancy_id?: boolean
    home_region?: boolean
    subscription_id?: boolean
    service_name?: boolean
    currency?: boolean
    time_start?: boolean
    time_end?: boolean
    tenancy_status?: boolean
    total_credit?: boolean
  }

  export type TenancyDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenancy_id" | "home_region" | "subscription_id" | "service_name" | "currency" | "time_start" | "time_end" | "tenancy_status" | "total_credit", ExtArgs["result"]["tenancyDetails"]>

  export type $TenancyDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenancyDetails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string | null
      tenancy_id: string
      home_region: string | null
      subscription_id: string | null
      service_name: string | null
      currency: string | null
      time_start: Date | null
      time_end: Date | null
      tenancy_status: string | null
      total_credit: number | null
    }, ExtArgs["result"]["tenancyDetails"]>
    composites: {}
  }

  type TenancyDetailsGetPayload<S extends boolean | null | undefined | TenancyDetailsDefaultArgs> = $Result.GetResult<Prisma.$TenancyDetailsPayload, S>

  type TenancyDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenancyDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenancyDetailsCountAggregateInputType | true
    }

  export interface TenancyDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenancyDetails'], meta: { name: 'TenancyDetails' } }
    /**
     * Find zero or one TenancyDetails that matches the filter.
     * @param {TenancyDetailsFindUniqueArgs} args - Arguments to find a TenancyDetails
     * @example
     * // Get one TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenancyDetailsFindUniqueArgs>(args: SelectSubset<T, TenancyDetailsFindUniqueArgs<ExtArgs>>): Prisma__TenancyDetailsClient<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenancyDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenancyDetailsFindUniqueOrThrowArgs} args - Arguments to find a TenancyDetails
     * @example
     * // Get one TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenancyDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, TenancyDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenancyDetailsClient<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenancyDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyDetailsFindFirstArgs} args - Arguments to find a TenancyDetails
     * @example
     * // Get one TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenancyDetailsFindFirstArgs>(args?: SelectSubset<T, TenancyDetailsFindFirstArgs<ExtArgs>>): Prisma__TenancyDetailsClient<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenancyDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyDetailsFindFirstOrThrowArgs} args - Arguments to find a TenancyDetails
     * @example
     * // Get one TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenancyDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, TenancyDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenancyDetailsClient<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenancyDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.findMany()
     * 
     * // Get first 10 TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const tenancyDetailsWithTenancy_nameOnly = await prisma.tenancyDetails.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends TenancyDetailsFindManyArgs>(args?: SelectSubset<T, TenancyDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenancyDetails.
     * @param {TenancyDetailsCreateArgs} args - Arguments to create a TenancyDetails.
     * @example
     * // Create one TenancyDetails
     * const TenancyDetails = await prisma.tenancyDetails.create({
     *   data: {
     *     // ... data to create a TenancyDetails
     *   }
     * })
     * 
     */
    create<T extends TenancyDetailsCreateArgs>(args: SelectSubset<T, TenancyDetailsCreateArgs<ExtArgs>>): Prisma__TenancyDetailsClient<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenancyDetails.
     * @param {TenancyDetailsCreateManyArgs} args - Arguments to create many TenancyDetails.
     * @example
     * // Create many TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenancyDetailsCreateManyArgs>(args?: SelectSubset<T, TenancyDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TenancyDetails.
     * @param {TenancyDetailsDeleteArgs} args - Arguments to delete one TenancyDetails.
     * @example
     * // Delete one TenancyDetails
     * const TenancyDetails = await prisma.tenancyDetails.delete({
     *   where: {
     *     // ... filter to delete one TenancyDetails
     *   }
     * })
     * 
     */
    delete<T extends TenancyDetailsDeleteArgs>(args: SelectSubset<T, TenancyDetailsDeleteArgs<ExtArgs>>): Prisma__TenancyDetailsClient<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenancyDetails.
     * @param {TenancyDetailsUpdateArgs} args - Arguments to update one TenancyDetails.
     * @example
     * // Update one TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenancyDetailsUpdateArgs>(args: SelectSubset<T, TenancyDetailsUpdateArgs<ExtArgs>>): Prisma__TenancyDetailsClient<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenancyDetails.
     * @param {TenancyDetailsDeleteManyArgs} args - Arguments to filter TenancyDetails to delete.
     * @example
     * // Delete a few TenancyDetails
     * const { count } = await prisma.tenancyDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenancyDetailsDeleteManyArgs>(args?: SelectSubset<T, TenancyDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenancyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenancyDetailsUpdateManyArgs>(args: SelectSubset<T, TenancyDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TenancyDetails.
     * @param {TenancyDetailsUpsertArgs} args - Arguments to update or create a TenancyDetails.
     * @example
     * // Update or create a TenancyDetails
     * const tenancyDetails = await prisma.tenancyDetails.upsert({
     *   create: {
     *     // ... data to create a TenancyDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenancyDetails we want to update
     *   }
     * })
     */
    upsert<T extends TenancyDetailsUpsertArgs>(args: SelectSubset<T, TenancyDetailsUpsertArgs<ExtArgs>>): Prisma__TenancyDetailsClient<$Result.GetResult<Prisma.$TenancyDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenancyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyDetailsCountArgs} args - Arguments to filter TenancyDetails to count.
     * @example
     * // Count the number of TenancyDetails
     * const count = await prisma.tenancyDetails.count({
     *   where: {
     *     // ... the filter for the TenancyDetails we want to count
     *   }
     * })
    **/
    count<T extends TenancyDetailsCountArgs>(
      args?: Subset<T, TenancyDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenancyDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenancyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenancyDetailsAggregateArgs>(args: Subset<T, TenancyDetailsAggregateArgs>): Prisma.PrismaPromise<GetTenancyDetailsAggregateType<T>>

    /**
     * Group by TenancyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyDetailsGroupByArgs} args - Group by arguments.
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
      T extends TenancyDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenancyDetailsGroupByArgs['orderBy'] }
        : { orderBy?: TenancyDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenancyDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenancyDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenancyDetails model
   */
  readonly fields: TenancyDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenancyDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenancyDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TenancyDetails model
   */
  interface TenancyDetailsFieldRefs {
    readonly tenancy_name: FieldRef<"TenancyDetails", 'String'>
    readonly tenancy_id: FieldRef<"TenancyDetails", 'String'>
    readonly home_region: FieldRef<"TenancyDetails", 'String'>
    readonly subscription_id: FieldRef<"TenancyDetails", 'String'>
    readonly service_name: FieldRef<"TenancyDetails", 'String'>
    readonly currency: FieldRef<"TenancyDetails", 'String'>
    readonly time_start: FieldRef<"TenancyDetails", 'DateTime'>
    readonly time_end: FieldRef<"TenancyDetails", 'DateTime'>
    readonly tenancy_status: FieldRef<"TenancyDetails", 'String'>
    readonly total_credit: FieldRef<"TenancyDetails", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TenancyDetails findUnique
   */
  export type TenancyDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * Filter, which TenancyDetails to fetch.
     */
    where: TenancyDetailsWhereUniqueInput
  }

  /**
   * TenancyDetails findUniqueOrThrow
   */
  export type TenancyDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * Filter, which TenancyDetails to fetch.
     */
    where: TenancyDetailsWhereUniqueInput
  }

  /**
   * TenancyDetails findFirst
   */
  export type TenancyDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * Filter, which TenancyDetails to fetch.
     */
    where?: TenancyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenancyDetails to fetch.
     */
    orderBy?: TenancyDetailsOrderByWithRelationInput | TenancyDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenancyDetails.
     */
    cursor?: TenancyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenancyDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenancyDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenancyDetails.
     */
    distinct?: TenancyDetailsScalarFieldEnum | TenancyDetailsScalarFieldEnum[]
  }

  /**
   * TenancyDetails findFirstOrThrow
   */
  export type TenancyDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * Filter, which TenancyDetails to fetch.
     */
    where?: TenancyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenancyDetails to fetch.
     */
    orderBy?: TenancyDetailsOrderByWithRelationInput | TenancyDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenancyDetails.
     */
    cursor?: TenancyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenancyDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenancyDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenancyDetails.
     */
    distinct?: TenancyDetailsScalarFieldEnum | TenancyDetailsScalarFieldEnum[]
  }

  /**
   * TenancyDetails findMany
   */
  export type TenancyDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * Filter, which TenancyDetails to fetch.
     */
    where?: TenancyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenancyDetails to fetch.
     */
    orderBy?: TenancyDetailsOrderByWithRelationInput | TenancyDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenancyDetails.
     */
    cursor?: TenancyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenancyDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenancyDetails.
     */
    skip?: number
    distinct?: TenancyDetailsScalarFieldEnum | TenancyDetailsScalarFieldEnum[]
  }

  /**
   * TenancyDetails create
   */
  export type TenancyDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * The data needed to create a TenancyDetails.
     */
    data: XOR<TenancyDetailsCreateInput, TenancyDetailsUncheckedCreateInput>
  }

  /**
   * TenancyDetails createMany
   */
  export type TenancyDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenancyDetails.
     */
    data: TenancyDetailsCreateManyInput | TenancyDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenancyDetails update
   */
  export type TenancyDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * The data needed to update a TenancyDetails.
     */
    data: XOR<TenancyDetailsUpdateInput, TenancyDetailsUncheckedUpdateInput>
    /**
     * Choose, which TenancyDetails to update.
     */
    where: TenancyDetailsWhereUniqueInput
  }

  /**
   * TenancyDetails updateMany
   */
  export type TenancyDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenancyDetails.
     */
    data: XOR<TenancyDetailsUpdateManyMutationInput, TenancyDetailsUncheckedUpdateManyInput>
    /**
     * Filter which TenancyDetails to update
     */
    where?: TenancyDetailsWhereInput
    /**
     * Limit how many TenancyDetails to update.
     */
    limit?: number
  }

  /**
   * TenancyDetails upsert
   */
  export type TenancyDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * The filter to search for the TenancyDetails to update in case it exists.
     */
    where: TenancyDetailsWhereUniqueInput
    /**
     * In case the TenancyDetails found by the `where` argument doesn't exist, create a new TenancyDetails with this data.
     */
    create: XOR<TenancyDetailsCreateInput, TenancyDetailsUncheckedCreateInput>
    /**
     * In case the TenancyDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenancyDetailsUpdateInput, TenancyDetailsUncheckedUpdateInput>
  }

  /**
   * TenancyDetails delete
   */
  export type TenancyDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
    /**
     * Filter which TenancyDetails to delete.
     */
    where: TenancyDetailsWhereUniqueInput
  }

  /**
   * TenancyDetails deleteMany
   */
  export type TenancyDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenancyDetails to delete
     */
    where?: TenancyDetailsWhereInput
    /**
     * Limit how many TenancyDetails to delete.
     */
    limit?: number
  }

  /**
   * TenancyDetails without action
   */
  export type TenancyDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyDetails
     */
    select?: TenancyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenancyDetails
     */
    omit?: TenancyDetailsOmit<ExtArgs> | null
  }


  /**
   * Model tenancy_details
   */

  export type AggregateTenancy_details = {
    _count: Tenancy_detailsCountAggregateOutputType | null
    _avg: Tenancy_detailsAvgAggregateOutputType | null
    _sum: Tenancy_detailsSumAggregateOutputType | null
    _min: Tenancy_detailsMinAggregateOutputType | null
    _max: Tenancy_detailsMaxAggregateOutputType | null
  }

  export type Tenancy_detailsAvgAggregateOutputType = {
    total_value: Decimal | null
  }

  export type Tenancy_detailsSumAggregateOutputType = {
    total_value: Decimal | null
  }

  export type Tenancy_detailsMinAggregateOutputType = {
    tenancy_id: string | null
    tenancy_name: string | null
    home_region: string | null
    service_name: string | null
    currency: string | null
    time_start: Date | null
    time_end: Date | null
    status: string | null
    total_value: Decimal | null
  }

  export type Tenancy_detailsMaxAggregateOutputType = {
    tenancy_id: string | null
    tenancy_name: string | null
    home_region: string | null
    service_name: string | null
    currency: string | null
    time_start: Date | null
    time_end: Date | null
    status: string | null
    total_value: Decimal | null
  }

  export type Tenancy_detailsCountAggregateOutputType = {
    tenancy_id: number
    tenancy_name: number
    home_region: number
    service_name: number
    currency: number
    time_start: number
    time_end: number
    status: number
    total_value: number
    _all: number
  }


  export type Tenancy_detailsAvgAggregateInputType = {
    total_value?: true
  }

  export type Tenancy_detailsSumAggregateInputType = {
    total_value?: true
  }

  export type Tenancy_detailsMinAggregateInputType = {
    tenancy_id?: true
    tenancy_name?: true
    home_region?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    status?: true
    total_value?: true
  }

  export type Tenancy_detailsMaxAggregateInputType = {
    tenancy_id?: true
    tenancy_name?: true
    home_region?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    status?: true
    total_value?: true
  }

  export type Tenancy_detailsCountAggregateInputType = {
    tenancy_id?: true
    tenancy_name?: true
    home_region?: true
    service_name?: true
    currency?: true
    time_start?: true
    time_end?: true
    status?: true
    total_value?: true
    _all?: true
  }

  export type Tenancy_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenancy_details to aggregate.
     */
    where?: tenancy_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenancy_details to fetch.
     */
    orderBy?: tenancy_detailsOrderByWithRelationInput | tenancy_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tenancy_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenancy_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenancy_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tenancy_details
    **/
    _count?: true | Tenancy_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tenancy_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tenancy_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tenancy_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tenancy_detailsMaxAggregateInputType
  }

  export type GetTenancy_detailsAggregateType<T extends Tenancy_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenancy_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenancy_details[P]>
      : GetScalarType<T[P], AggregateTenancy_details[P]>
  }




  export type tenancy_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenancy_detailsWhereInput
    orderBy?: tenancy_detailsOrderByWithAggregationInput | tenancy_detailsOrderByWithAggregationInput[]
    by: Tenancy_detailsScalarFieldEnum[] | Tenancy_detailsScalarFieldEnum
    having?: tenancy_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tenancy_detailsCountAggregateInputType | true
    _avg?: Tenancy_detailsAvgAggregateInputType
    _sum?: Tenancy_detailsSumAggregateInputType
    _min?: Tenancy_detailsMinAggregateInputType
    _max?: Tenancy_detailsMaxAggregateInputType
  }

  export type Tenancy_detailsGroupByOutputType = {
    tenancy_id: string
    tenancy_name: string | null
    home_region: string | null
    service_name: string | null
    currency: string | null
    time_start: Date
    time_end: Date
    status: string | null
    total_value: Decimal | null
    _count: Tenancy_detailsCountAggregateOutputType | null
    _avg: Tenancy_detailsAvgAggregateOutputType | null
    _sum: Tenancy_detailsSumAggregateOutputType | null
    _min: Tenancy_detailsMinAggregateOutputType | null
    _max: Tenancy_detailsMaxAggregateOutputType | null
  }

  type GetTenancy_detailsGroupByPayload<T extends tenancy_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tenancy_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tenancy_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tenancy_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Tenancy_detailsGroupByOutputType[P]>
        }
      >
    >


  export type tenancy_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_id?: boolean
    tenancy_name?: boolean
    home_region?: boolean
    service_name?: boolean
    currency?: boolean
    time_start?: boolean
    time_end?: boolean
    status?: boolean
    total_value?: boolean
  }, ExtArgs["result"]["tenancy_details"]>



  export type tenancy_detailsSelectScalar = {
    tenancy_id?: boolean
    tenancy_name?: boolean
    home_region?: boolean
    service_name?: boolean
    currency?: boolean
    time_start?: boolean
    time_end?: boolean
    status?: boolean
    total_value?: boolean
  }

  export type tenancy_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_id" | "tenancy_name" | "home_region" | "service_name" | "currency" | "time_start" | "time_end" | "status" | "total_value", ExtArgs["result"]["tenancy_details"]>

  export type $tenancy_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tenancy_details"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_id: string
      tenancy_name: string | null
      home_region: string | null
      service_name: string | null
      currency: string | null
      time_start: Date
      time_end: Date
      status: string | null
      total_value: Prisma.Decimal | null
    }, ExtArgs["result"]["tenancy_details"]>
    composites: {}
  }

  type tenancy_detailsGetPayload<S extends boolean | null | undefined | tenancy_detailsDefaultArgs> = $Result.GetResult<Prisma.$tenancy_detailsPayload, S>

  type tenancy_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tenancy_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tenancy_detailsCountAggregateInputType | true
    }

  export interface tenancy_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tenancy_details'], meta: { name: 'tenancy_details' } }
    /**
     * Find zero or one Tenancy_details that matches the filter.
     * @param {tenancy_detailsFindUniqueArgs} args - Arguments to find a Tenancy_details
     * @example
     * // Get one Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tenancy_detailsFindUniqueArgs>(args: SelectSubset<T, tenancy_detailsFindUniqueArgs<ExtArgs>>): Prisma__tenancy_detailsClient<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenancy_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tenancy_detailsFindUniqueOrThrowArgs} args - Arguments to find a Tenancy_details
     * @example
     * // Get one Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tenancy_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, tenancy_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tenancy_detailsClient<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenancy_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenancy_detailsFindFirstArgs} args - Arguments to find a Tenancy_details
     * @example
     * // Get one Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tenancy_detailsFindFirstArgs>(args?: SelectSubset<T, tenancy_detailsFindFirstArgs<ExtArgs>>): Prisma__tenancy_detailsClient<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenancy_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenancy_detailsFindFirstOrThrowArgs} args - Arguments to find a Tenancy_details
     * @example
     * // Get one Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tenancy_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, tenancy_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tenancy_detailsClient<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenancy_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenancy_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.findMany()
     * 
     * // Get first 10 Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_id`
     * const tenancy_detailsWithTenancy_idOnly = await prisma.tenancy_details.findMany({ select: { tenancy_id: true } })
     * 
     */
    findMany<T extends tenancy_detailsFindManyArgs>(args?: SelectSubset<T, tenancy_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenancy_details.
     * @param {tenancy_detailsCreateArgs} args - Arguments to create a Tenancy_details.
     * @example
     * // Create one Tenancy_details
     * const Tenancy_details = await prisma.tenancy_details.create({
     *   data: {
     *     // ... data to create a Tenancy_details
     *   }
     * })
     * 
     */
    create<T extends tenancy_detailsCreateArgs>(args: SelectSubset<T, tenancy_detailsCreateArgs<ExtArgs>>): Prisma__tenancy_detailsClient<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenancy_details.
     * @param {tenancy_detailsCreateManyArgs} args - Arguments to create many Tenancy_details.
     * @example
     * // Create many Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tenancy_detailsCreateManyArgs>(args?: SelectSubset<T, tenancy_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tenancy_details.
     * @param {tenancy_detailsDeleteArgs} args - Arguments to delete one Tenancy_details.
     * @example
     * // Delete one Tenancy_details
     * const Tenancy_details = await prisma.tenancy_details.delete({
     *   where: {
     *     // ... filter to delete one Tenancy_details
     *   }
     * })
     * 
     */
    delete<T extends tenancy_detailsDeleteArgs>(args: SelectSubset<T, tenancy_detailsDeleteArgs<ExtArgs>>): Prisma__tenancy_detailsClient<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenancy_details.
     * @param {tenancy_detailsUpdateArgs} args - Arguments to update one Tenancy_details.
     * @example
     * // Update one Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tenancy_detailsUpdateArgs>(args: SelectSubset<T, tenancy_detailsUpdateArgs<ExtArgs>>): Prisma__tenancy_detailsClient<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenancy_details.
     * @param {tenancy_detailsDeleteManyArgs} args - Arguments to filter Tenancy_details to delete.
     * @example
     * // Delete a few Tenancy_details
     * const { count } = await prisma.tenancy_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tenancy_detailsDeleteManyArgs>(args?: SelectSubset<T, tenancy_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenancy_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenancy_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tenancy_detailsUpdateManyArgs>(args: SelectSubset<T, tenancy_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenancy_details.
     * @param {tenancy_detailsUpsertArgs} args - Arguments to update or create a Tenancy_details.
     * @example
     * // Update or create a Tenancy_details
     * const tenancy_details = await prisma.tenancy_details.upsert({
     *   create: {
     *     // ... data to create a Tenancy_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenancy_details we want to update
     *   }
     * })
     */
    upsert<T extends tenancy_detailsUpsertArgs>(args: SelectSubset<T, tenancy_detailsUpsertArgs<ExtArgs>>): Prisma__tenancy_detailsClient<$Result.GetResult<Prisma.$tenancy_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenancy_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenancy_detailsCountArgs} args - Arguments to filter Tenancy_details to count.
     * @example
     * // Count the number of Tenancy_details
     * const count = await prisma.tenancy_details.count({
     *   where: {
     *     // ... the filter for the Tenancy_details we want to count
     *   }
     * })
    **/
    count<T extends tenancy_detailsCountArgs>(
      args?: Subset<T, tenancy_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tenancy_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenancy_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tenancy_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tenancy_detailsAggregateArgs>(args: Subset<T, Tenancy_detailsAggregateArgs>): Prisma.PrismaPromise<GetTenancy_detailsAggregateType<T>>

    /**
     * Group by Tenancy_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenancy_detailsGroupByArgs} args - Group by arguments.
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
      T extends tenancy_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tenancy_detailsGroupByArgs['orderBy'] }
        : { orderBy?: tenancy_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tenancy_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenancy_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tenancy_details model
   */
  readonly fields: tenancy_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tenancy_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tenancy_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the tenancy_details model
   */
  interface tenancy_detailsFieldRefs {
    readonly tenancy_id: FieldRef<"tenancy_details", 'String'>
    readonly tenancy_name: FieldRef<"tenancy_details", 'String'>
    readonly home_region: FieldRef<"tenancy_details", 'String'>
    readonly service_name: FieldRef<"tenancy_details", 'String'>
    readonly currency: FieldRef<"tenancy_details", 'String'>
    readonly time_start: FieldRef<"tenancy_details", 'DateTime'>
    readonly time_end: FieldRef<"tenancy_details", 'DateTime'>
    readonly status: FieldRef<"tenancy_details", 'String'>
    readonly total_value: FieldRef<"tenancy_details", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * tenancy_details findUnique
   */
  export type tenancy_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * Filter, which tenancy_details to fetch.
     */
    where: tenancy_detailsWhereUniqueInput
  }

  /**
   * tenancy_details findUniqueOrThrow
   */
  export type tenancy_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * Filter, which tenancy_details to fetch.
     */
    where: tenancy_detailsWhereUniqueInput
  }

  /**
   * tenancy_details findFirst
   */
  export type tenancy_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * Filter, which tenancy_details to fetch.
     */
    where?: tenancy_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenancy_details to fetch.
     */
    orderBy?: tenancy_detailsOrderByWithRelationInput | tenancy_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenancy_details.
     */
    cursor?: tenancy_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenancy_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenancy_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenancy_details.
     */
    distinct?: Tenancy_detailsScalarFieldEnum | Tenancy_detailsScalarFieldEnum[]
  }

  /**
   * tenancy_details findFirstOrThrow
   */
  export type tenancy_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * Filter, which tenancy_details to fetch.
     */
    where?: tenancy_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenancy_details to fetch.
     */
    orderBy?: tenancy_detailsOrderByWithRelationInput | tenancy_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenancy_details.
     */
    cursor?: tenancy_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenancy_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenancy_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenancy_details.
     */
    distinct?: Tenancy_detailsScalarFieldEnum | Tenancy_detailsScalarFieldEnum[]
  }

  /**
   * tenancy_details findMany
   */
  export type tenancy_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * Filter, which tenancy_details to fetch.
     */
    where?: tenancy_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenancy_details to fetch.
     */
    orderBy?: tenancy_detailsOrderByWithRelationInput | tenancy_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tenancy_details.
     */
    cursor?: tenancy_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenancy_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenancy_details.
     */
    skip?: number
    distinct?: Tenancy_detailsScalarFieldEnum | Tenancy_detailsScalarFieldEnum[]
  }

  /**
   * tenancy_details create
   */
  export type tenancy_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * The data needed to create a tenancy_details.
     */
    data: XOR<tenancy_detailsCreateInput, tenancy_detailsUncheckedCreateInput>
  }

  /**
   * tenancy_details createMany
   */
  export type tenancy_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tenancy_details.
     */
    data: tenancy_detailsCreateManyInput | tenancy_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tenancy_details update
   */
  export type tenancy_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * The data needed to update a tenancy_details.
     */
    data: XOR<tenancy_detailsUpdateInput, tenancy_detailsUncheckedUpdateInput>
    /**
     * Choose, which tenancy_details to update.
     */
    where: tenancy_detailsWhereUniqueInput
  }

  /**
   * tenancy_details updateMany
   */
  export type tenancy_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tenancy_details.
     */
    data: XOR<tenancy_detailsUpdateManyMutationInput, tenancy_detailsUncheckedUpdateManyInput>
    /**
     * Filter which tenancy_details to update
     */
    where?: tenancy_detailsWhereInput
    /**
     * Limit how many tenancy_details to update.
     */
    limit?: number
  }

  /**
   * tenancy_details upsert
   */
  export type tenancy_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * The filter to search for the tenancy_details to update in case it exists.
     */
    where: tenancy_detailsWhereUniqueInput
    /**
     * In case the tenancy_details found by the `where` argument doesn't exist, create a new tenancy_details with this data.
     */
    create: XOR<tenancy_detailsCreateInput, tenancy_detailsUncheckedCreateInput>
    /**
     * In case the tenancy_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tenancy_detailsUpdateInput, tenancy_detailsUncheckedUpdateInput>
  }

  /**
   * tenancy_details delete
   */
  export type tenancy_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
    /**
     * Filter which tenancy_details to delete.
     */
    where: tenancy_detailsWhereUniqueInput
  }

  /**
   * tenancy_details deleteMany
   */
  export type tenancy_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenancy_details to delete
     */
    where?: tenancy_detailsWhereInput
    /**
     * Limit how many tenancy_details to delete.
     */
    limit?: number
  }

  /**
   * tenancy_details without action
   */
  export type tenancy_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenancy_details
     */
    select?: tenancy_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenancy_details
     */
    omit?: tenancy_detailsOmit<ExtArgs> | null
  }


  /**
   * Model CustoDiarioTotal
   */

  export type AggregateCustoDiarioTotal = {
    _count: CustoDiarioTotalCountAggregateOutputType | null
    _avg: CustoDiarioTotalAvgAggregateOutputType | null
    _sum: CustoDiarioTotalSumAggregateOutputType | null
    _min: CustoDiarioTotalMinAggregateOutputType | null
    _max: CustoDiarioTotalMaxAggregateOutputType | null
  }

  export type CustoDiarioTotalAvgAggregateOutputType = {
    cost_dia: number | null
    usage_dia: number | null
  }

  export type CustoDiarioTotalSumAggregateOutputType = {
    cost_dia: number | null
    usage_dia: number | null
  }

  export type CustoDiarioTotalMinAggregateOutputType = {
    tenancy_name: string | null
    tenant_id: string | null
    cost_dia: number | null
    currency: string | null
    usage_dia: number | null
    time_started: Date | null
    time_ended: Date | null
  }

  export type CustoDiarioTotalMaxAggregateOutputType = {
    tenancy_name: string | null
    tenant_id: string | null
    cost_dia: number | null
    currency: string | null
    usage_dia: number | null
    time_started: Date | null
    time_ended: Date | null
  }

  export type CustoDiarioTotalCountAggregateOutputType = {
    tenancy_name: number
    tenant_id: number
    cost_dia: number
    currency: number
    usage_dia: number
    time_started: number
    time_ended: number
    _all: number
  }


  export type CustoDiarioTotalAvgAggregateInputType = {
    cost_dia?: true
    usage_dia?: true
  }

  export type CustoDiarioTotalSumAggregateInputType = {
    cost_dia?: true
    usage_dia?: true
  }

  export type CustoDiarioTotalMinAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    cost_dia?: true
    currency?: true
    usage_dia?: true
    time_started?: true
    time_ended?: true
  }

  export type CustoDiarioTotalMaxAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    cost_dia?: true
    currency?: true
    usage_dia?: true
    time_started?: true
    time_ended?: true
  }

  export type CustoDiarioTotalCountAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    cost_dia?: true
    currency?: true
    usage_dia?: true
    time_started?: true
    time_ended?: true
    _all?: true
  }

  export type CustoDiarioTotalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoDiarioTotal to aggregate.
     */
    where?: CustoDiarioTotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoDiarioTotals to fetch.
     */
    orderBy?: CustoDiarioTotalOrderByWithRelationInput | CustoDiarioTotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustoDiarioTotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoDiarioTotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoDiarioTotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustoDiarioTotals
    **/
    _count?: true | CustoDiarioTotalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustoDiarioTotalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustoDiarioTotalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustoDiarioTotalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustoDiarioTotalMaxAggregateInputType
  }

  export type GetCustoDiarioTotalAggregateType<T extends CustoDiarioTotalAggregateArgs> = {
        [P in keyof T & keyof AggregateCustoDiarioTotal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustoDiarioTotal[P]>
      : GetScalarType<T[P], AggregateCustoDiarioTotal[P]>
  }




  export type CustoDiarioTotalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustoDiarioTotalWhereInput
    orderBy?: CustoDiarioTotalOrderByWithAggregationInput | CustoDiarioTotalOrderByWithAggregationInput[]
    by: CustoDiarioTotalScalarFieldEnum[] | CustoDiarioTotalScalarFieldEnum
    having?: CustoDiarioTotalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustoDiarioTotalCountAggregateInputType | true
    _avg?: CustoDiarioTotalAvgAggregateInputType
    _sum?: CustoDiarioTotalSumAggregateInputType
    _min?: CustoDiarioTotalMinAggregateInputType
    _max?: CustoDiarioTotalMaxAggregateInputType
  }

  export type CustoDiarioTotalGroupByOutputType = {
    tenancy_name: string | null
    tenant_id: string
    cost_dia: number | null
    currency: string | null
    usage_dia: number | null
    time_started: Date
    time_ended: Date | null
    _count: CustoDiarioTotalCountAggregateOutputType | null
    _avg: CustoDiarioTotalAvgAggregateOutputType | null
    _sum: CustoDiarioTotalSumAggregateOutputType | null
    _min: CustoDiarioTotalMinAggregateOutputType | null
    _max: CustoDiarioTotalMaxAggregateOutputType | null
  }

  type GetCustoDiarioTotalGroupByPayload<T extends CustoDiarioTotalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustoDiarioTotalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustoDiarioTotalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustoDiarioTotalGroupByOutputType[P]>
            : GetScalarType<T[P], CustoDiarioTotalGroupByOutputType[P]>
        }
      >
    >


  export type CustoDiarioTotalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenant_id?: boolean
    cost_dia?: boolean
    currency?: boolean
    usage_dia?: boolean
    time_started?: boolean
    time_ended?: boolean
  }, ExtArgs["result"]["custoDiarioTotal"]>



  export type CustoDiarioTotalSelectScalar = {
    tenancy_name?: boolean
    tenant_id?: boolean
    cost_dia?: boolean
    currency?: boolean
    usage_dia?: boolean
    time_started?: boolean
    time_ended?: boolean
  }

  export type CustoDiarioTotalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenant_id" | "cost_dia" | "currency" | "usage_dia" | "time_started" | "time_ended", ExtArgs["result"]["custoDiarioTotal"]>

  export type $CustoDiarioTotalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustoDiarioTotal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string | null
      tenant_id: string
      cost_dia: number | null
      currency: string | null
      usage_dia: number | null
      time_started: Date
      time_ended: Date | null
    }, ExtArgs["result"]["custoDiarioTotal"]>
    composites: {}
  }

  type CustoDiarioTotalGetPayload<S extends boolean | null | undefined | CustoDiarioTotalDefaultArgs> = $Result.GetResult<Prisma.$CustoDiarioTotalPayload, S>

  type CustoDiarioTotalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustoDiarioTotalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustoDiarioTotalCountAggregateInputType | true
    }

  export interface CustoDiarioTotalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustoDiarioTotal'], meta: { name: 'CustoDiarioTotal' } }
    /**
     * Find zero or one CustoDiarioTotal that matches the filter.
     * @param {CustoDiarioTotalFindUniqueArgs} args - Arguments to find a CustoDiarioTotal
     * @example
     * // Get one CustoDiarioTotal
     * const custoDiarioTotal = await prisma.custoDiarioTotal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustoDiarioTotalFindUniqueArgs>(args: SelectSubset<T, CustoDiarioTotalFindUniqueArgs<ExtArgs>>): Prisma__CustoDiarioTotalClient<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustoDiarioTotal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustoDiarioTotalFindUniqueOrThrowArgs} args - Arguments to find a CustoDiarioTotal
     * @example
     * // Get one CustoDiarioTotal
     * const custoDiarioTotal = await prisma.custoDiarioTotal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustoDiarioTotalFindUniqueOrThrowArgs>(args: SelectSubset<T, CustoDiarioTotalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustoDiarioTotalClient<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoDiarioTotal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoDiarioTotalFindFirstArgs} args - Arguments to find a CustoDiarioTotal
     * @example
     * // Get one CustoDiarioTotal
     * const custoDiarioTotal = await prisma.custoDiarioTotal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustoDiarioTotalFindFirstArgs>(args?: SelectSubset<T, CustoDiarioTotalFindFirstArgs<ExtArgs>>): Prisma__CustoDiarioTotalClient<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoDiarioTotal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoDiarioTotalFindFirstOrThrowArgs} args - Arguments to find a CustoDiarioTotal
     * @example
     * // Get one CustoDiarioTotal
     * const custoDiarioTotal = await prisma.custoDiarioTotal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustoDiarioTotalFindFirstOrThrowArgs>(args?: SelectSubset<T, CustoDiarioTotalFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustoDiarioTotalClient<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustoDiarioTotals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoDiarioTotalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustoDiarioTotals
     * const custoDiarioTotals = await prisma.custoDiarioTotal.findMany()
     * 
     * // Get first 10 CustoDiarioTotals
     * const custoDiarioTotals = await prisma.custoDiarioTotal.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const custoDiarioTotalWithTenancy_nameOnly = await prisma.custoDiarioTotal.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends CustoDiarioTotalFindManyArgs>(args?: SelectSubset<T, CustoDiarioTotalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustoDiarioTotal.
     * @param {CustoDiarioTotalCreateArgs} args - Arguments to create a CustoDiarioTotal.
     * @example
     * // Create one CustoDiarioTotal
     * const CustoDiarioTotal = await prisma.custoDiarioTotal.create({
     *   data: {
     *     // ... data to create a CustoDiarioTotal
     *   }
     * })
     * 
     */
    create<T extends CustoDiarioTotalCreateArgs>(args: SelectSubset<T, CustoDiarioTotalCreateArgs<ExtArgs>>): Prisma__CustoDiarioTotalClient<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustoDiarioTotals.
     * @param {CustoDiarioTotalCreateManyArgs} args - Arguments to create many CustoDiarioTotals.
     * @example
     * // Create many CustoDiarioTotals
     * const custoDiarioTotal = await prisma.custoDiarioTotal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustoDiarioTotalCreateManyArgs>(args?: SelectSubset<T, CustoDiarioTotalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustoDiarioTotal.
     * @param {CustoDiarioTotalDeleteArgs} args - Arguments to delete one CustoDiarioTotal.
     * @example
     * // Delete one CustoDiarioTotal
     * const CustoDiarioTotal = await prisma.custoDiarioTotal.delete({
     *   where: {
     *     // ... filter to delete one CustoDiarioTotal
     *   }
     * })
     * 
     */
    delete<T extends CustoDiarioTotalDeleteArgs>(args: SelectSubset<T, CustoDiarioTotalDeleteArgs<ExtArgs>>): Prisma__CustoDiarioTotalClient<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustoDiarioTotal.
     * @param {CustoDiarioTotalUpdateArgs} args - Arguments to update one CustoDiarioTotal.
     * @example
     * // Update one CustoDiarioTotal
     * const custoDiarioTotal = await prisma.custoDiarioTotal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustoDiarioTotalUpdateArgs>(args: SelectSubset<T, CustoDiarioTotalUpdateArgs<ExtArgs>>): Prisma__CustoDiarioTotalClient<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustoDiarioTotals.
     * @param {CustoDiarioTotalDeleteManyArgs} args - Arguments to filter CustoDiarioTotals to delete.
     * @example
     * // Delete a few CustoDiarioTotals
     * const { count } = await prisma.custoDiarioTotal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustoDiarioTotalDeleteManyArgs>(args?: SelectSubset<T, CustoDiarioTotalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustoDiarioTotals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoDiarioTotalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustoDiarioTotals
     * const custoDiarioTotal = await prisma.custoDiarioTotal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustoDiarioTotalUpdateManyArgs>(args: SelectSubset<T, CustoDiarioTotalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustoDiarioTotal.
     * @param {CustoDiarioTotalUpsertArgs} args - Arguments to update or create a CustoDiarioTotal.
     * @example
     * // Update or create a CustoDiarioTotal
     * const custoDiarioTotal = await prisma.custoDiarioTotal.upsert({
     *   create: {
     *     // ... data to create a CustoDiarioTotal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustoDiarioTotal we want to update
     *   }
     * })
     */
    upsert<T extends CustoDiarioTotalUpsertArgs>(args: SelectSubset<T, CustoDiarioTotalUpsertArgs<ExtArgs>>): Prisma__CustoDiarioTotalClient<$Result.GetResult<Prisma.$CustoDiarioTotalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustoDiarioTotals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoDiarioTotalCountArgs} args - Arguments to filter CustoDiarioTotals to count.
     * @example
     * // Count the number of CustoDiarioTotals
     * const count = await prisma.custoDiarioTotal.count({
     *   where: {
     *     // ... the filter for the CustoDiarioTotals we want to count
     *   }
     * })
    **/
    count<T extends CustoDiarioTotalCountArgs>(
      args?: Subset<T, CustoDiarioTotalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustoDiarioTotalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustoDiarioTotal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoDiarioTotalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustoDiarioTotalAggregateArgs>(args: Subset<T, CustoDiarioTotalAggregateArgs>): Prisma.PrismaPromise<GetCustoDiarioTotalAggregateType<T>>

    /**
     * Group by CustoDiarioTotal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoDiarioTotalGroupByArgs} args - Group by arguments.
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
      T extends CustoDiarioTotalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustoDiarioTotalGroupByArgs['orderBy'] }
        : { orderBy?: CustoDiarioTotalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustoDiarioTotalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustoDiarioTotalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustoDiarioTotal model
   */
  readonly fields: CustoDiarioTotalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustoDiarioTotal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustoDiarioTotalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CustoDiarioTotal model
   */
  interface CustoDiarioTotalFieldRefs {
    readonly tenancy_name: FieldRef<"CustoDiarioTotal", 'String'>
    readonly tenant_id: FieldRef<"CustoDiarioTotal", 'String'>
    readonly cost_dia: FieldRef<"CustoDiarioTotal", 'Float'>
    readonly currency: FieldRef<"CustoDiarioTotal", 'String'>
    readonly usage_dia: FieldRef<"CustoDiarioTotal", 'Float'>
    readonly time_started: FieldRef<"CustoDiarioTotal", 'DateTime'>
    readonly time_ended: FieldRef<"CustoDiarioTotal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustoDiarioTotal findUnique
   */
  export type CustoDiarioTotalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoDiarioTotal to fetch.
     */
    where: CustoDiarioTotalWhereUniqueInput
  }

  /**
   * CustoDiarioTotal findUniqueOrThrow
   */
  export type CustoDiarioTotalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoDiarioTotal to fetch.
     */
    where: CustoDiarioTotalWhereUniqueInput
  }

  /**
   * CustoDiarioTotal findFirst
   */
  export type CustoDiarioTotalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoDiarioTotal to fetch.
     */
    where?: CustoDiarioTotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoDiarioTotals to fetch.
     */
    orderBy?: CustoDiarioTotalOrderByWithRelationInput | CustoDiarioTotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoDiarioTotals.
     */
    cursor?: CustoDiarioTotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoDiarioTotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoDiarioTotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoDiarioTotals.
     */
    distinct?: CustoDiarioTotalScalarFieldEnum | CustoDiarioTotalScalarFieldEnum[]
  }

  /**
   * CustoDiarioTotal findFirstOrThrow
   */
  export type CustoDiarioTotalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoDiarioTotal to fetch.
     */
    where?: CustoDiarioTotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoDiarioTotals to fetch.
     */
    orderBy?: CustoDiarioTotalOrderByWithRelationInput | CustoDiarioTotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoDiarioTotals.
     */
    cursor?: CustoDiarioTotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoDiarioTotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoDiarioTotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoDiarioTotals.
     */
    distinct?: CustoDiarioTotalScalarFieldEnum | CustoDiarioTotalScalarFieldEnum[]
  }

  /**
   * CustoDiarioTotal findMany
   */
  export type CustoDiarioTotalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoDiarioTotals to fetch.
     */
    where?: CustoDiarioTotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoDiarioTotals to fetch.
     */
    orderBy?: CustoDiarioTotalOrderByWithRelationInput | CustoDiarioTotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustoDiarioTotals.
     */
    cursor?: CustoDiarioTotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoDiarioTotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoDiarioTotals.
     */
    skip?: number
    distinct?: CustoDiarioTotalScalarFieldEnum | CustoDiarioTotalScalarFieldEnum[]
  }

  /**
   * CustoDiarioTotal create
   */
  export type CustoDiarioTotalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * The data needed to create a CustoDiarioTotal.
     */
    data?: XOR<CustoDiarioTotalCreateInput, CustoDiarioTotalUncheckedCreateInput>
  }

  /**
   * CustoDiarioTotal createMany
   */
  export type CustoDiarioTotalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustoDiarioTotals.
     */
    data: CustoDiarioTotalCreateManyInput | CustoDiarioTotalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustoDiarioTotal update
   */
  export type CustoDiarioTotalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * The data needed to update a CustoDiarioTotal.
     */
    data: XOR<CustoDiarioTotalUpdateInput, CustoDiarioTotalUncheckedUpdateInput>
    /**
     * Choose, which CustoDiarioTotal to update.
     */
    where: CustoDiarioTotalWhereUniqueInput
  }

  /**
   * CustoDiarioTotal updateMany
   */
  export type CustoDiarioTotalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustoDiarioTotals.
     */
    data: XOR<CustoDiarioTotalUpdateManyMutationInput, CustoDiarioTotalUncheckedUpdateManyInput>
    /**
     * Filter which CustoDiarioTotals to update
     */
    where?: CustoDiarioTotalWhereInput
    /**
     * Limit how many CustoDiarioTotals to update.
     */
    limit?: number
  }

  /**
   * CustoDiarioTotal upsert
   */
  export type CustoDiarioTotalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * The filter to search for the CustoDiarioTotal to update in case it exists.
     */
    where: CustoDiarioTotalWhereUniqueInput
    /**
     * In case the CustoDiarioTotal found by the `where` argument doesn't exist, create a new CustoDiarioTotal with this data.
     */
    create: XOR<CustoDiarioTotalCreateInput, CustoDiarioTotalUncheckedCreateInput>
    /**
     * In case the CustoDiarioTotal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustoDiarioTotalUpdateInput, CustoDiarioTotalUncheckedUpdateInput>
  }

  /**
   * CustoDiarioTotal delete
   */
  export type CustoDiarioTotalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
    /**
     * Filter which CustoDiarioTotal to delete.
     */
    where: CustoDiarioTotalWhereUniqueInput
  }

  /**
   * CustoDiarioTotal deleteMany
   */
  export type CustoDiarioTotalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoDiarioTotals to delete
     */
    where?: CustoDiarioTotalWhereInput
    /**
     * Limit how many CustoDiarioTotals to delete.
     */
    limit?: number
  }

  /**
   * CustoDiarioTotal without action
   */
  export type CustoDiarioTotalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoDiarioTotal
     */
    select?: CustoDiarioTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoDiarioTotal
     */
    omit?: CustoDiarioTotalOmit<ExtArgs> | null
  }


  /**
   * Model CustoMensalTotal
   */

  export type AggregateCustoMensalTotal = {
    _count: CustoMensalTotalCountAggregateOutputType | null
    _avg: CustoMensalTotalAvgAggregateOutputType | null
    _sum: CustoMensalTotalSumAggregateOutputType | null
    _min: CustoMensalTotalMinAggregateOutputType | null
    _max: CustoMensalTotalMaxAggregateOutputType | null
  }

  export type CustoMensalTotalAvgAggregateOutputType = {
    cost_mes: number | null
    usage_mes: number | null
  }

  export type CustoMensalTotalSumAggregateOutputType = {
    cost_mes: number | null
    usage_mes: number | null
  }

  export type CustoMensalTotalMinAggregateOutputType = {
    tenancy_name: string | null
    tenant_id: string | null
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date | null
    time_ended: Date | null
  }

  export type CustoMensalTotalMaxAggregateOutputType = {
    tenancy_name: string | null
    tenant_id: string | null
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date | null
    time_ended: Date | null
  }

  export type CustoMensalTotalCountAggregateOutputType = {
    tenancy_name: number
    tenant_id: number
    cost_mes: number
    currency: number
    usage_mes: number
    time_started: number
    time_ended: number
    _all: number
  }


  export type CustoMensalTotalAvgAggregateInputType = {
    cost_mes?: true
    usage_mes?: true
  }

  export type CustoMensalTotalSumAggregateInputType = {
    cost_mes?: true
    usage_mes?: true
  }

  export type CustoMensalTotalMinAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
  }

  export type CustoMensalTotalMaxAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
  }

  export type CustoMensalTotalCountAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
    _all?: true
  }

  export type CustoMensalTotalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoMensalTotal to aggregate.
     */
    where?: CustoMensalTotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoMensalTotals to fetch.
     */
    orderBy?: CustoMensalTotalOrderByWithRelationInput | CustoMensalTotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustoMensalTotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoMensalTotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoMensalTotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustoMensalTotals
    **/
    _count?: true | CustoMensalTotalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustoMensalTotalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustoMensalTotalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustoMensalTotalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustoMensalTotalMaxAggregateInputType
  }

  export type GetCustoMensalTotalAggregateType<T extends CustoMensalTotalAggregateArgs> = {
        [P in keyof T & keyof AggregateCustoMensalTotal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustoMensalTotal[P]>
      : GetScalarType<T[P], AggregateCustoMensalTotal[P]>
  }




  export type CustoMensalTotalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustoMensalTotalWhereInput
    orderBy?: CustoMensalTotalOrderByWithAggregationInput | CustoMensalTotalOrderByWithAggregationInput[]
    by: CustoMensalTotalScalarFieldEnum[] | CustoMensalTotalScalarFieldEnum
    having?: CustoMensalTotalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustoMensalTotalCountAggregateInputType | true
    _avg?: CustoMensalTotalAvgAggregateInputType
    _sum?: CustoMensalTotalSumAggregateInputType
    _min?: CustoMensalTotalMinAggregateInputType
    _max?: CustoMensalTotalMaxAggregateInputType
  }

  export type CustoMensalTotalGroupByOutputType = {
    tenancy_name: string | null
    tenant_id: string
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date
    time_ended: Date | null
    _count: CustoMensalTotalCountAggregateOutputType | null
    _avg: CustoMensalTotalAvgAggregateOutputType | null
    _sum: CustoMensalTotalSumAggregateOutputType | null
    _min: CustoMensalTotalMinAggregateOutputType | null
    _max: CustoMensalTotalMaxAggregateOutputType | null
  }

  type GetCustoMensalTotalGroupByPayload<T extends CustoMensalTotalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustoMensalTotalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustoMensalTotalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustoMensalTotalGroupByOutputType[P]>
            : GetScalarType<T[P], CustoMensalTotalGroupByOutputType[P]>
        }
      >
    >


  export type CustoMensalTotalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenant_id?: boolean
    cost_mes?: boolean
    currency?: boolean
    usage_mes?: boolean
    time_started?: boolean
    time_ended?: boolean
  }, ExtArgs["result"]["custoMensalTotal"]>



  export type CustoMensalTotalSelectScalar = {
    tenancy_name?: boolean
    tenant_id?: boolean
    cost_mes?: boolean
    currency?: boolean
    usage_mes?: boolean
    time_started?: boolean
    time_ended?: boolean
  }

  export type CustoMensalTotalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenant_id" | "cost_mes" | "currency" | "usage_mes" | "time_started" | "time_ended", ExtArgs["result"]["custoMensalTotal"]>

  export type $CustoMensalTotalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustoMensalTotal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string | null
      tenant_id: string
      cost_mes: number | null
      currency: string | null
      usage_mes: number | null
      time_started: Date
      time_ended: Date | null
    }, ExtArgs["result"]["custoMensalTotal"]>
    composites: {}
  }

  type CustoMensalTotalGetPayload<S extends boolean | null | undefined | CustoMensalTotalDefaultArgs> = $Result.GetResult<Prisma.$CustoMensalTotalPayload, S>

  type CustoMensalTotalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustoMensalTotalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustoMensalTotalCountAggregateInputType | true
    }

  export interface CustoMensalTotalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustoMensalTotal'], meta: { name: 'CustoMensalTotal' } }
    /**
     * Find zero or one CustoMensalTotal that matches the filter.
     * @param {CustoMensalTotalFindUniqueArgs} args - Arguments to find a CustoMensalTotal
     * @example
     * // Get one CustoMensalTotal
     * const custoMensalTotal = await prisma.custoMensalTotal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustoMensalTotalFindUniqueArgs>(args: SelectSubset<T, CustoMensalTotalFindUniqueArgs<ExtArgs>>): Prisma__CustoMensalTotalClient<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustoMensalTotal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustoMensalTotalFindUniqueOrThrowArgs} args - Arguments to find a CustoMensalTotal
     * @example
     * // Get one CustoMensalTotal
     * const custoMensalTotal = await prisma.custoMensalTotal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustoMensalTotalFindUniqueOrThrowArgs>(args: SelectSubset<T, CustoMensalTotalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustoMensalTotalClient<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoMensalTotal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoMensalTotalFindFirstArgs} args - Arguments to find a CustoMensalTotal
     * @example
     * // Get one CustoMensalTotal
     * const custoMensalTotal = await prisma.custoMensalTotal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustoMensalTotalFindFirstArgs>(args?: SelectSubset<T, CustoMensalTotalFindFirstArgs<ExtArgs>>): Prisma__CustoMensalTotalClient<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoMensalTotal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoMensalTotalFindFirstOrThrowArgs} args - Arguments to find a CustoMensalTotal
     * @example
     * // Get one CustoMensalTotal
     * const custoMensalTotal = await prisma.custoMensalTotal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustoMensalTotalFindFirstOrThrowArgs>(args?: SelectSubset<T, CustoMensalTotalFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustoMensalTotalClient<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustoMensalTotals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoMensalTotalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustoMensalTotals
     * const custoMensalTotals = await prisma.custoMensalTotal.findMany()
     * 
     * // Get first 10 CustoMensalTotals
     * const custoMensalTotals = await prisma.custoMensalTotal.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const custoMensalTotalWithTenancy_nameOnly = await prisma.custoMensalTotal.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends CustoMensalTotalFindManyArgs>(args?: SelectSubset<T, CustoMensalTotalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustoMensalTotal.
     * @param {CustoMensalTotalCreateArgs} args - Arguments to create a CustoMensalTotal.
     * @example
     * // Create one CustoMensalTotal
     * const CustoMensalTotal = await prisma.custoMensalTotal.create({
     *   data: {
     *     // ... data to create a CustoMensalTotal
     *   }
     * })
     * 
     */
    create<T extends CustoMensalTotalCreateArgs>(args: SelectSubset<T, CustoMensalTotalCreateArgs<ExtArgs>>): Prisma__CustoMensalTotalClient<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustoMensalTotals.
     * @param {CustoMensalTotalCreateManyArgs} args - Arguments to create many CustoMensalTotals.
     * @example
     * // Create many CustoMensalTotals
     * const custoMensalTotal = await prisma.custoMensalTotal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustoMensalTotalCreateManyArgs>(args?: SelectSubset<T, CustoMensalTotalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustoMensalTotal.
     * @param {CustoMensalTotalDeleteArgs} args - Arguments to delete one CustoMensalTotal.
     * @example
     * // Delete one CustoMensalTotal
     * const CustoMensalTotal = await prisma.custoMensalTotal.delete({
     *   where: {
     *     // ... filter to delete one CustoMensalTotal
     *   }
     * })
     * 
     */
    delete<T extends CustoMensalTotalDeleteArgs>(args: SelectSubset<T, CustoMensalTotalDeleteArgs<ExtArgs>>): Prisma__CustoMensalTotalClient<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustoMensalTotal.
     * @param {CustoMensalTotalUpdateArgs} args - Arguments to update one CustoMensalTotal.
     * @example
     * // Update one CustoMensalTotal
     * const custoMensalTotal = await prisma.custoMensalTotal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustoMensalTotalUpdateArgs>(args: SelectSubset<T, CustoMensalTotalUpdateArgs<ExtArgs>>): Prisma__CustoMensalTotalClient<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustoMensalTotals.
     * @param {CustoMensalTotalDeleteManyArgs} args - Arguments to filter CustoMensalTotals to delete.
     * @example
     * // Delete a few CustoMensalTotals
     * const { count } = await prisma.custoMensalTotal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustoMensalTotalDeleteManyArgs>(args?: SelectSubset<T, CustoMensalTotalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustoMensalTotals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoMensalTotalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustoMensalTotals
     * const custoMensalTotal = await prisma.custoMensalTotal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustoMensalTotalUpdateManyArgs>(args: SelectSubset<T, CustoMensalTotalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustoMensalTotal.
     * @param {CustoMensalTotalUpsertArgs} args - Arguments to update or create a CustoMensalTotal.
     * @example
     * // Update or create a CustoMensalTotal
     * const custoMensalTotal = await prisma.custoMensalTotal.upsert({
     *   create: {
     *     // ... data to create a CustoMensalTotal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustoMensalTotal we want to update
     *   }
     * })
     */
    upsert<T extends CustoMensalTotalUpsertArgs>(args: SelectSubset<T, CustoMensalTotalUpsertArgs<ExtArgs>>): Prisma__CustoMensalTotalClient<$Result.GetResult<Prisma.$CustoMensalTotalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustoMensalTotals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoMensalTotalCountArgs} args - Arguments to filter CustoMensalTotals to count.
     * @example
     * // Count the number of CustoMensalTotals
     * const count = await prisma.custoMensalTotal.count({
     *   where: {
     *     // ... the filter for the CustoMensalTotals we want to count
     *   }
     * })
    **/
    count<T extends CustoMensalTotalCountArgs>(
      args?: Subset<T, CustoMensalTotalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustoMensalTotalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustoMensalTotal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoMensalTotalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustoMensalTotalAggregateArgs>(args: Subset<T, CustoMensalTotalAggregateArgs>): Prisma.PrismaPromise<GetCustoMensalTotalAggregateType<T>>

    /**
     * Group by CustoMensalTotal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoMensalTotalGroupByArgs} args - Group by arguments.
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
      T extends CustoMensalTotalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustoMensalTotalGroupByArgs['orderBy'] }
        : { orderBy?: CustoMensalTotalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustoMensalTotalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustoMensalTotalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustoMensalTotal model
   */
  readonly fields: CustoMensalTotalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustoMensalTotal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustoMensalTotalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CustoMensalTotal model
   */
  interface CustoMensalTotalFieldRefs {
    readonly tenancy_name: FieldRef<"CustoMensalTotal", 'String'>
    readonly tenant_id: FieldRef<"CustoMensalTotal", 'String'>
    readonly cost_mes: FieldRef<"CustoMensalTotal", 'Float'>
    readonly currency: FieldRef<"CustoMensalTotal", 'String'>
    readonly usage_mes: FieldRef<"CustoMensalTotal", 'Float'>
    readonly time_started: FieldRef<"CustoMensalTotal", 'DateTime'>
    readonly time_ended: FieldRef<"CustoMensalTotal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustoMensalTotal findUnique
   */
  export type CustoMensalTotalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoMensalTotal to fetch.
     */
    where: CustoMensalTotalWhereUniqueInput
  }

  /**
   * CustoMensalTotal findUniqueOrThrow
   */
  export type CustoMensalTotalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoMensalTotal to fetch.
     */
    where: CustoMensalTotalWhereUniqueInput
  }

  /**
   * CustoMensalTotal findFirst
   */
  export type CustoMensalTotalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoMensalTotal to fetch.
     */
    where?: CustoMensalTotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoMensalTotals to fetch.
     */
    orderBy?: CustoMensalTotalOrderByWithRelationInput | CustoMensalTotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoMensalTotals.
     */
    cursor?: CustoMensalTotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoMensalTotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoMensalTotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoMensalTotals.
     */
    distinct?: CustoMensalTotalScalarFieldEnum | CustoMensalTotalScalarFieldEnum[]
  }

  /**
   * CustoMensalTotal findFirstOrThrow
   */
  export type CustoMensalTotalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoMensalTotal to fetch.
     */
    where?: CustoMensalTotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoMensalTotals to fetch.
     */
    orderBy?: CustoMensalTotalOrderByWithRelationInput | CustoMensalTotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoMensalTotals.
     */
    cursor?: CustoMensalTotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoMensalTotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoMensalTotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoMensalTotals.
     */
    distinct?: CustoMensalTotalScalarFieldEnum | CustoMensalTotalScalarFieldEnum[]
  }

  /**
   * CustoMensalTotal findMany
   */
  export type CustoMensalTotalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * Filter, which CustoMensalTotals to fetch.
     */
    where?: CustoMensalTotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoMensalTotals to fetch.
     */
    orderBy?: CustoMensalTotalOrderByWithRelationInput | CustoMensalTotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustoMensalTotals.
     */
    cursor?: CustoMensalTotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoMensalTotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoMensalTotals.
     */
    skip?: number
    distinct?: CustoMensalTotalScalarFieldEnum | CustoMensalTotalScalarFieldEnum[]
  }

  /**
   * CustoMensalTotal create
   */
  export type CustoMensalTotalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * The data needed to create a CustoMensalTotal.
     */
    data?: XOR<CustoMensalTotalCreateInput, CustoMensalTotalUncheckedCreateInput>
  }

  /**
   * CustoMensalTotal createMany
   */
  export type CustoMensalTotalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustoMensalTotals.
     */
    data: CustoMensalTotalCreateManyInput | CustoMensalTotalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustoMensalTotal update
   */
  export type CustoMensalTotalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * The data needed to update a CustoMensalTotal.
     */
    data: XOR<CustoMensalTotalUpdateInput, CustoMensalTotalUncheckedUpdateInput>
    /**
     * Choose, which CustoMensalTotal to update.
     */
    where: CustoMensalTotalWhereUniqueInput
  }

  /**
   * CustoMensalTotal updateMany
   */
  export type CustoMensalTotalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustoMensalTotals.
     */
    data: XOR<CustoMensalTotalUpdateManyMutationInput, CustoMensalTotalUncheckedUpdateManyInput>
    /**
     * Filter which CustoMensalTotals to update
     */
    where?: CustoMensalTotalWhereInput
    /**
     * Limit how many CustoMensalTotals to update.
     */
    limit?: number
  }

  /**
   * CustoMensalTotal upsert
   */
  export type CustoMensalTotalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * The filter to search for the CustoMensalTotal to update in case it exists.
     */
    where: CustoMensalTotalWhereUniqueInput
    /**
     * In case the CustoMensalTotal found by the `where` argument doesn't exist, create a new CustoMensalTotal with this data.
     */
    create: XOR<CustoMensalTotalCreateInput, CustoMensalTotalUncheckedCreateInput>
    /**
     * In case the CustoMensalTotal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustoMensalTotalUpdateInput, CustoMensalTotalUncheckedUpdateInput>
  }

  /**
   * CustoMensalTotal delete
   */
  export type CustoMensalTotalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
    /**
     * Filter which CustoMensalTotal to delete.
     */
    where: CustoMensalTotalWhereUniqueInput
  }

  /**
   * CustoMensalTotal deleteMany
   */
  export type CustoMensalTotalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoMensalTotals to delete
     */
    where?: CustoMensalTotalWhereInput
    /**
     * Limit how many CustoMensalTotals to delete.
     */
    limit?: number
  }

  /**
   * CustoMensalTotal without action
   */
  export type CustoMensalTotalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoMensalTotal
     */
    select?: CustoMensalTotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoMensalTotal
     */
    omit?: CustoMensalTotalOmit<ExtArgs> | null
  }


  /**
   * Model computeEvents
   */

  export type AggregateComputeEvents = {
    _count: ComputeEventsCountAggregateOutputType | null
    _avg: ComputeEventsAvgAggregateOutputType | null
    _sum: ComputeEventsSumAggregateOutputType | null
    _min: ComputeEventsMinAggregateOutputType | null
    _max: ComputeEventsMaxAggregateOutputType | null
  }

  export type ComputeEventsAvgAggregateOutputType = {
    id: number | null
    ocpus: number | null
    memoryInGbs: number | null
  }

  export type ComputeEventsSumAggregateOutputType = {
    id: number | null
    ocpus: number | null
    memoryInGbs: number | null
  }

  export type ComputeEventsMinAggregateOutputType = {
    id: number | null
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    compartmentId: string | null
    compartmentName: string | null
    eventName: string | null
    message: string | null
    action: string | null
    principalName: string | null
    ipAddress: string | null
    displayName: string | null
    lifecycleState: string | null
    shape: string | null
    ocpus: number | null
    memoryInGbs: number | null
    processorDescription: string | null
    createdBy: string | null
    createdOn: Date | null
    preserveBootVolume: boolean | null
    createdAt: Date | null
    instanceActionType: string | null
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
  }

  export type ComputeEventsMaxAggregateOutputType = {
    id: number | null
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    compartmentId: string | null
    compartmentName: string | null
    eventName: string | null
    message: string | null
    action: string | null
    principalName: string | null
    ipAddress: string | null
    displayName: string | null
    lifecycleState: string | null
    shape: string | null
    ocpus: number | null
    memoryInGbs: number | null
    processorDescription: string | null
    createdBy: string | null
    createdOn: Date | null
    preserveBootVolume: boolean | null
    createdAt: Date | null
    instanceActionType: string | null
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
  }

  export type ComputeEventsCountAggregateOutputType = {
    id: number
    eventType: number
    eventTime: number
    source: number
    opcRequestId: number
    rawEvent: number
    compartmentId: number
    compartmentName: number
    eventName: number
    message: number
    action: number
    principalName: number
    ipAddress: number
    displayName: number
    lifecycleState: number
    shape: number
    ocpus: number
    memoryInGbs: number
    processorDescription: number
    createdBy: number
    createdOn: number
    preserveBootVolume: number
    createdAt: number
    instanceActionType: number
    tenancyName: number
    isCheck: number
    ticket: number
    _all: number
  }


  export type ComputeEventsAvgAggregateInputType = {
    id?: true
    ocpus?: true
    memoryInGbs?: true
  }

  export type ComputeEventsSumAggregateInputType = {
    id?: true
    ocpus?: true
    memoryInGbs?: true
  }

  export type ComputeEventsMinAggregateInputType = {
    id?: true
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    compartmentId?: true
    compartmentName?: true
    eventName?: true
    message?: true
    action?: true
    principalName?: true
    ipAddress?: true
    displayName?: true
    lifecycleState?: true
    shape?: true
    ocpus?: true
    memoryInGbs?: true
    processorDescription?: true
    createdBy?: true
    createdOn?: true
    preserveBootVolume?: true
    createdAt?: true
    instanceActionType?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
  }

  export type ComputeEventsMaxAggregateInputType = {
    id?: true
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    compartmentId?: true
    compartmentName?: true
    eventName?: true
    message?: true
    action?: true
    principalName?: true
    ipAddress?: true
    displayName?: true
    lifecycleState?: true
    shape?: true
    ocpus?: true
    memoryInGbs?: true
    processorDescription?: true
    createdBy?: true
    createdOn?: true
    preserveBootVolume?: true
    createdAt?: true
    instanceActionType?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
  }

  export type ComputeEventsCountAggregateInputType = {
    id?: true
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    compartmentId?: true
    compartmentName?: true
    eventName?: true
    message?: true
    action?: true
    principalName?: true
    ipAddress?: true
    displayName?: true
    lifecycleState?: true
    shape?: true
    ocpus?: true
    memoryInGbs?: true
    processorDescription?: true
    createdBy?: true
    createdOn?: true
    preserveBootVolume?: true
    createdAt?: true
    instanceActionType?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
    _all?: true
  }

  export type ComputeEventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which computeEvents to aggregate.
     */
    where?: computeEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of computeEvents to fetch.
     */
    orderBy?: computeEventsOrderByWithRelationInput | computeEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: computeEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` computeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` computeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned computeEvents
    **/
    _count?: true | ComputeEventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComputeEventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComputeEventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComputeEventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComputeEventsMaxAggregateInputType
  }

  export type GetComputeEventsAggregateType<T extends ComputeEventsAggregateArgs> = {
        [P in keyof T & keyof AggregateComputeEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComputeEvents[P]>
      : GetScalarType<T[P], AggregateComputeEvents[P]>
  }




  export type computeEventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: computeEventsWhereInput
    orderBy?: computeEventsOrderByWithAggregationInput | computeEventsOrderByWithAggregationInput[]
    by: ComputeEventsScalarFieldEnum[] | ComputeEventsScalarFieldEnum
    having?: computeEventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComputeEventsCountAggregateInputType | true
    _avg?: ComputeEventsAvgAggregateInputType
    _sum?: ComputeEventsSumAggregateInputType
    _min?: ComputeEventsMinAggregateInputType
    _max?: ComputeEventsMaxAggregateInputType
  }

  export type ComputeEventsGroupByOutputType = {
    id: number
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    compartmentId: string | null
    compartmentName: string | null
    eventName: string | null
    message: string | null
    action: string | null
    principalName: string | null
    ipAddress: string | null
    displayName: string | null
    lifecycleState: string | null
    shape: string | null
    ocpus: number | null
    memoryInGbs: number | null
    processorDescription: string | null
    createdBy: string | null
    createdOn: Date | null
    preserveBootVolume: boolean | null
    createdAt: Date
    instanceActionType: string | null
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
    _count: ComputeEventsCountAggregateOutputType | null
    _avg: ComputeEventsAvgAggregateOutputType | null
    _sum: ComputeEventsSumAggregateOutputType | null
    _min: ComputeEventsMinAggregateOutputType | null
    _max: ComputeEventsMaxAggregateOutputType | null
  }

  type GetComputeEventsGroupByPayload<T extends computeEventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComputeEventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComputeEventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComputeEventsGroupByOutputType[P]>
            : GetScalarType<T[P], ComputeEventsGroupByOutputType[P]>
        }
      >
    >


  export type computeEventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    eventTime?: boolean
    source?: boolean
    opcRequestId?: boolean
    rawEvent?: boolean
    compartmentId?: boolean
    compartmentName?: boolean
    eventName?: boolean
    message?: boolean
    action?: boolean
    principalName?: boolean
    ipAddress?: boolean
    displayName?: boolean
    lifecycleState?: boolean
    shape?: boolean
    ocpus?: boolean
    memoryInGbs?: boolean
    processorDescription?: boolean
    createdBy?: boolean
    createdOn?: boolean
    preserveBootVolume?: boolean
    createdAt?: boolean
    instanceActionType?: boolean
    tenancyName?: boolean
    isCheck?: boolean
    ticket?: boolean
  }, ExtArgs["result"]["computeEvents"]>



  export type computeEventsSelectScalar = {
    id?: boolean
    eventType?: boolean
    eventTime?: boolean
    source?: boolean
    opcRequestId?: boolean
    rawEvent?: boolean
    compartmentId?: boolean
    compartmentName?: boolean
    eventName?: boolean
    message?: boolean
    action?: boolean
    principalName?: boolean
    ipAddress?: boolean
    displayName?: boolean
    lifecycleState?: boolean
    shape?: boolean
    ocpus?: boolean
    memoryInGbs?: boolean
    processorDescription?: boolean
    createdBy?: boolean
    createdOn?: boolean
    preserveBootVolume?: boolean
    createdAt?: boolean
    instanceActionType?: boolean
    tenancyName?: boolean
    isCheck?: boolean
    ticket?: boolean
  }

  export type computeEventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "eventTime" | "source" | "opcRequestId" | "rawEvent" | "compartmentId" | "compartmentName" | "eventName" | "message" | "action" | "principalName" | "ipAddress" | "displayName" | "lifecycleState" | "shape" | "ocpus" | "memoryInGbs" | "processorDescription" | "createdBy" | "createdOn" | "preserveBootVolume" | "createdAt" | "instanceActionType" | "tenancyName" | "isCheck" | "ticket", ExtArgs["result"]["computeEvents"]>

  export type $computeEventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "computeEvents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventType: string | null
      eventTime: Date | null
      source: string | null
      opcRequestId: string | null
      rawEvent: string | null
      compartmentId: string | null
      compartmentName: string | null
      eventName: string | null
      message: string | null
      action: string | null
      principalName: string | null
      ipAddress: string | null
      displayName: string | null
      lifecycleState: string | null
      shape: string | null
      ocpus: number | null
      memoryInGbs: number | null
      processorDescription: string | null
      createdBy: string | null
      createdOn: Date | null
      preserveBootVolume: boolean | null
      createdAt: Date
      instanceActionType: string | null
      tenancyName: string | null
      isCheck: boolean | null
      ticket: string | null
    }, ExtArgs["result"]["computeEvents"]>
    composites: {}
  }

  type computeEventsGetPayload<S extends boolean | null | undefined | computeEventsDefaultArgs> = $Result.GetResult<Prisma.$computeEventsPayload, S>

  type computeEventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<computeEventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComputeEventsCountAggregateInputType | true
    }

  export interface computeEventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['computeEvents'], meta: { name: 'computeEvents' } }
    /**
     * Find zero or one ComputeEvents that matches the filter.
     * @param {computeEventsFindUniqueArgs} args - Arguments to find a ComputeEvents
     * @example
     * // Get one ComputeEvents
     * const computeEvents = await prisma.computeEvents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends computeEventsFindUniqueArgs>(args: SelectSubset<T, computeEventsFindUniqueArgs<ExtArgs>>): Prisma__computeEventsClient<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComputeEvents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {computeEventsFindUniqueOrThrowArgs} args - Arguments to find a ComputeEvents
     * @example
     * // Get one ComputeEvents
     * const computeEvents = await prisma.computeEvents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends computeEventsFindUniqueOrThrowArgs>(args: SelectSubset<T, computeEventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__computeEventsClient<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComputeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {computeEventsFindFirstArgs} args - Arguments to find a ComputeEvents
     * @example
     * // Get one ComputeEvents
     * const computeEvents = await prisma.computeEvents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends computeEventsFindFirstArgs>(args?: SelectSubset<T, computeEventsFindFirstArgs<ExtArgs>>): Prisma__computeEventsClient<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComputeEvents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {computeEventsFindFirstOrThrowArgs} args - Arguments to find a ComputeEvents
     * @example
     * // Get one ComputeEvents
     * const computeEvents = await prisma.computeEvents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends computeEventsFindFirstOrThrowArgs>(args?: SelectSubset<T, computeEventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__computeEventsClient<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComputeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {computeEventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComputeEvents
     * const computeEvents = await prisma.computeEvents.findMany()
     * 
     * // Get first 10 ComputeEvents
     * const computeEvents = await prisma.computeEvents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const computeEventsWithIdOnly = await prisma.computeEvents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends computeEventsFindManyArgs>(args?: SelectSubset<T, computeEventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComputeEvents.
     * @param {computeEventsCreateArgs} args - Arguments to create a ComputeEvents.
     * @example
     * // Create one ComputeEvents
     * const ComputeEvents = await prisma.computeEvents.create({
     *   data: {
     *     // ... data to create a ComputeEvents
     *   }
     * })
     * 
     */
    create<T extends computeEventsCreateArgs>(args: SelectSubset<T, computeEventsCreateArgs<ExtArgs>>): Prisma__computeEventsClient<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComputeEvents.
     * @param {computeEventsCreateManyArgs} args - Arguments to create many ComputeEvents.
     * @example
     * // Create many ComputeEvents
     * const computeEvents = await prisma.computeEvents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends computeEventsCreateManyArgs>(args?: SelectSubset<T, computeEventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ComputeEvents.
     * @param {computeEventsDeleteArgs} args - Arguments to delete one ComputeEvents.
     * @example
     * // Delete one ComputeEvents
     * const ComputeEvents = await prisma.computeEvents.delete({
     *   where: {
     *     // ... filter to delete one ComputeEvents
     *   }
     * })
     * 
     */
    delete<T extends computeEventsDeleteArgs>(args: SelectSubset<T, computeEventsDeleteArgs<ExtArgs>>): Prisma__computeEventsClient<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComputeEvents.
     * @param {computeEventsUpdateArgs} args - Arguments to update one ComputeEvents.
     * @example
     * // Update one ComputeEvents
     * const computeEvents = await prisma.computeEvents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends computeEventsUpdateArgs>(args: SelectSubset<T, computeEventsUpdateArgs<ExtArgs>>): Prisma__computeEventsClient<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComputeEvents.
     * @param {computeEventsDeleteManyArgs} args - Arguments to filter ComputeEvents to delete.
     * @example
     * // Delete a few ComputeEvents
     * const { count } = await prisma.computeEvents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends computeEventsDeleteManyArgs>(args?: SelectSubset<T, computeEventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComputeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {computeEventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComputeEvents
     * const computeEvents = await prisma.computeEvents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends computeEventsUpdateManyArgs>(args: SelectSubset<T, computeEventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ComputeEvents.
     * @param {computeEventsUpsertArgs} args - Arguments to update or create a ComputeEvents.
     * @example
     * // Update or create a ComputeEvents
     * const computeEvents = await prisma.computeEvents.upsert({
     *   create: {
     *     // ... data to create a ComputeEvents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComputeEvents we want to update
     *   }
     * })
     */
    upsert<T extends computeEventsUpsertArgs>(args: SelectSubset<T, computeEventsUpsertArgs<ExtArgs>>): Prisma__computeEventsClient<$Result.GetResult<Prisma.$computeEventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComputeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {computeEventsCountArgs} args - Arguments to filter ComputeEvents to count.
     * @example
     * // Count the number of ComputeEvents
     * const count = await prisma.computeEvents.count({
     *   where: {
     *     // ... the filter for the ComputeEvents we want to count
     *   }
     * })
    **/
    count<T extends computeEventsCountArgs>(
      args?: Subset<T, computeEventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComputeEventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComputeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputeEventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComputeEventsAggregateArgs>(args: Subset<T, ComputeEventsAggregateArgs>): Prisma.PrismaPromise<GetComputeEventsAggregateType<T>>

    /**
     * Group by ComputeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {computeEventsGroupByArgs} args - Group by arguments.
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
      T extends computeEventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: computeEventsGroupByArgs['orderBy'] }
        : { orderBy?: computeEventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, computeEventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComputeEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the computeEvents model
   */
  readonly fields: computeEventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for computeEvents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__computeEventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the computeEvents model
   */
  interface computeEventsFieldRefs {
    readonly id: FieldRef<"computeEvents", 'Int'>
    readonly eventType: FieldRef<"computeEvents", 'String'>
    readonly eventTime: FieldRef<"computeEvents", 'DateTime'>
    readonly source: FieldRef<"computeEvents", 'String'>
    readonly opcRequestId: FieldRef<"computeEvents", 'String'>
    readonly rawEvent: FieldRef<"computeEvents", 'String'>
    readonly compartmentId: FieldRef<"computeEvents", 'String'>
    readonly compartmentName: FieldRef<"computeEvents", 'String'>
    readonly eventName: FieldRef<"computeEvents", 'String'>
    readonly message: FieldRef<"computeEvents", 'String'>
    readonly action: FieldRef<"computeEvents", 'String'>
    readonly principalName: FieldRef<"computeEvents", 'String'>
    readonly ipAddress: FieldRef<"computeEvents", 'String'>
    readonly displayName: FieldRef<"computeEvents", 'String'>
    readonly lifecycleState: FieldRef<"computeEvents", 'String'>
    readonly shape: FieldRef<"computeEvents", 'String'>
    readonly ocpus: FieldRef<"computeEvents", 'Float'>
    readonly memoryInGbs: FieldRef<"computeEvents", 'Float'>
    readonly processorDescription: FieldRef<"computeEvents", 'String'>
    readonly createdBy: FieldRef<"computeEvents", 'String'>
    readonly createdOn: FieldRef<"computeEvents", 'DateTime'>
    readonly preserveBootVolume: FieldRef<"computeEvents", 'Boolean'>
    readonly createdAt: FieldRef<"computeEvents", 'DateTime'>
    readonly instanceActionType: FieldRef<"computeEvents", 'String'>
    readonly tenancyName: FieldRef<"computeEvents", 'String'>
    readonly isCheck: FieldRef<"computeEvents", 'Boolean'>
    readonly ticket: FieldRef<"computeEvents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * computeEvents findUnique
   */
  export type computeEventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * Filter, which computeEvents to fetch.
     */
    where: computeEventsWhereUniqueInput
  }

  /**
   * computeEvents findUniqueOrThrow
   */
  export type computeEventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * Filter, which computeEvents to fetch.
     */
    where: computeEventsWhereUniqueInput
  }

  /**
   * computeEvents findFirst
   */
  export type computeEventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * Filter, which computeEvents to fetch.
     */
    where?: computeEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of computeEvents to fetch.
     */
    orderBy?: computeEventsOrderByWithRelationInput | computeEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for computeEvents.
     */
    cursor?: computeEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` computeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` computeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of computeEvents.
     */
    distinct?: ComputeEventsScalarFieldEnum | ComputeEventsScalarFieldEnum[]
  }

  /**
   * computeEvents findFirstOrThrow
   */
  export type computeEventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * Filter, which computeEvents to fetch.
     */
    where?: computeEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of computeEvents to fetch.
     */
    orderBy?: computeEventsOrderByWithRelationInput | computeEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for computeEvents.
     */
    cursor?: computeEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` computeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` computeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of computeEvents.
     */
    distinct?: ComputeEventsScalarFieldEnum | ComputeEventsScalarFieldEnum[]
  }

  /**
   * computeEvents findMany
   */
  export type computeEventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * Filter, which computeEvents to fetch.
     */
    where?: computeEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of computeEvents to fetch.
     */
    orderBy?: computeEventsOrderByWithRelationInput | computeEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing computeEvents.
     */
    cursor?: computeEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` computeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` computeEvents.
     */
    skip?: number
    distinct?: ComputeEventsScalarFieldEnum | ComputeEventsScalarFieldEnum[]
  }

  /**
   * computeEvents create
   */
  export type computeEventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * The data needed to create a computeEvents.
     */
    data?: XOR<computeEventsCreateInput, computeEventsUncheckedCreateInput>
  }

  /**
   * computeEvents createMany
   */
  export type computeEventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many computeEvents.
     */
    data: computeEventsCreateManyInput | computeEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * computeEvents update
   */
  export type computeEventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * The data needed to update a computeEvents.
     */
    data: XOR<computeEventsUpdateInput, computeEventsUncheckedUpdateInput>
    /**
     * Choose, which computeEvents to update.
     */
    where: computeEventsWhereUniqueInput
  }

  /**
   * computeEvents updateMany
   */
  export type computeEventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update computeEvents.
     */
    data: XOR<computeEventsUpdateManyMutationInput, computeEventsUncheckedUpdateManyInput>
    /**
     * Filter which computeEvents to update
     */
    where?: computeEventsWhereInput
    /**
     * Limit how many computeEvents to update.
     */
    limit?: number
  }

  /**
   * computeEvents upsert
   */
  export type computeEventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * The filter to search for the computeEvents to update in case it exists.
     */
    where: computeEventsWhereUniqueInput
    /**
     * In case the computeEvents found by the `where` argument doesn't exist, create a new computeEvents with this data.
     */
    create: XOR<computeEventsCreateInput, computeEventsUncheckedCreateInput>
    /**
     * In case the computeEvents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<computeEventsUpdateInput, computeEventsUncheckedUpdateInput>
  }

  /**
   * computeEvents delete
   */
  export type computeEventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
    /**
     * Filter which computeEvents to delete.
     */
    where: computeEventsWhereUniqueInput
  }

  /**
   * computeEvents deleteMany
   */
  export type computeEventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which computeEvents to delete
     */
    where?: computeEventsWhereInput
    /**
     * Limit how many computeEvents to delete.
     */
    limit?: number
  }

  /**
   * computeEvents without action
   */
  export type computeEventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the computeEvents
     */
    select?: computeEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the computeEvents
     */
    omit?: computeEventsOmit<ExtArgs> | null
  }


  /**
   * Model identityEvents
   */

  export type AggregateIdentityEvents = {
    _count: IdentityEventsCountAggregateOutputType | null
    _avg: IdentityEventsAvgAggregateOutputType | null
    _sum: IdentityEventsSumAggregateOutputType | null
    _min: IdentityEventsMinAggregateOutputType | null
    _max: IdentityEventsMaxAggregateOutputType | null
  }

  export type IdentityEventsAvgAggregateOutputType = {
    id: number | null
  }

  export type IdentityEventsSumAggregateOutputType = {
    id: number | null
  }

  export type IdentityEventsMinAggregateOutputType = {
    id: number | null
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    adminResourceName: string | null
    adminResourceType: string | null
    compartmentName: string | null
    principalName: string | null
    action: string | null
    message: string | null
    idcsLastModifiedByName: string | null
    idcsLastModifiedByType: string | null
    policyName: string | null
    statements: string | null
    createdAt: Date | null
    eventName: string | null
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
  }

  export type IdentityEventsMaxAggregateOutputType = {
    id: number | null
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    adminResourceName: string | null
    adminResourceType: string | null
    compartmentName: string | null
    principalName: string | null
    action: string | null
    message: string | null
    idcsLastModifiedByName: string | null
    idcsLastModifiedByType: string | null
    policyName: string | null
    statements: string | null
    createdAt: Date | null
    eventName: string | null
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
  }

  export type IdentityEventsCountAggregateOutputType = {
    id: number
    eventType: number
    eventTime: number
    source: number
    opcRequestId: number
    rawEvent: number
    adminResourceName: number
    adminResourceType: number
    compartmentName: number
    principalName: number
    action: number
    message: number
    idcsLastModifiedByName: number
    idcsLastModifiedByType: number
    policyName: number
    statements: number
    createdAt: number
    eventName: number
    tenancyName: number
    isCheck: number
    ticket: number
    _all: number
  }


  export type IdentityEventsAvgAggregateInputType = {
    id?: true
  }

  export type IdentityEventsSumAggregateInputType = {
    id?: true
  }

  export type IdentityEventsMinAggregateInputType = {
    id?: true
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    adminResourceName?: true
    adminResourceType?: true
    compartmentName?: true
    principalName?: true
    action?: true
    message?: true
    idcsLastModifiedByName?: true
    idcsLastModifiedByType?: true
    policyName?: true
    statements?: true
    createdAt?: true
    eventName?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
  }

  export type IdentityEventsMaxAggregateInputType = {
    id?: true
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    adminResourceName?: true
    adminResourceType?: true
    compartmentName?: true
    principalName?: true
    action?: true
    message?: true
    idcsLastModifiedByName?: true
    idcsLastModifiedByType?: true
    policyName?: true
    statements?: true
    createdAt?: true
    eventName?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
  }

  export type IdentityEventsCountAggregateInputType = {
    id?: true
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    adminResourceName?: true
    adminResourceType?: true
    compartmentName?: true
    principalName?: true
    action?: true
    message?: true
    idcsLastModifiedByName?: true
    idcsLastModifiedByType?: true
    policyName?: true
    statements?: true
    createdAt?: true
    eventName?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
    _all?: true
  }

  export type IdentityEventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which identityEvents to aggregate.
     */
    where?: identityEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of identityEvents to fetch.
     */
    orderBy?: identityEventsOrderByWithRelationInput | identityEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: identityEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` identityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` identityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned identityEvents
    **/
    _count?: true | IdentityEventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdentityEventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdentityEventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentityEventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentityEventsMaxAggregateInputType
  }

  export type GetIdentityEventsAggregateType<T extends IdentityEventsAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentityEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentityEvents[P]>
      : GetScalarType<T[P], AggregateIdentityEvents[P]>
  }




  export type identityEventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: identityEventsWhereInput
    orderBy?: identityEventsOrderByWithAggregationInput | identityEventsOrderByWithAggregationInput[]
    by: IdentityEventsScalarFieldEnum[] | IdentityEventsScalarFieldEnum
    having?: identityEventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentityEventsCountAggregateInputType | true
    _avg?: IdentityEventsAvgAggregateInputType
    _sum?: IdentityEventsSumAggregateInputType
    _min?: IdentityEventsMinAggregateInputType
    _max?: IdentityEventsMaxAggregateInputType
  }

  export type IdentityEventsGroupByOutputType = {
    id: number
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    adminResourceName: string | null
    adminResourceType: string | null
    compartmentName: string | null
    principalName: string | null
    action: string | null
    message: string | null
    idcsLastModifiedByName: string | null
    idcsLastModifiedByType: string | null
    policyName: string | null
    statements: string | null
    createdAt: Date
    eventName: string | null
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
    _count: IdentityEventsCountAggregateOutputType | null
    _avg: IdentityEventsAvgAggregateOutputType | null
    _sum: IdentityEventsSumAggregateOutputType | null
    _min: IdentityEventsMinAggregateOutputType | null
    _max: IdentityEventsMaxAggregateOutputType | null
  }

  type GetIdentityEventsGroupByPayload<T extends identityEventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentityEventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentityEventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentityEventsGroupByOutputType[P]>
            : GetScalarType<T[P], IdentityEventsGroupByOutputType[P]>
        }
      >
    >


  export type identityEventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    eventTime?: boolean
    source?: boolean
    opcRequestId?: boolean
    rawEvent?: boolean
    adminResourceName?: boolean
    adminResourceType?: boolean
    compartmentName?: boolean
    principalName?: boolean
    action?: boolean
    message?: boolean
    idcsLastModifiedByName?: boolean
    idcsLastModifiedByType?: boolean
    policyName?: boolean
    statements?: boolean
    createdAt?: boolean
    eventName?: boolean
    tenancyName?: boolean
    isCheck?: boolean
    ticket?: boolean
  }, ExtArgs["result"]["identityEvents"]>



  export type identityEventsSelectScalar = {
    id?: boolean
    eventType?: boolean
    eventTime?: boolean
    source?: boolean
    opcRequestId?: boolean
    rawEvent?: boolean
    adminResourceName?: boolean
    adminResourceType?: boolean
    compartmentName?: boolean
    principalName?: boolean
    action?: boolean
    message?: boolean
    idcsLastModifiedByName?: boolean
    idcsLastModifiedByType?: boolean
    policyName?: boolean
    statements?: boolean
    createdAt?: boolean
    eventName?: boolean
    tenancyName?: boolean
    isCheck?: boolean
    ticket?: boolean
  }

  export type identityEventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "eventTime" | "source" | "opcRequestId" | "rawEvent" | "adminResourceName" | "adminResourceType" | "compartmentName" | "principalName" | "action" | "message" | "idcsLastModifiedByName" | "idcsLastModifiedByType" | "policyName" | "statements" | "createdAt" | "eventName" | "tenancyName" | "isCheck" | "ticket", ExtArgs["result"]["identityEvents"]>

  export type $identityEventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "identityEvents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventType: string | null
      eventTime: Date | null
      source: string | null
      opcRequestId: string | null
      rawEvent: string | null
      adminResourceName: string | null
      adminResourceType: string | null
      compartmentName: string | null
      principalName: string | null
      action: string | null
      message: string | null
      idcsLastModifiedByName: string | null
      idcsLastModifiedByType: string | null
      policyName: string | null
      statements: string | null
      createdAt: Date
      eventName: string | null
      tenancyName: string | null
      isCheck: boolean | null
      ticket: string | null
    }, ExtArgs["result"]["identityEvents"]>
    composites: {}
  }

  type identityEventsGetPayload<S extends boolean | null | undefined | identityEventsDefaultArgs> = $Result.GetResult<Prisma.$identityEventsPayload, S>

  type identityEventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<identityEventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentityEventsCountAggregateInputType | true
    }

  export interface identityEventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['identityEvents'], meta: { name: 'identityEvents' } }
    /**
     * Find zero or one IdentityEvents that matches the filter.
     * @param {identityEventsFindUniqueArgs} args - Arguments to find a IdentityEvents
     * @example
     * // Get one IdentityEvents
     * const identityEvents = await prisma.identityEvents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends identityEventsFindUniqueArgs>(args: SelectSubset<T, identityEventsFindUniqueArgs<ExtArgs>>): Prisma__identityEventsClient<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdentityEvents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {identityEventsFindUniqueOrThrowArgs} args - Arguments to find a IdentityEvents
     * @example
     * // Get one IdentityEvents
     * const identityEvents = await prisma.identityEvents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends identityEventsFindUniqueOrThrowArgs>(args: SelectSubset<T, identityEventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__identityEventsClient<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {identityEventsFindFirstArgs} args - Arguments to find a IdentityEvents
     * @example
     * // Get one IdentityEvents
     * const identityEvents = await prisma.identityEvents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends identityEventsFindFirstArgs>(args?: SelectSubset<T, identityEventsFindFirstArgs<ExtArgs>>): Prisma__identityEventsClient<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityEvents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {identityEventsFindFirstOrThrowArgs} args - Arguments to find a IdentityEvents
     * @example
     * // Get one IdentityEvents
     * const identityEvents = await prisma.identityEvents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends identityEventsFindFirstOrThrowArgs>(args?: SelectSubset<T, identityEventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__identityEventsClient<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdentityEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {identityEventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdentityEvents
     * const identityEvents = await prisma.identityEvents.findMany()
     * 
     * // Get first 10 IdentityEvents
     * const identityEvents = await prisma.identityEvents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identityEventsWithIdOnly = await prisma.identityEvents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends identityEventsFindManyArgs>(args?: SelectSubset<T, identityEventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdentityEvents.
     * @param {identityEventsCreateArgs} args - Arguments to create a IdentityEvents.
     * @example
     * // Create one IdentityEvents
     * const IdentityEvents = await prisma.identityEvents.create({
     *   data: {
     *     // ... data to create a IdentityEvents
     *   }
     * })
     * 
     */
    create<T extends identityEventsCreateArgs>(args: SelectSubset<T, identityEventsCreateArgs<ExtArgs>>): Prisma__identityEventsClient<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdentityEvents.
     * @param {identityEventsCreateManyArgs} args - Arguments to create many IdentityEvents.
     * @example
     * // Create many IdentityEvents
     * const identityEvents = await prisma.identityEvents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends identityEventsCreateManyArgs>(args?: SelectSubset<T, identityEventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IdentityEvents.
     * @param {identityEventsDeleteArgs} args - Arguments to delete one IdentityEvents.
     * @example
     * // Delete one IdentityEvents
     * const IdentityEvents = await prisma.identityEvents.delete({
     *   where: {
     *     // ... filter to delete one IdentityEvents
     *   }
     * })
     * 
     */
    delete<T extends identityEventsDeleteArgs>(args: SelectSubset<T, identityEventsDeleteArgs<ExtArgs>>): Prisma__identityEventsClient<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdentityEvents.
     * @param {identityEventsUpdateArgs} args - Arguments to update one IdentityEvents.
     * @example
     * // Update one IdentityEvents
     * const identityEvents = await prisma.identityEvents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends identityEventsUpdateArgs>(args: SelectSubset<T, identityEventsUpdateArgs<ExtArgs>>): Prisma__identityEventsClient<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdentityEvents.
     * @param {identityEventsDeleteManyArgs} args - Arguments to filter IdentityEvents to delete.
     * @example
     * // Delete a few IdentityEvents
     * const { count } = await prisma.identityEvents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends identityEventsDeleteManyArgs>(args?: SelectSubset<T, identityEventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {identityEventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdentityEvents
     * const identityEvents = await prisma.identityEvents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends identityEventsUpdateManyArgs>(args: SelectSubset<T, identityEventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IdentityEvents.
     * @param {identityEventsUpsertArgs} args - Arguments to update or create a IdentityEvents.
     * @example
     * // Update or create a IdentityEvents
     * const identityEvents = await prisma.identityEvents.upsert({
     *   create: {
     *     // ... data to create a IdentityEvents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdentityEvents we want to update
     *   }
     * })
     */
    upsert<T extends identityEventsUpsertArgs>(args: SelectSubset<T, identityEventsUpsertArgs<ExtArgs>>): Prisma__identityEventsClient<$Result.GetResult<Prisma.$identityEventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdentityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {identityEventsCountArgs} args - Arguments to filter IdentityEvents to count.
     * @example
     * // Count the number of IdentityEvents
     * const count = await prisma.identityEvents.count({
     *   where: {
     *     // ... the filter for the IdentityEvents we want to count
     *   }
     * })
    **/
    count<T extends identityEventsCountArgs>(
      args?: Subset<T, identityEventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentityEventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdentityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityEventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdentityEventsAggregateArgs>(args: Subset<T, IdentityEventsAggregateArgs>): Prisma.PrismaPromise<GetIdentityEventsAggregateType<T>>

    /**
     * Group by IdentityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {identityEventsGroupByArgs} args - Group by arguments.
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
      T extends identityEventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: identityEventsGroupByArgs['orderBy'] }
        : { orderBy?: identityEventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, identityEventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentityEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the identityEvents model
   */
  readonly fields: identityEventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for identityEvents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__identityEventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the identityEvents model
   */
  interface identityEventsFieldRefs {
    readonly id: FieldRef<"identityEvents", 'Int'>
    readonly eventType: FieldRef<"identityEvents", 'String'>
    readonly eventTime: FieldRef<"identityEvents", 'DateTime'>
    readonly source: FieldRef<"identityEvents", 'String'>
    readonly opcRequestId: FieldRef<"identityEvents", 'String'>
    readonly rawEvent: FieldRef<"identityEvents", 'String'>
    readonly adminResourceName: FieldRef<"identityEvents", 'String'>
    readonly adminResourceType: FieldRef<"identityEvents", 'String'>
    readonly compartmentName: FieldRef<"identityEvents", 'String'>
    readonly principalName: FieldRef<"identityEvents", 'String'>
    readonly action: FieldRef<"identityEvents", 'String'>
    readonly message: FieldRef<"identityEvents", 'String'>
    readonly idcsLastModifiedByName: FieldRef<"identityEvents", 'String'>
    readonly idcsLastModifiedByType: FieldRef<"identityEvents", 'String'>
    readonly policyName: FieldRef<"identityEvents", 'String'>
    readonly statements: FieldRef<"identityEvents", 'String'>
    readonly createdAt: FieldRef<"identityEvents", 'DateTime'>
    readonly eventName: FieldRef<"identityEvents", 'String'>
    readonly tenancyName: FieldRef<"identityEvents", 'String'>
    readonly isCheck: FieldRef<"identityEvents", 'Boolean'>
    readonly ticket: FieldRef<"identityEvents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * identityEvents findUnique
   */
  export type identityEventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * Filter, which identityEvents to fetch.
     */
    where: identityEventsWhereUniqueInput
  }

  /**
   * identityEvents findUniqueOrThrow
   */
  export type identityEventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * Filter, which identityEvents to fetch.
     */
    where: identityEventsWhereUniqueInput
  }

  /**
   * identityEvents findFirst
   */
  export type identityEventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * Filter, which identityEvents to fetch.
     */
    where?: identityEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of identityEvents to fetch.
     */
    orderBy?: identityEventsOrderByWithRelationInput | identityEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for identityEvents.
     */
    cursor?: identityEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` identityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` identityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of identityEvents.
     */
    distinct?: IdentityEventsScalarFieldEnum | IdentityEventsScalarFieldEnum[]
  }

  /**
   * identityEvents findFirstOrThrow
   */
  export type identityEventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * Filter, which identityEvents to fetch.
     */
    where?: identityEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of identityEvents to fetch.
     */
    orderBy?: identityEventsOrderByWithRelationInput | identityEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for identityEvents.
     */
    cursor?: identityEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` identityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` identityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of identityEvents.
     */
    distinct?: IdentityEventsScalarFieldEnum | IdentityEventsScalarFieldEnum[]
  }

  /**
   * identityEvents findMany
   */
  export type identityEventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * Filter, which identityEvents to fetch.
     */
    where?: identityEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of identityEvents to fetch.
     */
    orderBy?: identityEventsOrderByWithRelationInput | identityEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing identityEvents.
     */
    cursor?: identityEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` identityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` identityEvents.
     */
    skip?: number
    distinct?: IdentityEventsScalarFieldEnum | IdentityEventsScalarFieldEnum[]
  }

  /**
   * identityEvents create
   */
  export type identityEventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * The data needed to create a identityEvents.
     */
    data?: XOR<identityEventsCreateInput, identityEventsUncheckedCreateInput>
  }

  /**
   * identityEvents createMany
   */
  export type identityEventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many identityEvents.
     */
    data: identityEventsCreateManyInput | identityEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * identityEvents update
   */
  export type identityEventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * The data needed to update a identityEvents.
     */
    data: XOR<identityEventsUpdateInput, identityEventsUncheckedUpdateInput>
    /**
     * Choose, which identityEvents to update.
     */
    where: identityEventsWhereUniqueInput
  }

  /**
   * identityEvents updateMany
   */
  export type identityEventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update identityEvents.
     */
    data: XOR<identityEventsUpdateManyMutationInput, identityEventsUncheckedUpdateManyInput>
    /**
     * Filter which identityEvents to update
     */
    where?: identityEventsWhereInput
    /**
     * Limit how many identityEvents to update.
     */
    limit?: number
  }

  /**
   * identityEvents upsert
   */
  export type identityEventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * The filter to search for the identityEvents to update in case it exists.
     */
    where: identityEventsWhereUniqueInput
    /**
     * In case the identityEvents found by the `where` argument doesn't exist, create a new identityEvents with this data.
     */
    create: XOR<identityEventsCreateInput, identityEventsUncheckedCreateInput>
    /**
     * In case the identityEvents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<identityEventsUpdateInput, identityEventsUncheckedUpdateInput>
  }

  /**
   * identityEvents delete
   */
  export type identityEventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
    /**
     * Filter which identityEvents to delete.
     */
    where: identityEventsWhereUniqueInput
  }

  /**
   * identityEvents deleteMany
   */
  export type identityEventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which identityEvents to delete
     */
    where?: identityEventsWhereInput
    /**
     * Limit how many identityEvents to delete.
     */
    limit?: number
  }

  /**
   * identityEvents without action
   */
  export type identityEventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the identityEvents
     */
    select?: identityEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the identityEvents
     */
    omit?: identityEventsOmit<ExtArgs> | null
  }


  /**
   * Model networkEvents
   */

  export type AggregateNetworkEvents = {
    _count: NetworkEventsCountAggregateOutputType | null
    _avg: NetworkEventsAvgAggregateOutputType | null
    _sum: NetworkEventsSumAggregateOutputType | null
    _min: NetworkEventsMinAggregateOutputType | null
    _max: NetworkEventsMaxAggregateOutputType | null
  }

  export type NetworkEventsAvgAggregateOutputType = {
    id: number | null
  }

  export type NetworkEventsSumAggregateOutputType = {
    id: number | null
  }

  export type NetworkEventsMinAggregateOutputType = {
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    compartmentId: string | null
    compartmentName: string | null
    eventName: string | null
    message: string | null
    action: string | null
    principalName: string | null
    ipAddress: string | null
    routeRules: string | null
    createdBy: string | null
    createdOn: Date | null
    createdAt: Date | null
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
    id: number | null
  }

  export type NetworkEventsMaxAggregateOutputType = {
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    compartmentId: string | null
    compartmentName: string | null
    eventName: string | null
    message: string | null
    action: string | null
    principalName: string | null
    ipAddress: string | null
    routeRules: string | null
    createdBy: string | null
    createdOn: Date | null
    createdAt: Date | null
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
    id: number | null
  }

  export type NetworkEventsCountAggregateOutputType = {
    eventType: number
    eventTime: number
    source: number
    opcRequestId: number
    rawEvent: number
    compartmentId: number
    compartmentName: number
    eventName: number
    message: number
    action: number
    principalName: number
    ipAddress: number
    routeRules: number
    createdBy: number
    createdOn: number
    createdAt: number
    tenancyName: number
    isCheck: number
    ticket: number
    id: number
    _all: number
  }


  export type NetworkEventsAvgAggregateInputType = {
    id?: true
  }

  export type NetworkEventsSumAggregateInputType = {
    id?: true
  }

  export type NetworkEventsMinAggregateInputType = {
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    compartmentId?: true
    compartmentName?: true
    eventName?: true
    message?: true
    action?: true
    principalName?: true
    ipAddress?: true
    routeRules?: true
    createdBy?: true
    createdOn?: true
    createdAt?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
    id?: true
  }

  export type NetworkEventsMaxAggregateInputType = {
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    compartmentId?: true
    compartmentName?: true
    eventName?: true
    message?: true
    action?: true
    principalName?: true
    ipAddress?: true
    routeRules?: true
    createdBy?: true
    createdOn?: true
    createdAt?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
    id?: true
  }

  export type NetworkEventsCountAggregateInputType = {
    eventType?: true
    eventTime?: true
    source?: true
    opcRequestId?: true
    rawEvent?: true
    compartmentId?: true
    compartmentName?: true
    eventName?: true
    message?: true
    action?: true
    principalName?: true
    ipAddress?: true
    routeRules?: true
    createdBy?: true
    createdOn?: true
    createdAt?: true
    tenancyName?: true
    isCheck?: true
    ticket?: true
    id?: true
    _all?: true
  }

  export type NetworkEventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which networkEvents to aggregate.
     */
    where?: networkEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networkEvents to fetch.
     */
    orderBy?: networkEventsOrderByWithRelationInput | networkEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: networkEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networkEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networkEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned networkEvents
    **/
    _count?: true | NetworkEventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NetworkEventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NetworkEventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkEventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkEventsMaxAggregateInputType
  }

  export type GetNetworkEventsAggregateType<T extends NetworkEventsAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworkEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworkEvents[P]>
      : GetScalarType<T[P], AggregateNetworkEvents[P]>
  }




  export type networkEventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: networkEventsWhereInput
    orderBy?: networkEventsOrderByWithAggregationInput | networkEventsOrderByWithAggregationInput[]
    by: NetworkEventsScalarFieldEnum[] | NetworkEventsScalarFieldEnum
    having?: networkEventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkEventsCountAggregateInputType | true
    _avg?: NetworkEventsAvgAggregateInputType
    _sum?: NetworkEventsSumAggregateInputType
    _min?: NetworkEventsMinAggregateInputType
    _max?: NetworkEventsMaxAggregateInputType
  }

  export type NetworkEventsGroupByOutputType = {
    eventType: string | null
    eventTime: Date | null
    source: string | null
    opcRequestId: string | null
    rawEvent: string | null
    compartmentId: string | null
    compartmentName: string | null
    eventName: string | null
    message: string | null
    action: string | null
    principalName: string | null
    ipAddress: string | null
    routeRules: string | null
    createdBy: string | null
    createdOn: Date | null
    createdAt: Date
    tenancyName: string | null
    isCheck: boolean | null
    ticket: string | null
    id: number
    _count: NetworkEventsCountAggregateOutputType | null
    _avg: NetworkEventsAvgAggregateOutputType | null
    _sum: NetworkEventsSumAggregateOutputType | null
    _min: NetworkEventsMinAggregateOutputType | null
    _max: NetworkEventsMaxAggregateOutputType | null
  }

  type GetNetworkEventsGroupByPayload<T extends networkEventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkEventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkEventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkEventsGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkEventsGroupByOutputType[P]>
        }
      >
    >


  export type networkEventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventType?: boolean
    eventTime?: boolean
    source?: boolean
    opcRequestId?: boolean
    rawEvent?: boolean
    compartmentId?: boolean
    compartmentName?: boolean
    eventName?: boolean
    message?: boolean
    action?: boolean
    principalName?: boolean
    ipAddress?: boolean
    routeRules?: boolean
    createdBy?: boolean
    createdOn?: boolean
    createdAt?: boolean
    tenancyName?: boolean
    isCheck?: boolean
    ticket?: boolean
    id?: boolean
  }, ExtArgs["result"]["networkEvents"]>



  export type networkEventsSelectScalar = {
    eventType?: boolean
    eventTime?: boolean
    source?: boolean
    opcRequestId?: boolean
    rawEvent?: boolean
    compartmentId?: boolean
    compartmentName?: boolean
    eventName?: boolean
    message?: boolean
    action?: boolean
    principalName?: boolean
    ipAddress?: boolean
    routeRules?: boolean
    createdBy?: boolean
    createdOn?: boolean
    createdAt?: boolean
    tenancyName?: boolean
    isCheck?: boolean
    ticket?: boolean
    id?: boolean
  }

  export type networkEventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventType" | "eventTime" | "source" | "opcRequestId" | "rawEvent" | "compartmentId" | "compartmentName" | "eventName" | "message" | "action" | "principalName" | "ipAddress" | "routeRules" | "createdBy" | "createdOn" | "createdAt" | "tenancyName" | "isCheck" | "ticket" | "id", ExtArgs["result"]["networkEvents"]>

  export type $networkEventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "networkEvents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      eventType: string | null
      eventTime: Date | null
      source: string | null
      opcRequestId: string | null
      rawEvent: string | null
      compartmentId: string | null
      compartmentName: string | null
      eventName: string | null
      message: string | null
      action: string | null
      principalName: string | null
      ipAddress: string | null
      routeRules: string | null
      createdBy: string | null
      createdOn: Date | null
      createdAt: Date
      tenancyName: string | null
      isCheck: boolean | null
      ticket: string | null
      id: number
    }, ExtArgs["result"]["networkEvents"]>
    composites: {}
  }

  type networkEventsGetPayload<S extends boolean | null | undefined | networkEventsDefaultArgs> = $Result.GetResult<Prisma.$networkEventsPayload, S>

  type networkEventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<networkEventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworkEventsCountAggregateInputType | true
    }

  export interface networkEventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['networkEvents'], meta: { name: 'networkEvents' } }
    /**
     * Find zero or one NetworkEvents that matches the filter.
     * @param {networkEventsFindUniqueArgs} args - Arguments to find a NetworkEvents
     * @example
     * // Get one NetworkEvents
     * const networkEvents = await prisma.networkEvents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends networkEventsFindUniqueArgs>(args: SelectSubset<T, networkEventsFindUniqueArgs<ExtArgs>>): Prisma__networkEventsClient<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NetworkEvents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {networkEventsFindUniqueOrThrowArgs} args - Arguments to find a NetworkEvents
     * @example
     * // Get one NetworkEvents
     * const networkEvents = await prisma.networkEvents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends networkEventsFindUniqueOrThrowArgs>(args: SelectSubset<T, networkEventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__networkEventsClient<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkEventsFindFirstArgs} args - Arguments to find a NetworkEvents
     * @example
     * // Get one NetworkEvents
     * const networkEvents = await prisma.networkEvents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends networkEventsFindFirstArgs>(args?: SelectSubset<T, networkEventsFindFirstArgs<ExtArgs>>): Prisma__networkEventsClient<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkEvents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkEventsFindFirstOrThrowArgs} args - Arguments to find a NetworkEvents
     * @example
     * // Get one NetworkEvents
     * const networkEvents = await prisma.networkEvents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends networkEventsFindFirstOrThrowArgs>(args?: SelectSubset<T, networkEventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__networkEventsClient<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NetworkEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkEventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkEvents
     * const networkEvents = await prisma.networkEvents.findMany()
     * 
     * // Get first 10 NetworkEvents
     * const networkEvents = await prisma.networkEvents.findMany({ take: 10 })
     * 
     * // Only select the `eventType`
     * const networkEventsWithEventTypeOnly = await prisma.networkEvents.findMany({ select: { eventType: true } })
     * 
     */
    findMany<T extends networkEventsFindManyArgs>(args?: SelectSubset<T, networkEventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NetworkEvents.
     * @param {networkEventsCreateArgs} args - Arguments to create a NetworkEvents.
     * @example
     * // Create one NetworkEvents
     * const NetworkEvents = await prisma.networkEvents.create({
     *   data: {
     *     // ... data to create a NetworkEvents
     *   }
     * })
     * 
     */
    create<T extends networkEventsCreateArgs>(args: SelectSubset<T, networkEventsCreateArgs<ExtArgs>>): Prisma__networkEventsClient<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NetworkEvents.
     * @param {networkEventsCreateManyArgs} args - Arguments to create many NetworkEvents.
     * @example
     * // Create many NetworkEvents
     * const networkEvents = await prisma.networkEvents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends networkEventsCreateManyArgs>(args?: SelectSubset<T, networkEventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NetworkEvents.
     * @param {networkEventsDeleteArgs} args - Arguments to delete one NetworkEvents.
     * @example
     * // Delete one NetworkEvents
     * const NetworkEvents = await prisma.networkEvents.delete({
     *   where: {
     *     // ... filter to delete one NetworkEvents
     *   }
     * })
     * 
     */
    delete<T extends networkEventsDeleteArgs>(args: SelectSubset<T, networkEventsDeleteArgs<ExtArgs>>): Prisma__networkEventsClient<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NetworkEvents.
     * @param {networkEventsUpdateArgs} args - Arguments to update one NetworkEvents.
     * @example
     * // Update one NetworkEvents
     * const networkEvents = await prisma.networkEvents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends networkEventsUpdateArgs>(args: SelectSubset<T, networkEventsUpdateArgs<ExtArgs>>): Prisma__networkEventsClient<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NetworkEvents.
     * @param {networkEventsDeleteManyArgs} args - Arguments to filter NetworkEvents to delete.
     * @example
     * // Delete a few NetworkEvents
     * const { count } = await prisma.networkEvents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends networkEventsDeleteManyArgs>(args?: SelectSubset<T, networkEventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkEventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkEvents
     * const networkEvents = await prisma.networkEvents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends networkEventsUpdateManyArgs>(args: SelectSubset<T, networkEventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NetworkEvents.
     * @param {networkEventsUpsertArgs} args - Arguments to update or create a NetworkEvents.
     * @example
     * // Update or create a NetworkEvents
     * const networkEvents = await prisma.networkEvents.upsert({
     *   create: {
     *     // ... data to create a NetworkEvents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkEvents we want to update
     *   }
     * })
     */
    upsert<T extends networkEventsUpsertArgs>(args: SelectSubset<T, networkEventsUpsertArgs<ExtArgs>>): Prisma__networkEventsClient<$Result.GetResult<Prisma.$networkEventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NetworkEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkEventsCountArgs} args - Arguments to filter NetworkEvents to count.
     * @example
     * // Count the number of NetworkEvents
     * const count = await prisma.networkEvents.count({
     *   where: {
     *     // ... the filter for the NetworkEvents we want to count
     *   }
     * })
    **/
    count<T extends networkEventsCountArgs>(
      args?: Subset<T, networkEventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkEventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NetworkEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkEventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NetworkEventsAggregateArgs>(args: Subset<T, NetworkEventsAggregateArgs>): Prisma.PrismaPromise<GetNetworkEventsAggregateType<T>>

    /**
     * Group by NetworkEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkEventsGroupByArgs} args - Group by arguments.
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
      T extends networkEventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: networkEventsGroupByArgs['orderBy'] }
        : { orderBy?: networkEventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, networkEventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the networkEvents model
   */
  readonly fields: networkEventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for networkEvents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__networkEventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the networkEvents model
   */
  interface networkEventsFieldRefs {
    readonly eventType: FieldRef<"networkEvents", 'String'>
    readonly eventTime: FieldRef<"networkEvents", 'DateTime'>
    readonly source: FieldRef<"networkEvents", 'String'>
    readonly opcRequestId: FieldRef<"networkEvents", 'String'>
    readonly rawEvent: FieldRef<"networkEvents", 'String'>
    readonly compartmentId: FieldRef<"networkEvents", 'String'>
    readonly compartmentName: FieldRef<"networkEvents", 'String'>
    readonly eventName: FieldRef<"networkEvents", 'String'>
    readonly message: FieldRef<"networkEvents", 'String'>
    readonly action: FieldRef<"networkEvents", 'String'>
    readonly principalName: FieldRef<"networkEvents", 'String'>
    readonly ipAddress: FieldRef<"networkEvents", 'String'>
    readonly routeRules: FieldRef<"networkEvents", 'String'>
    readonly createdBy: FieldRef<"networkEvents", 'String'>
    readonly createdOn: FieldRef<"networkEvents", 'DateTime'>
    readonly createdAt: FieldRef<"networkEvents", 'DateTime'>
    readonly tenancyName: FieldRef<"networkEvents", 'String'>
    readonly isCheck: FieldRef<"networkEvents", 'Boolean'>
    readonly ticket: FieldRef<"networkEvents", 'String'>
    readonly id: FieldRef<"networkEvents", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * networkEvents findUnique
   */
  export type networkEventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * Filter, which networkEvents to fetch.
     */
    where: networkEventsWhereUniqueInput
  }

  /**
   * networkEvents findUniqueOrThrow
   */
  export type networkEventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * Filter, which networkEvents to fetch.
     */
    where: networkEventsWhereUniqueInput
  }

  /**
   * networkEvents findFirst
   */
  export type networkEventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * Filter, which networkEvents to fetch.
     */
    where?: networkEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networkEvents to fetch.
     */
    orderBy?: networkEventsOrderByWithRelationInput | networkEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for networkEvents.
     */
    cursor?: networkEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networkEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networkEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of networkEvents.
     */
    distinct?: NetworkEventsScalarFieldEnum | NetworkEventsScalarFieldEnum[]
  }

  /**
   * networkEvents findFirstOrThrow
   */
  export type networkEventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * Filter, which networkEvents to fetch.
     */
    where?: networkEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networkEvents to fetch.
     */
    orderBy?: networkEventsOrderByWithRelationInput | networkEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for networkEvents.
     */
    cursor?: networkEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networkEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networkEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of networkEvents.
     */
    distinct?: NetworkEventsScalarFieldEnum | NetworkEventsScalarFieldEnum[]
  }

  /**
   * networkEvents findMany
   */
  export type networkEventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * Filter, which networkEvents to fetch.
     */
    where?: networkEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networkEvents to fetch.
     */
    orderBy?: networkEventsOrderByWithRelationInput | networkEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing networkEvents.
     */
    cursor?: networkEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networkEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networkEvents.
     */
    skip?: number
    distinct?: NetworkEventsScalarFieldEnum | NetworkEventsScalarFieldEnum[]
  }

  /**
   * networkEvents create
   */
  export type networkEventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * The data needed to create a networkEvents.
     */
    data?: XOR<networkEventsCreateInput, networkEventsUncheckedCreateInput>
  }

  /**
   * networkEvents createMany
   */
  export type networkEventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many networkEvents.
     */
    data: networkEventsCreateManyInput | networkEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * networkEvents update
   */
  export type networkEventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * The data needed to update a networkEvents.
     */
    data: XOR<networkEventsUpdateInput, networkEventsUncheckedUpdateInput>
    /**
     * Choose, which networkEvents to update.
     */
    where: networkEventsWhereUniqueInput
  }

  /**
   * networkEvents updateMany
   */
  export type networkEventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update networkEvents.
     */
    data: XOR<networkEventsUpdateManyMutationInput, networkEventsUncheckedUpdateManyInput>
    /**
     * Filter which networkEvents to update
     */
    where?: networkEventsWhereInput
    /**
     * Limit how many networkEvents to update.
     */
    limit?: number
  }

  /**
   * networkEvents upsert
   */
  export type networkEventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * The filter to search for the networkEvents to update in case it exists.
     */
    where: networkEventsWhereUniqueInput
    /**
     * In case the networkEvents found by the `where` argument doesn't exist, create a new networkEvents with this data.
     */
    create: XOR<networkEventsCreateInput, networkEventsUncheckedCreateInput>
    /**
     * In case the networkEvents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<networkEventsUpdateInput, networkEventsUncheckedUpdateInput>
  }

  /**
   * networkEvents delete
   */
  export type networkEventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
    /**
     * Filter which networkEvents to delete.
     */
    where: networkEventsWhereUniqueInput
  }

  /**
   * networkEvents deleteMany
   */
  export type networkEventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which networkEvents to delete
     */
    where?: networkEventsWhereInput
    /**
     * Limit how many networkEvents to delete.
     */
    limit?: number
  }

  /**
   * networkEvents without action
   */
  export type networkEventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networkEvents
     */
    select?: networkEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networkEvents
     */
    omit?: networkEventsOmit<ExtArgs> | null
  }


  /**
   * Model BlockVolume
   */

  export type AggregateBlockVolume = {
    _count: BlockVolumeCountAggregateOutputType | null
    _avg: BlockVolumeAvgAggregateOutputType | null
    _sum: BlockVolumeSumAggregateOutputType | null
    _min: BlockVolumeMinAggregateOutputType | null
    _max: BlockVolumeMaxAggregateOutputType | null
  }

  export type BlockVolumeAvgAggregateOutputType = {
    size_in_gbs: number | null
    vpus_per_gb: number | null
    custo_mes: number | null
  }

  export type BlockVolumeSumAggregateOutputType = {
    size_in_gbs: number | null
    vpus_per_gb: number | null
    custo_mes: number | null
  }

  export type BlockVolumeMinAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    availability_domain: string | null
    compartment_id: string | null
    display_name: string | null
    id: string | null
    lifecycle_state: string | null
    size_in_gbs: number | null
    time_created: Date | null
    vpus_per_gb: number | null
    is_boot_volume: string | null
    is_orfao: string | null
    custo_mes: number | null
    updated: Date | null
  }

  export type BlockVolumeMaxAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    availability_domain: string | null
    compartment_id: string | null
    display_name: string | null
    id: string | null
    lifecycle_state: string | null
    size_in_gbs: number | null
    time_created: Date | null
    vpus_per_gb: number | null
    is_boot_volume: string | null
    is_orfao: string | null
    custo_mes: number | null
    updated: Date | null
  }

  export type BlockVolumeCountAggregateOutputType = {
    tenancy_name: number
    tenancy_id: number
    availability_domain: number
    compartment_id: number
    display_name: number
    id: number
    lifecycle_state: number
    size_in_gbs: number
    time_created: number
    vpus_per_gb: number
    is_boot_volume: number
    is_orfao: number
    custo_mes: number
    updated: number
    _all: number
  }


  export type BlockVolumeAvgAggregateInputType = {
    size_in_gbs?: true
    vpus_per_gb?: true
    custo_mes?: true
  }

  export type BlockVolumeSumAggregateInputType = {
    size_in_gbs?: true
    vpus_per_gb?: true
    custo_mes?: true
  }

  export type BlockVolumeMinAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    availability_domain?: true
    compartment_id?: true
    display_name?: true
    id?: true
    lifecycle_state?: true
    size_in_gbs?: true
    time_created?: true
    vpus_per_gb?: true
    is_boot_volume?: true
    is_orfao?: true
    custo_mes?: true
    updated?: true
  }

  export type BlockVolumeMaxAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    availability_domain?: true
    compartment_id?: true
    display_name?: true
    id?: true
    lifecycle_state?: true
    size_in_gbs?: true
    time_created?: true
    vpus_per_gb?: true
    is_boot_volume?: true
    is_orfao?: true
    custo_mes?: true
    updated?: true
  }

  export type BlockVolumeCountAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    availability_domain?: true
    compartment_id?: true
    display_name?: true
    id?: true
    lifecycle_state?: true
    size_in_gbs?: true
    time_created?: true
    vpus_per_gb?: true
    is_boot_volume?: true
    is_orfao?: true
    custo_mes?: true
    updated?: true
    _all?: true
  }

  export type BlockVolumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockVolume to aggregate.
     */
    where?: BlockVolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockVolumes to fetch.
     */
    orderBy?: BlockVolumeOrderByWithRelationInput | BlockVolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockVolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockVolumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockVolumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockVolumes
    **/
    _count?: true | BlockVolumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockVolumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockVolumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockVolumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockVolumeMaxAggregateInputType
  }

  export type GetBlockVolumeAggregateType<T extends BlockVolumeAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockVolume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockVolume[P]>
      : GetScalarType<T[P], AggregateBlockVolume[P]>
  }




  export type BlockVolumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockVolumeWhereInput
    orderBy?: BlockVolumeOrderByWithAggregationInput | BlockVolumeOrderByWithAggregationInput[]
    by: BlockVolumeScalarFieldEnum[] | BlockVolumeScalarFieldEnum
    having?: BlockVolumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockVolumeCountAggregateInputType | true
    _avg?: BlockVolumeAvgAggregateInputType
    _sum?: BlockVolumeSumAggregateInputType
    _min?: BlockVolumeMinAggregateInputType
    _max?: BlockVolumeMaxAggregateInputType
  }

  export type BlockVolumeGroupByOutputType = {
    tenancy_name: string | null
    tenancy_id: string
    availability_domain: string | null
    compartment_id: string | null
    display_name: string | null
    id: string
    lifecycle_state: string | null
    size_in_gbs: number | null
    time_created: Date | null
    vpus_per_gb: number | null
    is_boot_volume: string | null
    is_orfao: string | null
    custo_mes: number | null
    updated: Date | null
    _count: BlockVolumeCountAggregateOutputType | null
    _avg: BlockVolumeAvgAggregateOutputType | null
    _sum: BlockVolumeSumAggregateOutputType | null
    _min: BlockVolumeMinAggregateOutputType | null
    _max: BlockVolumeMaxAggregateOutputType | null
  }

  type GetBlockVolumeGroupByPayload<T extends BlockVolumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockVolumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockVolumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockVolumeGroupByOutputType[P]>
            : GetScalarType<T[P], BlockVolumeGroupByOutputType[P]>
        }
      >
    >


  export type BlockVolumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenancy_id?: boolean
    availability_domain?: boolean
    compartment_id?: boolean
    display_name?: boolean
    id?: boolean
    lifecycle_state?: boolean
    size_in_gbs?: boolean
    time_created?: boolean
    vpus_per_gb?: boolean
    is_boot_volume?: boolean
    is_orfao?: boolean
    custo_mes?: boolean
    updated?: boolean
  }, ExtArgs["result"]["blockVolume"]>



  export type BlockVolumeSelectScalar = {
    tenancy_name?: boolean
    tenancy_id?: boolean
    availability_domain?: boolean
    compartment_id?: boolean
    display_name?: boolean
    id?: boolean
    lifecycle_state?: boolean
    size_in_gbs?: boolean
    time_created?: boolean
    vpus_per_gb?: boolean
    is_boot_volume?: boolean
    is_orfao?: boolean
    custo_mes?: boolean
    updated?: boolean
  }

  export type BlockVolumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenancy_id" | "availability_domain" | "compartment_id" | "display_name" | "id" | "lifecycle_state" | "size_in_gbs" | "time_created" | "vpus_per_gb" | "is_boot_volume" | "is_orfao" | "custo_mes" | "updated", ExtArgs["result"]["blockVolume"]>

  export type $BlockVolumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockVolume"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string | null
      tenancy_id: string
      availability_domain: string | null
      compartment_id: string | null
      display_name: string | null
      id: string
      lifecycle_state: string | null
      size_in_gbs: number | null
      time_created: Date | null
      vpus_per_gb: number | null
      is_boot_volume: string | null
      is_orfao: string | null
      custo_mes: number | null
      updated: Date | null
    }, ExtArgs["result"]["blockVolume"]>
    composites: {}
  }

  type BlockVolumeGetPayload<S extends boolean | null | undefined | BlockVolumeDefaultArgs> = $Result.GetResult<Prisma.$BlockVolumePayload, S>

  type BlockVolumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockVolumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockVolumeCountAggregateInputType | true
    }

  export interface BlockVolumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockVolume'], meta: { name: 'BlockVolume' } }
    /**
     * Find zero or one BlockVolume that matches the filter.
     * @param {BlockVolumeFindUniqueArgs} args - Arguments to find a BlockVolume
     * @example
     * // Get one BlockVolume
     * const blockVolume = await prisma.blockVolume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockVolumeFindUniqueArgs>(args: SelectSubset<T, BlockVolumeFindUniqueArgs<ExtArgs>>): Prisma__BlockVolumeClient<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockVolume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockVolumeFindUniqueOrThrowArgs} args - Arguments to find a BlockVolume
     * @example
     * // Get one BlockVolume
     * const blockVolume = await prisma.blockVolume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockVolumeFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockVolumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockVolumeClient<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockVolume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockVolumeFindFirstArgs} args - Arguments to find a BlockVolume
     * @example
     * // Get one BlockVolume
     * const blockVolume = await prisma.blockVolume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockVolumeFindFirstArgs>(args?: SelectSubset<T, BlockVolumeFindFirstArgs<ExtArgs>>): Prisma__BlockVolumeClient<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockVolume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockVolumeFindFirstOrThrowArgs} args - Arguments to find a BlockVolume
     * @example
     * // Get one BlockVolume
     * const blockVolume = await prisma.blockVolume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockVolumeFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockVolumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockVolumeClient<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockVolumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockVolumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockVolumes
     * const blockVolumes = await prisma.blockVolume.findMany()
     * 
     * // Get first 10 BlockVolumes
     * const blockVolumes = await prisma.blockVolume.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const blockVolumeWithTenancy_nameOnly = await prisma.blockVolume.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends BlockVolumeFindManyArgs>(args?: SelectSubset<T, BlockVolumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockVolume.
     * @param {BlockVolumeCreateArgs} args - Arguments to create a BlockVolume.
     * @example
     * // Create one BlockVolume
     * const BlockVolume = await prisma.blockVolume.create({
     *   data: {
     *     // ... data to create a BlockVolume
     *   }
     * })
     * 
     */
    create<T extends BlockVolumeCreateArgs>(args: SelectSubset<T, BlockVolumeCreateArgs<ExtArgs>>): Prisma__BlockVolumeClient<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockVolumes.
     * @param {BlockVolumeCreateManyArgs} args - Arguments to create many BlockVolumes.
     * @example
     * // Create many BlockVolumes
     * const blockVolume = await prisma.blockVolume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockVolumeCreateManyArgs>(args?: SelectSubset<T, BlockVolumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlockVolume.
     * @param {BlockVolumeDeleteArgs} args - Arguments to delete one BlockVolume.
     * @example
     * // Delete one BlockVolume
     * const BlockVolume = await prisma.blockVolume.delete({
     *   where: {
     *     // ... filter to delete one BlockVolume
     *   }
     * })
     * 
     */
    delete<T extends BlockVolumeDeleteArgs>(args: SelectSubset<T, BlockVolumeDeleteArgs<ExtArgs>>): Prisma__BlockVolumeClient<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockVolume.
     * @param {BlockVolumeUpdateArgs} args - Arguments to update one BlockVolume.
     * @example
     * // Update one BlockVolume
     * const blockVolume = await prisma.blockVolume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockVolumeUpdateArgs>(args: SelectSubset<T, BlockVolumeUpdateArgs<ExtArgs>>): Prisma__BlockVolumeClient<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockVolumes.
     * @param {BlockVolumeDeleteManyArgs} args - Arguments to filter BlockVolumes to delete.
     * @example
     * // Delete a few BlockVolumes
     * const { count } = await prisma.blockVolume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockVolumeDeleteManyArgs>(args?: SelectSubset<T, BlockVolumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockVolumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockVolumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockVolumes
     * const blockVolume = await prisma.blockVolume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockVolumeUpdateManyArgs>(args: SelectSubset<T, BlockVolumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlockVolume.
     * @param {BlockVolumeUpsertArgs} args - Arguments to update or create a BlockVolume.
     * @example
     * // Update or create a BlockVolume
     * const blockVolume = await prisma.blockVolume.upsert({
     *   create: {
     *     // ... data to create a BlockVolume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockVolume we want to update
     *   }
     * })
     */
    upsert<T extends BlockVolumeUpsertArgs>(args: SelectSubset<T, BlockVolumeUpsertArgs<ExtArgs>>): Prisma__BlockVolumeClient<$Result.GetResult<Prisma.$BlockVolumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockVolumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockVolumeCountArgs} args - Arguments to filter BlockVolumes to count.
     * @example
     * // Count the number of BlockVolumes
     * const count = await prisma.blockVolume.count({
     *   where: {
     *     // ... the filter for the BlockVolumes we want to count
     *   }
     * })
    **/
    count<T extends BlockVolumeCountArgs>(
      args?: Subset<T, BlockVolumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockVolumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockVolume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockVolumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockVolumeAggregateArgs>(args: Subset<T, BlockVolumeAggregateArgs>): Prisma.PrismaPromise<GetBlockVolumeAggregateType<T>>

    /**
     * Group by BlockVolume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockVolumeGroupByArgs} args - Group by arguments.
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
      T extends BlockVolumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockVolumeGroupByArgs['orderBy'] }
        : { orderBy?: BlockVolumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockVolumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockVolumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockVolume model
   */
  readonly fields: BlockVolumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockVolume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockVolumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BlockVolume model
   */
  interface BlockVolumeFieldRefs {
    readonly tenancy_name: FieldRef<"BlockVolume", 'String'>
    readonly tenancy_id: FieldRef<"BlockVolume", 'String'>
    readonly availability_domain: FieldRef<"BlockVolume", 'String'>
    readonly compartment_id: FieldRef<"BlockVolume", 'String'>
    readonly display_name: FieldRef<"BlockVolume", 'String'>
    readonly id: FieldRef<"BlockVolume", 'String'>
    readonly lifecycle_state: FieldRef<"BlockVolume", 'String'>
    readonly size_in_gbs: FieldRef<"BlockVolume", 'Float'>
    readonly time_created: FieldRef<"BlockVolume", 'DateTime'>
    readonly vpus_per_gb: FieldRef<"BlockVolume", 'Int'>
    readonly is_boot_volume: FieldRef<"BlockVolume", 'String'>
    readonly is_orfao: FieldRef<"BlockVolume", 'String'>
    readonly custo_mes: FieldRef<"BlockVolume", 'Float'>
    readonly updated: FieldRef<"BlockVolume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockVolume findUnique
   */
  export type BlockVolumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * Filter, which BlockVolume to fetch.
     */
    where: BlockVolumeWhereUniqueInput
  }

  /**
   * BlockVolume findUniqueOrThrow
   */
  export type BlockVolumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * Filter, which BlockVolume to fetch.
     */
    where: BlockVolumeWhereUniqueInput
  }

  /**
   * BlockVolume findFirst
   */
  export type BlockVolumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * Filter, which BlockVolume to fetch.
     */
    where?: BlockVolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockVolumes to fetch.
     */
    orderBy?: BlockVolumeOrderByWithRelationInput | BlockVolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockVolumes.
     */
    cursor?: BlockVolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockVolumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockVolumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockVolumes.
     */
    distinct?: BlockVolumeScalarFieldEnum | BlockVolumeScalarFieldEnum[]
  }

  /**
   * BlockVolume findFirstOrThrow
   */
  export type BlockVolumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * Filter, which BlockVolume to fetch.
     */
    where?: BlockVolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockVolumes to fetch.
     */
    orderBy?: BlockVolumeOrderByWithRelationInput | BlockVolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockVolumes.
     */
    cursor?: BlockVolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockVolumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockVolumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockVolumes.
     */
    distinct?: BlockVolumeScalarFieldEnum | BlockVolumeScalarFieldEnum[]
  }

  /**
   * BlockVolume findMany
   */
  export type BlockVolumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * Filter, which BlockVolumes to fetch.
     */
    where?: BlockVolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockVolumes to fetch.
     */
    orderBy?: BlockVolumeOrderByWithRelationInput | BlockVolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockVolumes.
     */
    cursor?: BlockVolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockVolumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockVolumes.
     */
    skip?: number
    distinct?: BlockVolumeScalarFieldEnum | BlockVolumeScalarFieldEnum[]
  }

  /**
   * BlockVolume create
   */
  export type BlockVolumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * The data needed to create a BlockVolume.
     */
    data?: XOR<BlockVolumeCreateInput, BlockVolumeUncheckedCreateInput>
  }

  /**
   * BlockVolume createMany
   */
  export type BlockVolumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockVolumes.
     */
    data: BlockVolumeCreateManyInput | BlockVolumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockVolume update
   */
  export type BlockVolumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * The data needed to update a BlockVolume.
     */
    data: XOR<BlockVolumeUpdateInput, BlockVolumeUncheckedUpdateInput>
    /**
     * Choose, which BlockVolume to update.
     */
    where: BlockVolumeWhereUniqueInput
  }

  /**
   * BlockVolume updateMany
   */
  export type BlockVolumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockVolumes.
     */
    data: XOR<BlockVolumeUpdateManyMutationInput, BlockVolumeUncheckedUpdateManyInput>
    /**
     * Filter which BlockVolumes to update
     */
    where?: BlockVolumeWhereInput
    /**
     * Limit how many BlockVolumes to update.
     */
    limit?: number
  }

  /**
   * BlockVolume upsert
   */
  export type BlockVolumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * The filter to search for the BlockVolume to update in case it exists.
     */
    where: BlockVolumeWhereUniqueInput
    /**
     * In case the BlockVolume found by the `where` argument doesn't exist, create a new BlockVolume with this data.
     */
    create: XOR<BlockVolumeCreateInput, BlockVolumeUncheckedCreateInput>
    /**
     * In case the BlockVolume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockVolumeUpdateInput, BlockVolumeUncheckedUpdateInput>
  }

  /**
   * BlockVolume delete
   */
  export type BlockVolumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
    /**
     * Filter which BlockVolume to delete.
     */
    where: BlockVolumeWhereUniqueInput
  }

  /**
   * BlockVolume deleteMany
   */
  export type BlockVolumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockVolumes to delete
     */
    where?: BlockVolumeWhereInput
    /**
     * Limit how many BlockVolumes to delete.
     */
    limit?: number
  }

  /**
   * BlockVolume without action
   */
  export type BlockVolumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockVolume
     */
    select?: BlockVolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockVolume
     */
    omit?: BlockVolumeOmit<ExtArgs> | null
  }


  /**
   * Model CustoPorService
   */

  export type AggregateCustoPorService = {
    _count: CustoPorServiceCountAggregateOutputType | null
    _avg: CustoPorServiceAvgAggregateOutputType | null
    _sum: CustoPorServiceSumAggregateOutputType | null
    _min: CustoPorServiceMinAggregateOutputType | null
    _max: CustoPorServiceMaxAggregateOutputType | null
  }

  export type CustoPorServiceAvgAggregateOutputType = {
    cost_mes: number | null
    usage_mes: number | null
  }

  export type CustoPorServiceSumAggregateOutputType = {
    cost_mes: number | null
    usage_mes: number | null
  }

  export type CustoPorServiceMinAggregateOutputType = {
    tenancy_name: string | null
    tenant_id: string | null
    service: string | null
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date | null
    time_ended: Date | null
  }

  export type CustoPorServiceMaxAggregateOutputType = {
    tenancy_name: string | null
    tenant_id: string | null
    service: string | null
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date | null
    time_ended: Date | null
  }

  export type CustoPorServiceCountAggregateOutputType = {
    tenancy_name: number
    tenant_id: number
    service: number
    cost_mes: number
    currency: number
    usage_mes: number
    time_started: number
    time_ended: number
    _all: number
  }


  export type CustoPorServiceAvgAggregateInputType = {
    cost_mes?: true
    usage_mes?: true
  }

  export type CustoPorServiceSumAggregateInputType = {
    cost_mes?: true
    usage_mes?: true
  }

  export type CustoPorServiceMinAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    service?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
  }

  export type CustoPorServiceMaxAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    service?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
  }

  export type CustoPorServiceCountAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    service?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
    _all?: true
  }

  export type CustoPorServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoPorService to aggregate.
     */
    where?: CustoPorServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPorServices to fetch.
     */
    orderBy?: CustoPorServiceOrderByWithRelationInput | CustoPorServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustoPorServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPorServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPorServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustoPorServices
    **/
    _count?: true | CustoPorServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustoPorServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustoPorServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustoPorServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustoPorServiceMaxAggregateInputType
  }

  export type GetCustoPorServiceAggregateType<T extends CustoPorServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateCustoPorService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustoPorService[P]>
      : GetScalarType<T[P], AggregateCustoPorService[P]>
  }




  export type CustoPorServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustoPorServiceWhereInput
    orderBy?: CustoPorServiceOrderByWithAggregationInput | CustoPorServiceOrderByWithAggregationInput[]
    by: CustoPorServiceScalarFieldEnum[] | CustoPorServiceScalarFieldEnum
    having?: CustoPorServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustoPorServiceCountAggregateInputType | true
    _avg?: CustoPorServiceAvgAggregateInputType
    _sum?: CustoPorServiceSumAggregateInputType
    _min?: CustoPorServiceMinAggregateInputType
    _max?: CustoPorServiceMaxAggregateInputType
  }

  export type CustoPorServiceGroupByOutputType = {
    tenancy_name: string | null
    tenant_id: string
    service: string
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date
    time_ended: Date | null
    _count: CustoPorServiceCountAggregateOutputType | null
    _avg: CustoPorServiceAvgAggregateOutputType | null
    _sum: CustoPorServiceSumAggregateOutputType | null
    _min: CustoPorServiceMinAggregateOutputType | null
    _max: CustoPorServiceMaxAggregateOutputType | null
  }

  type GetCustoPorServiceGroupByPayload<T extends CustoPorServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustoPorServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustoPorServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustoPorServiceGroupByOutputType[P]>
            : GetScalarType<T[P], CustoPorServiceGroupByOutputType[P]>
        }
      >
    >


  export type CustoPorServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenant_id?: boolean
    service?: boolean
    cost_mes?: boolean
    currency?: boolean
    usage_mes?: boolean
    time_started?: boolean
    time_ended?: boolean
  }, ExtArgs["result"]["custoPorService"]>



  export type CustoPorServiceSelectScalar = {
    tenancy_name?: boolean
    tenant_id?: boolean
    service?: boolean
    cost_mes?: boolean
    currency?: boolean
    usage_mes?: boolean
    time_started?: boolean
    time_ended?: boolean
  }

  export type CustoPorServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenant_id" | "service" | "cost_mes" | "currency" | "usage_mes" | "time_started" | "time_ended", ExtArgs["result"]["custoPorService"]>

  export type $CustoPorServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustoPorService"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string | null
      tenant_id: string
      service: string
      cost_mes: number | null
      currency: string | null
      usage_mes: number | null
      time_started: Date
      time_ended: Date | null
    }, ExtArgs["result"]["custoPorService"]>
    composites: {}
  }

  type CustoPorServiceGetPayload<S extends boolean | null | undefined | CustoPorServiceDefaultArgs> = $Result.GetResult<Prisma.$CustoPorServicePayload, S>

  type CustoPorServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustoPorServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustoPorServiceCountAggregateInputType | true
    }

  export interface CustoPorServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustoPorService'], meta: { name: 'CustoPorService' } }
    /**
     * Find zero or one CustoPorService that matches the filter.
     * @param {CustoPorServiceFindUniqueArgs} args - Arguments to find a CustoPorService
     * @example
     * // Get one CustoPorService
     * const custoPorService = await prisma.custoPorService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustoPorServiceFindUniqueArgs>(args: SelectSubset<T, CustoPorServiceFindUniqueArgs<ExtArgs>>): Prisma__CustoPorServiceClient<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustoPorService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustoPorServiceFindUniqueOrThrowArgs} args - Arguments to find a CustoPorService
     * @example
     * // Get one CustoPorService
     * const custoPorService = await prisma.custoPorService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustoPorServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, CustoPorServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustoPorServiceClient<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoPorService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorServiceFindFirstArgs} args - Arguments to find a CustoPorService
     * @example
     * // Get one CustoPorService
     * const custoPorService = await prisma.custoPorService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustoPorServiceFindFirstArgs>(args?: SelectSubset<T, CustoPorServiceFindFirstArgs<ExtArgs>>): Prisma__CustoPorServiceClient<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoPorService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorServiceFindFirstOrThrowArgs} args - Arguments to find a CustoPorService
     * @example
     * // Get one CustoPorService
     * const custoPorService = await prisma.custoPorService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustoPorServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, CustoPorServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustoPorServiceClient<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustoPorServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustoPorServices
     * const custoPorServices = await prisma.custoPorService.findMany()
     * 
     * // Get first 10 CustoPorServices
     * const custoPorServices = await prisma.custoPorService.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const custoPorServiceWithTenancy_nameOnly = await prisma.custoPorService.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends CustoPorServiceFindManyArgs>(args?: SelectSubset<T, CustoPorServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustoPorService.
     * @param {CustoPorServiceCreateArgs} args - Arguments to create a CustoPorService.
     * @example
     * // Create one CustoPorService
     * const CustoPorService = await prisma.custoPorService.create({
     *   data: {
     *     // ... data to create a CustoPorService
     *   }
     * })
     * 
     */
    create<T extends CustoPorServiceCreateArgs>(args: SelectSubset<T, CustoPorServiceCreateArgs<ExtArgs>>): Prisma__CustoPorServiceClient<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustoPorServices.
     * @param {CustoPorServiceCreateManyArgs} args - Arguments to create many CustoPorServices.
     * @example
     * // Create many CustoPorServices
     * const custoPorService = await prisma.custoPorService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustoPorServiceCreateManyArgs>(args?: SelectSubset<T, CustoPorServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustoPorService.
     * @param {CustoPorServiceDeleteArgs} args - Arguments to delete one CustoPorService.
     * @example
     * // Delete one CustoPorService
     * const CustoPorService = await prisma.custoPorService.delete({
     *   where: {
     *     // ... filter to delete one CustoPorService
     *   }
     * })
     * 
     */
    delete<T extends CustoPorServiceDeleteArgs>(args: SelectSubset<T, CustoPorServiceDeleteArgs<ExtArgs>>): Prisma__CustoPorServiceClient<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustoPorService.
     * @param {CustoPorServiceUpdateArgs} args - Arguments to update one CustoPorService.
     * @example
     * // Update one CustoPorService
     * const custoPorService = await prisma.custoPorService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustoPorServiceUpdateArgs>(args: SelectSubset<T, CustoPorServiceUpdateArgs<ExtArgs>>): Prisma__CustoPorServiceClient<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustoPorServices.
     * @param {CustoPorServiceDeleteManyArgs} args - Arguments to filter CustoPorServices to delete.
     * @example
     * // Delete a few CustoPorServices
     * const { count } = await prisma.custoPorService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustoPorServiceDeleteManyArgs>(args?: SelectSubset<T, CustoPorServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustoPorServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustoPorServices
     * const custoPorService = await prisma.custoPorService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustoPorServiceUpdateManyArgs>(args: SelectSubset<T, CustoPorServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustoPorService.
     * @param {CustoPorServiceUpsertArgs} args - Arguments to update or create a CustoPorService.
     * @example
     * // Update or create a CustoPorService
     * const custoPorService = await prisma.custoPorService.upsert({
     *   create: {
     *     // ... data to create a CustoPorService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustoPorService we want to update
     *   }
     * })
     */
    upsert<T extends CustoPorServiceUpsertArgs>(args: SelectSubset<T, CustoPorServiceUpsertArgs<ExtArgs>>): Prisma__CustoPorServiceClient<$Result.GetResult<Prisma.$CustoPorServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustoPorServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorServiceCountArgs} args - Arguments to filter CustoPorServices to count.
     * @example
     * // Count the number of CustoPorServices
     * const count = await prisma.custoPorService.count({
     *   where: {
     *     // ... the filter for the CustoPorServices we want to count
     *   }
     * })
    **/
    count<T extends CustoPorServiceCountArgs>(
      args?: Subset<T, CustoPorServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustoPorServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustoPorService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustoPorServiceAggregateArgs>(args: Subset<T, CustoPorServiceAggregateArgs>): Prisma.PrismaPromise<GetCustoPorServiceAggregateType<T>>

    /**
     * Group by CustoPorService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorServiceGroupByArgs} args - Group by arguments.
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
      T extends CustoPorServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustoPorServiceGroupByArgs['orderBy'] }
        : { orderBy?: CustoPorServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustoPorServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustoPorServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustoPorService model
   */
  readonly fields: CustoPorServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustoPorService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustoPorServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CustoPorService model
   */
  interface CustoPorServiceFieldRefs {
    readonly tenancy_name: FieldRef<"CustoPorService", 'String'>
    readonly tenant_id: FieldRef<"CustoPorService", 'String'>
    readonly service: FieldRef<"CustoPorService", 'String'>
    readonly cost_mes: FieldRef<"CustoPorService", 'Float'>
    readonly currency: FieldRef<"CustoPorService", 'String'>
    readonly usage_mes: FieldRef<"CustoPorService", 'Float'>
    readonly time_started: FieldRef<"CustoPorService", 'DateTime'>
    readonly time_ended: FieldRef<"CustoPorService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustoPorService findUnique
   */
  export type CustoPorServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorService to fetch.
     */
    where: CustoPorServiceWhereUniqueInput
  }

  /**
   * CustoPorService findUniqueOrThrow
   */
  export type CustoPorServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorService to fetch.
     */
    where: CustoPorServiceWhereUniqueInput
  }

  /**
   * CustoPorService findFirst
   */
  export type CustoPorServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorService to fetch.
     */
    where?: CustoPorServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPorServices to fetch.
     */
    orderBy?: CustoPorServiceOrderByWithRelationInput | CustoPorServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoPorServices.
     */
    cursor?: CustoPorServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPorServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPorServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoPorServices.
     */
    distinct?: CustoPorServiceScalarFieldEnum | CustoPorServiceScalarFieldEnum[]
  }

  /**
   * CustoPorService findFirstOrThrow
   */
  export type CustoPorServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorService to fetch.
     */
    where?: CustoPorServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPorServices to fetch.
     */
    orderBy?: CustoPorServiceOrderByWithRelationInput | CustoPorServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoPorServices.
     */
    cursor?: CustoPorServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPorServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPorServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoPorServices.
     */
    distinct?: CustoPorServiceScalarFieldEnum | CustoPorServiceScalarFieldEnum[]
  }

  /**
   * CustoPorService findMany
   */
  export type CustoPorServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorServices to fetch.
     */
    where?: CustoPorServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPorServices to fetch.
     */
    orderBy?: CustoPorServiceOrderByWithRelationInput | CustoPorServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustoPorServices.
     */
    cursor?: CustoPorServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPorServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPorServices.
     */
    skip?: number
    distinct?: CustoPorServiceScalarFieldEnum | CustoPorServiceScalarFieldEnum[]
  }

  /**
   * CustoPorService create
   */
  export type CustoPorServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a CustoPorService.
     */
    data?: XOR<CustoPorServiceCreateInput, CustoPorServiceUncheckedCreateInput>
  }

  /**
   * CustoPorService createMany
   */
  export type CustoPorServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustoPorServices.
     */
    data: CustoPorServiceCreateManyInput | CustoPorServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustoPorService update
   */
  export type CustoPorServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a CustoPorService.
     */
    data: XOR<CustoPorServiceUpdateInput, CustoPorServiceUncheckedUpdateInput>
    /**
     * Choose, which CustoPorService to update.
     */
    where: CustoPorServiceWhereUniqueInput
  }

  /**
   * CustoPorService updateMany
   */
  export type CustoPorServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustoPorServices.
     */
    data: XOR<CustoPorServiceUpdateManyMutationInput, CustoPorServiceUncheckedUpdateManyInput>
    /**
     * Filter which CustoPorServices to update
     */
    where?: CustoPorServiceWhereInput
    /**
     * Limit how many CustoPorServices to update.
     */
    limit?: number
  }

  /**
   * CustoPorService upsert
   */
  export type CustoPorServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the CustoPorService to update in case it exists.
     */
    where: CustoPorServiceWhereUniqueInput
    /**
     * In case the CustoPorService found by the `where` argument doesn't exist, create a new CustoPorService with this data.
     */
    create: XOR<CustoPorServiceCreateInput, CustoPorServiceUncheckedCreateInput>
    /**
     * In case the CustoPorService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustoPorServiceUpdateInput, CustoPorServiceUncheckedUpdateInput>
  }

  /**
   * CustoPorService delete
   */
  export type CustoPorServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
    /**
     * Filter which CustoPorService to delete.
     */
    where: CustoPorServiceWhereUniqueInput
  }

  /**
   * CustoPorService deleteMany
   */
  export type CustoPorServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoPorServices to delete
     */
    where?: CustoPorServiceWhereInput
    /**
     * Limit how many CustoPorServices to delete.
     */
    limit?: number
  }

  /**
   * CustoPorService without action
   */
  export type CustoPorServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorService
     */
    select?: CustoPorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorService
     */
    omit?: CustoPorServiceOmit<ExtArgs> | null
  }


  /**
   * Model CustoPorSkuName
   */

  export type AggregateCustoPorSkuName = {
    _count: CustoPorSkuNameCountAggregateOutputType | null
    _avg: CustoPorSkuNameAvgAggregateOutputType | null
    _sum: CustoPorSkuNameSumAggregateOutputType | null
    _min: CustoPorSkuNameMinAggregateOutputType | null
    _max: CustoPorSkuNameMaxAggregateOutputType | null
  }

  export type CustoPorSkuNameAvgAggregateOutputType = {
    cost_mes: number | null
    usage_mes: number | null
  }

  export type CustoPorSkuNameSumAggregateOutputType = {
    cost_mes: number | null
    usage_mes: number | null
  }

  export type CustoPorSkuNameMinAggregateOutputType = {
    tenancy_name: string | null
    tenant_id: string | null
    sku_name: string | null
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date | null
    time_ended: Date | null
  }

  export type CustoPorSkuNameMaxAggregateOutputType = {
    tenancy_name: string | null
    tenant_id: string | null
    sku_name: string | null
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date | null
    time_ended: Date | null
  }

  export type CustoPorSkuNameCountAggregateOutputType = {
    tenancy_name: number
    tenant_id: number
    sku_name: number
    cost_mes: number
    currency: number
    usage_mes: number
    time_started: number
    time_ended: number
    _all: number
  }


  export type CustoPorSkuNameAvgAggregateInputType = {
    cost_mes?: true
    usage_mes?: true
  }

  export type CustoPorSkuNameSumAggregateInputType = {
    cost_mes?: true
    usage_mes?: true
  }

  export type CustoPorSkuNameMinAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    sku_name?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
  }

  export type CustoPorSkuNameMaxAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    sku_name?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
  }

  export type CustoPorSkuNameCountAggregateInputType = {
    tenancy_name?: true
    tenant_id?: true
    sku_name?: true
    cost_mes?: true
    currency?: true
    usage_mes?: true
    time_started?: true
    time_ended?: true
    _all?: true
  }

  export type CustoPorSkuNameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoPorSkuName to aggregate.
     */
    where?: CustoPorSkuNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPorSkuNames to fetch.
     */
    orderBy?: CustoPorSkuNameOrderByWithRelationInput | CustoPorSkuNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustoPorSkuNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPorSkuNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPorSkuNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustoPorSkuNames
    **/
    _count?: true | CustoPorSkuNameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustoPorSkuNameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustoPorSkuNameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustoPorSkuNameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustoPorSkuNameMaxAggregateInputType
  }

  export type GetCustoPorSkuNameAggregateType<T extends CustoPorSkuNameAggregateArgs> = {
        [P in keyof T & keyof AggregateCustoPorSkuName]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustoPorSkuName[P]>
      : GetScalarType<T[P], AggregateCustoPorSkuName[P]>
  }




  export type CustoPorSkuNameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustoPorSkuNameWhereInput
    orderBy?: CustoPorSkuNameOrderByWithAggregationInput | CustoPorSkuNameOrderByWithAggregationInput[]
    by: CustoPorSkuNameScalarFieldEnum[] | CustoPorSkuNameScalarFieldEnum
    having?: CustoPorSkuNameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustoPorSkuNameCountAggregateInputType | true
    _avg?: CustoPorSkuNameAvgAggregateInputType
    _sum?: CustoPorSkuNameSumAggregateInputType
    _min?: CustoPorSkuNameMinAggregateInputType
    _max?: CustoPorSkuNameMaxAggregateInputType
  }

  export type CustoPorSkuNameGroupByOutputType = {
    tenancy_name: string | null
    tenant_id: string
    sku_name: string
    cost_mes: number | null
    currency: string | null
    usage_mes: number | null
    time_started: Date
    time_ended: Date | null
    _count: CustoPorSkuNameCountAggregateOutputType | null
    _avg: CustoPorSkuNameAvgAggregateOutputType | null
    _sum: CustoPorSkuNameSumAggregateOutputType | null
    _min: CustoPorSkuNameMinAggregateOutputType | null
    _max: CustoPorSkuNameMaxAggregateOutputType | null
  }

  type GetCustoPorSkuNameGroupByPayload<T extends CustoPorSkuNameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustoPorSkuNameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustoPorSkuNameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustoPorSkuNameGroupByOutputType[P]>
            : GetScalarType<T[P], CustoPorSkuNameGroupByOutputType[P]>
        }
      >
    >


  export type CustoPorSkuNameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenant_id?: boolean
    sku_name?: boolean
    cost_mes?: boolean
    currency?: boolean
    usage_mes?: boolean
    time_started?: boolean
    time_ended?: boolean
  }, ExtArgs["result"]["custoPorSkuName"]>



  export type CustoPorSkuNameSelectScalar = {
    tenancy_name?: boolean
    tenant_id?: boolean
    sku_name?: boolean
    cost_mes?: boolean
    currency?: boolean
    usage_mes?: boolean
    time_started?: boolean
    time_ended?: boolean
  }

  export type CustoPorSkuNameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenant_id" | "sku_name" | "cost_mes" | "currency" | "usage_mes" | "time_started" | "time_ended", ExtArgs["result"]["custoPorSkuName"]>

  export type $CustoPorSkuNamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustoPorSkuName"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string | null
      tenant_id: string
      sku_name: string
      cost_mes: number | null
      currency: string | null
      usage_mes: number | null
      time_started: Date
      time_ended: Date | null
    }, ExtArgs["result"]["custoPorSkuName"]>
    composites: {}
  }

  type CustoPorSkuNameGetPayload<S extends boolean | null | undefined | CustoPorSkuNameDefaultArgs> = $Result.GetResult<Prisma.$CustoPorSkuNamePayload, S>

  type CustoPorSkuNameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustoPorSkuNameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustoPorSkuNameCountAggregateInputType | true
    }

  export interface CustoPorSkuNameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustoPorSkuName'], meta: { name: 'CustoPorSkuName' } }
    /**
     * Find zero or one CustoPorSkuName that matches the filter.
     * @param {CustoPorSkuNameFindUniqueArgs} args - Arguments to find a CustoPorSkuName
     * @example
     * // Get one CustoPorSkuName
     * const custoPorSkuName = await prisma.custoPorSkuName.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustoPorSkuNameFindUniqueArgs>(args: SelectSubset<T, CustoPorSkuNameFindUniqueArgs<ExtArgs>>): Prisma__CustoPorSkuNameClient<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustoPorSkuName that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustoPorSkuNameFindUniqueOrThrowArgs} args - Arguments to find a CustoPorSkuName
     * @example
     * // Get one CustoPorSkuName
     * const custoPorSkuName = await prisma.custoPorSkuName.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustoPorSkuNameFindUniqueOrThrowArgs>(args: SelectSubset<T, CustoPorSkuNameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustoPorSkuNameClient<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoPorSkuName that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorSkuNameFindFirstArgs} args - Arguments to find a CustoPorSkuName
     * @example
     * // Get one CustoPorSkuName
     * const custoPorSkuName = await prisma.custoPorSkuName.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustoPorSkuNameFindFirstArgs>(args?: SelectSubset<T, CustoPorSkuNameFindFirstArgs<ExtArgs>>): Prisma__CustoPorSkuNameClient<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustoPorSkuName that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorSkuNameFindFirstOrThrowArgs} args - Arguments to find a CustoPorSkuName
     * @example
     * // Get one CustoPorSkuName
     * const custoPorSkuName = await prisma.custoPorSkuName.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustoPorSkuNameFindFirstOrThrowArgs>(args?: SelectSubset<T, CustoPorSkuNameFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustoPorSkuNameClient<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustoPorSkuNames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorSkuNameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustoPorSkuNames
     * const custoPorSkuNames = await prisma.custoPorSkuName.findMany()
     * 
     * // Get first 10 CustoPorSkuNames
     * const custoPorSkuNames = await prisma.custoPorSkuName.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const custoPorSkuNameWithTenancy_nameOnly = await prisma.custoPorSkuName.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends CustoPorSkuNameFindManyArgs>(args?: SelectSubset<T, CustoPorSkuNameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustoPorSkuName.
     * @param {CustoPorSkuNameCreateArgs} args - Arguments to create a CustoPorSkuName.
     * @example
     * // Create one CustoPorSkuName
     * const CustoPorSkuName = await prisma.custoPorSkuName.create({
     *   data: {
     *     // ... data to create a CustoPorSkuName
     *   }
     * })
     * 
     */
    create<T extends CustoPorSkuNameCreateArgs>(args: SelectSubset<T, CustoPorSkuNameCreateArgs<ExtArgs>>): Prisma__CustoPorSkuNameClient<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustoPorSkuNames.
     * @param {CustoPorSkuNameCreateManyArgs} args - Arguments to create many CustoPorSkuNames.
     * @example
     * // Create many CustoPorSkuNames
     * const custoPorSkuName = await prisma.custoPorSkuName.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustoPorSkuNameCreateManyArgs>(args?: SelectSubset<T, CustoPorSkuNameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustoPorSkuName.
     * @param {CustoPorSkuNameDeleteArgs} args - Arguments to delete one CustoPorSkuName.
     * @example
     * // Delete one CustoPorSkuName
     * const CustoPorSkuName = await prisma.custoPorSkuName.delete({
     *   where: {
     *     // ... filter to delete one CustoPorSkuName
     *   }
     * })
     * 
     */
    delete<T extends CustoPorSkuNameDeleteArgs>(args: SelectSubset<T, CustoPorSkuNameDeleteArgs<ExtArgs>>): Prisma__CustoPorSkuNameClient<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustoPorSkuName.
     * @param {CustoPorSkuNameUpdateArgs} args - Arguments to update one CustoPorSkuName.
     * @example
     * // Update one CustoPorSkuName
     * const custoPorSkuName = await prisma.custoPorSkuName.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustoPorSkuNameUpdateArgs>(args: SelectSubset<T, CustoPorSkuNameUpdateArgs<ExtArgs>>): Prisma__CustoPorSkuNameClient<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustoPorSkuNames.
     * @param {CustoPorSkuNameDeleteManyArgs} args - Arguments to filter CustoPorSkuNames to delete.
     * @example
     * // Delete a few CustoPorSkuNames
     * const { count } = await prisma.custoPorSkuName.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustoPorSkuNameDeleteManyArgs>(args?: SelectSubset<T, CustoPorSkuNameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustoPorSkuNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorSkuNameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustoPorSkuNames
     * const custoPorSkuName = await prisma.custoPorSkuName.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustoPorSkuNameUpdateManyArgs>(args: SelectSubset<T, CustoPorSkuNameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustoPorSkuName.
     * @param {CustoPorSkuNameUpsertArgs} args - Arguments to update or create a CustoPorSkuName.
     * @example
     * // Update or create a CustoPorSkuName
     * const custoPorSkuName = await prisma.custoPorSkuName.upsert({
     *   create: {
     *     // ... data to create a CustoPorSkuName
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustoPorSkuName we want to update
     *   }
     * })
     */
    upsert<T extends CustoPorSkuNameUpsertArgs>(args: SelectSubset<T, CustoPorSkuNameUpsertArgs<ExtArgs>>): Prisma__CustoPorSkuNameClient<$Result.GetResult<Prisma.$CustoPorSkuNamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustoPorSkuNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorSkuNameCountArgs} args - Arguments to filter CustoPorSkuNames to count.
     * @example
     * // Count the number of CustoPorSkuNames
     * const count = await prisma.custoPorSkuName.count({
     *   where: {
     *     // ... the filter for the CustoPorSkuNames we want to count
     *   }
     * })
    **/
    count<T extends CustoPorSkuNameCountArgs>(
      args?: Subset<T, CustoPorSkuNameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustoPorSkuNameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustoPorSkuName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorSkuNameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustoPorSkuNameAggregateArgs>(args: Subset<T, CustoPorSkuNameAggregateArgs>): Prisma.PrismaPromise<GetCustoPorSkuNameAggregateType<T>>

    /**
     * Group by CustoPorSkuName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoPorSkuNameGroupByArgs} args - Group by arguments.
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
      T extends CustoPorSkuNameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustoPorSkuNameGroupByArgs['orderBy'] }
        : { orderBy?: CustoPorSkuNameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustoPorSkuNameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustoPorSkuNameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustoPorSkuName model
   */
  readonly fields: CustoPorSkuNameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustoPorSkuName.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustoPorSkuNameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CustoPorSkuName model
   */
  interface CustoPorSkuNameFieldRefs {
    readonly tenancy_name: FieldRef<"CustoPorSkuName", 'String'>
    readonly tenant_id: FieldRef<"CustoPorSkuName", 'String'>
    readonly sku_name: FieldRef<"CustoPorSkuName", 'String'>
    readonly cost_mes: FieldRef<"CustoPorSkuName", 'Float'>
    readonly currency: FieldRef<"CustoPorSkuName", 'String'>
    readonly usage_mes: FieldRef<"CustoPorSkuName", 'Float'>
    readonly time_started: FieldRef<"CustoPorSkuName", 'DateTime'>
    readonly time_ended: FieldRef<"CustoPorSkuName", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustoPorSkuName findUnique
   */
  export type CustoPorSkuNameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorSkuName to fetch.
     */
    where: CustoPorSkuNameWhereUniqueInput
  }

  /**
   * CustoPorSkuName findUniqueOrThrow
   */
  export type CustoPorSkuNameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorSkuName to fetch.
     */
    where: CustoPorSkuNameWhereUniqueInput
  }

  /**
   * CustoPorSkuName findFirst
   */
  export type CustoPorSkuNameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorSkuName to fetch.
     */
    where?: CustoPorSkuNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPorSkuNames to fetch.
     */
    orderBy?: CustoPorSkuNameOrderByWithRelationInput | CustoPorSkuNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoPorSkuNames.
     */
    cursor?: CustoPorSkuNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPorSkuNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPorSkuNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoPorSkuNames.
     */
    distinct?: CustoPorSkuNameScalarFieldEnum | CustoPorSkuNameScalarFieldEnum[]
  }

  /**
   * CustoPorSkuName findFirstOrThrow
   */
  export type CustoPorSkuNameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorSkuName to fetch.
     */
    where?: CustoPorSkuNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPorSkuNames to fetch.
     */
    orderBy?: CustoPorSkuNameOrderByWithRelationInput | CustoPorSkuNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustoPorSkuNames.
     */
    cursor?: CustoPorSkuNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPorSkuNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPorSkuNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustoPorSkuNames.
     */
    distinct?: CustoPorSkuNameScalarFieldEnum | CustoPorSkuNameScalarFieldEnum[]
  }

  /**
   * CustoPorSkuName findMany
   */
  export type CustoPorSkuNameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * Filter, which CustoPorSkuNames to fetch.
     */
    where?: CustoPorSkuNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustoPorSkuNames to fetch.
     */
    orderBy?: CustoPorSkuNameOrderByWithRelationInput | CustoPorSkuNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustoPorSkuNames.
     */
    cursor?: CustoPorSkuNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustoPorSkuNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustoPorSkuNames.
     */
    skip?: number
    distinct?: CustoPorSkuNameScalarFieldEnum | CustoPorSkuNameScalarFieldEnum[]
  }

  /**
   * CustoPorSkuName create
   */
  export type CustoPorSkuNameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * The data needed to create a CustoPorSkuName.
     */
    data?: XOR<CustoPorSkuNameCreateInput, CustoPorSkuNameUncheckedCreateInput>
  }

  /**
   * CustoPorSkuName createMany
   */
  export type CustoPorSkuNameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustoPorSkuNames.
     */
    data: CustoPorSkuNameCreateManyInput | CustoPorSkuNameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustoPorSkuName update
   */
  export type CustoPorSkuNameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * The data needed to update a CustoPorSkuName.
     */
    data: XOR<CustoPorSkuNameUpdateInput, CustoPorSkuNameUncheckedUpdateInput>
    /**
     * Choose, which CustoPorSkuName to update.
     */
    where: CustoPorSkuNameWhereUniqueInput
  }

  /**
   * CustoPorSkuName updateMany
   */
  export type CustoPorSkuNameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustoPorSkuNames.
     */
    data: XOR<CustoPorSkuNameUpdateManyMutationInput, CustoPorSkuNameUncheckedUpdateManyInput>
    /**
     * Filter which CustoPorSkuNames to update
     */
    where?: CustoPorSkuNameWhereInput
    /**
     * Limit how many CustoPorSkuNames to update.
     */
    limit?: number
  }

  /**
   * CustoPorSkuName upsert
   */
  export type CustoPorSkuNameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * The filter to search for the CustoPorSkuName to update in case it exists.
     */
    where: CustoPorSkuNameWhereUniqueInput
    /**
     * In case the CustoPorSkuName found by the `where` argument doesn't exist, create a new CustoPorSkuName with this data.
     */
    create: XOR<CustoPorSkuNameCreateInput, CustoPorSkuNameUncheckedCreateInput>
    /**
     * In case the CustoPorSkuName was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustoPorSkuNameUpdateInput, CustoPorSkuNameUncheckedUpdateInput>
  }

  /**
   * CustoPorSkuName delete
   */
  export type CustoPorSkuNameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
    /**
     * Filter which CustoPorSkuName to delete.
     */
    where: CustoPorSkuNameWhereUniqueInput
  }

  /**
   * CustoPorSkuName deleteMany
   */
  export type CustoPorSkuNameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustoPorSkuNames to delete
     */
    where?: CustoPorSkuNameWhereInput
    /**
     * Limit how many CustoPorSkuNames to delete.
     */
    limit?: number
  }

  /**
   * CustoPorSkuName without action
   */
  export type CustoPorSkuNameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustoPorSkuName
     */
    select?: CustoPorSkuNameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustoPorSkuName
     */
    omit?: CustoPorSkuNameOmit<ExtArgs> | null
  }


  /**
   * Model IdentityUsers
   */

  export type AggregateIdentityUsers = {
    _count: IdentityUsersCountAggregateOutputType | null
    _avg: IdentityUsersAvgAggregateOutputType | null
    _sum: IdentityUsersSumAggregateOutputType | null
    _min: IdentityUsersMinAggregateOutputType | null
    _max: IdentityUsersMaxAggregateOutputType | null
  }

  export type IdentityUsersAvgAggregateOutputType = {
    id: number | null
  }

  export type IdentityUsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type IdentityUsersMinAggregateOutputType = {
    id: bigint | null
    is_mfa_activated: boolean | null
    lifecycle_state: string | null
    time_created: Date | null
    last_successful_login_time: Date | null
    email: string | null
    email_verified: string | null
    can_use_api_keys: boolean | null
    can_use_auth_tokens: boolean | null
    can_use_console_password: boolean | null
    can_use_customer_secret_keys: boolean | null
    can_use_db_credentials: boolean | null
    can_use_o_auth2_client_credentials: boolean | null
    can_use_smtp_credentials: boolean | null
    identity_provider_id: string | null
    tenancy_name: string | null
  }

  export type IdentityUsersMaxAggregateOutputType = {
    id: bigint | null
    is_mfa_activated: boolean | null
    lifecycle_state: string | null
    time_created: Date | null
    last_successful_login_time: Date | null
    email: string | null
    email_verified: string | null
    can_use_api_keys: boolean | null
    can_use_auth_tokens: boolean | null
    can_use_console_password: boolean | null
    can_use_customer_secret_keys: boolean | null
    can_use_db_credentials: boolean | null
    can_use_o_auth2_client_credentials: boolean | null
    can_use_smtp_credentials: boolean | null
    identity_provider_id: string | null
    tenancy_name: string | null
  }

  export type IdentityUsersCountAggregateOutputType = {
    id: number
    is_mfa_activated: number
    lifecycle_state: number
    time_created: number
    last_successful_login_time: number
    email: number
    email_verified: number
    can_use_api_keys: number
    can_use_auth_tokens: number
    can_use_console_password: number
    can_use_customer_secret_keys: number
    can_use_db_credentials: number
    can_use_o_auth2_client_credentials: number
    can_use_smtp_credentials: number
    identity_provider_id: number
    tenancy_name: number
    _all: number
  }


  export type IdentityUsersAvgAggregateInputType = {
    id?: true
  }

  export type IdentityUsersSumAggregateInputType = {
    id?: true
  }

  export type IdentityUsersMinAggregateInputType = {
    id?: true
    is_mfa_activated?: true
    lifecycle_state?: true
    time_created?: true
    last_successful_login_time?: true
    email?: true
    email_verified?: true
    can_use_api_keys?: true
    can_use_auth_tokens?: true
    can_use_console_password?: true
    can_use_customer_secret_keys?: true
    can_use_db_credentials?: true
    can_use_o_auth2_client_credentials?: true
    can_use_smtp_credentials?: true
    identity_provider_id?: true
    tenancy_name?: true
  }

  export type IdentityUsersMaxAggregateInputType = {
    id?: true
    is_mfa_activated?: true
    lifecycle_state?: true
    time_created?: true
    last_successful_login_time?: true
    email?: true
    email_verified?: true
    can_use_api_keys?: true
    can_use_auth_tokens?: true
    can_use_console_password?: true
    can_use_customer_secret_keys?: true
    can_use_db_credentials?: true
    can_use_o_auth2_client_credentials?: true
    can_use_smtp_credentials?: true
    identity_provider_id?: true
    tenancy_name?: true
  }

  export type IdentityUsersCountAggregateInputType = {
    id?: true
    is_mfa_activated?: true
    lifecycle_state?: true
    time_created?: true
    last_successful_login_time?: true
    email?: true
    email_verified?: true
    can_use_api_keys?: true
    can_use_auth_tokens?: true
    can_use_console_password?: true
    can_use_customer_secret_keys?: true
    can_use_db_credentials?: true
    can_use_o_auth2_client_credentials?: true
    can_use_smtp_credentials?: true
    identity_provider_id?: true
    tenancy_name?: true
    _all?: true
  }

  export type IdentityUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentityUsers to aggregate.
     */
    where?: IdentityUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityUsers to fetch.
     */
    orderBy?: IdentityUsersOrderByWithRelationInput | IdentityUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdentityUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdentityUsers
    **/
    _count?: true | IdentityUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdentityUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdentityUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentityUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentityUsersMaxAggregateInputType
  }

  export type GetIdentityUsersAggregateType<T extends IdentityUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentityUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentityUsers[P]>
      : GetScalarType<T[P], AggregateIdentityUsers[P]>
  }




  export type IdentityUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityUsersWhereInput
    orderBy?: IdentityUsersOrderByWithAggregationInput | IdentityUsersOrderByWithAggregationInput[]
    by: IdentityUsersScalarFieldEnum[] | IdentityUsersScalarFieldEnum
    having?: IdentityUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentityUsersCountAggregateInputType | true
    _avg?: IdentityUsersAvgAggregateInputType
    _sum?: IdentityUsersSumAggregateInputType
    _min?: IdentityUsersMinAggregateInputType
    _max?: IdentityUsersMaxAggregateInputType
  }

  export type IdentityUsersGroupByOutputType = {
    id: bigint
    is_mfa_activated: boolean | null
    lifecycle_state: string | null
    time_created: Date | null
    last_successful_login_time: Date | null
    email: string | null
    email_verified: string | null
    can_use_api_keys: boolean | null
    can_use_auth_tokens: boolean | null
    can_use_console_password: boolean | null
    can_use_customer_secret_keys: boolean | null
    can_use_db_credentials: boolean | null
    can_use_o_auth2_client_credentials: boolean | null
    can_use_smtp_credentials: boolean | null
    identity_provider_id: string | null
    tenancy_name: string | null
    _count: IdentityUsersCountAggregateOutputType | null
    _avg: IdentityUsersAvgAggregateOutputType | null
    _sum: IdentityUsersSumAggregateOutputType | null
    _min: IdentityUsersMinAggregateOutputType | null
    _max: IdentityUsersMaxAggregateOutputType | null
  }

  type GetIdentityUsersGroupByPayload<T extends IdentityUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentityUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentityUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentityUsersGroupByOutputType[P]>
            : GetScalarType<T[P], IdentityUsersGroupByOutputType[P]>
        }
      >
    >


  export type IdentityUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_mfa_activated?: boolean
    lifecycle_state?: boolean
    time_created?: boolean
    last_successful_login_time?: boolean
    email?: boolean
    email_verified?: boolean
    can_use_api_keys?: boolean
    can_use_auth_tokens?: boolean
    can_use_console_password?: boolean
    can_use_customer_secret_keys?: boolean
    can_use_db_credentials?: boolean
    can_use_o_auth2_client_credentials?: boolean
    can_use_smtp_credentials?: boolean
    identity_provider_id?: boolean
    tenancy_name?: boolean
  }, ExtArgs["result"]["identityUsers"]>



  export type IdentityUsersSelectScalar = {
    id?: boolean
    is_mfa_activated?: boolean
    lifecycle_state?: boolean
    time_created?: boolean
    last_successful_login_time?: boolean
    email?: boolean
    email_verified?: boolean
    can_use_api_keys?: boolean
    can_use_auth_tokens?: boolean
    can_use_console_password?: boolean
    can_use_customer_secret_keys?: boolean
    can_use_db_credentials?: boolean
    can_use_o_auth2_client_credentials?: boolean
    can_use_smtp_credentials?: boolean
    identity_provider_id?: boolean
    tenancy_name?: boolean
  }

  export type IdentityUsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "is_mfa_activated" | "lifecycle_state" | "time_created" | "last_successful_login_time" | "email" | "email_verified" | "can_use_api_keys" | "can_use_auth_tokens" | "can_use_console_password" | "can_use_customer_secret_keys" | "can_use_db_credentials" | "can_use_o_auth2_client_credentials" | "can_use_smtp_credentials" | "identity_provider_id" | "tenancy_name", ExtArgs["result"]["identityUsers"]>

  export type $IdentityUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdentityUsers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      is_mfa_activated: boolean | null
      lifecycle_state: string | null
      time_created: Date | null
      last_successful_login_time: Date | null
      email: string | null
      email_verified: string | null
      can_use_api_keys: boolean | null
      can_use_auth_tokens: boolean | null
      can_use_console_password: boolean | null
      can_use_customer_secret_keys: boolean | null
      can_use_db_credentials: boolean | null
      can_use_o_auth2_client_credentials: boolean | null
      can_use_smtp_credentials: boolean | null
      identity_provider_id: string | null
      tenancy_name: string | null
    }, ExtArgs["result"]["identityUsers"]>
    composites: {}
  }

  type IdentityUsersGetPayload<S extends boolean | null | undefined | IdentityUsersDefaultArgs> = $Result.GetResult<Prisma.$IdentityUsersPayload, S>

  type IdentityUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdentityUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentityUsersCountAggregateInputType | true
    }

  export interface IdentityUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdentityUsers'], meta: { name: 'IdentityUsers' } }
    /**
     * Find zero or one IdentityUsers that matches the filter.
     * @param {IdentityUsersFindUniqueArgs} args - Arguments to find a IdentityUsers
     * @example
     * // Get one IdentityUsers
     * const identityUsers = await prisma.identityUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdentityUsersFindUniqueArgs>(args: SelectSubset<T, IdentityUsersFindUniqueArgs<ExtArgs>>): Prisma__IdentityUsersClient<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdentityUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdentityUsersFindUniqueOrThrowArgs} args - Arguments to find a IdentityUsers
     * @example
     * // Get one IdentityUsers
     * const identityUsers = await prisma.identityUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdentityUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, IdentityUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdentityUsersClient<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUsersFindFirstArgs} args - Arguments to find a IdentityUsers
     * @example
     * // Get one IdentityUsers
     * const identityUsers = await prisma.identityUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdentityUsersFindFirstArgs>(args?: SelectSubset<T, IdentityUsersFindFirstArgs<ExtArgs>>): Prisma__IdentityUsersClient<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUsersFindFirstOrThrowArgs} args - Arguments to find a IdentityUsers
     * @example
     * // Get one IdentityUsers
     * const identityUsers = await prisma.identityUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdentityUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, IdentityUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdentityUsersClient<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdentityUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdentityUsers
     * const identityUsers = await prisma.identityUsers.findMany()
     * 
     * // Get first 10 IdentityUsers
     * const identityUsers = await prisma.identityUsers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identityUsersWithIdOnly = await prisma.identityUsers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdentityUsersFindManyArgs>(args?: SelectSubset<T, IdentityUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdentityUsers.
     * @param {IdentityUsersCreateArgs} args - Arguments to create a IdentityUsers.
     * @example
     * // Create one IdentityUsers
     * const IdentityUsers = await prisma.identityUsers.create({
     *   data: {
     *     // ... data to create a IdentityUsers
     *   }
     * })
     * 
     */
    create<T extends IdentityUsersCreateArgs>(args: SelectSubset<T, IdentityUsersCreateArgs<ExtArgs>>): Prisma__IdentityUsersClient<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdentityUsers.
     * @param {IdentityUsersCreateManyArgs} args - Arguments to create many IdentityUsers.
     * @example
     * // Create many IdentityUsers
     * const identityUsers = await prisma.identityUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdentityUsersCreateManyArgs>(args?: SelectSubset<T, IdentityUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IdentityUsers.
     * @param {IdentityUsersDeleteArgs} args - Arguments to delete one IdentityUsers.
     * @example
     * // Delete one IdentityUsers
     * const IdentityUsers = await prisma.identityUsers.delete({
     *   where: {
     *     // ... filter to delete one IdentityUsers
     *   }
     * })
     * 
     */
    delete<T extends IdentityUsersDeleteArgs>(args: SelectSubset<T, IdentityUsersDeleteArgs<ExtArgs>>): Prisma__IdentityUsersClient<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdentityUsers.
     * @param {IdentityUsersUpdateArgs} args - Arguments to update one IdentityUsers.
     * @example
     * // Update one IdentityUsers
     * const identityUsers = await prisma.identityUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdentityUsersUpdateArgs>(args: SelectSubset<T, IdentityUsersUpdateArgs<ExtArgs>>): Prisma__IdentityUsersClient<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdentityUsers.
     * @param {IdentityUsersDeleteManyArgs} args - Arguments to filter IdentityUsers to delete.
     * @example
     * // Delete a few IdentityUsers
     * const { count } = await prisma.identityUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdentityUsersDeleteManyArgs>(args?: SelectSubset<T, IdentityUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentityUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdentityUsers
     * const identityUsers = await prisma.identityUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdentityUsersUpdateManyArgs>(args: SelectSubset<T, IdentityUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IdentityUsers.
     * @param {IdentityUsersUpsertArgs} args - Arguments to update or create a IdentityUsers.
     * @example
     * // Update or create a IdentityUsers
     * const identityUsers = await prisma.identityUsers.upsert({
     *   create: {
     *     // ... data to create a IdentityUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdentityUsers we want to update
     *   }
     * })
     */
    upsert<T extends IdentityUsersUpsertArgs>(args: SelectSubset<T, IdentityUsersUpsertArgs<ExtArgs>>): Prisma__IdentityUsersClient<$Result.GetResult<Prisma.$IdentityUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdentityUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUsersCountArgs} args - Arguments to filter IdentityUsers to count.
     * @example
     * // Count the number of IdentityUsers
     * const count = await prisma.identityUsers.count({
     *   where: {
     *     // ... the filter for the IdentityUsers we want to count
     *   }
     * })
    **/
    count<T extends IdentityUsersCountArgs>(
      args?: Subset<T, IdentityUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentityUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdentityUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdentityUsersAggregateArgs>(args: Subset<T, IdentityUsersAggregateArgs>): Prisma.PrismaPromise<GetIdentityUsersAggregateType<T>>

    /**
     * Group by IdentityUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUsersGroupByArgs} args - Group by arguments.
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
      T extends IdentityUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdentityUsersGroupByArgs['orderBy'] }
        : { orderBy?: IdentityUsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdentityUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentityUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdentityUsers model
   */
  readonly fields: IdentityUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdentityUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdentityUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the IdentityUsers model
   */
  interface IdentityUsersFieldRefs {
    readonly id: FieldRef<"IdentityUsers", 'BigInt'>
    readonly is_mfa_activated: FieldRef<"IdentityUsers", 'Boolean'>
    readonly lifecycle_state: FieldRef<"IdentityUsers", 'String'>
    readonly time_created: FieldRef<"IdentityUsers", 'DateTime'>
    readonly last_successful_login_time: FieldRef<"IdentityUsers", 'DateTime'>
    readonly email: FieldRef<"IdentityUsers", 'String'>
    readonly email_verified: FieldRef<"IdentityUsers", 'String'>
    readonly can_use_api_keys: FieldRef<"IdentityUsers", 'Boolean'>
    readonly can_use_auth_tokens: FieldRef<"IdentityUsers", 'Boolean'>
    readonly can_use_console_password: FieldRef<"IdentityUsers", 'Boolean'>
    readonly can_use_customer_secret_keys: FieldRef<"IdentityUsers", 'Boolean'>
    readonly can_use_db_credentials: FieldRef<"IdentityUsers", 'Boolean'>
    readonly can_use_o_auth2_client_credentials: FieldRef<"IdentityUsers", 'Boolean'>
    readonly can_use_smtp_credentials: FieldRef<"IdentityUsers", 'Boolean'>
    readonly identity_provider_id: FieldRef<"IdentityUsers", 'String'>
    readonly tenancy_name: FieldRef<"IdentityUsers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IdentityUsers findUnique
   */
  export type IdentityUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * Filter, which IdentityUsers to fetch.
     */
    where: IdentityUsersWhereUniqueInput
  }

  /**
   * IdentityUsers findUniqueOrThrow
   */
  export type IdentityUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * Filter, which IdentityUsers to fetch.
     */
    where: IdentityUsersWhereUniqueInput
  }

  /**
   * IdentityUsers findFirst
   */
  export type IdentityUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * Filter, which IdentityUsers to fetch.
     */
    where?: IdentityUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityUsers to fetch.
     */
    orderBy?: IdentityUsersOrderByWithRelationInput | IdentityUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentityUsers.
     */
    cursor?: IdentityUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentityUsers.
     */
    distinct?: IdentityUsersScalarFieldEnum | IdentityUsersScalarFieldEnum[]
  }

  /**
   * IdentityUsers findFirstOrThrow
   */
  export type IdentityUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * Filter, which IdentityUsers to fetch.
     */
    where?: IdentityUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityUsers to fetch.
     */
    orderBy?: IdentityUsersOrderByWithRelationInput | IdentityUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentityUsers.
     */
    cursor?: IdentityUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentityUsers.
     */
    distinct?: IdentityUsersScalarFieldEnum | IdentityUsersScalarFieldEnum[]
  }

  /**
   * IdentityUsers findMany
   */
  export type IdentityUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * Filter, which IdentityUsers to fetch.
     */
    where?: IdentityUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityUsers to fetch.
     */
    orderBy?: IdentityUsersOrderByWithRelationInput | IdentityUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdentityUsers.
     */
    cursor?: IdentityUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityUsers.
     */
    skip?: number
    distinct?: IdentityUsersScalarFieldEnum | IdentityUsersScalarFieldEnum[]
  }

  /**
   * IdentityUsers create
   */
  export type IdentityUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * The data needed to create a IdentityUsers.
     */
    data?: XOR<IdentityUsersCreateInput, IdentityUsersUncheckedCreateInput>
  }

  /**
   * IdentityUsers createMany
   */
  export type IdentityUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdentityUsers.
     */
    data: IdentityUsersCreateManyInput | IdentityUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdentityUsers update
   */
  export type IdentityUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * The data needed to update a IdentityUsers.
     */
    data: XOR<IdentityUsersUpdateInput, IdentityUsersUncheckedUpdateInput>
    /**
     * Choose, which IdentityUsers to update.
     */
    where: IdentityUsersWhereUniqueInput
  }

  /**
   * IdentityUsers updateMany
   */
  export type IdentityUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdentityUsers.
     */
    data: XOR<IdentityUsersUpdateManyMutationInput, IdentityUsersUncheckedUpdateManyInput>
    /**
     * Filter which IdentityUsers to update
     */
    where?: IdentityUsersWhereInput
    /**
     * Limit how many IdentityUsers to update.
     */
    limit?: number
  }

  /**
   * IdentityUsers upsert
   */
  export type IdentityUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * The filter to search for the IdentityUsers to update in case it exists.
     */
    where: IdentityUsersWhereUniqueInput
    /**
     * In case the IdentityUsers found by the `where` argument doesn't exist, create a new IdentityUsers with this data.
     */
    create: XOR<IdentityUsersCreateInput, IdentityUsersUncheckedCreateInput>
    /**
     * In case the IdentityUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdentityUsersUpdateInput, IdentityUsersUncheckedUpdateInput>
  }

  /**
   * IdentityUsers delete
   */
  export type IdentityUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
    /**
     * Filter which IdentityUsers to delete.
     */
    where: IdentityUsersWhereUniqueInput
  }

  /**
   * IdentityUsers deleteMany
   */
  export type IdentityUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentityUsers to delete
     */
    where?: IdentityUsersWhereInput
    /**
     * Limit how many IdentityUsers to delete.
     */
    limit?: number
  }

  /**
   * IdentityUsers without action
   */
  export type IdentityUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityUsers
     */
    select?: IdentityUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityUsers
     */
    omit?: IdentityUsersOmit<ExtArgs> | null
  }


  /**
   * Model VolumesBackup
   */

  export type AggregateVolumesBackup = {
    _count: VolumesBackupCountAggregateOutputType | null
    _avg: VolumesBackupAvgAggregateOutputType | null
    _sum: VolumesBackupSumAggregateOutputType | null
    _min: VolumesBackupMinAggregateOutputType | null
    _max: VolumesBackupMaxAggregateOutputType | null
  }

  export type VolumesBackupAvgAggregateOutputType = {
    id: number | null
    sizeInGbs: number | null
    vpusPerGb: number | null
    totalDias: number | null
    uniqueSizeInGbs: number | null
    custoBackupDia: Decimal | null
    custoBackupMes: Decimal | null
    custoBackupHora: Decimal | null
  }

  export type VolumesBackupSumAggregateOutputType = {
    id: bigint | null
    sizeInGbs: number | null
    vpusPerGb: number | null
    totalDias: number | null
    uniqueSizeInGbs: number | null
    custoBackupDia: Decimal | null
    custoBackupMes: Decimal | null
    custoBackupHora: Decimal | null
  }

  export type VolumesBackupMinAggregateOutputType = {
    id: bigint | null
    tenancyName: string | null
    displayName: string | null
    sizeInGbs: number | null
    vpusPerGb: number | null
    volumeId: string | null
    backupId: string | null
    backupDisplayName: string | null
    timeCreated: Date | null
    backupType: string | null
    totalDias: number | null
    uniqueSizeInGbs: number | null
    custoBackupDia: Decimal | null
    custoBackupMes: Decimal | null
    custoBackupHora: Decimal | null
  }

  export type VolumesBackupMaxAggregateOutputType = {
    id: bigint | null
    tenancyName: string | null
    displayName: string | null
    sizeInGbs: number | null
    vpusPerGb: number | null
    volumeId: string | null
    backupId: string | null
    backupDisplayName: string | null
    timeCreated: Date | null
    backupType: string | null
    totalDias: number | null
    uniqueSizeInGbs: number | null
    custoBackupDia: Decimal | null
    custoBackupMes: Decimal | null
    custoBackupHora: Decimal | null
  }

  export type VolumesBackupCountAggregateOutputType = {
    id: number
    tenancyName: number
    displayName: number
    sizeInGbs: number
    vpusPerGb: number
    volumeId: number
    backupId: number
    backupDisplayName: number
    timeCreated: number
    backupType: number
    totalDias: number
    uniqueSizeInGbs: number
    custoBackupDia: number
    custoBackupMes: number
    custoBackupHora: number
    _all: number
  }


  export type VolumesBackupAvgAggregateInputType = {
    id?: true
    sizeInGbs?: true
    vpusPerGb?: true
    totalDias?: true
    uniqueSizeInGbs?: true
    custoBackupDia?: true
    custoBackupMes?: true
    custoBackupHora?: true
  }

  export type VolumesBackupSumAggregateInputType = {
    id?: true
    sizeInGbs?: true
    vpusPerGb?: true
    totalDias?: true
    uniqueSizeInGbs?: true
    custoBackupDia?: true
    custoBackupMes?: true
    custoBackupHora?: true
  }

  export type VolumesBackupMinAggregateInputType = {
    id?: true
    tenancyName?: true
    displayName?: true
    sizeInGbs?: true
    vpusPerGb?: true
    volumeId?: true
    backupId?: true
    backupDisplayName?: true
    timeCreated?: true
    backupType?: true
    totalDias?: true
    uniqueSizeInGbs?: true
    custoBackupDia?: true
    custoBackupMes?: true
    custoBackupHora?: true
  }

  export type VolumesBackupMaxAggregateInputType = {
    id?: true
    tenancyName?: true
    displayName?: true
    sizeInGbs?: true
    vpusPerGb?: true
    volumeId?: true
    backupId?: true
    backupDisplayName?: true
    timeCreated?: true
    backupType?: true
    totalDias?: true
    uniqueSizeInGbs?: true
    custoBackupDia?: true
    custoBackupMes?: true
    custoBackupHora?: true
  }

  export type VolumesBackupCountAggregateInputType = {
    id?: true
    tenancyName?: true
    displayName?: true
    sizeInGbs?: true
    vpusPerGb?: true
    volumeId?: true
    backupId?: true
    backupDisplayName?: true
    timeCreated?: true
    backupType?: true
    totalDias?: true
    uniqueSizeInGbs?: true
    custoBackupDia?: true
    custoBackupMes?: true
    custoBackupHora?: true
    _all?: true
  }

  export type VolumesBackupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolumesBackup to aggregate.
     */
    where?: VolumesBackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolumesBackups to fetch.
     */
    orderBy?: VolumesBackupOrderByWithRelationInput | VolumesBackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolumesBackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolumesBackups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolumesBackups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VolumesBackups
    **/
    _count?: true | VolumesBackupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolumesBackupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolumesBackupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolumesBackupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolumesBackupMaxAggregateInputType
  }

  export type GetVolumesBackupAggregateType<T extends VolumesBackupAggregateArgs> = {
        [P in keyof T & keyof AggregateVolumesBackup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolumesBackup[P]>
      : GetScalarType<T[P], AggregateVolumesBackup[P]>
  }




  export type VolumesBackupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolumesBackupWhereInput
    orderBy?: VolumesBackupOrderByWithAggregationInput | VolumesBackupOrderByWithAggregationInput[]
    by: VolumesBackupScalarFieldEnum[] | VolumesBackupScalarFieldEnum
    having?: VolumesBackupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolumesBackupCountAggregateInputType | true
    _avg?: VolumesBackupAvgAggregateInputType
    _sum?: VolumesBackupSumAggregateInputType
    _min?: VolumesBackupMinAggregateInputType
    _max?: VolumesBackupMaxAggregateInputType
  }

  export type VolumesBackupGroupByOutputType = {
    id: bigint
    tenancyName: string | null
    displayName: string | null
    sizeInGbs: number | null
    vpusPerGb: number | null
    volumeId: string | null
    backupId: string | null
    backupDisplayName: string | null
    timeCreated: Date | null
    backupType: string | null
    totalDias: number | null
    uniqueSizeInGbs: number | null
    custoBackupDia: Decimal | null
    custoBackupMes: Decimal | null
    custoBackupHora: Decimal | null
    _count: VolumesBackupCountAggregateOutputType | null
    _avg: VolumesBackupAvgAggregateOutputType | null
    _sum: VolumesBackupSumAggregateOutputType | null
    _min: VolumesBackupMinAggregateOutputType | null
    _max: VolumesBackupMaxAggregateOutputType | null
  }

  type GetVolumesBackupGroupByPayload<T extends VolumesBackupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolumesBackupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolumesBackupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolumesBackupGroupByOutputType[P]>
            : GetScalarType<T[P], VolumesBackupGroupByOutputType[P]>
        }
      >
    >


  export type VolumesBackupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenancyName?: boolean
    displayName?: boolean
    sizeInGbs?: boolean
    vpusPerGb?: boolean
    volumeId?: boolean
    backupId?: boolean
    backupDisplayName?: boolean
    timeCreated?: boolean
    backupType?: boolean
    totalDias?: boolean
    uniqueSizeInGbs?: boolean
    custoBackupDia?: boolean
    custoBackupMes?: boolean
    custoBackupHora?: boolean
  }, ExtArgs["result"]["volumesBackup"]>



  export type VolumesBackupSelectScalar = {
    id?: boolean
    tenancyName?: boolean
    displayName?: boolean
    sizeInGbs?: boolean
    vpusPerGb?: boolean
    volumeId?: boolean
    backupId?: boolean
    backupDisplayName?: boolean
    timeCreated?: boolean
    backupType?: boolean
    totalDias?: boolean
    uniqueSizeInGbs?: boolean
    custoBackupDia?: boolean
    custoBackupMes?: boolean
    custoBackupHora?: boolean
  }

  export type VolumesBackupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenancyName" | "displayName" | "sizeInGbs" | "vpusPerGb" | "volumeId" | "backupId" | "backupDisplayName" | "timeCreated" | "backupType" | "totalDias" | "uniqueSizeInGbs" | "custoBackupDia" | "custoBackupMes" | "custoBackupHora", ExtArgs["result"]["volumesBackup"]>

  export type $VolumesBackupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VolumesBackup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tenancyName: string | null
      displayName: string | null
      sizeInGbs: number | null
      vpusPerGb: number | null
      volumeId: string | null
      backupId: string | null
      backupDisplayName: string | null
      timeCreated: Date | null
      backupType: string | null
      totalDias: number | null
      uniqueSizeInGbs: number | null
      custoBackupDia: Prisma.Decimal | null
      custoBackupMes: Prisma.Decimal | null
      custoBackupHora: Prisma.Decimal | null
    }, ExtArgs["result"]["volumesBackup"]>
    composites: {}
  }

  type VolumesBackupGetPayload<S extends boolean | null | undefined | VolumesBackupDefaultArgs> = $Result.GetResult<Prisma.$VolumesBackupPayload, S>

  type VolumesBackupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolumesBackupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolumesBackupCountAggregateInputType | true
    }

  export interface VolumesBackupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VolumesBackup'], meta: { name: 'VolumesBackup' } }
    /**
     * Find zero or one VolumesBackup that matches the filter.
     * @param {VolumesBackupFindUniqueArgs} args - Arguments to find a VolumesBackup
     * @example
     * // Get one VolumesBackup
     * const volumesBackup = await prisma.volumesBackup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolumesBackupFindUniqueArgs>(args: SelectSubset<T, VolumesBackupFindUniqueArgs<ExtArgs>>): Prisma__VolumesBackupClient<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VolumesBackup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolumesBackupFindUniqueOrThrowArgs} args - Arguments to find a VolumesBackup
     * @example
     * // Get one VolumesBackup
     * const volumesBackup = await prisma.volumesBackup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolumesBackupFindUniqueOrThrowArgs>(args: SelectSubset<T, VolumesBackupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolumesBackupClient<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolumesBackup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumesBackupFindFirstArgs} args - Arguments to find a VolumesBackup
     * @example
     * // Get one VolumesBackup
     * const volumesBackup = await prisma.volumesBackup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolumesBackupFindFirstArgs>(args?: SelectSubset<T, VolumesBackupFindFirstArgs<ExtArgs>>): Prisma__VolumesBackupClient<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolumesBackup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumesBackupFindFirstOrThrowArgs} args - Arguments to find a VolumesBackup
     * @example
     * // Get one VolumesBackup
     * const volumesBackup = await prisma.volumesBackup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolumesBackupFindFirstOrThrowArgs>(args?: SelectSubset<T, VolumesBackupFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolumesBackupClient<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VolumesBackups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumesBackupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VolumesBackups
     * const volumesBackups = await prisma.volumesBackup.findMany()
     * 
     * // Get first 10 VolumesBackups
     * const volumesBackups = await prisma.volumesBackup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volumesBackupWithIdOnly = await prisma.volumesBackup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolumesBackupFindManyArgs>(args?: SelectSubset<T, VolumesBackupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VolumesBackup.
     * @param {VolumesBackupCreateArgs} args - Arguments to create a VolumesBackup.
     * @example
     * // Create one VolumesBackup
     * const VolumesBackup = await prisma.volumesBackup.create({
     *   data: {
     *     // ... data to create a VolumesBackup
     *   }
     * })
     * 
     */
    create<T extends VolumesBackupCreateArgs>(args: SelectSubset<T, VolumesBackupCreateArgs<ExtArgs>>): Prisma__VolumesBackupClient<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VolumesBackups.
     * @param {VolumesBackupCreateManyArgs} args - Arguments to create many VolumesBackups.
     * @example
     * // Create many VolumesBackups
     * const volumesBackup = await prisma.volumesBackup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolumesBackupCreateManyArgs>(args?: SelectSubset<T, VolumesBackupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VolumesBackup.
     * @param {VolumesBackupDeleteArgs} args - Arguments to delete one VolumesBackup.
     * @example
     * // Delete one VolumesBackup
     * const VolumesBackup = await prisma.volumesBackup.delete({
     *   where: {
     *     // ... filter to delete one VolumesBackup
     *   }
     * })
     * 
     */
    delete<T extends VolumesBackupDeleteArgs>(args: SelectSubset<T, VolumesBackupDeleteArgs<ExtArgs>>): Prisma__VolumesBackupClient<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VolumesBackup.
     * @param {VolumesBackupUpdateArgs} args - Arguments to update one VolumesBackup.
     * @example
     * // Update one VolumesBackup
     * const volumesBackup = await prisma.volumesBackup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolumesBackupUpdateArgs>(args: SelectSubset<T, VolumesBackupUpdateArgs<ExtArgs>>): Prisma__VolumesBackupClient<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VolumesBackups.
     * @param {VolumesBackupDeleteManyArgs} args - Arguments to filter VolumesBackups to delete.
     * @example
     * // Delete a few VolumesBackups
     * const { count } = await prisma.volumesBackup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolumesBackupDeleteManyArgs>(args?: SelectSubset<T, VolumesBackupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolumesBackups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumesBackupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VolumesBackups
     * const volumesBackup = await prisma.volumesBackup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolumesBackupUpdateManyArgs>(args: SelectSubset<T, VolumesBackupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VolumesBackup.
     * @param {VolumesBackupUpsertArgs} args - Arguments to update or create a VolumesBackup.
     * @example
     * // Update or create a VolumesBackup
     * const volumesBackup = await prisma.volumesBackup.upsert({
     *   create: {
     *     // ... data to create a VolumesBackup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VolumesBackup we want to update
     *   }
     * })
     */
    upsert<T extends VolumesBackupUpsertArgs>(args: SelectSubset<T, VolumesBackupUpsertArgs<ExtArgs>>): Prisma__VolumesBackupClient<$Result.GetResult<Prisma.$VolumesBackupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VolumesBackups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumesBackupCountArgs} args - Arguments to filter VolumesBackups to count.
     * @example
     * // Count the number of VolumesBackups
     * const count = await prisma.volumesBackup.count({
     *   where: {
     *     // ... the filter for the VolumesBackups we want to count
     *   }
     * })
    **/
    count<T extends VolumesBackupCountArgs>(
      args?: Subset<T, VolumesBackupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolumesBackupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VolumesBackup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumesBackupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolumesBackupAggregateArgs>(args: Subset<T, VolumesBackupAggregateArgs>): Prisma.PrismaPromise<GetVolumesBackupAggregateType<T>>

    /**
     * Group by VolumesBackup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumesBackupGroupByArgs} args - Group by arguments.
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
      T extends VolumesBackupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolumesBackupGroupByArgs['orderBy'] }
        : { orderBy?: VolumesBackupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VolumesBackupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolumesBackupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VolumesBackup model
   */
  readonly fields: VolumesBackupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VolumesBackup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolumesBackupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VolumesBackup model
   */
  interface VolumesBackupFieldRefs {
    readonly id: FieldRef<"VolumesBackup", 'BigInt'>
    readonly tenancyName: FieldRef<"VolumesBackup", 'String'>
    readonly displayName: FieldRef<"VolumesBackup", 'String'>
    readonly sizeInGbs: FieldRef<"VolumesBackup", 'Int'>
    readonly vpusPerGb: FieldRef<"VolumesBackup", 'Int'>
    readonly volumeId: FieldRef<"VolumesBackup", 'String'>
    readonly backupId: FieldRef<"VolumesBackup", 'String'>
    readonly backupDisplayName: FieldRef<"VolumesBackup", 'String'>
    readonly timeCreated: FieldRef<"VolumesBackup", 'DateTime'>
    readonly backupType: FieldRef<"VolumesBackup", 'String'>
    readonly totalDias: FieldRef<"VolumesBackup", 'Int'>
    readonly uniqueSizeInGbs: FieldRef<"VolumesBackup", 'Int'>
    readonly custoBackupDia: FieldRef<"VolumesBackup", 'Decimal'>
    readonly custoBackupMes: FieldRef<"VolumesBackup", 'Decimal'>
    readonly custoBackupHora: FieldRef<"VolumesBackup", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * VolumesBackup findUnique
   */
  export type VolumesBackupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * Filter, which VolumesBackup to fetch.
     */
    where: VolumesBackupWhereUniqueInput
  }

  /**
   * VolumesBackup findUniqueOrThrow
   */
  export type VolumesBackupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * Filter, which VolumesBackup to fetch.
     */
    where: VolumesBackupWhereUniqueInput
  }

  /**
   * VolumesBackup findFirst
   */
  export type VolumesBackupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * Filter, which VolumesBackup to fetch.
     */
    where?: VolumesBackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolumesBackups to fetch.
     */
    orderBy?: VolumesBackupOrderByWithRelationInput | VolumesBackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolumesBackups.
     */
    cursor?: VolumesBackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolumesBackups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolumesBackups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolumesBackups.
     */
    distinct?: VolumesBackupScalarFieldEnum | VolumesBackupScalarFieldEnum[]
  }

  /**
   * VolumesBackup findFirstOrThrow
   */
  export type VolumesBackupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * Filter, which VolumesBackup to fetch.
     */
    where?: VolumesBackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolumesBackups to fetch.
     */
    orderBy?: VolumesBackupOrderByWithRelationInput | VolumesBackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolumesBackups.
     */
    cursor?: VolumesBackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolumesBackups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolumesBackups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolumesBackups.
     */
    distinct?: VolumesBackupScalarFieldEnum | VolumesBackupScalarFieldEnum[]
  }

  /**
   * VolumesBackup findMany
   */
  export type VolumesBackupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * Filter, which VolumesBackups to fetch.
     */
    where?: VolumesBackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolumesBackups to fetch.
     */
    orderBy?: VolumesBackupOrderByWithRelationInput | VolumesBackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VolumesBackups.
     */
    cursor?: VolumesBackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolumesBackups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolumesBackups.
     */
    skip?: number
    distinct?: VolumesBackupScalarFieldEnum | VolumesBackupScalarFieldEnum[]
  }

  /**
   * VolumesBackup create
   */
  export type VolumesBackupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * The data needed to create a VolumesBackup.
     */
    data?: XOR<VolumesBackupCreateInput, VolumesBackupUncheckedCreateInput>
  }

  /**
   * VolumesBackup createMany
   */
  export type VolumesBackupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VolumesBackups.
     */
    data: VolumesBackupCreateManyInput | VolumesBackupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VolumesBackup update
   */
  export type VolumesBackupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * The data needed to update a VolumesBackup.
     */
    data: XOR<VolumesBackupUpdateInput, VolumesBackupUncheckedUpdateInput>
    /**
     * Choose, which VolumesBackup to update.
     */
    where: VolumesBackupWhereUniqueInput
  }

  /**
   * VolumesBackup updateMany
   */
  export type VolumesBackupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VolumesBackups.
     */
    data: XOR<VolumesBackupUpdateManyMutationInput, VolumesBackupUncheckedUpdateManyInput>
    /**
     * Filter which VolumesBackups to update
     */
    where?: VolumesBackupWhereInput
    /**
     * Limit how many VolumesBackups to update.
     */
    limit?: number
  }

  /**
   * VolumesBackup upsert
   */
  export type VolumesBackupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * The filter to search for the VolumesBackup to update in case it exists.
     */
    where: VolumesBackupWhereUniqueInput
    /**
     * In case the VolumesBackup found by the `where` argument doesn't exist, create a new VolumesBackup with this data.
     */
    create: XOR<VolumesBackupCreateInput, VolumesBackupUncheckedCreateInput>
    /**
     * In case the VolumesBackup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolumesBackupUpdateInput, VolumesBackupUncheckedUpdateInput>
  }

  /**
   * VolumesBackup delete
   */
  export type VolumesBackupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
    /**
     * Filter which VolumesBackup to delete.
     */
    where: VolumesBackupWhereUniqueInput
  }

  /**
   * VolumesBackup deleteMany
   */
  export type VolumesBackupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolumesBackups to delete
     */
    where?: VolumesBackupWhereInput
    /**
     * Limit how many VolumesBackups to delete.
     */
    limit?: number
  }

  /**
   * VolumesBackup without action
   */
  export type VolumesBackupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumesBackup
     */
    select?: VolumesBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolumesBackup
     */
    omit?: VolumesBackupOmit<ExtArgs> | null
  }


  /**
   * Model SubscriptionCommit
   */

  export type AggregateSubscriptionCommit = {
    _count: SubscriptionCommitCountAggregateOutputType | null
    _avg: SubscriptionCommitAvgAggregateOutputType | null
    _sum: SubscriptionCommitSumAggregateOutputType | null
    _min: SubscriptionCommitMinAggregateOutputType | null
    _max: SubscriptionCommitMaxAggregateOutputType | null
  }

  export type SubscriptionCommitAvgAggregateOutputType = {
    total_used: number | null
    dias_decorridos: number | null
  }

  export type SubscriptionCommitSumAggregateOutputType = {
    total_used: number | null
    dias_decorridos: number | null
  }

  export type SubscriptionCommitMinAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    time_started_commit: Date | null
    time_ended_commit: Date | null
    total_used: number | null
    updated: Date | null
    dias_decorridos: number | null
  }

  export type SubscriptionCommitMaxAggregateOutputType = {
    tenancy_name: string | null
    tenancy_id: string | null
    time_started_commit: Date | null
    time_ended_commit: Date | null
    total_used: number | null
    updated: Date | null
    dias_decorridos: number | null
  }

  export type SubscriptionCommitCountAggregateOutputType = {
    tenancy_name: number
    tenancy_id: number
    time_started_commit: number
    time_ended_commit: number
    total_used: number
    updated: number
    dias_decorridos: number
    _all: number
  }


  export type SubscriptionCommitAvgAggregateInputType = {
    total_used?: true
    dias_decorridos?: true
  }

  export type SubscriptionCommitSumAggregateInputType = {
    total_used?: true
    dias_decorridos?: true
  }

  export type SubscriptionCommitMinAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    time_started_commit?: true
    time_ended_commit?: true
    total_used?: true
    updated?: true
    dias_decorridos?: true
  }

  export type SubscriptionCommitMaxAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    time_started_commit?: true
    time_ended_commit?: true
    total_used?: true
    updated?: true
    dias_decorridos?: true
  }

  export type SubscriptionCommitCountAggregateInputType = {
    tenancy_name?: true
    tenancy_id?: true
    time_started_commit?: true
    time_ended_commit?: true
    total_used?: true
    updated?: true
    dias_decorridos?: true
    _all?: true
  }

  export type SubscriptionCommitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionCommit to aggregate.
     */
    where?: SubscriptionCommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionCommits to fetch.
     */
    orderBy?: SubscriptionCommitOrderByWithRelationInput | SubscriptionCommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionCommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionCommits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionCommits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionCommits
    **/
    _count?: true | SubscriptionCommitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionCommitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionCommitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionCommitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionCommitMaxAggregateInputType
  }

  export type GetSubscriptionCommitAggregateType<T extends SubscriptionCommitAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionCommit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionCommit[P]>
      : GetScalarType<T[P], AggregateSubscriptionCommit[P]>
  }




  export type SubscriptionCommitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionCommitWhereInput
    orderBy?: SubscriptionCommitOrderByWithAggregationInput | SubscriptionCommitOrderByWithAggregationInput[]
    by: SubscriptionCommitScalarFieldEnum[] | SubscriptionCommitScalarFieldEnum
    having?: SubscriptionCommitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCommitCountAggregateInputType | true
    _avg?: SubscriptionCommitAvgAggregateInputType
    _sum?: SubscriptionCommitSumAggregateInputType
    _min?: SubscriptionCommitMinAggregateInputType
    _max?: SubscriptionCommitMaxAggregateInputType
  }

  export type SubscriptionCommitGroupByOutputType = {
    tenancy_name: string
    tenancy_id: string | null
    time_started_commit: Date
    time_ended_commit: Date | null
    total_used: number | null
    updated: Date
    dias_decorridos: number | null
    _count: SubscriptionCommitCountAggregateOutputType | null
    _avg: SubscriptionCommitAvgAggregateOutputType | null
    _sum: SubscriptionCommitSumAggregateOutputType | null
    _min: SubscriptionCommitMinAggregateOutputType | null
    _max: SubscriptionCommitMaxAggregateOutputType | null
  }

  type GetSubscriptionCommitGroupByPayload<T extends SubscriptionCommitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionCommitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionCommitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionCommitGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionCommitGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionCommitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenancy_name?: boolean
    tenancy_id?: boolean
    time_started_commit?: boolean
    time_ended_commit?: boolean
    total_used?: boolean
    updated?: boolean
    dias_decorridos?: boolean
  }, ExtArgs["result"]["subscriptionCommit"]>



  export type SubscriptionCommitSelectScalar = {
    tenancy_name?: boolean
    tenancy_id?: boolean
    time_started_commit?: boolean
    time_ended_commit?: boolean
    total_used?: boolean
    updated?: boolean
    dias_decorridos?: boolean
  }

  export type SubscriptionCommitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenancy_id" | "time_started_commit" | "time_ended_commit" | "total_used" | "updated" | "dias_decorridos", ExtArgs["result"]["subscriptionCommit"]>

  export type $SubscriptionCommitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionCommit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tenancy_name: string
      tenancy_id: string | null
      time_started_commit: Date
      time_ended_commit: Date | null
      total_used: number | null
      updated: Date
      dias_decorridos: number | null
    }, ExtArgs["result"]["subscriptionCommit"]>
    composites: {}
  }

  type SubscriptionCommitGetPayload<S extends boolean | null | undefined | SubscriptionCommitDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionCommitPayload, S>

  type SubscriptionCommitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionCommitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCommitCountAggregateInputType | true
    }

  export interface SubscriptionCommitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionCommit'], meta: { name: 'SubscriptionCommit' } }
    /**
     * Find zero or one SubscriptionCommit that matches the filter.
     * @param {SubscriptionCommitFindUniqueArgs} args - Arguments to find a SubscriptionCommit
     * @example
     * // Get one SubscriptionCommit
     * const subscriptionCommit = await prisma.subscriptionCommit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionCommitFindUniqueArgs>(args: SelectSubset<T, SubscriptionCommitFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionCommitClient<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionCommit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionCommitFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionCommit
     * @example
     * // Get one SubscriptionCommit
     * const subscriptionCommit = await prisma.subscriptionCommit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionCommitFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionCommitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionCommitClient<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionCommit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCommitFindFirstArgs} args - Arguments to find a SubscriptionCommit
     * @example
     * // Get one SubscriptionCommit
     * const subscriptionCommit = await prisma.subscriptionCommit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionCommitFindFirstArgs>(args?: SelectSubset<T, SubscriptionCommitFindFirstArgs<ExtArgs>>): Prisma__SubscriptionCommitClient<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionCommit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCommitFindFirstOrThrowArgs} args - Arguments to find a SubscriptionCommit
     * @example
     * // Get one SubscriptionCommit
     * const subscriptionCommit = await prisma.subscriptionCommit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionCommitFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionCommitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionCommitClient<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionCommits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCommitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionCommits
     * const subscriptionCommits = await prisma.subscriptionCommit.findMany()
     * 
     * // Get first 10 SubscriptionCommits
     * const subscriptionCommits = await prisma.subscriptionCommit.findMany({ take: 10 })
     * 
     * // Only select the `tenancy_name`
     * const subscriptionCommitWithTenancy_nameOnly = await prisma.subscriptionCommit.findMany({ select: { tenancy_name: true } })
     * 
     */
    findMany<T extends SubscriptionCommitFindManyArgs>(args?: SelectSubset<T, SubscriptionCommitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionCommit.
     * @param {SubscriptionCommitCreateArgs} args - Arguments to create a SubscriptionCommit.
     * @example
     * // Create one SubscriptionCommit
     * const SubscriptionCommit = await prisma.subscriptionCommit.create({
     *   data: {
     *     // ... data to create a SubscriptionCommit
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCommitCreateArgs>(args: SelectSubset<T, SubscriptionCommitCreateArgs<ExtArgs>>): Prisma__SubscriptionCommitClient<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionCommits.
     * @param {SubscriptionCommitCreateManyArgs} args - Arguments to create many SubscriptionCommits.
     * @example
     * // Create many SubscriptionCommits
     * const subscriptionCommit = await prisma.subscriptionCommit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCommitCreateManyArgs>(args?: SelectSubset<T, SubscriptionCommitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubscriptionCommit.
     * @param {SubscriptionCommitDeleteArgs} args - Arguments to delete one SubscriptionCommit.
     * @example
     * // Delete one SubscriptionCommit
     * const SubscriptionCommit = await prisma.subscriptionCommit.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionCommit
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionCommitDeleteArgs>(args: SelectSubset<T, SubscriptionCommitDeleteArgs<ExtArgs>>): Prisma__SubscriptionCommitClient<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionCommit.
     * @param {SubscriptionCommitUpdateArgs} args - Arguments to update one SubscriptionCommit.
     * @example
     * // Update one SubscriptionCommit
     * const subscriptionCommit = await prisma.subscriptionCommit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionCommitUpdateArgs>(args: SelectSubset<T, SubscriptionCommitUpdateArgs<ExtArgs>>): Prisma__SubscriptionCommitClient<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionCommits.
     * @param {SubscriptionCommitDeleteManyArgs} args - Arguments to filter SubscriptionCommits to delete.
     * @example
     * // Delete a few SubscriptionCommits
     * const { count } = await prisma.subscriptionCommit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionCommitDeleteManyArgs>(args?: SelectSubset<T, SubscriptionCommitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionCommits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCommitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionCommits
     * const subscriptionCommit = await prisma.subscriptionCommit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionCommitUpdateManyArgs>(args: SelectSubset<T, SubscriptionCommitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionCommit.
     * @param {SubscriptionCommitUpsertArgs} args - Arguments to update or create a SubscriptionCommit.
     * @example
     * // Update or create a SubscriptionCommit
     * const subscriptionCommit = await prisma.subscriptionCommit.upsert({
     *   create: {
     *     // ... data to create a SubscriptionCommit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionCommit we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionCommitUpsertArgs>(args: SelectSubset<T, SubscriptionCommitUpsertArgs<ExtArgs>>): Prisma__SubscriptionCommitClient<$Result.GetResult<Prisma.$SubscriptionCommitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionCommits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCommitCountArgs} args - Arguments to filter SubscriptionCommits to count.
     * @example
     * // Count the number of SubscriptionCommits
     * const count = await prisma.subscriptionCommit.count({
     *   where: {
     *     // ... the filter for the SubscriptionCommits we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCommitCountArgs>(
      args?: Subset<T, SubscriptionCommitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCommitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionCommit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCommitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionCommitAggregateArgs>(args: Subset<T, SubscriptionCommitAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionCommitAggregateType<T>>

    /**
     * Group by SubscriptionCommit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCommitGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionCommitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionCommitGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionCommitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionCommitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionCommitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionCommit model
   */
  readonly fields: SubscriptionCommitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionCommit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionCommitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SubscriptionCommit model
   */
  interface SubscriptionCommitFieldRefs {
    readonly tenancy_name: FieldRef<"SubscriptionCommit", 'String'>
    readonly tenancy_id: FieldRef<"SubscriptionCommit", 'String'>
    readonly time_started_commit: FieldRef<"SubscriptionCommit", 'DateTime'>
    readonly time_ended_commit: FieldRef<"SubscriptionCommit", 'DateTime'>
    readonly total_used: FieldRef<"SubscriptionCommit", 'Float'>
    readonly updated: FieldRef<"SubscriptionCommit", 'DateTime'>
    readonly dias_decorridos: FieldRef<"SubscriptionCommit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionCommit findUnique
   */
  export type SubscriptionCommitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionCommit to fetch.
     */
    where: SubscriptionCommitWhereUniqueInput
  }

  /**
   * SubscriptionCommit findUniqueOrThrow
   */
  export type SubscriptionCommitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionCommit to fetch.
     */
    where: SubscriptionCommitWhereUniqueInput
  }

  /**
   * SubscriptionCommit findFirst
   */
  export type SubscriptionCommitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionCommit to fetch.
     */
    where?: SubscriptionCommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionCommits to fetch.
     */
    orderBy?: SubscriptionCommitOrderByWithRelationInput | SubscriptionCommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionCommits.
     */
    cursor?: SubscriptionCommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionCommits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionCommits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionCommits.
     */
    distinct?: SubscriptionCommitScalarFieldEnum | SubscriptionCommitScalarFieldEnum[]
  }

  /**
   * SubscriptionCommit findFirstOrThrow
   */
  export type SubscriptionCommitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionCommit to fetch.
     */
    where?: SubscriptionCommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionCommits to fetch.
     */
    orderBy?: SubscriptionCommitOrderByWithRelationInput | SubscriptionCommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionCommits.
     */
    cursor?: SubscriptionCommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionCommits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionCommits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionCommits.
     */
    distinct?: SubscriptionCommitScalarFieldEnum | SubscriptionCommitScalarFieldEnum[]
  }

  /**
   * SubscriptionCommit findMany
   */
  export type SubscriptionCommitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionCommits to fetch.
     */
    where?: SubscriptionCommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionCommits to fetch.
     */
    orderBy?: SubscriptionCommitOrderByWithRelationInput | SubscriptionCommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionCommits.
     */
    cursor?: SubscriptionCommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionCommits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionCommits.
     */
    skip?: number
    distinct?: SubscriptionCommitScalarFieldEnum | SubscriptionCommitScalarFieldEnum[]
  }

  /**
   * SubscriptionCommit create
   */
  export type SubscriptionCommitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionCommit.
     */
    data?: XOR<SubscriptionCommitCreateInput, SubscriptionCommitUncheckedCreateInput>
  }

  /**
   * SubscriptionCommit createMany
   */
  export type SubscriptionCommitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionCommits.
     */
    data: SubscriptionCommitCreateManyInput | SubscriptionCommitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionCommit update
   */
  export type SubscriptionCommitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionCommit.
     */
    data: XOR<SubscriptionCommitUpdateInput, SubscriptionCommitUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionCommit to update.
     */
    where: SubscriptionCommitWhereUniqueInput
  }

  /**
   * SubscriptionCommit updateMany
   */
  export type SubscriptionCommitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionCommits.
     */
    data: XOR<SubscriptionCommitUpdateManyMutationInput, SubscriptionCommitUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionCommits to update
     */
    where?: SubscriptionCommitWhereInput
    /**
     * Limit how many SubscriptionCommits to update.
     */
    limit?: number
  }

  /**
   * SubscriptionCommit upsert
   */
  export type SubscriptionCommitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionCommit to update in case it exists.
     */
    where: SubscriptionCommitWhereUniqueInput
    /**
     * In case the SubscriptionCommit found by the `where` argument doesn't exist, create a new SubscriptionCommit with this data.
     */
    create: XOR<SubscriptionCommitCreateInput, SubscriptionCommitUncheckedCreateInput>
    /**
     * In case the SubscriptionCommit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionCommitUpdateInput, SubscriptionCommitUncheckedUpdateInput>
  }

  /**
   * SubscriptionCommit delete
   */
  export type SubscriptionCommitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
    /**
     * Filter which SubscriptionCommit to delete.
     */
    where: SubscriptionCommitWhereUniqueInput
  }

  /**
   * SubscriptionCommit deleteMany
   */
  export type SubscriptionCommitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionCommits to delete
     */
    where?: SubscriptionCommitWhereInput
    /**
     * Limit how many SubscriptionCommits to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionCommit without action
   */
  export type SubscriptionCommitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCommit
     */
    select?: SubscriptionCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionCommit
     */
    omit?: SubscriptionCommitOmit<ExtArgs> | null
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


  export const ComputeInstancesScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    id: 'id',
    display_name: 'display_name',
    compartment_id: 'compartment_id',
    availability_domain: 'availability_domain',
    fault_domain: 'fault_domain',
    region: 'region',
    lifecycle_state: 'lifecycle_state',
    shape: 'shape',
    memory_in_gbs: 'memory_in_gbs',
    ocpus: 'ocpus',
    processor_description: 'processor_description',
    time_created: 'time_created',
    CreatedBy: 'CreatedBy',
    monthly_cost: 'monthly_cost'
  };

  export type ComputeInstancesScalarFieldEnum = (typeof ComputeInstancesScalarFieldEnum)[keyof typeof ComputeInstancesScalarFieldEnum]


  export const SubscriptionDetailsScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    home_region: 'home_region',
    subscription_id: 'subscription_id',
    service_name: 'service_name',
    currency: 'currency',
    time_start: 'time_start',
    time_end: 'time_end',
    admin_email: 'admin_email',
    buyer_email: 'buyer_email',
    end_user_customer: 'end_user_customer',
    payment_method: 'payment_method',
    pricing_model: 'pricing_model',
    product: 'product',
    is_having_usage: 'is_having_usage',
    total_value: 'total_value',
    used_amount: 'used_amount',
    line_net_amount: 'line_net_amount',
    available_amount: 'available_amount',
    total_dias_contrato: 'total_dias_contrato',
    dias_decorridos: 'dias_decorridos',
    updated: 'updated',
    status: 'status'
  };

  export type SubscriptionDetailsScalarFieldEnum = (typeof SubscriptionDetailsScalarFieldEnum)[keyof typeof SubscriptionDetailsScalarFieldEnum]


  export const TenancyDetailsScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    home_region: 'home_region',
    subscription_id: 'subscription_id',
    service_name: 'service_name',
    currency: 'currency',
    time_start: 'time_start',
    time_end: 'time_end',
    tenancy_status: 'tenancy_status',
    total_credit: 'total_credit'
  };

  export type TenancyDetailsScalarFieldEnum = (typeof TenancyDetailsScalarFieldEnum)[keyof typeof TenancyDetailsScalarFieldEnum]


  export const Tenancy_detailsScalarFieldEnum: {
    tenancy_id: 'tenancy_id',
    tenancy_name: 'tenancy_name',
    home_region: 'home_region',
    service_name: 'service_name',
    currency: 'currency',
    time_start: 'time_start',
    time_end: 'time_end',
    status: 'status',
    total_value: 'total_value'
  };

  export type Tenancy_detailsScalarFieldEnum = (typeof Tenancy_detailsScalarFieldEnum)[keyof typeof Tenancy_detailsScalarFieldEnum]


  export const CustoDiarioTotalScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenant_id: 'tenant_id',
    cost_dia: 'cost_dia',
    currency: 'currency',
    usage_dia: 'usage_dia',
    time_started: 'time_started',
    time_ended: 'time_ended'
  };

  export type CustoDiarioTotalScalarFieldEnum = (typeof CustoDiarioTotalScalarFieldEnum)[keyof typeof CustoDiarioTotalScalarFieldEnum]


  export const CustoMensalTotalScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenant_id: 'tenant_id',
    cost_mes: 'cost_mes',
    currency: 'currency',
    usage_mes: 'usage_mes',
    time_started: 'time_started',
    time_ended: 'time_ended'
  };

  export type CustoMensalTotalScalarFieldEnum = (typeof CustoMensalTotalScalarFieldEnum)[keyof typeof CustoMensalTotalScalarFieldEnum]


  export const ComputeEventsScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    eventTime: 'eventTime',
    source: 'source',
    opcRequestId: 'opcRequestId',
    rawEvent: 'rawEvent',
    compartmentId: 'compartmentId',
    compartmentName: 'compartmentName',
    eventName: 'eventName',
    message: 'message',
    action: 'action',
    principalName: 'principalName',
    ipAddress: 'ipAddress',
    displayName: 'displayName',
    lifecycleState: 'lifecycleState',
    shape: 'shape',
    ocpus: 'ocpus',
    memoryInGbs: 'memoryInGbs',
    processorDescription: 'processorDescription',
    createdBy: 'createdBy',
    createdOn: 'createdOn',
    preserveBootVolume: 'preserveBootVolume',
    createdAt: 'createdAt',
    instanceActionType: 'instanceActionType',
    tenancyName: 'tenancyName',
    isCheck: 'isCheck',
    ticket: 'ticket'
  };

  export type ComputeEventsScalarFieldEnum = (typeof ComputeEventsScalarFieldEnum)[keyof typeof ComputeEventsScalarFieldEnum]


  export const IdentityEventsScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    eventTime: 'eventTime',
    source: 'source',
    opcRequestId: 'opcRequestId',
    rawEvent: 'rawEvent',
    adminResourceName: 'adminResourceName',
    adminResourceType: 'adminResourceType',
    compartmentName: 'compartmentName',
    principalName: 'principalName',
    action: 'action',
    message: 'message',
    idcsLastModifiedByName: 'idcsLastModifiedByName',
    idcsLastModifiedByType: 'idcsLastModifiedByType',
    policyName: 'policyName',
    statements: 'statements',
    createdAt: 'createdAt',
    eventName: 'eventName',
    tenancyName: 'tenancyName',
    isCheck: 'isCheck',
    ticket: 'ticket'
  };

  export type IdentityEventsScalarFieldEnum = (typeof IdentityEventsScalarFieldEnum)[keyof typeof IdentityEventsScalarFieldEnum]


  export const NetworkEventsScalarFieldEnum: {
    eventType: 'eventType',
    eventTime: 'eventTime',
    source: 'source',
    opcRequestId: 'opcRequestId',
    rawEvent: 'rawEvent',
    compartmentId: 'compartmentId',
    compartmentName: 'compartmentName',
    eventName: 'eventName',
    message: 'message',
    action: 'action',
    principalName: 'principalName',
    ipAddress: 'ipAddress',
    routeRules: 'routeRules',
    createdBy: 'createdBy',
    createdOn: 'createdOn',
    createdAt: 'createdAt',
    tenancyName: 'tenancyName',
    isCheck: 'isCheck',
    ticket: 'ticket',
    id: 'id'
  };

  export type NetworkEventsScalarFieldEnum = (typeof NetworkEventsScalarFieldEnum)[keyof typeof NetworkEventsScalarFieldEnum]


  export const BlockVolumeScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    availability_domain: 'availability_domain',
    compartment_id: 'compartment_id',
    display_name: 'display_name',
    id: 'id',
    lifecycle_state: 'lifecycle_state',
    size_in_gbs: 'size_in_gbs',
    time_created: 'time_created',
    vpus_per_gb: 'vpus_per_gb',
    is_boot_volume: 'is_boot_volume',
    is_orfao: 'is_orfao',
    custo_mes: 'custo_mes',
    updated: 'updated'
  };

  export type BlockVolumeScalarFieldEnum = (typeof BlockVolumeScalarFieldEnum)[keyof typeof BlockVolumeScalarFieldEnum]


  export const CustoPorServiceScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenant_id: 'tenant_id',
    service: 'service',
    cost_mes: 'cost_mes',
    currency: 'currency',
    usage_mes: 'usage_mes',
    time_started: 'time_started',
    time_ended: 'time_ended'
  };

  export type CustoPorServiceScalarFieldEnum = (typeof CustoPorServiceScalarFieldEnum)[keyof typeof CustoPorServiceScalarFieldEnum]


  export const CustoPorSkuNameScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenant_id: 'tenant_id',
    sku_name: 'sku_name',
    cost_mes: 'cost_mes',
    currency: 'currency',
    usage_mes: 'usage_mes',
    time_started: 'time_started',
    time_ended: 'time_ended'
  };

  export type CustoPorSkuNameScalarFieldEnum = (typeof CustoPorSkuNameScalarFieldEnum)[keyof typeof CustoPorSkuNameScalarFieldEnum]


  export const IdentityUsersScalarFieldEnum: {
    id: 'id',
    is_mfa_activated: 'is_mfa_activated',
    lifecycle_state: 'lifecycle_state',
    time_created: 'time_created',
    last_successful_login_time: 'last_successful_login_time',
    email: 'email',
    email_verified: 'email_verified',
    can_use_api_keys: 'can_use_api_keys',
    can_use_auth_tokens: 'can_use_auth_tokens',
    can_use_console_password: 'can_use_console_password',
    can_use_customer_secret_keys: 'can_use_customer_secret_keys',
    can_use_db_credentials: 'can_use_db_credentials',
    can_use_o_auth2_client_credentials: 'can_use_o_auth2_client_credentials',
    can_use_smtp_credentials: 'can_use_smtp_credentials',
    identity_provider_id: 'identity_provider_id',
    tenancy_name: 'tenancy_name'
  };

  export type IdentityUsersScalarFieldEnum = (typeof IdentityUsersScalarFieldEnum)[keyof typeof IdentityUsersScalarFieldEnum]


  export const VolumesBackupScalarFieldEnum: {
    id: 'id',
    tenancyName: 'tenancyName',
    displayName: 'displayName',
    sizeInGbs: 'sizeInGbs',
    vpusPerGb: 'vpusPerGb',
    volumeId: 'volumeId',
    backupId: 'backupId',
    backupDisplayName: 'backupDisplayName',
    timeCreated: 'timeCreated',
    backupType: 'backupType',
    totalDias: 'totalDias',
    uniqueSizeInGbs: 'uniqueSizeInGbs',
    custoBackupDia: 'custoBackupDia',
    custoBackupMes: 'custoBackupMes',
    custoBackupHora: 'custoBackupHora'
  };

  export type VolumesBackupScalarFieldEnum = (typeof VolumesBackupScalarFieldEnum)[keyof typeof VolumesBackupScalarFieldEnum]


  export const SubscriptionCommitScalarFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    time_started_commit: 'time_started_commit',
    time_ended_commit: 'time_ended_commit',
    total_used: 'total_used',
    updated: 'updated',
    dias_decorridos: 'dias_decorridos'
  };

  export type SubscriptionCommitScalarFieldEnum = (typeof SubscriptionCommitScalarFieldEnum)[keyof typeof SubscriptionCommitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ComputeInstancesOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    id: 'id',
    display_name: 'display_name',
    compartment_id: 'compartment_id',
    availability_domain: 'availability_domain',
    fault_domain: 'fault_domain',
    region: 'region',
    lifecycle_state: 'lifecycle_state',
    shape: 'shape',
    processor_description: 'processor_description',
    CreatedBy: 'CreatedBy'
  };

  export type ComputeInstancesOrderByRelevanceFieldEnum = (typeof ComputeInstancesOrderByRelevanceFieldEnum)[keyof typeof ComputeInstancesOrderByRelevanceFieldEnum]


  export const SubscriptionDetailsOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    home_region: 'home_region',
    subscription_id: 'subscription_id',
    service_name: 'service_name',
    currency: 'currency',
    admin_email: 'admin_email',
    buyer_email: 'buyer_email',
    end_user_customer: 'end_user_customer',
    payment_method: 'payment_method',
    pricing_model: 'pricing_model',
    product: 'product',
    is_having_usage: 'is_having_usage',
    status: 'status'
  };

  export type SubscriptionDetailsOrderByRelevanceFieldEnum = (typeof SubscriptionDetailsOrderByRelevanceFieldEnum)[keyof typeof SubscriptionDetailsOrderByRelevanceFieldEnum]


  export const TenancyDetailsOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    home_region: 'home_region',
    subscription_id: 'subscription_id',
    service_name: 'service_name',
    currency: 'currency',
    tenancy_status: 'tenancy_status'
  };

  export type TenancyDetailsOrderByRelevanceFieldEnum = (typeof TenancyDetailsOrderByRelevanceFieldEnum)[keyof typeof TenancyDetailsOrderByRelevanceFieldEnum]


  export const tenancy_detailsOrderByRelevanceFieldEnum: {
    tenancy_id: 'tenancy_id',
    tenancy_name: 'tenancy_name',
    home_region: 'home_region',
    service_name: 'service_name',
    currency: 'currency',
    status: 'status'
  };

  export type tenancy_detailsOrderByRelevanceFieldEnum = (typeof tenancy_detailsOrderByRelevanceFieldEnum)[keyof typeof tenancy_detailsOrderByRelevanceFieldEnum]


  export const CustoDiarioTotalOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenant_id: 'tenant_id',
    currency: 'currency'
  };

  export type CustoDiarioTotalOrderByRelevanceFieldEnum = (typeof CustoDiarioTotalOrderByRelevanceFieldEnum)[keyof typeof CustoDiarioTotalOrderByRelevanceFieldEnum]


  export const CustoMensalTotalOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenant_id: 'tenant_id',
    currency: 'currency'
  };

  export type CustoMensalTotalOrderByRelevanceFieldEnum = (typeof CustoMensalTotalOrderByRelevanceFieldEnum)[keyof typeof CustoMensalTotalOrderByRelevanceFieldEnum]


  export const computeEventsOrderByRelevanceFieldEnum: {
    eventType: 'eventType',
    source: 'source',
    opcRequestId: 'opcRequestId',
    rawEvent: 'rawEvent',
    compartmentId: 'compartmentId',
    compartmentName: 'compartmentName',
    eventName: 'eventName',
    message: 'message',
    action: 'action',
    principalName: 'principalName',
    ipAddress: 'ipAddress',
    displayName: 'displayName',
    lifecycleState: 'lifecycleState',
    shape: 'shape',
    processorDescription: 'processorDescription',
    createdBy: 'createdBy',
    instanceActionType: 'instanceActionType',
    tenancyName: 'tenancyName',
    ticket: 'ticket'
  };

  export type computeEventsOrderByRelevanceFieldEnum = (typeof computeEventsOrderByRelevanceFieldEnum)[keyof typeof computeEventsOrderByRelevanceFieldEnum]


  export const identityEventsOrderByRelevanceFieldEnum: {
    eventType: 'eventType',
    source: 'source',
    opcRequestId: 'opcRequestId',
    rawEvent: 'rawEvent',
    adminResourceName: 'adminResourceName',
    adminResourceType: 'adminResourceType',
    compartmentName: 'compartmentName',
    principalName: 'principalName',
    action: 'action',
    message: 'message',
    idcsLastModifiedByName: 'idcsLastModifiedByName',
    idcsLastModifiedByType: 'idcsLastModifiedByType',
    policyName: 'policyName',
    statements: 'statements',
    eventName: 'eventName',
    tenancyName: 'tenancyName',
    ticket: 'ticket'
  };

  export type identityEventsOrderByRelevanceFieldEnum = (typeof identityEventsOrderByRelevanceFieldEnum)[keyof typeof identityEventsOrderByRelevanceFieldEnum]


  export const networkEventsOrderByRelevanceFieldEnum: {
    eventType: 'eventType',
    source: 'source',
    opcRequestId: 'opcRequestId',
    rawEvent: 'rawEvent',
    compartmentId: 'compartmentId',
    compartmentName: 'compartmentName',
    eventName: 'eventName',
    message: 'message',
    action: 'action',
    principalName: 'principalName',
    ipAddress: 'ipAddress',
    routeRules: 'routeRules',
    createdBy: 'createdBy',
    tenancyName: 'tenancyName',
    ticket: 'ticket'
  };

  export type networkEventsOrderByRelevanceFieldEnum = (typeof networkEventsOrderByRelevanceFieldEnum)[keyof typeof networkEventsOrderByRelevanceFieldEnum]


  export const BlockVolumeOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id',
    availability_domain: 'availability_domain',
    compartment_id: 'compartment_id',
    display_name: 'display_name',
    id: 'id',
    lifecycle_state: 'lifecycle_state',
    is_boot_volume: 'is_boot_volume',
    is_orfao: 'is_orfao'
  };

  export type BlockVolumeOrderByRelevanceFieldEnum = (typeof BlockVolumeOrderByRelevanceFieldEnum)[keyof typeof BlockVolumeOrderByRelevanceFieldEnum]


  export const CustoPorServiceOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenant_id: 'tenant_id',
    service: 'service',
    currency: 'currency'
  };

  export type CustoPorServiceOrderByRelevanceFieldEnum = (typeof CustoPorServiceOrderByRelevanceFieldEnum)[keyof typeof CustoPorServiceOrderByRelevanceFieldEnum]


  export const CustoPorSkuNameOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenant_id: 'tenant_id',
    sku_name: 'sku_name',
    currency: 'currency'
  };

  export type CustoPorSkuNameOrderByRelevanceFieldEnum = (typeof CustoPorSkuNameOrderByRelevanceFieldEnum)[keyof typeof CustoPorSkuNameOrderByRelevanceFieldEnum]


  export const IdentityUsersOrderByRelevanceFieldEnum: {
    lifecycle_state: 'lifecycle_state',
    email: 'email',
    email_verified: 'email_verified',
    identity_provider_id: 'identity_provider_id',
    tenancy_name: 'tenancy_name'
  };

  export type IdentityUsersOrderByRelevanceFieldEnum = (typeof IdentityUsersOrderByRelevanceFieldEnum)[keyof typeof IdentityUsersOrderByRelevanceFieldEnum]


  export const VolumesBackupOrderByRelevanceFieldEnum: {
    tenancyName: 'tenancyName',
    displayName: 'displayName',
    volumeId: 'volumeId',
    backupId: 'backupId',
    backupDisplayName: 'backupDisplayName',
    backupType: 'backupType'
  };

  export type VolumesBackupOrderByRelevanceFieldEnum = (typeof VolumesBackupOrderByRelevanceFieldEnum)[keyof typeof VolumesBackupOrderByRelevanceFieldEnum]


  export const SubscriptionCommitOrderByRelevanceFieldEnum: {
    tenancy_name: 'tenancy_name',
    tenancy_id: 'tenancy_id'
  };

  export type SubscriptionCommitOrderByRelevanceFieldEnum = (typeof SubscriptionCommitOrderByRelevanceFieldEnum)[keyof typeof SubscriptionCommitOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    
  /**
   * Deep Input Types
   */


  export type ComputeInstancesWhereInput = {
    AND?: ComputeInstancesWhereInput | ComputeInstancesWhereInput[]
    OR?: ComputeInstancesWhereInput[]
    NOT?: ComputeInstancesWhereInput | ComputeInstancesWhereInput[]
    tenancy_name?: StringNullableFilter<"ComputeInstances"> | string | null
    tenancy_id?: StringNullableFilter<"ComputeInstances"> | string | null
    id?: StringFilter<"ComputeInstances"> | string
    display_name?: StringNullableFilter<"ComputeInstances"> | string | null
    compartment_id?: StringNullableFilter<"ComputeInstances"> | string | null
    availability_domain?: StringNullableFilter<"ComputeInstances"> | string | null
    fault_domain?: StringNullableFilter<"ComputeInstances"> | string | null
    region?: StringNullableFilter<"ComputeInstances"> | string | null
    lifecycle_state?: StringNullableFilter<"ComputeInstances"> | string | null
    shape?: StringNullableFilter<"ComputeInstances"> | string | null
    memory_in_gbs?: FloatNullableFilter<"ComputeInstances"> | number | null
    ocpus?: IntNullableFilter<"ComputeInstances"> | number | null
    processor_description?: StringNullableFilter<"ComputeInstances"> | string | null
    time_created?: DateTimeNullableFilter<"ComputeInstances"> | Date | string | null
    CreatedBy?: StringNullableFilter<"ComputeInstances"> | string | null
    monthly_cost?: FloatNullableFilter<"ComputeInstances"> | number | null
  }

  export type ComputeInstancesOrderByWithRelationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenancy_id?: SortOrderInput | SortOrder
    id?: SortOrder
    display_name?: SortOrderInput | SortOrder
    compartment_id?: SortOrderInput | SortOrder
    availability_domain?: SortOrderInput | SortOrder
    fault_domain?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    lifecycle_state?: SortOrderInput | SortOrder
    shape?: SortOrderInput | SortOrder
    memory_in_gbs?: SortOrderInput | SortOrder
    ocpus?: SortOrderInput | SortOrder
    processor_description?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    monthly_cost?: SortOrderInput | SortOrder
    _relevance?: ComputeInstancesOrderByRelevanceInput
  }

  export type ComputeInstancesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComputeInstancesWhereInput | ComputeInstancesWhereInput[]
    OR?: ComputeInstancesWhereInput[]
    NOT?: ComputeInstancesWhereInput | ComputeInstancesWhereInput[]
    tenancy_name?: StringNullableFilter<"ComputeInstances"> | string | null
    tenancy_id?: StringNullableFilter<"ComputeInstances"> | string | null
    display_name?: StringNullableFilter<"ComputeInstances"> | string | null
    compartment_id?: StringNullableFilter<"ComputeInstances"> | string | null
    availability_domain?: StringNullableFilter<"ComputeInstances"> | string | null
    fault_domain?: StringNullableFilter<"ComputeInstances"> | string | null
    region?: StringNullableFilter<"ComputeInstances"> | string | null
    lifecycle_state?: StringNullableFilter<"ComputeInstances"> | string | null
    shape?: StringNullableFilter<"ComputeInstances"> | string | null
    memory_in_gbs?: FloatNullableFilter<"ComputeInstances"> | number | null
    ocpus?: IntNullableFilter<"ComputeInstances"> | number | null
    processor_description?: StringNullableFilter<"ComputeInstances"> | string | null
    time_created?: DateTimeNullableFilter<"ComputeInstances"> | Date | string | null
    CreatedBy?: StringNullableFilter<"ComputeInstances"> | string | null
    monthly_cost?: FloatNullableFilter<"ComputeInstances"> | number | null
  }, "id">

  export type ComputeInstancesOrderByWithAggregationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenancy_id?: SortOrderInput | SortOrder
    id?: SortOrder
    display_name?: SortOrderInput | SortOrder
    compartment_id?: SortOrderInput | SortOrder
    availability_domain?: SortOrderInput | SortOrder
    fault_domain?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    lifecycle_state?: SortOrderInput | SortOrder
    shape?: SortOrderInput | SortOrder
    memory_in_gbs?: SortOrderInput | SortOrder
    ocpus?: SortOrderInput | SortOrder
    processor_description?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    monthly_cost?: SortOrderInput | SortOrder
    _count?: ComputeInstancesCountOrderByAggregateInput
    _avg?: ComputeInstancesAvgOrderByAggregateInput
    _max?: ComputeInstancesMaxOrderByAggregateInput
    _min?: ComputeInstancesMinOrderByAggregateInput
    _sum?: ComputeInstancesSumOrderByAggregateInput
  }

  export type ComputeInstancesScalarWhereWithAggregatesInput = {
    AND?: ComputeInstancesScalarWhereWithAggregatesInput | ComputeInstancesScalarWhereWithAggregatesInput[]
    OR?: ComputeInstancesScalarWhereWithAggregatesInput[]
    NOT?: ComputeInstancesScalarWhereWithAggregatesInput | ComputeInstancesScalarWhereWithAggregatesInput[]
    tenancy_name?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    tenancy_id?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    id?: StringWithAggregatesFilter<"ComputeInstances"> | string
    display_name?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    compartment_id?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    availability_domain?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    fault_domain?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    region?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    lifecycle_state?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    shape?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    memory_in_gbs?: FloatNullableWithAggregatesFilter<"ComputeInstances"> | number | null
    ocpus?: IntNullableWithAggregatesFilter<"ComputeInstances"> | number | null
    processor_description?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    time_created?: DateTimeNullableWithAggregatesFilter<"ComputeInstances"> | Date | string | null
    CreatedBy?: StringNullableWithAggregatesFilter<"ComputeInstances"> | string | null
    monthly_cost?: FloatNullableWithAggregatesFilter<"ComputeInstances"> | number | null
  }

  export type SubscriptionDetailsWhereInput = {
    AND?: SubscriptionDetailsWhereInput | SubscriptionDetailsWhereInput[]
    OR?: SubscriptionDetailsWhereInput[]
    NOT?: SubscriptionDetailsWhereInput | SubscriptionDetailsWhereInput[]
    tenancy_name?: StringNullableFilter<"SubscriptionDetails"> | string | null
    tenancy_id?: StringFilter<"SubscriptionDetails"> | string
    home_region?: StringNullableFilter<"SubscriptionDetails"> | string | null
    subscription_id?: StringFilter<"SubscriptionDetails"> | string
    service_name?: StringNullableFilter<"SubscriptionDetails"> | string | null
    currency?: StringNullableFilter<"SubscriptionDetails"> | string | null
    time_start?: DateTimeFilter<"SubscriptionDetails"> | Date | string
    time_end?: DateTimeNullableFilter<"SubscriptionDetails"> | Date | string | null
    admin_email?: StringNullableFilter<"SubscriptionDetails"> | string | null
    buyer_email?: StringNullableFilter<"SubscriptionDetails"> | string | null
    end_user_customer?: StringNullableFilter<"SubscriptionDetails"> | string | null
    payment_method?: StringNullableFilter<"SubscriptionDetails"> | string | null
    pricing_model?: StringNullableFilter<"SubscriptionDetails"> | string | null
    product?: StringNullableFilter<"SubscriptionDetails"> | string | null
    is_having_usage?: StringNullableFilter<"SubscriptionDetails"> | string | null
    total_value?: FloatNullableFilter<"SubscriptionDetails"> | number | null
    used_amount?: FloatNullableFilter<"SubscriptionDetails"> | number | null
    line_net_amount?: FloatNullableFilter<"SubscriptionDetails"> | number | null
    available_amount?: FloatNullableFilter<"SubscriptionDetails"> | number | null
    total_dias_contrato?: IntNullableFilter<"SubscriptionDetails"> | number | null
    dias_decorridos?: IntNullableFilter<"SubscriptionDetails"> | number | null
    updated?: DateTimeNullableFilter<"SubscriptionDetails"> | Date | string | null
    status?: StringNullableFilter<"SubscriptionDetails"> | string | null
  }

  export type SubscriptionDetailsOrderByWithRelationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrderInput | SortOrder
    subscription_id?: SortOrder
    service_name?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    time_start?: SortOrder
    time_end?: SortOrderInput | SortOrder
    admin_email?: SortOrderInput | SortOrder
    buyer_email?: SortOrderInput | SortOrder
    end_user_customer?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    pricing_model?: SortOrderInput | SortOrder
    product?: SortOrderInput | SortOrder
    is_having_usage?: SortOrderInput | SortOrder
    total_value?: SortOrderInput | SortOrder
    used_amount?: SortOrderInput | SortOrder
    line_net_amount?: SortOrderInput | SortOrder
    available_amount?: SortOrderInput | SortOrder
    total_dias_contrato?: SortOrderInput | SortOrder
    dias_decorridos?: SortOrderInput | SortOrder
    updated?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _relevance?: SubscriptionDetailsOrderByRelevanceInput
  }

  export type SubscriptionDetailsWhereUniqueInput = Prisma.AtLeast<{
    tenancy_id_subscription_id_time_start?: SubscriptionDetailsTenancy_idSubscription_idTime_startCompoundUniqueInput
    AND?: SubscriptionDetailsWhereInput | SubscriptionDetailsWhereInput[]
    OR?: SubscriptionDetailsWhereInput[]
    NOT?: SubscriptionDetailsWhereInput | SubscriptionDetailsWhereInput[]
    tenancy_name?: StringNullableFilter<"SubscriptionDetails"> | string | null
    tenancy_id?: StringFilter<"SubscriptionDetails"> | string
    home_region?: StringNullableFilter<"SubscriptionDetails"> | string | null
    subscription_id?: StringFilter<"SubscriptionDetails"> | string
    service_name?: StringNullableFilter<"SubscriptionDetails"> | string | null
    currency?: StringNullableFilter<"SubscriptionDetails"> | string | null
    time_start?: DateTimeFilter<"SubscriptionDetails"> | Date | string
    time_end?: DateTimeNullableFilter<"SubscriptionDetails"> | Date | string | null
    admin_email?: StringNullableFilter<"SubscriptionDetails"> | string | null
    buyer_email?: StringNullableFilter<"SubscriptionDetails"> | string | null
    end_user_customer?: StringNullableFilter<"SubscriptionDetails"> | string | null
    payment_method?: StringNullableFilter<"SubscriptionDetails"> | string | null
    pricing_model?: StringNullableFilter<"SubscriptionDetails"> | string | null
    product?: StringNullableFilter<"SubscriptionDetails"> | string | null
    is_having_usage?: StringNullableFilter<"SubscriptionDetails"> | string | null
    total_value?: FloatNullableFilter<"SubscriptionDetails"> | number | null
    used_amount?: FloatNullableFilter<"SubscriptionDetails"> | number | null
    line_net_amount?: FloatNullableFilter<"SubscriptionDetails"> | number | null
    available_amount?: FloatNullableFilter<"SubscriptionDetails"> | number | null
    total_dias_contrato?: IntNullableFilter<"SubscriptionDetails"> | number | null
    dias_decorridos?: IntNullableFilter<"SubscriptionDetails"> | number | null
    updated?: DateTimeNullableFilter<"SubscriptionDetails"> | Date | string | null
    status?: StringNullableFilter<"SubscriptionDetails"> | string | null
  }, "tenancy_id_subscription_id_time_start">

  export type SubscriptionDetailsOrderByWithAggregationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrderInput | SortOrder
    subscription_id?: SortOrder
    service_name?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    time_start?: SortOrder
    time_end?: SortOrderInput | SortOrder
    admin_email?: SortOrderInput | SortOrder
    buyer_email?: SortOrderInput | SortOrder
    end_user_customer?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    pricing_model?: SortOrderInput | SortOrder
    product?: SortOrderInput | SortOrder
    is_having_usage?: SortOrderInput | SortOrder
    total_value?: SortOrderInput | SortOrder
    used_amount?: SortOrderInput | SortOrder
    line_net_amount?: SortOrderInput | SortOrder
    available_amount?: SortOrderInput | SortOrder
    total_dias_contrato?: SortOrderInput | SortOrder
    dias_decorridos?: SortOrderInput | SortOrder
    updated?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: SubscriptionDetailsCountOrderByAggregateInput
    _avg?: SubscriptionDetailsAvgOrderByAggregateInput
    _max?: SubscriptionDetailsMaxOrderByAggregateInput
    _min?: SubscriptionDetailsMinOrderByAggregateInput
    _sum?: SubscriptionDetailsSumOrderByAggregateInput
  }

  export type SubscriptionDetailsScalarWhereWithAggregatesInput = {
    AND?: SubscriptionDetailsScalarWhereWithAggregatesInput | SubscriptionDetailsScalarWhereWithAggregatesInput[]
    OR?: SubscriptionDetailsScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionDetailsScalarWhereWithAggregatesInput | SubscriptionDetailsScalarWhereWithAggregatesInput[]
    tenancy_name?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    tenancy_id?: StringWithAggregatesFilter<"SubscriptionDetails"> | string
    home_region?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    subscription_id?: StringWithAggregatesFilter<"SubscriptionDetails"> | string
    service_name?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    currency?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    time_start?: DateTimeWithAggregatesFilter<"SubscriptionDetails"> | Date | string
    time_end?: DateTimeNullableWithAggregatesFilter<"SubscriptionDetails"> | Date | string | null
    admin_email?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    buyer_email?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    end_user_customer?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    payment_method?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    pricing_model?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    product?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    is_having_usage?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
    total_value?: FloatNullableWithAggregatesFilter<"SubscriptionDetails"> | number | null
    used_amount?: FloatNullableWithAggregatesFilter<"SubscriptionDetails"> | number | null
    line_net_amount?: FloatNullableWithAggregatesFilter<"SubscriptionDetails"> | number | null
    available_amount?: FloatNullableWithAggregatesFilter<"SubscriptionDetails"> | number | null
    total_dias_contrato?: IntNullableWithAggregatesFilter<"SubscriptionDetails"> | number | null
    dias_decorridos?: IntNullableWithAggregatesFilter<"SubscriptionDetails"> | number | null
    updated?: DateTimeNullableWithAggregatesFilter<"SubscriptionDetails"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"SubscriptionDetails"> | string | null
  }

  export type TenancyDetailsWhereInput = {
    AND?: TenancyDetailsWhereInput | TenancyDetailsWhereInput[]
    OR?: TenancyDetailsWhereInput[]
    NOT?: TenancyDetailsWhereInput | TenancyDetailsWhereInput[]
    tenancy_name?: StringNullableFilter<"TenancyDetails"> | string | null
    tenancy_id?: StringFilter<"TenancyDetails"> | string
    home_region?: StringNullableFilter<"TenancyDetails"> | string | null
    subscription_id?: StringNullableFilter<"TenancyDetails"> | string | null
    service_name?: StringNullableFilter<"TenancyDetails"> | string | null
    currency?: StringNullableFilter<"TenancyDetails"> | string | null
    time_start?: DateTimeNullableFilter<"TenancyDetails"> | Date | string | null
    time_end?: DateTimeNullableFilter<"TenancyDetails"> | Date | string | null
    tenancy_status?: StringNullableFilter<"TenancyDetails"> | string | null
    total_credit?: FloatNullableFilter<"TenancyDetails"> | number | null
  }

  export type TenancyDetailsOrderByWithRelationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrderInput | SortOrder
    subscription_id?: SortOrderInput | SortOrder
    service_name?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    time_start?: SortOrderInput | SortOrder
    time_end?: SortOrderInput | SortOrder
    tenancy_status?: SortOrderInput | SortOrder
    total_credit?: SortOrderInput | SortOrder
    _relevance?: TenancyDetailsOrderByRelevanceInput
  }

  export type TenancyDetailsWhereUniqueInput = Prisma.AtLeast<{
    tenancy_id?: string
    AND?: TenancyDetailsWhereInput | TenancyDetailsWhereInput[]
    OR?: TenancyDetailsWhereInput[]
    NOT?: TenancyDetailsWhereInput | TenancyDetailsWhereInput[]
    tenancy_name?: StringNullableFilter<"TenancyDetails"> | string | null
    home_region?: StringNullableFilter<"TenancyDetails"> | string | null
    subscription_id?: StringNullableFilter<"TenancyDetails"> | string | null
    service_name?: StringNullableFilter<"TenancyDetails"> | string | null
    currency?: StringNullableFilter<"TenancyDetails"> | string | null
    time_start?: DateTimeNullableFilter<"TenancyDetails"> | Date | string | null
    time_end?: DateTimeNullableFilter<"TenancyDetails"> | Date | string | null
    tenancy_status?: StringNullableFilter<"TenancyDetails"> | string | null
    total_credit?: FloatNullableFilter<"TenancyDetails"> | number | null
  }, "tenancy_id">

  export type TenancyDetailsOrderByWithAggregationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrderInput | SortOrder
    subscription_id?: SortOrderInput | SortOrder
    service_name?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    time_start?: SortOrderInput | SortOrder
    time_end?: SortOrderInput | SortOrder
    tenancy_status?: SortOrderInput | SortOrder
    total_credit?: SortOrderInput | SortOrder
    _count?: TenancyDetailsCountOrderByAggregateInput
    _avg?: TenancyDetailsAvgOrderByAggregateInput
    _max?: TenancyDetailsMaxOrderByAggregateInput
    _min?: TenancyDetailsMinOrderByAggregateInput
    _sum?: TenancyDetailsSumOrderByAggregateInput
  }

  export type TenancyDetailsScalarWhereWithAggregatesInput = {
    AND?: TenancyDetailsScalarWhereWithAggregatesInput | TenancyDetailsScalarWhereWithAggregatesInput[]
    OR?: TenancyDetailsScalarWhereWithAggregatesInput[]
    NOT?: TenancyDetailsScalarWhereWithAggregatesInput | TenancyDetailsScalarWhereWithAggregatesInput[]
    tenancy_name?: StringNullableWithAggregatesFilter<"TenancyDetails"> | string | null
    tenancy_id?: StringWithAggregatesFilter<"TenancyDetails"> | string
    home_region?: StringNullableWithAggregatesFilter<"TenancyDetails"> | string | null
    subscription_id?: StringNullableWithAggregatesFilter<"TenancyDetails"> | string | null
    service_name?: StringNullableWithAggregatesFilter<"TenancyDetails"> | string | null
    currency?: StringNullableWithAggregatesFilter<"TenancyDetails"> | string | null
    time_start?: DateTimeNullableWithAggregatesFilter<"TenancyDetails"> | Date | string | null
    time_end?: DateTimeNullableWithAggregatesFilter<"TenancyDetails"> | Date | string | null
    tenancy_status?: StringNullableWithAggregatesFilter<"TenancyDetails"> | string | null
    total_credit?: FloatNullableWithAggregatesFilter<"TenancyDetails"> | number | null
  }

  export type tenancy_detailsWhereInput = {
    AND?: tenancy_detailsWhereInput | tenancy_detailsWhereInput[]
    OR?: tenancy_detailsWhereInput[]
    NOT?: tenancy_detailsWhereInput | tenancy_detailsWhereInput[]
    tenancy_id?: StringFilter<"tenancy_details"> | string
    tenancy_name?: StringNullableFilter<"tenancy_details"> | string | null
    home_region?: StringNullableFilter<"tenancy_details"> | string | null
    service_name?: StringNullableFilter<"tenancy_details"> | string | null
    currency?: StringNullableFilter<"tenancy_details"> | string | null
    time_start?: DateTimeFilter<"tenancy_details"> | Date | string
    time_end?: DateTimeFilter<"tenancy_details"> | Date | string
    status?: StringNullableFilter<"tenancy_details"> | string | null
    total_value?: DecimalNullableFilter<"tenancy_details"> | Decimal | DecimalJsLike | number | string | null
  }

  export type tenancy_detailsOrderByWithRelationInput = {
    tenancy_id?: SortOrder
    tenancy_name?: SortOrderInput | SortOrder
    home_region?: SortOrderInput | SortOrder
    service_name?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    status?: SortOrderInput | SortOrder
    total_value?: SortOrderInput | SortOrder
    _relevance?: tenancy_detailsOrderByRelevanceInput
  }

  export type tenancy_detailsWhereUniqueInput = Prisma.AtLeast<{
    tenancy_id?: string
    AND?: tenancy_detailsWhereInput | tenancy_detailsWhereInput[]
    OR?: tenancy_detailsWhereInput[]
    NOT?: tenancy_detailsWhereInput | tenancy_detailsWhereInput[]
    tenancy_name?: StringNullableFilter<"tenancy_details"> | string | null
    home_region?: StringNullableFilter<"tenancy_details"> | string | null
    service_name?: StringNullableFilter<"tenancy_details"> | string | null
    currency?: StringNullableFilter<"tenancy_details"> | string | null
    time_start?: DateTimeFilter<"tenancy_details"> | Date | string
    time_end?: DateTimeFilter<"tenancy_details"> | Date | string
    status?: StringNullableFilter<"tenancy_details"> | string | null
    total_value?: DecimalNullableFilter<"tenancy_details"> | Decimal | DecimalJsLike | number | string | null
  }, "tenancy_id">

  export type tenancy_detailsOrderByWithAggregationInput = {
    tenancy_id?: SortOrder
    tenancy_name?: SortOrderInput | SortOrder
    home_region?: SortOrderInput | SortOrder
    service_name?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    status?: SortOrderInput | SortOrder
    total_value?: SortOrderInput | SortOrder
    _count?: tenancy_detailsCountOrderByAggregateInput
    _avg?: tenancy_detailsAvgOrderByAggregateInput
    _max?: tenancy_detailsMaxOrderByAggregateInput
    _min?: tenancy_detailsMinOrderByAggregateInput
    _sum?: tenancy_detailsSumOrderByAggregateInput
  }

  export type tenancy_detailsScalarWhereWithAggregatesInput = {
    AND?: tenancy_detailsScalarWhereWithAggregatesInput | tenancy_detailsScalarWhereWithAggregatesInput[]
    OR?: tenancy_detailsScalarWhereWithAggregatesInput[]
    NOT?: tenancy_detailsScalarWhereWithAggregatesInput | tenancy_detailsScalarWhereWithAggregatesInput[]
    tenancy_id?: StringWithAggregatesFilter<"tenancy_details"> | string
    tenancy_name?: StringNullableWithAggregatesFilter<"tenancy_details"> | string | null
    home_region?: StringNullableWithAggregatesFilter<"tenancy_details"> | string | null
    service_name?: StringNullableWithAggregatesFilter<"tenancy_details"> | string | null
    currency?: StringNullableWithAggregatesFilter<"tenancy_details"> | string | null
    time_start?: DateTimeWithAggregatesFilter<"tenancy_details"> | Date | string
    time_end?: DateTimeWithAggregatesFilter<"tenancy_details"> | Date | string
    status?: StringNullableWithAggregatesFilter<"tenancy_details"> | string | null
    total_value?: DecimalNullableWithAggregatesFilter<"tenancy_details"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CustoDiarioTotalWhereInput = {
    AND?: CustoDiarioTotalWhereInput | CustoDiarioTotalWhereInput[]
    OR?: CustoDiarioTotalWhereInput[]
    NOT?: CustoDiarioTotalWhereInput | CustoDiarioTotalWhereInput[]
    tenancy_name?: StringNullableFilter<"CustoDiarioTotal"> | string | null
    tenant_id?: StringFilter<"CustoDiarioTotal"> | string
    cost_dia?: FloatNullableFilter<"CustoDiarioTotal"> | number | null
    currency?: StringNullableFilter<"CustoDiarioTotal"> | string | null
    usage_dia?: FloatNullableFilter<"CustoDiarioTotal"> | number | null
    time_started?: DateTimeFilter<"CustoDiarioTotal"> | Date | string
    time_ended?: DateTimeNullableFilter<"CustoDiarioTotal"> | Date | string | null
  }

  export type CustoDiarioTotalOrderByWithRelationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenant_id?: SortOrder
    cost_dia?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    usage_dia?: SortOrderInput | SortOrder
    time_started?: SortOrder
    time_ended?: SortOrderInput | SortOrder
    _relevance?: CustoDiarioTotalOrderByRelevanceInput
  }

  export type CustoDiarioTotalWhereUniqueInput = Prisma.AtLeast<{
    tenant_id_time_started?: CustoDiarioTotalTenant_idTime_startedCompoundUniqueInput
    AND?: CustoDiarioTotalWhereInput | CustoDiarioTotalWhereInput[]
    OR?: CustoDiarioTotalWhereInput[]
    NOT?: CustoDiarioTotalWhereInput | CustoDiarioTotalWhereInput[]
    tenancy_name?: StringNullableFilter<"CustoDiarioTotal"> | string | null
    tenant_id?: StringFilter<"CustoDiarioTotal"> | string
    cost_dia?: FloatNullableFilter<"CustoDiarioTotal"> | number | null
    currency?: StringNullableFilter<"CustoDiarioTotal"> | string | null
    usage_dia?: FloatNullableFilter<"CustoDiarioTotal"> | number | null
    time_started?: DateTimeFilter<"CustoDiarioTotal"> | Date | string
    time_ended?: DateTimeNullableFilter<"CustoDiarioTotal"> | Date | string | null
  }, "tenant_id_time_started">

  export type CustoDiarioTotalOrderByWithAggregationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenant_id?: SortOrder
    cost_dia?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    usage_dia?: SortOrderInput | SortOrder
    time_started?: SortOrder
    time_ended?: SortOrderInput | SortOrder
    _count?: CustoDiarioTotalCountOrderByAggregateInput
    _avg?: CustoDiarioTotalAvgOrderByAggregateInput
    _max?: CustoDiarioTotalMaxOrderByAggregateInput
    _min?: CustoDiarioTotalMinOrderByAggregateInput
    _sum?: CustoDiarioTotalSumOrderByAggregateInput
  }

  export type CustoDiarioTotalScalarWhereWithAggregatesInput = {
    AND?: CustoDiarioTotalScalarWhereWithAggregatesInput | CustoDiarioTotalScalarWhereWithAggregatesInput[]
    OR?: CustoDiarioTotalScalarWhereWithAggregatesInput[]
    NOT?: CustoDiarioTotalScalarWhereWithAggregatesInput | CustoDiarioTotalScalarWhereWithAggregatesInput[]
    tenancy_name?: StringNullableWithAggregatesFilter<"CustoDiarioTotal"> | string | null
    tenant_id?: StringWithAggregatesFilter<"CustoDiarioTotal"> | string
    cost_dia?: FloatNullableWithAggregatesFilter<"CustoDiarioTotal"> | number | null
    currency?: StringNullableWithAggregatesFilter<"CustoDiarioTotal"> | string | null
    usage_dia?: FloatNullableWithAggregatesFilter<"CustoDiarioTotal"> | number | null
    time_started?: DateTimeWithAggregatesFilter<"CustoDiarioTotal"> | Date | string
    time_ended?: DateTimeNullableWithAggregatesFilter<"CustoDiarioTotal"> | Date | string | null
  }

  export type CustoMensalTotalWhereInput = {
    AND?: CustoMensalTotalWhereInput | CustoMensalTotalWhereInput[]
    OR?: CustoMensalTotalWhereInput[]
    NOT?: CustoMensalTotalWhereInput | CustoMensalTotalWhereInput[]
    tenancy_name?: StringNullableFilter<"CustoMensalTotal"> | string | null
    tenant_id?: StringFilter<"CustoMensalTotal"> | string
    cost_mes?: FloatNullableFilter<"CustoMensalTotal"> | number | null
    currency?: StringNullableFilter<"CustoMensalTotal"> | string | null
    usage_mes?: FloatNullableFilter<"CustoMensalTotal"> | number | null
    time_started?: DateTimeFilter<"CustoMensalTotal"> | Date | string
    time_ended?: DateTimeNullableFilter<"CustoMensalTotal"> | Date | string | null
  }

  export type CustoMensalTotalOrderByWithRelationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenant_id?: SortOrder
    cost_mes?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    usage_mes?: SortOrderInput | SortOrder
    time_started?: SortOrder
    time_ended?: SortOrderInput | SortOrder
    _relevance?: CustoMensalTotalOrderByRelevanceInput
  }

  export type CustoMensalTotalWhereUniqueInput = Prisma.AtLeast<{
    tenant_id_time_started?: CustoMensalTotalTenant_idTime_startedCompoundUniqueInput
    AND?: CustoMensalTotalWhereInput | CustoMensalTotalWhereInput[]
    OR?: CustoMensalTotalWhereInput[]
    NOT?: CustoMensalTotalWhereInput | CustoMensalTotalWhereInput[]
    tenancy_name?: StringNullableFilter<"CustoMensalTotal"> | string | null
    tenant_id?: StringFilter<"CustoMensalTotal"> | string
    cost_mes?: FloatNullableFilter<"CustoMensalTotal"> | number | null
    currency?: StringNullableFilter<"CustoMensalTotal"> | string | null
    usage_mes?: FloatNullableFilter<"CustoMensalTotal"> | number | null
    time_started?: DateTimeFilter<"CustoMensalTotal"> | Date | string
    time_ended?: DateTimeNullableFilter<"CustoMensalTotal"> | Date | string | null
  }, "tenant_id_time_started">

  export type CustoMensalTotalOrderByWithAggregationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenant_id?: SortOrder
    cost_mes?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    usage_mes?: SortOrderInput | SortOrder
    time_started?: SortOrder
    time_ended?: SortOrderInput | SortOrder
    _count?: CustoMensalTotalCountOrderByAggregateInput
    _avg?: CustoMensalTotalAvgOrderByAggregateInput
    _max?: CustoMensalTotalMaxOrderByAggregateInput
    _min?: CustoMensalTotalMinOrderByAggregateInput
    _sum?: CustoMensalTotalSumOrderByAggregateInput
  }

  export type CustoMensalTotalScalarWhereWithAggregatesInput = {
    AND?: CustoMensalTotalScalarWhereWithAggregatesInput | CustoMensalTotalScalarWhereWithAggregatesInput[]
    OR?: CustoMensalTotalScalarWhereWithAggregatesInput[]
    NOT?: CustoMensalTotalScalarWhereWithAggregatesInput | CustoMensalTotalScalarWhereWithAggregatesInput[]
    tenancy_name?: StringNullableWithAggregatesFilter<"CustoMensalTotal"> | string | null
    tenant_id?: StringWithAggregatesFilter<"CustoMensalTotal"> | string
    cost_mes?: FloatNullableWithAggregatesFilter<"CustoMensalTotal"> | number | null
    currency?: StringNullableWithAggregatesFilter<"CustoMensalTotal"> | string | null
    usage_mes?: FloatNullableWithAggregatesFilter<"CustoMensalTotal"> | number | null
    time_started?: DateTimeWithAggregatesFilter<"CustoMensalTotal"> | Date | string
    time_ended?: DateTimeNullableWithAggregatesFilter<"CustoMensalTotal"> | Date | string | null
  }

  export type computeEventsWhereInput = {
    AND?: computeEventsWhereInput | computeEventsWhereInput[]
    OR?: computeEventsWhereInput[]
    NOT?: computeEventsWhereInput | computeEventsWhereInput[]
    id?: IntFilter<"computeEvents"> | number
    eventType?: StringNullableFilter<"computeEvents"> | string | null
    eventTime?: DateTimeNullableFilter<"computeEvents"> | Date | string | null
    source?: StringNullableFilter<"computeEvents"> | string | null
    opcRequestId?: StringNullableFilter<"computeEvents"> | string | null
    rawEvent?: StringNullableFilter<"computeEvents"> | string | null
    compartmentId?: StringNullableFilter<"computeEvents"> | string | null
    compartmentName?: StringNullableFilter<"computeEvents"> | string | null
    eventName?: StringNullableFilter<"computeEvents"> | string | null
    message?: StringNullableFilter<"computeEvents"> | string | null
    action?: StringNullableFilter<"computeEvents"> | string | null
    principalName?: StringNullableFilter<"computeEvents"> | string | null
    ipAddress?: StringNullableFilter<"computeEvents"> | string | null
    displayName?: StringNullableFilter<"computeEvents"> | string | null
    lifecycleState?: StringNullableFilter<"computeEvents"> | string | null
    shape?: StringNullableFilter<"computeEvents"> | string | null
    ocpus?: FloatNullableFilter<"computeEvents"> | number | null
    memoryInGbs?: FloatNullableFilter<"computeEvents"> | number | null
    processorDescription?: StringNullableFilter<"computeEvents"> | string | null
    createdBy?: StringNullableFilter<"computeEvents"> | string | null
    createdOn?: DateTimeNullableFilter<"computeEvents"> | Date | string | null
    preserveBootVolume?: BoolNullableFilter<"computeEvents"> | boolean | null
    createdAt?: DateTimeFilter<"computeEvents"> | Date | string
    instanceActionType?: StringNullableFilter<"computeEvents"> | string | null
    tenancyName?: StringNullableFilter<"computeEvents"> | string | null
    isCheck?: BoolNullableFilter<"computeEvents"> | boolean | null
    ticket?: StringNullableFilter<"computeEvents"> | string | null
  }

  export type computeEventsOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrderInput | SortOrder
    eventTime?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    opcRequestId?: SortOrderInput | SortOrder
    rawEvent?: SortOrderInput | SortOrder
    compartmentId?: SortOrderInput | SortOrder
    compartmentName?: SortOrderInput | SortOrder
    eventName?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    principalName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    lifecycleState?: SortOrderInput | SortOrder
    shape?: SortOrderInput | SortOrder
    ocpus?: SortOrderInput | SortOrder
    memoryInGbs?: SortOrderInput | SortOrder
    processorDescription?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdOn?: SortOrderInput | SortOrder
    preserveBootVolume?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    instanceActionType?: SortOrderInput | SortOrder
    tenancyName?: SortOrderInput | SortOrder
    isCheck?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    _relevance?: computeEventsOrderByRelevanceInput
  }

  export type computeEventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    opcRequestId?: string
    AND?: computeEventsWhereInput | computeEventsWhereInput[]
    OR?: computeEventsWhereInput[]
    NOT?: computeEventsWhereInput | computeEventsWhereInput[]
    eventType?: StringNullableFilter<"computeEvents"> | string | null
    eventTime?: DateTimeNullableFilter<"computeEvents"> | Date | string | null
    source?: StringNullableFilter<"computeEvents"> | string | null
    rawEvent?: StringNullableFilter<"computeEvents"> | string | null
    compartmentId?: StringNullableFilter<"computeEvents"> | string | null
    compartmentName?: StringNullableFilter<"computeEvents"> | string | null
    eventName?: StringNullableFilter<"computeEvents"> | string | null
    message?: StringNullableFilter<"computeEvents"> | string | null
    action?: StringNullableFilter<"computeEvents"> | string | null
    principalName?: StringNullableFilter<"computeEvents"> | string | null
    ipAddress?: StringNullableFilter<"computeEvents"> | string | null
    displayName?: StringNullableFilter<"computeEvents"> | string | null
    lifecycleState?: StringNullableFilter<"computeEvents"> | string | null
    shape?: StringNullableFilter<"computeEvents"> | string | null
    ocpus?: FloatNullableFilter<"computeEvents"> | number | null
    memoryInGbs?: FloatNullableFilter<"computeEvents"> | number | null
    processorDescription?: StringNullableFilter<"computeEvents"> | string | null
    createdBy?: StringNullableFilter<"computeEvents"> | string | null
    createdOn?: DateTimeNullableFilter<"computeEvents"> | Date | string | null
    preserveBootVolume?: BoolNullableFilter<"computeEvents"> | boolean | null
    createdAt?: DateTimeFilter<"computeEvents"> | Date | string
    instanceActionType?: StringNullableFilter<"computeEvents"> | string | null
    tenancyName?: StringNullableFilter<"computeEvents"> | string | null
    isCheck?: BoolNullableFilter<"computeEvents"> | boolean | null
    ticket?: StringNullableFilter<"computeEvents"> | string | null
  }, "id" | "opcRequestId">

  export type computeEventsOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrderInput | SortOrder
    eventTime?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    opcRequestId?: SortOrderInput | SortOrder
    rawEvent?: SortOrderInput | SortOrder
    compartmentId?: SortOrderInput | SortOrder
    compartmentName?: SortOrderInput | SortOrder
    eventName?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    principalName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    lifecycleState?: SortOrderInput | SortOrder
    shape?: SortOrderInput | SortOrder
    ocpus?: SortOrderInput | SortOrder
    memoryInGbs?: SortOrderInput | SortOrder
    processorDescription?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdOn?: SortOrderInput | SortOrder
    preserveBootVolume?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    instanceActionType?: SortOrderInput | SortOrder
    tenancyName?: SortOrderInput | SortOrder
    isCheck?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    _count?: computeEventsCountOrderByAggregateInput
    _avg?: computeEventsAvgOrderByAggregateInput
    _max?: computeEventsMaxOrderByAggregateInput
    _min?: computeEventsMinOrderByAggregateInput
    _sum?: computeEventsSumOrderByAggregateInput
  }

  export type computeEventsScalarWhereWithAggregatesInput = {
    AND?: computeEventsScalarWhereWithAggregatesInput | computeEventsScalarWhereWithAggregatesInput[]
    OR?: computeEventsScalarWhereWithAggregatesInput[]
    NOT?: computeEventsScalarWhereWithAggregatesInput | computeEventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"computeEvents"> | number
    eventType?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    eventTime?: DateTimeNullableWithAggregatesFilter<"computeEvents"> | Date | string | null
    source?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    opcRequestId?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    rawEvent?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    compartmentId?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    compartmentName?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    eventName?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    message?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    action?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    principalName?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    lifecycleState?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    shape?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    ocpus?: FloatNullableWithAggregatesFilter<"computeEvents"> | number | null
    memoryInGbs?: FloatNullableWithAggregatesFilter<"computeEvents"> | number | null
    processorDescription?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    createdOn?: DateTimeNullableWithAggregatesFilter<"computeEvents"> | Date | string | null
    preserveBootVolume?: BoolNullableWithAggregatesFilter<"computeEvents"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"computeEvents"> | Date | string
    instanceActionType?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    tenancyName?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
    isCheck?: BoolNullableWithAggregatesFilter<"computeEvents"> | boolean | null
    ticket?: StringNullableWithAggregatesFilter<"computeEvents"> | string | null
  }

  export type identityEventsWhereInput = {
    AND?: identityEventsWhereInput | identityEventsWhereInput[]
    OR?: identityEventsWhereInput[]
    NOT?: identityEventsWhereInput | identityEventsWhereInput[]
    id?: IntFilter<"identityEvents"> | number
    eventType?: StringNullableFilter<"identityEvents"> | string | null
    eventTime?: DateTimeNullableFilter<"identityEvents"> | Date | string | null
    source?: StringNullableFilter<"identityEvents"> | string | null
    opcRequestId?: StringNullableFilter<"identityEvents"> | string | null
    rawEvent?: StringNullableFilter<"identityEvents"> | string | null
    adminResourceName?: StringNullableFilter<"identityEvents"> | string | null
    adminResourceType?: StringNullableFilter<"identityEvents"> | string | null
    compartmentName?: StringNullableFilter<"identityEvents"> | string | null
    principalName?: StringNullableFilter<"identityEvents"> | string | null
    action?: StringNullableFilter<"identityEvents"> | string | null
    message?: StringNullableFilter<"identityEvents"> | string | null
    idcsLastModifiedByName?: StringNullableFilter<"identityEvents"> | string | null
    idcsLastModifiedByType?: StringNullableFilter<"identityEvents"> | string | null
    policyName?: StringNullableFilter<"identityEvents"> | string | null
    statements?: StringNullableFilter<"identityEvents"> | string | null
    createdAt?: DateTimeFilter<"identityEvents"> | Date | string
    eventName?: StringNullableFilter<"identityEvents"> | string | null
    tenancyName?: StringNullableFilter<"identityEvents"> | string | null
    isCheck?: BoolNullableFilter<"identityEvents"> | boolean | null
    ticket?: StringNullableFilter<"identityEvents"> | string | null
  }

  export type identityEventsOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrderInput | SortOrder
    eventTime?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    opcRequestId?: SortOrderInput | SortOrder
    rawEvent?: SortOrderInput | SortOrder
    adminResourceName?: SortOrderInput | SortOrder
    adminResourceType?: SortOrderInput | SortOrder
    compartmentName?: SortOrderInput | SortOrder
    principalName?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    idcsLastModifiedByName?: SortOrderInput | SortOrder
    idcsLastModifiedByType?: SortOrderInput | SortOrder
    policyName?: SortOrderInput | SortOrder
    statements?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventName?: SortOrderInput | SortOrder
    tenancyName?: SortOrderInput | SortOrder
    isCheck?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    _relevance?: identityEventsOrderByRelevanceInput
  }

  export type identityEventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    opcRequestId?: string
    AND?: identityEventsWhereInput | identityEventsWhereInput[]
    OR?: identityEventsWhereInput[]
    NOT?: identityEventsWhereInput | identityEventsWhereInput[]
    eventType?: StringNullableFilter<"identityEvents"> | string | null
    eventTime?: DateTimeNullableFilter<"identityEvents"> | Date | string | null
    source?: StringNullableFilter<"identityEvents"> | string | null
    rawEvent?: StringNullableFilter<"identityEvents"> | string | null
    adminResourceName?: StringNullableFilter<"identityEvents"> | string | null
    adminResourceType?: StringNullableFilter<"identityEvents"> | string | null
    compartmentName?: StringNullableFilter<"identityEvents"> | string | null
    principalName?: StringNullableFilter<"identityEvents"> | string | null
    action?: StringNullableFilter<"identityEvents"> | string | null
    message?: StringNullableFilter<"identityEvents"> | string | null
    idcsLastModifiedByName?: StringNullableFilter<"identityEvents"> | string | null
    idcsLastModifiedByType?: StringNullableFilter<"identityEvents"> | string | null
    policyName?: StringNullableFilter<"identityEvents"> | string | null
    statements?: StringNullableFilter<"identityEvents"> | string | null
    createdAt?: DateTimeFilter<"identityEvents"> | Date | string
    eventName?: StringNullableFilter<"identityEvents"> | string | null
    tenancyName?: StringNullableFilter<"identityEvents"> | string | null
    isCheck?: BoolNullableFilter<"identityEvents"> | boolean | null
    ticket?: StringNullableFilter<"identityEvents"> | string | null
  }, "id" | "opcRequestId">

  export type identityEventsOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrderInput | SortOrder
    eventTime?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    opcRequestId?: SortOrderInput | SortOrder
    rawEvent?: SortOrderInput | SortOrder
    adminResourceName?: SortOrderInput | SortOrder
    adminResourceType?: SortOrderInput | SortOrder
    compartmentName?: SortOrderInput | SortOrder
    principalName?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    idcsLastModifiedByName?: SortOrderInput | SortOrder
    idcsLastModifiedByType?: SortOrderInput | SortOrder
    policyName?: SortOrderInput | SortOrder
    statements?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventName?: SortOrderInput | SortOrder
    tenancyName?: SortOrderInput | SortOrder
    isCheck?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    _count?: identityEventsCountOrderByAggregateInput
    _avg?: identityEventsAvgOrderByAggregateInput
    _max?: identityEventsMaxOrderByAggregateInput
    _min?: identityEventsMinOrderByAggregateInput
    _sum?: identityEventsSumOrderByAggregateInput
  }

  export type identityEventsScalarWhereWithAggregatesInput = {
    AND?: identityEventsScalarWhereWithAggregatesInput | identityEventsScalarWhereWithAggregatesInput[]
    OR?: identityEventsScalarWhereWithAggregatesInput[]
    NOT?: identityEventsScalarWhereWithAggregatesInput | identityEventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"identityEvents"> | number
    eventType?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    eventTime?: DateTimeNullableWithAggregatesFilter<"identityEvents"> | Date | string | null
    source?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    opcRequestId?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    rawEvent?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    adminResourceName?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    adminResourceType?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    compartmentName?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    principalName?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    action?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    message?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    idcsLastModifiedByName?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    idcsLastModifiedByType?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    policyName?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    statements?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"identityEvents"> | Date | string
    eventName?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    tenancyName?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
    isCheck?: BoolNullableWithAggregatesFilter<"identityEvents"> | boolean | null
    ticket?: StringNullableWithAggregatesFilter<"identityEvents"> | string | null
  }

  export type networkEventsWhereInput = {
    AND?: networkEventsWhereInput | networkEventsWhereInput[]
    OR?: networkEventsWhereInput[]
    NOT?: networkEventsWhereInput | networkEventsWhereInput[]
    eventType?: StringNullableFilter<"networkEvents"> | string | null
    eventTime?: DateTimeNullableFilter<"networkEvents"> | Date | string | null
    source?: StringNullableFilter<"networkEvents"> | string | null
    opcRequestId?: StringNullableFilter<"networkEvents"> | string | null
    rawEvent?: StringNullableFilter<"networkEvents"> | string | null
    compartmentId?: StringNullableFilter<"networkEvents"> | string | null
    compartmentName?: StringNullableFilter<"networkEvents"> | string | null
    eventName?: StringNullableFilter<"networkEvents"> | string | null
    message?: StringNullableFilter<"networkEvents"> | string | null
    action?: StringNullableFilter<"networkEvents"> | string | null
    principalName?: StringNullableFilter<"networkEvents"> | string | null
    ipAddress?: StringNullableFilter<"networkEvents"> | string | null
    routeRules?: StringNullableFilter<"networkEvents"> | string | null
    createdBy?: StringNullableFilter<"networkEvents"> | string | null
    createdOn?: DateTimeNullableFilter<"networkEvents"> | Date | string | null
    createdAt?: DateTimeFilter<"networkEvents"> | Date | string
    tenancyName?: StringNullableFilter<"networkEvents"> | string | null
    isCheck?: BoolNullableFilter<"networkEvents"> | boolean | null
    ticket?: StringNullableFilter<"networkEvents"> | string | null
    id?: IntFilter<"networkEvents"> | number
  }

  export type networkEventsOrderByWithRelationInput = {
    eventType?: SortOrderInput | SortOrder
    eventTime?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    opcRequestId?: SortOrderInput | SortOrder
    rawEvent?: SortOrderInput | SortOrder
    compartmentId?: SortOrderInput | SortOrder
    compartmentName?: SortOrderInput | SortOrder
    eventName?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    principalName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    routeRules?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdOn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenancyName?: SortOrderInput | SortOrder
    isCheck?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    id?: SortOrder
    _relevance?: networkEventsOrderByRelevanceInput
  }

  export type networkEventsWhereUniqueInput = Prisma.AtLeast<{
    opcRequestId?: string
    id?: number
    AND?: networkEventsWhereInput | networkEventsWhereInput[]
    OR?: networkEventsWhereInput[]
    NOT?: networkEventsWhereInput | networkEventsWhereInput[]
    eventType?: StringNullableFilter<"networkEvents"> | string | null
    eventTime?: DateTimeNullableFilter<"networkEvents"> | Date | string | null
    source?: StringNullableFilter<"networkEvents"> | string | null
    rawEvent?: StringNullableFilter<"networkEvents"> | string | null
    compartmentId?: StringNullableFilter<"networkEvents"> | string | null
    compartmentName?: StringNullableFilter<"networkEvents"> | string | null
    eventName?: StringNullableFilter<"networkEvents"> | string | null
    message?: StringNullableFilter<"networkEvents"> | string | null
    action?: StringNullableFilter<"networkEvents"> | string | null
    principalName?: StringNullableFilter<"networkEvents"> | string | null
    ipAddress?: StringNullableFilter<"networkEvents"> | string | null
    routeRules?: StringNullableFilter<"networkEvents"> | string | null
    createdBy?: StringNullableFilter<"networkEvents"> | string | null
    createdOn?: DateTimeNullableFilter<"networkEvents"> | Date | string | null
    createdAt?: DateTimeFilter<"networkEvents"> | Date | string
    tenancyName?: StringNullableFilter<"networkEvents"> | string | null
    isCheck?: BoolNullableFilter<"networkEvents"> | boolean | null
    ticket?: StringNullableFilter<"networkEvents"> | string | null
  }, "id" | "opcRequestId">

  export type networkEventsOrderByWithAggregationInput = {
    eventType?: SortOrderInput | SortOrder
    eventTime?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    opcRequestId?: SortOrderInput | SortOrder
    rawEvent?: SortOrderInput | SortOrder
    compartmentId?: SortOrderInput | SortOrder
    compartmentName?: SortOrderInput | SortOrder
    eventName?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    principalName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    routeRules?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdOn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenancyName?: SortOrderInput | SortOrder
    isCheck?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: networkEventsCountOrderByAggregateInput
    _avg?: networkEventsAvgOrderByAggregateInput
    _max?: networkEventsMaxOrderByAggregateInput
    _min?: networkEventsMinOrderByAggregateInput
    _sum?: networkEventsSumOrderByAggregateInput
  }

  export type networkEventsScalarWhereWithAggregatesInput = {
    AND?: networkEventsScalarWhereWithAggregatesInput | networkEventsScalarWhereWithAggregatesInput[]
    OR?: networkEventsScalarWhereWithAggregatesInput[]
    NOT?: networkEventsScalarWhereWithAggregatesInput | networkEventsScalarWhereWithAggregatesInput[]
    eventType?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    eventTime?: DateTimeNullableWithAggregatesFilter<"networkEvents"> | Date | string | null
    source?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    opcRequestId?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    rawEvent?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    compartmentId?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    compartmentName?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    eventName?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    message?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    action?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    principalName?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    routeRules?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    createdOn?: DateTimeNullableWithAggregatesFilter<"networkEvents"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"networkEvents"> | Date | string
    tenancyName?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    isCheck?: BoolNullableWithAggregatesFilter<"networkEvents"> | boolean | null
    ticket?: StringNullableWithAggregatesFilter<"networkEvents"> | string | null
    id?: IntWithAggregatesFilter<"networkEvents"> | number
  }

  export type BlockVolumeWhereInput = {
    AND?: BlockVolumeWhereInput | BlockVolumeWhereInput[]
    OR?: BlockVolumeWhereInput[]
    NOT?: BlockVolumeWhereInput | BlockVolumeWhereInput[]
    tenancy_name?: StringNullableFilter<"BlockVolume"> | string | null
    tenancy_id?: StringFilter<"BlockVolume"> | string
    availability_domain?: StringNullableFilter<"BlockVolume"> | string | null
    compartment_id?: StringNullableFilter<"BlockVolume"> | string | null
    display_name?: StringNullableFilter<"BlockVolume"> | string | null
    id?: StringFilter<"BlockVolume"> | string
    lifecycle_state?: StringNullableFilter<"BlockVolume"> | string | null
    size_in_gbs?: FloatNullableFilter<"BlockVolume"> | number | null
    time_created?: DateTimeNullableFilter<"BlockVolume"> | Date | string | null
    vpus_per_gb?: IntNullableFilter<"BlockVolume"> | number | null
    is_boot_volume?: StringNullableFilter<"BlockVolume"> | string | null
    is_orfao?: StringNullableFilter<"BlockVolume"> | string | null
    custo_mes?: FloatNullableFilter<"BlockVolume"> | number | null
    updated?: DateTimeNullableFilter<"BlockVolume"> | Date | string | null
  }

  export type BlockVolumeOrderByWithRelationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenancy_id?: SortOrder
    availability_domain?: SortOrderInput | SortOrder
    compartment_id?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    id?: SortOrder
    lifecycle_state?: SortOrderInput | SortOrder
    size_in_gbs?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    vpus_per_gb?: SortOrderInput | SortOrder
    is_boot_volume?: SortOrderInput | SortOrder
    is_orfao?: SortOrderInput | SortOrder
    custo_mes?: SortOrderInput | SortOrder
    updated?: SortOrderInput | SortOrder
    _relevance?: BlockVolumeOrderByRelevanceInput
  }

  export type BlockVolumeWhereUniqueInput = Prisma.AtLeast<{
    tenancy_id_id?: BlockVolumeTenancy_idIdCompoundUniqueInput
    AND?: BlockVolumeWhereInput | BlockVolumeWhereInput[]
    OR?: BlockVolumeWhereInput[]
    NOT?: BlockVolumeWhereInput | BlockVolumeWhereInput[]
    tenancy_name?: StringNullableFilter<"BlockVolume"> | string | null
    tenancy_id?: StringFilter<"BlockVolume"> | string
    availability_domain?: StringNullableFilter<"BlockVolume"> | string | null
    compartment_id?: StringNullableFilter<"BlockVolume"> | string | null
    display_name?: StringNullableFilter<"BlockVolume"> | string | null
    id?: StringFilter<"BlockVolume"> | string
    lifecycle_state?: StringNullableFilter<"BlockVolume"> | string | null
    size_in_gbs?: FloatNullableFilter<"BlockVolume"> | number | null
    time_created?: DateTimeNullableFilter<"BlockVolume"> | Date | string | null
    vpus_per_gb?: IntNullableFilter<"BlockVolume"> | number | null
    is_boot_volume?: StringNullableFilter<"BlockVolume"> | string | null
    is_orfao?: StringNullableFilter<"BlockVolume"> | string | null
    custo_mes?: FloatNullableFilter<"BlockVolume"> | number | null
    updated?: DateTimeNullableFilter<"BlockVolume"> | Date | string | null
  }, "tenancy_id_id">

  export type BlockVolumeOrderByWithAggregationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenancy_id?: SortOrder
    availability_domain?: SortOrderInput | SortOrder
    compartment_id?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    id?: SortOrder
    lifecycle_state?: SortOrderInput | SortOrder
    size_in_gbs?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    vpus_per_gb?: SortOrderInput | SortOrder
    is_boot_volume?: SortOrderInput | SortOrder
    is_orfao?: SortOrderInput | SortOrder
    custo_mes?: SortOrderInput | SortOrder
    updated?: SortOrderInput | SortOrder
    _count?: BlockVolumeCountOrderByAggregateInput
    _avg?: BlockVolumeAvgOrderByAggregateInput
    _max?: BlockVolumeMaxOrderByAggregateInput
    _min?: BlockVolumeMinOrderByAggregateInput
    _sum?: BlockVolumeSumOrderByAggregateInput
  }

  export type BlockVolumeScalarWhereWithAggregatesInput = {
    AND?: BlockVolumeScalarWhereWithAggregatesInput | BlockVolumeScalarWhereWithAggregatesInput[]
    OR?: BlockVolumeScalarWhereWithAggregatesInput[]
    NOT?: BlockVolumeScalarWhereWithAggregatesInput | BlockVolumeScalarWhereWithAggregatesInput[]
    tenancy_name?: StringNullableWithAggregatesFilter<"BlockVolume"> | string | null
    tenancy_id?: StringWithAggregatesFilter<"BlockVolume"> | string
    availability_domain?: StringNullableWithAggregatesFilter<"BlockVolume"> | string | null
    compartment_id?: StringNullableWithAggregatesFilter<"BlockVolume"> | string | null
    display_name?: StringNullableWithAggregatesFilter<"BlockVolume"> | string | null
    id?: StringWithAggregatesFilter<"BlockVolume"> | string
    lifecycle_state?: StringNullableWithAggregatesFilter<"BlockVolume"> | string | null
    size_in_gbs?: FloatNullableWithAggregatesFilter<"BlockVolume"> | number | null
    time_created?: DateTimeNullableWithAggregatesFilter<"BlockVolume"> | Date | string | null
    vpus_per_gb?: IntNullableWithAggregatesFilter<"BlockVolume"> | number | null
    is_boot_volume?: StringNullableWithAggregatesFilter<"BlockVolume"> | string | null
    is_orfao?: StringNullableWithAggregatesFilter<"BlockVolume"> | string | null
    custo_mes?: FloatNullableWithAggregatesFilter<"BlockVolume"> | number | null
    updated?: DateTimeNullableWithAggregatesFilter<"BlockVolume"> | Date | string | null
  }

  export type CustoPorServiceWhereInput = {
    AND?: CustoPorServiceWhereInput | CustoPorServiceWhereInput[]
    OR?: CustoPorServiceWhereInput[]
    NOT?: CustoPorServiceWhereInput | CustoPorServiceWhereInput[]
    tenancy_name?: StringNullableFilter<"CustoPorService"> | string | null
    tenant_id?: StringFilter<"CustoPorService"> | string
    service?: StringFilter<"CustoPorService"> | string
    cost_mes?: FloatNullableFilter<"CustoPorService"> | number | null
    currency?: StringNullableFilter<"CustoPorService"> | string | null
    usage_mes?: FloatNullableFilter<"CustoPorService"> | number | null
    time_started?: DateTimeFilter<"CustoPorService"> | Date | string
    time_ended?: DateTimeNullableFilter<"CustoPorService"> | Date | string | null
  }

  export type CustoPorServiceOrderByWithRelationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenant_id?: SortOrder
    service?: SortOrder
    cost_mes?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    usage_mes?: SortOrderInput | SortOrder
    time_started?: SortOrder
    time_ended?: SortOrderInput | SortOrder
    _relevance?: CustoPorServiceOrderByRelevanceInput
  }

  export type CustoPorServiceWhereUniqueInput = Prisma.AtLeast<{
    tenant_id_time_started_service?: CustoPorServiceTenant_idTime_startedServiceCompoundUniqueInput
    AND?: CustoPorServiceWhereInput | CustoPorServiceWhereInput[]
    OR?: CustoPorServiceWhereInput[]
    NOT?: CustoPorServiceWhereInput | CustoPorServiceWhereInput[]
    tenancy_name?: StringNullableFilter<"CustoPorService"> | string | null
    tenant_id?: StringFilter<"CustoPorService"> | string
    service?: StringFilter<"CustoPorService"> | string
    cost_mes?: FloatNullableFilter<"CustoPorService"> | number | null
    currency?: StringNullableFilter<"CustoPorService"> | string | null
    usage_mes?: FloatNullableFilter<"CustoPorService"> | number | null
    time_started?: DateTimeFilter<"CustoPorService"> | Date | string
    time_ended?: DateTimeNullableFilter<"CustoPorService"> | Date | string | null
  }, "tenant_id_time_started_service">

  export type CustoPorServiceOrderByWithAggregationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenant_id?: SortOrder
    service?: SortOrder
    cost_mes?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    usage_mes?: SortOrderInput | SortOrder
    time_started?: SortOrder
    time_ended?: SortOrderInput | SortOrder
    _count?: CustoPorServiceCountOrderByAggregateInput
    _avg?: CustoPorServiceAvgOrderByAggregateInput
    _max?: CustoPorServiceMaxOrderByAggregateInput
    _min?: CustoPorServiceMinOrderByAggregateInput
    _sum?: CustoPorServiceSumOrderByAggregateInput
  }

  export type CustoPorServiceScalarWhereWithAggregatesInput = {
    AND?: CustoPorServiceScalarWhereWithAggregatesInput | CustoPorServiceScalarWhereWithAggregatesInput[]
    OR?: CustoPorServiceScalarWhereWithAggregatesInput[]
    NOT?: CustoPorServiceScalarWhereWithAggregatesInput | CustoPorServiceScalarWhereWithAggregatesInput[]
    tenancy_name?: StringNullableWithAggregatesFilter<"CustoPorService"> | string | null
    tenant_id?: StringWithAggregatesFilter<"CustoPorService"> | string
    service?: StringWithAggregatesFilter<"CustoPorService"> | string
    cost_mes?: FloatNullableWithAggregatesFilter<"CustoPorService"> | number | null
    currency?: StringNullableWithAggregatesFilter<"CustoPorService"> | string | null
    usage_mes?: FloatNullableWithAggregatesFilter<"CustoPorService"> | number | null
    time_started?: DateTimeWithAggregatesFilter<"CustoPorService"> | Date | string
    time_ended?: DateTimeNullableWithAggregatesFilter<"CustoPorService"> | Date | string | null
  }

  export type CustoPorSkuNameWhereInput = {
    AND?: CustoPorSkuNameWhereInput | CustoPorSkuNameWhereInput[]
    OR?: CustoPorSkuNameWhereInput[]
    NOT?: CustoPorSkuNameWhereInput | CustoPorSkuNameWhereInput[]
    tenancy_name?: StringNullableFilter<"CustoPorSkuName"> | string | null
    tenant_id?: StringFilter<"CustoPorSkuName"> | string
    sku_name?: StringFilter<"CustoPorSkuName"> | string
    cost_mes?: FloatNullableFilter<"CustoPorSkuName"> | number | null
    currency?: StringNullableFilter<"CustoPorSkuName"> | string | null
    usage_mes?: FloatNullableFilter<"CustoPorSkuName"> | number | null
    time_started?: DateTimeFilter<"CustoPorSkuName"> | Date | string
    time_ended?: DateTimeNullableFilter<"CustoPorSkuName"> | Date | string | null
  }

  export type CustoPorSkuNameOrderByWithRelationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenant_id?: SortOrder
    sku_name?: SortOrder
    cost_mes?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    usage_mes?: SortOrderInput | SortOrder
    time_started?: SortOrder
    time_ended?: SortOrderInput | SortOrder
    _relevance?: CustoPorSkuNameOrderByRelevanceInput
  }

  export type CustoPorSkuNameWhereUniqueInput = Prisma.AtLeast<{
    tenant_id_time_started_sku_name?: CustoPorSkuNameTenant_idTime_startedSku_nameCompoundUniqueInput
    AND?: CustoPorSkuNameWhereInput | CustoPorSkuNameWhereInput[]
    OR?: CustoPorSkuNameWhereInput[]
    NOT?: CustoPorSkuNameWhereInput | CustoPorSkuNameWhereInput[]
    tenancy_name?: StringNullableFilter<"CustoPorSkuName"> | string | null
    tenant_id?: StringFilter<"CustoPorSkuName"> | string
    sku_name?: StringFilter<"CustoPorSkuName"> | string
    cost_mes?: FloatNullableFilter<"CustoPorSkuName"> | number | null
    currency?: StringNullableFilter<"CustoPorSkuName"> | string | null
    usage_mes?: FloatNullableFilter<"CustoPorSkuName"> | number | null
    time_started?: DateTimeFilter<"CustoPorSkuName"> | Date | string
    time_ended?: DateTimeNullableFilter<"CustoPorSkuName"> | Date | string | null
  }, "tenant_id_time_started_sku_name">

  export type CustoPorSkuNameOrderByWithAggregationInput = {
    tenancy_name?: SortOrderInput | SortOrder
    tenant_id?: SortOrder
    sku_name?: SortOrder
    cost_mes?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    usage_mes?: SortOrderInput | SortOrder
    time_started?: SortOrder
    time_ended?: SortOrderInput | SortOrder
    _count?: CustoPorSkuNameCountOrderByAggregateInput
    _avg?: CustoPorSkuNameAvgOrderByAggregateInput
    _max?: CustoPorSkuNameMaxOrderByAggregateInput
    _min?: CustoPorSkuNameMinOrderByAggregateInput
    _sum?: CustoPorSkuNameSumOrderByAggregateInput
  }

  export type CustoPorSkuNameScalarWhereWithAggregatesInput = {
    AND?: CustoPorSkuNameScalarWhereWithAggregatesInput | CustoPorSkuNameScalarWhereWithAggregatesInput[]
    OR?: CustoPorSkuNameScalarWhereWithAggregatesInput[]
    NOT?: CustoPorSkuNameScalarWhereWithAggregatesInput | CustoPorSkuNameScalarWhereWithAggregatesInput[]
    tenancy_name?: StringNullableWithAggregatesFilter<"CustoPorSkuName"> | string | null
    tenant_id?: StringWithAggregatesFilter<"CustoPorSkuName"> | string
    sku_name?: StringWithAggregatesFilter<"CustoPorSkuName"> | string
    cost_mes?: FloatNullableWithAggregatesFilter<"CustoPorSkuName"> | number | null
    currency?: StringNullableWithAggregatesFilter<"CustoPorSkuName"> | string | null
    usage_mes?: FloatNullableWithAggregatesFilter<"CustoPorSkuName"> | number | null
    time_started?: DateTimeWithAggregatesFilter<"CustoPorSkuName"> | Date | string
    time_ended?: DateTimeNullableWithAggregatesFilter<"CustoPorSkuName"> | Date | string | null
  }

  export type IdentityUsersWhereInput = {
    AND?: IdentityUsersWhereInput | IdentityUsersWhereInput[]
    OR?: IdentityUsersWhereInput[]
    NOT?: IdentityUsersWhereInput | IdentityUsersWhereInput[]
    id?: BigIntFilter<"IdentityUsers"> | bigint | number
    is_mfa_activated?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    lifecycle_state?: StringNullableFilter<"IdentityUsers"> | string | null
    time_created?: DateTimeNullableFilter<"IdentityUsers"> | Date | string | null
    last_successful_login_time?: DateTimeNullableFilter<"IdentityUsers"> | Date | string | null
    email?: StringNullableFilter<"IdentityUsers"> | string | null
    email_verified?: StringNullableFilter<"IdentityUsers"> | string | null
    can_use_api_keys?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_auth_tokens?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_console_password?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_customer_secret_keys?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_db_credentials?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_o_auth2_client_credentials?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_smtp_credentials?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    identity_provider_id?: StringNullableFilter<"IdentityUsers"> | string | null
    tenancy_name?: StringNullableFilter<"IdentityUsers"> | string | null
  }

  export type IdentityUsersOrderByWithRelationInput = {
    id?: SortOrder
    is_mfa_activated?: SortOrderInput | SortOrder
    lifecycle_state?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    last_successful_login_time?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    email_verified?: SortOrderInput | SortOrder
    can_use_api_keys?: SortOrderInput | SortOrder
    can_use_auth_tokens?: SortOrderInput | SortOrder
    can_use_console_password?: SortOrderInput | SortOrder
    can_use_customer_secret_keys?: SortOrderInput | SortOrder
    can_use_db_credentials?: SortOrderInput | SortOrder
    can_use_o_auth2_client_credentials?: SortOrderInput | SortOrder
    can_use_smtp_credentials?: SortOrderInput | SortOrder
    identity_provider_id?: SortOrderInput | SortOrder
    tenancy_name?: SortOrderInput | SortOrder
    _relevance?: IdentityUsersOrderByRelevanceInput
  }

  export type IdentityUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: IdentityUsersWhereInput | IdentityUsersWhereInput[]
    OR?: IdentityUsersWhereInput[]
    NOT?: IdentityUsersWhereInput | IdentityUsersWhereInput[]
    is_mfa_activated?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    lifecycle_state?: StringNullableFilter<"IdentityUsers"> | string | null
    time_created?: DateTimeNullableFilter<"IdentityUsers"> | Date | string | null
    last_successful_login_time?: DateTimeNullableFilter<"IdentityUsers"> | Date | string | null
    email?: StringNullableFilter<"IdentityUsers"> | string | null
    email_verified?: StringNullableFilter<"IdentityUsers"> | string | null
    can_use_api_keys?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_auth_tokens?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_console_password?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_customer_secret_keys?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_db_credentials?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_o_auth2_client_credentials?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    can_use_smtp_credentials?: BoolNullableFilter<"IdentityUsers"> | boolean | null
    identity_provider_id?: StringNullableFilter<"IdentityUsers"> | string | null
    tenancy_name?: StringNullableFilter<"IdentityUsers"> | string | null
  }, "id">

  export type IdentityUsersOrderByWithAggregationInput = {
    id?: SortOrder
    is_mfa_activated?: SortOrderInput | SortOrder
    lifecycle_state?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    last_successful_login_time?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    email_verified?: SortOrderInput | SortOrder
    can_use_api_keys?: SortOrderInput | SortOrder
    can_use_auth_tokens?: SortOrderInput | SortOrder
    can_use_console_password?: SortOrderInput | SortOrder
    can_use_customer_secret_keys?: SortOrderInput | SortOrder
    can_use_db_credentials?: SortOrderInput | SortOrder
    can_use_o_auth2_client_credentials?: SortOrderInput | SortOrder
    can_use_smtp_credentials?: SortOrderInput | SortOrder
    identity_provider_id?: SortOrderInput | SortOrder
    tenancy_name?: SortOrderInput | SortOrder
    _count?: IdentityUsersCountOrderByAggregateInput
    _avg?: IdentityUsersAvgOrderByAggregateInput
    _max?: IdentityUsersMaxOrderByAggregateInput
    _min?: IdentityUsersMinOrderByAggregateInput
    _sum?: IdentityUsersSumOrderByAggregateInput
  }

  export type IdentityUsersScalarWhereWithAggregatesInput = {
    AND?: IdentityUsersScalarWhereWithAggregatesInput | IdentityUsersScalarWhereWithAggregatesInput[]
    OR?: IdentityUsersScalarWhereWithAggregatesInput[]
    NOT?: IdentityUsersScalarWhereWithAggregatesInput | IdentityUsersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"IdentityUsers"> | bigint | number
    is_mfa_activated?: BoolNullableWithAggregatesFilter<"IdentityUsers"> | boolean | null
    lifecycle_state?: StringNullableWithAggregatesFilter<"IdentityUsers"> | string | null
    time_created?: DateTimeNullableWithAggregatesFilter<"IdentityUsers"> | Date | string | null
    last_successful_login_time?: DateTimeNullableWithAggregatesFilter<"IdentityUsers"> | Date | string | null
    email?: StringNullableWithAggregatesFilter<"IdentityUsers"> | string | null
    email_verified?: StringNullableWithAggregatesFilter<"IdentityUsers"> | string | null
    can_use_api_keys?: BoolNullableWithAggregatesFilter<"IdentityUsers"> | boolean | null
    can_use_auth_tokens?: BoolNullableWithAggregatesFilter<"IdentityUsers"> | boolean | null
    can_use_console_password?: BoolNullableWithAggregatesFilter<"IdentityUsers"> | boolean | null
    can_use_customer_secret_keys?: BoolNullableWithAggregatesFilter<"IdentityUsers"> | boolean | null
    can_use_db_credentials?: BoolNullableWithAggregatesFilter<"IdentityUsers"> | boolean | null
    can_use_o_auth2_client_credentials?: BoolNullableWithAggregatesFilter<"IdentityUsers"> | boolean | null
    can_use_smtp_credentials?: BoolNullableWithAggregatesFilter<"IdentityUsers"> | boolean | null
    identity_provider_id?: StringNullableWithAggregatesFilter<"IdentityUsers"> | string | null
    tenancy_name?: StringNullableWithAggregatesFilter<"IdentityUsers"> | string | null
  }

  export type VolumesBackupWhereInput = {
    AND?: VolumesBackupWhereInput | VolumesBackupWhereInput[]
    OR?: VolumesBackupWhereInput[]
    NOT?: VolumesBackupWhereInput | VolumesBackupWhereInput[]
    id?: BigIntFilter<"VolumesBackup"> | bigint | number
    tenancyName?: StringNullableFilter<"VolumesBackup"> | string | null
    displayName?: StringNullableFilter<"VolumesBackup"> | string | null
    sizeInGbs?: IntNullableFilter<"VolumesBackup"> | number | null
    vpusPerGb?: IntNullableFilter<"VolumesBackup"> | number | null
    volumeId?: StringNullableFilter<"VolumesBackup"> | string | null
    backupId?: StringNullableFilter<"VolumesBackup"> | string | null
    backupDisplayName?: StringNullableFilter<"VolumesBackup"> | string | null
    timeCreated?: DateTimeNullableFilter<"VolumesBackup"> | Date | string | null
    backupType?: StringNullableFilter<"VolumesBackup"> | string | null
    totalDias?: IntNullableFilter<"VolumesBackup"> | number | null
    uniqueSizeInGbs?: IntNullableFilter<"VolumesBackup"> | number | null
    custoBackupDia?: DecimalNullableFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: DecimalNullableFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: DecimalNullableFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
  }

  export type VolumesBackupOrderByWithRelationInput = {
    id?: SortOrder
    tenancyName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    sizeInGbs?: SortOrderInput | SortOrder
    vpusPerGb?: SortOrderInput | SortOrder
    volumeId?: SortOrderInput | SortOrder
    backupId?: SortOrderInput | SortOrder
    backupDisplayName?: SortOrderInput | SortOrder
    timeCreated?: SortOrderInput | SortOrder
    backupType?: SortOrderInput | SortOrder
    totalDias?: SortOrderInput | SortOrder
    uniqueSizeInGbs?: SortOrderInput | SortOrder
    custoBackupDia?: SortOrderInput | SortOrder
    custoBackupMes?: SortOrderInput | SortOrder
    custoBackupHora?: SortOrderInput | SortOrder
    _relevance?: VolumesBackupOrderByRelevanceInput
  }

  export type VolumesBackupWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    backupId?: string
    AND?: VolumesBackupWhereInput | VolumesBackupWhereInput[]
    OR?: VolumesBackupWhereInput[]
    NOT?: VolumesBackupWhereInput | VolumesBackupWhereInput[]
    tenancyName?: StringNullableFilter<"VolumesBackup"> | string | null
    displayName?: StringNullableFilter<"VolumesBackup"> | string | null
    sizeInGbs?: IntNullableFilter<"VolumesBackup"> | number | null
    vpusPerGb?: IntNullableFilter<"VolumesBackup"> | number | null
    volumeId?: StringNullableFilter<"VolumesBackup"> | string | null
    backupDisplayName?: StringNullableFilter<"VolumesBackup"> | string | null
    timeCreated?: DateTimeNullableFilter<"VolumesBackup"> | Date | string | null
    backupType?: StringNullableFilter<"VolumesBackup"> | string | null
    totalDias?: IntNullableFilter<"VolumesBackup"> | number | null
    uniqueSizeInGbs?: IntNullableFilter<"VolumesBackup"> | number | null
    custoBackupDia?: DecimalNullableFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: DecimalNullableFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: DecimalNullableFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
  }, "id" | "backupId">

  export type VolumesBackupOrderByWithAggregationInput = {
    id?: SortOrder
    tenancyName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    sizeInGbs?: SortOrderInput | SortOrder
    vpusPerGb?: SortOrderInput | SortOrder
    volumeId?: SortOrderInput | SortOrder
    backupId?: SortOrderInput | SortOrder
    backupDisplayName?: SortOrderInput | SortOrder
    timeCreated?: SortOrderInput | SortOrder
    backupType?: SortOrderInput | SortOrder
    totalDias?: SortOrderInput | SortOrder
    uniqueSizeInGbs?: SortOrderInput | SortOrder
    custoBackupDia?: SortOrderInput | SortOrder
    custoBackupMes?: SortOrderInput | SortOrder
    custoBackupHora?: SortOrderInput | SortOrder
    _count?: VolumesBackupCountOrderByAggregateInput
    _avg?: VolumesBackupAvgOrderByAggregateInput
    _max?: VolumesBackupMaxOrderByAggregateInput
    _min?: VolumesBackupMinOrderByAggregateInput
    _sum?: VolumesBackupSumOrderByAggregateInput
  }

  export type VolumesBackupScalarWhereWithAggregatesInput = {
    AND?: VolumesBackupScalarWhereWithAggregatesInput | VolumesBackupScalarWhereWithAggregatesInput[]
    OR?: VolumesBackupScalarWhereWithAggregatesInput[]
    NOT?: VolumesBackupScalarWhereWithAggregatesInput | VolumesBackupScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"VolumesBackup"> | bigint | number
    tenancyName?: StringNullableWithAggregatesFilter<"VolumesBackup"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"VolumesBackup"> | string | null
    sizeInGbs?: IntNullableWithAggregatesFilter<"VolumesBackup"> | number | null
    vpusPerGb?: IntNullableWithAggregatesFilter<"VolumesBackup"> | number | null
    volumeId?: StringNullableWithAggregatesFilter<"VolumesBackup"> | string | null
    backupId?: StringNullableWithAggregatesFilter<"VolumesBackup"> | string | null
    backupDisplayName?: StringNullableWithAggregatesFilter<"VolumesBackup"> | string | null
    timeCreated?: DateTimeNullableWithAggregatesFilter<"VolumesBackup"> | Date | string | null
    backupType?: StringNullableWithAggregatesFilter<"VolumesBackup"> | string | null
    totalDias?: IntNullableWithAggregatesFilter<"VolumesBackup"> | number | null
    uniqueSizeInGbs?: IntNullableWithAggregatesFilter<"VolumesBackup"> | number | null
    custoBackupDia?: DecimalNullableWithAggregatesFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: DecimalNullableWithAggregatesFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: DecimalNullableWithAggregatesFilter<"VolumesBackup"> | Decimal | DecimalJsLike | number | string | null
  }

  export type SubscriptionCommitWhereInput = {
    AND?: SubscriptionCommitWhereInput | SubscriptionCommitWhereInput[]
    OR?: SubscriptionCommitWhereInput[]
    NOT?: SubscriptionCommitWhereInput | SubscriptionCommitWhereInput[]
    tenancy_name?: StringFilter<"SubscriptionCommit"> | string
    tenancy_id?: StringNullableFilter<"SubscriptionCommit"> | string | null
    time_started_commit?: DateTimeFilter<"SubscriptionCommit"> | Date | string
    time_ended_commit?: DateTimeNullableFilter<"SubscriptionCommit"> | Date | string | null
    total_used?: FloatNullableFilter<"SubscriptionCommit"> | number | null
    updated?: DateTimeFilter<"SubscriptionCommit"> | Date | string
    dias_decorridos?: IntNullableFilter<"SubscriptionCommit"> | number | null
  }

  export type SubscriptionCommitOrderByWithRelationInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrderInput | SortOrder
    time_started_commit?: SortOrder
    time_ended_commit?: SortOrderInput | SortOrder
    total_used?: SortOrderInput | SortOrder
    updated?: SortOrder
    dias_decorridos?: SortOrderInput | SortOrder
    _relevance?: SubscriptionCommitOrderByRelevanceInput
  }

  export type SubscriptionCommitWhereUniqueInput = Prisma.AtLeast<{
    tenancy_name_time_started_commit_updated?: SubscriptionCommitTenancy_nameTime_started_commitUpdatedCompoundUniqueInput
    AND?: SubscriptionCommitWhereInput | SubscriptionCommitWhereInput[]
    OR?: SubscriptionCommitWhereInput[]
    NOT?: SubscriptionCommitWhereInput | SubscriptionCommitWhereInput[]
    tenancy_name?: StringFilter<"SubscriptionCommit"> | string
    tenancy_id?: StringNullableFilter<"SubscriptionCommit"> | string | null
    time_started_commit?: DateTimeFilter<"SubscriptionCommit"> | Date | string
    time_ended_commit?: DateTimeNullableFilter<"SubscriptionCommit"> | Date | string | null
    total_used?: FloatNullableFilter<"SubscriptionCommit"> | number | null
    updated?: DateTimeFilter<"SubscriptionCommit"> | Date | string
    dias_decorridos?: IntNullableFilter<"SubscriptionCommit"> | number | null
  }, "tenancy_name_time_started_commit_updated">

  export type SubscriptionCommitOrderByWithAggregationInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrderInput | SortOrder
    time_started_commit?: SortOrder
    time_ended_commit?: SortOrderInput | SortOrder
    total_used?: SortOrderInput | SortOrder
    updated?: SortOrder
    dias_decorridos?: SortOrderInput | SortOrder
    _count?: SubscriptionCommitCountOrderByAggregateInput
    _avg?: SubscriptionCommitAvgOrderByAggregateInput
    _max?: SubscriptionCommitMaxOrderByAggregateInput
    _min?: SubscriptionCommitMinOrderByAggregateInput
    _sum?: SubscriptionCommitSumOrderByAggregateInput
  }

  export type SubscriptionCommitScalarWhereWithAggregatesInput = {
    AND?: SubscriptionCommitScalarWhereWithAggregatesInput | SubscriptionCommitScalarWhereWithAggregatesInput[]
    OR?: SubscriptionCommitScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionCommitScalarWhereWithAggregatesInput | SubscriptionCommitScalarWhereWithAggregatesInput[]
    tenancy_name?: StringWithAggregatesFilter<"SubscriptionCommit"> | string
    tenancy_id?: StringNullableWithAggregatesFilter<"SubscriptionCommit"> | string | null
    time_started_commit?: DateTimeWithAggregatesFilter<"SubscriptionCommit"> | Date | string
    time_ended_commit?: DateTimeNullableWithAggregatesFilter<"SubscriptionCommit"> | Date | string | null
    total_used?: FloatNullableWithAggregatesFilter<"SubscriptionCommit"> | number | null
    updated?: DateTimeWithAggregatesFilter<"SubscriptionCommit"> | Date | string
    dias_decorridos?: IntNullableWithAggregatesFilter<"SubscriptionCommit"> | number | null
  }

  export type ComputeInstancesCreateInput = {
    tenancy_name?: string | null
    tenancy_id?: string | null
    id?: string
    display_name?: string | null
    compartment_id?: string | null
    availability_domain?: string | null
    fault_domain?: string | null
    region?: string | null
    lifecycle_state?: string | null
    shape?: string | null
    memory_in_gbs?: number | null
    ocpus?: number | null
    processor_description?: string | null
    time_created?: Date | string | null
    CreatedBy?: string | null
    monthly_cost?: number | null
  }

  export type ComputeInstancesUncheckedCreateInput = {
    tenancy_name?: string | null
    tenancy_id?: string | null
    id?: string
    display_name?: string | null
    compartment_id?: string | null
    availability_domain?: string | null
    fault_domain?: string | null
    region?: string | null
    lifecycle_state?: string | null
    shape?: string | null
    memory_in_gbs?: number | null
    ocpus?: number | null
    processor_description?: string | null
    time_created?: Date | string | null
    CreatedBy?: string | null
    monthly_cost?: number | null
  }

  export type ComputeInstancesUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    compartment_id?: NullableStringFieldUpdateOperationsInput | string | null
    availability_domain?: NullableStringFieldUpdateOperationsInput | string | null
    fault_domain?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    memory_in_gbs?: NullableFloatFieldUpdateOperationsInput | number | null
    ocpus?: NullableIntFieldUpdateOperationsInput | number | null
    processor_description?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ComputeInstancesUncheckedUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    compartment_id?: NullableStringFieldUpdateOperationsInput | string | null
    availability_domain?: NullableStringFieldUpdateOperationsInput | string | null
    fault_domain?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    memory_in_gbs?: NullableFloatFieldUpdateOperationsInput | number | null
    ocpus?: NullableIntFieldUpdateOperationsInput | number | null
    processor_description?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ComputeInstancesCreateManyInput = {
    tenancy_name?: string | null
    tenancy_id?: string | null
    id?: string
    display_name?: string | null
    compartment_id?: string | null
    availability_domain?: string | null
    fault_domain?: string | null
    region?: string | null
    lifecycle_state?: string | null
    shape?: string | null
    memory_in_gbs?: number | null
    ocpus?: number | null
    processor_description?: string | null
    time_created?: Date | string | null
    CreatedBy?: string | null
    monthly_cost?: number | null
  }

  export type ComputeInstancesUpdateManyMutationInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    compartment_id?: NullableStringFieldUpdateOperationsInput | string | null
    availability_domain?: NullableStringFieldUpdateOperationsInput | string | null
    fault_domain?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    memory_in_gbs?: NullableFloatFieldUpdateOperationsInput | number | null
    ocpus?: NullableIntFieldUpdateOperationsInput | number | null
    processor_description?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ComputeInstancesUncheckedUpdateManyInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    compartment_id?: NullableStringFieldUpdateOperationsInput | string | null
    availability_domain?: NullableStringFieldUpdateOperationsInput | string | null
    fault_domain?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    memory_in_gbs?: NullableFloatFieldUpdateOperationsInput | number | null
    ocpus?: NullableIntFieldUpdateOperationsInput | number | null
    processor_description?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionDetailsCreateInput = {
    tenancy_name?: string | null
    tenancy_id?: string
    home_region?: string | null
    subscription_id?: string
    service_name?: string | null
    currency?: string | null
    time_start?: Date | string
    time_end?: Date | string | null
    admin_email?: string | null
    buyer_email?: string | null
    end_user_customer?: string | null
    payment_method?: string | null
    pricing_model?: string | null
    product?: string | null
    is_having_usage?: string | null
    total_value?: number | null
    used_amount?: number | null
    line_net_amount?: number | null
    available_amount?: number | null
    total_dias_contrato?: number | null
    dias_decorridos?: number | null
    updated?: Date | string | null
    status?: string | null
  }

  export type SubscriptionDetailsUncheckedCreateInput = {
    tenancy_name?: string | null
    tenancy_id?: string
    home_region?: string | null
    subscription_id?: string
    service_name?: string | null
    currency?: string | null
    time_start?: Date | string
    time_end?: Date | string | null
    admin_email?: string | null
    buyer_email?: string | null
    end_user_customer?: string | null
    payment_method?: string | null
    pricing_model?: string | null
    product?: string | null
    is_having_usage?: string | null
    total_value?: number | null
    used_amount?: number | null
    line_net_amount?: number | null
    available_amount?: number | null
    total_dias_contrato?: number | null
    dias_decorridos?: number | null
    updated?: Date | string | null
    status?: string | null
  }

  export type SubscriptionDetailsUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: StringFieldUpdateOperationsInput | string
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    end_user_customer?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_model?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    is_having_usage?: NullableStringFieldUpdateOperationsInput | string | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    used_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    line_net_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    available_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    total_dias_contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dias_decorridos?: NullableIntFieldUpdateOperationsInput | number | null
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionDetailsUncheckedUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: StringFieldUpdateOperationsInput | string
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    end_user_customer?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_model?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    is_having_usage?: NullableStringFieldUpdateOperationsInput | string | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    used_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    line_net_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    available_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    total_dias_contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dias_decorridos?: NullableIntFieldUpdateOperationsInput | number | null
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionDetailsCreateManyInput = {
    tenancy_name?: string | null
    tenancy_id?: string
    home_region?: string | null
    subscription_id?: string
    service_name?: string | null
    currency?: string | null
    time_start?: Date | string
    time_end?: Date | string | null
    admin_email?: string | null
    buyer_email?: string | null
    end_user_customer?: string | null
    payment_method?: string | null
    pricing_model?: string | null
    product?: string | null
    is_having_usage?: string | null
    total_value?: number | null
    used_amount?: number | null
    line_net_amount?: number | null
    available_amount?: number | null
    total_dias_contrato?: number | null
    dias_decorridos?: number | null
    updated?: Date | string | null
    status?: string | null
  }

  export type SubscriptionDetailsUpdateManyMutationInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: StringFieldUpdateOperationsInput | string
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    end_user_customer?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_model?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    is_having_usage?: NullableStringFieldUpdateOperationsInput | string | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    used_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    line_net_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    available_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    total_dias_contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dias_decorridos?: NullableIntFieldUpdateOperationsInput | number | null
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionDetailsUncheckedUpdateManyInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: StringFieldUpdateOperationsInput | string
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    end_user_customer?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_model?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    is_having_usage?: NullableStringFieldUpdateOperationsInput | string | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    used_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    line_net_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    available_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    total_dias_contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dias_decorridos?: NullableIntFieldUpdateOperationsInput | number | null
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenancyDetailsCreateInput = {
    tenancy_name?: string | null
    tenancy_id: string
    home_region?: string | null
    subscription_id?: string | null
    service_name?: string | null
    currency?: string | null
    time_start?: Date | string | null
    time_end?: Date | string | null
    tenancy_status?: string | null
    total_credit?: number | null
  }

  export type TenancyDetailsUncheckedCreateInput = {
    tenancy_name?: string | null
    tenancy_id: string
    home_region?: string | null
    subscription_id?: string | null
    service_name?: string | null
    currency?: string | null
    time_start?: Date | string | null
    time_end?: Date | string | null
    tenancy_status?: string | null
    total_credit?: number | null
  }

  export type TenancyDetailsUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancy_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_credit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TenancyDetailsUncheckedUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancy_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_credit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TenancyDetailsCreateManyInput = {
    tenancy_name?: string | null
    tenancy_id: string
    home_region?: string | null
    subscription_id?: string | null
    service_name?: string | null
    currency?: string | null
    time_start?: Date | string | null
    time_end?: Date | string | null
    tenancy_status?: string | null
    total_credit?: number | null
  }

  export type TenancyDetailsUpdateManyMutationInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancy_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_credit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TenancyDetailsUncheckedUpdateManyInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenancy_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_credit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tenancy_detailsCreateInput = {
    tenancy_id: string
    tenancy_name?: string | null
    home_region?: string | null
    service_name?: string | null
    currency?: string | null
    time_start: Date | string
    time_end: Date | string
    status?: string | null
    total_value?: Decimal | DecimalJsLike | number | string | null
  }

  export type tenancy_detailsUncheckedCreateInput = {
    tenancy_id: string
    tenancy_name?: string | null
    home_region?: string | null
    service_name?: string | null
    currency?: string | null
    time_start: Date | string
    time_end: Date | string
    status?: string | null
    total_value?: Decimal | DecimalJsLike | number | string | null
  }

  export type tenancy_detailsUpdateInput = {
    tenancy_id?: StringFieldUpdateOperationsInput | string
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tenancy_detailsUncheckedUpdateInput = {
    tenancy_id?: StringFieldUpdateOperationsInput | string
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tenancy_detailsCreateManyInput = {
    tenancy_id: string
    tenancy_name?: string | null
    home_region?: string | null
    service_name?: string | null
    currency?: string | null
    time_start: Date | string
    time_end: Date | string
    status?: string | null
    total_value?: Decimal | DecimalJsLike | number | string | null
  }

  export type tenancy_detailsUpdateManyMutationInput = {
    tenancy_id?: StringFieldUpdateOperationsInput | string
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tenancy_detailsUncheckedUpdateManyInput = {
    tenancy_id?: StringFieldUpdateOperationsInput | string
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    home_region?: NullableStringFieldUpdateOperationsInput | string | null
    service_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CustoDiarioTotalCreateInput = {
    tenancy_name?: string | null
    tenant_id?: string
    cost_dia?: number | null
    currency?: string | null
    usage_dia?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoDiarioTotalUncheckedCreateInput = {
    tenancy_name?: string | null
    tenant_id?: string
    cost_dia?: number | null
    currency?: string | null
    usage_dia?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoDiarioTotalUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    cost_dia?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_dia?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoDiarioTotalUncheckedUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    cost_dia?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_dia?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoDiarioTotalCreateManyInput = {
    tenancy_name?: string | null
    tenant_id?: string
    cost_dia?: number | null
    currency?: string | null
    usage_dia?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoDiarioTotalUpdateManyMutationInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    cost_dia?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_dia?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoDiarioTotalUncheckedUpdateManyInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    cost_dia?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_dia?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoMensalTotalCreateInput = {
    tenancy_name?: string | null
    tenant_id?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoMensalTotalUncheckedCreateInput = {
    tenancy_name?: string | null
    tenant_id?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoMensalTotalUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoMensalTotalUncheckedUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoMensalTotalCreateManyInput = {
    tenancy_name?: string | null
    tenant_id?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoMensalTotalUpdateManyMutationInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoMensalTotalUncheckedUpdateManyInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type computeEventsCreateInput = {
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    compartmentId?: string | null
    compartmentName?: string | null
    eventName?: string | null
    message?: string | null
    action?: string | null
    principalName?: string | null
    ipAddress?: string | null
    displayName?: string | null
    lifecycleState?: string | null
    shape?: string | null
    ocpus?: number | null
    memoryInGbs?: number | null
    processorDescription?: string | null
    createdBy?: string | null
    createdOn?: Date | string | null
    preserveBootVolume?: boolean | null
    createdAt?: Date | string
    instanceActionType?: string | null
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
  }

  export type computeEventsUncheckedCreateInput = {
    id?: number
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    compartmentId?: string | null
    compartmentName?: string | null
    eventName?: string | null
    message?: string | null
    action?: string | null
    principalName?: string | null
    ipAddress?: string | null
    displayName?: string | null
    lifecycleState?: string | null
    shape?: string | null
    ocpus?: number | null
    memoryInGbs?: number | null
    processorDescription?: string | null
    createdBy?: string | null
    createdOn?: Date | string | null
    preserveBootVolume?: boolean | null
    createdAt?: Date | string
    instanceActionType?: string | null
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
  }

  export type computeEventsUpdateInput = {
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lifecycleState?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    ocpus?: NullableFloatFieldUpdateOperationsInput | number | null
    memoryInGbs?: NullableFloatFieldUpdateOperationsInput | number | null
    processorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preserveBootVolume?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceActionType?: NullableStringFieldUpdateOperationsInput | string | null
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type computeEventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lifecycleState?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    ocpus?: NullableFloatFieldUpdateOperationsInput | number | null
    memoryInGbs?: NullableFloatFieldUpdateOperationsInput | number | null
    processorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preserveBootVolume?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceActionType?: NullableStringFieldUpdateOperationsInput | string | null
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type computeEventsCreateManyInput = {
    id?: number
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    compartmentId?: string | null
    compartmentName?: string | null
    eventName?: string | null
    message?: string | null
    action?: string | null
    principalName?: string | null
    ipAddress?: string | null
    displayName?: string | null
    lifecycleState?: string | null
    shape?: string | null
    ocpus?: number | null
    memoryInGbs?: number | null
    processorDescription?: string | null
    createdBy?: string | null
    createdOn?: Date | string | null
    preserveBootVolume?: boolean | null
    createdAt?: Date | string
    instanceActionType?: string | null
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
  }

  export type computeEventsUpdateManyMutationInput = {
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lifecycleState?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    ocpus?: NullableFloatFieldUpdateOperationsInput | number | null
    memoryInGbs?: NullableFloatFieldUpdateOperationsInput | number | null
    processorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preserveBootVolume?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceActionType?: NullableStringFieldUpdateOperationsInput | string | null
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type computeEventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    lifecycleState?: NullableStringFieldUpdateOperationsInput | string | null
    shape?: NullableStringFieldUpdateOperationsInput | string | null
    ocpus?: NullableFloatFieldUpdateOperationsInput | number | null
    memoryInGbs?: NullableFloatFieldUpdateOperationsInput | number | null
    processorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preserveBootVolume?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceActionType?: NullableStringFieldUpdateOperationsInput | string | null
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type identityEventsCreateInput = {
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    adminResourceName?: string | null
    adminResourceType?: string | null
    compartmentName?: string | null
    principalName?: string | null
    action?: string | null
    message?: string | null
    idcsLastModifiedByName?: string | null
    idcsLastModifiedByType?: string | null
    policyName?: string | null
    statements?: string | null
    createdAt?: Date | string
    eventName?: string | null
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
  }

  export type identityEventsUncheckedCreateInput = {
    id?: number
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    adminResourceName?: string | null
    adminResourceType?: string | null
    compartmentName?: string | null
    principalName?: string | null
    action?: string | null
    message?: string | null
    idcsLastModifiedByName?: string | null
    idcsLastModifiedByType?: string | null
    policyName?: string | null
    statements?: string | null
    createdAt?: Date | string
    eventName?: string | null
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
  }

  export type identityEventsUpdateInput = {
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    adminResourceName?: NullableStringFieldUpdateOperationsInput | string | null
    adminResourceType?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    idcsLastModifiedByName?: NullableStringFieldUpdateOperationsInput | string | null
    idcsLastModifiedByType?: NullableStringFieldUpdateOperationsInput | string | null
    policyName?: NullableStringFieldUpdateOperationsInput | string | null
    statements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type identityEventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    adminResourceName?: NullableStringFieldUpdateOperationsInput | string | null
    adminResourceType?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    idcsLastModifiedByName?: NullableStringFieldUpdateOperationsInput | string | null
    idcsLastModifiedByType?: NullableStringFieldUpdateOperationsInput | string | null
    policyName?: NullableStringFieldUpdateOperationsInput | string | null
    statements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type identityEventsCreateManyInput = {
    id?: number
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    adminResourceName?: string | null
    adminResourceType?: string | null
    compartmentName?: string | null
    principalName?: string | null
    action?: string | null
    message?: string | null
    idcsLastModifiedByName?: string | null
    idcsLastModifiedByType?: string | null
    policyName?: string | null
    statements?: string | null
    createdAt?: Date | string
    eventName?: string | null
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
  }

  export type identityEventsUpdateManyMutationInput = {
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    adminResourceName?: NullableStringFieldUpdateOperationsInput | string | null
    adminResourceType?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    idcsLastModifiedByName?: NullableStringFieldUpdateOperationsInput | string | null
    idcsLastModifiedByType?: NullableStringFieldUpdateOperationsInput | string | null
    policyName?: NullableStringFieldUpdateOperationsInput | string | null
    statements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type identityEventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    adminResourceName?: NullableStringFieldUpdateOperationsInput | string | null
    adminResourceType?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    idcsLastModifiedByName?: NullableStringFieldUpdateOperationsInput | string | null
    idcsLastModifiedByType?: NullableStringFieldUpdateOperationsInput | string | null
    policyName?: NullableStringFieldUpdateOperationsInput | string | null
    statements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type networkEventsCreateInput = {
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    compartmentId?: string | null
    compartmentName?: string | null
    eventName?: string | null
    message?: string | null
    action?: string | null
    principalName?: string | null
    ipAddress?: string | null
    routeRules?: string | null
    createdBy?: string | null
    createdOn?: Date | string | null
    createdAt?: Date | string
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
  }

  export type networkEventsUncheckedCreateInput = {
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    compartmentId?: string | null
    compartmentName?: string | null
    eventName?: string | null
    message?: string | null
    action?: string | null
    principalName?: string | null
    ipAddress?: string | null
    routeRules?: string | null
    createdBy?: string | null
    createdOn?: Date | string | null
    createdAt?: Date | string
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
    id?: number
  }

  export type networkEventsUpdateInput = {
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    routeRules?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type networkEventsUncheckedUpdateInput = {
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    routeRules?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type networkEventsCreateManyInput = {
    eventType?: string | null
    eventTime?: Date | string | null
    source?: string | null
    opcRequestId?: string | null
    rawEvent?: string | null
    compartmentId?: string | null
    compartmentName?: string | null
    eventName?: string | null
    message?: string | null
    action?: string | null
    principalName?: string | null
    ipAddress?: string | null
    routeRules?: string | null
    createdBy?: string | null
    createdOn?: Date | string | null
    createdAt?: Date | string
    tenancyName?: string | null
    isCheck?: boolean | null
    ticket?: string | null
    id?: number
  }

  export type networkEventsUpdateManyMutationInput = {
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    routeRules?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type networkEventsUncheckedUpdateManyInput = {
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    eventTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    opcRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    rawEvent?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    compartmentName?: NullableStringFieldUpdateOperationsInput | string | null
    eventName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    principalName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    routeRules?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    isCheck?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type BlockVolumeCreateInput = {
    tenancy_name?: string | null
    tenancy_id?: string
    availability_domain?: string | null
    compartment_id?: string | null
    display_name?: string | null
    id?: string
    lifecycle_state?: string | null
    size_in_gbs?: number | null
    time_created?: Date | string | null
    vpus_per_gb?: number | null
    is_boot_volume?: string | null
    is_orfao?: string | null
    custo_mes?: number | null
    updated?: Date | string | null
  }

  export type BlockVolumeUncheckedCreateInput = {
    tenancy_name?: string | null
    tenancy_id?: string
    availability_domain?: string | null
    compartment_id?: string | null
    display_name?: string | null
    id?: string
    lifecycle_state?: string | null
    size_in_gbs?: number | null
    time_created?: Date | string | null
    vpus_per_gb?: number | null
    is_boot_volume?: string | null
    is_orfao?: string | null
    custo_mes?: number | null
    updated?: Date | string | null
  }

  export type BlockVolumeUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    availability_domain?: NullableStringFieldUpdateOperationsInput | string | null
    compartment_id?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    size_in_gbs?: NullableFloatFieldUpdateOperationsInput | number | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vpus_per_gb?: NullableIntFieldUpdateOperationsInput | number | null
    is_boot_volume?: NullableStringFieldUpdateOperationsInput | string | null
    is_orfao?: NullableStringFieldUpdateOperationsInput | string | null
    custo_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlockVolumeUncheckedUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    availability_domain?: NullableStringFieldUpdateOperationsInput | string | null
    compartment_id?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    size_in_gbs?: NullableFloatFieldUpdateOperationsInput | number | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vpus_per_gb?: NullableIntFieldUpdateOperationsInput | number | null
    is_boot_volume?: NullableStringFieldUpdateOperationsInput | string | null
    is_orfao?: NullableStringFieldUpdateOperationsInput | string | null
    custo_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlockVolumeCreateManyInput = {
    tenancy_name?: string | null
    tenancy_id?: string
    availability_domain?: string | null
    compartment_id?: string | null
    display_name?: string | null
    id?: string
    lifecycle_state?: string | null
    size_in_gbs?: number | null
    time_created?: Date | string | null
    vpus_per_gb?: number | null
    is_boot_volume?: string | null
    is_orfao?: string | null
    custo_mes?: number | null
    updated?: Date | string | null
  }

  export type BlockVolumeUpdateManyMutationInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    availability_domain?: NullableStringFieldUpdateOperationsInput | string | null
    compartment_id?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    size_in_gbs?: NullableFloatFieldUpdateOperationsInput | number | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vpus_per_gb?: NullableIntFieldUpdateOperationsInput | number | null
    is_boot_volume?: NullableStringFieldUpdateOperationsInput | string | null
    is_orfao?: NullableStringFieldUpdateOperationsInput | string | null
    custo_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlockVolumeUncheckedUpdateManyInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_id?: StringFieldUpdateOperationsInput | string
    availability_domain?: NullableStringFieldUpdateOperationsInput | string | null
    compartment_id?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    size_in_gbs?: NullableFloatFieldUpdateOperationsInput | number | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vpus_per_gb?: NullableIntFieldUpdateOperationsInput | number | null
    is_boot_volume?: NullableStringFieldUpdateOperationsInput | string | null
    is_orfao?: NullableStringFieldUpdateOperationsInput | string | null
    custo_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoPorServiceCreateInput = {
    tenancy_name?: string | null
    tenant_id?: string
    service?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoPorServiceUncheckedCreateInput = {
    tenancy_name?: string | null
    tenant_id?: string
    service?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoPorServiceUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoPorServiceUncheckedUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoPorServiceCreateManyInput = {
    tenancy_name?: string | null
    tenant_id?: string
    service?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoPorServiceUpdateManyMutationInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoPorServiceUncheckedUpdateManyInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoPorSkuNameCreateInput = {
    tenancy_name?: string | null
    tenant_id?: string
    sku_name?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoPorSkuNameUncheckedCreateInput = {
    tenancy_name?: string | null
    tenant_id?: string
    sku_name?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoPorSkuNameUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    sku_name?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoPorSkuNameUncheckedUpdateInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    sku_name?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoPorSkuNameCreateManyInput = {
    tenancy_name?: string | null
    tenant_id?: string
    sku_name?: string
    cost_mes?: number | null
    currency?: string | null
    usage_mes?: number | null
    time_started?: Date | string
    time_ended?: Date | string | null
  }

  export type CustoPorSkuNameUpdateManyMutationInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    sku_name?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustoPorSkuNameUncheckedUpdateManyInput = {
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
    tenant_id?: StringFieldUpdateOperationsInput | string
    sku_name?: StringFieldUpdateOperationsInput | string
    cost_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    usage_mes?: NullableFloatFieldUpdateOperationsInput | number | null
    time_started?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdentityUsersCreateInput = {
    id?: bigint | number
    is_mfa_activated?: boolean | null
    lifecycle_state?: string | null
    time_created?: Date | string | null
    last_successful_login_time?: Date | string | null
    email?: string | null
    email_verified?: string | null
    can_use_api_keys?: boolean | null
    can_use_auth_tokens?: boolean | null
    can_use_console_password?: boolean | null
    can_use_customer_secret_keys?: boolean | null
    can_use_db_credentials?: boolean | null
    can_use_o_auth2_client_credentials?: boolean | null
    can_use_smtp_credentials?: boolean | null
    identity_provider_id?: string | null
    tenancy_name?: string | null
  }

  export type IdentityUsersUncheckedCreateInput = {
    id?: bigint | number
    is_mfa_activated?: boolean | null
    lifecycle_state?: string | null
    time_created?: Date | string | null
    last_successful_login_time?: Date | string | null
    email?: string | null
    email_verified?: string | null
    can_use_api_keys?: boolean | null
    can_use_auth_tokens?: boolean | null
    can_use_console_password?: boolean | null
    can_use_customer_secret_keys?: boolean | null
    can_use_db_credentials?: boolean | null
    can_use_o_auth2_client_credentials?: boolean | null
    can_use_smtp_credentials?: boolean | null
    identity_provider_id?: string | null
    tenancy_name?: string | null
  }

  export type IdentityUsersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_mfa_activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_successful_login_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableStringFieldUpdateOperationsInput | string | null
    can_use_api_keys?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_auth_tokens?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_console_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_customer_secret_keys?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_db_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_o_auth2_client_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_smtp_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identity_provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdentityUsersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_mfa_activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_successful_login_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableStringFieldUpdateOperationsInput | string | null
    can_use_api_keys?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_auth_tokens?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_console_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_customer_secret_keys?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_db_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_o_auth2_client_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_smtp_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identity_provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdentityUsersCreateManyInput = {
    id?: bigint | number
    is_mfa_activated?: boolean | null
    lifecycle_state?: string | null
    time_created?: Date | string | null
    last_successful_login_time?: Date | string | null
    email?: string | null
    email_verified?: string | null
    can_use_api_keys?: boolean | null
    can_use_auth_tokens?: boolean | null
    can_use_console_password?: boolean | null
    can_use_customer_secret_keys?: boolean | null
    can_use_db_credentials?: boolean | null
    can_use_o_auth2_client_credentials?: boolean | null
    can_use_smtp_credentials?: boolean | null
    identity_provider_id?: string | null
    tenancy_name?: string | null
  }

  export type IdentityUsersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_mfa_activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_successful_login_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableStringFieldUpdateOperationsInput | string | null
    can_use_api_keys?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_auth_tokens?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_console_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_customer_secret_keys?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_db_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_o_auth2_client_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_smtp_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identity_provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdentityUsersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_mfa_activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lifecycle_state?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_successful_login_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: NullableStringFieldUpdateOperationsInput | string | null
    can_use_api_keys?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_auth_tokens?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_console_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_customer_secret_keys?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_db_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_o_auth2_client_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_use_smtp_credentials?: NullableBoolFieldUpdateOperationsInput | boolean | null
    identity_provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    tenancy_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VolumesBackupCreateInput = {
    id?: bigint | number
    tenancyName?: string | null
    displayName?: string | null
    sizeInGbs?: number | null
    vpusPerGb?: number | null
    volumeId?: string | null
    backupId?: string | null
    backupDisplayName?: string | null
    timeCreated?: Date | string | null
    backupType?: string | null
    totalDias?: number | null
    uniqueSizeInGbs?: number | null
    custoBackupDia?: Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: Decimal | DecimalJsLike | number | string | null
  }

  export type VolumesBackupUncheckedCreateInput = {
    id?: bigint | number
    tenancyName?: string | null
    displayName?: string | null
    sizeInGbs?: number | null
    vpusPerGb?: number | null
    volumeId?: string | null
    backupId?: string | null
    backupDisplayName?: string | null
    timeCreated?: Date | string | null
    backupType?: string | null
    totalDias?: number | null
    uniqueSizeInGbs?: number | null
    custoBackupDia?: Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: Decimal | DecimalJsLike | number | string | null
  }

  export type VolumesBackupUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInGbs?: NullableIntFieldUpdateOperationsInput | number | null
    vpusPerGb?: NullableIntFieldUpdateOperationsInput | number | null
    volumeId?: NullableStringFieldUpdateOperationsInput | string | null
    backupId?: NullableStringFieldUpdateOperationsInput | string | null
    backupDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backupType?: NullableStringFieldUpdateOperationsInput | string | null
    totalDias?: NullableIntFieldUpdateOperationsInput | number | null
    uniqueSizeInGbs?: NullableIntFieldUpdateOperationsInput | number | null
    custoBackupDia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VolumesBackupUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInGbs?: NullableIntFieldUpdateOperationsInput | number | null
    vpusPerGb?: NullableIntFieldUpdateOperationsInput | number | null
    volumeId?: NullableStringFieldUpdateOperationsInput | string | null
    backupId?: NullableStringFieldUpdateOperationsInput | string | null
    backupDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backupType?: NullableStringFieldUpdateOperationsInput | string | null
    totalDias?: NullableIntFieldUpdateOperationsInput | number | null
    uniqueSizeInGbs?: NullableIntFieldUpdateOperationsInput | number | null
    custoBackupDia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VolumesBackupCreateManyInput = {
    id?: bigint | number
    tenancyName?: string | null
    displayName?: string | null
    sizeInGbs?: number | null
    vpusPerGb?: number | null
    volumeId?: string | null
    backupId?: string | null
    backupDisplayName?: string | null
    timeCreated?: Date | string | null
    backupType?: string | null
    totalDias?: number | null
    uniqueSizeInGbs?: number | null
    custoBackupDia?: Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: Decimal | DecimalJsLike | number | string | null
  }

  export type VolumesBackupUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInGbs?: NullableIntFieldUpdateOperationsInput | number | null
    vpusPerGb?: NullableIntFieldUpdateOperationsInput | number | null
    volumeId?: NullableStringFieldUpdateOperationsInput | string | null
    backupId?: NullableStringFieldUpdateOperationsInput | string | null
    backupDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backupType?: NullableStringFieldUpdateOperationsInput | string | null
    totalDias?: NullableIntFieldUpdateOperationsInput | number | null
    uniqueSizeInGbs?: NullableIntFieldUpdateOperationsInput | number | null
    custoBackupDia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VolumesBackupUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenancyName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInGbs?: NullableIntFieldUpdateOperationsInput | number | null
    vpusPerGb?: NullableIntFieldUpdateOperationsInput | number | null
    volumeId?: NullableStringFieldUpdateOperationsInput | string | null
    backupId?: NullableStringFieldUpdateOperationsInput | string | null
    backupDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backupType?: NullableStringFieldUpdateOperationsInput | string | null
    totalDias?: NullableIntFieldUpdateOperationsInput | number | null
    uniqueSizeInGbs?: NullableIntFieldUpdateOperationsInput | number | null
    custoBackupDia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custoBackupMes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custoBackupHora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type SubscriptionCommitCreateInput = {
    tenancy_name?: string
    tenancy_id?: string | null
    time_started_commit?: Date | string
    time_ended_commit?: Date | string | null
    total_used?: number | null
    updated?: Date | string
    dias_decorridos?: number | null
  }

  export type SubscriptionCommitUncheckedCreateInput = {
    tenancy_name?: string
    tenancy_id?: string | null
    time_started_commit?: Date | string
    time_ended_commit?: Date | string | null
    total_used?: number | null
    updated?: Date | string
    dias_decorridos?: number | null
  }

  export type SubscriptionCommitUpdateInput = {
    tenancy_name?: StringFieldUpdateOperationsInput | string
    tenancy_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_started_commit?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended_commit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_used?: NullableFloatFieldUpdateOperationsInput | number | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    dias_decorridos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionCommitUncheckedUpdateInput = {
    tenancy_name?: StringFieldUpdateOperationsInput | string
    tenancy_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_started_commit?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended_commit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_used?: NullableFloatFieldUpdateOperationsInput | number | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    dias_decorridos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionCommitCreateManyInput = {
    tenancy_name?: string
    tenancy_id?: string | null
    time_started_commit?: Date | string
    time_ended_commit?: Date | string | null
    total_used?: number | null
    updated?: Date | string
    dias_decorridos?: number | null
  }

  export type SubscriptionCommitUpdateManyMutationInput = {
    tenancy_name?: StringFieldUpdateOperationsInput | string
    tenancy_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_started_commit?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended_commit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_used?: NullableFloatFieldUpdateOperationsInput | number | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    dias_decorridos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionCommitUncheckedUpdateManyInput = {
    tenancy_name?: StringFieldUpdateOperationsInput | string
    tenancy_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_started_commit?: DateTimeFieldUpdateOperationsInput | Date | string
    time_ended_commit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_used?: NullableFloatFieldUpdateOperationsInput | number | null
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    dias_decorridos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ComputeInstancesOrderByRelevanceInput = {
    fields: ComputeInstancesOrderByRelevanceFieldEnum | ComputeInstancesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComputeInstancesCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    id?: SortOrder
    display_name?: SortOrder
    compartment_id?: SortOrder
    availability_domain?: SortOrder
    fault_domain?: SortOrder
    region?: SortOrder
    lifecycle_state?: SortOrder
    shape?: SortOrder
    memory_in_gbs?: SortOrder
    ocpus?: SortOrder
    processor_description?: SortOrder
    time_created?: SortOrder
    CreatedBy?: SortOrder
    monthly_cost?: SortOrder
  }

  export type ComputeInstancesAvgOrderByAggregateInput = {
    memory_in_gbs?: SortOrder
    ocpus?: SortOrder
    monthly_cost?: SortOrder
  }

  export type ComputeInstancesMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    id?: SortOrder
    display_name?: SortOrder
    compartment_id?: SortOrder
    availability_domain?: SortOrder
    fault_domain?: SortOrder
    region?: SortOrder
    lifecycle_state?: SortOrder
    shape?: SortOrder
    memory_in_gbs?: SortOrder
    ocpus?: SortOrder
    processor_description?: SortOrder
    time_created?: SortOrder
    CreatedBy?: SortOrder
    monthly_cost?: SortOrder
  }

  export type ComputeInstancesMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    id?: SortOrder
    display_name?: SortOrder
    compartment_id?: SortOrder
    availability_domain?: SortOrder
    fault_domain?: SortOrder
    region?: SortOrder
    lifecycle_state?: SortOrder
    shape?: SortOrder
    memory_in_gbs?: SortOrder
    ocpus?: SortOrder
    processor_description?: SortOrder
    time_created?: SortOrder
    CreatedBy?: SortOrder
    monthly_cost?: SortOrder
  }

  export type ComputeInstancesSumOrderByAggregateInput = {
    memory_in_gbs?: SortOrder
    ocpus?: SortOrder
    monthly_cost?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubscriptionDetailsOrderByRelevanceInput = {
    fields: SubscriptionDetailsOrderByRelevanceFieldEnum | SubscriptionDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionDetailsTenancy_idSubscription_idTime_startCompoundUniqueInput = {
    tenancy_id: string
    subscription_id: string
    time_start: Date | string
  }

  export type SubscriptionDetailsCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrder
    subscription_id?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    admin_email?: SortOrder
    buyer_email?: SortOrder
    end_user_customer?: SortOrder
    payment_method?: SortOrder
    pricing_model?: SortOrder
    product?: SortOrder
    is_having_usage?: SortOrder
    total_value?: SortOrder
    used_amount?: SortOrder
    line_net_amount?: SortOrder
    available_amount?: SortOrder
    total_dias_contrato?: SortOrder
    dias_decorridos?: SortOrder
    updated?: SortOrder
    status?: SortOrder
  }

  export type SubscriptionDetailsAvgOrderByAggregateInput = {
    total_value?: SortOrder
    used_amount?: SortOrder
    line_net_amount?: SortOrder
    available_amount?: SortOrder
    total_dias_contrato?: SortOrder
    dias_decorridos?: SortOrder
  }

  export type SubscriptionDetailsMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrder
    subscription_id?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    admin_email?: SortOrder
    buyer_email?: SortOrder
    end_user_customer?: SortOrder
    payment_method?: SortOrder
    pricing_model?: SortOrder
    product?: SortOrder
    is_having_usage?: SortOrder
    total_value?: SortOrder
    used_amount?: SortOrder
    line_net_amount?: SortOrder
    available_amount?: SortOrder
    total_dias_contrato?: SortOrder
    dias_decorridos?: SortOrder
    updated?: SortOrder
    status?: SortOrder
  }

  export type SubscriptionDetailsMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrder
    subscription_id?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    admin_email?: SortOrder
    buyer_email?: SortOrder
    end_user_customer?: SortOrder
    payment_method?: SortOrder
    pricing_model?: SortOrder
    product?: SortOrder
    is_having_usage?: SortOrder
    total_value?: SortOrder
    used_amount?: SortOrder
    line_net_amount?: SortOrder
    available_amount?: SortOrder
    total_dias_contrato?: SortOrder
    dias_decorridos?: SortOrder
    updated?: SortOrder
    status?: SortOrder
  }

  export type SubscriptionDetailsSumOrderByAggregateInput = {
    total_value?: SortOrder
    used_amount?: SortOrder
    line_net_amount?: SortOrder
    available_amount?: SortOrder
    total_dias_contrato?: SortOrder
    dias_decorridos?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TenancyDetailsOrderByRelevanceInput = {
    fields: TenancyDetailsOrderByRelevanceFieldEnum | TenancyDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TenancyDetailsCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrder
    subscription_id?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    tenancy_status?: SortOrder
    total_credit?: SortOrder
  }

  export type TenancyDetailsAvgOrderByAggregateInput = {
    total_credit?: SortOrder
  }

  export type TenancyDetailsMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrder
    subscription_id?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    tenancy_status?: SortOrder
    total_credit?: SortOrder
  }

  export type TenancyDetailsMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    home_region?: SortOrder
    subscription_id?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    tenancy_status?: SortOrder
    total_credit?: SortOrder
  }

  export type TenancyDetailsSumOrderByAggregateInput = {
    total_credit?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type tenancy_detailsOrderByRelevanceInput = {
    fields: tenancy_detailsOrderByRelevanceFieldEnum | tenancy_detailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tenancy_detailsCountOrderByAggregateInput = {
    tenancy_id?: SortOrder
    tenancy_name?: SortOrder
    home_region?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    status?: SortOrder
    total_value?: SortOrder
  }

  export type tenancy_detailsAvgOrderByAggregateInput = {
    total_value?: SortOrder
  }

  export type tenancy_detailsMaxOrderByAggregateInput = {
    tenancy_id?: SortOrder
    tenancy_name?: SortOrder
    home_region?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    status?: SortOrder
    total_value?: SortOrder
  }

  export type tenancy_detailsMinOrderByAggregateInput = {
    tenancy_id?: SortOrder
    tenancy_name?: SortOrder
    home_region?: SortOrder
    service_name?: SortOrder
    currency?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    status?: SortOrder
    total_value?: SortOrder
  }

  export type tenancy_detailsSumOrderByAggregateInput = {
    total_value?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CustoDiarioTotalOrderByRelevanceInput = {
    fields: CustoDiarioTotalOrderByRelevanceFieldEnum | CustoDiarioTotalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustoDiarioTotalTenant_idTime_startedCompoundUniqueInput = {
    tenant_id: string
    time_started: Date | string
  }

  export type CustoDiarioTotalCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    cost_dia?: SortOrder
    currency?: SortOrder
    usage_dia?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoDiarioTotalAvgOrderByAggregateInput = {
    cost_dia?: SortOrder
    usage_dia?: SortOrder
  }

  export type CustoDiarioTotalMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    cost_dia?: SortOrder
    currency?: SortOrder
    usage_dia?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoDiarioTotalMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    cost_dia?: SortOrder
    currency?: SortOrder
    usage_dia?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoDiarioTotalSumOrderByAggregateInput = {
    cost_dia?: SortOrder
    usage_dia?: SortOrder
  }

  export type CustoMensalTotalOrderByRelevanceInput = {
    fields: CustoMensalTotalOrderByRelevanceFieldEnum | CustoMensalTotalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustoMensalTotalTenant_idTime_startedCompoundUniqueInput = {
    tenant_id: string
    time_started: Date | string
  }

  export type CustoMensalTotalCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoMensalTotalAvgOrderByAggregateInput = {
    cost_mes?: SortOrder
    usage_mes?: SortOrder
  }

  export type CustoMensalTotalMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoMensalTotalMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoMensalTotalSumOrderByAggregateInput = {
    cost_mes?: SortOrder
    usage_mes?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type computeEventsOrderByRelevanceInput = {
    fields: computeEventsOrderByRelevanceFieldEnum | computeEventsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type computeEventsCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    compartmentId?: SortOrder
    compartmentName?: SortOrder
    eventName?: SortOrder
    message?: SortOrder
    action?: SortOrder
    principalName?: SortOrder
    ipAddress?: SortOrder
    displayName?: SortOrder
    lifecycleState?: SortOrder
    shape?: SortOrder
    ocpus?: SortOrder
    memoryInGbs?: SortOrder
    processorDescription?: SortOrder
    createdBy?: SortOrder
    createdOn?: SortOrder
    preserveBootVolume?: SortOrder
    createdAt?: SortOrder
    instanceActionType?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
  }

  export type computeEventsAvgOrderByAggregateInput = {
    id?: SortOrder
    ocpus?: SortOrder
    memoryInGbs?: SortOrder
  }

  export type computeEventsMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    compartmentId?: SortOrder
    compartmentName?: SortOrder
    eventName?: SortOrder
    message?: SortOrder
    action?: SortOrder
    principalName?: SortOrder
    ipAddress?: SortOrder
    displayName?: SortOrder
    lifecycleState?: SortOrder
    shape?: SortOrder
    ocpus?: SortOrder
    memoryInGbs?: SortOrder
    processorDescription?: SortOrder
    createdBy?: SortOrder
    createdOn?: SortOrder
    preserveBootVolume?: SortOrder
    createdAt?: SortOrder
    instanceActionType?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
  }

  export type computeEventsMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    compartmentId?: SortOrder
    compartmentName?: SortOrder
    eventName?: SortOrder
    message?: SortOrder
    action?: SortOrder
    principalName?: SortOrder
    ipAddress?: SortOrder
    displayName?: SortOrder
    lifecycleState?: SortOrder
    shape?: SortOrder
    ocpus?: SortOrder
    memoryInGbs?: SortOrder
    processorDescription?: SortOrder
    createdBy?: SortOrder
    createdOn?: SortOrder
    preserveBootVolume?: SortOrder
    createdAt?: SortOrder
    instanceActionType?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
  }

  export type computeEventsSumOrderByAggregateInput = {
    id?: SortOrder
    ocpus?: SortOrder
    memoryInGbs?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type identityEventsOrderByRelevanceInput = {
    fields: identityEventsOrderByRelevanceFieldEnum | identityEventsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type identityEventsCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    adminResourceName?: SortOrder
    adminResourceType?: SortOrder
    compartmentName?: SortOrder
    principalName?: SortOrder
    action?: SortOrder
    message?: SortOrder
    idcsLastModifiedByName?: SortOrder
    idcsLastModifiedByType?: SortOrder
    policyName?: SortOrder
    statements?: SortOrder
    createdAt?: SortOrder
    eventName?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
  }

  export type identityEventsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type identityEventsMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    adminResourceName?: SortOrder
    adminResourceType?: SortOrder
    compartmentName?: SortOrder
    principalName?: SortOrder
    action?: SortOrder
    message?: SortOrder
    idcsLastModifiedByName?: SortOrder
    idcsLastModifiedByType?: SortOrder
    policyName?: SortOrder
    statements?: SortOrder
    createdAt?: SortOrder
    eventName?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
  }

  export type identityEventsMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    adminResourceName?: SortOrder
    adminResourceType?: SortOrder
    compartmentName?: SortOrder
    principalName?: SortOrder
    action?: SortOrder
    message?: SortOrder
    idcsLastModifiedByName?: SortOrder
    idcsLastModifiedByType?: SortOrder
    policyName?: SortOrder
    statements?: SortOrder
    createdAt?: SortOrder
    eventName?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
  }

  export type identityEventsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type networkEventsOrderByRelevanceInput = {
    fields: networkEventsOrderByRelevanceFieldEnum | networkEventsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type networkEventsCountOrderByAggregateInput = {
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    compartmentId?: SortOrder
    compartmentName?: SortOrder
    eventName?: SortOrder
    message?: SortOrder
    action?: SortOrder
    principalName?: SortOrder
    ipAddress?: SortOrder
    routeRules?: SortOrder
    createdBy?: SortOrder
    createdOn?: SortOrder
    createdAt?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
    id?: SortOrder
  }

  export type networkEventsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type networkEventsMaxOrderByAggregateInput = {
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    compartmentId?: SortOrder
    compartmentName?: SortOrder
    eventName?: SortOrder
    message?: SortOrder
    action?: SortOrder
    principalName?: SortOrder
    ipAddress?: SortOrder
    routeRules?: SortOrder
    createdBy?: SortOrder
    createdOn?: SortOrder
    createdAt?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
    id?: SortOrder
  }

  export type networkEventsMinOrderByAggregateInput = {
    eventType?: SortOrder
    eventTime?: SortOrder
    source?: SortOrder
    opcRequestId?: SortOrder
    rawEvent?: SortOrder
    compartmentId?: SortOrder
    compartmentName?: SortOrder
    eventName?: SortOrder
    message?: SortOrder
    action?: SortOrder
    principalName?: SortOrder
    ipAddress?: SortOrder
    routeRules?: SortOrder
    createdBy?: SortOrder
    createdOn?: SortOrder
    createdAt?: SortOrder
    tenancyName?: SortOrder
    isCheck?: SortOrder
    ticket?: SortOrder
    id?: SortOrder
  }

  export type networkEventsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlockVolumeOrderByRelevanceInput = {
    fields: BlockVolumeOrderByRelevanceFieldEnum | BlockVolumeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlockVolumeTenancy_idIdCompoundUniqueInput = {
    tenancy_id: string
    id: string
  }

  export type BlockVolumeCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    availability_domain?: SortOrder
    compartment_id?: SortOrder
    display_name?: SortOrder
    id?: SortOrder
    lifecycle_state?: SortOrder
    size_in_gbs?: SortOrder
    time_created?: SortOrder
    vpus_per_gb?: SortOrder
    is_boot_volume?: SortOrder
    is_orfao?: SortOrder
    custo_mes?: SortOrder
    updated?: SortOrder
  }

  export type BlockVolumeAvgOrderByAggregateInput = {
    size_in_gbs?: SortOrder
    vpus_per_gb?: SortOrder
    custo_mes?: SortOrder
  }

  export type BlockVolumeMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    availability_domain?: SortOrder
    compartment_id?: SortOrder
    display_name?: SortOrder
    id?: SortOrder
    lifecycle_state?: SortOrder
    size_in_gbs?: SortOrder
    time_created?: SortOrder
    vpus_per_gb?: SortOrder
    is_boot_volume?: SortOrder
    is_orfao?: SortOrder
    custo_mes?: SortOrder
    updated?: SortOrder
  }

  export type BlockVolumeMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    availability_domain?: SortOrder
    compartment_id?: SortOrder
    display_name?: SortOrder
    id?: SortOrder
    lifecycle_state?: SortOrder
    size_in_gbs?: SortOrder
    time_created?: SortOrder
    vpus_per_gb?: SortOrder
    is_boot_volume?: SortOrder
    is_orfao?: SortOrder
    custo_mes?: SortOrder
    updated?: SortOrder
  }

  export type BlockVolumeSumOrderByAggregateInput = {
    size_in_gbs?: SortOrder
    vpus_per_gb?: SortOrder
    custo_mes?: SortOrder
  }

  export type CustoPorServiceOrderByRelevanceInput = {
    fields: CustoPorServiceOrderByRelevanceFieldEnum | CustoPorServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustoPorServiceTenant_idTime_startedServiceCompoundUniqueInput = {
    tenant_id: string
    time_started: Date | string
    service: string
  }

  export type CustoPorServiceCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    service?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoPorServiceAvgOrderByAggregateInput = {
    cost_mes?: SortOrder
    usage_mes?: SortOrder
  }

  export type CustoPorServiceMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    service?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoPorServiceMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    service?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoPorServiceSumOrderByAggregateInput = {
    cost_mes?: SortOrder
    usage_mes?: SortOrder
  }

  export type CustoPorSkuNameOrderByRelevanceInput = {
    fields: CustoPorSkuNameOrderByRelevanceFieldEnum | CustoPorSkuNameOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustoPorSkuNameTenant_idTime_startedSku_nameCompoundUniqueInput = {
    tenant_id: string
    time_started: Date | string
    sku_name: string
  }

  export type CustoPorSkuNameCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    sku_name?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoPorSkuNameAvgOrderByAggregateInput = {
    cost_mes?: SortOrder
    usage_mes?: SortOrder
  }

  export type CustoPorSkuNameMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    sku_name?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoPorSkuNameMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenant_id?: SortOrder
    sku_name?: SortOrder
    cost_mes?: SortOrder
    currency?: SortOrder
    usage_mes?: SortOrder
    time_started?: SortOrder
    time_ended?: SortOrder
  }

  export type CustoPorSkuNameSumOrderByAggregateInput = {
    cost_mes?: SortOrder
    usage_mes?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IdentityUsersOrderByRelevanceInput = {
    fields: IdentityUsersOrderByRelevanceFieldEnum | IdentityUsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IdentityUsersCountOrderByAggregateInput = {
    id?: SortOrder
    is_mfa_activated?: SortOrder
    lifecycle_state?: SortOrder
    time_created?: SortOrder
    last_successful_login_time?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    can_use_api_keys?: SortOrder
    can_use_auth_tokens?: SortOrder
    can_use_console_password?: SortOrder
    can_use_customer_secret_keys?: SortOrder
    can_use_db_credentials?: SortOrder
    can_use_o_auth2_client_credentials?: SortOrder
    can_use_smtp_credentials?: SortOrder
    identity_provider_id?: SortOrder
    tenancy_name?: SortOrder
  }

  export type IdentityUsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IdentityUsersMaxOrderByAggregateInput = {
    id?: SortOrder
    is_mfa_activated?: SortOrder
    lifecycle_state?: SortOrder
    time_created?: SortOrder
    last_successful_login_time?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    can_use_api_keys?: SortOrder
    can_use_auth_tokens?: SortOrder
    can_use_console_password?: SortOrder
    can_use_customer_secret_keys?: SortOrder
    can_use_db_credentials?: SortOrder
    can_use_o_auth2_client_credentials?: SortOrder
    can_use_smtp_credentials?: SortOrder
    identity_provider_id?: SortOrder
    tenancy_name?: SortOrder
  }

  export type IdentityUsersMinOrderByAggregateInput = {
    id?: SortOrder
    is_mfa_activated?: SortOrder
    lifecycle_state?: SortOrder
    time_created?: SortOrder
    last_successful_login_time?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    can_use_api_keys?: SortOrder
    can_use_auth_tokens?: SortOrder
    can_use_console_password?: SortOrder
    can_use_customer_secret_keys?: SortOrder
    can_use_db_credentials?: SortOrder
    can_use_o_auth2_client_credentials?: SortOrder
    can_use_smtp_credentials?: SortOrder
    identity_provider_id?: SortOrder
    tenancy_name?: SortOrder
  }

  export type IdentityUsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type VolumesBackupOrderByRelevanceInput = {
    fields: VolumesBackupOrderByRelevanceFieldEnum | VolumesBackupOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VolumesBackupCountOrderByAggregateInput = {
    id?: SortOrder
    tenancyName?: SortOrder
    displayName?: SortOrder
    sizeInGbs?: SortOrder
    vpusPerGb?: SortOrder
    volumeId?: SortOrder
    backupId?: SortOrder
    backupDisplayName?: SortOrder
    timeCreated?: SortOrder
    backupType?: SortOrder
    totalDias?: SortOrder
    uniqueSizeInGbs?: SortOrder
    custoBackupDia?: SortOrder
    custoBackupMes?: SortOrder
    custoBackupHora?: SortOrder
  }

  export type VolumesBackupAvgOrderByAggregateInput = {
    id?: SortOrder
    sizeInGbs?: SortOrder
    vpusPerGb?: SortOrder
    totalDias?: SortOrder
    uniqueSizeInGbs?: SortOrder
    custoBackupDia?: SortOrder
    custoBackupMes?: SortOrder
    custoBackupHora?: SortOrder
  }

  export type VolumesBackupMaxOrderByAggregateInput = {
    id?: SortOrder
    tenancyName?: SortOrder
    displayName?: SortOrder
    sizeInGbs?: SortOrder
    vpusPerGb?: SortOrder
    volumeId?: SortOrder
    backupId?: SortOrder
    backupDisplayName?: SortOrder
    timeCreated?: SortOrder
    backupType?: SortOrder
    totalDias?: SortOrder
    uniqueSizeInGbs?: SortOrder
    custoBackupDia?: SortOrder
    custoBackupMes?: SortOrder
    custoBackupHora?: SortOrder
  }

  export type VolumesBackupMinOrderByAggregateInput = {
    id?: SortOrder
    tenancyName?: SortOrder
    displayName?: SortOrder
    sizeInGbs?: SortOrder
    vpusPerGb?: SortOrder
    volumeId?: SortOrder
    backupId?: SortOrder
    backupDisplayName?: SortOrder
    timeCreated?: SortOrder
    backupType?: SortOrder
    totalDias?: SortOrder
    uniqueSizeInGbs?: SortOrder
    custoBackupDia?: SortOrder
    custoBackupMes?: SortOrder
    custoBackupHora?: SortOrder
  }

  export type VolumesBackupSumOrderByAggregateInput = {
    id?: SortOrder
    sizeInGbs?: SortOrder
    vpusPerGb?: SortOrder
    totalDias?: SortOrder
    uniqueSizeInGbs?: SortOrder
    custoBackupDia?: SortOrder
    custoBackupMes?: SortOrder
    custoBackupHora?: SortOrder
  }

  export type SubscriptionCommitOrderByRelevanceInput = {
    fields: SubscriptionCommitOrderByRelevanceFieldEnum | SubscriptionCommitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionCommitTenancy_nameTime_started_commitUpdatedCompoundUniqueInput = {
    tenancy_name: string
    time_started_commit: Date | string
    updated: Date | string
  }

  export type SubscriptionCommitCountOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    time_started_commit?: SortOrder
    time_ended_commit?: SortOrder
    total_used?: SortOrder
    updated?: SortOrder
    dias_decorridos?: SortOrder
  }

  export type SubscriptionCommitAvgOrderByAggregateInput = {
    total_used?: SortOrder
    dias_decorridos?: SortOrder
  }

  export type SubscriptionCommitMaxOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    time_started_commit?: SortOrder
    time_ended_commit?: SortOrder
    total_used?: SortOrder
    updated?: SortOrder
    dias_decorridos?: SortOrder
  }

  export type SubscriptionCommitMinOrderByAggregateInput = {
    tenancy_name?: SortOrder
    tenancy_id?: SortOrder
    time_started_commit?: SortOrder
    time_ended_commit?: SortOrder
    total_used?: SortOrder
    updated?: SortOrder
    dias_decorridos?: SortOrder
  }

  export type SubscriptionCommitSumOrderByAggregateInput = {
    total_used?: SortOrder
    dias_decorridos?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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