import React, { useEffect, useReducer, useCallback } from "react";
import { context as FormContext } from "../context";
import * as Types from "../types";
import * as utils from "./utils";
import reducer, { state } from "./store/reducer";
import * as actions from "./store/actions";
import parseData from "./utils/parseData";

interface Props {
  name: string;
  initVals: Types.Values;
  onSubmit: (data: Types.SubmitData) => void | Promise<void>;
  validationSchema?: Types.ValidationSchema;
  action: string;
  method: Types.Method;
  mode?: Types.Mode;
  multiparty?: boolean;
  onReset?: () => void;
  className?: string;
}

const Form: React.FC<Props> = (props) => {
  const { validationSchema } = props;
  const [store, dispatch] = useReducer(reducer, state(props.initVals));
  const mode = props.mode || "blur";

  const checkAndThrow = (condition: boolean, name: string, value: any) => {
    if (condition) {
      const error = utils.validate(name, value, validationSchema!);
      actions.errorAction(error, dispatch);
    }
  };

  const checkAndValid = useCallback(
    (
      condition: boolean,
      currentVals: Types.Values,
      validationSchema?: Types.ValidationSchema
    ) => {
      if (condition) {
        const isValid = utils.validateForm(currentVals, validationSchema);
        actions.validAction(isValid, dispatch);
      }
    },
    []
  );

  const onChange = (e: React.ChangeEvent<Types.HTMLField>) => {
    const { name, type } = e.target;
    const value = utils.getFieldValue(e);
    mode !== "change" && actions.errorAction({ [name]: "" }, dispatch);
    const newField = { [name]: value };
    actions.changeAction(newField, dispatch);

    checkAndThrow(
      (mode === "change" && validationSchema != null) ||
        (type === "file" && mode === "blur"),
      name,
      value
    );
    const form = { ...store.currentVals, ...newField };
    return {
      name: props.name,
      field: name,
      form,
      mode,
    } as Types.FormChange;
  };

  const onBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target.name;
    const value = store.currentVals[name];
    checkAndThrow(mode === "blur" && validationSchema != null, name, value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "submit") {
      const { isValid, errors } = utils.validateOnSubmit(
        store.currentVals,
        props.validationSchema!
      );
      if (!isValid) {
        actions.errorAction(errors, dispatch);
        return;
      }
    }
    const multiparty = props.multiparty || false;
    const data = parseData(store.currentVals, multiparty);
    await props.onSubmit({
      method: props.method,
      name: props.name,
      action: props.action,
      data,
    });
  };

  const onReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.resetAction(dispatch);
    if (props.onReset) {
      props.onReset();
    }
  };

  const formContextValue = {
    valid: store.valid,
    errors: store.errors,
    values: store.currentVals,
    onChange,
  };

  const { currentVals } = store;

  useEffect(() => {
    checkAndValid(mode !== "submit", currentVals, validationSchema);
  }, [validationSchema, currentVals, mode, checkAndValid]);

  return (
    <form
      onSubmit={onSubmit}
      onReset={onReset}
      onBlur={onBlur}
      noValidate
      className={props.className}
    >
      <FormContext.Provider value={formContextValue}>
        {props.children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
