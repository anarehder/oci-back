import { getUserDetails } from "./user-service";
import { getNotificationsByTenancyRepository, getNotificationsRepository } from "../repositories";

export async function getNotificationsService(userToken: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getNotificationsRepository();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getNotificationsByTenancyRepository(tenancies);
        return response;
    }
    
}