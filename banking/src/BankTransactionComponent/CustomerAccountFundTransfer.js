import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CustomerAccountFundTransfer=()=> {

   let navigate=useNavigate;
  let customer_jwtToken=sessionStorage.getItem("customer_jwtToken");
    const customer=JSON.parse(sessionStorage.getItem("ACTIVE_CUSTOMER"));
    const[transferRequest,setTransferRequest]=useState({

        userId:customer.id,
        bankId:customer.bank.id,
        amount:"",
        toBankAccount:"",
        toBankIfsc:"",
        purpose:""
        
    })

    const handleInput=(e)=>{
        setTransferRequest({...transferRequest,[e.target.name]:e.target.value})
    }

    const saveAccount=(e)=>{
        fetch("http://localhost:8080/api/bankAccountTransaction/Transfer/Transaction", {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + customer_jwtToken,
            },
            body: JSON.stringify(transferRequest),
          })
            .then((result) => {
              console.log("result", result);
              result.json().then((res) => {
                console.log(res);
      
                if (res.success) {
                  console.log("Got the success response");
                  setTimeout(() => {
                    navigate("/customer/bank/account/statement", { state: customer });
                  }, 1000); // Redirect after 3 seconds
                } else {
                    console.log("Didn't got success response");
                    setTimeout(() => {
                        window.location.reload(true);
                      }, 1000); // Redirect after 3 seconds
               
         }})}
         )
         .catch((error) => {
            console.error(error);
        
            setTimeout(() => {
                window.location.reload(true);
              }, 1000); // Redirect after 3 seconds
        });
          e.preventDefault();
    };


    
  return (
    <div>
    <div><h2>Money Transfer </h2></div>
    <form>

    <div>
   <label><b>Account Number</b></label>
   <input type='number'
   onChange={handleInput}
   value={transferRequest.toBankAccount}
   />
    </div>


    <div>
   <label><b>Ifsc Code</b></label>
   <input type='text'
   onChange={handleInput}
   value={transferRequest.toBankIfsc}
   />
    </div>

    <div>
   <label><b>Amount</b></label>
   <input type='number'
   onChange={handleInput}
   value={transferRequest.amount}
   />
    </div>

    <div>
   <label><b>Purpose</b></label>
   <textarea rows={4} cols={4}
   onChange={handleInput}
   value={transferRequest.purpose}
   placeholder='Reason To Transfer '
   />
    </div>

    <div>
        <button type='submit' onClick={saveAccount}>Transfer</button>
    </div>

</form>
    </div>
  )
}

export default CustomerAccountFundTransfer