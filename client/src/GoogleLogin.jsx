import React from "react";
import {useGoogleLogin} from '@react-oauth/google'
import {googleAuth} from "./api.js"
import { useNavigate } from "react-router-dom";

const GoogleLogin = ()=> {
    const navigate = useNavigate();

    const responseGoogle = async(authResult)=>{
        try{
            console.log(authResult.code , "authResult")

            if(authResult.code){
                const result = await googleAuth(authResult.code)
                const {email , name , image} = result.data.user
                const token = result.data.token
                const obj = {name , email , image , token} 
                localStorage.setItem('user-info' , JSON.stringify(obj))
                // console.log( "result.data.user", result.data.user)
                // console.log( "result.data.token", result.data.token)
                navigate('/dashboard')
            } 

        }catch(err){
            console.error("Error while requesting google code" ,err)
        }
    }
    const googleLogin = useGoogleLogin({
        onSuccess : responseGoogle,
        onError : responseGoogle,
        flow : 'auth-code'
    })
  return (
    <div>
      <button onClick={googleLogin}>
        Login With Google
      </button>
    </div>
  )
}
export default GoogleLogin