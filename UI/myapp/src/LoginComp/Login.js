import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var userDetails = { email, password };

    axios.post("http://localhost:3001/user/login", userDetails)
      .then((response) => {
        var users = response.data.userDetails;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("_id", users._id);
        localStorage.setItem("name", users.name);
        localStorage.setItem("email", users.email);
        localStorage.setItem("mobile", users.mobile);
        localStorage.setItem("address", users.address);
        localStorage.setItem("city", users.city);
        localStorage.setItem("gender", users.gender);
        localStorage.setItem("role", users.role);
        localStorage.setItem("info", users.info);
        setOutput("Login successful!");
      })
      .catch((error) => {
        setOutput("Invalid user or verify your account");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br/>
        <h2 style={{textAlign:'center'}}>Login</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required style={{textAlign:'center'}} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required style={{ textAlign: 'center' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit">Submit</button>
        </div>
        <font style={{ display: 'flex', justifyContent: 'center', color:"blue" }} >{output}</font>
      </form>
    </>
  );
}

export default Login;
