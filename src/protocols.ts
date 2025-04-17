import { ComputeInstances } from "../prisma/generated/banco2";

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
    orphan: string[]| null,
    cost_history: string[]| null,
    cost_services: string[] | null,
    top5_costVM: Top5VMCost[],
    creditsOCI: CreditsOCI[]
}

export type Top5VMCost = {
    tenancy_name: string;
    display_name: string;
    id: string;
    lifecycle_state: string;
    hourly_cost: number;
    dailyCost: number;
}

export type CreditsOCI = {
    tenancy_name: string;
    line_net_amount: number;
    used_amount: number;
    available_amount: number;
    used_percentage: number;
    date_percentage: number;
}