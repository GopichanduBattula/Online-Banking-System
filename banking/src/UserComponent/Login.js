import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const  Login= () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors,setErrors]=useState({});

  const [loginRequest, setLoginRequest] = useState({});

  const handleUserInput = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  };

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
      body: JSON.stringify(loginRequest),
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
    const validationErrors = {}

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
  setErrors(validationErrors)
  
      if(Object.keys(validationErrors).length === 0) {
          alert("Form Submitted successfully")
      }
  };

  return (
    <center>
    
        {/* <table class="table table-bordered"> */}
    <div>
      
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-info text-center custom-bg-text">
            <h4 className="card-title" > User Login</h4>
          </div>
          <div className="card-body" style={{backgroundColor:"#ffe5cc"}}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-color">
               {/* <tr> */}
               {/* <td> */}
                 <label for="User Role" class="form-label" >
                <b>User Role</b>
                </label> <br/>
                {/* </td> */}
               {/* <td>  */}
                <select>
                    <option value="">select role</option>
                    <option value="Manager">Manager</option>
                    <option value="Account Manager">Account Manager</option>
                    <option value="Clerk">Clerk</option>
                </select >
                 {/* </td> */}
                {/* </tr> */}
                 </div>
                 <div className="mb-3 text-color">
                {/* <tr> */}
               {/* <td> */}
                 <label for="emailId" class="form-label" >
                  <b>Email Id</b>
                </label>
                {/* </td> */}
               {/* <td>  */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleUserInput}
                  value={loginRequest.email}
                /> 
                {errors.email && <span>{errors.email}</span>} 
                {/* </td> */}
                {/* </tr> */}
              </div>
              <div className="mb-3 text-color">
                {/* <tr> */}
               {/* <td>  */}
                <label for="password" className="form-label" >
                  <b>Password</b>
                </label> 
                {/* </td> */}
               {/* <td> */}
                 <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="off"
                />
                {errors.password && <span>{errors.password}</span>} 
                 {/* </td> */}
                {/* </tr> */}
              </div>
              {/* <tr> */}
              {/* <td> */}
              {/* bsStyle="default" style= { {color:"blue"}} */}
                <button
                type="submit"  style={{backgroundColor:"#46d2d2"}}
                className="btn bg-color custom-bg-text" 
                onClick={loginAction}
              >
                Login
              </button> 
              {/* </td> */}
              {/* </tr> */}
              <ToastContainer /> 
            </form>
          </div>
        </div>
      </div>
      
    </div>
    {/* </table> */}
    </center>
  );
};


