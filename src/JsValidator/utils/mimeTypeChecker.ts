import mimeTypeParser from "./mimeTypeParser";
import { MimeType } from "../types";

const mimeTypeChecker = (type: MimeType) => (file: File) => {
  const types = mimeTypeParser(type);
  return types.includes(file.type);
};

export default mimeTypeChecker;
