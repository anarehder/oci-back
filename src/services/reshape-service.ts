import { conflictError } from "@/errors";
import { getLast30ReshapeRepository, getReshapeRepository, getUserDetailsByTokenRepository } from "../repositories";

export async function getReshapeService(userToken: string, tenancy: string) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetailsByTokenRepository(token);

    if (userDetails.isAdmin === 0 && userDetails.tenancy !== tenancy){
        throw conflictError("This user can't see informations of this client");
    }
    const response = await reshapeInfo(tenancy);

    return response;
}

async function reshapeInfo(tenancy: string){
    const response = await getReshapeRepository(tenancy);
    const response30 = await getLast30ReshapeRepository(tenancy);

    for(let i=0; i<response.length; i++){ 
        const itemEncontrado = response30.find(item => response[i].OCID === item.OCID);
        
        let reshape: string;
        if(isNaN(itemEncontrado.MaxCPU) && isNaN(itemEncontrado.MaxMEM)){
            reshape = "-";
        } else {
            reshape = reshapeCalculation(Number(response[i].OCPU), Number(itemEncontrado.MaxCPU), Number(itemEncontrado.MeanCPU), Number(itemEncontrado.MaxMEM));
        }
        const itemReshape = {...itemEncontrado, reshape};
        response[i].last30 = itemReshape;
    }
    return response;
}

function reshapeCalculation(OCPU: number, maxCPU: number, meanCPU: number, maxMEM: number) {
    let reshape;
    if (OCPU > 1) {
        if (maxCPU < 90 && meanCPU < 60) {
            if (maxMEM <= 60) {
                reshape = " -CPU -MEM";
            } else if (60 < maxMEM && maxMEM <= 90) {
                reshape = " -CPU";
            } else {
                reshape = " -CPU +MEM";
            }
        } else if (maxCPU >= 90 && meanCPU >= 90) {
            if (maxMEM <= 60) {
                reshape = " +CPU -MEM";
            } else if (60 < maxMEM && maxMEM <= 90) {
                reshape = " +CPU";
            } else {
                reshape = " +CPU +MEM";
            }
        } else {
            if (maxMEM < 60) {
                reshape = " -MEM";
            } else if (60 < maxMEM && maxMEM <= 90) {
                reshape = "-";
            } else {
                reshape = " +MEM";
            }
        }
    } else {
        if (maxCPU >= 90 && meanCPU >= 90) {
            if (maxMEM <= 60) {
                reshape = " +CPU -MEM";
            } else if (60 < maxMEM && maxMEM <= 90) {
                reshape = " +CPU";
            } else {
                reshape = " +CPU +MEM";
            }
        } else {
            if (maxMEM < 60) {
                reshape = " -MEM";
            } else if (60 < maxMEM && maxMEM <= 90) {
                reshape = "-";
            } else {
                reshape = " +MEM";
            }
        }
    }
    return reshape;
}
