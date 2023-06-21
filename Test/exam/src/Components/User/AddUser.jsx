import React, {  useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Adduser.module.css";
import Input from "../UI/Input/Input";
import { ADD_USER, ERROR, LOADING } from "../../Redux/AppReducer/actionTypes";
// import { addnewuser } from "../../Redux/AppReducer/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  let [gender, setGender] = useState("male");
  let fn = useRef();
  let ln = useRef();
  let photo = useRef();
  let age = useRef();
  let phone = useRef();
  let dispatch = useDispatch();
  let state = useSelector((store) => store.appReducer);
  let navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    let data = {
      firstname: fn.current.value,
      lastname: ln.current.value,
      photo: photo.current.value,
      age: age.current.value,
      phone:phone.current.value,
      gender,
    };
    let submitData = async () => {
      
      try{
        await axios.post(process.env.REACT_APP_SERVER_BASE_URL + "users", data);
        dispatch({ type: LOADING });
        dispatch({type:ADD_USER,payload:data})
        navigate("/")
      }catch(err){
        let error = {};
        if(err.response.status===404){
          error.status = 404;
          error.message = "Network error, Please try again"
        }
        dispatch({type:LOADING});
        dispatch({type:ERROR,payload:{isError:true,...error}});
      }
    };
    submitData();
  };
  let handleGenderChange = (value) => {
    setGender(value);
  };
  return (
    <section className={classes.add_userSection}>
      <form onSubmit={handleSubmit}>
        {state.isError && <p style={{color:"red"}}>{state.errorMessage}</p>}
        <h1>Add User</h1>
        <Input ref={fn} label="First Name" type={"text"} />
        <Input ref={ln} label="Last Name" type={"text"} />
        <Input ref={photo} label="Photo" type={"url"} />
        <Input ref={age} label="Age" type={"number"} />
        <Input ref={phone} label="Phone" type={"number"} />
        <label>Gender</label>
        <div className={classes.genderInputsContainer}>
          <div className={classes.genderInput}>
            <label htmlFor="male">Male: </label>
            <input
              onChange={() => handleGenderChange("male")}
              type="radio"
              name="gender"
              id="male"
              value={"male"}
              checked={gender === "male"}
            />
          </div>
          <div className={classes.genderInput}>
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              onChange={() => handleGenderChange("female")}
              name="gender"
              id="female"
              value={"female"}
              checked={gender === "female"}
            />
          </div>
        </div>
        <div className={classes.form_actions}>
          <button className={classes.btn}>
            {!state.isLoading ? "Sending Request..." : "Add User"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddUser;
