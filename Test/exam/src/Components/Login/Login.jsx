import React, { useEffect, useRef } from 'react'
import classes from "./Login.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/AuthReducer/actions';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate()
    let store = useSelector(state=>state.authReducer)
    let username = useRef()
    let password = useRef();
    useEffect(()=>{

        if(store.isAuth){
            return navigate("/")
        }
    },[store])

    let handleSubmit = (e)=>{
        e.preventDefault();
        let formData = {
            userid: username.current.value,
            password:password.current.value
        }
        dispatch(login(formData))
        
    }
    

  return (
        <form onSubmit={handleSubmit} className={classes.login_form}>
            <div className={classes.form_control}>
                <label htmlFor="userid">User Id</label>
                <input ref={username} type="text" className={classes.input_field} id='userid' />
            </div>
            <div className={classes.form_control}>
                <label htmlFor="password">password</label>
                <input ref={password} type="password" className={classes.input_field} id='password' />
            </div>
            <div className={classes.form_actions}>
                <button className={classes.btn}>Login</button>
            </div>
        </form>
  )
}

export default Login