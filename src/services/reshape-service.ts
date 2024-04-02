import { getReshapeRepository } from "@/repositories";

export async function getReshapeService() {
    const response = await getReshapeRepository();
    return response;
}