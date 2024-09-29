
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { _userapiurl } from '../../ApiUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    var userDetails = { "email": email, "password": password };
    axios.post(_userapiurl + "login", userDetails).then((response) => {
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

      users.role == "admin" ? navigate("/admin") : navigate("/user");

    }).catch((error) => {
      setOutput("Invalid user or verify your account");
      setEmail("");
      setPassword("");
    });
  };


  return (

    <div className="login" style={{ backgroundColor: 'white' }}>
      <h1 style={{ color: 'black', fontFamily: 'cursive', padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>Login</h1>
      <br />
      <div style={styles.container}>

        <form onSubmit={(e) => e.preventDefault()} style={styles.form}>

          <label style={styles.label}></label>

          <input
            type="email"
            value={email} onChange={e => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter Your Email"
            required
          />

          <label style={styles.label}></label>
          <input
            type="password"
            value={password} onChange={e => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Password"
            required
          />
          <br/>
          <button onClick={handleSubmit} type="button" style={styles.button}>Login</button>
        </form>

      </div>

      <font color="blue">{output}</font>
      <br /><br /><br /><br /><br />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    padding: '10px',
    backgroundColor: 'white'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#fff',
    padding: '80px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: { 
    padding: '1px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: { 
    fontSize: '16px',
    color: 'black',
    backgroundColor: '#b4eb34',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}; 