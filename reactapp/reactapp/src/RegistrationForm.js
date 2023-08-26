//This Form to be linked to Sign-Up section

//Username & Password to be mapped to the login page SQL user Database
// it is using the same data

//For Phone number section: npm install react-phone-input-2 --save
//import PhoneInput from 'react-phone-input-2';
//import 'react-phone-input-2/lib/style.css';

import axios from "axios";
import React,{useState} from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import './PhoneNumberInput.css';
import './RegistrationForm.css';

export default function Register(){
// let RegisterNameFirst;
// let RegisterNameLast;
// let RegisterEmail;
// let DateOfBirth;
// let Number;

let RegisterUser = {
    firstname:"",
    lastname:"",
    email:"",
    dob:"",
    username:"",
    password:"",
    phonenumber:"",
};

let [RegisterNewUser, setRegisterNewUser] = useState(RegisterUser);

// const handleInputChange = (e) =>{
//     const {name, value} = e.target;
//     setRegisterNewUser({...RegisterNewUser, [name]:value});
//     // console.log(RegisterNewUser);
// };

const handleInputChange = (e, name, value) => {
    if (e && e.target) {
        ({ name, value } = e.target);
    }
    setRegisterNewUser({ ...RegisterNewUser, [name]: value });
};



// function FirstName(e){
//     RegisterNameFirst=e.target.value;
// console.log(RegisterNameFirst);
// }

// function LastName(e){
//     RegisterNameLast = e.target.value;
//     console.log(RegisterNameLast);
// }

// function SubmitEmail(e){
//     RegisterEmail = e.target.value;
//     console.log(RegisterEmail);    
// }

// function SubmitDate(e){
//     var Gdate;
// DateOfBirth = e.target.value;
// Gdate = DateOfBirth.getDay()+'-'+(DateOfBirth.getMonth()+1)+'-'+DateOfBirth.getYear();
// console.log(Gdate);
// }

// function SubmitDate(e) {
//     var Gdate;
//     DateOfBirth = new Date(e.target.value); // Convert the input value to a Date object
//     Gdate =  (DateOfBirth.getFullYear() )+ '-' + (DateOfBirth.getMonth() + 1) + '-' + DateOfBirth.getDate();
//     console.log(Gdate);
// }


// function PhoneNumber(e){
//     RegisterNewUser.phonenumber = e.target;
// }

const handleSubmit = (e) => {
    e.preventDefault();
    sendRegister();
    console.log(RegisterNewUser);
};

const sendRegister = () => {
    axios.post("http://localhost:8282/register",RegisterNewUser).then(
      (res)=>{console.log("Register sucessful",res.data)}
    );
  }

return (


    <div>
    <div>
        <form className="registration-container" onSubmit={handleSubmit}>
        {/* <h2 >Registration form:</h2> */}
        <table>
            <thead>
                <th>
                     <tb> User Details </tb>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td className='registration-label'> First Name: <input type="text" name="firstname" required maxLength={20} value={RegisterNewUser.firstname} onChange={handleInputChange}/> 
                    </td>
                </tr>
                <tr>
                    <td> Last Name: <input type="text" name="lastname" required maxLength={20} value={RegisterNewUser.lastname} onChange={handleInputChange}/>
                    </td>
                </tr>
                <tr>
                    <td> Email: <input type="email" name="email" required value={RegisterNewUser.email} onChange={handleInputChange}></input>
                    </td>
                </tr>
                <tr>
                    <td> Date of Birth: <input type="date" name="dob"  required value={RegisterNewUser.dob} onChange={handleInputChange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Phone number: <PhoneInput country={'in'} name="phonenumber"  value={RegisterNewUser.phonenumber}  onChange={(value) => handleInputChange(null, "phonenumber",value)} />
                    </td>
                </tr>
                <tr>
                    <td> Username: <input type="text" maxLength={10} name="username" value={RegisterNewUser.username} onChange={handleInputChange}></input>
                    </td>
                </tr>
                <tr>
                    <td> Password: <input type="text" maxLength={10} name="password" value={RegisterNewUser.password} onChange={handleInputChange}></input>
                    </td>
                </tr>
            </tbody>
            <tfoot>
            <tr> 
            <td><input type="Button" value="Submit" onClick={handleSubmit}/> </td> 
            </tr>
            </tfoot>
        </table>
        </form>
        </div>      
    </div>
);

}