import { MimeType, Test } from "./types";
import * as rules from "./rules";
import Validator from "./base";

export default class JsValidator extends Validator {
  private constructor() {
    super();
  }

  public required(message = "Invalid Field") {
    return this.addRule(rules.required, message);
  }

  public isString(message = "Provide only letters") {
    const rule = rules.isString(this.multiple);
    return this.addRule(rule, message);
  }

  public isEmail(message = "Invalid Email") {
    const rule = rules.isEmail(this.multiple);
    return this.addRule(rule, message);
  }

  public isNumber(message = "Provide only numbers") {
    const rule = rules.isNumber(this.multiple);
    return this.addRule(rule, message);
  }

  public isFile(message = "Provide a file") {
    const rule = rules.isFile(this.multiple);
    return this.addRule(rule, message);
  }

  public min(n: number, message = "Too short") {
    const rule = rules.min(n);
    return this.addRule(rule, message);
  }

  public max(n: number, message = "Too Long") {
    const rule = rules.max(n);
    return this.addRule(rule, message);
  }

  public length(
    minLength: number,
    maxLength?: number | null,
    message = "Invalid Size"
  ) {
    this.min(minLength, message);
    if (maxLength) this.max(maxLength, message);
    return this;
  }

  public isMimeType(
    type: MimeType,
    message = "Provide correct file type"
  ): JsValidator {
    const rule = rules.isMimeType(type, this.multiple);
    return this.addRule(rule, message);
  }

  public custom(test: Test, message = "Invalid Field") {
    const rule = rules.custom(test, this.multiple);
    return this.addRule(rule, message);
  }

  static validate() {
    return new JsValidator();
  }
}
