import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const  ViewAllBankManagers=()=> {
    let navigate=useNavigate();

    const [allManager,setAllManager]=useState({});

    const [managerName,setManagerName]=useState("");

    const admin_jwtToken=sessionStorage.getItem("admin_jwtToken");

    const user=JSON.parse(sessionStorage.getItem("activeUser"));
  const bank=JSON.parse(sessionStorage.getItem("activeBank"));

    const retrieveAllBankManagers=async()=>{
      const response=await axios.get("http://localhost:8080/api/user/fetch/AllBankManagers?"
      +"managerName"+managerName,
      {header:{Authorization:"Bearer"+admin_jwtToken}})
      console.log(response.data)
      return response.data
  }
 useEffect (()=>{
      const getAllBanks=async()=>{
        const manager=await retrieveAllBankManagers();
        if(manager){
          setAllManager(manager.users)
        }

      }
      getAllBanks();
 },[])
   

  return (
    <div>
    <div><h2>AllBankManagers</h2>
    <div>
        <table>
        <thead>
            <tr>
            <th scope='col'>ManagerName</th>
            <th scope='col'>BankName</th>
            <th scope='col'>Email</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Contact</th>
            <th scope='col'>Street</th>
            <th scope='col'>City</th>
            <th scope='col'>Pincode</th>
            
            </tr>
          </thead>
          <tbody>
            {allManager.map((manager)=>{
              return(
                <tr>
                  <td><b>{manager.name}</b></td>
                  <td><b>{manager.bank.name}</b></td>
                  <td><b>{manager.email}</b></td>
                  <td><b>{manager.gender}</b></td>
                  <td><b>{manager.contact}</b></td>
                  <td><b>{manager.street}</b></td>
                  <td><b>{manager.city}</b></td>
                  <td><b>{manager.pincode}</b></td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default ViewAllBankManagers