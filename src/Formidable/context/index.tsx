import React, { useContext } from "react";
import { Context } from "../types";

export const context = React.createContext<Context>({
  valid: true,
  errors: {},
  values: {},
  onChange: () => ({ name: "", field: "", form: {}, mode: "blur" }),
});

export const useFormContext = () => {
  const formContext = useContext(context);
  return {
    ...formContext,
  };
};

export const useFieldDataContext = (name: string) => {
  const { errors, values } = useContext(context);
  return {
    error: errors[name],
    value: values[name],
  };
};
