import React from "react";
import { useState } from "react";
import axios from "axios";
import './TenderSubmit1.css'
export default function SubmitTender1(){

    const currentDate = new Date();

    // Get day, month, and year from the current date
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();
    
  
    // Format the date as "YYYY-MM-DD" string
    const postDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
    const username = "Hello";

    var referenceNo = username+Math.floor(Math.random() * 10000000);

let initialData = {
    
     address:"",
     tenderName:"",
     tenderDeadline:"",
     tenderType:"Open",
     tenderCategory:"Media",
     tenderLocation:"",
     tenderAmount:"",
     paymentMode:"Demand Draft",
     invitingAuthorityName:"",
     invitingAuthorityAmount:"",
     postDate,
     referenceNo,
    };


    let BusinessData = {
        businessName : "",
        businessLocation:"",
    };

    let [FormData, setFormData] = useState(initialData);
    let [BusFormData, setBusFormData] = useState(BusinessData);

 const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...FormData, [name]: value });
          };

    const handleInputChangeBusiness = (e) => {
            const { name, value } = e.target;
            setBusFormData({ ...BusFormData, [name]: value });
            // console.log("business: ", BusFormData);
          };

          var obj = {
            "organizationDetails": FormData,  "business": BusFormData, "attachments": null
        }
        // console.log(obj);



        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     addTender(obj);
        //     addUserInfo();
        //     console.log(obj);
        // };


        const handleSubmit = (e) => {
            e.preventDefault();
        
            // Assign referenceNo
            const newFormData = { ...FormData, referenceNo: referenceNo };
            setFormData(newFormData); // Update state with new referenceNo
        
            // Create obj with updated FormData
            const updatedObj = {
                "organizationDetails": newFormData,
                "business": BusFormData,
                "attachments": null
            };
        
            // Call the functions
            addTender(updatedObj);
            addUserInfo(newFormData);
            console.log(updatedObj);
        };



        const addTender = (obj) => {
            axios.post("http://localhost:7000/addData",obj).then(
              (res)=>{
                console.log(res.data)
              }
            );
         }
         
         const addUserInfo = (updatedFormData)=>{
            var obj2 = {
                username:JSON.parse(localStorage.getItem("UserSession"))?.username,
                referenceNo:updatedFormData.referenceNo,
                tenderName:updatedFormData.tenderName,
                tenderLocation:updatedFormData.tenderLocation,
                postDate:updatedFormData.postDate,
                endDate:updatedFormData.tenderDeadline,
                tenderAmount:parseInt(updatedFormData?.tenderAmount)
            }
            axios.post("http://localhost:8282/addTendersForUser",obj2).then(
              (res)=>{
                console.log(res.data)
              }
            );
         }

return(
    <div>
    {/* onSubmit={handleSubmit}  //under the form field */}
           <form onSubmit={handleSubmit} className="tender-submit-form">
           <table>
               <thead>
                   <td>
                       <h2>
                           Organisational Details: 
                       </h2>
                   </td>
               </thead>
               <tbody>
                   <tr>
                   <td>
                   Business Name:
                       <input type="text" maxLength={50} name="businessName" value={BusFormData.businessName} onChange={handleInputChangeBusiness}  className="input-field"/> </td>
                   </tr>
                   <tr>
                       <td>Business Location: <input type="text" maxLength={10} name="businessLocation" value={BusFormData.businessLocation}  onChange={handleInputChangeBusiness}/> </td>
                   </tr>
               </tbody>
               <br></br>
               <br></br>
               <thead>
                   <td>
                       <h2>
                           Tender Details: 
                       </h2>
                   </td>
               </thead>
               <tbody>
                   <tr>
                       <td> Tender Name: <input type="text" maxLength={20} name="tenderName" value={FormData.tenderName} onChange={handleInputChange}/> 
                       </td>
                   </tr>
                   <tr>
                   {/* This part is to be automatically saved without prompting the user to do so */}
                       {/* <td> Tender PostDate: <input type="text" name="tdate"  onChange={handleInputChange}/>
                       </td> */}
                   </tr>
                   <tr>
                       <td> Tender Deadline: <input type="date" name="tenderDeadline" value={FormData.tenderDeadline} onChange={handleInputChange}/>
                       </td>
                   </tr>
                   <tr>
                   {/* This field needs to be auto-generated using formula which needs to be devised */}
                       {/* <td> Tender Reference number: <input type="number" name="TenderReferenceNumber"></input>
                       </td> */}
                   </tr>
                   <tr>
                       <td>
                               Tender Type: <select  name="tenderType" value={FormData.tenderType} onChange={handleInputChange}>
                                       <option value="India" selected>India</option>
                                       <option value="Global">Global</option>
                                       </select>
                       </td>
                   </tr>
                   <tr>
                       <td>
                           Tender Category: <select id="Category" name="tenderCategory" value={FormData.tenderCategory} onChange={handleInputChange}>
                               <option value="Media" selected>Media</option>
                               <option value="Construction">Construction</option>
                               <option value="Defence">Defence</option>
                               <option value="State Electricity">State Electricity</option>
                               <option value="IT Projects">IT Projects</option>
                           </select>
                       </td>
                   </tr>
                   <tr>
                       <td>
                           Tender Business Location: <input type="Text" name="TbusinessLocation" maxLength="10" value={FormData.TbusinessLocation} onChange={handleInputChange}/>
                       </td>
                   </tr>
                   <tr>
                       <td>
                           Address: <textarea name="address" maxLength="225" value={FormData.address} onChange={handleInputChange}/>
                       </td>
                   </tr>
                   <tr>
                       <td>
                           Tender Amount: <input type="number" name="tenderAmount" step="0.01" placeholder="0.00" min="0" value={FormData.tenderAmount} onChange={handleInputChange}/>
                       </td>
                   </tr>
                   <tr>
                       <td>
                           Tender Payment: <select id="paymentMode" name="paymentMode" value={FormData.paymentMode} onChange={handleInputChange}>
                               <option value="Demand Draft" selected>Demand Draft</option>
                               <option value="Banker's Cheque">Banker's Cheque</option>
                               <option value="Small Savings Instrument">Small Savings Instrument</option>
                               </select>
                       </td>
                   </tr>
                   <tr>
                   {/* This field needs to be verified from Jeremy to make sure this works fine */}
                       <td>Tender Documents: <input type="file"></input> 
                       </td>
                   </tr>
               </tbody>
                   <br></br><br></br>
               <thead>
                   <h2>
                       Inviting Authority: 
                   </h2>
               </thead>
               <tbody>
               <tr>
                   <td>
                       Inviting Authority Name: <input type="text" name="invitingAuthorityName" value={FormData.invitingAuthorityName} onChange={handleInputChange}></input>
                   </td>
               </tr>
               <tr>    
                   <td>
                       Inviting Authority Amount: <input type="number" name="invitingAuthorityAmount" step="0.01" placeholder="0.00" min="0" value={FormData.Amount} onChange={handleInputChange}></input>
                   </td>
               </tr>
               </tbody>
           </table>
           <input type="submit" value="Submit" onClick={handleSubmit} className="submit-button"></input>
           {/* <button onClick={logFormData}>Log Form Data</button> */}
           </form>
          
           </div>
       );
   }
   