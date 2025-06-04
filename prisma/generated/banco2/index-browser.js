
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
  monthly_cost: 'monthly_cost'
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
  dias_decorridos: 'dias_decorridos',
  updated: 'updated',
  status: 'status'
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

exports.Prisma.CustoDiarioTotalScalarFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenant_id: 'tenant_id',
  cost_dia: 'cost_dia',
  currency: 'currency',
  usage_dia: 'usage_dia',
  time_started: 'time_started',
  time_ended: 'time_ended'
};

exports.Prisma.CustoMensalTotalScalarFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenant_id: 'tenant_id',
  cost_mes: 'cost_mes',
  currency: 'currency',
  usage_mes: 'usage_mes',
  time_started: 'time_started',
  time_ended: 'time_ended'
};

exports.Prisma.ComputeEventsScalarFieldEnum = {
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

exports.Prisma.IdentityEventsScalarFieldEnum = {
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

exports.Prisma.NetworkEventsScalarFieldEnum = {
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

exports.Prisma.BlockVolumeScalarFieldEnum = {
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

exports.Prisma.CustoPorServiceScalarFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenant_id: 'tenant_id',
  service: 'service',
  cost_mes: 'cost_mes',
  currency: 'currency',
  usage_mes: 'usage_mes',
  time_started: 'time_started',
  time_ended: 'time_ended'
};

exports.Prisma.CustoPorSkuNameScalarFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenant_id: 'tenant_id',
  sku_name: 'sku_name',
  cost_mes: 'cost_mes',
  currency: 'currency',
  usage_mes: 'usage_mes',
  time_started: 'time_started',
  time_ended: 'time_ended'
};

exports.Prisma.IdentityUsersScalarFieldEnum = {
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

exports.Prisma.VolumesBackupScalarFieldEnum = {
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

exports.Prisma.SubscriptionCommitScalarFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenancy_id: 'tenancy_id',
  time_started_commit: 'time_started_commit',
  time_ended_commit: 'time_ended_commit',
  total_used: 'total_used',
  updated: 'updated',
  dias_decorridos: 'dias_decorridos'
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
  is_having_usage: 'is_having_usage',
  status: 'status'
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

exports.Prisma.tenancy_detailsOrderByRelevanceFieldEnum = {
  tenancy_id: 'tenancy_id',
  tenancy_name: 'tenancy_name',
  home_region: 'home_region',
  service_name: 'service_name',
  currency: 'currency',
  status: 'status'
};

exports.Prisma.CustoDiarioTotalOrderByRelevanceFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenant_id: 'tenant_id',
  currency: 'currency'
};

exports.Prisma.CustoMensalTotalOrderByRelevanceFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenant_id: 'tenant_id',
  currency: 'currency'
};

exports.Prisma.computeEventsOrderByRelevanceFieldEnum = {
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

exports.Prisma.identityEventsOrderByRelevanceFieldEnum = {
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

exports.Prisma.networkEventsOrderByRelevanceFieldEnum = {
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

exports.Prisma.BlockVolumeOrderByRelevanceFieldEnum = {
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

exports.Prisma.CustoPorServiceOrderByRelevanceFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenant_id: 'tenant_id',
  service: 'service',
  currency: 'currency'
};

exports.Prisma.CustoPorSkuNameOrderByRelevanceFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenant_id: 'tenant_id',
  sku_name: 'sku_name',
  currency: 'currency'
};

exports.Prisma.IdentityUsersOrderByRelevanceFieldEnum = {
  lifecycle_state: 'lifecycle_state',
  email: 'email',
  email_verified: 'email_verified',
  identity_provider_id: 'identity_provider_id',
  tenancy_name: 'tenancy_name'
};

exports.Prisma.VolumesBackupOrderByRelevanceFieldEnum = {
  tenancyName: 'tenancyName',
  displayName: 'displayName',
  volumeId: 'volumeId',
  backupId: 'backupId',
  backupDisplayName: 'backupDisplayName',
  backupType: 'backupType'
};

exports.Prisma.SubscriptionCommitOrderByRelevanceFieldEnum = {
  tenancy_name: 'tenancy_name',
  tenancy_id: 'tenancy_id'
};


exports.Prisma.ModelName = {
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
