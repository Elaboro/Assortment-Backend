import { createFileLoader } from "../../../lib/tool/files/FileLoader";
import path from "path";

export const FileLoaderHandler = createFileLoader({
  destination: path.join(__dirname, '..', '..', 'storage', 'private', 'temp'),
  file_size_max: 10485760 + 1,
  mimetype_white_list: [
      "image/jpeg",
      "image/png",
  ],
});