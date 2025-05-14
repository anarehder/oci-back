import { prisma2 } from "../config/database";

export async function getNotificationsRepository(){
    const computeInstances = await prisma2.computeEvents.findMany();

    return computeInstances;
}

// export async function getNotificationsByTenancyRepository(tenancies: string[]){
//     const computeInstances = await prisma2.notifications.findMany({
//         where: {
//           tenancy_name: {
//             in: tenancies,
//           },
//         },
//         take: 50,
//       });

//     return computeInstances;
// }