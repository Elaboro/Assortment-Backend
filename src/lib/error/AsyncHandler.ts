import {
  NextFunction,
  Request,
  Response,
} from "express";

export const asyncHandler = (func) => (
  req: Request,
  res: Response,
  next: NextFunction,
  ) => {
  return Promise.resolve(
    func(req, res, next)
  ).catch(next);
};
