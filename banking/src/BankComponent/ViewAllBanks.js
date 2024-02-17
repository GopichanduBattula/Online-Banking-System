import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ViewAllBanks=()=>{
    let navigate=useNavigate();
   
    const[allBanks,setAllBanks]=useState({});
    const admin_jwtToken=sessionStorage.getItem("admin_jwtToken");
    const retrieveAllBanks=async()=>{
        const response=await axios.get("http://localhost:8080/api/bank/fetch/allBanks",
        {
          headers:{ Authorization: "Bearer " + admin_jwtToken},
        })
        return response.data;
      }

      useEffect(()=>{ 
        const getAllBanks=async()=>{
            const allBanks=await retrieveAllBanks();
            if(allBanks){
                setAllBanks(allBanks.banks);
            }
          };
         getAllBanks();
         },[]);


  return (
    <div>

    <div><h2>ViewAllBanks</h2></div>
    <div>
        <table>
        <thead>
            <tr>
            <th scope='col'>BankName</th>
            <th scope='col'>BankCode</th>
            <th scope='col'>Address</th>
            <th scope='col'>PhoneNumber</th>
            <th scope='col'>Email</th>
            <th scope='col'>WebSite</th>
            <th scope='col'>Country</th>
            <th scope='col'>Currency</th>
            
            </tr>
          </thead>
          <tbody>
            {allBanks.map((banks)=>{
              return(
                <tr>
                  <td><b>{banks.name}</b></td>
                  <td><b>{banks.code}</b></td>
                  <td><b>{banks.address}</b></td>
                  <td><b>{banks.phoneNumber}</b></td>
                  <td><b>{banks.email}</b></td>
                  <td><b>{banks.website}</b></td>
                  <td><b>{banks.country}</b></td>
                  <td><b>{banks.currency}</b></td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
    
    </div>
  )
}

export default ViewAllBanks