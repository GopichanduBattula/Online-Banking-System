import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../App.css'

export const UserRegisterFields = () => {

  const [formData, setFormData] = useState({
    name: '',
    dob:"",
    email: '',
    password: '',
    confirmPassword: '',
    contact:"",
    street: "",
    city: "",
    state:"",
    pincode: "",
    roles: "",
    age: "",
    gender: "",
    bankId: ""
  })

  const [errors, setErrors] = useState({})
   const [user, setUser] = useState({})
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
  }

  const loginAction = (e) => {
    fetch("http://localhost:8080/api/user/admin/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
              window.location.href = "/user/login";
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
      });
    e.preventDefault();
    const handleSubmit = (e) => {
      e.preventDefault()
    
    }

    const validationErrors = {}
    if(!formData.name.trim()) {
        validationErrors.name = "name is required"
    }
    if(!formData.dob.trim()) {
      validationErrors.dob = "Date Of Birth is required"
  }
  

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
      validationErrors.password = "password is required"
  } else if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(formData.password)){
      validationErrors.password = "password is not valid"
  }
    if(formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "password not matched"
    } 
    if(!formData.contact.trim()) {
      validationErrors.contact = "Contact Number is required"
  } else if(!/^\d{10}$/.test(formData.contact)){
      validationErrors.contact = "Contact Number is not valid"
  }
  if(!formData.street.trim()) {
    validationErrors.street = "Street name is required"
}
if(!formData.city.trim()) {
  validationErrors.city = "City name is required"
}
if(!formData.state.trim()) {
  validationErrors.state = "State name is required"
}
if(!formData.pincode.trim()) {
  validationErrors.pincode = "Pincode is required"
}
else if(!/^[1-9][0-9]{5}$/.test(formData.pincode)){
  validationErrors.pincode = "pincode is not valid"
}
// if(!formData.roles.trim()) {
//   validationErrors.roles = "!Please select the roles "
// }
if(!formData.age.trim()) {
  validationErrors.age = "Age is required"
}
else if(!/^(1[89]|[2-9]\d)$/.test(formData.age)){
  validationErrors.age = "age is not valid"
}
// if(!formData.gender.trim()) {
//   validationErrors.gender = "please select Gender"
// } 


if(!formData.bankId.trim()) {
  validationErrors.bankId = "BankId is required"
}


    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }
    
  };
  


  return (
    <center>

  <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
    <div className="card-header bg-info text-center custom-bg-text">
            <h4 className="card-title" >UserRegisterFields</h4>
          </div>
          <div className="card-body" style={{backgroundColor:"#ffe5cc"}}>
    <form onSubmit={handleSubmit}>
      <div className='mb-3 text-color'>
        <label htmlFor='name' className="form-label" >
          <b>Name:</b>
          </label>
        <input
          type="text"
          name="name"
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.name && <span>{errors.name}</span>}  
      </div>
      <div className="mb-3 text-color">
                <label htmlFor="DOB" className="form-label" >
                  <b>Date Of Birth</b>
                </label>
                <input 
                type="date"
                className="form-control"
               
                name="dob"
                onChange={handleChange}
               
                autoComplete="off"
                />
                {errors.dob && <span>{errors.dob}</span>}
               </div>

      <div className='mb-3 text-color'>
        <label htmlFor='email' className="form-label" >
          <b>Email:</b>
          </label>
        <input
          type="email"
          name="email"
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.email && <span>{errors.email}</span>}  
      </div>
      <div className='mb-3 text-color'>
        <label htmlFor='password' className="form-label" >
          <b>Password:</b>
          </label>
        <input
          type="password"
          name="password"
          onChange={handleChange} 
        />
          {errors.password && <span>{errors.password}</span>}  
      </div>
      <div className='mb-3 text-color'>
        <label htmlFor='confirm password' className="form-label" >
          <b>Confirm Password:</b>
          </label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange} 
        />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
      </div>
         
      <div className='mb-3 text-color'>
        <label htmlFor='contact' className="form-label" >
          <b>Contact:</b>
          </label>
        <input
          type="tel"
          name="contact"
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.contact && <span>{errors.contact}</span>}  
      </div>
      <div className='mb-3 text-color'>
        <label htmlFor='street' className="form-label" >
          <b>Street:</b>
          </label>
        <input
          type="text"
          name="street"
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.street && <span>{errors.street}</span>}  
      </div>
      <div className='mb-3 text-color'>
        <label htmlFor='city' className="form-label" >
          <b>City:</b>
          </label>
        <input
          type="text"
          name="city"
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.city && <span>{errors.city}</span>}  
      </div>
      <div className='mb-3 text-color'>
        <label htmlFor='state' className="form-label" >
          <b>State:</b>
          </label>
        <input
          type="text"
          name="state"
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.state && <span>{errors.state}</span>}  
      </div>
      <div className="mb-3 text-color">
        <label htmlFor='pin code' className="form-label" >
          <b>Pincode:</b>
          </label>
        <input
          type="text"
          name="pincode"
          // minLength={6}
          // maxLength={6}
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.pincode && <span>{errors.pincode}</span>}  
      </div>
      <div className="mb-3 text-color">
                <label htmlFor="roles" className="form-label" >
                  <b>Roles</b>
                </label><br/>
                <select>
                    <option value="">select role</option>

                    <option value="Admin">Admin</option>
                     
                    <option value="Bank">Bank</option>
                  
                    <option value="customer">Customer</option>
                    
                   
                </select >
               
                {/* {errors.roles && <span>{errors.roles}</span>}   */}
                
               </div>
               <div className="mb-3 text-color">
                <label htmlFor="Age" className="form-label" >
                  <b>Age</b>
                </label>
                <input 
                type="number "
                min="18"
                
                className="form-control"
                
                name="age"
                onChange={handleChange}
                
                autoComplete="off"
                />
                {errors.age && <span>{errors.age}</span>}  
               </div>
               
               <div className="mb-3 text-color" style={{display:"flex"}}>
                <label htmlFor="gender" className="form-label" >
                  <b>Gender</b>
                </label> 
                <input 
                type="radio"
                name="gender"/> Male 
                
                
               <input 
                type="radio"
                name="gender"/> Female 
                
                <input 
                type="radio"
                name="gender"/> Others
                
               </div>
               {/* {errors.gender && <span>{errors.gender}</span>}
                */}
               
               
               <div className="mb-3 text-color">
                <label htmlFor="BankId" className="form-label" >
                  <b>BankId</b>
                </label>
                <input 
                type="BankId"
                className="form-control"
                
                name="bankId"
                onChange={handleChange}
                
                autoComplete="off"
                />
                {errors.bankId && <span>{errors.bankId}</span>}
</div>


      <button type="submit"
      onClick={loginAction}>
        <b>Submit</b>
        </button>
        <ToastContainer />
       
    </form>
    </div>
    </div>
    </div>
    </div>
    </center>
     );
};


