import React, { useState } from "react";
import classes from "./App.module.scss";
import Form from "../Formidable/Form";
import Field from "../Formidable/Field";
import FormBtn from "../Formidable/FormBtn";
import { FormChange, SubmitData } from "../Formidable/types";
import ErrorMessage from "../Formidable/ErrorMessage";
import FileUpload from "../testComponents/FileUpload";
import { initOptions, initVals, validationSchema } from "./form";

const App = () => {
  const onSubmit = (form: SubmitData) => {
    fetch("http://localhost:5000/form-data", {
      method: "POST",
      body: form.data as FormData,
    });
  };

  const [options, setOptions] = useState(initOptions);

  const onAfterChange = (formData: FormChange) => {
    const { field, form } = formData;
    const value = form[field];
    if (field === "type") {
      const filteredOptions = value
        ? initOptions.filter((option) => option.type === value)
        : initOptions;
      setOptions(filteredOptions);
    }
  };

  const onReset = () => {
    setOptions(initOptions);
  };

  const primayBtn = [classes.AppButton, classes.AppButtonPrimary].join(" ");
  const secondaryBtn = [classes.AppButton, classes.AppButtonSecondary].join(
    " "
  );
  const select = [classes.AppField, classes.AppSelect].join(" ");

  return (
    <div style={{ textAlign: "center" }}>
      <Form
        method="POST"
        name="login"
        onSubmit={onSubmit}
        initVals={initVals}
        validationSchema={validationSchema}
        onReset={onReset}
        multiparty
      >
        <Field
          autoComplete="off"
          name="name"
          className={classes.AppField}
          onAfterChange={onAfterChange}
        />
        <ErrorMessage name="name" />

        <Field autoComplete="off" name="email" className={classes.AppField} />
        <ErrorMessage name="email" />

        <Field
          autoComplete="off"
          name="peoples.0.name"
          className={classes.AppField}
        />
        <Field
          autoComplete="off"
          name="peoples.0.surname"
          className={classes.AppField}
        />
        <Field
          autoComplete="off"
          name="peoples.1.name"
          className={classes.AppField}
        />
        <Field
          autoComplete="off"
          name="peoples.1.surname"
          className={classes.AppField}
        />

        <Field
          autoComplete="off"
          name="age"
          type="number"
          className={classes.AppField}
        />
        <ErrorMessage name="age" />

        <FileUpload
          name="image"
          accept="image/png"
          className={classes.AppField}
        />

        <Field
          type="select"
          name="type"
          className={select}
          onAfterChange={onAfterChange}
        >
          <option value="">Type</option>
          <option value="odd">Odd</option>
          <option value="even">Even</option>
        </Field>

        <Field type="select" name="number" className={select}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </Field>

        <FormBtn className={primayBtn}>Submit</FormBtn>
        <button className={secondaryBtn} type="reset">
          Reset
        </button>
      </Form>
    </div>
  );
};

export default App;
