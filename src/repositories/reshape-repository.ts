import { db } from "../config/database";
import { RowDataPacket } from "mysql2";

export async function getLastReshapeDay(){
    const [response] = await db.query<RowDataPacket[]>(`
    SELECT Day
    FROM ACCERTETECNOLOGIA
    ORDER BY DAY DESC
    LIMIT 1;`);
    
    const lastDay: string = response[0].Day;

    return lastDay;
}

export async function getReshapeRepository(tenancy: string, day: string) {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM ${tenancy}
    WHERE Day = ?
    ORDER BY Status ASC
    ;`, [day]);
    return response[0];
}

export async function getLast30ReshapeRepository(tenancy: string){
    const response = await db.query<RowDataPacket[]>(`
    SELECT 
        group_concat(Distinct VM_Name) AS VM_Name,
        OCID,
        COUNT(*) AS DaysCount,
        MAX(MaxOCPU) AS MaxOCPU,
        MAX(MaxMEM) AS MaxMEM,
        ROUND(AVG(MeanMEM), 2) AS MeanMEM,    
        ROUND(AVG(MeanOCPU), 2) AS MeanOCPU,
        MAX(MaxOCPU_COM) AS MaxOCPU_COM,
        MAX(MaxMEM_COM) AS MaxMEM_COM,
        ROUND(AVG(MeanMEM_COM), 2) AS MeanMEM_COM,    
        ROUND(AVG(MeanOCPU_COM), 2) AS MeanOCPU_COM
    FROM 
        ${tenancy}
    WHERE 
        DATE(Day) > (CURDATE() - INTERVAL 31 DAY)
    GROUP BY 
        OCID
    ;`);
    return response[0];
}
