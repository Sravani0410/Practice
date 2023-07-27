import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const registerFunction=async(data,header)=>{
    // POST-->method /register --> it is comming from backend url path
    return await commonRequest("POST",`${BASE_URL}/register`,data,header);
}

// for search functionlity is handle with one api with multiple works--> after path ?search is called "query params"
export const userDetailsFunction=async(search,filtergender,status,sort,page)=>{
    return await commonRequest("GET",`${BASE_URL}/userdetails?search=${search}&filtergender=${filtergender}&status=${status}&sort=${sort}&page=${page}`,"");
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

export const statuschangefunction=async(id,status)=>{
    return await commonRequest("PUT",`${BASE_URL}/userstatus/${id}`,{status})
}

export const exporttocsvfunction=async()=>{
    return await commonRequest("GET",`${BASE_URL}/userexport`,"")
}