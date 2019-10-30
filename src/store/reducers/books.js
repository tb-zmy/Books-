import {handleActions} from "redux-actions"

const defaultState={
    userInfo:""
}
export default handleActions({
    LOGIN_SIGN_TYPE:(state,action)=>{
        let signState=Object.assign({},state)
        console.log(signState,action)
        // signState.userInfo=action.payload.userinfo;
        return state;
    }
},defaultState);