import { MimeType } from "../types";

const mimeTypeParser = (type: MimeType) => {
  return typeof type === "string" ? [type] : [...type];
};

export default mimeTypeParser;
