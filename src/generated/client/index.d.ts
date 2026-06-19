
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model repairTicket
 * 
 */
export type repairTicket = $Result.DefaultSelection<Prisma.$repairTicketPayload>
/**
 * Model technicianNote
 * 
 */
export type technicianNote = $Result.DefaultSelection<Prisma.$technicianNotePayload>
/**
 * Model timelineEvent
 * 
 */
export type timelineEvent = $Result.DefaultSelection<Prisma.$timelineEventPayload>
/**
 * Model usedPart
 * 
 */
export type usedPart = $Result.DefaultSelection<Prisma.$usedPartPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model invoice
 * 
 */
export type invoice = $Result.DefaultSelection<Prisma.$invoicePayload>
/**
 * Model technician
 * 
 */
export type technician = $Result.DefaultSelection<Prisma.$technicianPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  OWNER: 'OWNER',
  TECHNICIAN: 'TECHNICIAN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TechnicianStatus: {
  AVAILABLE: 'AVAILABLE',
  BUSY: 'BUSY',
  ON_LEAVE: 'ON_LEAVE'
};

export type TechnicianStatus = (typeof TechnicianStatus)[keyof typeof TechnicianStatus]


export const TicketStatus: {
  PENDING: 'PENDING',
  DIAGNOSING: 'DIAGNOSING',
  IN_SERVICE: 'IN_SERVICE',
  RESOLVED: 'RESOLVED',
  DELIVERED: 'DELIVERED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const TicketPriority: {
  LOW: 'LOW',
  STANDARD: 'STANDARD',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]


export const TechnicianSpecialization: {
  BATTERY: 'BATTERY',
  BMS: 'BMS',
  CONTROLLER: 'CONTROLLER',
  MOTOR: 'MOTOR',
  GENERAL: 'GENERAL'
};

export type TechnicianSpecialization = (typeof TechnicianSpecialization)[keyof typeof TechnicianSpecialization]


export const SaleType: {
  REPAIR: 'REPAIR',
  COUNTER: 'COUNTER'
};

export type SaleType = (typeof SaleType)[keyof typeof SaleType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TechnicianStatus = $Enums.TechnicianStatus

export const TechnicianStatus: typeof $Enums.TechnicianStatus

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

export type TechnicianSpecialization = $Enums.TechnicianSpecialization

export const TechnicianSpecialization: typeof $Enums.TechnicianSpecialization

export type SaleType = $Enums.SaleType

export const SaleType: typeof $Enums.SaleType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairTicket`: Exposes CRUD operations for the **repairTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairTickets
    * const repairTickets = await prisma.repairTicket.findMany()
    * ```
    */
  get repairTicket(): Prisma.repairTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technicianNote`: Exposes CRUD operations for the **technicianNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechnicianNotes
    * const technicianNotes = await prisma.technicianNote.findMany()
    * ```
    */
  get technicianNote(): Prisma.technicianNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timelineEvent`: Exposes CRUD operations for the **timelineEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimelineEvents
    * const timelineEvents = await prisma.timelineEvent.findMany()
    * ```
    */
  get timelineEvent(): Prisma.timelineEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usedPart`: Exposes CRUD operations for the **usedPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsedParts
    * const usedParts = await prisma.usedPart.findMany()
    * ```
    */
  get usedPart(): Prisma.usedPartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.invoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technician`: Exposes CRUD operations for the **technician** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Technicians
    * const technicians = await prisma.technician.findMany()
    * ```
    */
  get technician(): Prisma.technicianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    User: 'User',
    customer: 'customer',
    repairTicket: 'repairTicket',
    technicianNote: 'technicianNote',
    timelineEvent: 'timelineEvent',
    usedPart: 'usedPart',
    inventory: 'inventory',
    invoice: 'invoice',
    technician: 'technician',
    Vehicle: 'Vehicle'
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
      modelProps: "user" | "customer" | "repairTicket" | "technicianNote" | "timelineEvent" | "usedPart" | "inventory" | "invoice" | "technician" | "vehicle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      repairTicket: {
        payload: Prisma.$repairTicketPayload<ExtArgs>
        fields: Prisma.repairTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.repairTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.repairTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>
          }
          findFirst: {
            args: Prisma.repairTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.repairTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>
          }
          findMany: {
            args: Prisma.repairTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>[]
          }
          create: {
            args: Prisma.repairTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>
          }
          createMany: {
            args: Prisma.repairTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.repairTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>[]
          }
          delete: {
            args: Prisma.repairTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>
          }
          update: {
            args: Prisma.repairTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>
          }
          deleteMany: {
            args: Prisma.repairTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.repairTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.repairTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>[]
          }
          upsert: {
            args: Prisma.repairTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repairTicketPayload>
          }
          aggregate: {
            args: Prisma.RepairTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairTicket>
          }
          groupBy: {
            args: Prisma.repairTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.repairTicketCountArgs<ExtArgs>
            result: $Utils.Optional<RepairTicketCountAggregateOutputType> | number
          }
        }
      }
      technicianNote: {
        payload: Prisma.$technicianNotePayload<ExtArgs>
        fields: Prisma.technicianNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.technicianNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.technicianNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>
          }
          findFirst: {
            args: Prisma.technicianNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.technicianNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>
          }
          findMany: {
            args: Prisma.technicianNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>[]
          }
          create: {
            args: Prisma.technicianNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>
          }
          createMany: {
            args: Prisma.technicianNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.technicianNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>[]
          }
          delete: {
            args: Prisma.technicianNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>
          }
          update: {
            args: Prisma.technicianNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>
          }
          deleteMany: {
            args: Prisma.technicianNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.technicianNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.technicianNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>[]
          }
          upsert: {
            args: Prisma.technicianNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianNotePayload>
          }
          aggregate: {
            args: Prisma.TechnicianNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnicianNote>
          }
          groupBy: {
            args: Prisma.technicianNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.technicianNoteCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianNoteCountAggregateOutputType> | number
          }
        }
      }
      timelineEvent: {
        payload: Prisma.$timelineEventPayload<ExtArgs>
        fields: Prisma.timelineEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.timelineEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.timelineEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>
          }
          findFirst: {
            args: Prisma.timelineEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.timelineEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>
          }
          findMany: {
            args: Prisma.timelineEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>[]
          }
          create: {
            args: Prisma.timelineEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>
          }
          createMany: {
            args: Prisma.timelineEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.timelineEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>[]
          }
          delete: {
            args: Prisma.timelineEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>
          }
          update: {
            args: Prisma.timelineEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>
          }
          deleteMany: {
            args: Prisma.timelineEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.timelineEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.timelineEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>[]
          }
          upsert: {
            args: Prisma.timelineEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelineEventPayload>
          }
          aggregate: {
            args: Prisma.TimelineEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimelineEvent>
          }
          groupBy: {
            args: Prisma.timelineEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.timelineEventCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineEventCountAggregateOutputType> | number
          }
        }
      }
      usedPart: {
        payload: Prisma.$usedPartPayload<ExtArgs>
        fields: Prisma.usedPartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usedPartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usedPartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>
          }
          findFirst: {
            args: Prisma.usedPartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usedPartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>
          }
          findMany: {
            args: Prisma.usedPartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>[]
          }
          create: {
            args: Prisma.usedPartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>
          }
          createMany: {
            args: Prisma.usedPartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usedPartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>[]
          }
          delete: {
            args: Prisma.usedPartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>
          }
          update: {
            args: Prisma.usedPartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>
          }
          deleteMany: {
            args: Prisma.usedPartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usedPartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usedPartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>[]
          }
          upsert: {
            args: Prisma.usedPartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usedPartPayload>
          }
          aggregate: {
            args: Prisma.UsedPartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsedPart>
          }
          groupBy: {
            args: Prisma.usedPartGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsedPartGroupByOutputType>[]
          }
          count: {
            args: Prisma.usedPartCountArgs<ExtArgs>
            result: $Utils.Optional<UsedPartCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      invoice: {
        payload: Prisma.$invoicePayload<ExtArgs>
        fields: Prisma.invoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          findFirst: {
            args: Prisma.invoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          findMany: {
            args: Prisma.invoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          create: {
            args: Prisma.invoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          createMany: {
            args: Prisma.invoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          delete: {
            args: Prisma.invoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          update: {
            args: Prisma.invoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          deleteMany: {
            args: Prisma.invoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          upsert: {
            args: Prisma.invoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.invoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      technician: {
        payload: Prisma.$technicianPayload<ExtArgs>
        fields: Prisma.technicianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.technicianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.technicianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>
          }
          findFirst: {
            args: Prisma.technicianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.technicianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>
          }
          findMany: {
            args: Prisma.technicianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>[]
          }
          create: {
            args: Prisma.technicianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>
          }
          createMany: {
            args: Prisma.technicianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.technicianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>[]
          }
          delete: {
            args: Prisma.technicianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>
          }
          update: {
            args: Prisma.technicianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>
          }
          deleteMany: {
            args: Prisma.technicianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.technicianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.technicianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>[]
          }
          upsert: {
            args: Prisma.technicianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$technicianPayload>
          }
          aggregate: {
            args: Prisma.TechnicianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnician>
          }
          groupBy: {
            args: Prisma.technicianGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianGroupByOutputType>[]
          }
          count: {
            args: Prisma.technicianCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianCountAggregateOutputType> | number
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
    user?: UserOmit
    customer?: customerOmit
    repairTicket?: repairTicketOmit
    technicianNote?: technicianNoteOmit
    timelineEvent?: timelineEventOmit
    usedPart?: usedPartOmit
    inventory?: inventoryOmit
    invoice?: invoiceOmit
    technician?: technicianOmit
    vehicle?: VehicleOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    tickets: number
    vehicles: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | CustomerCountOutputTypeCountTicketsArgs
    vehicles?: boolean | CustomerCountOutputTypeCountVehiclesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: repairTicketWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type RepairTicketCountOutputType
   */

  export type RepairTicketCountOutputType = {
    notes: number
    timeline: number
    parts: number
  }

  export type RepairTicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | RepairTicketCountOutputTypeCountNotesArgs
    timeline?: boolean | RepairTicketCountOutputTypeCountTimelineArgs
    parts?: boolean | RepairTicketCountOutputTypeCountPartsArgs
  }

  // Custom InputTypes
  /**
   * RepairTicketCountOutputType without action
   */
  export type RepairTicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairTicketCountOutputType
     */
    select?: RepairTicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepairTicketCountOutputType without action
   */
  export type RepairTicketCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: technicianNoteWhereInput
  }

  /**
   * RepairTicketCountOutputType without action
   */
  export type RepairTicketCountOutputTypeCountTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timelineEventWhereInput
  }

  /**
   * RepairTicketCountOutputType without action
   */
  export type RepairTicketCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usedPartWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    usageHistory: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usageHistory?: boolean | InventoryCountOutputTypeCountUsageHistoryArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountUsageHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usedPartWhereInput
  }


  /**
   * Count Type TechnicianCountOutputType
   */

  export type TechnicianCountOutputType = {
    tickets: number
  }

  export type TechnicianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | TechnicianCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianCountOutputType
     */
    select?: TechnicianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: repairTicketWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    tickets: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | VehicleCountOutputTypeCountTicketsArgs
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
  export type VehicleCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: repairTicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string
    address: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    tickets?: boolean | customer$ticketsArgs<ExtArgs>
    vehicles?: boolean | customer$vehiclesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type customerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "createdAt", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | customer$ticketsArgs<ExtArgs>
    vehicles?: boolean | customer$vehiclesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      tickets: Prisma.$repairTicketPayload<ExtArgs>[]
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string
      address: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
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
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends customer$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, customer$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicles<T extends customer$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, customer$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<"customer", 'String'>
    readonly name: FieldRef<"customer", 'String'>
    readonly email: FieldRef<"customer", 'String'>
    readonly phone: FieldRef<"customer", 'String'>
    readonly address: FieldRef<"customer", 'String'>
    readonly createdAt: FieldRef<"customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer createManyAndReturn
   */
  export type customerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer updateManyAndReturn
   */
  export type customerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.tickets
   */
  export type customer$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    where?: repairTicketWhereInput
    orderBy?: repairTicketOrderByWithRelationInput | repairTicketOrderByWithRelationInput[]
    cursor?: repairTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairTicketScalarFieldEnum | RepairTicketScalarFieldEnum[]
  }

  /**
   * customer.vehicles
   */
  export type customer$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model repairTicket
   */

  export type AggregateRepairTicket = {
    _count: RepairTicketCountAggregateOutputType | null
    _avg: RepairTicketAvgAggregateOutputType | null
    _sum: RepairTicketSumAggregateOutputType | null
    _min: RepairTicketMinAggregateOutputType | null
    _max: RepairTicketMaxAggregateOutputType | null
  }

  export type RepairTicketAvgAggregateOutputType = {
    id: number | null
    estimatedCost: number | null
    finalCost: number | null
    vehicleId: number | null
  }

  export type RepairTicketSumAggregateOutputType = {
    id: number | null
    estimatedCost: number | null
    finalCost: number | null
    vehicleId: number | null
  }

  export type RepairTicketMinAggregateOutputType = {
    id: number | null
    issueCategory: string | null
    description: string | null
    status: $Enums.TicketStatus | null
    bay: string | null
    priority: $Enums.TicketPriority | null
    createdAt: Date | null
    updatedAt: Date | null
    closedAt: Date | null
    estimatedCost: number | null
    finalCost: number | null
    aiSummary: string | null
    manufacturer: string | null
    customerId: string | null
    technicianId: string | null
    vehicleId: number | null
  }

  export type RepairTicketMaxAggregateOutputType = {
    id: number | null
    issueCategory: string | null
    description: string | null
    status: $Enums.TicketStatus | null
    bay: string | null
    priority: $Enums.TicketPriority | null
    createdAt: Date | null
    updatedAt: Date | null
    closedAt: Date | null
    estimatedCost: number | null
    finalCost: number | null
    aiSummary: string | null
    manufacturer: string | null
    customerId: string | null
    technicianId: string | null
    vehicleId: number | null
  }

  export type RepairTicketCountAggregateOutputType = {
    id: number
    issueCategory: number
    description: number
    status: number
    bay: number
    priority: number
    createdAt: number
    updatedAt: number
    closedAt: number
    estimatedCost: number
    finalCost: number
    aiSummary: number
    manufacturer: number
    customerId: number
    technicianId: number
    vehicleId: number
    _all: number
  }


  export type RepairTicketAvgAggregateInputType = {
    id?: true
    estimatedCost?: true
    finalCost?: true
    vehicleId?: true
  }

  export type RepairTicketSumAggregateInputType = {
    id?: true
    estimatedCost?: true
    finalCost?: true
    vehicleId?: true
  }

  export type RepairTicketMinAggregateInputType = {
    id?: true
    issueCategory?: true
    description?: true
    status?: true
    bay?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
    estimatedCost?: true
    finalCost?: true
    aiSummary?: true
    manufacturer?: true
    customerId?: true
    technicianId?: true
    vehicleId?: true
  }

  export type RepairTicketMaxAggregateInputType = {
    id?: true
    issueCategory?: true
    description?: true
    status?: true
    bay?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
    estimatedCost?: true
    finalCost?: true
    aiSummary?: true
    manufacturer?: true
    customerId?: true
    technicianId?: true
    vehicleId?: true
  }

  export type RepairTicketCountAggregateInputType = {
    id?: true
    issueCategory?: true
    description?: true
    status?: true
    bay?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
    estimatedCost?: true
    finalCost?: true
    aiSummary?: true
    manufacturer?: true
    customerId?: true
    technicianId?: true
    vehicleId?: true
    _all?: true
  }

  export type RepairTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which repairTicket to aggregate.
     */
    where?: repairTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repairTickets to fetch.
     */
    orderBy?: repairTicketOrderByWithRelationInput | repairTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: repairTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repairTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repairTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned repairTickets
    **/
    _count?: true | RepairTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairTicketMaxAggregateInputType
  }

  export type GetRepairTicketAggregateType<T extends RepairTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairTicket[P]>
      : GetScalarType<T[P], AggregateRepairTicket[P]>
  }




  export type repairTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: repairTicketWhereInput
    orderBy?: repairTicketOrderByWithAggregationInput | repairTicketOrderByWithAggregationInput[]
    by: RepairTicketScalarFieldEnum[] | RepairTicketScalarFieldEnum
    having?: repairTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairTicketCountAggregateInputType | true
    _avg?: RepairTicketAvgAggregateInputType
    _sum?: RepairTicketSumAggregateInputType
    _min?: RepairTicketMinAggregateInputType
    _max?: RepairTicketMaxAggregateInputType
  }

  export type RepairTicketGroupByOutputType = {
    id: number
    issueCategory: string
    description: string
    status: $Enums.TicketStatus
    bay: string | null
    priority: $Enums.TicketPriority
    createdAt: Date
    updatedAt: Date
    closedAt: Date | null
    estimatedCost: number | null
    finalCost: number | null
    aiSummary: string | null
    manufacturer: string | null
    customerId: string
    technicianId: string | null
    vehicleId: number | null
    _count: RepairTicketCountAggregateOutputType | null
    _avg: RepairTicketAvgAggregateOutputType | null
    _sum: RepairTicketSumAggregateOutputType | null
    _min: RepairTicketMinAggregateOutputType | null
    _max: RepairTicketMaxAggregateOutputType | null
  }

  type GetRepairTicketGroupByPayload<T extends repairTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairTicketGroupByOutputType[P]>
            : GetScalarType<T[P], RepairTicketGroupByOutputType[P]>
        }
      >
    >


  export type repairTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueCategory?: boolean
    description?: boolean
    status?: boolean
    bay?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    estimatedCost?: boolean
    finalCost?: boolean
    aiSummary?: boolean
    manufacturer?: boolean
    customerId?: boolean
    technicianId?: boolean
    vehicleId?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    technician?: boolean | repairTicket$technicianArgs<ExtArgs>
    vehicle?: boolean | repairTicket$vehicleArgs<ExtArgs>
    notes?: boolean | repairTicket$notesArgs<ExtArgs>
    timeline?: boolean | repairTicket$timelineArgs<ExtArgs>
    parts?: boolean | repairTicket$partsArgs<ExtArgs>
    invoice?: boolean | repairTicket$invoiceArgs<ExtArgs>
    _count?: boolean | RepairTicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairTicket"]>

  export type repairTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueCategory?: boolean
    description?: boolean
    status?: boolean
    bay?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    estimatedCost?: boolean
    finalCost?: boolean
    aiSummary?: boolean
    manufacturer?: boolean
    customerId?: boolean
    technicianId?: boolean
    vehicleId?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    technician?: boolean | repairTicket$technicianArgs<ExtArgs>
    vehicle?: boolean | repairTicket$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["repairTicket"]>

  export type repairTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueCategory?: boolean
    description?: boolean
    status?: boolean
    bay?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    estimatedCost?: boolean
    finalCost?: boolean
    aiSummary?: boolean
    manufacturer?: boolean
    customerId?: boolean
    technicianId?: boolean
    vehicleId?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    technician?: boolean | repairTicket$technicianArgs<ExtArgs>
    vehicle?: boolean | repairTicket$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["repairTicket"]>

  export type repairTicketSelectScalar = {
    id?: boolean
    issueCategory?: boolean
    description?: boolean
    status?: boolean
    bay?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    estimatedCost?: boolean
    finalCost?: boolean
    aiSummary?: boolean
    manufacturer?: boolean
    customerId?: boolean
    technicianId?: boolean
    vehicleId?: boolean
  }

  export type repairTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issueCategory" | "description" | "status" | "bay" | "priority" | "createdAt" | "updatedAt" | "closedAt" | "estimatedCost" | "finalCost" | "aiSummary" | "manufacturer" | "customerId" | "technicianId" | "vehicleId", ExtArgs["result"]["repairTicket"]>
  export type repairTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    technician?: boolean | repairTicket$technicianArgs<ExtArgs>
    vehicle?: boolean | repairTicket$vehicleArgs<ExtArgs>
    notes?: boolean | repairTicket$notesArgs<ExtArgs>
    timeline?: boolean | repairTicket$timelineArgs<ExtArgs>
    parts?: boolean | repairTicket$partsArgs<ExtArgs>
    invoice?: boolean | repairTicket$invoiceArgs<ExtArgs>
    _count?: boolean | RepairTicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type repairTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    technician?: boolean | repairTicket$technicianArgs<ExtArgs>
    vehicle?: boolean | repairTicket$vehicleArgs<ExtArgs>
  }
  export type repairTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    technician?: boolean | repairTicket$technicianArgs<ExtArgs>
    vehicle?: boolean | repairTicket$vehicleArgs<ExtArgs>
  }

  export type $repairTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "repairTicket"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>
      technician: Prisma.$technicianPayload<ExtArgs> | null
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      notes: Prisma.$technicianNotePayload<ExtArgs>[]
      timeline: Prisma.$timelineEventPayload<ExtArgs>[]
      parts: Prisma.$usedPartPayload<ExtArgs>[]
      invoice: Prisma.$invoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      issueCategory: string
      description: string
      status: $Enums.TicketStatus
      bay: string | null
      priority: $Enums.TicketPriority
      createdAt: Date
      updatedAt: Date
      closedAt: Date | null
      estimatedCost: number | null
      finalCost: number | null
      aiSummary: string | null
      manufacturer: string | null
      customerId: string
      technicianId: string | null
      vehicleId: number | null
    }, ExtArgs["result"]["repairTicket"]>
    composites: {}
  }

  type repairTicketGetPayload<S extends boolean | null | undefined | repairTicketDefaultArgs> = $Result.GetResult<Prisma.$repairTicketPayload, S>

  type repairTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<repairTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairTicketCountAggregateInputType | true
    }

  export interface repairTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['repairTicket'], meta: { name: 'repairTicket' } }
    /**
     * Find zero or one RepairTicket that matches the filter.
     * @param {repairTicketFindUniqueArgs} args - Arguments to find a RepairTicket
     * @example
     * // Get one RepairTicket
     * const repairTicket = await prisma.repairTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends repairTicketFindUniqueArgs>(args: SelectSubset<T, repairTicketFindUniqueArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {repairTicketFindUniqueOrThrowArgs} args - Arguments to find a RepairTicket
     * @example
     * // Get one RepairTicket
     * const repairTicket = await prisma.repairTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends repairTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, repairTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairTicketFindFirstArgs} args - Arguments to find a RepairTicket
     * @example
     * // Get one RepairTicket
     * const repairTicket = await prisma.repairTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends repairTicketFindFirstArgs>(args?: SelectSubset<T, repairTicketFindFirstArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairTicketFindFirstOrThrowArgs} args - Arguments to find a RepairTicket
     * @example
     * // Get one RepairTicket
     * const repairTicket = await prisma.repairTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends repairTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, repairTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairTickets
     * const repairTickets = await prisma.repairTicket.findMany()
     * 
     * // Get first 10 RepairTickets
     * const repairTickets = await prisma.repairTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairTicketWithIdOnly = await prisma.repairTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends repairTicketFindManyArgs>(args?: SelectSubset<T, repairTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairTicket.
     * @param {repairTicketCreateArgs} args - Arguments to create a RepairTicket.
     * @example
     * // Create one RepairTicket
     * const RepairTicket = await prisma.repairTicket.create({
     *   data: {
     *     // ... data to create a RepairTicket
     *   }
     * })
     * 
     */
    create<T extends repairTicketCreateArgs>(args: SelectSubset<T, repairTicketCreateArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairTickets.
     * @param {repairTicketCreateManyArgs} args - Arguments to create many RepairTickets.
     * @example
     * // Create many RepairTickets
     * const repairTicket = await prisma.repairTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends repairTicketCreateManyArgs>(args?: SelectSubset<T, repairTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairTickets and returns the data saved in the database.
     * @param {repairTicketCreateManyAndReturnArgs} args - Arguments to create many RepairTickets.
     * @example
     * // Create many RepairTickets
     * const repairTicket = await prisma.repairTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairTickets and only return the `id`
     * const repairTicketWithIdOnly = await prisma.repairTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends repairTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, repairTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairTicket.
     * @param {repairTicketDeleteArgs} args - Arguments to delete one RepairTicket.
     * @example
     * // Delete one RepairTicket
     * const RepairTicket = await prisma.repairTicket.delete({
     *   where: {
     *     // ... filter to delete one RepairTicket
     *   }
     * })
     * 
     */
    delete<T extends repairTicketDeleteArgs>(args: SelectSubset<T, repairTicketDeleteArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairTicket.
     * @param {repairTicketUpdateArgs} args - Arguments to update one RepairTicket.
     * @example
     * // Update one RepairTicket
     * const repairTicket = await prisma.repairTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends repairTicketUpdateArgs>(args: SelectSubset<T, repairTicketUpdateArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairTickets.
     * @param {repairTicketDeleteManyArgs} args - Arguments to filter RepairTickets to delete.
     * @example
     * // Delete a few RepairTickets
     * const { count } = await prisma.repairTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends repairTicketDeleteManyArgs>(args?: SelectSubset<T, repairTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairTickets
     * const repairTicket = await prisma.repairTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends repairTicketUpdateManyArgs>(args: SelectSubset<T, repairTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairTickets and returns the data updated in the database.
     * @param {repairTicketUpdateManyAndReturnArgs} args - Arguments to update many RepairTickets.
     * @example
     * // Update many RepairTickets
     * const repairTicket = await prisma.repairTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairTickets and only return the `id`
     * const repairTicketWithIdOnly = await prisma.repairTicket.updateManyAndReturn({
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
    updateManyAndReturn<T extends repairTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, repairTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairTicket.
     * @param {repairTicketUpsertArgs} args - Arguments to update or create a RepairTicket.
     * @example
     * // Update or create a RepairTicket
     * const repairTicket = await prisma.repairTicket.upsert({
     *   create: {
     *     // ... data to create a RepairTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairTicket we want to update
     *   }
     * })
     */
    upsert<T extends repairTicketUpsertArgs>(args: SelectSubset<T, repairTicketUpsertArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairTicketCountArgs} args - Arguments to filter RepairTickets to count.
     * @example
     * // Count the number of RepairTickets
     * const count = await prisma.repairTicket.count({
     *   where: {
     *     // ... the filter for the RepairTickets we want to count
     *   }
     * })
    **/
    count<T extends repairTicketCountArgs>(
      args?: Subset<T, repairTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepairTicketAggregateArgs>(args: Subset<T, RepairTicketAggregateArgs>): Prisma.PrismaPromise<GetRepairTicketAggregateType<T>>

    /**
     * Group by RepairTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairTicketGroupByArgs} args - Group by arguments.
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
      T extends repairTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: repairTicketGroupByArgs['orderBy'] }
        : { orderBy?: repairTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, repairTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the repairTicket model
   */
  readonly fields: repairTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for repairTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__repairTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technician<T extends repairTicket$technicianArgs<ExtArgs> = {}>(args?: Subset<T, repairTicket$technicianArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends repairTicket$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, repairTicket$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends repairTicket$notesArgs<ExtArgs> = {}>(args?: Subset<T, repairTicket$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeline<T extends repairTicket$timelineArgs<ExtArgs> = {}>(args?: Subset<T, repairTicket$timelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parts<T extends repairTicket$partsArgs<ExtArgs> = {}>(args?: Subset<T, repairTicket$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice<T extends repairTicket$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, repairTicket$invoiceArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the repairTicket model
   */
  interface repairTicketFieldRefs {
    readonly id: FieldRef<"repairTicket", 'Int'>
    readonly issueCategory: FieldRef<"repairTicket", 'String'>
    readonly description: FieldRef<"repairTicket", 'String'>
    readonly status: FieldRef<"repairTicket", 'TicketStatus'>
    readonly bay: FieldRef<"repairTicket", 'String'>
    readonly priority: FieldRef<"repairTicket", 'TicketPriority'>
    readonly createdAt: FieldRef<"repairTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"repairTicket", 'DateTime'>
    readonly closedAt: FieldRef<"repairTicket", 'DateTime'>
    readonly estimatedCost: FieldRef<"repairTicket", 'Float'>
    readonly finalCost: FieldRef<"repairTicket", 'Float'>
    readonly aiSummary: FieldRef<"repairTicket", 'String'>
    readonly manufacturer: FieldRef<"repairTicket", 'String'>
    readonly customerId: FieldRef<"repairTicket", 'String'>
    readonly technicianId: FieldRef<"repairTicket", 'String'>
    readonly vehicleId: FieldRef<"repairTicket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * repairTicket findUnique
   */
  export type repairTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * Filter, which repairTicket to fetch.
     */
    where: repairTicketWhereUniqueInput
  }

  /**
   * repairTicket findUniqueOrThrow
   */
  export type repairTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * Filter, which repairTicket to fetch.
     */
    where: repairTicketWhereUniqueInput
  }

  /**
   * repairTicket findFirst
   */
  export type repairTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * Filter, which repairTicket to fetch.
     */
    where?: repairTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repairTickets to fetch.
     */
    orderBy?: repairTicketOrderByWithRelationInput | repairTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repairTickets.
     */
    cursor?: repairTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repairTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repairTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repairTickets.
     */
    distinct?: RepairTicketScalarFieldEnum | RepairTicketScalarFieldEnum[]
  }

  /**
   * repairTicket findFirstOrThrow
   */
  export type repairTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * Filter, which repairTicket to fetch.
     */
    where?: repairTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repairTickets to fetch.
     */
    orderBy?: repairTicketOrderByWithRelationInput | repairTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repairTickets.
     */
    cursor?: repairTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repairTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repairTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repairTickets.
     */
    distinct?: RepairTicketScalarFieldEnum | RepairTicketScalarFieldEnum[]
  }

  /**
   * repairTicket findMany
   */
  export type repairTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * Filter, which repairTickets to fetch.
     */
    where?: repairTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repairTickets to fetch.
     */
    orderBy?: repairTicketOrderByWithRelationInput | repairTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing repairTickets.
     */
    cursor?: repairTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repairTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repairTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repairTickets.
     */
    distinct?: RepairTicketScalarFieldEnum | RepairTicketScalarFieldEnum[]
  }

  /**
   * repairTicket create
   */
  export type repairTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a repairTicket.
     */
    data: XOR<repairTicketCreateInput, repairTicketUncheckedCreateInput>
  }

  /**
   * repairTicket createMany
   */
  export type repairTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many repairTickets.
     */
    data: repairTicketCreateManyInput | repairTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * repairTicket createManyAndReturn
   */
  export type repairTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * The data used to create many repairTickets.
     */
    data: repairTicketCreateManyInput | repairTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * repairTicket update
   */
  export type repairTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a repairTicket.
     */
    data: XOR<repairTicketUpdateInput, repairTicketUncheckedUpdateInput>
    /**
     * Choose, which repairTicket to update.
     */
    where: repairTicketWhereUniqueInput
  }

  /**
   * repairTicket updateMany
   */
  export type repairTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update repairTickets.
     */
    data: XOR<repairTicketUpdateManyMutationInput, repairTicketUncheckedUpdateManyInput>
    /**
     * Filter which repairTickets to update
     */
    where?: repairTicketWhereInput
    /**
     * Limit how many repairTickets to update.
     */
    limit?: number
  }

  /**
   * repairTicket updateManyAndReturn
   */
  export type repairTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * The data used to update repairTickets.
     */
    data: XOR<repairTicketUpdateManyMutationInput, repairTicketUncheckedUpdateManyInput>
    /**
     * Filter which repairTickets to update
     */
    where?: repairTicketWhereInput
    /**
     * Limit how many repairTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * repairTicket upsert
   */
  export type repairTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the repairTicket to update in case it exists.
     */
    where: repairTicketWhereUniqueInput
    /**
     * In case the repairTicket found by the `where` argument doesn't exist, create a new repairTicket with this data.
     */
    create: XOR<repairTicketCreateInput, repairTicketUncheckedCreateInput>
    /**
     * In case the repairTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<repairTicketUpdateInput, repairTicketUncheckedUpdateInput>
  }

  /**
   * repairTicket delete
   */
  export type repairTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    /**
     * Filter which repairTicket to delete.
     */
    where: repairTicketWhereUniqueInput
  }

  /**
   * repairTicket deleteMany
   */
  export type repairTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which repairTickets to delete
     */
    where?: repairTicketWhereInput
    /**
     * Limit how many repairTickets to delete.
     */
    limit?: number
  }

  /**
   * repairTicket.technician
   */
  export type repairTicket$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    where?: technicianWhereInput
  }

  /**
   * repairTicket.vehicle
   */
  export type repairTicket$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: VehicleWhereInput
  }

  /**
   * repairTicket.notes
   */
  export type repairTicket$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    where?: technicianNoteWhereInput
    orderBy?: technicianNoteOrderByWithRelationInput | technicianNoteOrderByWithRelationInput[]
    cursor?: technicianNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechnicianNoteScalarFieldEnum | TechnicianNoteScalarFieldEnum[]
  }

  /**
   * repairTicket.timeline
   */
  export type repairTicket$timelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    where?: timelineEventWhereInput
    orderBy?: timelineEventOrderByWithRelationInput | timelineEventOrderByWithRelationInput[]
    cursor?: timelineEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineEventScalarFieldEnum | TimelineEventScalarFieldEnum[]
  }

  /**
   * repairTicket.parts
   */
  export type repairTicket$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    where?: usedPartWhereInput
    orderBy?: usedPartOrderByWithRelationInput | usedPartOrderByWithRelationInput[]
    cursor?: usedPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsedPartScalarFieldEnum | UsedPartScalarFieldEnum[]
  }

  /**
   * repairTicket.invoice
   */
  export type repairTicket$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    where?: invoiceWhereInput
  }

  /**
   * repairTicket without action
   */
  export type repairTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
  }


  /**
   * Model technicianNote
   */

  export type AggregateTechnicianNote = {
    _count: TechnicianNoteCountAggregateOutputType | null
    _avg: TechnicianNoteAvgAggregateOutputType | null
    _sum: TechnicianNoteSumAggregateOutputType | null
    _min: TechnicianNoteMinAggregateOutputType | null
    _max: TechnicianNoteMaxAggregateOutputType | null
  }

  export type TechnicianNoteAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
  }

  export type TechnicianNoteSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
  }

  export type TechnicianNoteMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    aiSummary: string | null
    rawVoiceText: string | null
    structuredText: string | null
    createdAt: Date | null
  }

  export type TechnicianNoteMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    aiSummary: string | null
    rawVoiceText: string | null
    structuredText: string | null
    createdAt: Date | null
  }

  export type TechnicianNoteCountAggregateOutputType = {
    id: number
    ticketId: number
    aiSummary: number
    rawVoiceText: number
    structuredText: number
    quickTags: number
    imageUrls: number
    createdAt: number
    _all: number
  }


  export type TechnicianNoteAvgAggregateInputType = {
    id?: true
    ticketId?: true
  }

  export type TechnicianNoteSumAggregateInputType = {
    id?: true
    ticketId?: true
  }

  export type TechnicianNoteMinAggregateInputType = {
    id?: true
    ticketId?: true
    aiSummary?: true
    rawVoiceText?: true
    structuredText?: true
    createdAt?: true
  }

  export type TechnicianNoteMaxAggregateInputType = {
    id?: true
    ticketId?: true
    aiSummary?: true
    rawVoiceText?: true
    structuredText?: true
    createdAt?: true
  }

  export type TechnicianNoteCountAggregateInputType = {
    id?: true
    ticketId?: true
    aiSummary?: true
    rawVoiceText?: true
    structuredText?: true
    quickTags?: true
    imageUrls?: true
    createdAt?: true
    _all?: true
  }

  export type TechnicianNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which technicianNote to aggregate.
     */
    where?: technicianNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of technicianNotes to fetch.
     */
    orderBy?: technicianNoteOrderByWithRelationInput | technicianNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: technicianNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` technicianNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` technicianNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned technicianNotes
    **/
    _count?: true | TechnicianNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicianNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicianNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianNoteMaxAggregateInputType
  }

  export type GetTechnicianNoteAggregateType<T extends TechnicianNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnicianNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnicianNote[P]>
      : GetScalarType<T[P], AggregateTechnicianNote[P]>
  }




  export type technicianNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: technicianNoteWhereInput
    orderBy?: technicianNoteOrderByWithAggregationInput | technicianNoteOrderByWithAggregationInput[]
    by: TechnicianNoteScalarFieldEnum[] | TechnicianNoteScalarFieldEnum
    having?: technicianNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianNoteCountAggregateInputType | true
    _avg?: TechnicianNoteAvgAggregateInputType
    _sum?: TechnicianNoteSumAggregateInputType
    _min?: TechnicianNoteMinAggregateInputType
    _max?: TechnicianNoteMaxAggregateInputType
  }

  export type TechnicianNoteGroupByOutputType = {
    id: number
    ticketId: number
    aiSummary: string | null
    rawVoiceText: string | null
    structuredText: string
    quickTags: string[]
    imageUrls: string[]
    createdAt: Date
    _count: TechnicianNoteCountAggregateOutputType | null
    _avg: TechnicianNoteAvgAggregateOutputType | null
    _sum: TechnicianNoteSumAggregateOutputType | null
    _min: TechnicianNoteMinAggregateOutputType | null
    _max: TechnicianNoteMaxAggregateOutputType | null
  }

  type GetTechnicianNoteGroupByPayload<T extends technicianNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianNoteGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianNoteGroupByOutputType[P]>
        }
      >
    >


  export type technicianNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    aiSummary?: boolean
    rawVoiceText?: boolean
    structuredText?: boolean
    quickTags?: boolean
    imageUrls?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicianNote"]>

  export type technicianNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    aiSummary?: boolean
    rawVoiceText?: boolean
    structuredText?: boolean
    quickTags?: boolean
    imageUrls?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicianNote"]>

  export type technicianNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    aiSummary?: boolean
    rawVoiceText?: boolean
    structuredText?: boolean
    quickTags?: boolean
    imageUrls?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicianNote"]>

  export type technicianNoteSelectScalar = {
    id?: boolean
    ticketId?: boolean
    aiSummary?: boolean
    rawVoiceText?: boolean
    structuredText?: boolean
    quickTags?: boolean
    imageUrls?: boolean
    createdAt?: boolean
  }

  export type technicianNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "aiSummary" | "rawVoiceText" | "structuredText" | "quickTags" | "imageUrls" | "createdAt", ExtArgs["result"]["technicianNote"]>
  export type technicianNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }
  export type technicianNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }
  export type technicianNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }

  export type $technicianNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "technicianNote"
    objects: {
      ticket: Prisma.$repairTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      aiSummary: string | null
      rawVoiceText: string | null
      structuredText: string
      quickTags: string[]
      imageUrls: string[]
      createdAt: Date
    }, ExtArgs["result"]["technicianNote"]>
    composites: {}
  }

  type technicianNoteGetPayload<S extends boolean | null | undefined | technicianNoteDefaultArgs> = $Result.GetResult<Prisma.$technicianNotePayload, S>

  type technicianNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<technicianNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnicianNoteCountAggregateInputType | true
    }

  export interface technicianNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['technicianNote'], meta: { name: 'technicianNote' } }
    /**
     * Find zero or one TechnicianNote that matches the filter.
     * @param {technicianNoteFindUniqueArgs} args - Arguments to find a TechnicianNote
     * @example
     * // Get one TechnicianNote
     * const technicianNote = await prisma.technicianNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends technicianNoteFindUniqueArgs>(args: SelectSubset<T, technicianNoteFindUniqueArgs<ExtArgs>>): Prisma__technicianNoteClient<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TechnicianNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {technicianNoteFindUniqueOrThrowArgs} args - Arguments to find a TechnicianNote
     * @example
     * // Get one TechnicianNote
     * const technicianNote = await prisma.technicianNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends technicianNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, technicianNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__technicianNoteClient<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechnicianNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianNoteFindFirstArgs} args - Arguments to find a TechnicianNote
     * @example
     * // Get one TechnicianNote
     * const technicianNote = await prisma.technicianNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends technicianNoteFindFirstArgs>(args?: SelectSubset<T, technicianNoteFindFirstArgs<ExtArgs>>): Prisma__technicianNoteClient<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechnicianNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianNoteFindFirstOrThrowArgs} args - Arguments to find a TechnicianNote
     * @example
     * // Get one TechnicianNote
     * const technicianNote = await prisma.technicianNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends technicianNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, technicianNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__technicianNoteClient<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TechnicianNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnicianNotes
     * const technicianNotes = await prisma.technicianNote.findMany()
     * 
     * // Get first 10 TechnicianNotes
     * const technicianNotes = await prisma.technicianNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianNoteWithIdOnly = await prisma.technicianNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends technicianNoteFindManyArgs>(args?: SelectSubset<T, technicianNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TechnicianNote.
     * @param {technicianNoteCreateArgs} args - Arguments to create a TechnicianNote.
     * @example
     * // Create one TechnicianNote
     * const TechnicianNote = await prisma.technicianNote.create({
     *   data: {
     *     // ... data to create a TechnicianNote
     *   }
     * })
     * 
     */
    create<T extends technicianNoteCreateArgs>(args: SelectSubset<T, technicianNoteCreateArgs<ExtArgs>>): Prisma__technicianNoteClient<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TechnicianNotes.
     * @param {technicianNoteCreateManyArgs} args - Arguments to create many TechnicianNotes.
     * @example
     * // Create many TechnicianNotes
     * const technicianNote = await prisma.technicianNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends technicianNoteCreateManyArgs>(args?: SelectSubset<T, technicianNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TechnicianNotes and returns the data saved in the database.
     * @param {technicianNoteCreateManyAndReturnArgs} args - Arguments to create many TechnicianNotes.
     * @example
     * // Create many TechnicianNotes
     * const technicianNote = await prisma.technicianNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TechnicianNotes and only return the `id`
     * const technicianNoteWithIdOnly = await prisma.technicianNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends technicianNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, technicianNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TechnicianNote.
     * @param {technicianNoteDeleteArgs} args - Arguments to delete one TechnicianNote.
     * @example
     * // Delete one TechnicianNote
     * const TechnicianNote = await prisma.technicianNote.delete({
     *   where: {
     *     // ... filter to delete one TechnicianNote
     *   }
     * })
     * 
     */
    delete<T extends technicianNoteDeleteArgs>(args: SelectSubset<T, technicianNoteDeleteArgs<ExtArgs>>): Prisma__technicianNoteClient<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TechnicianNote.
     * @param {technicianNoteUpdateArgs} args - Arguments to update one TechnicianNote.
     * @example
     * // Update one TechnicianNote
     * const technicianNote = await prisma.technicianNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends technicianNoteUpdateArgs>(args: SelectSubset<T, technicianNoteUpdateArgs<ExtArgs>>): Prisma__technicianNoteClient<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TechnicianNotes.
     * @param {technicianNoteDeleteManyArgs} args - Arguments to filter TechnicianNotes to delete.
     * @example
     * // Delete a few TechnicianNotes
     * const { count } = await prisma.technicianNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends technicianNoteDeleteManyArgs>(args?: SelectSubset<T, technicianNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicianNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnicianNotes
     * const technicianNote = await prisma.technicianNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends technicianNoteUpdateManyArgs>(args: SelectSubset<T, technicianNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicianNotes and returns the data updated in the database.
     * @param {technicianNoteUpdateManyAndReturnArgs} args - Arguments to update many TechnicianNotes.
     * @example
     * // Update many TechnicianNotes
     * const technicianNote = await prisma.technicianNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TechnicianNotes and only return the `id`
     * const technicianNoteWithIdOnly = await prisma.technicianNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends technicianNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, technicianNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TechnicianNote.
     * @param {technicianNoteUpsertArgs} args - Arguments to update or create a TechnicianNote.
     * @example
     * // Update or create a TechnicianNote
     * const technicianNote = await prisma.technicianNote.upsert({
     *   create: {
     *     // ... data to create a TechnicianNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnicianNote we want to update
     *   }
     * })
     */
    upsert<T extends technicianNoteUpsertArgs>(args: SelectSubset<T, technicianNoteUpsertArgs<ExtArgs>>): Prisma__technicianNoteClient<$Result.GetResult<Prisma.$technicianNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TechnicianNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianNoteCountArgs} args - Arguments to filter TechnicianNotes to count.
     * @example
     * // Count the number of TechnicianNotes
     * const count = await prisma.technicianNote.count({
     *   where: {
     *     // ... the filter for the TechnicianNotes we want to count
     *   }
     * })
    **/
    count<T extends technicianNoteCountArgs>(
      args?: Subset<T, technicianNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechnicianNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechnicianNoteAggregateArgs>(args: Subset<T, TechnicianNoteAggregateArgs>): Prisma.PrismaPromise<GetTechnicianNoteAggregateType<T>>

    /**
     * Group by TechnicianNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianNoteGroupByArgs} args - Group by arguments.
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
      T extends technicianNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: technicianNoteGroupByArgs['orderBy'] }
        : { orderBy?: technicianNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, technicianNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the technicianNote model
   */
  readonly fields: technicianNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for technicianNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__technicianNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends repairTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, repairTicketDefaultArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the technicianNote model
   */
  interface technicianNoteFieldRefs {
    readonly id: FieldRef<"technicianNote", 'Int'>
    readonly ticketId: FieldRef<"technicianNote", 'Int'>
    readonly aiSummary: FieldRef<"technicianNote", 'String'>
    readonly rawVoiceText: FieldRef<"technicianNote", 'String'>
    readonly structuredText: FieldRef<"technicianNote", 'String'>
    readonly quickTags: FieldRef<"technicianNote", 'String[]'>
    readonly imageUrls: FieldRef<"technicianNote", 'String[]'>
    readonly createdAt: FieldRef<"technicianNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * technicianNote findUnique
   */
  export type technicianNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * Filter, which technicianNote to fetch.
     */
    where: technicianNoteWhereUniqueInput
  }

  /**
   * technicianNote findUniqueOrThrow
   */
  export type technicianNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * Filter, which technicianNote to fetch.
     */
    where: technicianNoteWhereUniqueInput
  }

  /**
   * technicianNote findFirst
   */
  export type technicianNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * Filter, which technicianNote to fetch.
     */
    where?: technicianNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of technicianNotes to fetch.
     */
    orderBy?: technicianNoteOrderByWithRelationInput | technicianNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for technicianNotes.
     */
    cursor?: technicianNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` technicianNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` technicianNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of technicianNotes.
     */
    distinct?: TechnicianNoteScalarFieldEnum | TechnicianNoteScalarFieldEnum[]
  }

  /**
   * technicianNote findFirstOrThrow
   */
  export type technicianNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * Filter, which technicianNote to fetch.
     */
    where?: technicianNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of technicianNotes to fetch.
     */
    orderBy?: technicianNoteOrderByWithRelationInput | technicianNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for technicianNotes.
     */
    cursor?: technicianNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` technicianNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` technicianNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of technicianNotes.
     */
    distinct?: TechnicianNoteScalarFieldEnum | TechnicianNoteScalarFieldEnum[]
  }

  /**
   * technicianNote findMany
   */
  export type technicianNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * Filter, which technicianNotes to fetch.
     */
    where?: technicianNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of technicianNotes to fetch.
     */
    orderBy?: technicianNoteOrderByWithRelationInput | technicianNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing technicianNotes.
     */
    cursor?: technicianNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` technicianNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` technicianNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of technicianNotes.
     */
    distinct?: TechnicianNoteScalarFieldEnum | TechnicianNoteScalarFieldEnum[]
  }

  /**
   * technicianNote create
   */
  export type technicianNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a technicianNote.
     */
    data: XOR<technicianNoteCreateInput, technicianNoteUncheckedCreateInput>
  }

  /**
   * technicianNote createMany
   */
  export type technicianNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many technicianNotes.
     */
    data: technicianNoteCreateManyInput | technicianNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * technicianNote createManyAndReturn
   */
  export type technicianNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * The data used to create many technicianNotes.
     */
    data: technicianNoteCreateManyInput | technicianNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * technicianNote update
   */
  export type technicianNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a technicianNote.
     */
    data: XOR<technicianNoteUpdateInput, technicianNoteUncheckedUpdateInput>
    /**
     * Choose, which technicianNote to update.
     */
    where: technicianNoteWhereUniqueInput
  }

  /**
   * technicianNote updateMany
   */
  export type technicianNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update technicianNotes.
     */
    data: XOR<technicianNoteUpdateManyMutationInput, technicianNoteUncheckedUpdateManyInput>
    /**
     * Filter which technicianNotes to update
     */
    where?: technicianNoteWhereInput
    /**
     * Limit how many technicianNotes to update.
     */
    limit?: number
  }

  /**
   * technicianNote updateManyAndReturn
   */
  export type technicianNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * The data used to update technicianNotes.
     */
    data: XOR<technicianNoteUpdateManyMutationInput, technicianNoteUncheckedUpdateManyInput>
    /**
     * Filter which technicianNotes to update
     */
    where?: technicianNoteWhereInput
    /**
     * Limit how many technicianNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * technicianNote upsert
   */
  export type technicianNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the technicianNote to update in case it exists.
     */
    where: technicianNoteWhereUniqueInput
    /**
     * In case the technicianNote found by the `where` argument doesn't exist, create a new technicianNote with this data.
     */
    create: XOR<technicianNoteCreateInput, technicianNoteUncheckedCreateInput>
    /**
     * In case the technicianNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<technicianNoteUpdateInput, technicianNoteUncheckedUpdateInput>
  }

  /**
   * technicianNote delete
   */
  export type technicianNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
    /**
     * Filter which technicianNote to delete.
     */
    where: technicianNoteWhereUniqueInput
  }

  /**
   * technicianNote deleteMany
   */
  export type technicianNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which technicianNotes to delete
     */
    where?: technicianNoteWhereInput
    /**
     * Limit how many technicianNotes to delete.
     */
    limit?: number
  }

  /**
   * technicianNote without action
   */
  export type technicianNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technicianNote
     */
    select?: technicianNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technicianNote
     */
    omit?: technicianNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianNoteInclude<ExtArgs> | null
  }


  /**
   * Model timelineEvent
   */

  export type AggregateTimelineEvent = {
    _count: TimelineEventCountAggregateOutputType | null
    _avg: TimelineEventAvgAggregateOutputType | null
    _sum: TimelineEventSumAggregateOutputType | null
    _min: TimelineEventMinAggregateOutputType | null
    _max: TimelineEventMaxAggregateOutputType | null
  }

  export type TimelineEventAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
  }

  export type TimelineEventSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
  }

  export type TimelineEventMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TimelineEventMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TimelineEventCountAggregateOutputType = {
    id: number
    ticketId: number
    status: number
    createdAt: number
    _all: number
  }


  export type TimelineEventAvgAggregateInputType = {
    id?: true
    ticketId?: true
  }

  export type TimelineEventSumAggregateInputType = {
    id?: true
    ticketId?: true
  }

  export type TimelineEventMinAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    createdAt?: true
  }

  export type TimelineEventMaxAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    createdAt?: true
  }

  export type TimelineEventCountAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TimelineEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timelineEvent to aggregate.
     */
    where?: timelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelineEvents to fetch.
     */
    orderBy?: timelineEventOrderByWithRelationInput | timelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: timelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timelineEvents
    **/
    _count?: true | TimelineEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimelineEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimelineEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineEventMaxAggregateInputType
  }

  export type GetTimelineEventAggregateType<T extends TimelineEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTimelineEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimelineEvent[P]>
      : GetScalarType<T[P], AggregateTimelineEvent[P]>
  }




  export type timelineEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timelineEventWhereInput
    orderBy?: timelineEventOrderByWithAggregationInput | timelineEventOrderByWithAggregationInput[]
    by: TimelineEventScalarFieldEnum[] | TimelineEventScalarFieldEnum
    having?: timelineEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineEventCountAggregateInputType | true
    _avg?: TimelineEventAvgAggregateInputType
    _sum?: TimelineEventSumAggregateInputType
    _min?: TimelineEventMinAggregateInputType
    _max?: TimelineEventMaxAggregateInputType
  }

  export type TimelineEventGroupByOutputType = {
    id: number
    ticketId: number
    status: string
    createdAt: Date
    _count: TimelineEventCountAggregateOutputType | null
    _avg: TimelineEventAvgAggregateOutputType | null
    _sum: TimelineEventSumAggregateOutputType | null
    _min: TimelineEventMinAggregateOutputType | null
    _max: TimelineEventMaxAggregateOutputType | null
  }

  type GetTimelineEventGroupByPayload<T extends timelineEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineEventGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineEventGroupByOutputType[P]>
        }
      >
    >


  export type timelineEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    status?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEvent"]>

  export type timelineEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    status?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEvent"]>

  export type timelineEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    status?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEvent"]>

  export type timelineEventSelectScalar = {
    id?: boolean
    ticketId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type timelineEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "status" | "createdAt", ExtArgs["result"]["timelineEvent"]>
  export type timelineEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }
  export type timelineEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }
  export type timelineEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
  }

  export type $timelineEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "timelineEvent"
    objects: {
      ticket: Prisma.$repairTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["timelineEvent"]>
    composites: {}
  }

  type timelineEventGetPayload<S extends boolean | null | undefined | timelineEventDefaultArgs> = $Result.GetResult<Prisma.$timelineEventPayload, S>

  type timelineEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<timelineEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimelineEventCountAggregateInputType | true
    }

  export interface timelineEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['timelineEvent'], meta: { name: 'timelineEvent' } }
    /**
     * Find zero or one TimelineEvent that matches the filter.
     * @param {timelineEventFindUniqueArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends timelineEventFindUniqueArgs>(args: SelectSubset<T, timelineEventFindUniqueArgs<ExtArgs>>): Prisma__timelineEventClient<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimelineEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {timelineEventFindUniqueOrThrowArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends timelineEventFindUniqueOrThrowArgs>(args: SelectSubset<T, timelineEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__timelineEventClient<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimelineEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineEventFindFirstArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends timelineEventFindFirstArgs>(args?: SelectSubset<T, timelineEventFindFirstArgs<ExtArgs>>): Prisma__timelineEventClient<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimelineEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineEventFindFirstOrThrowArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends timelineEventFindFirstOrThrowArgs>(args?: SelectSubset<T, timelineEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__timelineEventClient<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimelineEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimelineEvents
     * const timelineEvents = await prisma.timelineEvent.findMany()
     * 
     * // Get first 10 TimelineEvents
     * const timelineEvents = await prisma.timelineEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends timelineEventFindManyArgs>(args?: SelectSubset<T, timelineEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimelineEvent.
     * @param {timelineEventCreateArgs} args - Arguments to create a TimelineEvent.
     * @example
     * // Create one TimelineEvent
     * const TimelineEvent = await prisma.timelineEvent.create({
     *   data: {
     *     // ... data to create a TimelineEvent
     *   }
     * })
     * 
     */
    create<T extends timelineEventCreateArgs>(args: SelectSubset<T, timelineEventCreateArgs<ExtArgs>>): Prisma__timelineEventClient<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimelineEvents.
     * @param {timelineEventCreateManyArgs} args - Arguments to create many TimelineEvents.
     * @example
     * // Create many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends timelineEventCreateManyArgs>(args?: SelectSubset<T, timelineEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimelineEvents and returns the data saved in the database.
     * @param {timelineEventCreateManyAndReturnArgs} args - Arguments to create many TimelineEvents.
     * @example
     * // Create many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimelineEvents and only return the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends timelineEventCreateManyAndReturnArgs>(args?: SelectSubset<T, timelineEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimelineEvent.
     * @param {timelineEventDeleteArgs} args - Arguments to delete one TimelineEvent.
     * @example
     * // Delete one TimelineEvent
     * const TimelineEvent = await prisma.timelineEvent.delete({
     *   where: {
     *     // ... filter to delete one TimelineEvent
     *   }
     * })
     * 
     */
    delete<T extends timelineEventDeleteArgs>(args: SelectSubset<T, timelineEventDeleteArgs<ExtArgs>>): Prisma__timelineEventClient<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimelineEvent.
     * @param {timelineEventUpdateArgs} args - Arguments to update one TimelineEvent.
     * @example
     * // Update one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends timelineEventUpdateArgs>(args: SelectSubset<T, timelineEventUpdateArgs<ExtArgs>>): Prisma__timelineEventClient<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimelineEvents.
     * @param {timelineEventDeleteManyArgs} args - Arguments to filter TimelineEvents to delete.
     * @example
     * // Delete a few TimelineEvents
     * const { count } = await prisma.timelineEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends timelineEventDeleteManyArgs>(args?: SelectSubset<T, timelineEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends timelineEventUpdateManyArgs>(args: SelectSubset<T, timelineEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineEvents and returns the data updated in the database.
     * @param {timelineEventUpdateManyAndReturnArgs} args - Arguments to update many TimelineEvents.
     * @example
     * // Update many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimelineEvents and only return the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends timelineEventUpdateManyAndReturnArgs>(args: SelectSubset<T, timelineEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimelineEvent.
     * @param {timelineEventUpsertArgs} args - Arguments to update or create a TimelineEvent.
     * @example
     * // Update or create a TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.upsert({
     *   create: {
     *     // ... data to create a TimelineEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimelineEvent we want to update
     *   }
     * })
     */
    upsert<T extends timelineEventUpsertArgs>(args: SelectSubset<T, timelineEventUpsertArgs<ExtArgs>>): Prisma__timelineEventClient<$Result.GetResult<Prisma.$timelineEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimelineEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineEventCountArgs} args - Arguments to filter TimelineEvents to count.
     * @example
     * // Count the number of TimelineEvents
     * const count = await prisma.timelineEvent.count({
     *   where: {
     *     // ... the filter for the TimelineEvents we want to count
     *   }
     * })
    **/
    count<T extends timelineEventCountArgs>(
      args?: Subset<T, timelineEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimelineEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineEventAggregateArgs>(args: Subset<T, TimelineEventAggregateArgs>): Prisma.PrismaPromise<GetTimelineEventAggregateType<T>>

    /**
     * Group by TimelineEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelineEventGroupByArgs} args - Group by arguments.
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
      T extends timelineEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: timelineEventGroupByArgs['orderBy'] }
        : { orderBy?: timelineEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, timelineEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the timelineEvent model
   */
  readonly fields: timelineEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for timelineEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__timelineEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends repairTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, repairTicketDefaultArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the timelineEvent model
   */
  interface timelineEventFieldRefs {
    readonly id: FieldRef<"timelineEvent", 'Int'>
    readonly ticketId: FieldRef<"timelineEvent", 'Int'>
    readonly status: FieldRef<"timelineEvent", 'String'>
    readonly createdAt: FieldRef<"timelineEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * timelineEvent findUnique
   */
  export type timelineEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * Filter, which timelineEvent to fetch.
     */
    where: timelineEventWhereUniqueInput
  }

  /**
   * timelineEvent findUniqueOrThrow
   */
  export type timelineEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * Filter, which timelineEvent to fetch.
     */
    where: timelineEventWhereUniqueInput
  }

  /**
   * timelineEvent findFirst
   */
  export type timelineEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * Filter, which timelineEvent to fetch.
     */
    where?: timelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelineEvents to fetch.
     */
    orderBy?: timelineEventOrderByWithRelationInput | timelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timelineEvents.
     */
    cursor?: timelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timelineEvents.
     */
    distinct?: TimelineEventScalarFieldEnum | TimelineEventScalarFieldEnum[]
  }

  /**
   * timelineEvent findFirstOrThrow
   */
  export type timelineEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * Filter, which timelineEvent to fetch.
     */
    where?: timelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelineEvents to fetch.
     */
    orderBy?: timelineEventOrderByWithRelationInput | timelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timelineEvents.
     */
    cursor?: timelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timelineEvents.
     */
    distinct?: TimelineEventScalarFieldEnum | TimelineEventScalarFieldEnum[]
  }

  /**
   * timelineEvent findMany
   */
  export type timelineEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * Filter, which timelineEvents to fetch.
     */
    where?: timelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelineEvents to fetch.
     */
    orderBy?: timelineEventOrderByWithRelationInput | timelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timelineEvents.
     */
    cursor?: timelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timelineEvents.
     */
    distinct?: TimelineEventScalarFieldEnum | TimelineEventScalarFieldEnum[]
  }

  /**
   * timelineEvent create
   */
  export type timelineEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * The data needed to create a timelineEvent.
     */
    data: XOR<timelineEventCreateInput, timelineEventUncheckedCreateInput>
  }

  /**
   * timelineEvent createMany
   */
  export type timelineEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many timelineEvents.
     */
    data: timelineEventCreateManyInput | timelineEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * timelineEvent createManyAndReturn
   */
  export type timelineEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * The data used to create many timelineEvents.
     */
    data: timelineEventCreateManyInput | timelineEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * timelineEvent update
   */
  export type timelineEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * The data needed to update a timelineEvent.
     */
    data: XOR<timelineEventUpdateInput, timelineEventUncheckedUpdateInput>
    /**
     * Choose, which timelineEvent to update.
     */
    where: timelineEventWhereUniqueInput
  }

  /**
   * timelineEvent updateMany
   */
  export type timelineEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update timelineEvents.
     */
    data: XOR<timelineEventUpdateManyMutationInput, timelineEventUncheckedUpdateManyInput>
    /**
     * Filter which timelineEvents to update
     */
    where?: timelineEventWhereInput
    /**
     * Limit how many timelineEvents to update.
     */
    limit?: number
  }

  /**
   * timelineEvent updateManyAndReturn
   */
  export type timelineEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * The data used to update timelineEvents.
     */
    data: XOR<timelineEventUpdateManyMutationInput, timelineEventUncheckedUpdateManyInput>
    /**
     * Filter which timelineEvents to update
     */
    where?: timelineEventWhereInput
    /**
     * Limit how many timelineEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * timelineEvent upsert
   */
  export type timelineEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * The filter to search for the timelineEvent to update in case it exists.
     */
    where: timelineEventWhereUniqueInput
    /**
     * In case the timelineEvent found by the `where` argument doesn't exist, create a new timelineEvent with this data.
     */
    create: XOR<timelineEventCreateInput, timelineEventUncheckedCreateInput>
    /**
     * In case the timelineEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<timelineEventUpdateInput, timelineEventUncheckedUpdateInput>
  }

  /**
   * timelineEvent delete
   */
  export type timelineEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
    /**
     * Filter which timelineEvent to delete.
     */
    where: timelineEventWhereUniqueInput
  }

  /**
   * timelineEvent deleteMany
   */
  export type timelineEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timelineEvents to delete
     */
    where?: timelineEventWhereInput
    /**
     * Limit how many timelineEvents to delete.
     */
    limit?: number
  }

  /**
   * timelineEvent without action
   */
  export type timelineEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelineEvent
     */
    select?: timelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelineEvent
     */
    omit?: timelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timelineEventInclude<ExtArgs> | null
  }


  /**
   * Model usedPart
   */

  export type AggregateUsedPart = {
    _count: UsedPartCountAggregateOutputType | null
    _avg: UsedPartAvgAggregateOutputType | null
    _sum: UsedPartSumAggregateOutputType | null
    _min: UsedPartMinAggregateOutputType | null
    _max: UsedPartMaxAggregateOutputType | null
  }

  export type UsedPartAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    inventoryId: number | null
    quantity: number | null
    lockedCost: number | null
  }

  export type UsedPartSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    inventoryId: number | null
    quantity: number | null
    lockedCost: number | null
  }

  export type UsedPartMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    inventoryId: number | null
    quantity: number | null
    lockedCost: number | null
    createdAt: Date | null
  }

  export type UsedPartMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    inventoryId: number | null
    quantity: number | null
    lockedCost: number | null
    createdAt: Date | null
  }

  export type UsedPartCountAggregateOutputType = {
    id: number
    ticketId: number
    inventoryId: number
    quantity: number
    lockedCost: number
    createdAt: number
    _all: number
  }


  export type UsedPartAvgAggregateInputType = {
    id?: true
    ticketId?: true
    inventoryId?: true
    quantity?: true
    lockedCost?: true
  }

  export type UsedPartSumAggregateInputType = {
    id?: true
    ticketId?: true
    inventoryId?: true
    quantity?: true
    lockedCost?: true
  }

  export type UsedPartMinAggregateInputType = {
    id?: true
    ticketId?: true
    inventoryId?: true
    quantity?: true
    lockedCost?: true
    createdAt?: true
  }

  export type UsedPartMaxAggregateInputType = {
    id?: true
    ticketId?: true
    inventoryId?: true
    quantity?: true
    lockedCost?: true
    createdAt?: true
  }

  export type UsedPartCountAggregateInputType = {
    id?: true
    ticketId?: true
    inventoryId?: true
    quantity?: true
    lockedCost?: true
    createdAt?: true
    _all?: true
  }

  export type UsedPartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usedPart to aggregate.
     */
    where?: usedPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usedParts to fetch.
     */
    orderBy?: usedPartOrderByWithRelationInput | usedPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usedPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usedParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usedParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usedParts
    **/
    _count?: true | UsedPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsedPartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsedPartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsedPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsedPartMaxAggregateInputType
  }

  export type GetUsedPartAggregateType<T extends UsedPartAggregateArgs> = {
        [P in keyof T & keyof AggregateUsedPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsedPart[P]>
      : GetScalarType<T[P], AggregateUsedPart[P]>
  }




  export type usedPartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usedPartWhereInput
    orderBy?: usedPartOrderByWithAggregationInput | usedPartOrderByWithAggregationInput[]
    by: UsedPartScalarFieldEnum[] | UsedPartScalarFieldEnum
    having?: usedPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsedPartCountAggregateInputType | true
    _avg?: UsedPartAvgAggregateInputType
    _sum?: UsedPartSumAggregateInputType
    _min?: UsedPartMinAggregateInputType
    _max?: UsedPartMaxAggregateInputType
  }

  export type UsedPartGroupByOutputType = {
    id: number
    ticketId: number
    inventoryId: number
    quantity: number
    lockedCost: number
    createdAt: Date
    _count: UsedPartCountAggregateOutputType | null
    _avg: UsedPartAvgAggregateOutputType | null
    _sum: UsedPartSumAggregateOutputType | null
    _min: UsedPartMinAggregateOutputType | null
    _max: UsedPartMaxAggregateOutputType | null
  }

  type GetUsedPartGroupByPayload<T extends usedPartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsedPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsedPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsedPartGroupByOutputType[P]>
            : GetScalarType<T[P], UsedPartGroupByOutputType[P]>
        }
      >
    >


  export type usedPartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    inventoryId?: boolean
    quantity?: boolean
    lockedCost?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
    inventoryItem?: boolean | inventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usedPart"]>

  export type usedPartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    inventoryId?: boolean
    quantity?: boolean
    lockedCost?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
    inventoryItem?: boolean | inventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usedPart"]>

  export type usedPartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    inventoryId?: boolean
    quantity?: boolean
    lockedCost?: boolean
    createdAt?: boolean
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
    inventoryItem?: boolean | inventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usedPart"]>

  export type usedPartSelectScalar = {
    id?: boolean
    ticketId?: boolean
    inventoryId?: boolean
    quantity?: boolean
    lockedCost?: boolean
    createdAt?: boolean
  }

  export type usedPartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "inventoryId" | "quantity" | "lockedCost" | "createdAt", ExtArgs["result"]["usedPart"]>
  export type usedPartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
    inventoryItem?: boolean | inventoryDefaultArgs<ExtArgs>
  }
  export type usedPartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
    inventoryItem?: boolean | inventoryDefaultArgs<ExtArgs>
  }
  export type usedPartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | repairTicketDefaultArgs<ExtArgs>
    inventoryItem?: boolean | inventoryDefaultArgs<ExtArgs>
  }

  export type $usedPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usedPart"
    objects: {
      ticket: Prisma.$repairTicketPayload<ExtArgs>
      inventoryItem: Prisma.$inventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      inventoryId: number
      quantity: number
      lockedCost: number
      createdAt: Date
    }, ExtArgs["result"]["usedPart"]>
    composites: {}
  }

  type usedPartGetPayload<S extends boolean | null | undefined | usedPartDefaultArgs> = $Result.GetResult<Prisma.$usedPartPayload, S>

  type usedPartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usedPartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsedPartCountAggregateInputType | true
    }

  export interface usedPartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usedPart'], meta: { name: 'usedPart' } }
    /**
     * Find zero or one UsedPart that matches the filter.
     * @param {usedPartFindUniqueArgs} args - Arguments to find a UsedPart
     * @example
     * // Get one UsedPart
     * const usedPart = await prisma.usedPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usedPartFindUniqueArgs>(args: SelectSubset<T, usedPartFindUniqueArgs<ExtArgs>>): Prisma__usedPartClient<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsedPart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usedPartFindUniqueOrThrowArgs} args - Arguments to find a UsedPart
     * @example
     * // Get one UsedPart
     * const usedPart = await prisma.usedPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usedPartFindUniqueOrThrowArgs>(args: SelectSubset<T, usedPartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usedPartClient<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsedPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usedPartFindFirstArgs} args - Arguments to find a UsedPart
     * @example
     * // Get one UsedPart
     * const usedPart = await prisma.usedPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usedPartFindFirstArgs>(args?: SelectSubset<T, usedPartFindFirstArgs<ExtArgs>>): Prisma__usedPartClient<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsedPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usedPartFindFirstOrThrowArgs} args - Arguments to find a UsedPart
     * @example
     * // Get one UsedPart
     * const usedPart = await prisma.usedPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usedPartFindFirstOrThrowArgs>(args?: SelectSubset<T, usedPartFindFirstOrThrowArgs<ExtArgs>>): Prisma__usedPartClient<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsedParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usedPartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsedParts
     * const usedParts = await prisma.usedPart.findMany()
     * 
     * // Get first 10 UsedParts
     * const usedParts = await prisma.usedPart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usedPartWithIdOnly = await prisma.usedPart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usedPartFindManyArgs>(args?: SelectSubset<T, usedPartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsedPart.
     * @param {usedPartCreateArgs} args - Arguments to create a UsedPart.
     * @example
     * // Create one UsedPart
     * const UsedPart = await prisma.usedPart.create({
     *   data: {
     *     // ... data to create a UsedPart
     *   }
     * })
     * 
     */
    create<T extends usedPartCreateArgs>(args: SelectSubset<T, usedPartCreateArgs<ExtArgs>>): Prisma__usedPartClient<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsedParts.
     * @param {usedPartCreateManyArgs} args - Arguments to create many UsedParts.
     * @example
     * // Create many UsedParts
     * const usedPart = await prisma.usedPart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usedPartCreateManyArgs>(args?: SelectSubset<T, usedPartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsedParts and returns the data saved in the database.
     * @param {usedPartCreateManyAndReturnArgs} args - Arguments to create many UsedParts.
     * @example
     * // Create many UsedParts
     * const usedPart = await prisma.usedPart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsedParts and only return the `id`
     * const usedPartWithIdOnly = await prisma.usedPart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usedPartCreateManyAndReturnArgs>(args?: SelectSubset<T, usedPartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsedPart.
     * @param {usedPartDeleteArgs} args - Arguments to delete one UsedPart.
     * @example
     * // Delete one UsedPart
     * const UsedPart = await prisma.usedPart.delete({
     *   where: {
     *     // ... filter to delete one UsedPart
     *   }
     * })
     * 
     */
    delete<T extends usedPartDeleteArgs>(args: SelectSubset<T, usedPartDeleteArgs<ExtArgs>>): Prisma__usedPartClient<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsedPart.
     * @param {usedPartUpdateArgs} args - Arguments to update one UsedPart.
     * @example
     * // Update one UsedPart
     * const usedPart = await prisma.usedPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usedPartUpdateArgs>(args: SelectSubset<T, usedPartUpdateArgs<ExtArgs>>): Prisma__usedPartClient<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsedParts.
     * @param {usedPartDeleteManyArgs} args - Arguments to filter UsedParts to delete.
     * @example
     * // Delete a few UsedParts
     * const { count } = await prisma.usedPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usedPartDeleteManyArgs>(args?: SelectSubset<T, usedPartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsedParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usedPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsedParts
     * const usedPart = await prisma.usedPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usedPartUpdateManyArgs>(args: SelectSubset<T, usedPartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsedParts and returns the data updated in the database.
     * @param {usedPartUpdateManyAndReturnArgs} args - Arguments to update many UsedParts.
     * @example
     * // Update many UsedParts
     * const usedPart = await prisma.usedPart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsedParts and only return the `id`
     * const usedPartWithIdOnly = await prisma.usedPart.updateManyAndReturn({
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
    updateManyAndReturn<T extends usedPartUpdateManyAndReturnArgs>(args: SelectSubset<T, usedPartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsedPart.
     * @param {usedPartUpsertArgs} args - Arguments to update or create a UsedPart.
     * @example
     * // Update or create a UsedPart
     * const usedPart = await prisma.usedPart.upsert({
     *   create: {
     *     // ... data to create a UsedPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsedPart we want to update
     *   }
     * })
     */
    upsert<T extends usedPartUpsertArgs>(args: SelectSubset<T, usedPartUpsertArgs<ExtArgs>>): Prisma__usedPartClient<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsedParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usedPartCountArgs} args - Arguments to filter UsedParts to count.
     * @example
     * // Count the number of UsedParts
     * const count = await prisma.usedPart.count({
     *   where: {
     *     // ... the filter for the UsedParts we want to count
     *   }
     * })
    **/
    count<T extends usedPartCountArgs>(
      args?: Subset<T, usedPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsedPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsedPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsedPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsedPartAggregateArgs>(args: Subset<T, UsedPartAggregateArgs>): Prisma.PrismaPromise<GetUsedPartAggregateType<T>>

    /**
     * Group by UsedPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usedPartGroupByArgs} args - Group by arguments.
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
      T extends usedPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usedPartGroupByArgs['orderBy'] }
        : { orderBy?: usedPartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usedPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsedPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usedPart model
   */
  readonly fields: usedPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usedPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usedPartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends repairTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, repairTicketDefaultArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventoryItem<T extends inventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, inventoryDefaultArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usedPart model
   */
  interface usedPartFieldRefs {
    readonly id: FieldRef<"usedPart", 'Int'>
    readonly ticketId: FieldRef<"usedPart", 'Int'>
    readonly inventoryId: FieldRef<"usedPart", 'Int'>
    readonly quantity: FieldRef<"usedPart", 'Int'>
    readonly lockedCost: FieldRef<"usedPart", 'Float'>
    readonly createdAt: FieldRef<"usedPart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usedPart findUnique
   */
  export type usedPartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * Filter, which usedPart to fetch.
     */
    where: usedPartWhereUniqueInput
  }

  /**
   * usedPart findUniqueOrThrow
   */
  export type usedPartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * Filter, which usedPart to fetch.
     */
    where: usedPartWhereUniqueInput
  }

  /**
   * usedPart findFirst
   */
  export type usedPartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * Filter, which usedPart to fetch.
     */
    where?: usedPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usedParts to fetch.
     */
    orderBy?: usedPartOrderByWithRelationInput | usedPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usedParts.
     */
    cursor?: usedPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usedParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usedParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usedParts.
     */
    distinct?: UsedPartScalarFieldEnum | UsedPartScalarFieldEnum[]
  }

  /**
   * usedPart findFirstOrThrow
   */
  export type usedPartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * Filter, which usedPart to fetch.
     */
    where?: usedPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usedParts to fetch.
     */
    orderBy?: usedPartOrderByWithRelationInput | usedPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usedParts.
     */
    cursor?: usedPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usedParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usedParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usedParts.
     */
    distinct?: UsedPartScalarFieldEnum | UsedPartScalarFieldEnum[]
  }

  /**
   * usedPart findMany
   */
  export type usedPartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * Filter, which usedParts to fetch.
     */
    where?: usedPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usedParts to fetch.
     */
    orderBy?: usedPartOrderByWithRelationInput | usedPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usedParts.
     */
    cursor?: usedPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usedParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usedParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usedParts.
     */
    distinct?: UsedPartScalarFieldEnum | UsedPartScalarFieldEnum[]
  }

  /**
   * usedPart create
   */
  export type usedPartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * The data needed to create a usedPart.
     */
    data: XOR<usedPartCreateInput, usedPartUncheckedCreateInput>
  }

  /**
   * usedPart createMany
   */
  export type usedPartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usedParts.
     */
    data: usedPartCreateManyInput | usedPartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usedPart createManyAndReturn
   */
  export type usedPartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * The data used to create many usedParts.
     */
    data: usedPartCreateManyInput | usedPartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usedPart update
   */
  export type usedPartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * The data needed to update a usedPart.
     */
    data: XOR<usedPartUpdateInput, usedPartUncheckedUpdateInput>
    /**
     * Choose, which usedPart to update.
     */
    where: usedPartWhereUniqueInput
  }

  /**
   * usedPart updateMany
   */
  export type usedPartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usedParts.
     */
    data: XOR<usedPartUpdateManyMutationInput, usedPartUncheckedUpdateManyInput>
    /**
     * Filter which usedParts to update
     */
    where?: usedPartWhereInput
    /**
     * Limit how many usedParts to update.
     */
    limit?: number
  }

  /**
   * usedPart updateManyAndReturn
   */
  export type usedPartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * The data used to update usedParts.
     */
    data: XOR<usedPartUpdateManyMutationInput, usedPartUncheckedUpdateManyInput>
    /**
     * Filter which usedParts to update
     */
    where?: usedPartWhereInput
    /**
     * Limit how many usedParts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usedPart upsert
   */
  export type usedPartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * The filter to search for the usedPart to update in case it exists.
     */
    where: usedPartWhereUniqueInput
    /**
     * In case the usedPart found by the `where` argument doesn't exist, create a new usedPart with this data.
     */
    create: XOR<usedPartCreateInput, usedPartUncheckedCreateInput>
    /**
     * In case the usedPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usedPartUpdateInput, usedPartUncheckedUpdateInput>
  }

  /**
   * usedPart delete
   */
  export type usedPartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    /**
     * Filter which usedPart to delete.
     */
    where: usedPartWhereUniqueInput
  }

  /**
   * usedPart deleteMany
   */
  export type usedPartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usedParts to delete
     */
    where?: usedPartWhereInput
    /**
     * Limit how many usedParts to delete.
     */
    limit?: number
  }

  /**
   * usedPart without action
   */
  export type usedPartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    stockLevel: number | null
    retailPrice: number | null
    lowStockAlert: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    stockLevel: number | null
    retailPrice: number | null
    lowStockAlert: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    partName: string | null
    sku: string | null
    category: string | null
    stockLevel: number | null
    retailPrice: number | null
    lowStockAlert: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    partName: string | null
    sku: string | null
    category: string | null
    stockLevel: number | null
    retailPrice: number | null
    lowStockAlert: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    partName: number
    sku: number
    category: number
    stockLevel: number
    retailPrice: number
    lowStockAlert: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    stockLevel?: true
    retailPrice?: true
    lowStockAlert?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    stockLevel?: true
    retailPrice?: true
    lowStockAlert?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    partName?: true
    sku?: true
    category?: true
    stockLevel?: true
    retailPrice?: true
    lowStockAlert?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    partName?: true
    sku?: true
    category?: true
    stockLevel?: true
    retailPrice?: true
    lowStockAlert?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    partName?: true
    sku?: true
    category?: true
    stockLevel?: true
    retailPrice?: true
    lowStockAlert?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    partName: string
    sku: string
    category: string
    stockLevel: number
    retailPrice: number
    lowStockAlert: number
    createdAt: Date
    updatedAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partName?: boolean
    sku?: boolean
    category?: boolean
    stockLevel?: boolean
    retailPrice?: boolean
    lowStockAlert?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usageHistory?: boolean | inventory$usageHistoryArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partName?: boolean
    sku?: boolean
    category?: boolean
    stockLevel?: boolean
    retailPrice?: boolean
    lowStockAlert?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partName?: boolean
    sku?: boolean
    category?: boolean
    stockLevel?: boolean
    retailPrice?: boolean
    lowStockAlert?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectScalar = {
    id?: boolean
    partName?: boolean
    sku?: boolean
    category?: boolean
    stockLevel?: boolean
    retailPrice?: boolean
    lowStockAlert?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partName" | "sku" | "category" | "stockLevel" | "retailPrice" | "lowStockAlert" | "createdAt" | "updatedAt", ExtArgs["result"]["inventory"]>
  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usageHistory?: boolean | inventory$usageHistoryArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type inventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type inventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {
      usageHistory: Prisma.$usedPartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      partName: string
      sku: string
      category: string
      stockLevel: number
      retailPrice: number
      lowStockAlert: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {inventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, inventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {inventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
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
    updateManyAndReturn<T extends inventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, inventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
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
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usageHistory<T extends inventory$usageHistoryArgs<ExtArgs> = {}>(args?: Subset<T, inventory$usageHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usedPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<"inventory", 'Int'>
    readonly partName: FieldRef<"inventory", 'String'>
    readonly sku: FieldRef<"inventory", 'String'>
    readonly category: FieldRef<"inventory", 'String'>
    readonly stockLevel: FieldRef<"inventory", 'Int'>
    readonly retailPrice: FieldRef<"inventory", 'Float'>
    readonly lowStockAlert: FieldRef<"inventory", 'Int'>
    readonly createdAt: FieldRef<"inventory", 'DateTime'>
    readonly updatedAt: FieldRef<"inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory createManyAndReturn
   */
  export type inventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory updateManyAndReturn
   */
  export type inventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventory.usageHistory
   */
  export type inventory$usageHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usedPart
     */
    select?: usedPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usedPart
     */
    omit?: usedPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usedPartInclude<ExtArgs> | null
    where?: usedPartWhereInput
    orderBy?: usedPartOrderByWithRelationInput | usedPartOrderByWithRelationInput[]
    cursor?: usedPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsedPartScalarFieldEnum | UsedPartScalarFieldEnum[]
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
  }


  /**
   * Model invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    laborCharge: number | null
    grandTotal: number | null
    ticketId: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    laborCharge: number | null
    grandTotal: number | null
    ticketId: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    invoiceNo: string | null
    customerName: string | null
    customerPhone: string | null
    laborCharge: number | null
    grandTotal: number | null
    paymentStatus: string | null
    paymentMethod: string | null
    saleType: $Enums.SaleType | null
    ticketId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    invoiceNo: string | null
    customerName: string | null
    customerPhone: string | null
    laborCharge: number | null
    grandTotal: number | null
    paymentStatus: string | null
    paymentMethod: string | null
    saleType: $Enums.SaleType | null
    ticketId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNo: number
    customerName: number
    customerPhone: number
    items: number
    laborCharge: number
    grandTotal: number
    paymentStatus: number
    paymentMethod: number
    saleType: number
    ticketId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    laborCharge?: true
    grandTotal?: true
    ticketId?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    laborCharge?: true
    grandTotal?: true
    ticketId?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNo?: true
    customerName?: true
    customerPhone?: true
    laborCharge?: true
    grandTotal?: true
    paymentStatus?: true
    paymentMethod?: true
    saleType?: true
    ticketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNo?: true
    customerName?: true
    customerPhone?: true
    laborCharge?: true
    grandTotal?: true
    paymentStatus?: true
    paymentMethod?: true
    saleType?: true
    ticketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNo?: true
    customerName?: true
    customerPhone?: true
    items?: true
    laborCharge?: true
    grandTotal?: true
    paymentStatus?: true
    paymentMethod?: true
    saleType?: true
    ticketId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice to aggregate.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type invoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput
    orderBy?: invoiceOrderByWithAggregationInput | invoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: invoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    invoiceNo: string
    customerName: string
    customerPhone: string
    items: JsonValue
    laborCharge: number
    grandTotal: number
    paymentStatus: string
    paymentMethod: string
    saleType: $Enums.SaleType
    ticketId: number | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends invoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type invoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    customerName?: boolean
    customerPhone?: boolean
    items?: boolean
    laborCharge?: boolean
    grandTotal?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    saleType?: boolean
    ticketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | invoice$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type invoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    customerName?: boolean
    customerPhone?: boolean
    items?: boolean
    laborCharge?: boolean
    grandTotal?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    saleType?: boolean
    ticketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | invoice$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type invoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    customerName?: boolean
    customerPhone?: boolean
    items?: boolean
    laborCharge?: boolean
    grandTotal?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    saleType?: boolean
    ticketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | invoice$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type invoiceSelectScalar = {
    id?: boolean
    invoiceNo?: boolean
    customerName?: boolean
    customerPhone?: boolean
    items?: boolean
    laborCharge?: boolean
    grandTotal?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    saleType?: boolean
    ticketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type invoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNo" | "customerName" | "customerPhone" | "items" | "laborCharge" | "grandTotal" | "paymentStatus" | "paymentMethod" | "saleType" | "ticketId" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type invoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | invoice$ticketArgs<ExtArgs>
  }
  export type invoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | invoice$ticketArgs<ExtArgs>
  }
  export type invoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | invoice$ticketArgs<ExtArgs>
  }

  export type $invoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice"
    objects: {
      ticket: Prisma.$repairTicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invoiceNo: string
      customerName: string
      customerPhone: string
      items: Prisma.JsonValue
      laborCharge: number
      grandTotal: number
      paymentStatus: string
      paymentMethod: string
      saleType: $Enums.SaleType
      ticketId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type invoiceGetPayload<S extends boolean | null | undefined | invoiceDefaultArgs> = $Result.GetResult<Prisma.$invoicePayload, S>

  type invoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface invoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice'], meta: { name: 'invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {invoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoiceFindUniqueArgs>(args: SelectSubset<T, invoiceFindUniqueArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, invoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoiceFindFirstArgs>(args?: SelectSubset<T, invoiceFindFirstArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, invoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoiceFindManyArgs>(args?: SelectSubset<T, invoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {invoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends invoiceCreateArgs>(args: SelectSubset<T, invoiceCreateArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoiceCreateManyArgs>(args?: SelectSubset<T, invoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, invoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {invoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends invoiceDeleteArgs>(args: SelectSubset<T, invoiceDeleteArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {invoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoiceUpdateArgs>(args: SelectSubset<T, invoiceUpdateArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoiceDeleteManyArgs>(args?: SelectSubset<T, invoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoiceUpdateManyArgs>(args: SelectSubset<T, invoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {invoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends invoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, invoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {invoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends invoiceUpsertArgs>(args: SelectSubset<T, invoiceUpsertArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoiceCountArgs>(
      args?: Subset<T, invoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceGroupByArgs} args - Group by arguments.
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
      T extends invoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoiceGroupByArgs['orderBy'] }
        : { orderBy?: invoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice model
   */
  readonly fields: invoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends invoice$ticketArgs<ExtArgs> = {}>(args?: Subset<T, invoice$ticketArgs<ExtArgs>>): Prisma__repairTicketClient<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the invoice model
   */
  interface invoiceFieldRefs {
    readonly id: FieldRef<"invoice", 'Int'>
    readonly invoiceNo: FieldRef<"invoice", 'String'>
    readonly customerName: FieldRef<"invoice", 'String'>
    readonly customerPhone: FieldRef<"invoice", 'String'>
    readonly items: FieldRef<"invoice", 'Json'>
    readonly laborCharge: FieldRef<"invoice", 'Float'>
    readonly grandTotal: FieldRef<"invoice", 'Float'>
    readonly paymentStatus: FieldRef<"invoice", 'String'>
    readonly paymentMethod: FieldRef<"invoice", 'String'>
    readonly saleType: FieldRef<"invoice", 'SaleType'>
    readonly ticketId: FieldRef<"invoice", 'Int'>
    readonly createdAt: FieldRef<"invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invoice findUnique
   */
  export type invoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice findUniqueOrThrow
   */
  export type invoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice findFirst
   */
  export type invoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice findFirstOrThrow
   */
  export type invoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice findMany
   */
  export type invoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice create
   */
  export type invoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice.
     */
    data: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>
  }

  /**
   * invoice createMany
   */
  export type invoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice createManyAndReturn
   */
  export type invoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice update
   */
  export type invoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice.
     */
    data: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>
    /**
     * Choose, which invoice to update.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice updateMany
   */
  export type invoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoiceWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoice updateManyAndReturn
   */
  export type invoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * The data used to update invoices.
     */
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoiceWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice upsert
   */
  export type invoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice to update in case it exists.
     */
    where: invoiceWhereUniqueInput
    /**
     * In case the invoice found by the `where` argument doesn't exist, create a new invoice with this data.
     */
    create: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>
    /**
     * In case the invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>
  }

  /**
   * invoice delete
   */
  export type invoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter which invoice to delete.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice deleteMany
   */
  export type invoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoiceWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoice.ticket
   */
  export type invoice$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    where?: repairTicketWhereInput
  }

  /**
   * invoice without action
   */
  export type invoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice
     */
    omit?: invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
  }


  /**
   * Model technician
   */

  export type AggregateTechnician = {
    _count: TechnicianCountAggregateOutputType | null
    _avg: TechnicianAvgAggregateOutputType | null
    _sum: TechnicianSumAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  export type TechnicianAvgAggregateOutputType = {
    experienceYears: number | null
  }

  export type TechnicianSumAggregateOutputType = {
    experienceYears: number | null
  }

  export type TechnicianMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    employeeId: string | null
    specialization: $Enums.TechnicianSpecialization | null
    status: $Enums.TechnicianStatus | null
    experienceYears: number | null
    address: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechnicianMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    employeeId: string | null
    specialization: $Enums.TechnicianSpecialization | null
    status: $Enums.TechnicianStatus | null
    experienceYears: number | null
    address: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechnicianCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    employeeId: number
    specialization: number
    status: number
    experienceYears: number
    address: number
    profileImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TechnicianAvgAggregateInputType = {
    experienceYears?: true
  }

  export type TechnicianSumAggregateInputType = {
    experienceYears?: true
  }

  export type TechnicianMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    employeeId?: true
    specialization?: true
    status?: true
    experienceYears?: true
    address?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechnicianMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    employeeId?: true
    specialization?: true
    status?: true
    experienceYears?: true
    address?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechnicianCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    employeeId?: true
    specialization?: true
    status?: true
    experienceYears?: true
    address?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TechnicianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which technician to aggregate.
     */
    where?: technicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of technicians to fetch.
     */
    orderBy?: technicianOrderByWithRelationInput | technicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: technicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned technicians
    **/
    _count?: true | TechnicianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianMaxAggregateInputType
  }

  export type GetTechnicianAggregateType<T extends TechnicianAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnician]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnician[P]>
      : GetScalarType<T[P], AggregateTechnician[P]>
  }




  export type technicianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: technicianWhereInput
    orderBy?: technicianOrderByWithAggregationInput | technicianOrderByWithAggregationInput[]
    by: TechnicianScalarFieldEnum[] | TechnicianScalarFieldEnum
    having?: technicianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianCountAggregateInputType | true
    _avg?: TechnicianAvgAggregateInputType
    _sum?: TechnicianSumAggregateInputType
    _min?: TechnicianMinAggregateInputType
    _max?: TechnicianMaxAggregateInputType
  }

  export type TechnicianGroupByOutputType = {
    id: string
    fullName: string
    email: string
    phone: string
    employeeId: string
    specialization: $Enums.TechnicianSpecialization
    status: $Enums.TechnicianStatus
    experienceYears: number
    address: string | null
    profileImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: TechnicianCountAggregateOutputType | null
    _avg: TechnicianAvgAggregateOutputType | null
    _sum: TechnicianSumAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  type GetTechnicianGroupByPayload<T extends technicianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
        }
      >
    >


  export type technicianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    employeeId?: boolean
    specialization?: boolean
    status?: boolean
    experienceYears?: boolean
    address?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickets?: boolean | technician$ticketsArgs<ExtArgs>
    _count?: boolean | TechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technician"]>

  export type technicianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    employeeId?: boolean
    specialization?: boolean
    status?: boolean
    experienceYears?: boolean
    address?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["technician"]>

  export type technicianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    employeeId?: boolean
    specialization?: boolean
    status?: boolean
    experienceYears?: boolean
    address?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["technician"]>

  export type technicianSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    employeeId?: boolean
    specialization?: boolean
    status?: boolean
    experienceYears?: boolean
    address?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type technicianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "employeeId" | "specialization" | "status" | "experienceYears" | "address" | "profileImage" | "createdAt" | "updatedAt", ExtArgs["result"]["technician"]>
  export type technicianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | technician$ticketsArgs<ExtArgs>
    _count?: boolean | TechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type technicianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type technicianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $technicianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "technician"
    objects: {
      tickets: Prisma.$repairTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phone: string
      employeeId: string
      specialization: $Enums.TechnicianSpecialization
      status: $Enums.TechnicianStatus
      experienceYears: number
      address: string | null
      profileImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["technician"]>
    composites: {}
  }

  type technicianGetPayload<S extends boolean | null | undefined | technicianDefaultArgs> = $Result.GetResult<Prisma.$technicianPayload, S>

  type technicianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<technicianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnicianCountAggregateInputType | true
    }

  export interface technicianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['technician'], meta: { name: 'technician' } }
    /**
     * Find zero or one Technician that matches the filter.
     * @param {technicianFindUniqueArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends technicianFindUniqueArgs>(args: SelectSubset<T, technicianFindUniqueArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Technician that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {technicianFindUniqueOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends technicianFindUniqueOrThrowArgs>(args: SelectSubset<T, technicianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technician that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianFindFirstArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends technicianFindFirstArgs>(args?: SelectSubset<T, technicianFindFirstArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technician that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianFindFirstOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends technicianFindFirstOrThrowArgs>(args?: SelectSubset<T, technicianFindFirstOrThrowArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Technicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technicians
     * const technicians = await prisma.technician.findMany()
     * 
     * // Get first 10 Technicians
     * const technicians = await prisma.technician.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianWithIdOnly = await prisma.technician.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends technicianFindManyArgs>(args?: SelectSubset<T, technicianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Technician.
     * @param {technicianCreateArgs} args - Arguments to create a Technician.
     * @example
     * // Create one Technician
     * const Technician = await prisma.technician.create({
     *   data: {
     *     // ... data to create a Technician
     *   }
     * })
     * 
     */
    create<T extends technicianCreateArgs>(args: SelectSubset<T, technicianCreateArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Technicians.
     * @param {technicianCreateManyArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends technicianCreateManyArgs>(args?: SelectSubset<T, technicianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Technicians and returns the data saved in the database.
     * @param {technicianCreateManyAndReturnArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Technicians and only return the `id`
     * const technicianWithIdOnly = await prisma.technician.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends technicianCreateManyAndReturnArgs>(args?: SelectSubset<T, technicianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Technician.
     * @param {technicianDeleteArgs} args - Arguments to delete one Technician.
     * @example
     * // Delete one Technician
     * const Technician = await prisma.technician.delete({
     *   where: {
     *     // ... filter to delete one Technician
     *   }
     * })
     * 
     */
    delete<T extends technicianDeleteArgs>(args: SelectSubset<T, technicianDeleteArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Technician.
     * @param {technicianUpdateArgs} args - Arguments to update one Technician.
     * @example
     * // Update one Technician
     * const technician = await prisma.technician.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends technicianUpdateArgs>(args: SelectSubset<T, technicianUpdateArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Technicians.
     * @param {technicianDeleteManyArgs} args - Arguments to filter Technicians to delete.
     * @example
     * // Delete a few Technicians
     * const { count } = await prisma.technician.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends technicianDeleteManyArgs>(args?: SelectSubset<T, technicianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends technicianUpdateManyArgs>(args: SelectSubset<T, technicianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians and returns the data updated in the database.
     * @param {technicianUpdateManyAndReturnArgs} args - Arguments to update many Technicians.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Technicians and only return the `id`
     * const technicianWithIdOnly = await prisma.technician.updateManyAndReturn({
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
    updateManyAndReturn<T extends technicianUpdateManyAndReturnArgs>(args: SelectSubset<T, technicianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Technician.
     * @param {technicianUpsertArgs} args - Arguments to update or create a Technician.
     * @example
     * // Update or create a Technician
     * const technician = await prisma.technician.upsert({
     *   create: {
     *     // ... data to create a Technician
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technician we want to update
     *   }
     * })
     */
    upsert<T extends technicianUpsertArgs>(args: SelectSubset<T, technicianUpsertArgs<ExtArgs>>): Prisma__technicianClient<$Result.GetResult<Prisma.$technicianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianCountArgs} args - Arguments to filter Technicians to count.
     * @example
     * // Count the number of Technicians
     * const count = await prisma.technician.count({
     *   where: {
     *     // ... the filter for the Technicians we want to count
     *   }
     * })
    **/
    count<T extends technicianCountArgs>(
      args?: Subset<T, technicianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechnicianAggregateArgs>(args: Subset<T, TechnicianAggregateArgs>): Prisma.PrismaPromise<GetTechnicianAggregateType<T>>

    /**
     * Group by Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technicianGroupByArgs} args - Group by arguments.
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
      T extends technicianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: technicianGroupByArgs['orderBy'] }
        : { orderBy?: technicianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, technicianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the technician model
   */
  readonly fields: technicianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for technician.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__technicianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends technician$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, technician$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the technician model
   */
  interface technicianFieldRefs {
    readonly id: FieldRef<"technician", 'String'>
    readonly fullName: FieldRef<"technician", 'String'>
    readonly email: FieldRef<"technician", 'String'>
    readonly phone: FieldRef<"technician", 'String'>
    readonly employeeId: FieldRef<"technician", 'String'>
    readonly specialization: FieldRef<"technician", 'TechnicianSpecialization'>
    readonly status: FieldRef<"technician", 'TechnicianStatus'>
    readonly experienceYears: FieldRef<"technician", 'Int'>
    readonly address: FieldRef<"technician", 'String'>
    readonly profileImage: FieldRef<"technician", 'String'>
    readonly createdAt: FieldRef<"technician", 'DateTime'>
    readonly updatedAt: FieldRef<"technician", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * technician findUnique
   */
  export type technicianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * Filter, which technician to fetch.
     */
    where: technicianWhereUniqueInput
  }

  /**
   * technician findUniqueOrThrow
   */
  export type technicianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * Filter, which technician to fetch.
     */
    where: technicianWhereUniqueInput
  }

  /**
   * technician findFirst
   */
  export type technicianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * Filter, which technician to fetch.
     */
    where?: technicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of technicians to fetch.
     */
    orderBy?: technicianOrderByWithRelationInput | technicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for technicians.
     */
    cursor?: technicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * technician findFirstOrThrow
   */
  export type technicianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * Filter, which technician to fetch.
     */
    where?: technicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of technicians to fetch.
     */
    orderBy?: technicianOrderByWithRelationInput | technicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for technicians.
     */
    cursor?: technicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * technician findMany
   */
  export type technicianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * Filter, which technicians to fetch.
     */
    where?: technicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of technicians to fetch.
     */
    orderBy?: technicianOrderByWithRelationInput | technicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing technicians.
     */
    cursor?: technicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * technician create
   */
  export type technicianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * The data needed to create a technician.
     */
    data: XOR<technicianCreateInput, technicianUncheckedCreateInput>
  }

  /**
   * technician createMany
   */
  export type technicianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many technicians.
     */
    data: technicianCreateManyInput | technicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * technician createManyAndReturn
   */
  export type technicianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * The data used to create many technicians.
     */
    data: technicianCreateManyInput | technicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * technician update
   */
  export type technicianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * The data needed to update a technician.
     */
    data: XOR<technicianUpdateInput, technicianUncheckedUpdateInput>
    /**
     * Choose, which technician to update.
     */
    where: technicianWhereUniqueInput
  }

  /**
   * technician updateMany
   */
  export type technicianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update technicians.
     */
    data: XOR<technicianUpdateManyMutationInput, technicianUncheckedUpdateManyInput>
    /**
     * Filter which technicians to update
     */
    where?: technicianWhereInput
    /**
     * Limit how many technicians to update.
     */
    limit?: number
  }

  /**
   * technician updateManyAndReturn
   */
  export type technicianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * The data used to update technicians.
     */
    data: XOR<technicianUpdateManyMutationInput, technicianUncheckedUpdateManyInput>
    /**
     * Filter which technicians to update
     */
    where?: technicianWhereInput
    /**
     * Limit how many technicians to update.
     */
    limit?: number
  }

  /**
   * technician upsert
   */
  export type technicianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * The filter to search for the technician to update in case it exists.
     */
    where: technicianWhereUniqueInput
    /**
     * In case the technician found by the `where` argument doesn't exist, create a new technician with this data.
     */
    create: XOR<technicianCreateInput, technicianUncheckedCreateInput>
    /**
     * In case the technician was found with the provided `where` argument, update it with this data.
     */
    update: XOR<technicianUpdateInput, technicianUncheckedUpdateInput>
  }

  /**
   * technician delete
   */
  export type technicianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
    /**
     * Filter which technician to delete.
     */
    where: technicianWhereUniqueInput
  }

  /**
   * technician deleteMany
   */
  export type technicianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which technicians to delete
     */
    where?: technicianWhereInput
    /**
     * Limit how many technicians to delete.
     */
    limit?: number
  }

  /**
   * technician.tickets
   */
  export type technician$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    where?: repairTicketWhereInput
    orderBy?: repairTicketOrderByWithRelationInput | repairTicketOrderByWithRelationInput[]
    cursor?: repairTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairTicketScalarFieldEnum | RepairTicketScalarFieldEnum[]
  }

  /**
   * technician without action
   */
  export type technicianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technician
     */
    select?: technicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the technician
     */
    omit?: technicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: technicianInclude<ExtArgs> | null
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
    batterySoh: number | null
    batteryCycles: number | null
    lastServiceDaysAgo: number | null
    modelYear: number | null
    healthScore: number | null
  }

  export type VehicleSumAggregateOutputType = {
    id: number | null
    batterySoh: number | null
    batteryCycles: number | null
    lastServiceDaysAgo: number | null
    modelYear: number | null
    healthScore: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: number | null
    vin: string | null
    vehicleModel: string | null
    batteryPackSerial: string | null
    batteryCapacity: string | null
    batterySoh: number | null
    batteryCycles: number | null
    batteryTemp: string | null
    odometer: string | null
    lastServiceDaysAgo: number | null
    manufacturer: string | null
    modelYear: number | null
    healthScore: number | null
    lastAiCheck: Date | null
    customerId: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: number | null
    vin: string | null
    vehicleModel: string | null
    batteryPackSerial: string | null
    batteryCapacity: string | null
    batterySoh: number | null
    batteryCycles: number | null
    batteryTemp: string | null
    odometer: string | null
    lastServiceDaysAgo: number | null
    manufacturer: string | null
    modelYear: number | null
    healthScore: number | null
    lastAiCheck: Date | null
    customerId: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    vin: number
    vehicleModel: number
    batteryPackSerial: number
    batteryCapacity: number
    batterySoh: number
    batteryCycles: number
    batteryTemp: number
    odometer: number
    lastServiceDaysAgo: number
    manufacturer: number
    modelYear: number
    healthScore: number
    lastAiCheck: number
    customerId: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    id?: true
    batterySoh?: true
    batteryCycles?: true
    lastServiceDaysAgo?: true
    modelYear?: true
    healthScore?: true
  }

  export type VehicleSumAggregateInputType = {
    id?: true
    batterySoh?: true
    batteryCycles?: true
    lastServiceDaysAgo?: true
    modelYear?: true
    healthScore?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    vin?: true
    vehicleModel?: true
    batteryPackSerial?: true
    batteryCapacity?: true
    batterySoh?: true
    batteryCycles?: true
    batteryTemp?: true
    odometer?: true
    lastServiceDaysAgo?: true
    manufacturer?: true
    modelYear?: true
    healthScore?: true
    lastAiCheck?: true
    customerId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    vin?: true
    vehicleModel?: true
    batteryPackSerial?: true
    batteryCapacity?: true
    batterySoh?: true
    batteryCycles?: true
    batteryTemp?: true
    odometer?: true
    lastServiceDaysAgo?: true
    manufacturer?: true
    modelYear?: true
    healthScore?: true
    lastAiCheck?: true
    customerId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    vin?: true
    vehicleModel?: true
    batteryPackSerial?: true
    batteryCapacity?: true
    batterySoh?: true
    batteryCycles?: true
    batteryTemp?: true
    odometer?: true
    lastServiceDaysAgo?: true
    manufacturer?: true
    modelYear?: true
    healthScore?: true
    lastAiCheck?: true
    customerId?: true
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
    vin: string
    vehicleModel: string
    batteryPackSerial: string | null
    batteryCapacity: string | null
    batterySoh: number | null
    batteryCycles: number | null
    batteryTemp: string | null
    odometer: string | null
    lastServiceDaysAgo: number | null
    manufacturer: string | null
    modelYear: number | null
    healthScore: number | null
    lastAiCheck: Date | null
    customerId: string
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
    vin?: boolean
    vehicleModel?: boolean
    batteryPackSerial?: boolean
    batteryCapacity?: boolean
    batterySoh?: boolean
    batteryCycles?: boolean
    batteryTemp?: boolean
    odometer?: boolean
    lastServiceDaysAgo?: boolean
    manufacturer?: boolean
    modelYear?: boolean
    healthScore?: boolean
    lastAiCheck?: boolean
    customerId?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    tickets?: boolean | Vehicle$ticketsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    vehicleModel?: boolean
    batteryPackSerial?: boolean
    batteryCapacity?: boolean
    batterySoh?: boolean
    batteryCycles?: boolean
    batteryTemp?: boolean
    odometer?: boolean
    lastServiceDaysAgo?: boolean
    manufacturer?: boolean
    modelYear?: boolean
    healthScore?: boolean
    lastAiCheck?: boolean
    customerId?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    vehicleModel?: boolean
    batteryPackSerial?: boolean
    batteryCapacity?: boolean
    batterySoh?: boolean
    batteryCycles?: boolean
    batteryTemp?: boolean
    odometer?: boolean
    lastServiceDaysAgo?: boolean
    manufacturer?: boolean
    modelYear?: boolean
    healthScore?: boolean
    lastAiCheck?: boolean
    customerId?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    vin?: boolean
    vehicleModel?: boolean
    batteryPackSerial?: boolean
    batteryCapacity?: boolean
    batterySoh?: boolean
    batteryCycles?: boolean
    batteryTemp?: boolean
    odometer?: boolean
    lastServiceDaysAgo?: boolean
    manufacturer?: boolean
    modelYear?: boolean
    healthScore?: boolean
    lastAiCheck?: boolean
    customerId?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vin" | "vehicleModel" | "batteryPackSerial" | "batteryCapacity" | "batterySoh" | "batteryCycles" | "batteryTemp" | "odometer" | "lastServiceDaysAgo" | "manufacturer" | "modelYear" | "healthScore" | "lastAiCheck" | "customerId", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    tickets?: boolean | Vehicle$ticketsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>
      tickets: Prisma.$repairTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vin: string
      vehicleModel: string
      batteryPackSerial: string | null
      batteryCapacity: string | null
      batterySoh: number | null
      batteryCycles: number | null
      batteryTemp: string | null
      odometer: string | null
      lastServiceDaysAgo: number | null
      manufacturer: string | null
      modelYear: number | null
      healthScore: number | null
      lastAiCheck: Date | null
      customerId: string
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
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Vehicle$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repairTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly vin: FieldRef<"Vehicle", 'String'>
    readonly vehicleModel: FieldRef<"Vehicle", 'String'>
    readonly batteryPackSerial: FieldRef<"Vehicle", 'String'>
    readonly batteryCapacity: FieldRef<"Vehicle", 'String'>
    readonly batterySoh: FieldRef<"Vehicle", 'Int'>
    readonly batteryCycles: FieldRef<"Vehicle", 'Int'>
    readonly batteryTemp: FieldRef<"Vehicle", 'String'>
    readonly odometer: FieldRef<"Vehicle", 'String'>
    readonly lastServiceDaysAgo: FieldRef<"Vehicle", 'Int'>
    readonly manufacturer: FieldRef<"Vehicle", 'String'>
    readonly modelYear: FieldRef<"Vehicle", 'Int'>
    readonly healthScore: FieldRef<"Vehicle", 'Int'>
    readonly lastAiCheck: FieldRef<"Vehicle", 'DateTime'>
    readonly customerId: FieldRef<"Vehicle", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Vehicle.tickets
   */
  export type Vehicle$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairTicket
     */
    select?: repairTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repairTicket
     */
    omit?: repairTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repairTicketInclude<ExtArgs> | null
    where?: repairTicketWhereInput
    orderBy?: repairTicketOrderByWithRelationInput | repairTicketOrderByWithRelationInput[]
    cursor?: repairTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairTicketScalarFieldEnum | RepairTicketScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const RepairTicketScalarFieldEnum: {
    id: 'id',
    issueCategory: 'issueCategory',
    description: 'description',
    status: 'status',
    bay: 'bay',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    closedAt: 'closedAt',
    estimatedCost: 'estimatedCost',
    finalCost: 'finalCost',
    aiSummary: 'aiSummary',
    manufacturer: 'manufacturer',
    customerId: 'customerId',
    technicianId: 'technicianId',
    vehicleId: 'vehicleId'
  };

  export type RepairTicketScalarFieldEnum = (typeof RepairTicketScalarFieldEnum)[keyof typeof RepairTicketScalarFieldEnum]


  export const TechnicianNoteScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    aiSummary: 'aiSummary',
    rawVoiceText: 'rawVoiceText',
    structuredText: 'structuredText',
    quickTags: 'quickTags',
    imageUrls: 'imageUrls',
    createdAt: 'createdAt'
  };

  export type TechnicianNoteScalarFieldEnum = (typeof TechnicianNoteScalarFieldEnum)[keyof typeof TechnicianNoteScalarFieldEnum]


  export const TimelineEventScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TimelineEventScalarFieldEnum = (typeof TimelineEventScalarFieldEnum)[keyof typeof TimelineEventScalarFieldEnum]


  export const UsedPartScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    inventoryId: 'inventoryId',
    quantity: 'quantity',
    lockedCost: 'lockedCost',
    createdAt: 'createdAt'
  };

  export type UsedPartScalarFieldEnum = (typeof UsedPartScalarFieldEnum)[keyof typeof UsedPartScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    partName: 'partName',
    sku: 'sku',
    category: 'category',
    stockLevel: 'stockLevel',
    retailPrice: 'retailPrice',
    lowStockAlert: 'lowStockAlert',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNo: 'invoiceNo',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    items: 'items',
    laborCharge: 'laborCharge',
    grandTotal: 'grandTotal',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    saleType: 'saleType',
    ticketId: 'ticketId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const TechnicianScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    employeeId: 'employeeId',
    specialization: 'specialization',
    status: 'status',
    experienceYears: 'experienceYears',
    address: 'address',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TechnicianScalarFieldEnum = (typeof TechnicianScalarFieldEnum)[keyof typeof TechnicianScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    vin: 'vin',
    vehicleModel: 'vehicleModel',
    batteryPackSerial: 'batteryPackSerial',
    batteryCapacity: 'batteryCapacity',
    batterySoh: 'batterySoh',
    batteryCycles: 'batteryCycles',
    batteryTemp: 'batteryTemp',
    odometer: 'odometer',
    lastServiceDaysAgo: 'lastServiceDaysAgo',
    manufacturer: 'manufacturer',
    modelYear: 'modelYear',
    healthScore: 'healthScore',
    lastAiCheck: 'lastAiCheck',
    customerId: 'customerId'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SaleType'
   */
  export type EnumSaleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SaleType'>
    


  /**
   * Reference to a field of type 'SaleType[]'
   */
  export type ListEnumSaleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SaleType[]'>
    


  /**
   * Reference to a field of type 'TechnicianSpecialization'
   */
  export type EnumTechnicianSpecializationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicianSpecialization'>
    


  /**
   * Reference to a field of type 'TechnicianSpecialization[]'
   */
  export type ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicianSpecialization[]'>
    


  /**
   * Reference to a field of type 'TechnicianStatus'
   */
  export type EnumTechnicianStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicianStatus'>
    


  /**
   * Reference to a field of type 'TechnicianStatus[]'
   */
  export type ListEnumTechnicianStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicianStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    id?: StringFilter<"customer"> | string
    name?: StringFilter<"customer"> | string
    email?: StringNullableFilter<"customer"> | string | null
    phone?: StringFilter<"customer"> | string
    address?: StringNullableFilter<"customer"> | string | null
    createdAt?: DateTimeFilter<"customer"> | Date | string
    tickets?: RepairTicketListRelationFilter
    vehicles?: VehicleListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tickets?: repairTicketOrderByRelationAggregateInput
    vehicles?: VehicleOrderByRelationAggregateInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    name?: StringFilter<"customer"> | string
    email?: StringNullableFilter<"customer"> | string | null
    address?: StringNullableFilter<"customer"> | string | null
    createdAt?: DateTimeFilter<"customer"> | Date | string
    tickets?: RepairTicketListRelationFilter
    vehicles?: VehicleListRelationFilter
  }, "id" | "phone">

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: customerCountOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"customer"> | string
    name?: StringWithAggregatesFilter<"customer"> | string
    email?: StringNullableWithAggregatesFilter<"customer"> | string | null
    phone?: StringWithAggregatesFilter<"customer"> | string
    address?: StringNullableWithAggregatesFilter<"customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"customer"> | Date | string
  }

  export type repairTicketWhereInput = {
    AND?: repairTicketWhereInput | repairTicketWhereInput[]
    OR?: repairTicketWhereInput[]
    NOT?: repairTicketWhereInput | repairTicketWhereInput[]
    id?: IntFilter<"repairTicket"> | number
    issueCategory?: StringFilter<"repairTicket"> | string
    description?: StringFilter<"repairTicket"> | string
    status?: EnumTicketStatusFilter<"repairTicket"> | $Enums.TicketStatus
    bay?: StringNullableFilter<"repairTicket"> | string | null
    priority?: EnumTicketPriorityFilter<"repairTicket"> | $Enums.TicketPriority
    createdAt?: DateTimeFilter<"repairTicket"> | Date | string
    updatedAt?: DateTimeFilter<"repairTicket"> | Date | string
    closedAt?: DateTimeNullableFilter<"repairTicket"> | Date | string | null
    estimatedCost?: FloatNullableFilter<"repairTicket"> | number | null
    finalCost?: FloatNullableFilter<"repairTicket"> | number | null
    aiSummary?: StringNullableFilter<"repairTicket"> | string | null
    manufacturer?: StringNullableFilter<"repairTicket"> | string | null
    customerId?: StringFilter<"repairTicket"> | string
    technicianId?: StringNullableFilter<"repairTicket"> | string | null
    vehicleId?: IntNullableFilter<"repairTicket"> | number | null
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    technician?: XOR<TechnicianNullableScalarRelationFilter, technicianWhereInput> | null
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    notes?: TechnicianNoteListRelationFilter
    timeline?: TimelineEventListRelationFilter
    parts?: UsedPartListRelationFilter
    invoice?: XOR<InvoiceNullableScalarRelationFilter, invoiceWhereInput> | null
  }

  export type repairTicketOrderByWithRelationInput = {
    id?: SortOrder
    issueCategory?: SortOrder
    description?: SortOrder
    status?: SortOrder
    bay?: SortOrderInput | SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    finalCost?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    customerId?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    customer?: customerOrderByWithRelationInput
    technician?: technicianOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    notes?: technicianNoteOrderByRelationAggregateInput
    timeline?: timelineEventOrderByRelationAggregateInput
    parts?: usedPartOrderByRelationAggregateInput
    invoice?: invoiceOrderByWithRelationInput
  }

  export type repairTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: repairTicketWhereInput | repairTicketWhereInput[]
    OR?: repairTicketWhereInput[]
    NOT?: repairTicketWhereInput | repairTicketWhereInput[]
    issueCategory?: StringFilter<"repairTicket"> | string
    description?: StringFilter<"repairTicket"> | string
    status?: EnumTicketStatusFilter<"repairTicket"> | $Enums.TicketStatus
    bay?: StringNullableFilter<"repairTicket"> | string | null
    priority?: EnumTicketPriorityFilter<"repairTicket"> | $Enums.TicketPriority
    createdAt?: DateTimeFilter<"repairTicket"> | Date | string
    updatedAt?: DateTimeFilter<"repairTicket"> | Date | string
    closedAt?: DateTimeNullableFilter<"repairTicket"> | Date | string | null
    estimatedCost?: FloatNullableFilter<"repairTicket"> | number | null
    finalCost?: FloatNullableFilter<"repairTicket"> | number | null
    aiSummary?: StringNullableFilter<"repairTicket"> | string | null
    manufacturer?: StringNullableFilter<"repairTicket"> | string | null
    customerId?: StringFilter<"repairTicket"> | string
    technicianId?: StringNullableFilter<"repairTicket"> | string | null
    vehicleId?: IntNullableFilter<"repairTicket"> | number | null
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    technician?: XOR<TechnicianNullableScalarRelationFilter, technicianWhereInput> | null
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    notes?: TechnicianNoteListRelationFilter
    timeline?: TimelineEventListRelationFilter
    parts?: UsedPartListRelationFilter
    invoice?: XOR<InvoiceNullableScalarRelationFilter, invoiceWhereInput> | null
  }, "id">

  export type repairTicketOrderByWithAggregationInput = {
    id?: SortOrder
    issueCategory?: SortOrder
    description?: SortOrder
    status?: SortOrder
    bay?: SortOrderInput | SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    finalCost?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    customerId?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    _count?: repairTicketCountOrderByAggregateInput
    _avg?: repairTicketAvgOrderByAggregateInput
    _max?: repairTicketMaxOrderByAggregateInput
    _min?: repairTicketMinOrderByAggregateInput
    _sum?: repairTicketSumOrderByAggregateInput
  }

  export type repairTicketScalarWhereWithAggregatesInput = {
    AND?: repairTicketScalarWhereWithAggregatesInput | repairTicketScalarWhereWithAggregatesInput[]
    OR?: repairTicketScalarWhereWithAggregatesInput[]
    NOT?: repairTicketScalarWhereWithAggregatesInput | repairTicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"repairTicket"> | number
    issueCategory?: StringWithAggregatesFilter<"repairTicket"> | string
    description?: StringWithAggregatesFilter<"repairTicket"> | string
    status?: EnumTicketStatusWithAggregatesFilter<"repairTicket"> | $Enums.TicketStatus
    bay?: StringNullableWithAggregatesFilter<"repairTicket"> | string | null
    priority?: EnumTicketPriorityWithAggregatesFilter<"repairTicket"> | $Enums.TicketPriority
    createdAt?: DateTimeWithAggregatesFilter<"repairTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"repairTicket"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"repairTicket"> | Date | string | null
    estimatedCost?: FloatNullableWithAggregatesFilter<"repairTicket"> | number | null
    finalCost?: FloatNullableWithAggregatesFilter<"repairTicket"> | number | null
    aiSummary?: StringNullableWithAggregatesFilter<"repairTicket"> | string | null
    manufacturer?: StringNullableWithAggregatesFilter<"repairTicket"> | string | null
    customerId?: StringWithAggregatesFilter<"repairTicket"> | string
    technicianId?: StringNullableWithAggregatesFilter<"repairTicket"> | string | null
    vehicleId?: IntNullableWithAggregatesFilter<"repairTicket"> | number | null
  }

  export type technicianNoteWhereInput = {
    AND?: technicianNoteWhereInput | technicianNoteWhereInput[]
    OR?: technicianNoteWhereInput[]
    NOT?: technicianNoteWhereInput | technicianNoteWhereInput[]
    id?: IntFilter<"technicianNote"> | number
    ticketId?: IntFilter<"technicianNote"> | number
    aiSummary?: StringNullableFilter<"technicianNote"> | string | null
    rawVoiceText?: StringNullableFilter<"technicianNote"> | string | null
    structuredText?: StringFilter<"technicianNote"> | string
    quickTags?: StringNullableListFilter<"technicianNote">
    imageUrls?: StringNullableListFilter<"technicianNote">
    createdAt?: DateTimeFilter<"technicianNote"> | Date | string
    ticket?: XOR<RepairTicketScalarRelationFilter, repairTicketWhereInput>
  }

  export type technicianNoteOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    aiSummary?: SortOrderInput | SortOrder
    rawVoiceText?: SortOrderInput | SortOrder
    structuredText?: SortOrder
    quickTags?: SortOrder
    imageUrls?: SortOrder
    createdAt?: SortOrder
    ticket?: repairTicketOrderByWithRelationInput
  }

  export type technicianNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: technicianNoteWhereInput | technicianNoteWhereInput[]
    OR?: technicianNoteWhereInput[]
    NOT?: technicianNoteWhereInput | technicianNoteWhereInput[]
    ticketId?: IntFilter<"technicianNote"> | number
    aiSummary?: StringNullableFilter<"technicianNote"> | string | null
    rawVoiceText?: StringNullableFilter<"technicianNote"> | string | null
    structuredText?: StringFilter<"technicianNote"> | string
    quickTags?: StringNullableListFilter<"technicianNote">
    imageUrls?: StringNullableListFilter<"technicianNote">
    createdAt?: DateTimeFilter<"technicianNote"> | Date | string
    ticket?: XOR<RepairTicketScalarRelationFilter, repairTicketWhereInput>
  }, "id">

  export type technicianNoteOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    aiSummary?: SortOrderInput | SortOrder
    rawVoiceText?: SortOrderInput | SortOrder
    structuredText?: SortOrder
    quickTags?: SortOrder
    imageUrls?: SortOrder
    createdAt?: SortOrder
    _count?: technicianNoteCountOrderByAggregateInput
    _avg?: technicianNoteAvgOrderByAggregateInput
    _max?: technicianNoteMaxOrderByAggregateInput
    _min?: technicianNoteMinOrderByAggregateInput
    _sum?: technicianNoteSumOrderByAggregateInput
  }

  export type technicianNoteScalarWhereWithAggregatesInput = {
    AND?: technicianNoteScalarWhereWithAggregatesInput | technicianNoteScalarWhereWithAggregatesInput[]
    OR?: technicianNoteScalarWhereWithAggregatesInput[]
    NOT?: technicianNoteScalarWhereWithAggregatesInput | technicianNoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"technicianNote"> | number
    ticketId?: IntWithAggregatesFilter<"technicianNote"> | number
    aiSummary?: StringNullableWithAggregatesFilter<"technicianNote"> | string | null
    rawVoiceText?: StringNullableWithAggregatesFilter<"technicianNote"> | string | null
    structuredText?: StringWithAggregatesFilter<"technicianNote"> | string
    quickTags?: StringNullableListFilter<"technicianNote">
    imageUrls?: StringNullableListFilter<"technicianNote">
    createdAt?: DateTimeWithAggregatesFilter<"technicianNote"> | Date | string
  }

  export type timelineEventWhereInput = {
    AND?: timelineEventWhereInput | timelineEventWhereInput[]
    OR?: timelineEventWhereInput[]
    NOT?: timelineEventWhereInput | timelineEventWhereInput[]
    id?: IntFilter<"timelineEvent"> | number
    ticketId?: IntFilter<"timelineEvent"> | number
    status?: StringFilter<"timelineEvent"> | string
    createdAt?: DateTimeFilter<"timelineEvent"> | Date | string
    ticket?: XOR<RepairTicketScalarRelationFilter, repairTicketWhereInput>
  }

  export type timelineEventOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    ticket?: repairTicketOrderByWithRelationInput
  }

  export type timelineEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: timelineEventWhereInput | timelineEventWhereInput[]
    OR?: timelineEventWhereInput[]
    NOT?: timelineEventWhereInput | timelineEventWhereInput[]
    ticketId?: IntFilter<"timelineEvent"> | number
    status?: StringFilter<"timelineEvent"> | string
    createdAt?: DateTimeFilter<"timelineEvent"> | Date | string
    ticket?: XOR<RepairTicketScalarRelationFilter, repairTicketWhereInput>
  }, "id">

  export type timelineEventOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: timelineEventCountOrderByAggregateInput
    _avg?: timelineEventAvgOrderByAggregateInput
    _max?: timelineEventMaxOrderByAggregateInput
    _min?: timelineEventMinOrderByAggregateInput
    _sum?: timelineEventSumOrderByAggregateInput
  }

  export type timelineEventScalarWhereWithAggregatesInput = {
    AND?: timelineEventScalarWhereWithAggregatesInput | timelineEventScalarWhereWithAggregatesInput[]
    OR?: timelineEventScalarWhereWithAggregatesInput[]
    NOT?: timelineEventScalarWhereWithAggregatesInput | timelineEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"timelineEvent"> | number
    ticketId?: IntWithAggregatesFilter<"timelineEvent"> | number
    status?: StringWithAggregatesFilter<"timelineEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"timelineEvent"> | Date | string
  }

  export type usedPartWhereInput = {
    AND?: usedPartWhereInput | usedPartWhereInput[]
    OR?: usedPartWhereInput[]
    NOT?: usedPartWhereInput | usedPartWhereInput[]
    id?: IntFilter<"usedPart"> | number
    ticketId?: IntFilter<"usedPart"> | number
    inventoryId?: IntFilter<"usedPart"> | number
    quantity?: IntFilter<"usedPart"> | number
    lockedCost?: FloatFilter<"usedPart"> | number
    createdAt?: DateTimeFilter<"usedPart"> | Date | string
    ticket?: XOR<RepairTicketScalarRelationFilter, repairTicketWhereInput>
    inventoryItem?: XOR<InventoryScalarRelationFilter, inventoryWhereInput>
  }

  export type usedPartOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    lockedCost?: SortOrder
    createdAt?: SortOrder
    ticket?: repairTicketOrderByWithRelationInput
    inventoryItem?: inventoryOrderByWithRelationInput
  }

  export type usedPartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usedPartWhereInput | usedPartWhereInput[]
    OR?: usedPartWhereInput[]
    NOT?: usedPartWhereInput | usedPartWhereInput[]
    ticketId?: IntFilter<"usedPart"> | number
    inventoryId?: IntFilter<"usedPart"> | number
    quantity?: IntFilter<"usedPart"> | number
    lockedCost?: FloatFilter<"usedPart"> | number
    createdAt?: DateTimeFilter<"usedPart"> | Date | string
    ticket?: XOR<RepairTicketScalarRelationFilter, repairTicketWhereInput>
    inventoryItem?: XOR<InventoryScalarRelationFilter, inventoryWhereInput>
  }, "id">

  export type usedPartOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    lockedCost?: SortOrder
    createdAt?: SortOrder
    _count?: usedPartCountOrderByAggregateInput
    _avg?: usedPartAvgOrderByAggregateInput
    _max?: usedPartMaxOrderByAggregateInput
    _min?: usedPartMinOrderByAggregateInput
    _sum?: usedPartSumOrderByAggregateInput
  }

  export type usedPartScalarWhereWithAggregatesInput = {
    AND?: usedPartScalarWhereWithAggregatesInput | usedPartScalarWhereWithAggregatesInput[]
    OR?: usedPartScalarWhereWithAggregatesInput[]
    NOT?: usedPartScalarWhereWithAggregatesInput | usedPartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usedPart"> | number
    ticketId?: IntWithAggregatesFilter<"usedPart"> | number
    inventoryId?: IntWithAggregatesFilter<"usedPart"> | number
    quantity?: IntWithAggregatesFilter<"usedPart"> | number
    lockedCost?: FloatWithAggregatesFilter<"usedPart"> | number
    createdAt?: DateTimeWithAggregatesFilter<"usedPart"> | Date | string
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    id?: IntFilter<"inventory"> | number
    partName?: StringFilter<"inventory"> | string
    sku?: StringFilter<"inventory"> | string
    category?: StringFilter<"inventory"> | string
    stockLevel?: IntFilter<"inventory"> | number
    retailPrice?: FloatFilter<"inventory"> | number
    lowStockAlert?: IntFilter<"inventory"> | number
    createdAt?: DateTimeFilter<"inventory"> | Date | string
    updatedAt?: DateTimeFilter<"inventory"> | Date | string
    usageHistory?: UsedPartListRelationFilter
  }

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder
    partName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    stockLevel?: SortOrder
    retailPrice?: SortOrder
    lowStockAlert?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usageHistory?: usedPartOrderByRelationAggregateInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    partName?: StringFilter<"inventory"> | string
    category?: StringFilter<"inventory"> | string
    stockLevel?: IntFilter<"inventory"> | number
    retailPrice?: FloatFilter<"inventory"> | number
    lowStockAlert?: IntFilter<"inventory"> | number
    createdAt?: DateTimeFilter<"inventory"> | Date | string
    updatedAt?: DateTimeFilter<"inventory"> | Date | string
    usageHistory?: UsedPartListRelationFilter
  }, "id" | "sku">

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder
    partName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    stockLevel?: SortOrder
    retailPrice?: SortOrder
    lowStockAlert?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventory"> | number
    partName?: StringWithAggregatesFilter<"inventory"> | string
    sku?: StringWithAggregatesFilter<"inventory"> | string
    category?: StringWithAggregatesFilter<"inventory"> | string
    stockLevel?: IntWithAggregatesFilter<"inventory"> | number
    retailPrice?: FloatWithAggregatesFilter<"inventory"> | number
    lowStockAlert?: IntWithAggregatesFilter<"inventory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"inventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"inventory"> | Date | string
  }

  export type invoiceWhereInput = {
    AND?: invoiceWhereInput | invoiceWhereInput[]
    OR?: invoiceWhereInput[]
    NOT?: invoiceWhereInput | invoiceWhereInput[]
    id?: IntFilter<"invoice"> | number
    invoiceNo?: StringFilter<"invoice"> | string
    customerName?: StringFilter<"invoice"> | string
    customerPhone?: StringFilter<"invoice"> | string
    items?: JsonFilter<"invoice">
    laborCharge?: FloatFilter<"invoice"> | number
    grandTotal?: FloatFilter<"invoice"> | number
    paymentStatus?: StringFilter<"invoice"> | string
    paymentMethod?: StringFilter<"invoice"> | string
    saleType?: EnumSaleTypeFilter<"invoice"> | $Enums.SaleType
    ticketId?: IntNullableFilter<"invoice"> | number | null
    createdAt?: DateTimeFilter<"invoice"> | Date | string
    updatedAt?: DateTimeFilter<"invoice"> | Date | string
    ticket?: XOR<RepairTicketNullableScalarRelationFilter, repairTicketWhereInput> | null
  }

  export type invoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    items?: SortOrder
    laborCharge?: SortOrder
    grandTotal?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    saleType?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket?: repairTicketOrderByWithRelationInput
  }

  export type invoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoiceNo?: string
    ticketId?: number
    AND?: invoiceWhereInput | invoiceWhereInput[]
    OR?: invoiceWhereInput[]
    NOT?: invoiceWhereInput | invoiceWhereInput[]
    customerName?: StringFilter<"invoice"> | string
    customerPhone?: StringFilter<"invoice"> | string
    items?: JsonFilter<"invoice">
    laborCharge?: FloatFilter<"invoice"> | number
    grandTotal?: FloatFilter<"invoice"> | number
    paymentStatus?: StringFilter<"invoice"> | string
    paymentMethod?: StringFilter<"invoice"> | string
    saleType?: EnumSaleTypeFilter<"invoice"> | $Enums.SaleType
    createdAt?: DateTimeFilter<"invoice"> | Date | string
    updatedAt?: DateTimeFilter<"invoice"> | Date | string
    ticket?: XOR<RepairTicketNullableScalarRelationFilter, repairTicketWhereInput> | null
  }, "id" | "invoiceNo" | "ticketId">

  export type invoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    items?: SortOrder
    laborCharge?: SortOrder
    grandTotal?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    saleType?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: invoiceCountOrderByAggregateInput
    _avg?: invoiceAvgOrderByAggregateInput
    _max?: invoiceMaxOrderByAggregateInput
    _min?: invoiceMinOrderByAggregateInput
    _sum?: invoiceSumOrderByAggregateInput
  }

  export type invoiceScalarWhereWithAggregatesInput = {
    AND?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[]
    OR?: invoiceScalarWhereWithAggregatesInput[]
    NOT?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoice"> | number
    invoiceNo?: StringWithAggregatesFilter<"invoice"> | string
    customerName?: StringWithAggregatesFilter<"invoice"> | string
    customerPhone?: StringWithAggregatesFilter<"invoice"> | string
    items?: JsonWithAggregatesFilter<"invoice">
    laborCharge?: FloatWithAggregatesFilter<"invoice"> | number
    grandTotal?: FloatWithAggregatesFilter<"invoice"> | number
    paymentStatus?: StringWithAggregatesFilter<"invoice"> | string
    paymentMethod?: StringWithAggregatesFilter<"invoice"> | string
    saleType?: EnumSaleTypeWithAggregatesFilter<"invoice"> | $Enums.SaleType
    ticketId?: IntNullableWithAggregatesFilter<"invoice"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"invoice"> | Date | string
  }

  export type technicianWhereInput = {
    AND?: technicianWhereInput | technicianWhereInput[]
    OR?: technicianWhereInput[]
    NOT?: technicianWhereInput | technicianWhereInput[]
    id?: StringFilter<"technician"> | string
    fullName?: StringFilter<"technician"> | string
    email?: StringFilter<"technician"> | string
    phone?: StringFilter<"technician"> | string
    employeeId?: StringFilter<"technician"> | string
    specialization?: EnumTechnicianSpecializationFilter<"technician"> | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusFilter<"technician"> | $Enums.TechnicianStatus
    experienceYears?: IntFilter<"technician"> | number
    address?: StringNullableFilter<"technician"> | string | null
    profileImage?: StringNullableFilter<"technician"> | string | null
    createdAt?: DateTimeFilter<"technician"> | Date | string
    updatedAt?: DateTimeFilter<"technician"> | Date | string
    tickets?: RepairTicketListRelationFilter
  }

  export type technicianOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    specialization?: SortOrder
    status?: SortOrder
    experienceYears?: SortOrder
    address?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickets?: repairTicketOrderByRelationAggregateInput
  }

  export type technicianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    employeeId?: string
    AND?: technicianWhereInput | technicianWhereInput[]
    OR?: technicianWhereInput[]
    NOT?: technicianWhereInput | technicianWhereInput[]
    fullName?: StringFilter<"technician"> | string
    phone?: StringFilter<"technician"> | string
    specialization?: EnumTechnicianSpecializationFilter<"technician"> | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusFilter<"technician"> | $Enums.TechnicianStatus
    experienceYears?: IntFilter<"technician"> | number
    address?: StringNullableFilter<"technician"> | string | null
    profileImage?: StringNullableFilter<"technician"> | string | null
    createdAt?: DateTimeFilter<"technician"> | Date | string
    updatedAt?: DateTimeFilter<"technician"> | Date | string
    tickets?: RepairTicketListRelationFilter
  }, "id" | "email" | "employeeId">

  export type technicianOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    specialization?: SortOrder
    status?: SortOrder
    experienceYears?: SortOrder
    address?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: technicianCountOrderByAggregateInput
    _avg?: technicianAvgOrderByAggregateInput
    _max?: technicianMaxOrderByAggregateInput
    _min?: technicianMinOrderByAggregateInput
    _sum?: technicianSumOrderByAggregateInput
  }

  export type technicianScalarWhereWithAggregatesInput = {
    AND?: technicianScalarWhereWithAggregatesInput | technicianScalarWhereWithAggregatesInput[]
    OR?: technicianScalarWhereWithAggregatesInput[]
    NOT?: technicianScalarWhereWithAggregatesInput | technicianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"technician"> | string
    fullName?: StringWithAggregatesFilter<"technician"> | string
    email?: StringWithAggregatesFilter<"technician"> | string
    phone?: StringWithAggregatesFilter<"technician"> | string
    employeeId?: StringWithAggregatesFilter<"technician"> | string
    specialization?: EnumTechnicianSpecializationWithAggregatesFilter<"technician"> | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusWithAggregatesFilter<"technician"> | $Enums.TechnicianStatus
    experienceYears?: IntWithAggregatesFilter<"technician"> | number
    address?: StringNullableWithAggregatesFilter<"technician"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"technician"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"technician"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"technician"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    vin?: StringFilter<"Vehicle"> | string
    vehicleModel?: StringFilter<"Vehicle"> | string
    batteryPackSerial?: StringNullableFilter<"Vehicle"> | string | null
    batteryCapacity?: StringNullableFilter<"Vehicle"> | string | null
    batterySoh?: IntNullableFilter<"Vehicle"> | number | null
    batteryCycles?: IntNullableFilter<"Vehicle"> | number | null
    batteryTemp?: StringNullableFilter<"Vehicle"> | string | null
    odometer?: StringNullableFilter<"Vehicle"> | string | null
    lastServiceDaysAgo?: IntNullableFilter<"Vehicle"> | number | null
    manufacturer?: StringNullableFilter<"Vehicle"> | string | null
    modelYear?: IntNullableFilter<"Vehicle"> | number | null
    healthScore?: IntNullableFilter<"Vehicle"> | number | null
    lastAiCheck?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    customerId?: StringFilter<"Vehicle"> | string
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    tickets?: RepairTicketListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    vin?: SortOrder
    vehicleModel?: SortOrder
    batteryPackSerial?: SortOrderInput | SortOrder
    batteryCapacity?: SortOrderInput | SortOrder
    batterySoh?: SortOrderInput | SortOrder
    batteryCycles?: SortOrderInput | SortOrder
    batteryTemp?: SortOrderInput | SortOrder
    odometer?: SortOrderInput | SortOrder
    lastServiceDaysAgo?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    modelYear?: SortOrderInput | SortOrder
    healthScore?: SortOrderInput | SortOrder
    lastAiCheck?: SortOrderInput | SortOrder
    customerId?: SortOrder
    customer?: customerOrderByWithRelationInput
    tickets?: repairTicketOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vin?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicleModel?: StringFilter<"Vehicle"> | string
    batteryPackSerial?: StringNullableFilter<"Vehicle"> | string | null
    batteryCapacity?: StringNullableFilter<"Vehicle"> | string | null
    batterySoh?: IntNullableFilter<"Vehicle"> | number | null
    batteryCycles?: IntNullableFilter<"Vehicle"> | number | null
    batteryTemp?: StringNullableFilter<"Vehicle"> | string | null
    odometer?: StringNullableFilter<"Vehicle"> | string | null
    lastServiceDaysAgo?: IntNullableFilter<"Vehicle"> | number | null
    manufacturer?: StringNullableFilter<"Vehicle"> | string | null
    modelYear?: IntNullableFilter<"Vehicle"> | number | null
    healthScore?: IntNullableFilter<"Vehicle"> | number | null
    lastAiCheck?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    customerId?: StringFilter<"Vehicle"> | string
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    tickets?: RepairTicketListRelationFilter
  }, "id" | "vin">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    vin?: SortOrder
    vehicleModel?: SortOrder
    batteryPackSerial?: SortOrderInput | SortOrder
    batteryCapacity?: SortOrderInput | SortOrder
    batterySoh?: SortOrderInput | SortOrder
    batteryCycles?: SortOrderInput | SortOrder
    batteryTemp?: SortOrderInput | SortOrder
    odometer?: SortOrderInput | SortOrder
    lastServiceDaysAgo?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    modelYear?: SortOrderInput | SortOrder
    healthScore?: SortOrderInput | SortOrder
    lastAiCheck?: SortOrderInput | SortOrder
    customerId?: SortOrder
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
    vin?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleModel?: StringWithAggregatesFilter<"Vehicle"> | string
    batteryPackSerial?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    batteryCapacity?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    batterySoh?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    batteryCycles?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    batteryTemp?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    odometer?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    lastServiceDaysAgo?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    manufacturer?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    modelYear?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    healthScore?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    lastAiCheck?: DateTimeNullableWithAggregatesFilter<"Vehicle"> | Date | string | null
    customerId?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address?: string | null
    createdAt?: Date | string
    tickets?: repairTicketCreateNestedManyWithoutCustomerInput
    vehicles?: VehicleCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address?: string | null
    createdAt?: Date | string
    tickets?: repairTicketUncheckedCreateNestedManyWithoutCustomerInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: repairTicketUpdateManyWithoutCustomerNestedInput
    vehicles?: VehicleUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: repairTicketUncheckedUpdateManyWithoutCustomerNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address?: string | null
    createdAt?: Date | string
  }

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type repairTicketCreateInput = {
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customer: customerCreateNestedOneWithoutTicketsInput
    technician?: technicianCreateNestedOneWithoutTicketsInput
    vehicle?: VehicleCreateNestedOneWithoutTicketsInput
    notes?: technicianNoteCreateNestedManyWithoutTicketInput
    timeline?: timelineEventCreateNestedManyWithoutTicketInput
    parts?: usedPartCreateNestedManyWithoutTicketInput
    invoice?: invoiceCreateNestedOneWithoutTicketInput
  }

  export type repairTicketUncheckedCreateInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    technicianId?: string | null
    vehicleId?: number | null
    notes?: technicianNoteUncheckedCreateNestedManyWithoutTicketInput
    timeline?: timelineEventUncheckedCreateNestedManyWithoutTicketInput
    parts?: usedPartUncheckedCreateNestedManyWithoutTicketInput
    invoice?: invoiceUncheckedCreateNestedOneWithoutTicketInput
  }

  export type repairTicketUpdateInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: customerUpdateOneRequiredWithoutTicketsNestedInput
    technician?: technicianUpdateOneWithoutTicketsNestedInput
    vehicle?: VehicleUpdateOneWithoutTicketsNestedInput
    notes?: technicianNoteUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUpdateManyWithoutTicketNestedInput
    parts?: usedPartUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: technicianNoteUncheckedUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUncheckedUpdateManyWithoutTicketNestedInput
    parts?: usedPartUncheckedUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketCreateManyInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    technicianId?: string | null
    vehicleId?: number | null
  }

  export type repairTicketUpdateManyMutationInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type repairTicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type technicianNoteCreateInput = {
    aiSummary?: string | null
    rawVoiceText?: string | null
    structuredText: string
    quickTags?: technicianNoteCreatequickTagsInput | string[]
    imageUrls?: technicianNoteCreateimageUrlsInput | string[]
    createdAt?: Date | string
    ticket: repairTicketCreateNestedOneWithoutNotesInput
  }

  export type technicianNoteUncheckedCreateInput = {
    id?: number
    ticketId: number
    aiSummary?: string | null
    rawVoiceText?: string | null
    structuredText: string
    quickTags?: technicianNoteCreatequickTagsInput | string[]
    imageUrls?: technicianNoteCreateimageUrlsInput | string[]
    createdAt?: Date | string
  }

  export type technicianNoteUpdateInput = {
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    rawVoiceText?: NullableStringFieldUpdateOperationsInput | string | null
    structuredText?: StringFieldUpdateOperationsInput | string
    quickTags?: technicianNoteUpdatequickTagsInput | string[]
    imageUrls?: technicianNoteUpdateimageUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: repairTicketUpdateOneRequiredWithoutNotesNestedInput
  }

  export type technicianNoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    rawVoiceText?: NullableStringFieldUpdateOperationsInput | string | null
    structuredText?: StringFieldUpdateOperationsInput | string
    quickTags?: technicianNoteUpdatequickTagsInput | string[]
    imageUrls?: technicianNoteUpdateimageUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type technicianNoteCreateManyInput = {
    id?: number
    ticketId: number
    aiSummary?: string | null
    rawVoiceText?: string | null
    structuredText: string
    quickTags?: technicianNoteCreatequickTagsInput | string[]
    imageUrls?: technicianNoteCreateimageUrlsInput | string[]
    createdAt?: Date | string
  }

  export type technicianNoteUpdateManyMutationInput = {
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    rawVoiceText?: NullableStringFieldUpdateOperationsInput | string | null
    structuredText?: StringFieldUpdateOperationsInput | string
    quickTags?: technicianNoteUpdatequickTagsInput | string[]
    imageUrls?: technicianNoteUpdateimageUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type technicianNoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    rawVoiceText?: NullableStringFieldUpdateOperationsInput | string | null
    structuredText?: StringFieldUpdateOperationsInput | string
    quickTags?: technicianNoteUpdatequickTagsInput | string[]
    imageUrls?: technicianNoteUpdateimageUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelineEventCreateInput = {
    status: string
    createdAt?: Date | string
    ticket: repairTicketCreateNestedOneWithoutTimelineInput
  }

  export type timelineEventUncheckedCreateInput = {
    id?: number
    ticketId: number
    status: string
    createdAt?: Date | string
  }

  export type timelineEventUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: repairTicketUpdateOneRequiredWithoutTimelineNestedInput
  }

  export type timelineEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelineEventCreateManyInput = {
    id?: number
    ticketId: number
    status: string
    createdAt?: Date | string
  }

  export type timelineEventUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelineEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usedPartCreateInput = {
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
    ticket: repairTicketCreateNestedOneWithoutPartsInput
    inventoryItem: inventoryCreateNestedOneWithoutUsageHistoryInput
  }

  export type usedPartUncheckedCreateInput = {
    id?: number
    ticketId: number
    inventoryId: number
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
  }

  export type usedPartUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: repairTicketUpdateOneRequiredWithoutPartsNestedInput
    inventoryItem?: inventoryUpdateOneRequiredWithoutUsageHistoryNestedInput
  }

  export type usedPartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usedPartCreateManyInput = {
    id?: number
    ticketId: number
    inventoryId: number
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
  }

  export type usedPartUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usedPartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryCreateInput = {
    partName: string
    sku: string
    category: string
    stockLevel?: number
    retailPrice: number
    lowStockAlert?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usageHistory?: usedPartCreateNestedManyWithoutInventoryItemInput
  }

  export type inventoryUncheckedCreateInput = {
    id?: number
    partName: string
    sku: string
    category: string
    stockLevel?: number
    retailPrice: number
    lowStockAlert?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usageHistory?: usedPartUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type inventoryUpdateInput = {
    partName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    stockLevel?: IntFieldUpdateOperationsInput | number
    retailPrice?: FloatFieldUpdateOperationsInput | number
    lowStockAlert?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usageHistory?: usedPartUpdateManyWithoutInventoryItemNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    stockLevel?: IntFieldUpdateOperationsInput | number
    retailPrice?: FloatFieldUpdateOperationsInput | number
    lowStockAlert?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usageHistory?: usedPartUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type inventoryCreateManyInput = {
    id?: number
    partName: string
    sku: string
    category: string
    stockLevel?: number
    retailPrice: number
    lowStockAlert?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inventoryUpdateManyMutationInput = {
    partName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    stockLevel?: IntFieldUpdateOperationsInput | number
    retailPrice?: FloatFieldUpdateOperationsInput | number
    lowStockAlert?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    stockLevel?: IntFieldUpdateOperationsInput | number
    retailPrice?: FloatFieldUpdateOperationsInput | number
    lowStockAlert?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoiceCreateInput = {
    invoiceNo: string
    customerName: string
    customerPhone: string
    items: JsonNullValueInput | InputJsonValue
    laborCharge?: number
    grandTotal: number
    paymentStatus: string
    paymentMethod: string
    saleType: $Enums.SaleType
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: repairTicketCreateNestedOneWithoutInvoiceInput
  }

  export type invoiceUncheckedCreateInput = {
    id?: number
    invoiceNo: string
    customerName: string
    customerPhone: string
    items: JsonNullValueInput | InputJsonValue
    laborCharge?: number
    grandTotal: number
    paymentStatus: string
    paymentMethod: string
    saleType: $Enums.SaleType
    ticketId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoiceUpdateInput = {
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    laborCharge?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    saleType?: EnumSaleTypeFieldUpdateOperationsInput | $Enums.SaleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: repairTicketUpdateOneWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    laborCharge?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    saleType?: EnumSaleTypeFieldUpdateOperationsInput | $Enums.SaleType
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoiceCreateManyInput = {
    id?: number
    invoiceNo: string
    customerName: string
    customerPhone: string
    items: JsonNullValueInput | InputJsonValue
    laborCharge?: number
    grandTotal: number
    paymentStatus: string
    paymentMethod: string
    saleType: $Enums.SaleType
    ticketId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoiceUpdateManyMutationInput = {
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    laborCharge?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    saleType?: EnumSaleTypeFieldUpdateOperationsInput | $Enums.SaleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    laborCharge?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    saleType?: EnumSaleTypeFieldUpdateOperationsInput | $Enums.SaleType
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type technicianCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    employeeId: string
    specialization: $Enums.TechnicianSpecialization
    status?: $Enums.TechnicianStatus
    experienceYears: number
    address?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: repairTicketCreateNestedManyWithoutTechnicianInput
  }

  export type technicianUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    employeeId: string
    specialization: $Enums.TechnicianSpecialization
    status?: $Enums.TechnicianStatus
    experienceYears: number
    address?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: repairTicketUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type technicianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    specialization?: EnumTechnicianSpecializationFieldUpdateOperationsInput | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    experienceYears?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: repairTicketUpdateManyWithoutTechnicianNestedInput
  }

  export type technicianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    specialization?: EnumTechnicianSpecializationFieldUpdateOperationsInput | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    experienceYears?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: repairTicketUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type technicianCreateManyInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    employeeId: string
    specialization: $Enums.TechnicianSpecialization
    status?: $Enums.TechnicianStatus
    experienceYears: number
    address?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type technicianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    specialization?: EnumTechnicianSpecializationFieldUpdateOperationsInput | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    experienceYears?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type technicianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    specialization?: EnumTechnicianSpecializationFieldUpdateOperationsInput | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    experienceYears?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    vin: string
    vehicleModel: string
    batteryPackSerial?: string | null
    batteryCapacity?: string | null
    batterySoh?: number | null
    batteryCycles?: number | null
    batteryTemp?: string | null
    odometer?: string | null
    lastServiceDaysAgo?: number | null
    manufacturer?: string | null
    modelYear?: number | null
    healthScore?: number | null
    lastAiCheck?: Date | string | null
    customer: customerCreateNestedOneWithoutVehiclesInput
    tickets?: repairTicketCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: number
    vin: string
    vehicleModel: string
    batteryPackSerial?: string | null
    batteryCapacity?: string | null
    batterySoh?: number | null
    batteryCycles?: number | null
    batteryTemp?: string | null
    odometer?: string | null
    lastServiceDaysAgo?: number | null
    manufacturer?: string | null
    modelYear?: number | null
    healthScore?: number | null
    lastAiCheck?: Date | string | null
    customerId: string
    tickets?: repairTicketUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customerUpdateOneRequiredWithoutVehiclesNestedInput
    tickets?: repairTicketUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    tickets?: repairTicketUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: number
    vin: string
    vehicleModel: string
    batteryPackSerial?: string | null
    batteryCapacity?: string | null
    batterySoh?: number | null
    batteryCycles?: number | null
    batteryTemp?: string | null
    odometer?: string | null
    lastServiceDaysAgo?: number | null
    manufacturer?: string | null
    modelYear?: number | null
    healthScore?: number | null
    lastAiCheck?: Date | string | null
    customerId: string
  }

  export type VehicleUpdateManyMutationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type RepairTicketListRelationFilter = {
    every?: repairTicketWhereInput
    some?: repairTicketWhereInput
    none?: repairTicketWhereInput
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type repairTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
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

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CustomerScalarRelationFilter = {
    is?: customerWhereInput
    isNot?: customerWhereInput
  }

  export type TechnicianNullableScalarRelationFilter = {
    is?: technicianWhereInput | null
    isNot?: technicianWhereInput | null
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type TechnicianNoteListRelationFilter = {
    every?: technicianNoteWhereInput
    some?: technicianNoteWhereInput
    none?: technicianNoteWhereInput
  }

  export type TimelineEventListRelationFilter = {
    every?: timelineEventWhereInput
    some?: timelineEventWhereInput
    none?: timelineEventWhereInput
  }

  export type UsedPartListRelationFilter = {
    every?: usedPartWhereInput
    some?: usedPartWhereInput
    none?: usedPartWhereInput
  }

  export type InvoiceNullableScalarRelationFilter = {
    is?: invoiceWhereInput | null
    isNot?: invoiceWhereInput | null
  }

  export type technicianNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type timelineEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usedPartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type repairTicketCountOrderByAggregateInput = {
    id?: SortOrder
    issueCategory?: SortOrder
    description?: SortOrder
    status?: SortOrder
    bay?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
    estimatedCost?: SortOrder
    finalCost?: SortOrder
    aiSummary?: SortOrder
    manufacturer?: SortOrder
    customerId?: SortOrder
    technicianId?: SortOrder
    vehicleId?: SortOrder
  }

  export type repairTicketAvgOrderByAggregateInput = {
    id?: SortOrder
    estimatedCost?: SortOrder
    finalCost?: SortOrder
    vehicleId?: SortOrder
  }

  export type repairTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    issueCategory?: SortOrder
    description?: SortOrder
    status?: SortOrder
    bay?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
    estimatedCost?: SortOrder
    finalCost?: SortOrder
    aiSummary?: SortOrder
    manufacturer?: SortOrder
    customerId?: SortOrder
    technicianId?: SortOrder
    vehicleId?: SortOrder
  }

  export type repairTicketMinOrderByAggregateInput = {
    id?: SortOrder
    issueCategory?: SortOrder
    description?: SortOrder
    status?: SortOrder
    bay?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
    estimatedCost?: SortOrder
    finalCost?: SortOrder
    aiSummary?: SortOrder
    manufacturer?: SortOrder
    customerId?: SortOrder
    technicianId?: SortOrder
    vehicleId?: SortOrder
  }

  export type repairTicketSumOrderByAggregateInput = {
    id?: SortOrder
    estimatedCost?: SortOrder
    finalCost?: SortOrder
    vehicleId?: SortOrder
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

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RepairTicketScalarRelationFilter = {
    is?: repairTicketWhereInput
    isNot?: repairTicketWhereInput
  }

  export type technicianNoteCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    aiSummary?: SortOrder
    rawVoiceText?: SortOrder
    structuredText?: SortOrder
    quickTags?: SortOrder
    imageUrls?: SortOrder
    createdAt?: SortOrder
  }

  export type technicianNoteAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
  }

  export type technicianNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    aiSummary?: SortOrder
    rawVoiceText?: SortOrder
    structuredText?: SortOrder
    createdAt?: SortOrder
  }

  export type technicianNoteMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    aiSummary?: SortOrder
    rawVoiceText?: SortOrder
    structuredText?: SortOrder
    createdAt?: SortOrder
  }

  export type technicianNoteSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
  }

  export type timelineEventCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type timelineEventAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
  }

  export type timelineEventMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type timelineEventMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type timelineEventSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InventoryScalarRelationFilter = {
    is?: inventoryWhereInput
    isNot?: inventoryWhereInput
  }

  export type usedPartCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    lockedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type usedPartAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    lockedCost?: SortOrder
  }

  export type usedPartMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    lockedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type usedPartMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    lockedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type usedPartSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    lockedCost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder
    partName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    stockLevel?: SortOrder
    retailPrice?: SortOrder
    lowStockAlert?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    stockLevel?: SortOrder
    retailPrice?: SortOrder
    lowStockAlert?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    partName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    stockLevel?: SortOrder
    retailPrice?: SortOrder
    lowStockAlert?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder
    partName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    stockLevel?: SortOrder
    retailPrice?: SortOrder
    lowStockAlert?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    id?: SortOrder
    stockLevel?: SortOrder
    retailPrice?: SortOrder
    lowStockAlert?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumSaleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleType | EnumSaleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SaleType[] | ListEnumSaleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleType[] | ListEnumSaleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleTypeFilter<$PrismaModel> | $Enums.SaleType
  }

  export type RepairTicketNullableScalarRelationFilter = {
    is?: repairTicketWhereInput | null
    isNot?: repairTicketWhereInput | null
  }

  export type invoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    items?: SortOrder
    laborCharge?: SortOrder
    grandTotal?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    saleType?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    laborCharge?: SortOrder
    grandTotal?: SortOrder
    ticketId?: SortOrder
  }

  export type invoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    laborCharge?: SortOrder
    grandTotal?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    saleType?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    laborCharge?: SortOrder
    grandTotal?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    saleType?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invoiceSumOrderByAggregateInput = {
    id?: SortOrder
    laborCharge?: SortOrder
    grandTotal?: SortOrder
    ticketId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumSaleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleType | EnumSaleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SaleType[] | ListEnumSaleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleType[] | ListEnumSaleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleTypeWithAggregatesFilter<$PrismaModel> | $Enums.SaleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSaleTypeFilter<$PrismaModel>
    _max?: NestedEnumSaleTypeFilter<$PrismaModel>
  }

  export type EnumTechnicianSpecializationFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianSpecialization | EnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianSpecialization[] | ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianSpecialization[] | ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianSpecializationFilter<$PrismaModel> | $Enums.TechnicianSpecialization
  }

  export type EnumTechnicianStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianStatus | EnumTechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianStatusFilter<$PrismaModel> | $Enums.TechnicianStatus
  }

  export type technicianCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    specialization?: SortOrder
    status?: SortOrder
    experienceYears?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type technicianAvgOrderByAggregateInput = {
    experienceYears?: SortOrder
  }

  export type technicianMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    specialization?: SortOrder
    status?: SortOrder
    experienceYears?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type technicianMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    specialization?: SortOrder
    status?: SortOrder
    experienceYears?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type technicianSumOrderByAggregateInput = {
    experienceYears?: SortOrder
  }

  export type EnumTechnicianSpecializationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianSpecialization | EnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianSpecialization[] | ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianSpecialization[] | ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianSpecializationWithAggregatesFilter<$PrismaModel> | $Enums.TechnicianSpecialization
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicianSpecializationFilter<$PrismaModel>
    _max?: NestedEnumTechnicianSpecializationFilter<$PrismaModel>
  }

  export type EnumTechnicianStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianStatus | EnumTechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianStatusWithAggregatesFilter<$PrismaModel> | $Enums.TechnicianStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicianStatusFilter<$PrismaModel>
    _max?: NestedEnumTechnicianStatusFilter<$PrismaModel>
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    vehicleModel?: SortOrder
    batteryPackSerial?: SortOrder
    batteryCapacity?: SortOrder
    batterySoh?: SortOrder
    batteryCycles?: SortOrder
    batteryTemp?: SortOrder
    odometer?: SortOrder
    lastServiceDaysAgo?: SortOrder
    manufacturer?: SortOrder
    modelYear?: SortOrder
    healthScore?: SortOrder
    lastAiCheck?: SortOrder
    customerId?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder
    batterySoh?: SortOrder
    batteryCycles?: SortOrder
    lastServiceDaysAgo?: SortOrder
    modelYear?: SortOrder
    healthScore?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    vehicleModel?: SortOrder
    batteryPackSerial?: SortOrder
    batteryCapacity?: SortOrder
    batterySoh?: SortOrder
    batteryCycles?: SortOrder
    batteryTemp?: SortOrder
    odometer?: SortOrder
    lastServiceDaysAgo?: SortOrder
    manufacturer?: SortOrder
    modelYear?: SortOrder
    healthScore?: SortOrder
    lastAiCheck?: SortOrder
    customerId?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    vehicleModel?: SortOrder
    batteryPackSerial?: SortOrder
    batteryCapacity?: SortOrder
    batterySoh?: SortOrder
    batteryCycles?: SortOrder
    batteryTemp?: SortOrder
    odometer?: SortOrder
    lastServiceDaysAgo?: SortOrder
    manufacturer?: SortOrder
    modelYear?: SortOrder
    healthScore?: SortOrder
    lastAiCheck?: SortOrder
    customerId?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder
    batterySoh?: SortOrder
    batteryCycles?: SortOrder
    lastServiceDaysAgo?: SortOrder
    modelYear?: SortOrder
    healthScore?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type repairTicketCreateNestedManyWithoutCustomerInput = {
    create?: XOR<repairTicketCreateWithoutCustomerInput, repairTicketUncheckedCreateWithoutCustomerInput> | repairTicketCreateWithoutCustomerInput[] | repairTicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutCustomerInput | repairTicketCreateOrConnectWithoutCustomerInput[]
    createMany?: repairTicketCreateManyCustomerInputEnvelope
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
  }

  export type VehicleCreateNestedManyWithoutCustomerInput = {
    create?: XOR<VehicleCreateWithoutCustomerInput, VehicleUncheckedCreateWithoutCustomerInput> | VehicleCreateWithoutCustomerInput[] | VehicleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutCustomerInput | VehicleCreateOrConnectWithoutCustomerInput[]
    createMany?: VehicleCreateManyCustomerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type repairTicketUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<repairTicketCreateWithoutCustomerInput, repairTicketUncheckedCreateWithoutCustomerInput> | repairTicketCreateWithoutCustomerInput[] | repairTicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutCustomerInput | repairTicketCreateOrConnectWithoutCustomerInput[]
    createMany?: repairTicketCreateManyCustomerInputEnvelope
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<VehicleCreateWithoutCustomerInput, VehicleUncheckedCreateWithoutCustomerInput> | VehicleCreateWithoutCustomerInput[] | VehicleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutCustomerInput | VehicleCreateOrConnectWithoutCustomerInput[]
    createMany?: VehicleCreateManyCustomerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type repairTicketUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<repairTicketCreateWithoutCustomerInput, repairTicketUncheckedCreateWithoutCustomerInput> | repairTicketCreateWithoutCustomerInput[] | repairTicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutCustomerInput | repairTicketCreateOrConnectWithoutCustomerInput[]
    upsert?: repairTicketUpsertWithWhereUniqueWithoutCustomerInput | repairTicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: repairTicketCreateManyCustomerInputEnvelope
    set?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    disconnect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    delete?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    update?: repairTicketUpdateWithWhereUniqueWithoutCustomerInput | repairTicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: repairTicketUpdateManyWithWhereWithoutCustomerInput | repairTicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: repairTicketScalarWhereInput | repairTicketScalarWhereInput[]
  }

  export type VehicleUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<VehicleCreateWithoutCustomerInput, VehicleUncheckedCreateWithoutCustomerInput> | VehicleCreateWithoutCustomerInput[] | VehicleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutCustomerInput | VehicleCreateOrConnectWithoutCustomerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutCustomerInput | VehicleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: VehicleCreateManyCustomerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutCustomerInput | VehicleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutCustomerInput | VehicleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type repairTicketUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<repairTicketCreateWithoutCustomerInput, repairTicketUncheckedCreateWithoutCustomerInput> | repairTicketCreateWithoutCustomerInput[] | repairTicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutCustomerInput | repairTicketCreateOrConnectWithoutCustomerInput[]
    upsert?: repairTicketUpsertWithWhereUniqueWithoutCustomerInput | repairTicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: repairTicketCreateManyCustomerInputEnvelope
    set?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    disconnect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    delete?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    update?: repairTicketUpdateWithWhereUniqueWithoutCustomerInput | repairTicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: repairTicketUpdateManyWithWhereWithoutCustomerInput | repairTicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: repairTicketScalarWhereInput | repairTicketScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<VehicleCreateWithoutCustomerInput, VehicleUncheckedCreateWithoutCustomerInput> | VehicleCreateWithoutCustomerInput[] | VehicleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutCustomerInput | VehicleCreateOrConnectWithoutCustomerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutCustomerInput | VehicleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: VehicleCreateManyCustomerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutCustomerInput | VehicleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutCustomerInput | VehicleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type customerCreateNestedOneWithoutTicketsInput = {
    create?: XOR<customerCreateWithoutTicketsInput, customerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: customerCreateOrConnectWithoutTicketsInput
    connect?: customerWhereUniqueInput
  }

  export type technicianCreateNestedOneWithoutTicketsInput = {
    create?: XOR<technicianCreateWithoutTicketsInput, technicianUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: technicianCreateOrConnectWithoutTicketsInput
    connect?: technicianWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutTicketsInput = {
    create?: XOR<VehicleCreateWithoutTicketsInput, VehicleUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTicketsInput
    connect?: VehicleWhereUniqueInput
  }

  export type technicianNoteCreateNestedManyWithoutTicketInput = {
    create?: XOR<technicianNoteCreateWithoutTicketInput, technicianNoteUncheckedCreateWithoutTicketInput> | technicianNoteCreateWithoutTicketInput[] | technicianNoteUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: technicianNoteCreateOrConnectWithoutTicketInput | technicianNoteCreateOrConnectWithoutTicketInput[]
    createMany?: technicianNoteCreateManyTicketInputEnvelope
    connect?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
  }

  export type timelineEventCreateNestedManyWithoutTicketInput = {
    create?: XOR<timelineEventCreateWithoutTicketInput, timelineEventUncheckedCreateWithoutTicketInput> | timelineEventCreateWithoutTicketInput[] | timelineEventUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: timelineEventCreateOrConnectWithoutTicketInput | timelineEventCreateOrConnectWithoutTicketInput[]
    createMany?: timelineEventCreateManyTicketInputEnvelope
    connect?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
  }

  export type usedPartCreateNestedManyWithoutTicketInput = {
    create?: XOR<usedPartCreateWithoutTicketInput, usedPartUncheckedCreateWithoutTicketInput> | usedPartCreateWithoutTicketInput[] | usedPartUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: usedPartCreateOrConnectWithoutTicketInput | usedPartCreateOrConnectWithoutTicketInput[]
    createMany?: usedPartCreateManyTicketInputEnvelope
    connect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
  }

  export type invoiceCreateNestedOneWithoutTicketInput = {
    create?: XOR<invoiceCreateWithoutTicketInput, invoiceUncheckedCreateWithoutTicketInput>
    connectOrCreate?: invoiceCreateOrConnectWithoutTicketInput
    connect?: invoiceWhereUniqueInput
  }

  export type technicianNoteUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<technicianNoteCreateWithoutTicketInput, technicianNoteUncheckedCreateWithoutTicketInput> | technicianNoteCreateWithoutTicketInput[] | technicianNoteUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: technicianNoteCreateOrConnectWithoutTicketInput | technicianNoteCreateOrConnectWithoutTicketInput[]
    createMany?: technicianNoteCreateManyTicketInputEnvelope
    connect?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
  }

  export type timelineEventUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<timelineEventCreateWithoutTicketInput, timelineEventUncheckedCreateWithoutTicketInput> | timelineEventCreateWithoutTicketInput[] | timelineEventUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: timelineEventCreateOrConnectWithoutTicketInput | timelineEventCreateOrConnectWithoutTicketInput[]
    createMany?: timelineEventCreateManyTicketInputEnvelope
    connect?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
  }

  export type usedPartUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<usedPartCreateWithoutTicketInput, usedPartUncheckedCreateWithoutTicketInput> | usedPartCreateWithoutTicketInput[] | usedPartUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: usedPartCreateOrConnectWithoutTicketInput | usedPartCreateOrConnectWithoutTicketInput[]
    createMany?: usedPartCreateManyTicketInputEnvelope
    connect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
  }

  export type invoiceUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<invoiceCreateWithoutTicketInput, invoiceUncheckedCreateWithoutTicketInput>
    connectOrCreate?: invoiceCreateOrConnectWithoutTicketInput
    connect?: invoiceWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type customerUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<customerCreateWithoutTicketsInput, customerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: customerCreateOrConnectWithoutTicketsInput
    upsert?: customerUpsertWithoutTicketsInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutTicketsInput, customerUpdateWithoutTicketsInput>, customerUncheckedUpdateWithoutTicketsInput>
  }

  export type technicianUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<technicianCreateWithoutTicketsInput, technicianUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: technicianCreateOrConnectWithoutTicketsInput
    upsert?: technicianUpsertWithoutTicketsInput
    disconnect?: technicianWhereInput | boolean
    delete?: technicianWhereInput | boolean
    connect?: technicianWhereUniqueInput
    update?: XOR<XOR<technicianUpdateToOneWithWhereWithoutTicketsInput, technicianUpdateWithoutTicketsInput>, technicianUncheckedUpdateWithoutTicketsInput>
  }

  export type VehicleUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<VehicleCreateWithoutTicketsInput, VehicleUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTicketsInput
    upsert?: VehicleUpsertWithoutTicketsInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutTicketsInput, VehicleUpdateWithoutTicketsInput>, VehicleUncheckedUpdateWithoutTicketsInput>
  }

  export type technicianNoteUpdateManyWithoutTicketNestedInput = {
    create?: XOR<technicianNoteCreateWithoutTicketInput, technicianNoteUncheckedCreateWithoutTicketInput> | technicianNoteCreateWithoutTicketInput[] | technicianNoteUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: technicianNoteCreateOrConnectWithoutTicketInput | technicianNoteCreateOrConnectWithoutTicketInput[]
    upsert?: technicianNoteUpsertWithWhereUniqueWithoutTicketInput | technicianNoteUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: technicianNoteCreateManyTicketInputEnvelope
    set?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
    disconnect?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
    delete?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
    connect?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
    update?: technicianNoteUpdateWithWhereUniqueWithoutTicketInput | technicianNoteUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: technicianNoteUpdateManyWithWhereWithoutTicketInput | technicianNoteUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: technicianNoteScalarWhereInput | technicianNoteScalarWhereInput[]
  }

  export type timelineEventUpdateManyWithoutTicketNestedInput = {
    create?: XOR<timelineEventCreateWithoutTicketInput, timelineEventUncheckedCreateWithoutTicketInput> | timelineEventCreateWithoutTicketInput[] | timelineEventUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: timelineEventCreateOrConnectWithoutTicketInput | timelineEventCreateOrConnectWithoutTicketInput[]
    upsert?: timelineEventUpsertWithWhereUniqueWithoutTicketInput | timelineEventUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: timelineEventCreateManyTicketInputEnvelope
    set?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
    disconnect?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
    delete?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
    connect?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
    update?: timelineEventUpdateWithWhereUniqueWithoutTicketInput | timelineEventUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: timelineEventUpdateManyWithWhereWithoutTicketInput | timelineEventUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: timelineEventScalarWhereInput | timelineEventScalarWhereInput[]
  }

  export type usedPartUpdateManyWithoutTicketNestedInput = {
    create?: XOR<usedPartCreateWithoutTicketInput, usedPartUncheckedCreateWithoutTicketInput> | usedPartCreateWithoutTicketInput[] | usedPartUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: usedPartCreateOrConnectWithoutTicketInput | usedPartCreateOrConnectWithoutTicketInput[]
    upsert?: usedPartUpsertWithWhereUniqueWithoutTicketInput | usedPartUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: usedPartCreateManyTicketInputEnvelope
    set?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    disconnect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    delete?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    connect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    update?: usedPartUpdateWithWhereUniqueWithoutTicketInput | usedPartUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: usedPartUpdateManyWithWhereWithoutTicketInput | usedPartUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: usedPartScalarWhereInput | usedPartScalarWhereInput[]
  }

  export type invoiceUpdateOneWithoutTicketNestedInput = {
    create?: XOR<invoiceCreateWithoutTicketInput, invoiceUncheckedCreateWithoutTicketInput>
    connectOrCreate?: invoiceCreateOrConnectWithoutTicketInput
    upsert?: invoiceUpsertWithoutTicketInput
    disconnect?: invoiceWhereInput | boolean
    delete?: invoiceWhereInput | boolean
    connect?: invoiceWhereUniqueInput
    update?: XOR<XOR<invoiceUpdateToOneWithWhereWithoutTicketInput, invoiceUpdateWithoutTicketInput>, invoiceUncheckedUpdateWithoutTicketInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
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

  export type technicianNoteUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<technicianNoteCreateWithoutTicketInput, technicianNoteUncheckedCreateWithoutTicketInput> | technicianNoteCreateWithoutTicketInput[] | technicianNoteUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: technicianNoteCreateOrConnectWithoutTicketInput | technicianNoteCreateOrConnectWithoutTicketInput[]
    upsert?: technicianNoteUpsertWithWhereUniqueWithoutTicketInput | technicianNoteUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: technicianNoteCreateManyTicketInputEnvelope
    set?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
    disconnect?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
    delete?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
    connect?: technicianNoteWhereUniqueInput | technicianNoteWhereUniqueInput[]
    update?: technicianNoteUpdateWithWhereUniqueWithoutTicketInput | technicianNoteUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: technicianNoteUpdateManyWithWhereWithoutTicketInput | technicianNoteUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: technicianNoteScalarWhereInput | technicianNoteScalarWhereInput[]
  }

  export type timelineEventUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<timelineEventCreateWithoutTicketInput, timelineEventUncheckedCreateWithoutTicketInput> | timelineEventCreateWithoutTicketInput[] | timelineEventUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: timelineEventCreateOrConnectWithoutTicketInput | timelineEventCreateOrConnectWithoutTicketInput[]
    upsert?: timelineEventUpsertWithWhereUniqueWithoutTicketInput | timelineEventUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: timelineEventCreateManyTicketInputEnvelope
    set?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
    disconnect?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
    delete?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
    connect?: timelineEventWhereUniqueInput | timelineEventWhereUniqueInput[]
    update?: timelineEventUpdateWithWhereUniqueWithoutTicketInput | timelineEventUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: timelineEventUpdateManyWithWhereWithoutTicketInput | timelineEventUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: timelineEventScalarWhereInput | timelineEventScalarWhereInput[]
  }

  export type usedPartUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<usedPartCreateWithoutTicketInput, usedPartUncheckedCreateWithoutTicketInput> | usedPartCreateWithoutTicketInput[] | usedPartUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: usedPartCreateOrConnectWithoutTicketInput | usedPartCreateOrConnectWithoutTicketInput[]
    upsert?: usedPartUpsertWithWhereUniqueWithoutTicketInput | usedPartUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: usedPartCreateManyTicketInputEnvelope
    set?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    disconnect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    delete?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    connect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    update?: usedPartUpdateWithWhereUniqueWithoutTicketInput | usedPartUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: usedPartUpdateManyWithWhereWithoutTicketInput | usedPartUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: usedPartScalarWhereInput | usedPartScalarWhereInput[]
  }

  export type invoiceUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<invoiceCreateWithoutTicketInput, invoiceUncheckedCreateWithoutTicketInput>
    connectOrCreate?: invoiceCreateOrConnectWithoutTicketInput
    upsert?: invoiceUpsertWithoutTicketInput
    disconnect?: invoiceWhereInput | boolean
    delete?: invoiceWhereInput | boolean
    connect?: invoiceWhereUniqueInput
    update?: XOR<XOR<invoiceUpdateToOneWithWhereWithoutTicketInput, invoiceUpdateWithoutTicketInput>, invoiceUncheckedUpdateWithoutTicketInput>
  }

  export type technicianNoteCreatequickTagsInput = {
    set: string[]
  }

  export type technicianNoteCreateimageUrlsInput = {
    set: string[]
  }

  export type repairTicketCreateNestedOneWithoutNotesInput = {
    create?: XOR<repairTicketCreateWithoutNotesInput, repairTicketUncheckedCreateWithoutNotesInput>
    connectOrCreate?: repairTicketCreateOrConnectWithoutNotesInput
    connect?: repairTicketWhereUniqueInput
  }

  export type technicianNoteUpdatequickTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type technicianNoteUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type repairTicketUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<repairTicketCreateWithoutNotesInput, repairTicketUncheckedCreateWithoutNotesInput>
    connectOrCreate?: repairTicketCreateOrConnectWithoutNotesInput
    upsert?: repairTicketUpsertWithoutNotesInput
    connect?: repairTicketWhereUniqueInput
    update?: XOR<XOR<repairTicketUpdateToOneWithWhereWithoutNotesInput, repairTicketUpdateWithoutNotesInput>, repairTicketUncheckedUpdateWithoutNotesInput>
  }

  export type repairTicketCreateNestedOneWithoutTimelineInput = {
    create?: XOR<repairTicketCreateWithoutTimelineInput, repairTicketUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: repairTicketCreateOrConnectWithoutTimelineInput
    connect?: repairTicketWhereUniqueInput
  }

  export type repairTicketUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: XOR<repairTicketCreateWithoutTimelineInput, repairTicketUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: repairTicketCreateOrConnectWithoutTimelineInput
    upsert?: repairTicketUpsertWithoutTimelineInput
    connect?: repairTicketWhereUniqueInput
    update?: XOR<XOR<repairTicketUpdateToOneWithWhereWithoutTimelineInput, repairTicketUpdateWithoutTimelineInput>, repairTicketUncheckedUpdateWithoutTimelineInput>
  }

  export type repairTicketCreateNestedOneWithoutPartsInput = {
    create?: XOR<repairTicketCreateWithoutPartsInput, repairTicketUncheckedCreateWithoutPartsInput>
    connectOrCreate?: repairTicketCreateOrConnectWithoutPartsInput
    connect?: repairTicketWhereUniqueInput
  }

  export type inventoryCreateNestedOneWithoutUsageHistoryInput = {
    create?: XOR<inventoryCreateWithoutUsageHistoryInput, inventoryUncheckedCreateWithoutUsageHistoryInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutUsageHistoryInput
    connect?: inventoryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type repairTicketUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<repairTicketCreateWithoutPartsInput, repairTicketUncheckedCreateWithoutPartsInput>
    connectOrCreate?: repairTicketCreateOrConnectWithoutPartsInput
    upsert?: repairTicketUpsertWithoutPartsInput
    connect?: repairTicketWhereUniqueInput
    update?: XOR<XOR<repairTicketUpdateToOneWithWhereWithoutPartsInput, repairTicketUpdateWithoutPartsInput>, repairTicketUncheckedUpdateWithoutPartsInput>
  }

  export type inventoryUpdateOneRequiredWithoutUsageHistoryNestedInput = {
    create?: XOR<inventoryCreateWithoutUsageHistoryInput, inventoryUncheckedCreateWithoutUsageHistoryInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutUsageHistoryInput
    upsert?: inventoryUpsertWithoutUsageHistoryInput
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutUsageHistoryInput, inventoryUpdateWithoutUsageHistoryInput>, inventoryUncheckedUpdateWithoutUsageHistoryInput>
  }

  export type usedPartCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<usedPartCreateWithoutInventoryItemInput, usedPartUncheckedCreateWithoutInventoryItemInput> | usedPartCreateWithoutInventoryItemInput[] | usedPartUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: usedPartCreateOrConnectWithoutInventoryItemInput | usedPartCreateOrConnectWithoutInventoryItemInput[]
    createMany?: usedPartCreateManyInventoryItemInputEnvelope
    connect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
  }

  export type usedPartUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<usedPartCreateWithoutInventoryItemInput, usedPartUncheckedCreateWithoutInventoryItemInput> | usedPartCreateWithoutInventoryItemInput[] | usedPartUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: usedPartCreateOrConnectWithoutInventoryItemInput | usedPartCreateOrConnectWithoutInventoryItemInput[]
    createMany?: usedPartCreateManyInventoryItemInputEnvelope
    connect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
  }

  export type usedPartUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<usedPartCreateWithoutInventoryItemInput, usedPartUncheckedCreateWithoutInventoryItemInput> | usedPartCreateWithoutInventoryItemInput[] | usedPartUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: usedPartCreateOrConnectWithoutInventoryItemInput | usedPartCreateOrConnectWithoutInventoryItemInput[]
    upsert?: usedPartUpsertWithWhereUniqueWithoutInventoryItemInput | usedPartUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: usedPartCreateManyInventoryItemInputEnvelope
    set?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    disconnect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    delete?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    connect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    update?: usedPartUpdateWithWhereUniqueWithoutInventoryItemInput | usedPartUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: usedPartUpdateManyWithWhereWithoutInventoryItemInput | usedPartUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: usedPartScalarWhereInput | usedPartScalarWhereInput[]
  }

  export type usedPartUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<usedPartCreateWithoutInventoryItemInput, usedPartUncheckedCreateWithoutInventoryItemInput> | usedPartCreateWithoutInventoryItemInput[] | usedPartUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: usedPartCreateOrConnectWithoutInventoryItemInput | usedPartCreateOrConnectWithoutInventoryItemInput[]
    upsert?: usedPartUpsertWithWhereUniqueWithoutInventoryItemInput | usedPartUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: usedPartCreateManyInventoryItemInputEnvelope
    set?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    disconnect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    delete?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    connect?: usedPartWhereUniqueInput | usedPartWhereUniqueInput[]
    update?: usedPartUpdateWithWhereUniqueWithoutInventoryItemInput | usedPartUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: usedPartUpdateManyWithWhereWithoutInventoryItemInput | usedPartUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: usedPartScalarWhereInput | usedPartScalarWhereInput[]
  }

  export type repairTicketCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<repairTicketCreateWithoutInvoiceInput, repairTicketUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: repairTicketCreateOrConnectWithoutInvoiceInput
    connect?: repairTicketWhereUniqueInput
  }

  export type EnumSaleTypeFieldUpdateOperationsInput = {
    set?: $Enums.SaleType
  }

  export type repairTicketUpdateOneWithoutInvoiceNestedInput = {
    create?: XOR<repairTicketCreateWithoutInvoiceInput, repairTicketUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: repairTicketCreateOrConnectWithoutInvoiceInput
    upsert?: repairTicketUpsertWithoutInvoiceInput
    disconnect?: repairTicketWhereInput | boolean
    delete?: repairTicketWhereInput | boolean
    connect?: repairTicketWhereUniqueInput
    update?: XOR<XOR<repairTicketUpdateToOneWithWhereWithoutInvoiceInput, repairTicketUpdateWithoutInvoiceInput>, repairTicketUncheckedUpdateWithoutInvoiceInput>
  }

  export type repairTicketCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<repairTicketCreateWithoutTechnicianInput, repairTicketUncheckedCreateWithoutTechnicianInput> | repairTicketCreateWithoutTechnicianInput[] | repairTicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutTechnicianInput | repairTicketCreateOrConnectWithoutTechnicianInput[]
    createMany?: repairTicketCreateManyTechnicianInputEnvelope
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
  }

  export type repairTicketUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<repairTicketCreateWithoutTechnicianInput, repairTicketUncheckedCreateWithoutTechnicianInput> | repairTicketCreateWithoutTechnicianInput[] | repairTicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutTechnicianInput | repairTicketCreateOrConnectWithoutTechnicianInput[]
    createMany?: repairTicketCreateManyTechnicianInputEnvelope
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
  }

  export type EnumTechnicianSpecializationFieldUpdateOperationsInput = {
    set?: $Enums.TechnicianSpecialization
  }

  export type EnumTechnicianStatusFieldUpdateOperationsInput = {
    set?: $Enums.TechnicianStatus
  }

  export type repairTicketUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<repairTicketCreateWithoutTechnicianInput, repairTicketUncheckedCreateWithoutTechnicianInput> | repairTicketCreateWithoutTechnicianInput[] | repairTicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutTechnicianInput | repairTicketCreateOrConnectWithoutTechnicianInput[]
    upsert?: repairTicketUpsertWithWhereUniqueWithoutTechnicianInput | repairTicketUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: repairTicketCreateManyTechnicianInputEnvelope
    set?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    disconnect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    delete?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    update?: repairTicketUpdateWithWhereUniqueWithoutTechnicianInput | repairTicketUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: repairTicketUpdateManyWithWhereWithoutTechnicianInput | repairTicketUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: repairTicketScalarWhereInput | repairTicketScalarWhereInput[]
  }

  export type repairTicketUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<repairTicketCreateWithoutTechnicianInput, repairTicketUncheckedCreateWithoutTechnicianInput> | repairTicketCreateWithoutTechnicianInput[] | repairTicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutTechnicianInput | repairTicketCreateOrConnectWithoutTechnicianInput[]
    upsert?: repairTicketUpsertWithWhereUniqueWithoutTechnicianInput | repairTicketUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: repairTicketCreateManyTechnicianInputEnvelope
    set?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    disconnect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    delete?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    update?: repairTicketUpdateWithWhereUniqueWithoutTechnicianInput | repairTicketUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: repairTicketUpdateManyWithWhereWithoutTechnicianInput | repairTicketUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: repairTicketScalarWhereInput | repairTicketScalarWhereInput[]
  }

  export type customerCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<customerCreateWithoutVehiclesInput, customerUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: customerCreateOrConnectWithoutVehiclesInput
    connect?: customerWhereUniqueInput
  }

  export type repairTicketCreateNestedManyWithoutVehicleInput = {
    create?: XOR<repairTicketCreateWithoutVehicleInput, repairTicketUncheckedCreateWithoutVehicleInput> | repairTicketCreateWithoutVehicleInput[] | repairTicketUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutVehicleInput | repairTicketCreateOrConnectWithoutVehicleInput[]
    createMany?: repairTicketCreateManyVehicleInputEnvelope
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
  }

  export type repairTicketUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<repairTicketCreateWithoutVehicleInput, repairTicketUncheckedCreateWithoutVehicleInput> | repairTicketCreateWithoutVehicleInput[] | repairTicketUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutVehicleInput | repairTicketCreateOrConnectWithoutVehicleInput[]
    createMany?: repairTicketCreateManyVehicleInputEnvelope
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
  }

  export type customerUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<customerCreateWithoutVehiclesInput, customerUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: customerCreateOrConnectWithoutVehiclesInput
    upsert?: customerUpsertWithoutVehiclesInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutVehiclesInput, customerUpdateWithoutVehiclesInput>, customerUncheckedUpdateWithoutVehiclesInput>
  }

  export type repairTicketUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<repairTicketCreateWithoutVehicleInput, repairTicketUncheckedCreateWithoutVehicleInput> | repairTicketCreateWithoutVehicleInput[] | repairTicketUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutVehicleInput | repairTicketCreateOrConnectWithoutVehicleInput[]
    upsert?: repairTicketUpsertWithWhereUniqueWithoutVehicleInput | repairTicketUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: repairTicketCreateManyVehicleInputEnvelope
    set?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    disconnect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    delete?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    update?: repairTicketUpdateWithWhereUniqueWithoutVehicleInput | repairTicketUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: repairTicketUpdateManyWithWhereWithoutVehicleInput | repairTicketUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: repairTicketScalarWhereInput | repairTicketScalarWhereInput[]
  }

  export type repairTicketUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<repairTicketCreateWithoutVehicleInput, repairTicketUncheckedCreateWithoutVehicleInput> | repairTicketCreateWithoutVehicleInput[] | repairTicketUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: repairTicketCreateOrConnectWithoutVehicleInput | repairTicketCreateOrConnectWithoutVehicleInput[]
    upsert?: repairTicketUpsertWithWhereUniqueWithoutVehicleInput | repairTicketUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: repairTicketCreateManyVehicleInputEnvelope
    set?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    disconnect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    delete?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    connect?: repairTicketWhereUniqueInput | repairTicketWhereUniqueInput[]
    update?: repairTicketUpdateWithWhereUniqueWithoutVehicleInput | repairTicketUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: repairTicketUpdateManyWithWhereWithoutVehicleInput | repairTicketUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: repairTicketScalarWhereInput | repairTicketScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSaleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleType | EnumSaleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SaleType[] | ListEnumSaleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleType[] | ListEnumSaleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleTypeFilter<$PrismaModel> | $Enums.SaleType
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSaleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleType | EnumSaleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SaleType[] | ListEnumSaleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleType[] | ListEnumSaleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleTypeWithAggregatesFilter<$PrismaModel> | $Enums.SaleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSaleTypeFilter<$PrismaModel>
    _max?: NestedEnumSaleTypeFilter<$PrismaModel>
  }

  export type NestedEnumTechnicianSpecializationFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianSpecialization | EnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianSpecialization[] | ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianSpecialization[] | ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianSpecializationFilter<$PrismaModel> | $Enums.TechnicianSpecialization
  }

  export type NestedEnumTechnicianStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianStatus | EnumTechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianStatusFilter<$PrismaModel> | $Enums.TechnicianStatus
  }

  export type NestedEnumTechnicianSpecializationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianSpecialization | EnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianSpecialization[] | ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianSpecialization[] | ListEnumTechnicianSpecializationFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianSpecializationWithAggregatesFilter<$PrismaModel> | $Enums.TechnicianSpecialization
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicianSpecializationFilter<$PrismaModel>
    _max?: NestedEnumTechnicianSpecializationFilter<$PrismaModel>
  }

  export type NestedEnumTechnicianStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianStatus | EnumTechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianStatusWithAggregatesFilter<$PrismaModel> | $Enums.TechnicianStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicianStatusFilter<$PrismaModel>
    _max?: NestedEnumTechnicianStatusFilter<$PrismaModel>
  }

  export type repairTicketCreateWithoutCustomerInput = {
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    technician?: technicianCreateNestedOneWithoutTicketsInput
    vehicle?: VehicleCreateNestedOneWithoutTicketsInput
    notes?: technicianNoteCreateNestedManyWithoutTicketInput
    timeline?: timelineEventCreateNestedManyWithoutTicketInput
    parts?: usedPartCreateNestedManyWithoutTicketInput
    invoice?: invoiceCreateNestedOneWithoutTicketInput
  }

  export type repairTicketUncheckedCreateWithoutCustomerInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    technicianId?: string | null
    vehicleId?: number | null
    notes?: technicianNoteUncheckedCreateNestedManyWithoutTicketInput
    timeline?: timelineEventUncheckedCreateNestedManyWithoutTicketInput
    parts?: usedPartUncheckedCreateNestedManyWithoutTicketInput
    invoice?: invoiceUncheckedCreateNestedOneWithoutTicketInput
  }

  export type repairTicketCreateOrConnectWithoutCustomerInput = {
    where: repairTicketWhereUniqueInput
    create: XOR<repairTicketCreateWithoutCustomerInput, repairTicketUncheckedCreateWithoutCustomerInput>
  }

  export type repairTicketCreateManyCustomerInputEnvelope = {
    data: repairTicketCreateManyCustomerInput | repairTicketCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type VehicleCreateWithoutCustomerInput = {
    vin: string
    vehicleModel: string
    batteryPackSerial?: string | null
    batteryCapacity?: string | null
    batterySoh?: number | null
    batteryCycles?: number | null
    batteryTemp?: string | null
    odometer?: string | null
    lastServiceDaysAgo?: number | null
    manufacturer?: string | null
    modelYear?: number | null
    healthScore?: number | null
    lastAiCheck?: Date | string | null
    tickets?: repairTicketCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutCustomerInput = {
    id?: number
    vin: string
    vehicleModel: string
    batteryPackSerial?: string | null
    batteryCapacity?: string | null
    batterySoh?: number | null
    batteryCycles?: number | null
    batteryTemp?: string | null
    odometer?: string | null
    lastServiceDaysAgo?: number | null
    manufacturer?: string | null
    modelYear?: number | null
    healthScore?: number | null
    lastAiCheck?: Date | string | null
    tickets?: repairTicketUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutCustomerInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutCustomerInput, VehicleUncheckedCreateWithoutCustomerInput>
  }

  export type VehicleCreateManyCustomerInputEnvelope = {
    data: VehicleCreateManyCustomerInput | VehicleCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type repairTicketUpsertWithWhereUniqueWithoutCustomerInput = {
    where: repairTicketWhereUniqueInput
    update: XOR<repairTicketUpdateWithoutCustomerInput, repairTicketUncheckedUpdateWithoutCustomerInput>
    create: XOR<repairTicketCreateWithoutCustomerInput, repairTicketUncheckedCreateWithoutCustomerInput>
  }

  export type repairTicketUpdateWithWhereUniqueWithoutCustomerInput = {
    where: repairTicketWhereUniqueInput
    data: XOR<repairTicketUpdateWithoutCustomerInput, repairTicketUncheckedUpdateWithoutCustomerInput>
  }

  export type repairTicketUpdateManyWithWhereWithoutCustomerInput = {
    where: repairTicketScalarWhereInput
    data: XOR<repairTicketUpdateManyMutationInput, repairTicketUncheckedUpdateManyWithoutCustomerInput>
  }

  export type repairTicketScalarWhereInput = {
    AND?: repairTicketScalarWhereInput | repairTicketScalarWhereInput[]
    OR?: repairTicketScalarWhereInput[]
    NOT?: repairTicketScalarWhereInput | repairTicketScalarWhereInput[]
    id?: IntFilter<"repairTicket"> | number
    issueCategory?: StringFilter<"repairTicket"> | string
    description?: StringFilter<"repairTicket"> | string
    status?: EnumTicketStatusFilter<"repairTicket"> | $Enums.TicketStatus
    bay?: StringNullableFilter<"repairTicket"> | string | null
    priority?: EnumTicketPriorityFilter<"repairTicket"> | $Enums.TicketPriority
    createdAt?: DateTimeFilter<"repairTicket"> | Date | string
    updatedAt?: DateTimeFilter<"repairTicket"> | Date | string
    closedAt?: DateTimeNullableFilter<"repairTicket"> | Date | string | null
    estimatedCost?: FloatNullableFilter<"repairTicket"> | number | null
    finalCost?: FloatNullableFilter<"repairTicket"> | number | null
    aiSummary?: StringNullableFilter<"repairTicket"> | string | null
    manufacturer?: StringNullableFilter<"repairTicket"> | string | null
    customerId?: StringFilter<"repairTicket"> | string
    technicianId?: StringNullableFilter<"repairTicket"> | string | null
    vehicleId?: IntNullableFilter<"repairTicket"> | number | null
  }

  export type VehicleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutCustomerInput, VehicleUncheckedUpdateWithoutCustomerInput>
    create: XOR<VehicleCreateWithoutCustomerInput, VehicleUncheckedCreateWithoutCustomerInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutCustomerInput, VehicleUncheckedUpdateWithoutCustomerInput>
  }

  export type VehicleUpdateManyWithWhereWithoutCustomerInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutCustomerInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    vin?: StringFilter<"Vehicle"> | string
    vehicleModel?: StringFilter<"Vehicle"> | string
    batteryPackSerial?: StringNullableFilter<"Vehicle"> | string | null
    batteryCapacity?: StringNullableFilter<"Vehicle"> | string | null
    batterySoh?: IntNullableFilter<"Vehicle"> | number | null
    batteryCycles?: IntNullableFilter<"Vehicle"> | number | null
    batteryTemp?: StringNullableFilter<"Vehicle"> | string | null
    odometer?: StringNullableFilter<"Vehicle"> | string | null
    lastServiceDaysAgo?: IntNullableFilter<"Vehicle"> | number | null
    manufacturer?: StringNullableFilter<"Vehicle"> | string | null
    modelYear?: IntNullableFilter<"Vehicle"> | number | null
    healthScore?: IntNullableFilter<"Vehicle"> | number | null
    lastAiCheck?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    customerId?: StringFilter<"Vehicle"> | string
  }

  export type customerCreateWithoutTicketsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address?: string | null
    createdAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address?: string | null
    createdAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutTicketsInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutTicketsInput, customerUncheckedCreateWithoutTicketsInput>
  }

  export type technicianCreateWithoutTicketsInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    employeeId: string
    specialization: $Enums.TechnicianSpecialization
    status?: $Enums.TechnicianStatus
    experienceYears: number
    address?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type technicianUncheckedCreateWithoutTicketsInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    employeeId: string
    specialization: $Enums.TechnicianSpecialization
    status?: $Enums.TechnicianStatus
    experienceYears: number
    address?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type technicianCreateOrConnectWithoutTicketsInput = {
    where: technicianWhereUniqueInput
    create: XOR<technicianCreateWithoutTicketsInput, technicianUncheckedCreateWithoutTicketsInput>
  }

  export type VehicleCreateWithoutTicketsInput = {
    vin: string
    vehicleModel: string
    batteryPackSerial?: string | null
    batteryCapacity?: string | null
    batterySoh?: number | null
    batteryCycles?: number | null
    batteryTemp?: string | null
    odometer?: string | null
    lastServiceDaysAgo?: number | null
    manufacturer?: string | null
    modelYear?: number | null
    healthScore?: number | null
    lastAiCheck?: Date | string | null
    customer: customerCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutTicketsInput = {
    id?: number
    vin: string
    vehicleModel: string
    batteryPackSerial?: string | null
    batteryCapacity?: string | null
    batterySoh?: number | null
    batteryCycles?: number | null
    batteryTemp?: string | null
    odometer?: string | null
    lastServiceDaysAgo?: number | null
    manufacturer?: string | null
    modelYear?: number | null
    healthScore?: number | null
    lastAiCheck?: Date | string | null
    customerId: string
  }

  export type VehicleCreateOrConnectWithoutTicketsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTicketsInput, VehicleUncheckedCreateWithoutTicketsInput>
  }

  export type technicianNoteCreateWithoutTicketInput = {
    aiSummary?: string | null
    rawVoiceText?: string | null
    structuredText: string
    quickTags?: technicianNoteCreatequickTagsInput | string[]
    imageUrls?: technicianNoteCreateimageUrlsInput | string[]
    createdAt?: Date | string
  }

  export type technicianNoteUncheckedCreateWithoutTicketInput = {
    id?: number
    aiSummary?: string | null
    rawVoiceText?: string | null
    structuredText: string
    quickTags?: technicianNoteCreatequickTagsInput | string[]
    imageUrls?: technicianNoteCreateimageUrlsInput | string[]
    createdAt?: Date | string
  }

  export type technicianNoteCreateOrConnectWithoutTicketInput = {
    where: technicianNoteWhereUniqueInput
    create: XOR<technicianNoteCreateWithoutTicketInput, technicianNoteUncheckedCreateWithoutTicketInput>
  }

  export type technicianNoteCreateManyTicketInputEnvelope = {
    data: technicianNoteCreateManyTicketInput | technicianNoteCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type timelineEventCreateWithoutTicketInput = {
    status: string
    createdAt?: Date | string
  }

  export type timelineEventUncheckedCreateWithoutTicketInput = {
    id?: number
    status: string
    createdAt?: Date | string
  }

  export type timelineEventCreateOrConnectWithoutTicketInput = {
    where: timelineEventWhereUniqueInput
    create: XOR<timelineEventCreateWithoutTicketInput, timelineEventUncheckedCreateWithoutTicketInput>
  }

  export type timelineEventCreateManyTicketInputEnvelope = {
    data: timelineEventCreateManyTicketInput | timelineEventCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type usedPartCreateWithoutTicketInput = {
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
    inventoryItem: inventoryCreateNestedOneWithoutUsageHistoryInput
  }

  export type usedPartUncheckedCreateWithoutTicketInput = {
    id?: number
    inventoryId: number
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
  }

  export type usedPartCreateOrConnectWithoutTicketInput = {
    where: usedPartWhereUniqueInput
    create: XOR<usedPartCreateWithoutTicketInput, usedPartUncheckedCreateWithoutTicketInput>
  }

  export type usedPartCreateManyTicketInputEnvelope = {
    data: usedPartCreateManyTicketInput | usedPartCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type invoiceCreateWithoutTicketInput = {
    invoiceNo: string
    customerName: string
    customerPhone: string
    items: JsonNullValueInput | InputJsonValue
    laborCharge?: number
    grandTotal: number
    paymentStatus: string
    paymentMethod: string
    saleType: $Enums.SaleType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoiceUncheckedCreateWithoutTicketInput = {
    id?: number
    invoiceNo: string
    customerName: string
    customerPhone: string
    items: JsonNullValueInput | InputJsonValue
    laborCharge?: number
    grandTotal: number
    paymentStatus: string
    paymentMethod: string
    saleType: $Enums.SaleType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invoiceCreateOrConnectWithoutTicketInput = {
    where: invoiceWhereUniqueInput
    create: XOR<invoiceCreateWithoutTicketInput, invoiceUncheckedCreateWithoutTicketInput>
  }

  export type customerUpsertWithoutTicketsInput = {
    update: XOR<customerUpdateWithoutTicketsInput, customerUncheckedUpdateWithoutTicketsInput>
    create: XOR<customerCreateWithoutTicketsInput, customerUncheckedCreateWithoutTicketsInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutTicketsInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutTicketsInput, customerUncheckedUpdateWithoutTicketsInput>
  }

  export type customerUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type technicianUpsertWithoutTicketsInput = {
    update: XOR<technicianUpdateWithoutTicketsInput, technicianUncheckedUpdateWithoutTicketsInput>
    create: XOR<technicianCreateWithoutTicketsInput, technicianUncheckedCreateWithoutTicketsInput>
    where?: technicianWhereInput
  }

  export type technicianUpdateToOneWithWhereWithoutTicketsInput = {
    where?: technicianWhereInput
    data: XOR<technicianUpdateWithoutTicketsInput, technicianUncheckedUpdateWithoutTicketsInput>
  }

  export type technicianUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    specialization?: EnumTechnicianSpecializationFieldUpdateOperationsInput | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    experienceYears?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type technicianUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    specialization?: EnumTechnicianSpecializationFieldUpdateOperationsInput | $Enums.TechnicianSpecialization
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    experienceYears?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUpsertWithoutTicketsInput = {
    update: XOR<VehicleUpdateWithoutTicketsInput, VehicleUncheckedUpdateWithoutTicketsInput>
    create: XOR<VehicleCreateWithoutTicketsInput, VehicleUncheckedCreateWithoutTicketsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutTicketsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutTicketsInput, VehicleUncheckedUpdateWithoutTicketsInput>
  }

  export type VehicleUpdateWithoutTicketsInput = {
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customerUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type technicianNoteUpsertWithWhereUniqueWithoutTicketInput = {
    where: technicianNoteWhereUniqueInput
    update: XOR<technicianNoteUpdateWithoutTicketInput, technicianNoteUncheckedUpdateWithoutTicketInput>
    create: XOR<technicianNoteCreateWithoutTicketInput, technicianNoteUncheckedCreateWithoutTicketInput>
  }

  export type technicianNoteUpdateWithWhereUniqueWithoutTicketInput = {
    where: technicianNoteWhereUniqueInput
    data: XOR<technicianNoteUpdateWithoutTicketInput, technicianNoteUncheckedUpdateWithoutTicketInput>
  }

  export type technicianNoteUpdateManyWithWhereWithoutTicketInput = {
    where: technicianNoteScalarWhereInput
    data: XOR<technicianNoteUpdateManyMutationInput, technicianNoteUncheckedUpdateManyWithoutTicketInput>
  }

  export type technicianNoteScalarWhereInput = {
    AND?: technicianNoteScalarWhereInput | technicianNoteScalarWhereInput[]
    OR?: technicianNoteScalarWhereInput[]
    NOT?: technicianNoteScalarWhereInput | technicianNoteScalarWhereInput[]
    id?: IntFilter<"technicianNote"> | number
    ticketId?: IntFilter<"technicianNote"> | number
    aiSummary?: StringNullableFilter<"technicianNote"> | string | null
    rawVoiceText?: StringNullableFilter<"technicianNote"> | string | null
    structuredText?: StringFilter<"technicianNote"> | string
    quickTags?: StringNullableListFilter<"technicianNote">
    imageUrls?: StringNullableListFilter<"technicianNote">
    createdAt?: DateTimeFilter<"technicianNote"> | Date | string
  }

  export type timelineEventUpsertWithWhereUniqueWithoutTicketInput = {
    where: timelineEventWhereUniqueInput
    update: XOR<timelineEventUpdateWithoutTicketInput, timelineEventUncheckedUpdateWithoutTicketInput>
    create: XOR<timelineEventCreateWithoutTicketInput, timelineEventUncheckedCreateWithoutTicketInput>
  }

  export type timelineEventUpdateWithWhereUniqueWithoutTicketInput = {
    where: timelineEventWhereUniqueInput
    data: XOR<timelineEventUpdateWithoutTicketInput, timelineEventUncheckedUpdateWithoutTicketInput>
  }

  export type timelineEventUpdateManyWithWhereWithoutTicketInput = {
    where: timelineEventScalarWhereInput
    data: XOR<timelineEventUpdateManyMutationInput, timelineEventUncheckedUpdateManyWithoutTicketInput>
  }

  export type timelineEventScalarWhereInput = {
    AND?: timelineEventScalarWhereInput | timelineEventScalarWhereInput[]
    OR?: timelineEventScalarWhereInput[]
    NOT?: timelineEventScalarWhereInput | timelineEventScalarWhereInput[]
    id?: IntFilter<"timelineEvent"> | number
    ticketId?: IntFilter<"timelineEvent"> | number
    status?: StringFilter<"timelineEvent"> | string
    createdAt?: DateTimeFilter<"timelineEvent"> | Date | string
  }

  export type usedPartUpsertWithWhereUniqueWithoutTicketInput = {
    where: usedPartWhereUniqueInput
    update: XOR<usedPartUpdateWithoutTicketInput, usedPartUncheckedUpdateWithoutTicketInput>
    create: XOR<usedPartCreateWithoutTicketInput, usedPartUncheckedCreateWithoutTicketInput>
  }

  export type usedPartUpdateWithWhereUniqueWithoutTicketInput = {
    where: usedPartWhereUniqueInput
    data: XOR<usedPartUpdateWithoutTicketInput, usedPartUncheckedUpdateWithoutTicketInput>
  }

  export type usedPartUpdateManyWithWhereWithoutTicketInput = {
    where: usedPartScalarWhereInput
    data: XOR<usedPartUpdateManyMutationInput, usedPartUncheckedUpdateManyWithoutTicketInput>
  }

  export type usedPartScalarWhereInput = {
    AND?: usedPartScalarWhereInput | usedPartScalarWhereInput[]
    OR?: usedPartScalarWhereInput[]
    NOT?: usedPartScalarWhereInput | usedPartScalarWhereInput[]
    id?: IntFilter<"usedPart"> | number
    ticketId?: IntFilter<"usedPart"> | number
    inventoryId?: IntFilter<"usedPart"> | number
    quantity?: IntFilter<"usedPart"> | number
    lockedCost?: FloatFilter<"usedPart"> | number
    createdAt?: DateTimeFilter<"usedPart"> | Date | string
  }

  export type invoiceUpsertWithoutTicketInput = {
    update: XOR<invoiceUpdateWithoutTicketInput, invoiceUncheckedUpdateWithoutTicketInput>
    create: XOR<invoiceCreateWithoutTicketInput, invoiceUncheckedCreateWithoutTicketInput>
    where?: invoiceWhereInput
  }

  export type invoiceUpdateToOneWithWhereWithoutTicketInput = {
    where?: invoiceWhereInput
    data: XOR<invoiceUpdateWithoutTicketInput, invoiceUncheckedUpdateWithoutTicketInput>
  }

  export type invoiceUpdateWithoutTicketInput = {
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    laborCharge?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    saleType?: EnumSaleTypeFieldUpdateOperationsInput | $Enums.SaleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoiceUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    laborCharge?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    saleType?: EnumSaleTypeFieldUpdateOperationsInput | $Enums.SaleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type repairTicketCreateWithoutNotesInput = {
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customer: customerCreateNestedOneWithoutTicketsInput
    technician?: technicianCreateNestedOneWithoutTicketsInput
    vehicle?: VehicleCreateNestedOneWithoutTicketsInput
    timeline?: timelineEventCreateNestedManyWithoutTicketInput
    parts?: usedPartCreateNestedManyWithoutTicketInput
    invoice?: invoiceCreateNestedOneWithoutTicketInput
  }

  export type repairTicketUncheckedCreateWithoutNotesInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    technicianId?: string | null
    vehicleId?: number | null
    timeline?: timelineEventUncheckedCreateNestedManyWithoutTicketInput
    parts?: usedPartUncheckedCreateNestedManyWithoutTicketInput
    invoice?: invoiceUncheckedCreateNestedOneWithoutTicketInput
  }

  export type repairTicketCreateOrConnectWithoutNotesInput = {
    where: repairTicketWhereUniqueInput
    create: XOR<repairTicketCreateWithoutNotesInput, repairTicketUncheckedCreateWithoutNotesInput>
  }

  export type repairTicketUpsertWithoutNotesInput = {
    update: XOR<repairTicketUpdateWithoutNotesInput, repairTicketUncheckedUpdateWithoutNotesInput>
    create: XOR<repairTicketCreateWithoutNotesInput, repairTicketUncheckedCreateWithoutNotesInput>
    where?: repairTicketWhereInput
  }

  export type repairTicketUpdateToOneWithWhereWithoutNotesInput = {
    where?: repairTicketWhereInput
    data: XOR<repairTicketUpdateWithoutNotesInput, repairTicketUncheckedUpdateWithoutNotesInput>
  }

  export type repairTicketUpdateWithoutNotesInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: customerUpdateOneRequiredWithoutTicketsNestedInput
    technician?: technicianUpdateOneWithoutTicketsNestedInput
    vehicle?: VehicleUpdateOneWithoutTicketsNestedInput
    timeline?: timelineEventUpdateManyWithoutTicketNestedInput
    parts?: usedPartUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    timeline?: timelineEventUncheckedUpdateManyWithoutTicketNestedInput
    parts?: usedPartUncheckedUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketCreateWithoutTimelineInput = {
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customer: customerCreateNestedOneWithoutTicketsInput
    technician?: technicianCreateNestedOneWithoutTicketsInput
    vehicle?: VehicleCreateNestedOneWithoutTicketsInput
    notes?: technicianNoteCreateNestedManyWithoutTicketInput
    parts?: usedPartCreateNestedManyWithoutTicketInput
    invoice?: invoiceCreateNestedOneWithoutTicketInput
  }

  export type repairTicketUncheckedCreateWithoutTimelineInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    technicianId?: string | null
    vehicleId?: number | null
    notes?: technicianNoteUncheckedCreateNestedManyWithoutTicketInput
    parts?: usedPartUncheckedCreateNestedManyWithoutTicketInput
    invoice?: invoiceUncheckedCreateNestedOneWithoutTicketInput
  }

  export type repairTicketCreateOrConnectWithoutTimelineInput = {
    where: repairTicketWhereUniqueInput
    create: XOR<repairTicketCreateWithoutTimelineInput, repairTicketUncheckedCreateWithoutTimelineInput>
  }

  export type repairTicketUpsertWithoutTimelineInput = {
    update: XOR<repairTicketUpdateWithoutTimelineInput, repairTicketUncheckedUpdateWithoutTimelineInput>
    create: XOR<repairTicketCreateWithoutTimelineInput, repairTicketUncheckedCreateWithoutTimelineInput>
    where?: repairTicketWhereInput
  }

  export type repairTicketUpdateToOneWithWhereWithoutTimelineInput = {
    where?: repairTicketWhereInput
    data: XOR<repairTicketUpdateWithoutTimelineInput, repairTicketUncheckedUpdateWithoutTimelineInput>
  }

  export type repairTicketUpdateWithoutTimelineInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: customerUpdateOneRequiredWithoutTicketsNestedInput
    technician?: technicianUpdateOneWithoutTicketsNestedInput
    vehicle?: VehicleUpdateOneWithoutTicketsNestedInput
    notes?: technicianNoteUpdateManyWithoutTicketNestedInput
    parts?: usedPartUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateWithoutTimelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: technicianNoteUncheckedUpdateManyWithoutTicketNestedInput
    parts?: usedPartUncheckedUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketCreateWithoutPartsInput = {
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customer: customerCreateNestedOneWithoutTicketsInput
    technician?: technicianCreateNestedOneWithoutTicketsInput
    vehicle?: VehicleCreateNestedOneWithoutTicketsInput
    notes?: technicianNoteCreateNestedManyWithoutTicketInput
    timeline?: timelineEventCreateNestedManyWithoutTicketInput
    invoice?: invoiceCreateNestedOneWithoutTicketInput
  }

  export type repairTicketUncheckedCreateWithoutPartsInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    technicianId?: string | null
    vehicleId?: number | null
    notes?: technicianNoteUncheckedCreateNestedManyWithoutTicketInput
    timeline?: timelineEventUncheckedCreateNestedManyWithoutTicketInput
    invoice?: invoiceUncheckedCreateNestedOneWithoutTicketInput
  }

  export type repairTicketCreateOrConnectWithoutPartsInput = {
    where: repairTicketWhereUniqueInput
    create: XOR<repairTicketCreateWithoutPartsInput, repairTicketUncheckedCreateWithoutPartsInput>
  }

  export type inventoryCreateWithoutUsageHistoryInput = {
    partName: string
    sku: string
    category: string
    stockLevel?: number
    retailPrice: number
    lowStockAlert?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inventoryUncheckedCreateWithoutUsageHistoryInput = {
    id?: number
    partName: string
    sku: string
    category: string
    stockLevel?: number
    retailPrice: number
    lowStockAlert?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inventoryCreateOrConnectWithoutUsageHistoryInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutUsageHistoryInput, inventoryUncheckedCreateWithoutUsageHistoryInput>
  }

  export type repairTicketUpsertWithoutPartsInput = {
    update: XOR<repairTicketUpdateWithoutPartsInput, repairTicketUncheckedUpdateWithoutPartsInput>
    create: XOR<repairTicketCreateWithoutPartsInput, repairTicketUncheckedCreateWithoutPartsInput>
    where?: repairTicketWhereInput
  }

  export type repairTicketUpdateToOneWithWhereWithoutPartsInput = {
    where?: repairTicketWhereInput
    data: XOR<repairTicketUpdateWithoutPartsInput, repairTicketUncheckedUpdateWithoutPartsInput>
  }

  export type repairTicketUpdateWithoutPartsInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: customerUpdateOneRequiredWithoutTicketsNestedInput
    technician?: technicianUpdateOneWithoutTicketsNestedInput
    vehicle?: VehicleUpdateOneWithoutTicketsNestedInput
    notes?: technicianNoteUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: technicianNoteUncheckedUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUncheckedUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type inventoryUpsertWithoutUsageHistoryInput = {
    update: XOR<inventoryUpdateWithoutUsageHistoryInput, inventoryUncheckedUpdateWithoutUsageHistoryInput>
    create: XOR<inventoryCreateWithoutUsageHistoryInput, inventoryUncheckedCreateWithoutUsageHistoryInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutUsageHistoryInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutUsageHistoryInput, inventoryUncheckedUpdateWithoutUsageHistoryInput>
  }

  export type inventoryUpdateWithoutUsageHistoryInput = {
    partName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    stockLevel?: IntFieldUpdateOperationsInput | number
    retailPrice?: FloatFieldUpdateOperationsInput | number
    lowStockAlert?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryUncheckedUpdateWithoutUsageHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    partName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    stockLevel?: IntFieldUpdateOperationsInput | number
    retailPrice?: FloatFieldUpdateOperationsInput | number
    lowStockAlert?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usedPartCreateWithoutInventoryItemInput = {
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
    ticket: repairTicketCreateNestedOneWithoutPartsInput
  }

  export type usedPartUncheckedCreateWithoutInventoryItemInput = {
    id?: number
    ticketId: number
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
  }

  export type usedPartCreateOrConnectWithoutInventoryItemInput = {
    where: usedPartWhereUniqueInput
    create: XOR<usedPartCreateWithoutInventoryItemInput, usedPartUncheckedCreateWithoutInventoryItemInput>
  }

  export type usedPartCreateManyInventoryItemInputEnvelope = {
    data: usedPartCreateManyInventoryItemInput | usedPartCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type usedPartUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: usedPartWhereUniqueInput
    update: XOR<usedPartUpdateWithoutInventoryItemInput, usedPartUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<usedPartCreateWithoutInventoryItemInput, usedPartUncheckedCreateWithoutInventoryItemInput>
  }

  export type usedPartUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: usedPartWhereUniqueInput
    data: XOR<usedPartUpdateWithoutInventoryItemInput, usedPartUncheckedUpdateWithoutInventoryItemInput>
  }

  export type usedPartUpdateManyWithWhereWithoutInventoryItemInput = {
    where: usedPartScalarWhereInput
    data: XOR<usedPartUpdateManyMutationInput, usedPartUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type repairTicketCreateWithoutInvoiceInput = {
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customer: customerCreateNestedOneWithoutTicketsInput
    technician?: technicianCreateNestedOneWithoutTicketsInput
    vehicle?: VehicleCreateNestedOneWithoutTicketsInput
    notes?: technicianNoteCreateNestedManyWithoutTicketInput
    timeline?: timelineEventCreateNestedManyWithoutTicketInput
    parts?: usedPartCreateNestedManyWithoutTicketInput
  }

  export type repairTicketUncheckedCreateWithoutInvoiceInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    technicianId?: string | null
    vehicleId?: number | null
    notes?: technicianNoteUncheckedCreateNestedManyWithoutTicketInput
    timeline?: timelineEventUncheckedCreateNestedManyWithoutTicketInput
    parts?: usedPartUncheckedCreateNestedManyWithoutTicketInput
  }

  export type repairTicketCreateOrConnectWithoutInvoiceInput = {
    where: repairTicketWhereUniqueInput
    create: XOR<repairTicketCreateWithoutInvoiceInput, repairTicketUncheckedCreateWithoutInvoiceInput>
  }

  export type repairTicketUpsertWithoutInvoiceInput = {
    update: XOR<repairTicketUpdateWithoutInvoiceInput, repairTicketUncheckedUpdateWithoutInvoiceInput>
    create: XOR<repairTicketCreateWithoutInvoiceInput, repairTicketUncheckedCreateWithoutInvoiceInput>
    where?: repairTicketWhereInput
  }

  export type repairTicketUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: repairTicketWhereInput
    data: XOR<repairTicketUpdateWithoutInvoiceInput, repairTicketUncheckedUpdateWithoutInvoiceInput>
  }

  export type repairTicketUpdateWithoutInvoiceInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: customerUpdateOneRequiredWithoutTicketsNestedInput
    technician?: technicianUpdateOneWithoutTicketsNestedInput
    vehicle?: VehicleUpdateOneWithoutTicketsNestedInput
    notes?: technicianNoteUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUpdateManyWithoutTicketNestedInput
    parts?: usedPartUpdateManyWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: technicianNoteUncheckedUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUncheckedUpdateManyWithoutTicketNestedInput
    parts?: usedPartUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type repairTicketCreateWithoutTechnicianInput = {
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customer: customerCreateNestedOneWithoutTicketsInput
    vehicle?: VehicleCreateNestedOneWithoutTicketsInput
    notes?: technicianNoteCreateNestedManyWithoutTicketInput
    timeline?: timelineEventCreateNestedManyWithoutTicketInput
    parts?: usedPartCreateNestedManyWithoutTicketInput
    invoice?: invoiceCreateNestedOneWithoutTicketInput
  }

  export type repairTicketUncheckedCreateWithoutTechnicianInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    vehicleId?: number | null
    notes?: technicianNoteUncheckedCreateNestedManyWithoutTicketInput
    timeline?: timelineEventUncheckedCreateNestedManyWithoutTicketInput
    parts?: usedPartUncheckedCreateNestedManyWithoutTicketInput
    invoice?: invoiceUncheckedCreateNestedOneWithoutTicketInput
  }

  export type repairTicketCreateOrConnectWithoutTechnicianInput = {
    where: repairTicketWhereUniqueInput
    create: XOR<repairTicketCreateWithoutTechnicianInput, repairTicketUncheckedCreateWithoutTechnicianInput>
  }

  export type repairTicketCreateManyTechnicianInputEnvelope = {
    data: repairTicketCreateManyTechnicianInput | repairTicketCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type repairTicketUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: repairTicketWhereUniqueInput
    update: XOR<repairTicketUpdateWithoutTechnicianInput, repairTicketUncheckedUpdateWithoutTechnicianInput>
    create: XOR<repairTicketCreateWithoutTechnicianInput, repairTicketUncheckedCreateWithoutTechnicianInput>
  }

  export type repairTicketUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: repairTicketWhereUniqueInput
    data: XOR<repairTicketUpdateWithoutTechnicianInput, repairTicketUncheckedUpdateWithoutTechnicianInput>
  }

  export type repairTicketUpdateManyWithWhereWithoutTechnicianInput = {
    where: repairTicketScalarWhereInput
    data: XOR<repairTicketUpdateManyMutationInput, repairTicketUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type customerCreateWithoutVehiclesInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address?: string | null
    createdAt?: Date | string
    tickets?: repairTicketCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutVehiclesInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address?: string | null
    createdAt?: Date | string
    tickets?: repairTicketUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutVehiclesInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutVehiclesInput, customerUncheckedCreateWithoutVehiclesInput>
  }

  export type repairTicketCreateWithoutVehicleInput = {
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customer: customerCreateNestedOneWithoutTicketsInput
    technician?: technicianCreateNestedOneWithoutTicketsInput
    notes?: technicianNoteCreateNestedManyWithoutTicketInput
    timeline?: timelineEventCreateNestedManyWithoutTicketInput
    parts?: usedPartCreateNestedManyWithoutTicketInput
    invoice?: invoiceCreateNestedOneWithoutTicketInput
  }

  export type repairTicketUncheckedCreateWithoutVehicleInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    technicianId?: string | null
    notes?: technicianNoteUncheckedCreateNestedManyWithoutTicketInput
    timeline?: timelineEventUncheckedCreateNestedManyWithoutTicketInput
    parts?: usedPartUncheckedCreateNestedManyWithoutTicketInput
    invoice?: invoiceUncheckedCreateNestedOneWithoutTicketInput
  }

  export type repairTicketCreateOrConnectWithoutVehicleInput = {
    where: repairTicketWhereUniqueInput
    create: XOR<repairTicketCreateWithoutVehicleInput, repairTicketUncheckedCreateWithoutVehicleInput>
  }

  export type repairTicketCreateManyVehicleInputEnvelope = {
    data: repairTicketCreateManyVehicleInput | repairTicketCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type customerUpsertWithoutVehiclesInput = {
    update: XOR<customerUpdateWithoutVehiclesInput, customerUncheckedUpdateWithoutVehiclesInput>
    create: XOR<customerCreateWithoutVehiclesInput, customerUncheckedCreateWithoutVehiclesInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutVehiclesInput, customerUncheckedUpdateWithoutVehiclesInput>
  }

  export type customerUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: repairTicketUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: repairTicketUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type repairTicketUpsertWithWhereUniqueWithoutVehicleInput = {
    where: repairTicketWhereUniqueInput
    update: XOR<repairTicketUpdateWithoutVehicleInput, repairTicketUncheckedUpdateWithoutVehicleInput>
    create: XOR<repairTicketCreateWithoutVehicleInput, repairTicketUncheckedCreateWithoutVehicleInput>
  }

  export type repairTicketUpdateWithWhereUniqueWithoutVehicleInput = {
    where: repairTicketWhereUniqueInput
    data: XOR<repairTicketUpdateWithoutVehicleInput, repairTicketUncheckedUpdateWithoutVehicleInput>
  }

  export type repairTicketUpdateManyWithWhereWithoutVehicleInput = {
    where: repairTicketScalarWhereInput
    data: XOR<repairTicketUpdateManyMutationInput, repairTicketUncheckedUpdateManyWithoutVehicleInput>
  }

  export type repairTicketCreateManyCustomerInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    technicianId?: string | null
    vehicleId?: number | null
  }

  export type VehicleCreateManyCustomerInput = {
    id?: number
    vin: string
    vehicleModel: string
    batteryPackSerial?: string | null
    batteryCapacity?: string | null
    batterySoh?: number | null
    batteryCycles?: number | null
    batteryTemp?: string | null
    odometer?: string | null
    lastServiceDaysAgo?: number | null
    manufacturer?: string | null
    modelYear?: number | null
    healthScore?: number | null
    lastAiCheck?: Date | string | null
  }

  export type repairTicketUpdateWithoutCustomerInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    technician?: technicianUpdateOneWithoutTicketsNestedInput
    vehicle?: VehicleUpdateOneWithoutTicketsNestedInput
    notes?: technicianNoteUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUpdateManyWithoutTicketNestedInput
    parts?: usedPartUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: technicianNoteUncheckedUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUncheckedUpdateManyWithoutTicketNestedInput
    parts?: usedPartUncheckedUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VehicleUpdateWithoutCustomerInput = {
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: repairTicketUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: repairTicketUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    batteryPackSerial?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    batterySoh?: NullableIntFieldUpdateOperationsInput | number | null
    batteryCycles?: NullableIntFieldUpdateOperationsInput | number | null
    batteryTemp?: NullableStringFieldUpdateOperationsInput | string | null
    odometer?: NullableStringFieldUpdateOperationsInput | string | null
    lastServiceDaysAgo?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    modelYear?: NullableIntFieldUpdateOperationsInput | number | null
    healthScore?: NullableIntFieldUpdateOperationsInput | number | null
    lastAiCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type technicianNoteCreateManyTicketInput = {
    id?: number
    aiSummary?: string | null
    rawVoiceText?: string | null
    structuredText: string
    quickTags?: technicianNoteCreatequickTagsInput | string[]
    imageUrls?: technicianNoteCreateimageUrlsInput | string[]
    createdAt?: Date | string
  }

  export type timelineEventCreateManyTicketInput = {
    id?: number
    status: string
    createdAt?: Date | string
  }

  export type usedPartCreateManyTicketInput = {
    id?: number
    inventoryId: number
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
  }

  export type technicianNoteUpdateWithoutTicketInput = {
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    rawVoiceText?: NullableStringFieldUpdateOperationsInput | string | null
    structuredText?: StringFieldUpdateOperationsInput | string
    quickTags?: technicianNoteUpdatequickTagsInput | string[]
    imageUrls?: technicianNoteUpdateimageUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type technicianNoteUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    rawVoiceText?: NullableStringFieldUpdateOperationsInput | string | null
    structuredText?: StringFieldUpdateOperationsInput | string
    quickTags?: technicianNoteUpdatequickTagsInput | string[]
    imageUrls?: technicianNoteUpdateimageUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type technicianNoteUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    rawVoiceText?: NullableStringFieldUpdateOperationsInput | string | null
    structuredText?: StringFieldUpdateOperationsInput | string
    quickTags?: technicianNoteUpdatequickTagsInput | string[]
    imageUrls?: technicianNoteUpdateimageUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelineEventUpdateWithoutTicketInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelineEventUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelineEventUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usedPartUpdateWithoutTicketInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: inventoryUpdateOneRequiredWithoutUsageHistoryNestedInput
  }

  export type usedPartUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usedPartUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usedPartCreateManyInventoryItemInput = {
    id?: number
    ticketId: number
    quantity?: number
    lockedCost: number
    createdAt?: Date | string
  }

  export type usedPartUpdateWithoutInventoryItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: repairTicketUpdateOneRequiredWithoutPartsNestedInput
  }

  export type usedPartUncheckedUpdateWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usedPartUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lockedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type repairTicketCreateManyTechnicianInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    vehicleId?: number | null
  }

  export type repairTicketUpdateWithoutTechnicianInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: customerUpdateOneRequiredWithoutTicketsNestedInput
    vehicle?: VehicleUpdateOneWithoutTicketsNestedInput
    notes?: technicianNoteUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUpdateManyWithoutTicketNestedInput
    parts?: usedPartUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateWithoutTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: technicianNoteUncheckedUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUncheckedUpdateManyWithoutTicketNestedInput
    parts?: usedPartUncheckedUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateManyWithoutTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type repairTicketCreateManyVehicleInput = {
    id?: number
    issueCategory: string
    description: string
    status?: $Enums.TicketStatus
    bay?: string | null
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    estimatedCost?: number | null
    finalCost?: number | null
    aiSummary?: string | null
    manufacturer?: string | null
    customerId: string
    technicianId?: string | null
  }

  export type repairTicketUpdateWithoutVehicleInput = {
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: customerUpdateOneRequiredWithoutTicketsNestedInput
    technician?: technicianUpdateOneWithoutTicketsNestedInput
    notes?: technicianNoteUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUpdateManyWithoutTicketNestedInput
    parts?: usedPartUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: technicianNoteUncheckedUpdateManyWithoutTicketNestedInput
    timeline?: timelineEventUncheckedUpdateManyWithoutTicketNestedInput
    parts?: usedPartUncheckedUpdateManyWithoutTicketNestedInput
    invoice?: invoiceUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type repairTicketUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueCategory?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    bay?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableFloatFieldUpdateOperationsInput | number | null
    finalCost?: NullableFloatFieldUpdateOperationsInput | number | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
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