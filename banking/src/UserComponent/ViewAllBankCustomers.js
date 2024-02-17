import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from'axios'

const ViewAllBankCustomers=()=> {
    //usenavigate Hook
    let navigate=useNavigate();
    //allCustomer
      const [allCustomer,setAllCustomer]=useState({});
    //Customer name
    const [customerName,setCustomerName]=useState("");
    //temporary customer name
    const [tempCustomerName,setTempCustomerName]=useState("");
    // update user status request
    const [updateUserStatusRequest,setUpdateUserStatusRequest]=useState({userId:"",status:""});
    const admin_jwtToken=sessionStorage.getItem("admin_jwtToken");

    const user=JSON.parse(sessionStorage.getItem("activeUser"));
  const bank=JSON.parse(sessionStorage.getItem("activeBank"));
  
    const retrieveAllBankCustomersByName=async()=>{
        const response=await axios.get("http://localhost:8080/api/user/customer/search?"
        +"customerName"+customerName,
        {header:{Authorization:"Bearer"+admin_jwtToken}})
        console.log(response.data)
        return response.data
    }
     
    const retrieveAllCustomers=async()=>{
       const response=await axios.get("http://localhost:8080/api/user/fetch/AllBankUsers?role=customer"
       +"customerName"+customerName,
       {header:{Authorization:"Bearer"+admin_jwtToken}})
       console.log(response.data)
       return response.data
    }
      
    useEffect(()=>{
      if(customerName!==""){
          //with out using async we can't use  await
          const getAllCustomerByName=async()=>{

              //await -- it waits until function executes completely
              const customer=await retrieveAllBankCustomersByName();
              if(customer){
                  setAllCustomer(customer.users)
              }
          }
          getAllCustomerByName();
      }
      else{
          const getAllCustomers=async()=>{
              const customer=await retrieveAllCustomers();
              if(customer){
                  setAllCustomer(customer.users);
              }
          }
          getAllCustomers();
      }
  },[customerName])

      const searchByCustomerName =(e)=>{
        e.preventDefault();
        setCustomerName(tempCustomerName)}

        const viewAllAccountDetails=(customer)=>{
          customer.preventDefault();
          navigate("/customer/bank/Account/detail",{state:customer});
        };
    
  return (
    <div>
      
    <div>
      <h2>AllBankCustomers</h2>
      </div>
      <form>
      <div>
     <label><b>CustomerName</b></label> 
      <input
      type='text'
      placeholder='Enter the Customer Name'
      onChange={(e)=>setTempCustomerName(e.target.value)}
      value={tempCustomerName}
      required
      />
      </div>
      <div>
        <button type='submit' onClick={searchByCustomerName}>
          Search
        </button>
      </div>
      </form>
      <div>

        <table>
          <thead>
            <tr>
            <th scope='col'>BankName</th>
            <th scope='col'>Email</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Contact</th>
            <th scope='col'>Street</th>
            <th scope='col'>City</th>
            <th scope='col'>Pincode</th>
            <th scope='col'>Account Details</th>
            <th scope='col'>status</th>
            </tr>
          </thead>
          <tbody>
          {allCustomer.map((customer)=>{
              return(
                <tr>
                  <td><b>{customer.bank.name}</b></td>
                  <td><b>{customer.user.email}</b></td>
                  <td><b>{customer.user.gender}</b></td>
                  <td><b>{customer.user.contact}</b></td>
                  <td><b>{customer.user.street}</b></td>
                  <td><b>{customer.user.city}</b></td>
                  <td><b>{customer.user.pincode}</b></td>
                    
                    {/* isAccountLinked */}

                  <td>{(()=>{if(customer.isAccountLinked==="yes"){
                   return (<button onClick={()=>viewAllAccountDetails(customer)}><b>ViewAccount</b></button>);
                   }})() }

                   {/* Account not Linked */}

                   {(()=>{if(customer.isAccountLinked!=="yes"){
                   return (<b>Account Is Not Linked</b>);
                   }})() 
                   }</td>

                   <td><b>{customer.user.status}</b></td>


                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      </div>
       
      
  )
}

export default ViewAllBankCustomers