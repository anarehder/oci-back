import { BlockVolume, ComputeInstances, CustoDiarioTotal, CustoPorService, CustoPorSkuName, SubscriptionCommit, SubscriptionDetails } from "../prisma/generated/banco2";

export type ApplicationError = {
    name: string;
    message: string;
};

export type User = {
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;
    client: string;
    name: string;
}

export type UserTenancy = {
    userId: number;
    username: string;
    isAdmin: number;
    client: string;
    tenancy: string;
}

export type NewUserInput = Omit<User, 'id'>;

export type LoginParams = {
    username: string;
    password: string;
}

export type SessionParams = {
    userId: number;
    token: string;
}

export type UserLogin = {
    userId: number;
    username: string;
    isAdmin: boolean;
    client: string;
    token: string;
    name: string;
}

export type ReshapeInput = {
    tenancy: string;
}

export type JoinDashboardsInput = {
    tenancy1: string;
    tenancy2: string;
    tenancy3?: string;
}

export type DashboardsOutput = {
    tenancies: string[],
    user: string[]| null,
    computeInstances: ComputeInstances[],
    top5_costVM: Top5VMCost[],
    orphan: BlockVolume[],
    cost_services: CustoPorService[] | SeviceCost[] ,
    cost_SKU: CustoPorSkuName[] | SeviceCost[] ,
    cost_history?: MonthCost[],
    cost_daily?: CustoDiarioTotal[],
    subscriptionDetails?: SubscriptionDetails[],
    creditsOCI?: CreditsOCI[],
    commitDetails?: SubscriptionCommit[]
}

export type Top5VMCost = {
    tenancy_name: string;
    display_name: string;
    id: string;
    lifecycle_state: string;
    monthly_cost: number;
}

export type CreditsOCI = {
    tenancy_name: string;
    line_net_amount: number;
    used_amount: number;
    available_amount: number;
    used_percentage: number;
    date_percentage: number;
    dias_decorridos?: number;
    total_dias_contrato?: number;
}

export type CpuUtilization = {
    profile_name: string;
    compartment_id: string;
    region: string;
    resourceDisplayName: string;
    resourceId: string;
    metric_timestamp: Date;
    cpu_usage: number;
};

export type CPUMEM_avg = {
    resourceDisplayName: string;
    tenancy_name: string;
    avg_cpu_usage?: number;
    avg_memory_usage?: number;
};


export type MemoryUtilization = {
    profile_name: string;
    tenancy_name: string;
    tenancy_id?: string;
    compartment_id?: string;
    resourceId: string;
    region: string;
    resourceDisplayName: string;
    metric_timestamp: Date;
    memory_usage: number;
  };

export type MonthCost = {
    tenancy_name: string;
    time_started: Date;
    time_ended: Date;
    cost_mes: number;
    usage_mes: number;
  };

export type SeviceCost = {
    service?: string;
    sku_name?: string;
    tenancies?: string;
    total_cost?: number;
    total_usage?: number;
    currencies?: string;
    time_started?: string;
    time_ended?: string;
    _sum?: {
        cost_mes: number;
        usage_mes: number;
    };
  };