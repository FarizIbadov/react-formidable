import { Values } from "../../types";
import { Action, State, ChangeAction, ValidAction, ErrorAction } from "./types";
import deepCopy from "./utils/deepCopy";

export const state = (initVals: Values): State => ({
  initVals,
  currentVals: initVals,
  errors: {},
  valid: true,
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "change":
      return change(state, action);
    case "error":
      return error(state, action);
    case "reset":
      return reset(state);
    case "valid":
      return valid(state, action);

    default:
      return state;
  }
};

const change = (state: State, action: unknown) => {
  const data = (action as ChangeAction).data;
  const names = Object.keys(data)[0].split(".");
  const value = Object.values(data)[0];
  const endName = names.pop()!;

  const newCurrentVals = deepCopy(state.currentVals);
  let obj = newCurrentVals;

  for (const i in names) {
    const name = names[i];
    if (obj instanceof Array) {
      obj = obj[+name];
    } else {
      obj = obj[name];
    }
  }
  if (obj instanceof Array) {
    obj[+endName] = value;
  } else {
    obj[endName] = value;
  }

  const newState: State = {
    ...state,
    currentVals: newCurrentVals,
  };
  return newState;
};

const reset = (state: State) => {
  const newState: State = {
    ...state,
    currentVals: {
      ...state.initVals,
    },
    errors: {},
  };
  return newState;
};

const valid = (state: State, action: unknown) => {
  const valid = (action as ValidAction).valid;
  const newState: State = { ...state, valid };
  return newState;
};

const error = (state: State, action: unknown) => {
  const error = (action as ErrorAction).error;
  const newState: State = { ...state, errors: { ...state.errors, ...error } };
  return newState;
};

export default reducer;
