import { LOGIN } from "./actionTypes"

export let login = (data)=>(dispatch)=>{
    dispatch({type:LOGIN,payload:data});
}