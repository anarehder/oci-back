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

export type LoginParams = Omit<NewUserInput, 'name'>;
