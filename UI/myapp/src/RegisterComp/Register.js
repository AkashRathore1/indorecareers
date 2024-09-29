import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    var userDetails = { "name": name, "email": email, "password": password, "mobile": mobile, "gender": gender };
    axios.post("http://localhost:3001/user/" + "save", userDetails).then((response) => {
      setOutput("User register successfully");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");

    }).catch((error) => {
      setOutput("Invalid user or verify your account");
    });
  };

  return (
    <>
      {/* Registration Form  */}
      
        <div style={{ textAlign: 'center' }}>
   
        <h2 style={{ textAlign:'center'   }}>Register</h2>
 
        <div>
        <input style={{ textAlign: 'center' }}
          value={name} onChange={e => setName(e.target.value)} placeholder="Username" type="text" />
        </div>

        <div>
        <input style={{ textAlign: 'center' }}
          value={email} onChange={e => setEmail(e.target.value)} placeholder="E-Mail Address" type="email" />
        </div>

        <div>
        <input style={{ textAlign: 'center' }}
          value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
        </div>

        <div>
        <input style={{ textAlign: 'center' }}
            value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile no" type="text"/>
        </div>

        <div>
        <label for="gender">Gender &nbsp; :</label> &nbsp; &nbsp;
        <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} /> Male
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /> Female
       </div>

        <font style={{ display: 'flex', justifyContent: 'center', color: "blue" }} >{output}</font>
 
        <div style={{ textAlign: 'center', color: 'white' }}>
        <input onClick={handleSubmit} type="submit" className="animated" value="Register" />
        </div>
        
      </div>
      {/* Content End */}
 
    </>
    
  );
}

export default Register;