import {
  Request,
  Response,
  Router,
} from "express";
import { HttpStatus } from "../../lib/enum/HttpStatus";
import { asyncHandler } from "../../lib/error/AsyncHandler";
import { AuthService } from "./AuthService";

const authService = new AuthService();

const router: Router = Router();

router.get(
  "/auth/register",
  asyncHandler(async (req: Request, res: Response) => {
    const token: string = await authService.register();

    res.status(HttpStatus.CREATED)
    .json({token});
  })
);

router.post(
  "/auth/login",
  asyncHandler(async (req: Request, res: Response) => {
    const token: string = await authService.login();

    res.status(HttpStatus.OK)
    .json({token});
  })
);

export const authRouter = router;