import express,
{
  Express,
} from "express";
import { errorHandler } from "./lib/error/middlewareErrorHandler";
import { assortmentRouter } from "./module/assortment/AssortmentRouter";
import { authRouter } from "./module/auth/AuthRouter";

const main = async () => {
  const app: Express = express();

  app.use(authRouter);
  app.use(assortmentRouter);

  app.use(errorHandler);

  app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
  });
};

export default main;
