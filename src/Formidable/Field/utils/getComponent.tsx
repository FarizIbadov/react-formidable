import React from "react";
import { FieldProps, FieldResult } from "../../types";

const getComponent = (props: FieldProps, useFieldResult: FieldResult) => {
  let component = null;
  const { handler, options } = useFieldResult;
  switch (props.type) {
    case "select":
      component = <select {...handler} {...options} />;
      break;
    case "textarea":
      component = <textarea {...handler} {...options} />;
      break;
    default:
      component = <input {...handler} {...options} />;
  }

  return component;
};

export default getComponent;
