import JsValidator from "../../JsValidator/main";
import { HTMLField, Type, Mode, Method } from ".";

export interface Context {
  values: Values;
  valid: boolean;
  errors: Error;
  onChange: (e: React.ChangeEvent<HTMLField>) => FormChange;
}

export interface Values {
  [key: string]: any;
}
export interface Error {
  [key: string]: string;
}

export interface ValidationSchema {
  [field: string]: JsValidator;
}

export interface FieldProps {
  name: string;
  type?: Type;
  children?: React.ReactNode;
  onAfterChange?: (formData: FormChange) => void | Promise<void>;
  [key: string]: any;
}

export interface Handler {
  onChange: (e: React.ChangeEvent<HTMLField>) => void;
  name: string;
  type: Type;
  checked?: boolean;
  value?: any;
}

export interface Options {
  [key: string]: any;
}

export interface FieldResult {
  handler: Handler;
  options: Options;
}

export interface FormChange {
  name: string;
  field: string;
  form: Values;
  mode: Mode;
}

export interface SubmitData {
  method: Method;
  action: string;
  name: string;
  data: Values | FormData;
}
