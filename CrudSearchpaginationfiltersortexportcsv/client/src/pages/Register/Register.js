import React from "react";
import "./Register.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Register Your Details</h2>
        <Card className="shadow mt-3 p-3">
          <div className="profile_div text-center">
            <img src="./man.png" />
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;
