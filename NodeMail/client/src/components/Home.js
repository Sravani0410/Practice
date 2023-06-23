import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [email, setEmail] = useState("");
  const handleSend = async (e) => {
    e.preventDefault();
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    console.log(res);
  };
  return (
    <>
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <h2>Send Email With React & Node JS</h2>
          <img
            src="gmail.png"
            alt="gmail photo"
            style={{ width: "50px", height: "30px" }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Form className="mt-2 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSend(e)}
            >
              Send
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Home;
