import axios from 'axios'
import React, { useEffect, useState } from 'react'

const  ViewCustomerTransaction=()=>{
    let jwt_Token;
    let admin_jwtToken=sessionStorage.getItem("admin_jwtToken");
    let bank_jwtToken=sessionStorage.getItem("bank_jwtToken");
    let customer_jwtToken=sessionStorage.getItem("customer_jwtToken");
    
    const customer=JSON.parse(sessionStorage.getItem("ACTIVE_CUSTOMER"));

    const[allTransactions,setAllTransactions]=useState({});

    //  declaration for entities----below declaration is serialisation
  const bankAccount=JSON.parse(sessionStorage.getItem("activeBankAccount"));
  const bankAccountTransaction=JSON.parse(sessionStorage.getItem("activateBankAccountTransaction"));
  const user=JSON.parse(sessionStorage.getItem("activeUser"));
  const bank=JSON.parse(sessionStorage.getItem("activeBank"));

  

if(admin_jwtToken){
    jwt_Token=admin_jwtToken;
}
else if(bank_jwtToken){
    jwt_Token=bank_jwtToken;
}
else{
    jwt_Token=customer_jwtToken;
}

    const retrieveAllTransactions=async()=>{
        const response=await axios.get("http://localhost:8080/api/bankAccountTransaction/fetch/allBankCustomerTransactions?userId="+
        customer.id,
        {header:{Authorization:"Bearer"+jwt_Token}})
        console.log(response.data)
      return response.data
    } 

useEffect(()=>{
    const getAllTransactions=async()=>{
   const Transactions= await retrieveAllTransactions();
    if(allTransactions){
        setAllTransactions(Transactions.bankTransactions);
    }
};
getAllTransactions();
},[])

const formatDateFromEpoch=(epochTime)=>{
    const date=new Date(Number(epochTime));
    const formatToDate=data.toLocateString();
    return formatToDate;
  }

  return (
    <div>

    <div>V<h2>Customer Transaction</h2></div>
    <div>
        <table>
            <thead>
            <tr>
            <th scope='col'>Transaction Id</th>
            <th scope='col'>Source Bank</th>
            <th scope='col'>Customer Name</th>
            <th scope='col'>Source Account</th>
            <th scope='col'>Transaction Type</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Narration</th>
            <th scope='col'>Transaction Time</th>
             </tr>

            </thead>
            <tbody>
            {allTransactions.map((Transactions)=>{
              return(
                <tr>
                  <td><b>{Transactions.bankAccountTransaction.transactionId}</b></td>
                  <td><b>{Transactions.bank.name}</b></td>
                  <td><b>{Transactions.user.name}</b></td>
                  <td><b>{Transactions.bankAccount.number}</b></td>


                   


                  <td><b>{Transactions.bankAccountTransaction.amount}</b></td>
                  <td><b>{Transactions.bankAccountTransaction.narration}</b></td>
                  <td><b>{formatDateFromEpoch (Transactions.bankAccountTransaction.transactionTime)}</b></td>
                 </tr>
              )
            })}   

            </tbody>

            
        </table>
    </div>

    </div>
  )
}

export default ViewCustomerTransaction