import typeChecker from "../utils/typeChecker";
import mimeTypeChecker from "../utils/mimeTypeChecker";
import initializeValidation from "../utils/initializeValidation";
import { MimeType, Test } from "../types";

export const required = (value: any) => Boolean(value);

export const isString = (multiple: boolean) => (value: string | string[]) => {
  const test = typeChecker.string;
  return initializeValidation(test, value, multiple);
};

export const isEmail = (multiple: boolean) => (value: string | string[]) => {
  const test = typeChecker.email;
  return initializeValidation(test, value, multiple);
};

export const isNumber = (multiple: boolean) => (value: string | string[]) => {
  const test = typeChecker.number;
  return initializeValidation(test, value, multiple);
};

export const isFile = (multiple: boolean) => (value: File | File[]) => {
  const test = typeChecker.file;
  return initializeValidation(test, value, multiple);
};

export const isMimeType = (type: MimeType, multiple: boolean) => (
  value: File | File[]
): boolean => {
  const test = mimeTypeChecker(type);
  return initializeValidation(test, value, multiple);
};

export const min = (n: number) => (value: [] | string) => {
  return value.length >= n;
};

export const max = (n: number) => (value: [] | string) => {
  return value.length <= n;
};

export const custom = (test: Test, multiple: boolean) => (value: any) => {
  return initializeValidation(test, value, multiple);
};
