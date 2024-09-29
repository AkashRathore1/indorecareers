import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
 
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/user/" + "fetch?email=" + localStorage.getItem("email")).then((response) => {
      setName(response.data[0].name);
      setEmail(response.data[0].email);
      setMobile(response.data[0].mobile);
      setGender(response.data[0].gender);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleSubmit = () => {
    let updateDetails = { "condition_obj": { "email": email }, "content_obj": { "name": name, "mobile": mobile, "gender": gender } };
    axios.patch("http://localhost:3001/user/" + "update", updateDetails).then((response) => {
      console.log("Data Updated");
      //navigate("/epadmin")
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      {/* content Start */}
       
            <div style={{textAlign:'center'}}>                                     
                <br/>
               <h2 style={{ textAlign: 'center' }}>Update Details</h2>      

                <h4 style={{textAlign:'center'}}>Name:</h4>
                <input for="name"  type="text"   value={name} onChange={e => setName(e.target.value)} />                
               
                <h4 style={{ textAlign: 'center' }}>Email:</h4>
                <input type="email"  value={email} onChange={e => setEmail(e.target.value)} />          
               
                <h4 style={{ textAlign: 'center' }}>Mobile:</h4>
                <input type="text"  value={mobile} onChange={e => setMobile(e.target.value)} />              
               
                 <h4 style={{textAlign:'center'}}>Gender:</h4>                
                  Male <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={e => setGender(e.target.value)} />
                  &nbsp;&nbsp;
                  Female <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={e => setGender(e.target.value)} />
                 <br/> <br/>
                 <button onClick={handleSubmit} type="button" style={{width:'170px',backgroundColor:'aqua'}}>Submit</button>
                 <font color="blue">{output}</font>
            
              <br />
            </div>
   
      {/* Content End */}
    </>
  );
}

export default Update;



/*

How to Test Update API in PostMan

1. Open Postman.
2. Set the request type to PATCH.
3. Set the URL to http://localhost:3001/user/update.
4. Go to the Body tab, select raw,
5. Choose JSON from the dropdown.
6. and Enter user's unique Id in condition_obj and Put Field which we want to Update in content_obj.
7. This how we Update any field in Postman
{
  "condition_obj": {
    "_id": "4"
  },
  "content_obj": {
    "email": "john.doe@example.com"
  }
}

*/