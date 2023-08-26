import React, { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

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
          <div>
            <center>
            <form>
              <table>
              <thead>
                  <th>
                  <h2>E-Tender Login Page</h2>
                  </th>
                </thead>
              <tbody>
              <tr>
                <td>
                    Username/Email: <input type="text" name="username" value={LoginDetails.username} onChange={handleInputChangeForLogin}></input>
                </td>
              </tr>
              <tr>
                  <td>
                  Password: <input type="password" name="password"  value={LoginDetails.password} onChange={handleInputChangeForLogin} ></input>
                  </td>
              </tr>
              <tr>
              <td>
              {/* onClick={submitevent} in the below button */}
                  <input type="button" class="btn btn-primary" id="h1" value="Login" onClick={handleSubmit} /> &nbsp;
                  <input type="button" class="btn btn-primary" value="Forgot Password" /> 
                  </td>
                  </tr>
                  <tr>
                  <td>
                  <input type="button" class="btn btn-primary" value="Sign Up"></input>
                  </td>
                  </tr>
              <tr>
                <input type='button' class="btn btn-primary" value='Login using Google' />
              </tr>
                  {/* <p id="h2">{change}</p> */}
                  </tbody>
                  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br>
                  </br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <br></br><br></br><br/>
                </table>
              </form>
              </center>
          </div>
      );
      }