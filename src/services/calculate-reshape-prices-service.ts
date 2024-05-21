const Shapes: any = {
    'VM.Standard.E3.Flex': {'CPU': 'B92306','MEM': 'B92307'},
    'VM.Standard.E4.Flex': {'CPU': 'B93113','MEM': 'B93114'},
    'VM.Standard.E5.Flex': {'CPU': 'B97384','MEM': 'B97385'},
    'VM.Standard.A1.Flex': {'CPU': 'B93297','MEM': 'B93298'},
    'VM.DenseIO.E4.Flex': {'CPU': 'B93121','MEM': 'B93122'},
    'VM.Optimized3.Flex': {'CPU': 'B93311','MEM': 'B93312'},
    'VM.Standard3.Flex': {'CPU': 'B94176','MEM': 'B94177'},
    'VM.Standard.E2.1.Micro': {'CPU': 'B91444'},
    'VM.Standard.E2.2': {'CPU': 'B91444'},
    'VM.Standard.E2.4': {'CPU': 'B91444'},
    'VM.DenseIO1.4': {'CPU': 'B88516'},
    'VM.DenseIO1.8': {'CPU': 'B88516'},
    'VM.DenseIO2.8': {'CPU': 'B88516'},
    'VM.DenseIO1.16': {'CPU': 'B88516'},
    'VM.DenseIO2.16': {'CPU': 'B88516'},
    'VM.DenseIO2.24': {'CPU': 'B88516'},
    'VM.Standard2.1': {'CPU': 'B88514'},
    'VM.Standard2.2': {'CPU': 'B88514'},
    'VM.Standard2.4': {'CPU': 'B88514'},
    'VM.Standard2.8': {'CPU': 'B88514'},
    'VM.Standard2.16': {'CPU': 'B88514'},
    'VM.Standard2.24': {'CPU': 'B88514'},
}

export async function estimatePrice(shape: string, MEM: number, OCPU: number, prices: any[]) {    
    const CPU_PartNumber = Shapes[shape].CPU;
    const CPU_objectPrice = prices.find(item => item.partNumber === CPU_PartNumber);
    const CPU_hourValue = CPU_objectPrice.currencyCodeLocalizations[0].prices[0].value;
    const CPU_totalPrice = OCPU*720*CPU_hourValue;
    
    if (shape.includes("Flex")){
        const MEM_PartNumber = Shapes[shape].MEM;
        const MEM_objectPrice = prices.find(item => item.partNumber === MEM_PartNumber);
        const MEM_hourValue = MEM_objectPrice.currencyCodeLocalizations[0].prices[0].value;
        const MEM_totalPrice = MEM*720*MEM_hourValue;
        const total = MEM_totalPrice+CPU_totalPrice;

        return total;
    } else {
        return CPU_totalPrice;
    }
    
}