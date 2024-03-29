import { NextFunction, Request, Response } from "express"
import { DatabaseConnectionError } from "../errors/databaseConnectionError"
import { RequestValidationError } from "../errors/requestValidationError"

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log("handling this error as a request validation error")
  }

  if (err instanceof DatabaseConnectionError) {
    console.log("handling this error as a db connection error")
  }

  res.status(400).send({
    message: err.message,
  })
}

export { errorHandler }
