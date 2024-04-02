import { db } from "@/config/database";
import { RowDataPacket } from "mysql2";

export async function getReshapeRepository() {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM TesteAccerte3
    WHERE DATE(Time) = CURDATE() - INTERVAL 0 DAY
    ORDER BY Time DESC
    `);

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