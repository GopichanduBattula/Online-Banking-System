import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from 'react-router-dom'
const AddBankAccount=()=> {
    let navigate=useNavigate();
    let location=useLocation();
    const customer=location.this.state;
    const bank=JSON.parse(sessionStorage.getItem("Active-Bank"));
    const bank_jwtToken=JSON.parse(sessionStorage.getItem("bank-jwtToken"));
    const[bankAccount,setBankAccount]=useState({
        number:"",
        ifscCode:"",
        type:"",
        bankId:bank.bank.id,
        userId:customer.id
    })
    const handleInput=(e)=>{
      setBankAccount({...bankAccount,[e.target.name]:e.target.value})
    }
    const saveAccount = (e) => {
        fetch("http://localhost:8080/api/bank/account/add", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + bank_jwtToken,
          },
          body: JSON.stringify(bankAccount),
        })
          .then((result) => {
            console.log("result", result);
            result.json().then((res) => {
              console.log(res);
    
              if (res.success) {
                console.log("Got the success response");
    
                toast.success(res.responseMessage, {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
    
                setTimeout(() => {
                  navigate("/customer/bank/account/detail", { state: customer });
                }, 1000); // Redirect after 3 seconds
              } else {
                console.log("Didn't got success response");
                toast.error("It seems server is down", {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                setTimeout(() => {
                  window.location.reload(true);
                }, 1000); // Redirect after 3 seconds
              }
            });
          })
          .catch((error) => {
            console.error(error);
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          });
        e.preventDefault();
      };
  return (
    <div>
    <div><h2>AddBankAccount</h2></div>
    <form>

    <div>
        <label><b>BankName</b></label>
        <input type='text' name='bankName'
        value={bank.bank.name} readOnly/>
    </div>
    <div>
        <label><b>BankCode</b></label>
        <input type='text' name='bankCode'
        value={bank.bank.code} readOnly/>
    </div>
    <div>
        <label><b>CustomerName</b></label>
        <input type='text' name='customerName'
        value={customer.name} readOnly/>
    </div>
    <div>
        <label><b>CustomerEmail</b></label>
        <input type='text'  name='customerEmail'
        value={customer.email} readOnly/>
    </div>
    <div>
        <label><b>CustomerContact</b></label>
        <input type='text' name='customerContact'
        value={customer.contact} readOnly/>
    </div>
    <div>
        <label><b>AccountNumber</b></label>
        <input type='number' id='number' name='number'
        onChange={handleInput}
        value={bankAccount.number}
        />
    </div>
    <div>
        <label><b>IfscCode</b></label>
        <input type='text'  name='ifscCode'
        onChange={handleInput}
        value={bankAccount.ifscCode}/>
    </div>
    <div>
        <label><b>AccountType</b></label>
        <select name='type' onChange={handleInput} value={bankAccount.type}>
            <option value="">SelectAccountType</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
        </select>
    </div>
    <div>
    <button type='submit'onClick={saveAccount}>AddAccount</button>
    </div>
    <ToastContainer/> 
 </form>
    </div>
  )
}

export default AddBankAccount