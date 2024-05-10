import { getContractsRespository } from "../repositories";

export async function getContractsService() {
    const response = await getContractsRespository();
    return response;
}