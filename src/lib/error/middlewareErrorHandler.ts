import {
  NextFunction,
  Request,
  Response,
} from "express";
import { HttpStatus } from "../enum/HttpStatus";
import { BaseError } from "./Error";

export const errorHandler = (
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const error = {
    status: err.status || HttpStatus.INTERNAL_SERVER_ERROR,
    message: err.message || "Internal Server Error",
  }

  return res.status(err.status).json({
    error: {
      message: error.message
    }
  });
};
