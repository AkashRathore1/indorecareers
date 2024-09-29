import './Register.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { _userapiurl } from '../../ApiUrl';
import axios from 'axios';

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    var userDetails = { "name": name, "email": email, "password": password, "mobile": mobile, "address": address, "city": city, "gender": gender };
    axios.post(_userapiurl + "save", userDetails).then((response) => {
      setOutput("User register successfully");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    }).catch((error) => {
      setOutput("Invalid user or verify your account");
    });
  };

  return (
    <>
      {/* Registration Form  */}
      <div   style={{ backgroundColor: 'white' }}>
        <h1 style={{ color: 'black',padding:'35px',fontFamily:'cursive',fontWeight:'bold'}}>Register</h1>
        <input style={{ "width": "350px", "padding": "5px 0px", "background": "transparent", "border": "0", "border-bottom": "1px solid #435160", "outline": "none", "color": "#6D7781", "font-size": "14px" }}
          value={name} onChange={e => setName(e.target.value)} placeholder="Username" type="text" />
        <br />
        <input style={{ "width": "350px", "padding": "13px 0px", "background": "transparent", "border": "0", "border-bottom": "1px solid #435160", "outline": "none", "color": "#6D7781", "font-size": "14px" }}
          value={email} onChange={e => setEmail(e.target.value)} placeholder="E-Mail Address" type="email" />
        <br />
        <input style={{ "width": "350px", "padding": "13px 0px", "background": "transparent", "border": "0", "border-bottom": "1px solid #435160", "outline": "none", "color": "#6D7781", "font-size": "14px" }}
          value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
        <br />
        <input style={{ "width": "350px", "padding": "13px 0px", "background": "transparent", "border": "0", "border-bottom": "1px solid #435160", "outline": "none", "color": "#6D7781", "font-size": "14px" }}
          value={mobile} onChange={e => setMobile(e.target.value)} type="text" placeholder="Mobile no" />
        <br />
        <textarea style={{ "width": "350px", "padding": "3px 0px", "background": "transparent", "border": "0", "border-bottom": "1px solid #435160", "outline": "none", "color": "#6D7781", "font-size": "14px" }}
          value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" ></textarea>
        <br />
        <select style={{ "width": "350px", "padding": "8px 0px", "background": "transparent", "border": "0", "border-bottom": "1px solid #435160", "outline": "none", "color": "#6D7781", "font-size": "14px" }}
          value={city} onChange={e => setCity(e.target.value)}  >
          <option>Select City</option>
          <option>Indore</option>
          <option>Bhopal</option>
          <option>Ujjain</option>
        </select>
        <br />  <br />
        <label for="gender">Gender &nbsp; :</label> &nbsp; &nbsp;
        <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} /> Male
        &nbsp; &nbsp;
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /> Female
        <br />  

        <font color="blue">{output}</font>

        <br /> 
        <input onClick={handleSubmit} type="submit" className="animated" style={{ color: 'black', backgroundColor:'#b4eb34'}}value="Register" />
        <Link style={{color:'black'}} className="forgot" to="/login">Already have an account?</Link>
        
      </div>
      {/* Content End */}
    </>
  );
}

export default Register;