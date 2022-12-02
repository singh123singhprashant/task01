import React,{useState} from 'react';
import './App.css';
import Header from './header';
import {Oval} from "react-loader-spinner";
import {IoMdFingerPrint} from "react-icons/io";


function App() {
  const userPassword = "Prashant@12345";
  const [loading,setLoading]= useState(false);
  const [password, setPassword] = useState(null);
  const [section,setSection]=useState(false)

  const handleBlur=(e)=>{
      setPassword(e.target.value);
  }

    const onSubmit = () => {
        if (password === userPassword) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSection(true)
            }, 2000);
        }
        else {
            console.log("Invalid Password");
        }
    }
    const timer=()=>{
        setTimeout(()=>{
            setSection(false)
            setPassword(null)
        },10000)
    }
    
  
  return (
      <div className="App">
        {
          section ? 
          <Header/> :
          <>
            {loading &&
              <div style={{
                position: "absolute",
                width:"100",
                height:"100",
                zIndex:"999",
                top:"20%",
                left:"40%",
                backgroundColor: "rgba(0,0,0,0)",
              }}>
              <Oval
              height="400"
              width="300"
              color="#33FFCC"
              wrapperStyle={{display:"block"}}
              wrapperClass=""
              visible={loading}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
              />  
            </div>
            }
            <div className="login" style={{position:"absolute", border: "5px solid #33FFCC", borderRadius: "50%", textAlign: "center", width: "25%", boxShadow: "0 0 30px #33FFCC",background:"black",margin:"100px 500px" }}>
                <IoMdFingerPrint style={{ fontSize: "100px", color: "#33FFCC",marginTop:"50px" }} />
                <p style={{ fontSize: "13px",color:"white"}}>ENTER YOUR PILEARNING PASSWORD</p>
                <input type="password" onBlur={handleBlur} placeholder="PASSWORD" style={{ width: "300px", height: "40px", borderRadius: "0px", "-webkit-text-security" :"square", border: "1px solid #33FFCC",marginBottom:"40px" }}/><br/>
                <button onClick={onSubmit} style={{ width: "150px", height: "50px", borderRadius: "0px", backgroundColor: "#33FFCC", color: "black", border: "none",marginBottom:"50px" }}><p style={{ fontWeight: "1000",fontStyle:"italic" }}>Enter Lab</p></button>
            </div>
          </>
          
        }   
      </div>
    
  )
}

export default App;
