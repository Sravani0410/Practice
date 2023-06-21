import { ADD_USER } from "./actionTypes"

export let addnewuser = (user)=>async(dispatch)=>{
    await dispatch({type:ADD_USER,payload:user})
}