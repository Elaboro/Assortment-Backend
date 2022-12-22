import {
  NextFunction,
  Request,
  Response,
} from "express";
import { ValidationError } from "joi";
import { HttpStatus } from "../enum/HttpStatus";

export const errorValidation = (
  err: ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err.isJoi) return next(err);

  const error = {
    status: HttpStatus.BAD_REQUEST,
    message: err.message || "Unknown validation error",
  }

  return res.status(error.status).json({
    error: {
      message: error.message
    }
  });
};
