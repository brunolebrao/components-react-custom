import React from "react";
import { Field, Form, Formik } from "formik";
import { TextField } from "ppt4g-core-components";

const App = () => (
  <div>
    <h1>Prodesp form formik</h1>
    <Formik
      initialValues={{ email: "", color: "red", firstName: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <Form>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            component={TextField}
          />
          <Field as="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <Field name="firstName" placeholder="Nome" component={TextField} />
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default App;
