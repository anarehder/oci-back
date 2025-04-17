import { ApplicationError } from "../protocols";

export function unauthorizedError(message?: string): ApplicationError {
    return {
        name: "UnauthorizedError",
        message: message || "You must be signed in to continue", // Usa o valor de message, se fornecido; caso contrário, usa a mensagem padrão.
    };
}