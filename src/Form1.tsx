import React, { FC } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";

interface Props {
  handleNext: () => void;
}

const Form1: FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ Email: "" }}
      validationSchema={Yup.object({
        Email: Yup.string().email().required("Required"),
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
            justifyContent: "center",
            marginTop: "40px",
            paddingBottom: '20px'
          }}
        >
          <Field component={TextField} name="Email" type="text" label="Email" />
          <Button color="primary" type="submit">
            Submit
          </Button>
          <br />
        </div>
      </Form>
    </Formik>
  );
};

export default Form1;
