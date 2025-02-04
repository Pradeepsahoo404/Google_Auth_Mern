import React from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () =>{
    const navigate = useNavigate()
    return (
        <div>
           <h2>404 Page Not Found</h2> 
            <button onClick={()=>navigate('/login')}>login</button>
        </div>
    )
}

export default PageNotFound