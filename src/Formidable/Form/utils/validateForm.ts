import { Values, ValidationSchema } from "../../types";

const validateForm = (form: Values, validationSchema?: ValidationSchema) => {
  if (!validationSchema) {
    return true;
  } else {
    const validForm: Values = {};
    for (const field in validationSchema) {
      const validateField = validationSchema[field];
      const value = form[field];
      const { isValid } = validateField.test(value);
      validForm[field] = isValid;
    }
    const isValid = Object.values(validForm).every((field) => field);
    return isValid;
  }
};

export default validateForm;
