import React, { useState, useRef, useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
export const FormValidation = () => {
  const form = useRef();
  const [result, setResult] = useState(false);
  const businessOptions = [
    "Business Development",
    "Marketing",
    "HR",
    "Finance",
    "Customer Service",
    "Legal",
    "Others",
  ];

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
  //   useEffect(() => {
  //     emailjs.init("TwQE2s9pVt7IQy-BL");
  //   }, []);
  const sendEmail = (e, sendForm) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_oj7kznl",
        "template_8p37v88",
        form.current,
        "TwQE2s9pVt7IQy-BL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    sendForm();
    // e.target.reset();
    // setResult(true);
  };
  //   const handleSubmit = (values, { setSubmitting, resetForm }) => {
  //     console.log(values);
  //     setSubmitting(false);
  //     sendEmail();
  //     e.target.reset();
  //   };
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    sendEmail(values, resetForm);
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
            // onSubmit={(values, { setSubmitting, resetForm }) => {
            //   console.log(values);
            //   setSubmitting(false);
            //   sendEmail(values, resetForm); // Pass values and resetForm function
            // }}
            onSubmit={handleSubmit}
            // onSubmit={sendEmail}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit} ref={form} className="row g-3">
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
                <Button
                  variant="success"
                  type="submit"
                  //   value="Submit"
                  disabled={isSubmitting}
                  //   onSubmit={handleSubmit}
                >
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
