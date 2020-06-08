import React from "react"

import { Container } from "./styles"

const TextField = ({ field, form: { touched, errors }, ...props }) => (
  <Container>
    <input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </Container>
)

export default TextField
