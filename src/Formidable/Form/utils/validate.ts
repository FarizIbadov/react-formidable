import { ValidationSchema } from "../../types";

const validate = (
  name: string,
  value: any,
  validationSchema: ValidationSchema
) => {
  let message = "";
  if (validationSchema) {
    const validateField = validationSchema[name];
    if (validateField) {
      message = validateField.test(value).message;
    }
  }
  return { [name]: message };
};

export default validate;
