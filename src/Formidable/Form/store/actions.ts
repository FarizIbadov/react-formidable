import React from "react";
import * as Types from "./types";

export const changeAction = (
  field: Types.Field,
  dispatch: React.Dispatch<Types.ChangeAction>
) => {
  dispatch({
    type: "change",
    data: field,
  });
};

export const resetAction = (dispatch: React.Dispatch<Types.ResetAction>) => {
  dispatch({ type: "reset" });
};

export const validAction = (
  valid: boolean,
  dispatch: React.Dispatch<Types.ValidAction>
) => {
  dispatch({ type: "valid", valid });
};

export const errorAction = (
  field: Types.Field,
  dispatch: React.Dispatch<Types.ErrorAction>
) => {
  dispatch({
    type: "error",
    error: field,
  });
};
