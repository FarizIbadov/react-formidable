import { ActionType } from "./type";
import { Values } from "../../../types";

export interface State {
  initVals: Values;
  currentVals: Values;
  errors: {};
  valid: boolean;
}

export interface Action {
  type: ActionType;
}

export interface Field {
  [field: string]: any;
}

export interface ChangeAction extends Action {
  data: Field;
}

export interface ResetAction extends Action {}
export interface ValidAction extends Action {
  valid: boolean;
}

export interface ErrorAction extends Action {
  error: Field;
}
