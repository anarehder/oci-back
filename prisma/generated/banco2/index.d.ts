
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
 * Model audit
 * 
 */
export type audit = $Result.DefaultSelection<Prisma.$auditPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model tenancy_details
 * 
 */
export type tenancy_details = $Result.DefaultSelection<Prisma.$tenancy_detailsPayload>

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
   * `prisma.audit`: Exposes CRUD operations for the **audit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audits
    * const audits = await prisma.audit.findMany()
    * ```
    */
  get audit(): Prisma.auditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenancy_details`: Exposes CRUD operations for the **tenancy_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenancy_details
    * const tenancy_details = await prisma.tenancy_details.findMany()
    * ```
    */
  get tenancy_details(): Prisma.tenancy_detailsDelegate<ExtArgs, ClientOptions>;
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
    audit: 'audit',
    notifications: 'notifications',
    tenancy_details: 'tenancy_details'
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
      modelProps: "computeInstances" | "subscriptionDetails" | "tenancyDetails" | "audit" | "notifications" | "tenancy_details"
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
      audit: {
        payload: Prisma.$auditPayload<ExtArgs>
        fields: Prisma.auditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          findFirst: {
            args: Prisma.auditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          findMany: {
            args: Prisma.auditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>[]
          }
          create: {
            args: Prisma.auditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          createMany: {
            args: Prisma.auditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.auditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          update: {
            args: Prisma.auditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          deleteMany: {
            args: Prisma.auditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.auditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          aggregate: {
            args: Prisma.AuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit>
          }
          groupBy: {
            args: Prisma.auditGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.auditCountArgs<ExtArgs>
            result: $Utils.Optional<AuditCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
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
    audit?: auditOmit
    notifications?: notificationsOmit
    tenancy_details?: tenancy_detailsOmit
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
    hourly_cost: number | null
  }

  export type ComputeInstancesSumAggregateOutputType = {
    memory_in_gbs: number | null
    ocpus: number | null
    hourly_cost: number | null
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
    hourly_cost: number | null
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
    hourly_cost: number | null
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
    hourly_cost: number
    _all: number
  }


  export type ComputeInstancesAvgAggregateInputType = {
    memory_in_gbs?: true
    ocpus?: true
    hourly_cost?: true
  }

  export type ComputeInstancesSumAggregateInputType = {
    memory_in_gbs?: true
    ocpus?: true
    hourly_cost?: true
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
    hourly_cost?: true
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
    hourly_cost?: true
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
    hourly_cost?: true
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
    hourly_cost: number | null
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
    hourly_cost?: boolean
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
    hourly_cost?: boolean
  }

  export type ComputeInstancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenancy_id" | "id" | "display_name" | "compartment_id" | "availability_domain" | "fault_domain" | "region" | "lifecycle_state" | "shape" | "memory_in_gbs" | "ocpus" | "processor_description" | "time_created" | "CreatedBy" | "hourly_cost", ExtArgs["result"]["computeInstances"]>

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
      hourly_cost: number | null
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
    readonly hourly_cost: FieldRef<"ComputeInstances", 'Float'>
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
  }

  export type SubscriptionDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenancy_name" | "tenancy_id" | "home_region" | "subscription_id" | "service_name" | "currency" | "time_start" | "time_end" | "admin_email" | "buyer_email" | "end_user_customer" | "payment_method" | "pricing_model" | "product" | "is_having_usage" | "total_value" | "used_amount" | "line_net_amount" | "available_amount" | "total_dias_contrato" | "dias_decorridos", ExtArgs["result"]["subscriptionDetails"]>

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
   * Model audit
   */

  export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null
    _avg: AuditAvgAggregateOutputType | null
    _sum: AuditSumAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  export type AuditAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditSumAggregateOutputType = {
    id: number | null
  }

  export type AuditMinAggregateOutputType = {
    id: number | null
    event_id: string | null
    event_type: string | null
    event_time: Date | null
    source: string | null
    compartment_id: string | null
    compartment_name: string | null
    event_name: string | null
    ip_address: string | null
    principal_id: string | null
    principal_name: string | null
    tenant_id: string | null
    action: string | null
    message: string | null
    tenancy_name: string | null
  }

  export type AuditMaxAggregateOutputType = {
    id: number | null
    event_id: string | null
    event_type: string | null
    event_time: Date | null
    source: string | null
    compartment_id: string | null
    compartment_name: string | null
    event_name: string | null
    ip_address: string | null
    principal_id: string | null
    principal_name: string | null
    tenant_id: string | null
    action: string | null
    message: string | null
    tenancy_name: string | null
  }

  export type AuditCountAggregateOutputType = {
    id: number
    event_id: number
    event_type: number
    event_time: number
    source: number
    compartment_id: number
    compartment_name: number
    event_name: number
    ip_address: number
    principal_id: number
    principal_name: number
    tenant_id: number
    action: number
    message: number
    tenancy_name: number
    _all: number
  }


  export type AuditAvgAggregateInputType = {
    id?: true
  }

  export type AuditSumAggregateInputType = {
    id?: true
  }

  export type AuditMinAggregateInputType = {
    id?: true
    event_id?: true
    event_type?: true
    event_time?: true
    source?: true
    compartment_id?: true
    compartment_name?: true
    event_name?: true
    ip_address?: true
    principal_id?: true
    principal_name?: true
    tenant_id?: true
    action?: true
    message?: true
    tenancy_name?: true
  }

  export type AuditMaxAggregateInputType = {
    id?: true
    event_id?: true
    event_type?: true
    event_time?: true
    source?: true
    compartment_id?: true
    compartment_name?: true
    event_name?: true
    ip_address?: true
    principal_id?: true
    principal_name?: true
    tenant_id?: true
    action?: true
    message?: true
    tenancy_name?: true
  }

  export type AuditCountAggregateInputType = {
    id?: true
    event_id?: true
    event_type?: true
    event_time?: true
    source?: true
    compartment_id?: true
    compartment_name?: true
    event_name?: true
    ip_address?: true
    principal_id?: true
    principal_name?: true
    tenant_id?: true
    action?: true
    message?: true
    tenancy_name?: true
    _all?: true
  }

  export type AuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit to aggregate.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audits
    **/
    _count?: true | AuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditMaxAggregateInputType
  }

  export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit[P]>
      : GetScalarType<T[P], AggregateAudit[P]>
  }




  export type auditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditWhereInput
    orderBy?: auditOrderByWithAggregationInput | auditOrderByWithAggregationInput[]
    by: AuditScalarFieldEnum[] | AuditScalarFieldEnum
    having?: auditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditCountAggregateInputType | true
    _avg?: AuditAvgAggregateInputType
    _sum?: AuditSumAggregateInputType
    _min?: AuditMinAggregateInputType
    _max?: AuditMaxAggregateInputType
  }

  export type AuditGroupByOutputType = {
    id: number
    event_id: string
    event_type: string
    event_time: Date
    source: string
    compartment_id: string
    compartment_name: string
    event_name: string
    ip_address: string
    principal_id: string
    principal_name: string
    tenant_id: string
    action: string
    message: string
    tenancy_name: string
    _count: AuditCountAggregateOutputType | null
    _avg: AuditAvgAggregateOutputType | null
    _sum: AuditSumAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  type GetAuditGroupByPayload<T extends auditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditGroupByOutputType[P]>
            : GetScalarType<T[P], AuditGroupByOutputType[P]>
        }
      >
    >


  export type auditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    event_type?: boolean
    event_time?: boolean
    source?: boolean
    compartment_id?: boolean
    compartment_name?: boolean
    event_name?: boolean
    ip_address?: boolean
    principal_id?: boolean
    principal_name?: boolean
    tenant_id?: boolean
    action?: boolean
    message?: boolean
    tenancy_name?: boolean
  }, ExtArgs["result"]["audit"]>



  export type auditSelectScalar = {
    id?: boolean
    event_id?: boolean
    event_type?: boolean
    event_time?: boolean
    source?: boolean
    compartment_id?: boolean
    compartment_name?: boolean
    event_name?: boolean
    ip_address?: boolean
    principal_id?: boolean
    principal_name?: boolean
    tenant_id?: boolean
    action?: boolean
    message?: boolean
    tenancy_name?: boolean
  }

  export type auditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "event_type" | "event_time" | "source" | "compartment_id" | "compartment_name" | "event_name" | "ip_address" | "principal_id" | "principal_name" | "tenant_id" | "action" | "message" | "tenancy_name", ExtArgs["result"]["audit"]>

  export type $auditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: string
      event_type: string
      event_time: Date
      source: string
      compartment_id: string
      compartment_name: string
      event_name: string
      ip_address: string
      principal_id: string
      principal_name: string
      tenant_id: string
      action: string
      message: string
      tenancy_name: string
    }, ExtArgs["result"]["audit"]>
    composites: {}
  }

  type auditGetPayload<S extends boolean | null | undefined | auditDefaultArgs> = $Result.GetResult<Prisma.$auditPayload, S>

  type auditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditCountAggregateInputType | true
    }

  export interface auditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit'], meta: { name: 'audit' } }
    /**
     * Find zero or one Audit that matches the filter.
     * @param {auditFindUniqueArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auditFindUniqueArgs>(args: SelectSubset<T, auditFindUniqueArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auditFindUniqueOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auditFindUniqueOrThrowArgs>(args: SelectSubset<T, auditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindFirstArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auditFindFirstArgs>(args?: SelectSubset<T, auditFindFirstArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindFirstOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auditFindFirstOrThrowArgs>(args?: SelectSubset<T, auditFindFirstOrThrowArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audit.findMany()
     * 
     * // Get first 10 Audits
     * const audits = await prisma.audit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditWithIdOnly = await prisma.audit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auditFindManyArgs>(args?: SelectSubset<T, auditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit.
     * @param {auditCreateArgs} args - Arguments to create a Audit.
     * @example
     * // Create one Audit
     * const Audit = await prisma.audit.create({
     *   data: {
     *     // ... data to create a Audit
     *   }
     * })
     * 
     */
    create<T extends auditCreateArgs>(args: SelectSubset<T, auditCreateArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audits.
     * @param {auditCreateManyArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auditCreateManyArgs>(args?: SelectSubset<T, auditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Audit.
     * @param {auditDeleteArgs} args - Arguments to delete one Audit.
     * @example
     * // Delete one Audit
     * const Audit = await prisma.audit.delete({
     *   where: {
     *     // ... filter to delete one Audit
     *   }
     * })
     * 
     */
    delete<T extends auditDeleteArgs>(args: SelectSubset<T, auditDeleteArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit.
     * @param {auditUpdateArgs} args - Arguments to update one Audit.
     * @example
     * // Update one Audit
     * const audit = await prisma.audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auditUpdateArgs>(args: SelectSubset<T, auditUpdateArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audits.
     * @param {auditDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auditDeleteManyArgs>(args?: SelectSubset<T, auditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auditUpdateManyArgs>(args: SelectSubset<T, auditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audit.
     * @param {auditUpsertArgs} args - Arguments to update or create a Audit.
     * @example
     * // Update or create a Audit
     * const audit = await prisma.audit.upsert({
     *   create: {
     *     // ... data to create a Audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit we want to update
     *   }
     * })
     */
    upsert<T extends auditUpsertArgs>(args: SelectSubset<T, auditUpsertArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audit.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
    **/
    count<T extends auditCountArgs>(
      args?: Subset<T, auditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditAggregateArgs>(args: Subset<T, AuditAggregateArgs>): Prisma.PrismaPromise<GetAuditAggregateType<T>>

    /**
     * Group by Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditGroupByArgs} args - Group by arguments.
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
      T extends auditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auditGroupByArgs['orderBy'] }
        : { orderBy?: auditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, auditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit model
   */
  readonly fields: auditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the audit model
   */
  interface auditFieldRefs {
    readonly id: FieldRef<"audit", 'Int'>
    readonly event_id: FieldRef<"audit", 'String'>
    readonly event_type: FieldRef<"audit", 'String'>
    readonly event_time: FieldRef<"audit", 'DateTime'>
    readonly source: FieldRef<"audit", 'String'>
    readonly compartment_id: FieldRef<"audit", 'String'>
    readonly compartment_name: FieldRef<"audit", 'String'>
    readonly event_name: FieldRef<"audit", 'String'>
    readonly ip_address: FieldRef<"audit", 'String'>
    readonly principal_id: FieldRef<"audit", 'String'>
    readonly principal_name: FieldRef<"audit", 'String'>
    readonly tenant_id: FieldRef<"audit", 'String'>
    readonly action: FieldRef<"audit", 'String'>
    readonly message: FieldRef<"audit", 'String'>
    readonly tenancy_name: FieldRef<"audit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * audit findUnique
   */
  export type auditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit findUniqueOrThrow
   */
  export type auditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit findFirst
   */
  export type auditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit findFirstOrThrow
   */
  export type auditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit findMany
   */
  export type auditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Filter, which audits to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit create
   */
  export type auditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * The data needed to create a audit.
     */
    data: XOR<auditCreateInput, auditUncheckedCreateInput>
  }

  /**
   * audit createMany
   */
  export type auditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audits.
     */
    data: auditCreateManyInput | auditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit update
   */
  export type auditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * The data needed to update a audit.
     */
    data: XOR<auditUpdateInput, auditUncheckedUpdateInput>
    /**
     * Choose, which audit to update.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit updateMany
   */
  export type auditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audits.
     */
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyInput>
    /**
     * Filter which audits to update
     */
    where?: auditWhereInput
    /**
     * Limit how many audits to update.
     */
    limit?: number
  }

  /**
   * audit upsert
   */
  export type auditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * The filter to search for the audit to update in case it exists.
     */
    where: auditWhereUniqueInput
    /**
     * In case the audit found by the `where` argument doesn't exist, create a new audit with this data.
     */
    create: XOR<auditCreateInput, auditUncheckedCreateInput>
    /**
     * In case the audit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auditUpdateInput, auditUncheckedUpdateInput>
  }

  /**
   * audit delete
   */
  export type auditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Filter which audit to delete.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit deleteMany
   */
  export type auditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audits to delete
     */
    where?: auditWhereInput
    /**
     * Limit how many audits to delete.
     */
    limit?: number
  }

  /**
   * audit without action
   */
  export type auditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    event_id: string | null
    event_type: string | null
    event_time: string | null
    compartment_id: string | null
    compartment_name: string | null
    resource_name: string | null
    created_by: string | null
    tenancy_name: string | null
    timestamp: Date | null
    instanceActionType: string | null
    type_vm: string | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    event_id: string | null
    event_type: string | null
    event_time: string | null
    compartment_id: string | null
    compartment_name: string | null
    resource_name: string | null
    created_by: string | null
    tenancy_name: string | null
    timestamp: Date | null
    instanceActionType: string | null
    type_vm: string | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    event_id: number
    event_type: number
    event_time: number
    compartment_id: number
    compartment_name: number
    resource_name: number
    created_by: number
    tenancy_name: number
    timestamp: number
    instanceActionType: number
    type_vm: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    event_id?: true
    event_type?: true
    event_time?: true
    compartment_id?: true
    compartment_name?: true
    resource_name?: true
    created_by?: true
    tenancy_name?: true
    timestamp?: true
    instanceActionType?: true
    type_vm?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    event_id?: true
    event_type?: true
    event_time?: true
    compartment_id?: true
    compartment_name?: true
    resource_name?: true
    created_by?: true
    tenancy_name?: true
    timestamp?: true
    instanceActionType?: true
    type_vm?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    event_id?: true
    event_type?: true
    event_time?: true
    compartment_id?: true
    compartment_name?: true
    resource_name?: true
    created_by?: true
    tenancy_name?: true
    timestamp?: true
    instanceActionType?: true
    type_vm?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    event_id: string
    event_type: string
    event_time: string
    compartment_id: string
    compartment_name: string
    resource_name: string
    created_by: string
    tenancy_name: string
    timestamp: Date
    instanceActionType: string | null
    type_vm: string | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    event_type?: boolean
    event_time?: boolean
    compartment_id?: boolean
    compartment_name?: boolean
    resource_name?: boolean
    created_by?: boolean
    tenancy_name?: boolean
    timestamp?: boolean
    instanceActionType?: boolean
    type_vm?: boolean
  }, ExtArgs["result"]["notifications"]>



  export type notificationsSelectScalar = {
    id?: boolean
    event_id?: boolean
    event_type?: boolean
    event_time?: boolean
    compartment_id?: boolean
    compartment_name?: boolean
    resource_name?: boolean
    created_by?: boolean
    tenancy_name?: boolean
    timestamp?: boolean
    instanceActionType?: boolean
    type_vm?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "event_type" | "event_time" | "compartment_id" | "compartment_name" | "resource_name" | "created_by" | "tenancy_name" | "timestamp" | "instanceActionType" | "type_vm", ExtArgs["result"]["notifications"]>

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: string
      event_type: string
      event_time: string
      compartment_id: string
      compartment_name: string
      resource_name: string
      created_by: string
      tenancy_name: string
      timestamp: Date
      instanceActionType: string | null
      type_vm: string | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly event_id: FieldRef<"notifications", 'String'>
    readonly event_type: FieldRef<"notifications", 'String'>
    readonly event_time: FieldRef<"notifications", 'String'>
    readonly compartment_id: FieldRef<"notifications", 'String'>
    readonly compartment_name: FieldRef<"notifications", 'String'>
    readonly resource_name: FieldRef<"notifications", 'String'>
    readonly created_by: FieldRef<"notifications", 'String'>
    readonly tenancy_name: FieldRef<"notifications", 'String'>
    readonly timestamp: FieldRef<"notifications", 'DateTime'>
    readonly instanceActionType: FieldRef<"notifications", 'String'>
    readonly type_vm: FieldRef<"notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
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
    hourly_cost: 'hourly_cost'
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
    dias_decorridos: 'dias_decorridos'
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


  export const AuditScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    event_type: 'event_type',
    event_time: 'event_time',
    source: 'source',
    compartment_id: 'compartment_id',
    compartment_name: 'compartment_name',
    event_name: 'event_name',
    ip_address: 'ip_address',
    principal_id: 'principal_id',
    principal_name: 'principal_name',
    tenant_id: 'tenant_id',
    action: 'action',
    message: 'message',
    tenancy_name: 'tenancy_name'
  };

  export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    event_type: 'event_type',
    event_time: 'event_time',
    compartment_id: 'compartment_id',
    compartment_name: 'compartment_name',
    resource_name: 'resource_name',
    created_by: 'created_by',
    tenancy_name: 'tenancy_name',
    timestamp: 'timestamp',
    instanceActionType: 'instanceActionType',
    type_vm: 'type_vm'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


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
    is_having_usage: 'is_having_usage'
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


  export const auditOrderByRelevanceFieldEnum: {
    event_id: 'event_id',
    event_type: 'event_type',
    source: 'source',
    compartment_id: 'compartment_id',
    compartment_name: 'compartment_name',
    event_name: 'event_name',
    ip_address: 'ip_address',
    principal_id: 'principal_id',
    principal_name: 'principal_name',
    tenant_id: 'tenant_id',
    action: 'action',
    message: 'message',
    tenancy_name: 'tenancy_name'
  };

  export type auditOrderByRelevanceFieldEnum = (typeof auditOrderByRelevanceFieldEnum)[keyof typeof auditOrderByRelevanceFieldEnum]


  export const notificationsOrderByRelevanceFieldEnum: {
    event_id: 'event_id',
    event_type: 'event_type',
    event_time: 'event_time',
    compartment_id: 'compartment_id',
    compartment_name: 'compartment_name',
    resource_name: 'resource_name',
    created_by: 'created_by',
    tenancy_name: 'tenancy_name',
    instanceActionType: 'instanceActionType',
    type_vm: 'type_vm'
  };

  export type notificationsOrderByRelevanceFieldEnum = (typeof notificationsOrderByRelevanceFieldEnum)[keyof typeof notificationsOrderByRelevanceFieldEnum]


  export const tenancy_detailsOrderByRelevanceFieldEnum: {
    tenancy_id: 'tenancy_id',
    tenancy_name: 'tenancy_name',
    home_region: 'home_region',
    service_name: 'service_name',
    currency: 'currency',
    status: 'status'
  };

  export type tenancy_detailsOrderByRelevanceFieldEnum = (typeof tenancy_detailsOrderByRelevanceFieldEnum)[keyof typeof tenancy_detailsOrderByRelevanceFieldEnum]


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
    hourly_cost?: FloatNullableFilter<"ComputeInstances"> | number | null
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
    hourly_cost?: SortOrderInput | SortOrder
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
    hourly_cost?: FloatNullableFilter<"ComputeInstances"> | number | null
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
    hourly_cost?: SortOrderInput | SortOrder
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
    hourly_cost?: FloatNullableWithAggregatesFilter<"ComputeInstances"> | number | null
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

  export type auditWhereInput = {
    AND?: auditWhereInput | auditWhereInput[]
    OR?: auditWhereInput[]
    NOT?: auditWhereInput | auditWhereInput[]
    id?: IntFilter<"audit"> | number
    event_id?: StringFilter<"audit"> | string
    event_type?: StringFilter<"audit"> | string
    event_time?: DateTimeFilter<"audit"> | Date | string
    source?: StringFilter<"audit"> | string
    compartment_id?: StringFilter<"audit"> | string
    compartment_name?: StringFilter<"audit"> | string
    event_name?: StringFilter<"audit"> | string
    ip_address?: StringFilter<"audit"> | string
    principal_id?: StringFilter<"audit"> | string
    principal_name?: StringFilter<"audit"> | string
    tenant_id?: StringFilter<"audit"> | string
    action?: StringFilter<"audit"> | string
    message?: StringFilter<"audit"> | string
    tenancy_name?: StringFilter<"audit"> | string
  }

  export type auditOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    source?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    event_name?: SortOrder
    ip_address?: SortOrder
    principal_id?: SortOrder
    principal_name?: SortOrder
    tenant_id?: SortOrder
    action?: SortOrder
    message?: SortOrder
    tenancy_name?: SortOrder
    _relevance?: auditOrderByRelevanceInput
  }

  export type auditWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: auditWhereInput | auditWhereInput[]
    OR?: auditWhereInput[]
    NOT?: auditWhereInput | auditWhereInput[]
    event_id?: StringFilter<"audit"> | string
    event_type?: StringFilter<"audit"> | string
    event_time?: DateTimeFilter<"audit"> | Date | string
    source?: StringFilter<"audit"> | string
    compartment_id?: StringFilter<"audit"> | string
    compartment_name?: StringFilter<"audit"> | string
    event_name?: StringFilter<"audit"> | string
    ip_address?: StringFilter<"audit"> | string
    principal_id?: StringFilter<"audit"> | string
    principal_name?: StringFilter<"audit"> | string
    tenant_id?: StringFilter<"audit"> | string
    action?: StringFilter<"audit"> | string
    message?: StringFilter<"audit"> | string
    tenancy_name?: StringFilter<"audit"> | string
  }, "id">

  export type auditOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    source?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    event_name?: SortOrder
    ip_address?: SortOrder
    principal_id?: SortOrder
    principal_name?: SortOrder
    tenant_id?: SortOrder
    action?: SortOrder
    message?: SortOrder
    tenancy_name?: SortOrder
    _count?: auditCountOrderByAggregateInput
    _avg?: auditAvgOrderByAggregateInput
    _max?: auditMaxOrderByAggregateInput
    _min?: auditMinOrderByAggregateInput
    _sum?: auditSumOrderByAggregateInput
  }

  export type auditScalarWhereWithAggregatesInput = {
    AND?: auditScalarWhereWithAggregatesInput | auditScalarWhereWithAggregatesInput[]
    OR?: auditScalarWhereWithAggregatesInput[]
    NOT?: auditScalarWhereWithAggregatesInput | auditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"audit"> | number
    event_id?: StringWithAggregatesFilter<"audit"> | string
    event_type?: StringWithAggregatesFilter<"audit"> | string
    event_time?: DateTimeWithAggregatesFilter<"audit"> | Date | string
    source?: StringWithAggregatesFilter<"audit"> | string
    compartment_id?: StringWithAggregatesFilter<"audit"> | string
    compartment_name?: StringWithAggregatesFilter<"audit"> | string
    event_name?: StringWithAggregatesFilter<"audit"> | string
    ip_address?: StringWithAggregatesFilter<"audit"> | string
    principal_id?: StringWithAggregatesFilter<"audit"> | string
    principal_name?: StringWithAggregatesFilter<"audit"> | string
    tenant_id?: StringWithAggregatesFilter<"audit"> | string
    action?: StringWithAggregatesFilter<"audit"> | string
    message?: StringWithAggregatesFilter<"audit"> | string
    tenancy_name?: StringWithAggregatesFilter<"audit"> | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    event_id?: StringFilter<"notifications"> | string
    event_type?: StringFilter<"notifications"> | string
    event_time?: StringFilter<"notifications"> | string
    compartment_id?: StringFilter<"notifications"> | string
    compartment_name?: StringFilter<"notifications"> | string
    resource_name?: StringFilter<"notifications"> | string
    created_by?: StringFilter<"notifications"> | string
    tenancy_name?: StringFilter<"notifications"> | string
    timestamp?: DateTimeFilter<"notifications"> | Date | string
    instanceActionType?: StringNullableFilter<"notifications"> | string | null
    type_vm?: StringNullableFilter<"notifications"> | string | null
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    resource_name?: SortOrder
    created_by?: SortOrder
    tenancy_name?: SortOrder
    timestamp?: SortOrder
    instanceActionType?: SortOrderInput | SortOrder
    type_vm?: SortOrderInput | SortOrder
    _relevance?: notificationsOrderByRelevanceInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    event_id?: StringFilter<"notifications"> | string
    event_type?: StringFilter<"notifications"> | string
    event_time?: StringFilter<"notifications"> | string
    compartment_id?: StringFilter<"notifications"> | string
    compartment_name?: StringFilter<"notifications"> | string
    resource_name?: StringFilter<"notifications"> | string
    created_by?: StringFilter<"notifications"> | string
    tenancy_name?: StringFilter<"notifications"> | string
    timestamp?: DateTimeFilter<"notifications"> | Date | string
    instanceActionType?: StringNullableFilter<"notifications"> | string | null
    type_vm?: StringNullableFilter<"notifications"> | string | null
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    resource_name?: SortOrder
    created_by?: SortOrder
    tenancy_name?: SortOrder
    timestamp?: SortOrder
    instanceActionType?: SortOrderInput | SortOrder
    type_vm?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    event_id?: StringWithAggregatesFilter<"notifications"> | string
    event_type?: StringWithAggregatesFilter<"notifications"> | string
    event_time?: StringWithAggregatesFilter<"notifications"> | string
    compartment_id?: StringWithAggregatesFilter<"notifications"> | string
    compartment_name?: StringWithAggregatesFilter<"notifications"> | string
    resource_name?: StringWithAggregatesFilter<"notifications"> | string
    created_by?: StringWithAggregatesFilter<"notifications"> | string
    tenancy_name?: StringWithAggregatesFilter<"notifications"> | string
    timestamp?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
    instanceActionType?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    type_vm?: StringNullableWithAggregatesFilter<"notifications"> | string | null
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
    hourly_cost?: number | null
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
    hourly_cost?: number | null
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
    hourly_cost?: NullableFloatFieldUpdateOperationsInput | number | null
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
    hourly_cost?: NullableFloatFieldUpdateOperationsInput | number | null
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
    hourly_cost?: number | null
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
    hourly_cost?: NullableFloatFieldUpdateOperationsInput | number | null
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
    hourly_cost?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type auditCreateInput = {
    event_id: string
    event_type: string
    event_time: Date | string
    source: string
    compartment_id: string
    compartment_name: string
    event_name: string
    ip_address: string
    principal_id: string
    principal_name: string
    tenant_id: string
    action: string
    message: string
    tenancy_name: string
  }

  export type auditUncheckedCreateInput = {
    id?: number
    event_id: string
    event_type: string
    event_time: Date | string
    source: string
    compartment_id: string
    compartment_name: string
    event_name: string
    ip_address: string
    principal_id: string
    principal_name: string
    tenant_id: string
    action: string
    message: string
    tenancy_name: string
  }

  export type auditUpdateInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    compartment_id?: StringFieldUpdateOperationsInput | string
    compartment_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    principal_name?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    tenancy_name?: StringFieldUpdateOperationsInput | string
  }

  export type auditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    compartment_id?: StringFieldUpdateOperationsInput | string
    compartment_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    principal_name?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    tenancy_name?: StringFieldUpdateOperationsInput | string
  }

  export type auditCreateManyInput = {
    id?: number
    event_id: string
    event_type: string
    event_time: Date | string
    source: string
    compartment_id: string
    compartment_name: string
    event_name: string
    ip_address: string
    principal_id: string
    principal_name: string
    tenant_id: string
    action: string
    message: string
    tenancy_name: string
  }

  export type auditUpdateManyMutationInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    compartment_id?: StringFieldUpdateOperationsInput | string
    compartment_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    principal_name?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    tenancy_name?: StringFieldUpdateOperationsInput | string
  }

  export type auditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    compartment_id?: StringFieldUpdateOperationsInput | string
    compartment_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    principal_name?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    tenancy_name?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsCreateInput = {
    event_id: string
    event_type: string
    event_time: string
    compartment_id: string
    compartment_name: string
    resource_name: string
    created_by: string
    tenancy_name: string
    timestamp?: Date | string
    instanceActionType?: string | null
    type_vm?: string | null
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    event_id: string
    event_type: string
    event_time: string
    compartment_id: string
    compartment_name: string
    resource_name: string
    created_by: string
    tenancy_name: string
    timestamp?: Date | string
    instanceActionType?: string | null
    type_vm?: string | null
  }

  export type notificationsUpdateInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_time?: StringFieldUpdateOperationsInput | string
    compartment_id?: StringFieldUpdateOperationsInput | string
    compartment_name?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    tenancy_name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceActionType?: NullableStringFieldUpdateOperationsInput | string | null
    type_vm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_time?: StringFieldUpdateOperationsInput | string
    compartment_id?: StringFieldUpdateOperationsInput | string
    compartment_name?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    tenancy_name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceActionType?: NullableStringFieldUpdateOperationsInput | string | null
    type_vm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificationsCreateManyInput = {
    id?: number
    event_id: string
    event_type: string
    event_time: string
    compartment_id: string
    compartment_name: string
    resource_name: string
    created_by: string
    tenancy_name: string
    timestamp?: Date | string
    instanceActionType?: string | null
    type_vm?: string | null
  }

  export type notificationsUpdateManyMutationInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_time?: StringFieldUpdateOperationsInput | string
    compartment_id?: StringFieldUpdateOperationsInput | string
    compartment_name?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    tenancy_name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceActionType?: NullableStringFieldUpdateOperationsInput | string | null
    type_vm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_time?: StringFieldUpdateOperationsInput | string
    compartment_id?: StringFieldUpdateOperationsInput | string
    compartment_name?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    tenancy_name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceActionType?: NullableStringFieldUpdateOperationsInput | string | null
    type_vm?: NullableStringFieldUpdateOperationsInput | string | null
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
    hourly_cost?: SortOrder
  }

  export type ComputeInstancesAvgOrderByAggregateInput = {
    memory_in_gbs?: SortOrder
    ocpus?: SortOrder
    hourly_cost?: SortOrder
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
    hourly_cost?: SortOrder
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
    hourly_cost?: SortOrder
  }

  export type ComputeInstancesSumOrderByAggregateInput = {
    memory_in_gbs?: SortOrder
    ocpus?: SortOrder
    hourly_cost?: SortOrder
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

  export type auditOrderByRelevanceInput = {
    fields: auditOrderByRelevanceFieldEnum | auditOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type auditCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    source?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    event_name?: SortOrder
    ip_address?: SortOrder
    principal_id?: SortOrder
    principal_name?: SortOrder
    tenant_id?: SortOrder
    action?: SortOrder
    message?: SortOrder
    tenancy_name?: SortOrder
  }

  export type auditAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auditMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    source?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    event_name?: SortOrder
    ip_address?: SortOrder
    principal_id?: SortOrder
    principal_name?: SortOrder
    tenant_id?: SortOrder
    action?: SortOrder
    message?: SortOrder
    tenancy_name?: SortOrder
  }

  export type auditMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    source?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    event_name?: SortOrder
    ip_address?: SortOrder
    principal_id?: SortOrder
    principal_name?: SortOrder
    tenant_id?: SortOrder
    action?: SortOrder
    message?: SortOrder
    tenancy_name?: SortOrder
  }

  export type auditSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type notificationsOrderByRelevanceInput = {
    fields: notificationsOrderByRelevanceFieldEnum | notificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    resource_name?: SortOrder
    created_by?: SortOrder
    tenancy_name?: SortOrder
    timestamp?: SortOrder
    instanceActionType?: SortOrder
    type_vm?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    resource_name?: SortOrder
    created_by?: SortOrder
    tenancy_name?: SortOrder
    timestamp?: SortOrder
    instanceActionType?: SortOrder
    type_vm?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    event_type?: SortOrder
    event_time?: SortOrder
    compartment_id?: SortOrder
    compartment_name?: SortOrder
    resource_name?: SortOrder
    created_by?: SortOrder
    tenancy_name?: SortOrder
    timestamp?: SortOrder
    instanceActionType?: SortOrder
    type_vm?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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