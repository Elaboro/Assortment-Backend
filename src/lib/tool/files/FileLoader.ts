import { Request } from "express";
import multer,
{
  Multer,
} from "multer";
import { v4 as uuidv4} from "uuid";

interface IConfig {
  destination: string;
  file_size_max: number;
  mimetype_white_list: Array<string>;
}

export const createFileLoader = (config: IConfig): Multer => {

  const storage = multer.diskStorage({
      destination: (
          req: Request,
          file: Express.Multer.File,
          cb: (error: Error, destination: string) => void
      ) => {
          cb(null, config.destination);
      },
  
      filename: (
          req: Request,
          file: Express.Multer.File,
          cb: (error: Error, filename: string) => void
      ) => {
          const extension: string = file.originalname.split(".").pop();
          const name: string = uuidv4();
          const filename: string = `${name}.${extension}`;

          cb(null, filename);
      }
  });

  const fileFilter = (
      req: Request,
      file: Express.Multer.File,
      cb: multer.FileFilterCallback
  ) => {
      if(config.mimetype_white_list.includes(file.mimetype)) {
          cb(null, true);
      } else {
          cb(null, false);
      }
  };

  return multer({
      storage,
      fileFilter,
      limits: {
          fileSize: config.file_size_max
      }
  });
};