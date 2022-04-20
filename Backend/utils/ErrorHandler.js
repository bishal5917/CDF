class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statuscode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports=ErrorHandler