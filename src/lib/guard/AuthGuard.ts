import {
  Request,
  Response ,
} from "express";
import jwt,
{
  JwtPayload,
} from 'jsonwebtoken';
import { cfg } from "../../../config/environment";
import { User } from "../../module/user/User";
import { UnauthorizedError } from "../error/Error";

type UserPayload = JwtPayload & User;

const AuthOnlyGuard = (req: Request, res: Response) => {
  const auth_header: string = req?.headers?.authorization;
  const bearer: string = auth_header?.split(' ')[0]?.toLowerCase();
  const token: string = auth_header?.split(' ')[1];

  if(bearer !== "bearer" || !token) {
    throw new UnauthorizedError("User is unauthorized. Invalid token or missing");
  }

  try {
    const user_payload = jwt.verify(token, cfg.app.JWT_SECRET_KEY) as UserPayload;
    res.locals.user_payload = user_payload;
  } catch(e) {
    throw new UnauthorizedError("User is unauthorized. Invalid token or missing");
  }
};

export default AuthOnlyGuard;