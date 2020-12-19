import React, { FC } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";

interface Props {
  handleNext: () => void;
}

const Form2: FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ Password: "", ConfirmPassword: "" }}
      validationSchema={Yup.object({
        Password: Yup.string()
          .min(6, "Password should be atleast 6 characters")
          .max(12, "Password should not exceed 12 characters")
          .required("Required"),
        ConfirmPassword: Yup.string()
          .oneOf([Yup.ref("Password"), ""], "Password must match")
          .required("Required"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <Form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
            paddingBottom: "20px",
          }}
        >
          <Field
            label="Password"
            component={TextField}
            name="Password"
            type="text"
          />
          <Field
            label="Confirm Password"
            component={TextField}
            name="ConfirmPassword"
            type="text"
          />
          <Button color='primary' type="submit">Submit</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default Form2;
