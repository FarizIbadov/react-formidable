import { Test } from "../types";

const initializeValidation = (
  test: Test,
  value: any | any[],
  multiple: boolean
) => {
  return multiple ? (value as any[]).every(test) : test(value);
};

export default initializeValidation;
