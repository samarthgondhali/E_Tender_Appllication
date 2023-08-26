//The Working User Details Page table... This one should be executed.
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

export default function TenderTable(){

    
let tenderData = [
  {
    organizationDetails: {
      tenderName: 'Construction Project',
      tenderDeadline: '2023-09-15',
      tenderType: 'Open',
      tenderCategory: 'Media',
      tenderLocation: 'City A',
      tenderAmount: 1000000,
      invitingAuthorityName: 'City Department of Public Works',
      invitingAuthorityAmount: 5000,
      address: '123 Main Street, City A',
      paymentMode: 'Demand Draft'
    },
    business: {
      businessName: 'tata Construction Company',
      businessLocation: 'City B'
    }
  },
  {
    organizationDetails: {
      tenderName: 'IT Services Procurement',
      tenderDeadline: '2023-10-10',
      tenderType: 'Closed',
      tenderCategory: 'Media',
      tenderLocation: 'City C',
      tenderAmount: 500000,
      invitingAuthorityName: 'City Government IT Department',
      address: '456 Tech Boulevard, City C',
      paymentMode: 'Demand Draft'
    },
    business: {
      businessName: 'Tech Solutions Inc.',
      businessLocation: 'City D'
    }
  },
  {
    organizationDetails: {
      tenderName: 'Supply of Medical Equipment',
      tenderDeadline: '2023-09-30',
      tenderType: 'Open',
      tenderCategory: 'Media',
      tenderLocation: 'City E',
      tenderAmount: 750000,
      invitingAuthorityName: 'Regional Hospital Authority',
      address: '789 Health Avenue, City E',
      paymentMode: 'Demand Draft'
    },
    business: {
      businessName: 'MedTech Supplies Ltd.',
      businessLocation: 'City F'
    }
  }
];
const [data, setData] = useState(tenderData);

const handleUpdate = (index) => {
    // Implement the logic to update the data here
    // For example: setData([...data.slice(0, index), updatedItem, ...data.slice(index + 1)]);
  };

  const handleDelete = (index) => {
    // axios.delete("http://localhost:8282/deleteTendersForUser/"+index).then(
    //   (res)=>{
    //     console.log("deleted for index "+index)
    //   }
    // )
  };
  
  useEffect(() => {
    getTenderForUser(tenderData)
  });
  const getTenderForUser = (obj) => {
    let query = {username:JSON.parse(localStorage.getItem("UserSession"))?.username}
    axios.post("http://localhost:8282/getTendersForUser",query).then(
      (res)=>{
        obj = [...res.data]
        tenderData = [...obj]
        setData(tenderData)
        console.log(tenderData)
      }
    );
 }



  return (
    <div>
      <h2>Tender Data</h2>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid black' }}>
            <th>Tender Name</th>
            <th>Deadline</th>
            <th>Name</th>
            <th>Location</th>
            <th>Amount</th>
            <th style={{ border: '1px solid black', padding: '8px' }}> Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((tender, index) => (
            <tr key={tender.id} style={{ borderBottom: '1px solid black' }}>
              <td>{tender.tenderName}</td>
              <td>{tender.endDate}</td>
              <td>{tender.tenderName}</td>
              <td>{tender.tenderLocation}</td>
              <td>{tender.tenderAmount}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {/* <button onClick={handleDelete}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


