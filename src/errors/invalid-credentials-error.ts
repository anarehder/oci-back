import { ApplicationError } from "../protocols";

export function invalidCredentialsError(): ApplicationError {
    return {
        name: "InvalidCredentialsError",
        message: "Incorrect username or password",
    };
}