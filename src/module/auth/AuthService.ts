import {
  UserCreateDto,
  UserLoginDto,
} from "../user/UserDto";
import bcrypt from "bcryptjs";
import { AuthUtil } from "./AuthUtil";
import { cfg } from "../../../config/environment";
import {
  DuplicateError,
  ForbiddenError,
  NotFoundError,
} from "../../lib/error/Error";

type ReturnToken = {
  tokenAccess: string;
  tokenRefresh: string;
};

export class AuthService {
  private authUtil = new AuthUtil();
  private userRepo = new UserRepo();

  async register(dto: UserCreateDto): Promise<ReturnToken> {
    const isUserCreated = await this.userRepo.findByName(dto.name);
    if(isUserCreated) {
      throw new DuplicateError("User is already registered");
    }

    const password = await bcrypt.hash(dto.password, 8);
    const user = await this.userRepo.create({ ...dto, password });

    const tokenAccess = this.authUtil.createAccessToken(cfg.app.JWT_SECRET_KEY, user);
    const tokenRefresh = this.authUtil.createRefreshToken(cfg.app.JWT_SECRET_KEY, user);

    return {
      tokenAccess,
      tokenRefresh,
    };
  }

  async login(dto: UserLoginDto): Promise<ReturnToken> {
    const user = await this.userRepo.getUserByName(dto.name);
    if(!user) {
      throw new NotFoundError("User is unregistered");
    }

    const isPasswordEquals = await bcrypt.compare(dto.password, user.password);
    delete user.password;
    delete dto.password;
    if(!isPasswordEquals) {
      throw new ForbiddenError("Invalid password");
    }

    const tokenAccess = this.authUtil.createAccessToken(cfg.app.JWT_SECRET_KEY, user);
    const tokenRefresh = this.authUtil.createRefreshToken(cfg.app.JWT_SECRET_KEY, user);

    return {
      tokenAccess,
      tokenRefresh,
    };
  }
}