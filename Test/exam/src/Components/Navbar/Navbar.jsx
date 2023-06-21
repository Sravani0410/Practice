import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import classes from "./Navbar.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_USER } from '../../Redux/AppReducer/actionTypes';
import { LOGOUT } from '../../Redux/AuthReducer/actionTypes';
const Navbar = () => {
    let users = useSelector(state=>state.appReducer.users);
    
    let dispatch = useDispatch();
    let location = useLocation();
    let timer;
    let handleSearch = (e)=>{
      if(timer) clearTimeout(timer);
      timer = setTimeout(()=>{
        dispatch({type:SEARCH_USER,payload:e.target.value})
      },1000)
    }
    let handleLogout = ()=>{
      localStorage.clear("Auth");
      dispatch({type:LOGOUT})
    }
  return (
    <div className={classes.navbar_container}>
        {(location.pathname==="/" || location==="") && <input className={classes.search} onChange={handleSearch} type="text" placeholder={"Search by phone"} />}
        <Link className={classes.link} to={"/"}>Home</Link>
        <Link className={classes.link} to={"/adduser"}>Add User</Link>
        <button className={classes.logout_btn} onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Navbar