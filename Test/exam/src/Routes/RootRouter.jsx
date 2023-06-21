import React, { useEffect } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage'
import { useSelector } from 'react-redux'
import AddUser from '../Components/User/AddUser'
import Users from '../Components/User/Users'
import User from '../Components/User/User'
import EditUser from '../Components/User/EditUser'

const PvtRoute =(props)=>{
  let store = useSelector(state=>state.authReducer);
  let navigate = useNavigate();
  useEffect(()=>{
    if(!store.isAuth){
     return navigate("/login")
    }
  },[store.isAuth])
  return<>
    {props.children}
  </>
}

const RootRouter = () => {
  
  return (
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path="/" element={<PvtRoute> <Users /></PvtRoute>} />
        <Route path="/user/:id" element={<PvtRoute><User /></PvtRoute>} />
        <Route path="/user/edit/:id" element={<PvtRoute><EditUser /></PvtRoute>} />
        <Route path="/adduser" element={<PvtRoute><AddUser /></PvtRoute>} />
    </Routes>
  )
}

export default RootRouter