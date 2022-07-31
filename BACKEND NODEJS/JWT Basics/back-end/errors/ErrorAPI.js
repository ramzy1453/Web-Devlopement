export default class ErrorAPI extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}