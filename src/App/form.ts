// import JsValidator from "../JsValidator/main";

export const validationSchema = {
  // name: JsValidator.validate().isString("Type letters"),
  // email: JsValidator.validate()
  //   .required("email is required")
  //   .isEmail("I need Email"),
  // age: JsValidator.validate().isNumber("Type only numbers"),
  // image: JsValidator.validate()
  //   .required()
  //   .isFile()
  //   .isMimeType("image/png", "Only png"),
};

export const initVals = {
  name: "",
  email: "",
  peoples: [
    { name: "Fariz", surname: "Ibadov" },
    { name: "Feyruz", surname: "Ibadovich" },
  ],
  age: "",
  type: "",
  number: "",
  image: null,
};

export const initOptions = [
  { value: "1", type: "odd" },
  { value: "2", type: "even" },
  { value: "3", type: "odd" },
  { value: "4", type: "even" },
  { value: "5", type: "odd" },
];
