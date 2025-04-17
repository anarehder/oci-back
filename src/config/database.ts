import { PrismaClient as PrismaClientBanco1 } from "../../prisma/generated/banco1";
import { PrismaClient as PrismaClientBanco2 } from "../../prisma/generated/banco2";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

export let db: mysql.Pool;
export let db2: mysql.Pool;

export function connectDbs(): void {
  db = mysql.createPool(process.env.DATABASE_URL_1!);
  db2 = mysql.createPool(process.env.DATABASE_URL_2!);
}

export const prisma1 = new PrismaClientBanco1();
export const prisma2 = new PrismaClientBanco2();