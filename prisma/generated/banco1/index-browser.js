
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

exports.Prisma.ACCERTETECNOLOGIAScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.CARAJASScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.CHOLDINGScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.COMPLEMScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.ClientsScalarFieldEnum = {
  id: 'id',
  Client: 'Client',
  Tenancy: 'Tenancy'
};

exports.Prisma.ContractsOCIScalarFieldEnum = {
  id: 'id',
  Tenancy: 'Tenancy',
  Start: 'Start',
  End: 'End',
  Price: 'Price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DFSHOLDINGScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.ENCOREScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.FGRScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.ICIPEScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.Log_tableScalarFieldEnum = {
  id: 'id',
  info: 'info',
  createdAt: 'createdAt'
};

exports.Prisma.PAPELARIATRIBUTARIAScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.PMZScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.RIOVERMELHOScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.RIZZOScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.SAFETYDOCSScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.SALVADORScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  isAdmin: 'isAdmin',
  client: 'client',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WORLDSEGScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ACCERTETECNOLOGIAOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.CARAJASOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.CHOLDINGOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.COMPLEMOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.ClientsOrderByRelevanceFieldEnum = {
  Client: 'Client',
  Tenancy: 'Tenancy'
};

exports.Prisma.ContractsOCIOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Start: 'Start',
  End: 'End',
  Price: 'Price'
};

exports.Prisma.DFSHOLDINGOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.ENCOREOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.FGROrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.ICIPEOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.Log_tableOrderByRelevanceFieldEnum = {
  info: 'info'
};

exports.Prisma.PAPELARIATRIBUTARIAOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.PMZOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.RIOVERMELHOOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.RIZZOOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.SAFETYDOCSOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.SALVADOROrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};

exports.Prisma.SessionOrderByRelevanceFieldEnum = {
  token: 'token'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  username: 'username',
  password: 'password',
  client: 'client'
};

exports.Prisma.WORLDSEGOrderByRelevanceFieldEnum = {
  Tenancy: 'Tenancy',
  Client: 'Client',
  Day: 'Day',
  VM_Name: 'VM_Name',
  OCID: 'OCID',
  AD: 'AD',
  Compartment: 'Compartment',
  InstanceType: 'InstanceType',
  Status: 'Status',
  OS: 'OS',
  Shape: 'Shape',
  OCPU: 'OCPU',
  Memory: 'Memory',
  MonthlyMachinePrice: 'MonthlyMachinePrice',
  MonthlyOSPrice: 'MonthlyOSPrice',
  MonthlyDiskPrice: 'MonthlyDiskPrice',
  Storage: 'Storage',
  MaxOCPU: 'MaxOCPU',
  MeanOCPU: 'MeanOCPU',
  MaxMEM: 'MaxMEM',
  MeanMEM: 'MeanMEM',
  MaxOCPU_COM: 'MaxOCPU_COM',
  MeanOCPU_COM: 'MeanOCPU_COM',
  MaxMEM_COM: 'MaxMEM_COM',
  MeanMEM_COM: 'MeanMEM_COM'
};


exports.Prisma.ModelName = {
  ACCERTETECNOLOGIA: 'ACCERTETECNOLOGIA',
  CARAJAS: 'CARAJAS',
  CHOLDING: 'CHOLDING',
  COMPLEM: 'COMPLEM',
  Clients: 'Clients',
  ContractsOCI: 'ContractsOCI',
  DFSHOLDING: 'DFSHOLDING',
  ENCORE: 'ENCORE',
  FGR: 'FGR',
  ICIPE: 'ICIPE',
  Log_table: 'Log_table',
  PAPELARIATRIBUTARIA: 'PAPELARIATRIBUTARIA',
  PMZ: 'PMZ',
  RIOVERMELHO: 'RIOVERMELHO',
  RIZZO: 'RIZZO',
  SAFETYDOCS: 'SAFETYDOCS',
  SALVADOR: 'SALVADOR',
  Session: 'Session',
  User: 'User',
  WORLDSEG: 'WORLDSEG'
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
