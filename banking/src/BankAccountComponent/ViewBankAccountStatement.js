import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const  ViewBankAccountStatement=()=>{
  const location=useLocation();
const customer=location.state;
const [bankAccount,setBankAccount]=useState({});
let jwtToken;
const convertToEpochTime=(dateString)=>{
  const selectedDate=new Date(dateString);
  const epochTime=selectedDate.getTime();
  return epochTime;  
}
    const[statementDownloadRequest,setStatementDownloadRequest]=useState({
        startDate:"",
        endDate:"",
        accountId:""});

        const handleUserInput=(e)=>{
            setStatementDownloadRequest({...statementDownloadRequest,[e.target.name]:e.target.value})
        }

        const retrieveBankAccount=async()=>{
          const response=await axios.get("http://localhost:8080/api/bankAccount/fetch/User?userId="+customer.id,
          {
            headers:{ Authorization: "Bearer " + jwtToken},
          })
          return response.data;
        }

        const formatDateFromEpoch = (epochTime) => {
            const date = new Date(Number(epochTime));
            const formattedDate = date.toLocaleString(); // Adjust the format as needed
        
            return formattedDate;
          };

        const downloadStatement=(e)=>{
         e.preventDefault();
         fetch("http://localhost:8080/api/bankAccountTransaction/download/Statement?accountId="+bankAccount.Id
         +"StartTime="+convertToEpochTime(statementDownloadRequest.startDate)
         +"EndTime="+convertToEpochTime(statementDownloadRequest.endDate),
         {
            method:"get",
            headers:{ Authorization: "Bearer " + jwtToken}
        }).then((response)=>response.blob()).then((blob)=>{const url=window.URL.createObjectURL(blob);
        // Create a temporary <a> element to trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.download = "bank_statement.pdf"; // Specify the desired filename here

        // Append the link to the document and trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up the temporary URL and link
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Download error:", error);
      });
    }
  return (
    <div>
    <div><h2>ViewBankAccountStatement</h2></div>
    <form>
        <div>
            <label>StartDate</label>
            <input type='datetime-local' 
            onChange={handleUserInput}
            value={statementDownloadRequest.startDate}
             required/>
        </div>
       
        <div>
            <label>EndDate</label>
            <input type='datetime-local' 
            onChange={handleUserInput}
            value={statementDownloadRequest.endDate}
             required/>
        </div>

        <div>
            <label>AccountId</label>
            <input type='number' 
            onChange={handleUserInput}
            value={statementDownloadRequest.accountId}
             required/>
        </div>
        <div>
        <button type='submit' onClick={downloadStatement}>DownloadStatement</button>
         </div>
         <div>
        <h3>Customer Bank Details</h3>
    </div>
    <div>
    <label htmlFor="name" className="form-label"><b>Bank</b></label>
                  <input type="text"
                    className="form-control"
                    value={customer.bank.name}
                    readOnly />
 </div>

 <div>
    <label htmlFor="number" className="form-label"><b>BankAccountNumber</b></label>
                  <input type="number"
                    className="form-control"
                    value={bankAccount.number}
                    readOnly />
 </div>

 <div>
    <label htmlFor="ifscCode" className="form-label"><b>IfscCode</b></label>
                  <input type="text"
                    className="form-control"
                    value={bankAccount.ifscCode}
                    readOnly />
 </div>

 <div>
    <label htmlFor="name" className="form-label"><b>CustomerName</b></label>
                  <input type="text"
                    className="form-control"
                    value={customer.name}
                    readOnly />
 </div>

 <div>
    <label htmlFor="contact" className="form-label"><b>CustomerContact</b></label>
                  <input type="tel"
                    className="form-control"
                    value={customer.contact}
                    readOnly />
 </div>

 <div>
    <label htmlFor="balance" className="form-label"><b>AvailableBalance</b></label>
                  <input type="number"
                    className="form-control"
                    value={bankAccount.balance}
                    readOnly />
 </div>

 <div>
    <label htmlFor="status" className="form-label"><b>AccountStatus</b></label>
                  <input type="text"
                    className="form-control"
                    value={bankAccount.status}
                    readOnly />
 </div>

 <div>
    <label htmlFor="creationDate" className="form-label"><b>CreationDate</b></label>
                  <input type="text"
                    className="form-control"
                    value={formatDateFromEpoch(bankAccount.creationDate)}
                    readOnly />
 </div>
 
    </form>
    </div>
  )
}

export default ViewBankAccountStatement