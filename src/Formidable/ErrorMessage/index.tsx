import React from "react";
import { useFormContext } from "../context";

interface Props {
  name: string;
}

const ErrorMessage: React.FC<Props> = ({ name }) => {
  const { errors } = useFormContext();
  const error = errors[name] ? errors[name] : null;
  return <React.Fragment>{error}</React.Fragment>;
};

export default ErrorMessage;
