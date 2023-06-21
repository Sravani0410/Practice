import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_USERS } from "../../Redux/AppReducer/actionTypes";
import classes from "./Users.module.css";
import { Model } from "../UI/Model/Model";
import modelClasses from "../UI/Model/Model.module.css"
import { Link, useNavigate } from "react-router-dom";
const Users = () => {
  let [showModel,setShowModel] = useState({id:null,flag:false});
  let users = useSelector((state) => state.appReducer);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let url = users.searchUser?process.env.REACT_APP_SERVER_BASE_URL + `users?phone=${users.searchUser}`:process.env.REACT_APP_SERVER_BASE_URL + "users"
  let fetchData = async () => {
    try {
      let response = await axios.get(url);
      dispatch({ type: SET_USERS, payload: response.data });
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  let handleDelete = async (id) => {
    try {
      await axios.delete(
        process.env.REACT_APP_SERVER_BASE_URL + `users/${id}`
        );
        let updatedUsers = users.users.filter(user=>user.id !==id);
        dispatch({type:SET_USERS,payload:updatedUsers})
    } catch (error) {
      console.log(error);
    }
    setShowModel({flag:false,id:null})
  };

  let alert = (
    <>
      <h1>Are you sure?</h1>
      <h4>Do you want to delete this</h4>
      <div className={classes.alertActions}><button className={modelClasses.cancle_btn} onClick={()=>setShowModel({flag:false,id:null})}>Cancle</button> <button className={modelClasses.delete_btn} onClick={() => handleDelete(showModel.id)}>Delete</button></div>
    </>
  );

  let body = users.users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td> <Link to={`/user/${user.id}`}>{`${user.firstname} ${user.lastname}`}</Link> </td>
        <td>{user.age}</td>
        <td>{user.phone}</td>
        <td>{user.gender}</td>
        <td className={classes.actionTd}>
          <button className={modelClasses.cancle_btn} onClick={()=>navigate(`/user/edit/${user.id}`)} >Edit</button>
          <button className={modelClasses.delete_btn} onClick={()=>setShowModel({flag:true,id:user.id})}>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <section className={classes.usersSection}>
      {users.users.length>0?<table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
        {showModel.flag && <Model>{alert}</Model>}
      </table>:<h1 style={{textAlign:"center"}} >Users Not Found</h1>}
    </section>
  );
};

export default Users;
