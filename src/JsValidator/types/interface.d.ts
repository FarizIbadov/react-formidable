import { Test, MimeType } from "./types";
import JsValidator from "../main";

export interface Rule {
  test: Test;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export interface FieldArraySchema {
  [key: string]: JsValidator;
}
