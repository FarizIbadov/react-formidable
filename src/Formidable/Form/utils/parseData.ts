import { Values } from "../../types";

function convertToFormData(
  object: Values,
  form?: FormData,
  namespace?: string
): FormData {
  const formData = form || new FormData();
  for (let property in object) {
    if (!object.hasOwnProperty(property) || !object[property]) {
      continue;
    }
    const formKey = namespace ? `${namespace}[${property}]` : property;
    if (object[property] instanceof Date) {
      formData.append(formKey, object[property].toISOString());
    } else if (
      typeof object[property] === "object" &&
      !(object[property] instanceof File)
    ) {
      convertToFormData(object[property], formData, formKey);
    } else {
      formData.append(formKey, object[property]);
    }
  }
  return formData;
}

const parseData = (form: Values, multiparty: boolean) => {
  return multiparty ? convertToFormData(form) : form;
};

export default parseData;
