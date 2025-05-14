
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  tenancyName: 'tenancyName'
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
  tenancyName: 'tenancyName'
};

exports.Prisma.NetworkEventsScalarFieldEnum = {
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
  routeRules: 'routeRules',
  createdBy: 'createdBy',
  createdOn: 'createdOn',
  createdAt: 'createdAt',
  tenancyName: 'tenancyName'
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
  custo_mes: 'custo_mes'
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
  tenancyName: 'tenancyName'
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
  tenancyName: 'tenancyName'
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
  tenancyName: 'tenancyName'
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
  IdentityUsers: 'IdentityUsers'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/accerte/oci-back/prisma/generated/banco2",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.1.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/accerte/oci-back/prisma/db2/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../db2",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db2"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db2": {
      "url": {
        "fromEnvVar": "DATABASE_URL_2",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/banco2\"\n}\n\ndatasource db2 {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_2\")\n}\n\nmodel ComputeInstances {\n  tenancy_name          String?   @db2.VarChar(50)\n  tenancy_id            String?   @db2.VarChar(255)\n  id                    String    @id @default(dbgenerated(\"()\")) @db2.VarChar(150)\n  display_name          String?   @db2.VarChar(50)\n  compartment_id        String?   @db2.VarChar(150)\n  availability_domain   String?   @db2.VarChar(50)\n  fault_domain          String?   @db2.VarChar(50)\n  region                String?   @db2.VarChar(30)\n  lifecycle_state       String?   @db2.VarChar(20)\n  shape                 String?   @db2.VarChar(30)\n  memory_in_gbs         Float?\n  ocpus                 Int?\n  processor_description String?   @db2.VarChar(50)\n  time_created          DateTime? @db2.DateTime(0)\n  CreatedBy             String?   @db2.VarChar(200)\n  monthly_cost          Float?\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel CpuUtilization {\n  profile_name        String?   @db2.VarChar(30)\n  compartment_id      String?   @db2.VarChar(150)\n  region              String?   @db2.VarChar(50)\n  resourceDisplayName String?   @db2.VarChar(50)\n  resourceId          String?   @db2.VarChar(150)\n  metric_timestamp    DateTime? @db2.DateTime(0)\n  cpu_usage           Float?\n\n  @@ignore\n}\n\nmodel SubscriptionDetails {\n  tenancy_name        String?   @db2.VarChar(50)\n  tenancy_id          String    @default(dbgenerated(\"()\")) @db2.VarChar(150)\n  home_region         String?   @db2.VarChar(20)\n  subscription_id     String    @default(dbgenerated(\"()\")) @db2.VarChar(20)\n  service_name        String?   @db2.VarChar(30)\n  currency            String?   @db2.VarChar(10)\n  time_start          DateTime  @default(dbgenerated(\"(0000-00-00 00:00:00)\")) @db2.DateTime(0)\n  time_end            DateTime? @db2.DateTime(0)\n  admin_email         String?   @db2.VarChar(50)\n  buyer_email         String?   @db2.VarChar(50)\n  end_user_customer   String?   @db2.VarChar(100)\n  payment_method      String?   @db2.VarChar(50)\n  pricing_model       String?   @db2.VarChar(50)\n  product             String?   @db2.VarChar(50)\n  is_having_usage     String?   @db2.VarChar(10)\n  total_value         Float?\n  used_amount         Float?\n  line_net_amount     Float?\n  available_amount    Float?\n  total_dias_contrato Int?\n  dias_decorridos     Int?\n\n  @@id([tenancy_id, subscription_id, time_start])\n}\n\nmodel TenancyDetails {\n  tenancy_name    String?   @db2.VarChar(50)\n  tenancy_id      String    @id @db2.VarChar(150)\n  home_region     String?   @db2.VarChar(20)\n  subscription_id String?   @db2.VarChar(20)\n  service_name    String?   @db2.VarChar(30)\n  currency        String?   @db2.VarChar(10)\n  time_start      DateTime? @db2.DateTime(0)\n  time_end        DateTime? @db2.DateTime(0)\n  tenancy_status  String?   @db2.VarChar(10)\n  total_credit    Float?\n}\n\nmodel tenancy_details {\n  tenancy_id   String   @id @db2.VarChar(255)\n  tenancy_name String?  @db2.VarChar(255)\n  home_region  String?  @db2.VarChar(100)\n  service_name String?  @db2.VarChar(255)\n  currency     String?  @db2.VarChar(10)\n  time_start   DateTime @db2.DateTime(0)\n  time_end     DateTime @db2.DateTime(0)\n  status       String?  @db2.VarChar(50)\n  total_value  Decimal? @db2.Decimal(15, 2)\n}\n\nmodel CustoDiarioTotal {\n  tenancy_name String?   @db2.VarChar(50)\n  tenant_id    String    @default(dbgenerated(\"()\")) @db2.VarChar(255)\n  cost_dia     Float?\n  currency     String?   @db2.VarChar(20)\n  usage_dia    Float?\n  time_started DateTime  @default(dbgenerated(\"(0000-00-00 00:00:00)\")) @db2.DateTime(0)\n  time_ended   DateTime? @db2.DateTime(0)\n\n  @@id([tenant_id, time_started])\n}\n\nmodel CustoMensalTotal {\n  tenancy_name String?   @db2.VarChar(50)\n  tenant_id    String    @default(dbgenerated(\"()\")) @db2.VarChar(255)\n  cost_mes     Float?\n  currency     String?   @db2.VarChar(20)\n  usage_mes    Float?\n  time_started DateTime  @default(dbgenerated(\"(0000-00-00 00:00:00)\")) @db2.DateTime(0)\n  time_ended   DateTime? @db2.DateTime(0)\n\n  @@id([tenant_id, time_started])\n}\n\nmodel computeEvents {\n  id                   BigInt    @id @default(autoincrement())\n  eventType            String?   @db2.VarChar(255)\n  eventTime            DateTime? @db2.DateTime(0)\n  source               String?   @db2.VarChar(100)\n  opcRequestId         String?   @unique(map: \"opcRequestId\")\n  rawEvent             String?   @db2.LongText\n  compartmentId        String?   @db2.VarChar(255)\n  compartmentName      String?   @db2.VarChar(255)\n  eventName            String?   @db2.VarChar(255)\n  message              String?   @db2.Text\n  action               String?   @db2.VarChar(100)\n  principalName        String?   @db2.VarChar(255)\n  ipAddress            String?   @db2.VarChar(255)\n  displayName          String?   @db2.VarChar(255)\n  lifecycleState       String?   @db2.VarChar(50)\n  shape                String?   @db2.VarChar(100)\n  ocpus                Float?    @db2.Float\n  memoryInGbs          Float?    @db2.Float\n  processorDescription String?   @db2.VarChar(255)\n  createdBy            String?   @db2.VarChar(100)\n  createdOn            DateTime? @db2.DateTime(0)\n  preserveBootVolume   Boolean?\n  createdAt            DateTime  @default(now()) @db2.Timestamp(0)\n  instanceActionType   String?   @db2.VarChar(50)\n  tenancyName          String?   @db2.VarChar(255)\n}\n\nmodel identityEvents {\n  id                     BigInt    @id @default(autoincrement())\n  eventType              String?   @db2.VarChar(255)\n  eventTime              DateTime? @db2.DateTime(0)\n  source                 String?   @db2.VarChar(100)\n  opcRequestId           String?   @unique(map: \"opcRequestId\")\n  rawEvent               String?   @db2.LongText\n  adminResourceName      String?   @db2.VarChar(255)\n  adminResourceType      String?   @db2.VarChar(100)\n  compartmentName        String?   @db2.VarChar(255)\n  principalName          String?   @db2.VarChar(255)\n  action                 String?   @db2.VarChar(100)\n  message                String?   @db2.Text\n  idcsLastModifiedByName String?   @db2.VarChar(255)\n  idcsLastModifiedByType String?   @db2.VarChar(100)\n  policyName             String?   @db2.VarChar(255)\n  statements             String?   @db2.Text\n  createdAt              DateTime  @default(now()) @db2.Timestamp(0)\n  eventName              String?   @db2.VarChar(50)\n  tenancyName            String?   @db2.VarChar(255)\n}\n\nmodel networkEvents {\n  id              BigInt    @id @default(autoincrement())\n  eventType       String?   @db2.VarChar(255)\n  eventTime       DateTime? @db2.DateTime(0)\n  source          String?   @db2.VarChar(100)\n  opcRequestId    String?   @unique(map: \"opcRequestId\")\n  rawEvent        String?   @db2.LongText\n  compartmentId   String?   @db2.VarChar(255)\n  compartmentName String?   @db2.VarChar(255)\n  eventName       String?   @db2.VarChar(255)\n  message         String?   @db2.Text\n  action          String?   @db2.VarChar(100)\n  principalName   String?   @db2.VarChar(255)\n  ipAddress       String?   @db2.VarChar(100)\n  routeRules      String?   @db2.VarChar(255)\n  createdBy       String?   @db2.VarChar(100)\n  createdOn       DateTime? @db2.DateTime(0)\n  createdAt       DateTime  @default(now()) @db2.Timestamp(0)\n  tenancyName     String?   @db2.VarChar(255)\n}\n\nmodel BlockVolume {\n  tenancy_name        String?   @db2.VarChar(100)\n  tenancy_id          String    @default(dbgenerated(\"()\")) @db2.VarChar(200)\n  availability_domain String?   @db2.VarChar(100)\n  compartment_id      String?   @db2.VarChar(200)\n  display_name        String?   @db2.VarChar(60)\n  id                  String    @default(dbgenerated(\"()\")) @db2.VarChar(200)\n  lifecycle_state     String?   @db2.VarChar(50)\n  size_in_gbs         Float?\n  time_created        DateTime? @db2.DateTime(0)\n  vpus_per_gb         Int?\n  is_boot_volume      String?   @db2.Char(1)\n  is_orfao            String?   @db2.Char(1)\n  custo_mes           Float?\n\n  @@id([tenancy_id, id])\n}\n\nmodel CustoPorService {\n  tenancy_name String?   @db2.VarChar(50)\n  tenant_id    String    @default(dbgenerated(\"()\")) @db2.VarChar(255)\n  service      String    @default(dbgenerated(\"()\")) @db2.VarChar(105)\n  cost_mes     Float?\n  currency     String?   @db2.VarChar(20)\n  usage_mes    Float?\n  time_started DateTime  @default(dbgenerated(\"(0000-00-00 00:00:00)\")) @db2.DateTime(0)\n  time_ended   DateTime? @db2.DateTime(0)\n\n  @@id([tenant_id, time_started, service])\n}\n\nmodel CustoPorSkuName {\n  tenancy_name String?   @db2.VarChar(50)\n  tenant_id    String    @default(dbgenerated(\"()\")) @db2.VarChar(255)\n  sku_name     String    @default(dbgenerated(\"()\")) @db2.VarChar(105)\n  cost_mes     Float?\n  currency     String?   @db2.VarChar(20)\n  usage_mes    Float?\n  time_started DateTime  @default(dbgenerated(\"(0000-00-00 00:00:00)\")) @db2.DateTime(0)\n  time_ended   DateTime? @db2.DateTime(0)\n\n  @@id([tenant_id, time_started, sku_name])\n}\n\nmodel IdentityUsers {\n  id                                 BigInt    @id @default(autoincrement())\n  is_mfa_activated                   Boolean?\n  lifecycle_state                    String?   @db2.VarChar(50)\n  time_created                       DateTime? @db2.DateTime(0)\n  last_successful_login_time         DateTime? @db2.DateTime(0)\n  email                              String?   @db2.VarChar(255)\n  email_verified                     String?   @db2.VarChar(10)\n  can_use_api_keys                   Boolean?\n  can_use_auth_tokens                Boolean?\n  can_use_console_password           Boolean?\n  can_use_customer_secret_keys       Boolean?\n  can_use_db_credentials             Boolean?\n  can_use_o_auth2_client_credentials Boolean?\n  can_use_smtp_credentials           Boolean?\n  identity_provider_id               String?   @db2.VarChar(255)\n  tenancy_name                       String?   @db2.VarChar(255)\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel MemoryUtilization {\n  profile_name        String?   @db2.VarChar(30)\n  tenancy_name        String?   @db2.VarChar(100)\n  tenancy_id          String?   @db2.VarChar(200)\n  compartment_id      String?   @db2.VarChar(150)\n  resourceId          String?   @db2.VarChar(150)\n  region              String?   @db2.VarChar(50)\n  resourceDisplayName String?   @db2.VarChar(50)\n  metric_timestamp    DateTime? @db2.DateTime(0)\n  memory_usage        Float?\n\n  @@ignore\n}\n",
  "inlineSchemaHash": "0598457ea971a3cddf9bf1d5abb6cc38adcc16f30fdbb2803c3549e6323f22f1",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"ComputeInstances\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"availability_domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fault_domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifecycle_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shape\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memory_in_gbs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ocpus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processor_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monthly_cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubscriptionDetails\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(0000-00-00 00:00:00)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buyer_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_user_customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricing_model\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_having_usage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"used_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"line_net_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_dias_contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dias_decorridos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"tenancy_id\",\"subscription_id\",\"time_start\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TenancyDetails\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_credit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tenancy_details\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"15\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CustoDiarioTotal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost_dia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_dia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_started\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(0000-00-00 00:00:00)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_ended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"tenant_id\",\"time_started\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CustoMensalTotal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost_mes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_mes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_started\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(0000-00-00 00:00:00)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_ended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"tenant_id\",\"time_started\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"computeEvents\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opcRequestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawEvent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartmentName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principalName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifecycleState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shape\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ocpus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memoryInGbs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processorDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdOn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preserveBootVolume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instanceActionType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"identityEvents\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opcRequestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawEvent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adminResourceName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adminResourceType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartmentName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principalName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcsLastModifiedByName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcsLastModifiedByType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"policyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statements\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"networkEvents\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opcRequestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawEvent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartmentName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principalName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"routeRules\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdOn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BlockVolume\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"availability_domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"60\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifecycle_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size_in_gbs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vpus_per_gb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_boot_volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_orfao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custo_mes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"tenancy_id\",\"id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CustoPorService\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"105\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost_mes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_mes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_started\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(0000-00-00 00:00:00)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_ended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"tenant_id\",\"time_started\",\"service\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CustoPorSkuName\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sku_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"105\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost_mes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_mes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_started\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(0000-00-00 00:00:00)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_ended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"tenant_id\",\"time_started\",\"sku_name\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"IdentityUsers\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_mfa_activated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifecycle_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_successful_login_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_use_api_keys\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_use_auth_tokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_use_console_password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_use_customer_secret_keys\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_use_db_credentials\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_use_o_auth2_client_credentials\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_use_smtp_credentials\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identity_provider_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_2: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_2'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_2 || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

