import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Login } from './UserComponent/Login';
import {RegisterAdmin} from './UserComponent/RegisterAdmin';
import { UserRegisterFields } from './UserComponent/UserRegisterFields';
import ViewAllBankCustomers from './UserComponent/ViewAllBankCustomers';
import ViewAllBankManagers from './UserComponent/ViewAllBankManagers';
import HomePage from './PageComponent/HomePage';
import About from './PageComponent/About';
import Contact from './PageComponent/Contact';
import AddBankForm from './BankComponent/AddBankForm';
import ViewAllBanks from './BankComponent/ViewAllBanks';
import AddBankAccount from './BankAccountComponent/AddBankAccount';
import ViewBankAccountStatement from './BankAccountComponent/ViewBankAccountStatement';
import CustomerAccountFundTransfer from './BankTransactionComponent/CustomerAccountFundTransfer';
import ViewCustomerTransaction from './BankTransactionComponent/ViewCustomerTransaction';
import Header from './NavbarComponent/Header';




function App() {
  return (
    <> 
    
    <Header/>
    <Routes>

          {/* PageComponent */}
          <Route path='/' element={<HomePage/>}/>
         
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         
         
         

          {/* BankComponent */}
         <Route path='/admin/bank/register'  element={<AddBankForm/>}/>
         <Route path='/admin/bank/all' element={<ViewAllBanks/>}/>

            {/* UserComponent */}
         <Route path='/user/admin/register' element={<RegisterAdmin/>}/>
         <Route path='/user/login' element={<Login/>}/>
         <Route path='/user/customer/register' element={<UserRegisterFields/>}/>
         <Route path='/user/bank/register' element={<UserRegisterFields/>}/>
         <Route path='/admin/bank/managers' element={<ViewAllBankManagers/>}/>
         <Route path='/admin/bank/customers' element={<ViewAllBankCustomers/>}/>
          
          {/* BankAccountComponent */}
          <Route path='/user/bank/add' element={<AddBankAccount/>}/>
          <Route path='/user/bank/viewstatement' element={<ViewBankAccountStatement/>}/>

          {/* BankTransactionComponent */}
          <Route path='/user/customer/fundtransfer' element={<CustomerAccountFundTransfer/>}/>
          <Route path='/user/customer/viewtransaction' element={<ViewCustomerTransaction/>}/>
      
  </Routes>
    
   </>
  );
}

export default App;
