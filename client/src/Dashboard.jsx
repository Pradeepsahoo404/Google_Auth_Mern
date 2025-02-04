import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () =>{
    const navigate = useNavigate()
    const [userInfo , setUserInfo] = useState(null);
    useEffect(()=>{
        const data = localStorage.getItem("user-info");
        const userData = JSON.parse(data);
        console.log(userData , "userDAta")
        setUserInfo(userData)
    },[])

    const logoutHandle = ()=>{
        localStorage.removeItem("user-info");
        navigate('/login')
    }
    return (
        <div>
            hello User you are login

            <h1>Welcome: {userInfo?.name}</h1>
            <h3>Email: {userInfo?.email}</h3>
            <img src={userInfo?.image} alt="profile_image" />
            <button onClick={logoutHandle}>Logout</button>
        </div>
    )
}

export default Dashboard