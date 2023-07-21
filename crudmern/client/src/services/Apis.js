import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const registerFunction=async(data,header)=>{
    // POST-->method /register --> it is comming from backend url path
    return await commonRequest("POST",`${BASE_URL}/register`,data,header);
}