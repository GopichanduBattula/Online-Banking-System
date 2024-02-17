import React from 'react'
import AdminHeader from './AdminHeader';
import BankHeader from './BankHeader';
import CustomerHeader from './CustomerHeader';
import NormalHeader from './NormalHeader';

const RoleNav=()=>{

    
    
    const admin=JSON.parse(sessionStorage.getItem("ACTIVE_ADMIN"));
    const bank=JSON.parse(sessionStorage.getItem("ACTIVE_   BANK"));
    const customer=JSON.parse(sessionStorage.getItem("ACTIVE_CUSTOMER"));
    
    if(admin!=null){
        return <AdminHeader/>
    }
    else if(bank!=null){
        return <BankHeader/>
    }

    else if (customer!=null){
        return <CustomerHeader/>
    }

    else{
        return <NormalHeader/>
    }

  return (
    <div>RoleNav</div>
  )
}

export default RoleNav