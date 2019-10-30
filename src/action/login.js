import {LoginSignType} from "./loginType"
import {loginApi} from "@api/users"
import {createAction} from "redux-actions"

const loginAction=createAction(LoginSignType,val=>val);
export const loginAsyncAction=(username,password)=>{
    return async (dispatch)=>{
        let data=await loginApi(username,password);
        if (data.code==200) {
            sessionStorage.setItem("token",data.data.token);
            dispatch(loginAction(data.data))
            return true;
        }else{
            return false;
        }
    }
}