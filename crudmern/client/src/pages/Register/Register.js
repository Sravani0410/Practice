import React from "react";
import Card from "react-bootstrap/Card";
import "./Register.css";
const Register = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-1">Register Your Details</h2>
      <Card className="shadow mt-3 p-3">
        <div className="profile_div text-center">
          <img src="../../man.jpg" />
        </div>
      </Card>
    </div>
  );
};

export default Register;
