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

export type NewUserInput = Omit<User, 'id'>;

export type LoginParams = {
    username: string;
    password: string;
}

export type UserLogin = {
    id: number;
    username: string;
    isAdmin: boolean;
    client: string;
    token: string;
}