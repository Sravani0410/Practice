import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Card from "react-bootstrap/Card";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import Spiner from "../../components/Spiner/Spiner";
import { registerFunction } from "../../services/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [showSpin, setShowSpin] = useState(true);

  const navigate=useNavigate()

  // status options:
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  // setInput Value:
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // status set --> because we are using library that we get direct no need to use e.target
  const setStatusValue = (e) => {
    console.log(e);
    setStatus(e.value);
  };

  // profile set
  const setImageValue = (e) => {
    setImage(e.target.files[0]);
  };

  // submit userdata
  const submitUserData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputData;
    // const {status}=status
    if (fname === "") {
      toast.error("First name is required");
    } else if (lname === "") {
      toast.error("Last name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else if (mobile === "") {
      toast.error("Mobile Number is required");
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile Number");
    } else if (gender === "") {
      toast.error("Gender is required");
    } else if (status === "") {
      toast.error("Status is required");
    } else if (image === "") {
      toast.error("Profile is Required");
    } else if (location === "") {
      toast.error("Location is required");
    } else {
      // toast.success("Registration Successfully Done !");
      const data = new FormData();
      data.append("fname", fname);
      data.append("lname", lname);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("status", status);
      data.append("location", location);
      // user_profile left side name should be same as in backend in routes upload.single("user_profile")
      data.append("user_profile", image);
      const config = {
        "Content-Type": "multipart/form-data",
      };
      const response = await registerFunction(data, config);
      // console.log("response",response)
      if (response.status === 200) {
        setInputData({
          ...inputData,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          gender: "",
          location: "",
        });
        setStatus("");
        setImage("")
      }
      else{
        toast.error("error")
      }
    }
  };
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
    setTimeout(() => {
      setShowSpin(false);
    }, [1200]);
  }, [image]);
  return (
    <>
      {showSpin ? (
        <Spiner />
      ) : (
        <div className="container">
          <h2 className="text-center mt-1">Register Your Details</h2>
          <Card className="shadow mt-3 p-3">
            <div className="profile_div text-center">
              <img src={preview ? preview : "./man.jpg"} />
            </div>
            <Form>
              <Row>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={inputData.fname}
                    placeholder="Enter First Name"
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    value={inputData.lname}
                    placeholder="Enter Last Name"
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={inputData.email}
                    placeholder="Enter email"
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={inputData.mobile}
                    placeholder="Enter Mobile Number"
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={"Male"}
                    name="gender"
                    value={"Male"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Female"}
                    name="gender"
                    value={"Female"}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select your status</Form.Label>
                  <Select
                    // value={status}
                    onChange={setStatusValue}
                    options={options}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select Your Profile</Form.Label>
                  <Form.Control
                    type="file"
                    name="user_profile"
                    placeholder="Enter Your Profile"
                    onChange={setImageValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Enter Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={inputData.location}
                    placeholder="Enter Your Location"
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={submitUserData}
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </Card>
          <ToastContainer position="top-center" />
        </div>
      )}
    </>
  );
};

export default Register;
