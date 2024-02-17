import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddBankForm=()=> {

    const[bank,setBank]=useState({
        name:"",
        code:"",
        address:"",
        phoneNumber:"",
        email:"",
        website:"",
        country:"",
        currency:"",
        userId:""
       
    })
    
    const [allBankUsers,setAllBankUsers]=useState({});
    const[bankUsers,setBankUsers]=useState({});
    const admin_jwtToken=sessionStorage.getItem("admin_jwtToken");
    const retrieveAllManagers=async()=>{
        try{
            const response=await axios.get("http://localhost:8080/api/user/fetch/AllBankManagers",
            {
                headers:{ Authorization: "Bearer " + admin_jwtToken},
              })
              return response.data;
            
        }
        catch(error){
            console.error("Error fetching Bank Managers:",error); throw error;

        }
    }
    useEffect(async()=>{
        const getAllBankUsers=await retrieveAllManagers();
        if (allBankUsers){
            setBankUsers(allBankUsers.users)
        }
        getAllBankUsers();
    },[])
    const handleInput=(e)=>{
        setBank({...bank,[e.target.name]:e.target.value})
    }
     
    const saveBank=(e)=>{

        fetch("http://localhost:8080/api/bank/register",
         {
            method:"post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + admin_jwtToken,
              },
              body: JSON.stringify(bank),
         } )
         .then((result) => {
            console.log("result", result);
            result.json().then((res) => {
              console.log(res);
    
              if (res.success) {
                console.log("Got the success response");
              }
              
            })})


    }

  return (
    <div>
    <div><h2>AddBankForm</h2></div>
   <form>
    <div>
<label><b> Bank Name </b></label>
<input type='text'
onChange={handleInput}
value={bank.name}/>
    </div>

    <div>
<label><b> Bank Code </b></label>
<input type='text'
onChange={handleInput}
value={bank.code}/>
    </div>

    <div>
<label><b> Bank Address </b></label>
<textarea rows={4} cols={4}
onChange={handleInput}
value={bank.address}/>
    </div>

    <div>
<label><b> Bank Phone Number </b></label>
<input type='contact'
onChange={handleInput}
value={bank.phoneNumber}/>
    </div>

    <div>
<label><b> Bank Email </b></label>
<input type='text'
onChange={handleInput}
value={bank.email}/>
    </div>

    <div>
<label><b> Bank WebSite </b></label>
<input type='text'
onChange={handleInput}
value={bank.website}/>
    </div>

    <div>
<label><b>  Country </b></label>
<input type='text'
onChange={handleInput}
value={bank.country}/>
    </div>

    <div>
<label><b> Currency </b></label>
<input type='text'
onChange={handleInput}
value={bank.currency}/>
    </div>

    <div>
<label><b> User Id </b></label>
<input type='text'
onChange={handleInput}
value={bank.userId}/>
    </div>
    <div>
        <button type='submit' onClick={saveBank}> Register Bank </button>
    </div>
    </form>

    </div>

  )
}

export default AddBankForm