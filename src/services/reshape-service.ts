import { getReshapeRepository } from "@/repositories";

export async function getReshapeService() {
    const response = await getReshapeRepository();
    console.log(response?.length);
    return response;
}