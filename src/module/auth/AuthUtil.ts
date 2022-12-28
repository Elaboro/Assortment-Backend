import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { cfg } from '../../../config/environment';

export class AuthUtil {

  createAccessToken(secret: string, user: User) {
    const payload = {
      name: user.name
    };

    const token = jwt.sign(
      payload,
      secret,
      {
        expiresIn: cfg.app.JWT_ACCESS_EXPIRES_IN
      }
    );

    return token;
  }

  createRefreshToken(secret: string, user: User) {
    const payload = {
      name: user.name
    };

    const token = jwt.sign(
      payload,
      secret,
      {
        expiresIn: cfg.app.JWT_REFRESH_EXPIRES_IN
      }
    );

    return token;
  };
}