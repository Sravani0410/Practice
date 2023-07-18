import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, InputGroup } from "react-bootstrap";
import { Formik } from "formik";

const form = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
          //   <form onSubmit={handleSubmit}>
          //     <input
          //       type="email"
          //       name="email"
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       value={values.email}
          //     />
          //     {errors.email && touched.email && errors.email}
          //     <input
          //       type="password"
          //       name="password"
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       value={values.password}
          //     />
          //     {errors.password && touched.password && errors.password}
          //     <button type="submit" disabled={isSubmitting}>
          //       Submit
          //     </button>
          //   </form>
        )}
      </Formik>
    </>
  );
};

export default form;
