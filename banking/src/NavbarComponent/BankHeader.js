import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const BankHeader=()=>{
    
    let navigate=useNavigate;
    const bankLogout = () => {sessionStorage.removeItem("active-bank");
    sessionStorage.removeItem("bank-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };

  return (
    

    <ul>
                <li className="nav-item">
                    <Link to="/bank/bankAccount/registerCustomer" className="nav-link active" aria-current="page"><b className="text-color">RegisterCustomer</b> </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/bank/bankAccount/add" className="nav-link active" aria-current="page"><b className="text-color">BankAccounts</b></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/bank/bankAccount/viewCustomers" className="nav-link active" aria-current="page"><b className="text-color">BankCustomers</b></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/bank/bankAccount/bankManagers" className="nav-link active" aria-current="page"><b className="text-color">CustomerTransactions</b></Link>
                    </li>
                    

                <li className="nav-item">
                    <Link to="" className="nav-link active" aria-current="page" onClick={bankLogout}><b className="text-color">Logout</b></Link>
                </li>
            </ul>
       
  )
}

export default BankHeader