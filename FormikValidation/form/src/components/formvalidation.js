import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Button } from "react-bootstrap";

export const FormValidation = () => {
  const businessOptions = ["Option 1", "Option 2", "Option 3"];

  const validateForm = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Full name is required";
    } else if (values.fullName.length < 3) {
      errors.fullName = "Full name should be at least 3 characters";
    }
    if (!values.contact) {
      errors.contact = "Contact name is required";
    } else if (!/^\d{10}$/i.test(values.contact)) {
      errors.contact = "Invalid contact number";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.company) {
      errors.company = "Company name is required";
    } else if (values.company.length < 3) {
      errors.company = "Company name should be at least 3 characters";
    }
    if (!values.designation) {
      errors.designation = "designation name is required";
    } else if (values.designation.length < 3) {
      errors.designation = "Designation should be at least 3 characters";
    }
    if (!values.businessOption) {
      errors.businessOption = "businessOption is required";
    }
    if (!values.subject) {
      errors.subject = "subject is required";
    }
    if (!values.additionalComment) {
      errors.additionalComment = "additionalComment is required";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Formik
            initialValues={{
              fullName: "",
              contact: "",
              email: "",
              company: "",
              designation: "",
              businessOption: "",
              subject: "",
              additionalComment: "",
            }}
            validate={validateForm}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Field
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Enter your Full Name"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="contact">
                    <Form.Label>Contact</Form.Label>
                    <Field
                      type="number"
                      name="contact"
                      className="form-control"
                      placeholder="Enter your Contact Name"
                    />
                    <ErrorMessage
                      name="contact"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your Email Address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </div>{" "}
                <div className="col-md-6">
                  <Form.Group controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Field
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder="Enter your Company Name"
                    />
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group controlId="designation">
                    <Form.Label>Designation</Form.Label>
                    <Field
                      type="text"
                      name="designation"
                      className="form-control"
                      placeholder="Enter your Designation"
                    />
                    <ErrorMessage
                      name="designation"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </div>{" "}
                <div className="col-md-6">
                  <Form.Group controlId="businessOption">
                    <Form.Label>Business Options</Form.Label>
                    <Field
                      as="select"
                      name="businessOption"
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      {businessOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="businessOption"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </div>
                <Form.Group controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Field
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Enter subject line"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-danger"
                    placeholder="Enter subject line"
                  />
                </Form.Group>
                <Form.Group controlId="additionalComment">
                  {/* <Form.Label>Additional Comment</Form.Label> */}
                  <Field
                    as="textarea"
                    name="additionalComment"
                    className="form-control"
                    rows={4}
                    placeholder="Additional Comments"
                  />
                  <ErrorMessage
                    name="additionalComment"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
