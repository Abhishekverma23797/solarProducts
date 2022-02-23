//Error Handling in Backend

//Inheriting our class with error
class ErrorHandler extends Error{

    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor);
    }
} 

module.exports = ErrorHandler