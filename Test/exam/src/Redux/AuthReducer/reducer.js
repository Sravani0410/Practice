import { LOGIN, LOGOUT } from "./actionTypes";
let user = JSON.parse(localStorage.getItem("Auth"));
let AuthReducerInitState;
if(user){
     AuthReducerInitState = {
        isAuth: user.isAuth,
        token: user.token
    }
}else {
    AuthReducerInitState = {
        isAuth:false,
        token:null
    }
}
let authReducer = (state=AuthReducerInitState,{type,payload})=>{
    console.log("Auth Reducer",type,payload)
    switch (type) {
        case LOGIN:
            localStorage.setItem("Auth",JSON.stringify({isAuth:true,token:payload.userid}));
            return {
                ...state,
                isAuth:true,
                token:payload.userid
            }
            case LOGOUT:
                return {
                    ...state,
                    isAuth:false,
                    token:null
                }
        default:
            return state;
    }
}

export {authReducer}