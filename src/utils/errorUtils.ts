type AppErrorTypes =
  | "conflict"
  | "not_found"
  | "unauthorized"
  | "wrong_schema"
  | "bad_request";
  
export interface AppError {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
    let statusCode: number;
    switch (type) {
        case 'not_found':
            statusCode = 404;
            break;
        case 'wrong_schema':
            statusCode = 422;
            break;
        case 'bad_request':
            statusCode = 400;
            break;
        case 'unauthorized':
            statusCode = 401;
            break;
        case 'conflict':
            statusCode = 409;
        default:
            statusCode = 500;
    }
    return statusCode;
}

export function badRequestError(message?: string): AppError {
  return { type: "bad_request", message };
}

export function conflictError(message?: string): AppError {
  return { type: "conflict", message };
}

export function notFoundError(message?: string): AppError {
  return { type: "not_found", message };
}

export function unauthorizedError(message?: string): AppError {
  return { type: "unauthorized", message };
}

export function wrongSchemaError(message?: string): AppError {
  return { type: "wrong_schema", message };
}
