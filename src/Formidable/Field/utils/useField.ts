import { Values, HTMLField, FieldProps, Handler, Options } from "../../types";
import { useFormContext } from "../../context";

const useField = (props: FieldProps) => {
  const { onChange, values } = useFormContext();
  const newOnChange = async (e: React.ChangeEvent<HTMLField>) => {
    const formData = onChange(e);
    if (props.onAfterChange) {
      await props.onAfterChange(formData);
    }
  };

  const handler: Handler = {
    name: props.name,
    type: props.type || "text",
    ...getValue(props, values),
    onChange: newOnChange,
  };
  const options: Options = {
    ...props,
  };

  delete options.name;
  delete options.type;
  delete options.onAfterChange;

  return {
    handler,
    options,
  };
};

export default useField;

const getValue = (props: FieldProps, values: Values) => {
  const name = props.name;
  const value = getNestedValue(name, values);
  switch (props.type) {
    case "checkbox":
      return { checked: value };
    case "file":
      let fileName = "";
      if (value) {
        fileName = !props.multiple
          ? generateFakePath(value.name)
          : generateFakePath(value[0].name);
      }
      return { value: fileName };
    case "radio":
      return { value: props.value };
    default:
      return { value: value };
  }
};

const generateFakePath = (fileName: string) => {
  return ["C:", "fakepath", fileName].join("\\");
};

const getNestedValue = (name: string, values: Values) => {
  const names = name.split(".");
  let value: any = values;
  names.forEach((name) => {
    if (value instanceof Array) {
      value = value[+name];
    } else {
      value = value[name];
    }
  });
  return value;
};
