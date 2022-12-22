import express,
{
  Express,
} from "express";
import { errorHandler } from "./lib/error/middlewareErrorHandler";
import { errorValidation } from "./lib/error/middlewareErrorValidation";
import middlewareExpressJson from "./lib/error/middlewareExpressJson";
import { assortmentRouter } from "./module/assortment/AssortmentRouter";
import { authRouter } from "./module/auth/AuthRouter";

const main = async () => {
  const app: Express = express();

  app.use(express.json(), middlewareExpressJson);

  app.use(authRouter);
  app.use(assortmentRouter);

  app.use(errorValidation);
  app.use(errorHandler);

  app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
  });
};

export default main;
