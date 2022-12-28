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

    const {
      tokenAccess,
      tokenRefresh,
    } = await authService.register(dto);

    res.cookie("api_token", tokenRefresh, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 60,
      signed: true
    });

    res.status(HttpStatus.CREATED)
    .json({tokenAccess});
  })
);

router.post(
  "/auth/login",
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateUserLoginDto(req);

    const {
      tokenAccess,
      tokenRefresh,
    } = await authService.login(dto);

    res.cookie("api_token", tokenRefresh, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 60,
      signed: true
    });

    res.status(HttpStatus.OK)
    .json({tokenAccess});
  })
);

export const authRouter = router;