import {loginAsyncAction} from "@action/login"
import {message} from "antd"
export const mapStateToProps=(state)=>({


})
export const mapDispatchToProps=(dispatch)=>({
    async handleLogin(username,password){
        let flag=await dispatch(loginAsyncAction(username,password))
        if(flag){
            message.success("登录成功",2,()=>{
                this.history.push("/home")
            })
        }else{
            this.history.push("/login")
        }
    }
    
})