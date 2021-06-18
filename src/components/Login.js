import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const initialState = {
    error: "",
    username: "",
    password: ""
  }
  const [form, setForm] = useState(initialState);
  const {push} = useHistory();

  const handleChange = (event) => {
    const {name, type, value, checked} = event.target;
    const updateData = (type === 'checkbox')?checked:value;
    setForm({...form, [name]: updateData});
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const neoLogin = {
      username: form.username,
      password: form.password
    }

    if ((form.username === "" || form.password === "")) {
      setForm({...form, error: "Username or Password not valid."});
    } else {
      setForm({...form, error: ""});
    }

    axios.post("http://localhost:5000/api/login", neoLogin)
      .then((resp) => {
        localStorage.setItem('token', resp.data.payload);
        setForm(initialState);
        push("/bubble");
    }).catch((err) => {
        setForm({...form, error: "Username or Password not valid."});
        console.log(err);
      });
  }
  
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <label>User Name 
          <input type="text" data-testid="username" name="username" onChange={handleChange} value={form.username} />
        </label>
        <label>Password 
          <input type="password" data-testid="password" name="password" onChange={handleChange} value={form.password} />
        </label>
        <button onClick={handleLogin} >Login</button>
      </div>

      <p data-testid="errorMessage" className="error">{form.error}</p>
    </div>
  );
};

export default Login;


//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.