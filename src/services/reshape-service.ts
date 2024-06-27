import { conflictError } from "../errors";
import { getLast30ReshapeRepository, getLastReshapeDay, getReshapeRepository, getUserDetailsByTokenRepository } from "../repositories";
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
    const lastDay = await getLastReshapeDay();
    const response = await getReshapeRepository(tenancy, lastDay);
    
    const response30 = await getLast30ReshapeRepository(tenancy);
    const prices: any[] = await getPriceService();

    for(let i=0; i<response.length; i++){ 
        
        const itemEncontrado = response30.find(item => response[i].OCID === item.OCID);
        const bestShape = 'VM.Standard.E5.Flex';
        let reshape: string;
        let reshape_COM: string;
        
        if(isNaN(itemEncontrado.MaxOCPU) && isNaN(itemEncontrado.MaxMEM)){
            reshape = "-";
        } else {
            reshape = reshapeCalculation(Number(response[i].OCPU), Number(itemEncontrado.MaxOCPU), Number(itemEncontrado.MeanOCPU), Number(itemEncontrado.MaxMEM));
        }
        // de cada item calcular o reshape
        const newOCPU = estimateReshapeCPUValues(reshape, Number(response[i].OCPU), Number(itemEncontrado.MaxOCPU), Number(itemEncontrado.MeanOCPU)); 
        const newMEM = estimateReshapeMEMValues(reshape, Number(response[i].Memory), Number(itemEncontrado.MaxMEM), Number(itemEncontrado.MeanMEM)); 
        const newPrice = await estimatePrice(response[i].Shape, newMEM, newOCPU, prices);
        const BestShapePrice = await estimatePrice(bestShape, newMEM, newOCPU, prices);

        if(isNaN(itemEncontrado.MaxOCPU_COM) && isNaN(itemEncontrado.MaxMEM_COM)){
            reshape_COM = "-";
        } else {
            reshape_COM = reshapeCalculation(Number(response[i].OCPU), Number(itemEncontrado.MaxOCPU_COM), Number(itemEncontrado.MeanOCPU_COM), Number(itemEncontrado.MaxMEM_COM));
        }
        // de cada item calcular o reshape
        const newOCPU_COM = estimateReshapeCPUValues(reshape_COM, Number(response[i].OCPU), Number(itemEncontrado.MaxOCPU_COM), Number(itemEncontrado.MeanOCPU_COM)); 
        const newMEM_COM = estimateReshapeMEMValues(reshape, Number(response[i].Memory), Number(itemEncontrado.MaxMEM_COM), Number(itemEncontrado.MeanMEM_COM)); 
        const newPrice_COM = await estimatePrice(response[i].Shape, newMEM_COM, newOCPU_COM, prices);
        const BestShapePrice_COM = await estimatePrice(bestShape, newMEM_COM, newOCPU_COM, prices);

        const itemReshape = {...itemEncontrado, reshape, newOCPU, newMEM, newPrice, BestShapePrice, reshape_COM, newOCPU_COM, newMEM_COM, newPrice_COM, BestShapePrice_COM};
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