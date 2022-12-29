import fs,
{
  promises as fsp,
  ReadStream,
  WriteStream,
} from 'fs';
import path from 'path';

interface Storage {
  rename(item: StorageRename): Promise<void>;
  move(item: StorageMove): Promise<void>;
  delete(item: StorageDelete): Promise<void>;
}

interface StorageMove {
  path_from: string;
  path_to: string;
  filename: string;
}

interface StorageRename {
  path_old: string;
  path_new: string;
}

interface StorageDelete {
  path: string;
  filename: string;
}

export class FileSystemStorage {

  async rename(item: StorageRename): Promise<void> {
    return fsp.rename(item.path_old, item.path_new);
  }

  async move(item: StorageMove): Promise<void> {
    if(!fs.existsSync(item.path_to)) {
      await fsp.mkdir(item.path_to, { recursive: true });
    }

    const readeble: ReadStream = fs.createReadStream(
      path.join(item.path_from, item.filename),
    );

    const writeble: WriteStream = fs.createWriteStream(
      path.join(item.path_to, item.filename)
    );

    readeble.pipe(writeble).on("finish", () => {
      fsp.unlink(path.join(item.path_from, item.filename));
    });
  }

  async delete(item: StorageDelete): Promise<void> {
    fsp.unlink(path.join(item.path, item.filename));
  }
}