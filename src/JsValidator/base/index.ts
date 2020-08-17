import { Rule, ValidationResult, Test, FieldArraySchema } from "../types";

export default abstract class Validator {
  protected rules: Rule[];
  protected multiple: boolean;
  constructor() {
    this.multiple = false;
    this.rules = [];
  }

  public test(value: any): ValidationResult {
    const result: ValidationResult = {
      isValid: true,
      message: "",
    };
    for (const rule of this.rules) {
      const isValid = rule.test(value);
      if (!isValid) {
        result.message = rule.message;
        result.isValid = isValid;
        break;
      }
    }
    return result;
  }

  public isMultiple() {
    this.multiple = true;
    return this;
  }

  public isFieldArray(schema: FieldArraySchema) {}

  protected addRule(test: Test, message: string) {
    this.rules.push({
      test,
      message,
    });
    return this;
  }
}
