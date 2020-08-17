import React from "react";
import { useFormContext } from "../context";

interface Props {
  [key: string]: any;
  disabled?: boolean;
  className?: string;
}

const FormBtn: React.FC<Props> = (props) => {
  const { valid } = useFormContext();

  return (
    <button {...props} type="submit" disabled={props.disabled || !valid}>
      {props.children || "submit"}
    </button>
  );
};

export default FormBtn;
