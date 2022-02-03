import { useState } from "react";
import TextField from '@mui/material/TextField';
import jwtDecode from "jwt-decode";
import { Route } from 'react-router-dom';
import './login.css';

/* function login() {
    return(
      <div className='login'>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </div>
    );
  }; */

function Login() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [user, setUser] = useState(localStorage.getItem("token"));
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  // VanillaJS approach (Closure)
  //function handleChange(name) {
  //  return function (e) {
  //    setValues({ ...values, [name]: e.target.value });
  //  };
  //}

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://fauques.freeboxos.fr:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setUser(data.token);
        console.log(jwtDecode(data.token));
      });
  }
  return user ? (
    <><span>Already Logged</span><button onClick={Logout}> Logout </button></>
    //<span> Already logged</span>
  ) : (

    <div className="main-login"> 

      <div className="carte"> 

      <div className="carte-header"> 
          <span> Se Connecter : </span>
      </div>

      <div className="carte-body"> 

          <form onSubmit={handleSubmit}>
            <span> Username : </span>
          <input name="username" value={values.username} onChange={handleChange} />
          <span> Password : </span>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <input type="submit" value="Login" className="LoginConfirm" />
        </form>

      </div>
      
      

      </div>

    </div>
    
    
  );
}

function Logout() {
  localStorage.clear('token');

  window.location.href = '/';

} 

  
  export default Login;