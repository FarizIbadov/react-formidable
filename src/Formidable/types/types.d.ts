export type Type =
  | "text"
  | "password"
  | "file"
  | "textarea"
  | "select"
  | "checkbox"
  | "number"
  | "radio"
  | "color"
  | "date";

export type EventType =
  | "text"
  | "password"
  | "file"
  | "textarea"
  | "select-one"
  | "select-multiple"
  | "checkbox";

export type HTMLField =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;
export type EventValue = any;

export type Mode = "change" | "blur" | "submit";
export type Method = "post" | "put" | "get" | "patch" | "delete";
