import React, { FC } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";

interface Props {
    handleNext: () => void;
}

const Form3: FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ Code: '' }}
            validationSchema={Yup.object({
                Code: Yup.string().matches(/^[0-9]{5}$/, 'Must be exactly 5 digits')
                    .required('Required')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext()
                }, 400)
            }}
        >
            <Form>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                    paddingBottom: '20px'
                }}>
                    <Field name="Code" type="text" component={TextField} label="Code" />
                    <Button color='primary' type="submit">Submit</Button>
                </div>
            </Form>
        </Formik>
    );
}

export default Form3;