import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

export let db: mysql.Pool;
export let db2: mysql.Pool;

export function connectDbs(): void {
  db = mysql.createPool(process.env.DATABASE_URL_1!);
  db2 = mysql.createPool(process.env.DATABASE_URL_2!);
}