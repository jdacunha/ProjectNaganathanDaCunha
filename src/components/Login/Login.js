import { useState } from "react";
import jwtDecode from "jwt-decode";
import { Route } from 'react-router-dom';

function Login() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [user, setUser] = useState(localStorage.getItem("token"));
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  

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
    <form onSubmit={handleSubmit}>
      <input name="username" value={values.username} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login" />
    </form>
  );
}

function Logout() {
  localStorage.clear('token');

  <Route render={({ history}) => (
      history.push("/")
    )}> </Route>

    window.location.href = '/';

} 

  
  export default Login;