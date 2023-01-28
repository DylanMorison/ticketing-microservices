import { ValidationError } from "express-validator"

class RequestValidationError extends Error {
  constructor(private errors: ValidationError[]) {
    super()

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }
}

export { RequestValidationError }
