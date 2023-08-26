import React, { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import './LoginPage.css'

export default function LoginPage(){

  const navigate = useNavigate();
  let LoginData = {
  username:"",
  password:"",
}

let[LoginDetails,setLoginDetails] = useState(LoginData);

const handleInputChangeForLogin = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...LoginDetails, [name]:value});
    // console.log(LoginDetails);
};

const handleSubmit = (e) => {
    e.preventDefault();
    sendLogin();
    console.log(LoginDetails);
};

const sendLogin = () => {
  axios.post("http://localhost:8282/login",LoginDetails).then(
    (res)=>{
      localStorage.setItem("UserSession",JSON.stringify(res.data))
      console.log(res.data)
      localStorage.getItem("UserSession")
      navigate("/UserDetails")
    }
  );
}



//   function loginID(e){
//       username = e.target.value
//       console.log(username)
//   }

//   function pwd(e){
//       pass = e.target.value
//       console.log(pass)
//   }

//   function submitevent(){

//       let flag =false
//       let arr = [{ uname: "xxx", password: "123" },
//       { uname: "rrr", password: "13" },
//       { uname: "xeex", password: "23" },]

//       for(let i of arr){
//           console.log(username)
//           if(i.uname == username && i.password == pass){
//           flag=true
//           break
//       }
//   }
    //   if(flag){
    //       setchange("welcome")
    //   }
    //   else{
    //       setchange("Not registered user")
    //   }
//   }

      return(
        <div >
        <div>
          <form className='login-container'>
            <table >
            <thead>
                <th>
                <h2 className='login-header'>E-Tender Login Page</h2>
                </th>
              </thead>
            <tbody>
            <tr>
              <td>
              <label htmlFor='username' className='login-label'>Username/Email: </label>
               <input type="text" name="username" value={LoginDetails.username} onChange={handleInputChangeForLogin} className='Login-User'></input>
              </td>
            </tr>
            <tr>
                <td>
                <label htmlFor='password' className='login-label'>Password: </label>
                <input type="password" name="password"  value={LoginDetails.password} onChange={handleInputChangeForLogin} className='Login-Password'></input>
                </td>
            </tr>
            <tr>
            <td>
            {/* onClick={submitevent} in the below button */}
            <div className='button-group'>
                <input type="button" class="btn btn-primary" id="h1" value="Login" onClick={handleSubmit} className='login-button'/> &nbsp;
                <input type="button" class="btn btn-primary" value="Forgot Password"  className='forgot-password-button'/> 
                
                </div>
                </td>
                </tr>
                <tr>
                <td>
                <div className='button-group'>
                <input type="button" class="btn btn-primary" value="Sign Up" ></input>
                </div>
                </td>
                </tr>
                <div className='button-group'> 
            <tr>
              <input type='button' class="btn btn-primary" value='Login using Google' className='google-login-button'/>
            </tr>
            </div>
                {/* <p id="h2">{change}</p> */}
                </tbody>
            </table>
            </form>
        </div>
        </div>
    );
    }