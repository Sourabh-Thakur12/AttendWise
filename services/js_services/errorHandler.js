import { json } from "express";
import AppError from "../../shared/schemas/errorSchema.json" assert {type: "json"};

// class appError extends AppError{
//     constructor({code, message, details = {}}){
//         super(message) // call parent constructor
//         this.code = code
//         this.details = details
//     }
// }

// TODO: create error handler function
// console.log(AppError)

//  Simple function for now
export const handleError = ({success, code, message}) => {
    return json({
        "success": success,
        "message": message},
        {status: code}
    )
}