import { Values, ValidationSchema } from "../../types";
import { validate } from ".";

const validateOnSubmit = (form: Values, validationSchema: ValidationSchema) => {
  let submitErrors = {};
  for (const field in form) {
    submitErrors = {
      ...submitErrors,
      ...validate(field, form[field], validationSchema!),
    };
  }
  const isValid = Object.values(submitErrors).every((error) => error === "");
  return { isValid, errors: submitErrors };
};

export default validateOnSubmit;
