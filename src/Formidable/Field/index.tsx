import React from "react";
import useField from "./utils/useField";
import getComponent from "./utils/getComponent";
import { FieldProps } from "../types";

interface Props extends FieldProps {}

const Field: React.FC<Props> = (props) => {
  const useFieldResults = useField(props);
  const fieldComponent = getComponent(props, useFieldResults);
  return fieldComponent;
};

export default Field;
