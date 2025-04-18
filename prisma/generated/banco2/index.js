
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
} = require('./runtime/library.js')


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




  const path = require('path')

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
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/banco2\"\n}\n\ndatasource db2 {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_2\")\n}\n\nmodel ComputeInstances {\n  tenancy_name          String?   @db2.VarChar(50)\n  tenancy_id            String?   @db2.VarChar(255)\n  id                    String    @id @default(dbgenerated(\"()\")) @db2.VarChar(150)\n  display_name          String?   @db2.VarChar(50)\n  compartment_id        String?   @db2.VarChar(150)\n  availability_domain   String?   @db2.VarChar(50)\n  fault_domain          String?   @db2.VarChar(50)\n  region                String?   @db2.VarChar(30)\n  lifecycle_state       String?   @db2.VarChar(20)\n  shape                 String?   @db2.VarChar(30)\n  memory_in_gbs         Float?\n  ocpus                 Int?\n  processor_description String?   @db2.VarChar(50)\n  time_created          DateTime? @db2.DateTime(0)\n  CreatedBy             String?   @db2.VarChar(200)\n  hourly_cost           Float?\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel CpuUtilization {\n  profile_name        String?   @db2.VarChar(30)\n  compartment_id      String?   @db2.VarChar(150)\n  region              String?   @db2.VarChar(50)\n  resourceDisplayName String?   @db2.VarChar(50)\n  resourceId          String?   @db2.VarChar(150)\n  metric_timestamp    DateTime? @db2.DateTime(0)\n  cpu_usage           Float?\n\n  @@ignore\n}\n\nmodel SubscriptionDetails {\n  tenancy_name        String?   @db2.VarChar(50)\n  tenancy_id          String    @default(dbgenerated(\"()\")) @db2.VarChar(150)\n  home_region         String?   @db2.VarChar(20)\n  subscription_id     String    @default(dbgenerated(\"()\")) @db2.VarChar(20)\n  service_name        String?   @db2.VarChar(30)\n  currency            String?   @db2.VarChar(10)\n  time_start          DateTime  @default(dbgenerated(\"(0000-00-00 00:00:00)\")) @db2.DateTime(0)\n  time_end            DateTime? @db2.DateTime(0)\n  admin_email         String?   @db2.VarChar(50)\n  buyer_email         String?   @db2.VarChar(50)\n  end_user_customer   String?   @db2.VarChar(100)\n  payment_method      String?   @db2.VarChar(50)\n  pricing_model       String?   @db2.VarChar(50)\n  product             String?   @db2.VarChar(50)\n  is_having_usage     String?   @db2.VarChar(10)\n  total_value         Float?\n  used_amount         Float?\n  line_net_amount     Float?\n  available_amount    Float?\n  total_dias_contrato Int?\n  dias_decorridos     Int?\n\n  @@id([tenancy_id, subscription_id, time_start])\n}\n\nmodel TenancyDetails {\n  tenancy_name    String?   @db2.VarChar(50)\n  tenancy_id      String    @id @db2.VarChar(150)\n  home_region     String?   @db2.VarChar(20)\n  subscription_id String?   @db2.VarChar(20)\n  service_name    String?   @db2.VarChar(30)\n  currency        String?   @db2.VarChar(10)\n  time_start      DateTime? @db2.DateTime(0)\n  time_end        DateTime? @db2.DateTime(0)\n  tenancy_status  String?   @db2.VarChar(10)\n  total_credit    Float?\n}\n\nmodel audit {\n  id               Int      @id @default(autoincrement())\n  event_id         String   @db2.VarChar(255)\n  event_type       String   @db2.VarChar(255)\n  event_time       DateTime @db2.DateTime(0)\n  source           String   @db2.VarChar(255)\n  compartment_id   String   @db2.VarChar(255)\n  compartment_name String   @db2.VarChar(255)\n  event_name       String   @db2.VarChar(255)\n  ip_address       String   @db2.VarChar(45)\n  principal_id     String   @db2.VarChar(255)\n  principal_name   String   @db2.VarChar(255)\n  tenant_id        String   @db2.VarChar(255)\n  action           String   @db2.VarChar(255)\n  message          String   @db2.Text\n  tenancy_name     String   @db2.VarChar(255)\n}\n\nmodel notifications {\n  id                 Int      @id @default(autoincrement())\n  event_id           String   @db2.Text\n  event_type         String   @db2.Text\n  event_time         String   @db2.Text\n  compartment_id     String   @db2.Text\n  compartment_name   String   @db2.Text\n  resource_name      String   @db2.Text\n  created_by         String   @db2.Text\n  tenancy_name       String   @db2.Text\n  timestamp          DateTime @default(now()) @db2.Timestamp(0)\n  instanceActionType String?  @db2.Text\n  type_vm            String?  @db2.Text\n}\n\nmodel tenancy_details {\n  tenancy_id   String   @id @db2.VarChar(255)\n  tenancy_name String?  @db2.VarChar(255)\n  home_region  String?  @db2.VarChar(100)\n  service_name String?  @db2.VarChar(255)\n  currency     String?  @db2.VarChar(10)\n  time_start   DateTime @db2.DateTime(0)\n  time_end     DateTime @db2.DateTime(0)\n  status       String?  @db2.VarChar(50)\n  total_value  Decimal? @db2.Decimal(15, 2)\n}\n",
  "inlineSchemaHash": "35fa08211a6051cb55a94bcb6a05dc2f2347836767b903aaf9a328aa94b04d6a",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/banco2",
    "generated/banco2",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"ComputeInstances\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"availability_domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fault_domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifecycle_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shape\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memory_in_gbs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ocpus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processor_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hourly_cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubscriptionDetails\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(0000-00-00 00:00:00)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buyer_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_user_customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricing_model\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_having_usage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"used_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"line_net_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_dias_contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dias_decorridos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"tenancy_id\",\"subscription_id\",\"time_start\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TenancyDetails\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_credit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"audit\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartment_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"45\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principal_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"notifications\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compartment_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instanceActionType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_vm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tenancy_details\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tenancy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenancy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"15\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/generated/banco2/libquery_engine-rhel-openssl-1.1.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/banco2/schema.prisma")
