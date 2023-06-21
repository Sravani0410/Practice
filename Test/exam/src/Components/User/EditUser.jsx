import React, { useEffect, useRef, useState } from 'react';
import classes from "./EditUser.module.css";
import Input from '../UI/Input/Input';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditUser = () => {
    let [gender,setGender]=useState("male");
    let fn = useRef();
    let ln = useRef();
    let photo = useRef();
    let phone = useRef();
    let age = useRef();
    let navigate = useNavigate();
    let {id} = useParams();

    useEffect(()=>{
        let fetchUser = async ()=>{ 
            let user = await axios.get(process.env.REACT_APP_SERVER_BASE_URL+`users/${id}`);
            fn.current.value = user.data.firstname;
            ln.current.value = user.data.lastname;
            photo.current.value = user.data.photo;
            phone.current.value = user.data.phone;
            age.current.value = user.data.age;
            setGender(user.data.gender);
        }
        fetchUser()
    },[])
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let data = {
            firstname:fn.current.value,
            lastname:ln.current.value,
            photo:photo.current.value,
            phone:phone.current.value,
            age:age.current.value,
            gender:gender
        }
        let setUser =  async (data)=>{
            try {
                await axios.patch(process.env.REACT_APP_SERVER_BASE_URL+`users/${id}`,data);
            } catch (error) {
                
            }
            navigate("/");
        }
        setUser(data)

    }
    let handleGenderChange = (value) => {
        setGender(value);
      };
  return (
    <section className={classes.EditUserSection}>
        <form onSubmit={handleSubmit}>
        {/* {state.isError && <p style={{color:"red"}}>{state.errorMessage}</p>} */}
        <h1>Edit user</h1>
        <Input ref={fn} label="First Name" type={"text"} />
        <Input ref={ln} label="Last Name" type={"text"} />
        <Input ref={photo} label="Photo" type={"url"} />
        <Input ref={phone} label="Phone" type={"number"} />
        <div className={classes.imageContainer}>
            {/* {photo.current.value && <img src={photo.current.value}  alt="" />} */}
        </div>
        <Input ref={age} label="Age" type={"number"} />
        <label>Gender</label>
        <div className={classes.genderInputsContainer}>
          <div className={classes.genderInput}>
            <label htmlFor="male">Male: </label>
            <input
              onChange={() =>{handleGenderChange("male")}}
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
              onChange={()=>{handleGenderChange("female")}}
              name="gender"
              id="female"
              value={"female"}
              checked={gender === "female"}
            />
          </div>
        </div>
        <div className={classes.form_actions}>
          <button className={classes.btn}>
            {/* {!state.isLoading ? "Sending Request..." : "Add User"} */}
            Update
          </button>
        </div>
      </form>
    </section>
  )
}

export default EditUser