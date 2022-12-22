import {
  Request,
  Response,
  Router,
} from "express";
import { HttpStatus } from "../../lib/enum/HttpStatus";
import { asyncHandler } from "../../lib/error/AsyncHandler";
import {
  validateUserCreateDto,
  validateUserLoginDto,
} from "../user/UserValidator";
import { AuthService } from "./AuthService";

const authService = new AuthService();

const router: Router = Router();

router.post(
  "/auth/register",
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateUserCreateDto(req);

    const token: string = await authService.register(dto);

    res.status(HttpStatus.CREATED)
    .json({token});
  })
);

router.post(
  "/auth/login",
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateUserLoginDto(req);

    const token: string = await authService.login(dto);

    res.status(HttpStatus.OK)
    .json({token});
  })
);

export const authRouter = router;