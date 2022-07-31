import { StatusCodes } from "http-status-codes"

class ErrorAPI extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}
export class UnauthorizedErrorAPI extends ErrorAPI {
    constructor(message) {
        super(message, StatusCodes.UNAUTHORIZED)
    }
}
export class NotFoundErrorAPI extends ErrorAPI {
    constructor(message) {
        super(message, StatusCodes.NOT_FOUND)
    }
}
export class InternalServerErrorAPI extends ErrorAPI {
    constructor(message) {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR)
    }
}