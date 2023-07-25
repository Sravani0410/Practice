import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const registerFunction=async(data,header)=>{
    // POST-->method /register --> it is comming from backend url path
    return await commonRequest("POST",`${BASE_URL}/register`,data,header);
}

export const userDetailsFunction=async()=>{
    return await commonRequest("GET",`${BASE_URL}/userdetails`,"");
}

export const singleuserget=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/userdetails/${id}`,"")
}

export const editfun=async(id,data,header)=>{
    return await commonRequest("PUT",`${BASE_URL}/useredit/${id}`,data,header)
}

export const userDeleteFunction=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/userdelete/${id}`,{})
}