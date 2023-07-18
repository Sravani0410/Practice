import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

export const FormValidation = () => {
  const businessOptions = ["Option 1", "Option 2", "Option 3"];

  const validateForm = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Full name is required";
    }

    if (!values.fullName || !values.contact) {
      // Only validate contact if fullName is entered
      errors.contact = "Contact name is required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.company) {
      errors.company = "Company name is required";
    }

    if (!values.designation) {
      errors.designation = "Designation name is required";
    }

    if (!values.businessOption) {
      errors.businessOption = "Business option is required";
    }

    if (!values.subject) {
      errors.subject = "Subject is required";
    }

    if (!values.additionalComment) {
      errors.additionalComment = "Additional comment is required";
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
            {({
              isSubmitting,
              handleSubmit,
              values,
              setFieldValue,
              handleChange,
              handleBlur,
              touched,
              errors,
            }) => (
              <Form onSubmit={handleSubmit} className="row g-3">
                {/* Form fields... */}
                <div className="col-md-6">
                  <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Field
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Enter your Full Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
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
                      disabled={!values.fullName} // Disable until fullName is filled
                    />
                    <ErrorMessage
                      name="contact"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </div>
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

// import React from "react";
// import { Formik, Field, ErrorMessage } from "formik";
// import { Form, Container, Row, Col, Button } from "react-bootstrap";

// export const FormValidation = () => {
//   const businessOptions = ["Option 1", "Option 2", "Option 3"];

//   const validateForm = (values) => {
//     const errors = {};

//     if (!values.fullName) {
//       errors.fullName = "Full name is required";
//     }

//     if (!values.fullName || !values.contact) {
//       // Only validate contact if fullName is entered
//       errors.contact = "Contact name is required";
//     }

//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }

//     if (!values.company) {
//       errors.company = "Company name is required";
//     }

//     if (!values.designation) {
//       errors.designation = "Designation name is required";
//     }

//     if (!values.businessOption) {
//       errors.businessOption = "Business option is required";
//     }

//     if (!values.subject) {
//       errors.subject = "Subject is required";
//     }

//     if (!values.additionalComment) {
//       errors.additionalComment = "Additional comment is required";
//     }

//     return errors;
//   };

//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     console.log(values);
//     setSubmitting(false);
//     resetForm();
//   };

//   return (
//     <>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <Formik
//             initialValues={{
//               fullName: "",
//               contact: "",
//               email: "",
//               company: "",
//               designation: "",
//               businessOption: "",
//               subject: "",
//               additionalComment: "",
//             }}
//             validate={validateForm}
//             onSubmit={handleSubmit}
//           >
//             {({
//               isSubmitting,
//               handleSubmit,
//               values,
//               setFieldValue,
//               handleChange,
//               handleBlur,
//               touched,
//               errors,
//             }) => (
//               <Form onSubmit={handleSubmit} className="row g-3">
//                 <div className="col-md-6">
//                   <Form.Group controlId="fullName">
//                     <Form.Label>Full Name</Form.Label>
//                     <Field
//                       type="text"
//                       name="fullName"
//                       className="form-control"
//                       placeholder="Enter your Full Name"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.fullName}
//                     />
//                     <ErrorMessage
//                       name="fullName"
//                       component="div"
//                       className="text-danger"
//                     />
//                   </Form.Group>
//                 </div>
//                 <div className="col-md-6">
//                   <Form.Group controlId="contact">
//                     <Form.Label>Contact</Form.Label>
//                     <Field
//                       type="number"
//                       name="contact"
//                       className="form-control"
//                       placeholder="Enter your Contact Name"
//                       disabled={!values.fullName} // Disable until fullName is filled
//                     />
//                     <ErrorMessage
//                       name="contact"
//                       component="div"
//                       className="text-danger"
//                     />
//                   </Form.Group>
//                 </div>
//                 {/* Rest of the form fields */}
//                 <Button variant="success" type="submit" disabled={isSubmitting}>
//                   Submit
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FormValidation;

// import React from "react";
// import { Formik, Field, ErrorMessage, Form } from "formik";

// export const ValidationForm = () => {
//   const businessOptions = ["Option 1", "Option 2", "Option 3"];

//   const validateForm = (values) => {
//     const errors = {};

//     if (!values.fullName) {
//       errors.fullName = "Full name is required";
//     }
//     if (!values.contact) {
//       errors.contact = "Contact name is required";
//     }
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     if (!values.company) {
//       errors.company = "Company name is required";
//     }
//     if (!values.designation) {
//       errors.designation = "designation name is required";
//     }
//     if (!values.businessOption) {
//       errors.businessOption = "businessOption is required";
//     }
//     if (!values.subject) {
//       errors.subject = "subject is required";
//     }
//     if (!values.additionalComment) {
//       errors.additionalComment = "additionalComment is required";
//     }
//     return errors;
//   };

//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log(values);
//     setSubmitting(false);
//   };

//   return (
//     <div className="container text-center">
//       <div className="row">
//         <div className="col-md-6">
//           <Formik
//             initialValues={{
//               fullName: "",
//               contact: "",
//               email: "",
//               company: "",
//               designation: "",
//               businessOption: "",
//               subject: "",
//               additionalComment: "",
//             }}
//             validate={validateForm}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="row g-3">
//                 <div>
//                   <div className="row">
//                     <div className="mb-3 col">
//                       <label
//                         htmlFor="fullName"
//                         className="form-label text-start"
//                       >
//                         Full Name
//                       </label>
//                       {/* <input
//                     type="text"
//                     class="form-control"
//                     name="fullName"
//                     // placeholder="Enter your Full Name"
//                   /> */}
//                       <Field
//                         type="text"
//                         name="fullName"
//                         className="form-control"
//                       />
//                       <ErrorMessage
//                         name="fullName"
//                         component="div"
//                         className="text-danger"
//                       />
//                     </div>
//     <div className="mb-3 col">
//       <label htmlFor="contact" className="form-label">
//         Contact
//       </label>
//       <Field
//         type="number"
//         name="contact"
//         className="form-control"
//         placeholder="Enter your Contact"
//       />
//       <ErrorMessage
//         name="contact"
//         component="div"
//         className="text-danger"
//       />
//     </div>
//   </div>
//   <div className="row">
//     <div className="mb-3 col">
//       <label htmlFor="email" className="form-label">
//         Email
//       </label>
//       <Field
//         type="email"
//         name="email"
//         className="form-control"
//       />
//       <ErrorMessage
//         name="email"
//         component="div"
//         className="text-danger"
//       />
//     </div>
//     <div className="mb-3 col">
//       <label htmlFor="company" className="form-label">
//         Company
//       </label>
//       <Field
//         type="text"
//         name="company"
//         className="form-control"
//       />
//       <ErrorMessage
//         name="company"
//         component="div"
//         className="text-danger"
//       />
//     </div>
//   </div>
//   <div className="row">
//     <div className="mb-3 col">
//       <label htmlFor="designation" className="form-label">
//         Designation
//       </label>
//       <Field
//         type="text"
//         name="designation"
//         className="form-control"
//       />
//       <ErrorMessage
//         name="designation"
//         component="div"
//         className="text-danger"
//       />
//     </div>

//                     <div className="mb-3 col">
//                       <label htmlFor="businessOption" className="form-label">
//                         Business Option
//                       </label>
//                       <Field
//                         as="select"
//                         name="businessOption"
//                         className="form-select"
//                       >
//                         <option value="">Select an option</option>
//                         {businessOptions.map((option) => (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         ))}
//                       </Field>
//                       <ErrorMessage
//                         name="businessOption"
//                         component="div"
//                         className="text-danger"
//                       />
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="subject" className="form-label">
//                       Subject
//                     </label>
//                     <Field
//                       type="text"
//                       name="subject"
//                       className="form-control"
//                     />
//                     <ErrorMessage
//                       name="subject"
//                       component="div"
//                       className="text-danger"
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="additionalComment" className="form-label">
//                       Additional Comment
//                     </label>
//                     <Field
//                       as="textarea"
//                       name="additionalComment"
//                       className="form-control"
//                       rows={4}
//                     />
//                     <ErrorMessage
//                       name="additionalComment"
//                       component="div"
//                       className="text-danger"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     disabled={isSubmitting}
//                     //   onSubmit={handleSubmit}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ValidationForm;

// import React from "react";
// import { Formik, ErrorMessage, Form } from "formik";

// export const FormValidation = () => {
//   const businessOptions = ["Option 1", "Option 2", "Option 3"];

//   const validateForm = (values) => {
//     const errors = {};

//     if (!values.fullName) {
//       errors.fullName = "Full name is required";
//     }
//     if (!values.contact) {
//       errors.contact = "Contact name is required";
//     }
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     if (!values.company) {
//       errors.company = "Company name is required";
//     }
//     if (!values.designation) {
//       errors.designation = "designation name is required";
//     }
//     if (!values.businessOption) {
//       errors.businessOption = "businessOption is required";
//     }
//     if (!values.subject) {
//       errors.subject = "subject is required";
//     }
//     if (!values.additionalComment) {
//       errors.additionalComment = "additionalComment is required";
//     }
//     return errors;
//   };

//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log(values);
//     setSubmitting(false);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <Formik
//             initialValues={{
//               fullName: "",
//               contact: "",
//               email: "",
//               company: "",
//               designation: "",
//               businessOption: "",
//               subject: "",
//               additionalComment: "",
//             }}
//             validate={validateForm}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting, handleSubmit }) => (
//               <Form className="row g-3" onSubmit={handleSubmit}>
//                 <div className="col-md-6">
//                   <label htmlFor="fullName" className="form-label text-start">
//                     Full Name
//                   </label>
//                   <input type="text" name="fullName" className="form-control" />
//                   <ErrorMessage
//                     name="fullName"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="contact" className="form-label text-start">
//                     Contact
//                   </label>
//                   <input
//                     type="number"
//                     name="contact"
//                     className="form-control"
//                   />
//                   <ErrorMessage
//                     name="contact"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="email" className="form-label text-start">
//                     Email
//                   </label>
//                   <input type="email" name="email" className="form-control" />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="company" className="form-label text-start">
//                     Company
//                   </label>
//                   <input type="text" name="company" className="form-control" />
//                   <ErrorMessage
//                     name="company"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label
//                     htmlFor="designation"
//                     className="form-label text-start"
//                   >
//                     Designation
//                   </label>
//                   <input
//                     type="text"
//                     name="designation"
//                     className="form-control"
//                   />
//                   <ErrorMessage
//                     name="designation"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label
//                     htmlFor="businessOption"
//                     className="form-label text-start"
//                   >
//                     Business Option
//                   </label>
//                   <select name="businessOption" className="form-select">
//                     <option value="">Select an option</option>
//                     {businessOptions.map((option) => (
//                       <option key={option} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                   <ErrorMessage
//                     name="businessOption"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="subject" className="form-label text-start">
//                     Subject
//                   </label>
//                   <input type="text" name="subject" className="form-control" />
//                   <ErrorMessage
//                     name="subject"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label
//                     htmlFor="additionalComment"
//                     className="form-label text-start"
//                   >
//                     Additional Comment
//                   </label>
//                   <textarea
//                     name="additionalComment"
//                     className="form-control"
//                     rows={4}
//                   />
//                   <ErrorMessage
//                     name="additionalComment"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-success"
//                   disabled={isSubmitting}
//                 >
//                   Submit
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormValidation;
