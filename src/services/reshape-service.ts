import { conflictError } from "../errors";
import { getLast30ReshapeRepository, getReshapeRepository, getUserDetailsByTokenRepository } from "../repositories";
import { estimatePrice } from "./calculate-reshape-prices-service";
import { estimateCPUincrease, estimateCPUreduce, estimateMEMincrease, estimateMEMreduce } from "./calculate-reshape-values-service";
import { getPriceService } from "./price-service";

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
    const prices: any[] = await getPriceService();
    for(let i=0; i<response.length; i++){ 
        const itemEncontrado = response30.find(item => response[i].OCID === item.OCID);
        const bestShape = 'VM.Standard.E5.Flex';
        let reshape: string;
        if(isNaN(itemEncontrado.MaxCPU) && isNaN(itemEncontrado.MaxMEM)){
            reshape = "-";
        } else {
            reshape = reshapeCalculation(Number(response[i].OCPU), Number(itemEncontrado.MaxCPU), Number(itemEncontrado.MeanCPU), Number(itemEncontrado.MaxMEM));
        }
        // de cada item calcular o reshape
        const newCPU = estimateReshapeCPUValues(reshape, Number(response[i].OCPU), Number(itemEncontrado.MaxCPU), Number(itemEncontrado.MeanCPU)); 
        const newMEM = estimateReshapeMEMValues(reshape, Number(response[i].MEMORY_GB), Number(itemEncontrado.MaxMEM), Number(itemEncontrado.MeanMEM)); 
        const newPrice = await estimatePrice(response[i].Shape, newMEM, newCPU, prices);
        const BestShapePrice = await estimatePrice(bestShape, newMEM, newCPU, prices);
        const itemReshape = {...itemEncontrado, reshape, newCPU, newMEM, newPrice, BestShapePrice};
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

function estimateReshapeCPUValues(reshape: string, OCPU: number, maxCPU: number, meanCPU: number) {
    let newOCPU;

    if (reshape.includes("-CPU")) {
        newOCPU = estimateCPUreduce(maxCPU, meanCPU, OCPU);
    } else if (reshape.includes("+CPU")) {
        newOCPU = estimateCPUincrease(maxCPU, meanCPU, OCPU);
    } else {
        return Number(OCPU);
    }
    return newOCPU;
}

function estimateReshapeMEMValues(reshape: string, MEM: number, maxMEM: number, meanMEM: number) {
    let newMEM;

    if (reshape.includes("-MEM")) {
        newMEM = estimateMEMreduce(maxMEM, MEM);
    } else if (reshape.includes("+MEM")) {
        newMEM = estimateMEMincrease(meanMEM, MEM);
    } else {
        return Number(MEM);
    }
    return newMEM;
}