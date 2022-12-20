import {
  Request,
  Response,
  Router,
} from "express";
import { HttpStatus } from "../../lib/enum/HttpStatus";
import { asyncHandler } from "../../lib/error/AsyncHandler";
import { AssortmentService } from "./AssortmentService";

const assortmentService = new AssortmentService();

const router: Router = Router();

router.get(
  "/assortment/list",
  asyncHandler(async (req: Request, res: Response) => {
    const list = await assortmentService.getList();

    res.status(HttpStatus.CREATED)
    .json({list});
  })
);

router.post(
  "/assortment/create",
  asyncHandler(async (req: Request, res: Response) => {
    const item = await assortmentService.create();

    res.status(HttpStatus.CREATED)
    .json({item});
  })
);

router.post(
  "/assortment/update",
  asyncHandler(async (req: Request, res: Response) => {
    const item = await assortmentService.update();

    res.status(HttpStatus.CREATED)
    .json({item});
  })
);

export const assortmentRouter = router;