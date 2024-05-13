import { db } from "../config/database";
import { RowDataPacket } from "mysql2";

export async function getReshapeRepository(tenancy: string) {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM ${tenancy}
    WHERE DATE(Day) > (CURDATE() - INTERVAL 2 DAY)
    ORDER BY Status ASC
    ;`);

    return response[0];
    
}

export async function getLast30ReshapeRepository(tenancy: string){
    const response = await db.query<RowDataPacket[]>(`
    SELECT 
        group_concat(Distinct Name) AS Name,
        OCID,
        COUNT(*) AS DaysCount,
        MAX(MaxCPU) AS MaxCPU,
        MAX(MaxMEM) AS MaxMEM,
        ROUND(AVG(MeanMEM), 2) AS MeanMEM,    
        ROUND(AVG(MeanCPU), 2) AS MeanCPU
    FROM 
        ${tenancy}
    WHERE 
        DATE(Day) > (CURDATE() - INTERVAL 31 DAY)
    GROUP BY 
        OCID
    ;`);
    return response[0];
}

export async function getResha2peRepository(){
    const response = await db.query<RowDataPacket[]>(`
    SELECT 
    hstgrp.groupid,
    hstgrp.name AS groupName,
    hosts_groups.hostid,
    hosts.host,
    hosts.name AS hostName,
    items.itemid,
    items.name,
    items.units,
    items.delay
    FROM 
        hstgrp
    JOIN 
        hosts_groups ON hstgrp.groupid = hosts_groups.groupid
    JOIN 
        hosts ON hosts_groups.hostid = hosts.hostid
    JOIN
        items ON items.hostid = hosts.hostid
    WHERE 
        hstgrp.name LIKE ? AND items.name LIKE ? AND items.name LIKE ?
    ORDER BY hosts.name ASC
    `,
    ['DELLYS/FW','%Interface port%','%Bits%']
    );

    return response[0];
}