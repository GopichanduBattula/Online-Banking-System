import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const CustomerHeader=()=>{

    let navigate=useNavigate
    const customer=JSON.parse(sessionStorage.getItem("ACTIVE_CUSTOMER"));

    const userLogout = () => {sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("customer-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };

  const handleTransactionHistory=()=>{    

    navigate("/customer/bank/account/statement",{
        state:customer
    })
}

const viewBankAccount=()=>{
    if(customer.isAccountLinked ==="Yes"){
        navigate("/customer/bank/account/detail",{
            state:customer
        })
    }

    else{
        console.error("BankAccount not liked,contact bank")
    }
}

const moneyTransfer=()=>{
    if(customer.isAccountLinked ==="Yes"){
        navigate("/customer/bank/account/transfer",{
            state:customer
        })
    }

    else{
        console.error("BankAccount not liked,contact bank")
    }
}


  <ul>
    <li className="nav-item">
        <div className="nav-link active" aria-current="page"><b className="text-color" onClick={moneyTransfer}>Money Transfer</b></div>
    </li>

    <li className="nav-item">
        <div className="nav-link active" aria-current="page"><b className="text-color" onClick={viewBankAccount}>Bank Account</b></div>
    </li>

    <li className="nav-item">
        <div className="nav-link active" aria-current="page"><b className="text-color" onClick={handleTransactionHistory}>Transaction History</b></div>
    </li>

    <li className="nav-item">
                    <Link to="" className="nav-link active" aria-current="page" onClick={userLogout}><b className="text-color">Logout</b></Link>
                </li>

  </ul>
}

export default CustomerHeader