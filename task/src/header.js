import React from 'react';
import { GiStrongMan,GiProgression,GiSandsOfTime } from "react-icons/gi";
import Login from './login';


const Header=()=>{
    return(
        <>
        <Login/>
        <div className="header" style={{display:"flex"}}>
            <div className="left-home" style={{ border: "5px solid #33FFCC",width:"50%",padding:"10px 50px 10px 40px",background:"black"}}>
                <h1 style={{color:"#fff"}}>Javascript</h1>
                <p style={{color:"grey"}}>This course is provisioned by <span style={{color:"white",fontWeight:"bold"}}>Nexxt Labs</span></p>
                <ul style={{ color:"#33FFCC",fontSize:"20px",fontWeight:"bold",display:"flex"}}>
                <li style={{marginLeft:"-20px"}}>Labs</li>
                <li>Exercises</li>
                <li>Do it Yourself</li>
                </ul>
                <div className='exercises' style={{ display: "flex",marginTop:"30px"}}>
                    <GiStrongMan style={{ fontSize: "50px", color: "#33FFCC",border:"1px solid #33FFCC",padding:"20px"}}/>
                <div className="details" style={{color:"white",marginTop:"-20px",marginLeft:"20px"}}>
                    <h3>EXERCISES</h3>
                    <p style={{color:"grey"}}><span style={{color:"#33FFCC",fontSize:"50px"}}>9</span>completed out of 84</p>
                </div>
                </div>
                <div className="projects" style={{ display: "flex",marginTop:"30px"}}>
                <GiProgression style={{ fontSize: "50px", color: "#33FFCC",border:"1px solid #33FFCC",padding:"20px"}}/>
                <div className="details" style={{color:"white",marginTop:"-20px",marginLeft:"20px"}}>
                    <h3>PROJECTS</h3>
                    <p style={{color:"grey"}}><span style={{color:"#33FFCC",fontSize:"50px"}}>2</span>completed out of 6</p>
                </div>
                </div>
                <div className="time-spent" style={{ display: "flex",marginTop:"30px"}}>
                <GiSandsOfTime style={{ fontSize: "50px", color: "#33FFCC",border:"1px solid #33FFCC",padding:"20px"}}/>
                <div className="details" style={{color:"white",marginTop:"-20px",marginLeft:"20px"}}>
                    <h3>TIME SPENT</h3>
                    <p style={{color:"grey"}}><span style={{color:"#33FFCC",fontSize:"50px"}}>13</span>hours till now</p>
                </div>
                </div>
            </div>
            <div className="right-home" style={{ border: "5px solid #33FFCC",width:"48%",height:"80%",padding:"80px 50px 70px 50px",background:"black"}}>
                <div style={{marginLeft:"63%"}}>
                    <div style={{width:"100px",height:"30px",border:"1px solid #33FFCC",marginBottom:"20px"}}></div>
                    <div style={{width:"100px",height:"30px",border:"1px solid #33FFCC",marginBottom:"20px"}}></div>
                    <div style={{width:"100px",height:"30px",border:"1px solid #33FFCC",marginBottom:"20px",background:"#33FFCC"}}></div>
                    <div style={{width:"100px",height:"30px",border:"1px solid #33FFCC",marginBottom:"20px",background:"#33FFCC"}}></div>
                    <div style={{width:"100px",height:"30px",border:"1px solid #33FFCC",marginBottom:"20px",background:"#33FFCC"}}></div>
                    <div style={{width:"100px",height:"30px",border:"1px solid #33FFCC",marginBottom:"20px",background:"#33FFCC"}}></div>
                    <div style={{width:"100px",height:"30px",border:"1px solid #33FFCC",marginBottom:"20px",background:"#33FFCC"}}></div>
                </div>
                <h1 style={{color:"#33FFCC",marginLeft:"58%"}}> 37 hours left</h1>
                <p style={{color:"grey",marginLeft:"45%",textAlign:"center"}}>out of 50 hours</p>
            </div>
          </div>
          </>

    )
}
export default Header;



