// import React,{useState} from 'react'
// import { useHistory } from 'react-router-dom'

// const Signup = (props) => {
//     const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
//     let history = useHistory();
//     const handleSubmit=async (e)=>{
//         e.preventDefault();
//        const {name, email,password} = credentials;
//         const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            
//            method: "POST", 
//            headers: {
//              "Content-Type": "application/json"
//            },
//            body: JSON.stringify({name,email,password})
//          });
//          const json = await response.json()
//         //  console.log(json);
//          if (json.success){
//              localStorage.setItem('token', json.authtoken);
//              history.push("/");
//              props.showAlert("Account Created Successfully", "success");
//          }
//          else{
//            props.showAlert("Invalid Credentials", "danger");
//          }
//    }
//    const onChange=(e)=>{
//        setCredentials({...credentials, [e.target.name]: e.target.value})
//    }
//   return (
   
    
// <div className='container mt-2'>
//     <h2 className='my-2'>Create an account to use iNotebook</h2>
//    <form onSubmit={handleSubmit}>
//       <div className="my-3">
//         <label htmlFor="name" className="form-label">Name</label>
//         <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp"/>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email address</label>
//         <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
//         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//       </div>
//     <div className="mb-3">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control" id="password" name='password' onChange={onChange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//     <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange}/>
//   </div>
  
//   <button type="submit" className="btn btn-primary">Submit</button>

//    </form>
// </div>
//   )
// }

// export default Signup


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css'; // Import the custom CSS file

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      history.push('/');
      props.showAlert('Account Created Successfully', 'success');
    } else {
      props.showAlert('Invalid Credentials', 'danger');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow custom-card">
            <h2 className="mb-4 text-center font-heading custom-heading">Create an account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label font-form custom-label">
                  Name
                </label>
                <input type="text" className="form-control custom-input" id="name" name="name" onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label font-form custom-label">
                  Email address
                </label>
                <input type="email" className="form-control custom-input" id="email" name="email" onChange={onChange} />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label font-form custom-label">
                  Password
                </label>
                <input type="password" className="form-control custom-input" id="password" name="password" onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label font-form custom-label">
                  Confirm Password
                </label>
                <input type="password" className="form-control custom-input" id="cpassword" name="cpassword" onChange={onChange} />
              </div>

              <button type="submit" className="btn btn-primary w-100 font-form custom-button">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


