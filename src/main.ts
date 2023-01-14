import express,
{
  Express,
} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { cfg } from "../config/environment";
import { errorHandler } from "./lib/error/middlewareErrorHandler";
import { errorValidation } from "./lib/error/middlewareErrorValidation";
import middlewareExpressJson from "./lib/error/middlewareExpressJson";
import { assortmentRouter } from "./module/assortment/AssortmentRouter";
import { authRouter } from "./module/auth/AuthRouter";

const main = async () => {
  const PORT = cfg.app.PORT;
  const app: Express = express();

  app.use(cors());
  app.use(express.json(), middlewareExpressJson);
  app.use(cookieParser(cfg.app.JWT_SECRET_KEY));

  app.use(authRouter);
  app.use(assortmentRouter);

  app.use(errorValidation);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

export default main;
