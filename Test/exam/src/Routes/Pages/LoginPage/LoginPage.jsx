import React from 'react'
import Login from '../../../Components/Login/Login'
import classes from "./LoginPage.module.css"
const LoginPage = () => {
  return (
    <section className={classes.formSection}>
        <Login />
    </section>
  )
}

export default LoginPage