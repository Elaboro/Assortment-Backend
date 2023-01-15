import {
  Request,
  Response,
  Router,
} from "express";
import { HttpStatus } from "../../lib/enum/HttpStatus";
import { asyncHandler } from "../../lib/error/AsyncHandler";
import AuthOnlyGuard from "../../lib/guard/AuthGuard";
import { AssortmentService } from "./AssortmentService";
import {
  validateAssortmentCreateDto,
  validateAssortmentUpdateDto,
  validateCategoryCreateDto,
  validateCategoryUpdateDto,
  validateUnitCreateDto,
  validateUnitUpdateDto,
} from "./AssortmentValidator";
import { FileLoaderHandler } from "./middleware/FileLoaderHandler";

const assortmentService = new AssortmentService();

const router: Router = Router();

router.get(
  "/assortment/list",
  asyncHandler(async (req: Request, res: Response) => {
    const list = await assortmentService.getAssortmentList();

    res.status(HttpStatus.OK)
    .json(list);
  })
);

router.post(
  "/assortment/create",
  AuthOnlyGuard,
  FileLoaderHandler.array("file"),
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateAssortmentCreateDto(req);

    const item = await assortmentService.createAssortment(dto);

    res.status(HttpStatus.CREATED)
    .json(item);
  })
);

router.post(
  "/assortment/update",
  AuthOnlyGuard,
  FileLoaderHandler.array("file"),
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateAssortmentUpdateDto(req);

    const item = await assortmentService.updateAssortment(dto);

    res.status(HttpStatus.OK)
    .json(item);
  })
);

router.post(
  "/category/create",
  AuthOnlyGuard,
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateCategoryCreateDto(req);

    const item = await assortmentService.createCategory(dto);

    res.status(HttpStatus.CREATED)
    .json(item);
  })
);

router.post(
  "/category/update",
  AuthOnlyGuard,
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateCategoryUpdateDto(req);

    const item = await assortmentService.updateCategory(dto);

    res.status(HttpStatus.OK)
    .json(item);
  })
);

router.get(
  "/category/list",
  asyncHandler(async (req: Request, res: Response) => {
    const list = await assortmentService.getCategoryList();

    res.status(HttpStatus.OK)
    .json(list);
  })
);

router.get(
  "/category/list/with_assortment",
  asyncHandler(async (req: Request, res: Response) => {
    const list = await assortmentService.getCategoryListWithAssortment();

    res.status(HttpStatus.OK)
    .json(list);
  })
);

router.post(
  "/unit/create",
  AuthOnlyGuard,
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateUnitCreateDto(req);

    const item = await assortmentService.createUnit(dto);

    res.status(HttpStatus.CREATED)
    .json(item);
  })
);

router.post(
  "/unit/update",
  AuthOnlyGuard,
  asyncHandler(async (req: Request, res: Response) => {
    const dto = validateUnitUpdateDto(req);

    const item = await assortmentService.updateUnit(dto);

    res.status(HttpStatus.OK)
    .json(item);
  })
);

export const assortmentRouter = router;