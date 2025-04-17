
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ComputeInstancesScalarFieldEnum = {
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

exports.Prisma.SubscriptionDetailsScalarFieldEnum = {
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

exports.Prisma.TenancyDetailsScalarFieldEnum = {
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

exports.Prisma.AuditScalarFieldEnum = {
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

exports.Prisma.NotificationsScalarFieldEnum = {
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

exports.Prisma.Tenancy_detailsScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ComputeInstancesOrderByRelevanceFieldEnum = {
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

exports.Prisma.SubscriptionDetailsOrderByRelevanceFieldEnum = {
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

exports.Prisma.TenancyDetailsOrderByRelevanceFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenancy_id: 'tenancy_id',
  home_region: 'home_region',
  subscription_id: 'subscription_id',
  service_name: 'service_name',
  currency: 'currency',
  tenancy_status: 'tenancy_status'
};

exports.Prisma.auditOrderByRelevanceFieldEnum = {
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

exports.Prisma.notificationsOrderByRelevanceFieldEnum = {
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

exports.Prisma.tenancy_detailsOrderByRelevanceFieldEnum = {
  tenancy_id: 'tenancy_id',
  tenancy_name: 'tenancy_name',
  home_region: 'home_region',
  service_name: 'service_name',
  currency: 'currency',
  status: 'status'
};


exports.Prisma.ModelName = {
  ComputeInstances: 'ComputeInstances',
  SubscriptionDetails: 'SubscriptionDetails',
  TenancyDetails: 'TenancyDetails',
  audit: 'audit',
  notifications: 'notifications',
  tenancy_details: 'tenancy_details'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
