import React from 'react';
import {IoMdFingerPrint} from "react-icons/io";

const Login=()=>{
    return(
        <div className="login" style={{position:"absolute", border: "5px solid #33FFCC", borderRadius: "50%", textAlign: "center", width: "25%", boxShadow: "0 0 30px #33FFCC",background:"black",margin:"100px 500px" }}>
                <IoMdFingerPrint style={{ fontSize: "100px", color: "#33FFCC",marginTop:"50px" }} />
                <p style={{ fontSize: "13px",color:"white"}}>ENTER YOUR PILEARNING PASSWORD</p>
                <input type="password" placeholder="PASSWORD" style={{ width: "300px", height: "40px", borderRadius: "0px", "-webkit-text-security" :"square", border: "1px solid #33FFCC",marginBottom:"40px" }}/><br/>
                <button  style={{ width: "150px", height: "50px", borderRadius: "0px", backgroundColor: "#33FFCC", color: "black", border: "none",marginBottom:"50px" }}><p style={{ fontWeight: "1000",fontStyle:"italic" }}>Enter Lab</p></button>
        </div>
    )
}
export default Login