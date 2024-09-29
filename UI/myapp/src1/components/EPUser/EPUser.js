import './EPUser.css';
import { useState, useEffect } from 'react';
import { _userapiurl } from '../../ApiUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EPUser() {

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {
    axios.get(_userapiurl + "fetch?email=" + localStorage.getItem("email")).then((response) => {
      setName(response.data[0].name);
      setEmail(response.data[0].email);
      setMobile(response.data[0].mobile);
      setAddress(response.data[0].address);
      setCity(response.data[0].city);
      setGender(response.data[0].gender);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleSubmit = () => {
    let updateDetails = { "condition_obj": { "email": email }, "content_obj": { "name": name, "mobile": mobile, "address": address, "city": city, "gender": gender } };
    axios.patch(_userapiurl + "update", updateDetails).then((response) => {
      navigate("/epadmin")
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      {/* content Start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
              <h1>Edit Profile Here!!!</h1>
              <font color="blue">{output}</font>
              <br />
              <form>
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="mobile">Mobile:</label>
                  <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="address">Address:</label>
                  <textarea value={address} onChange={e => setAddress(e.target.value)} rows="5" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <label for="city">City:</label>
                  <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
                    <option>Select City</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Ujjain</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="gender">Gender:</label>
                  &nbsp;&nbsp;
                  Male <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={e => setGender(e.target.value)} />
                  &nbsp;&nbsp;
                  Female <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={e => setGender(e.target.value)} />
                </div>
                <button onClick={handleSubmit} type="button" class="btn btn-primary">Submit</button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* Content End */}
    </>
  );
}

export default EPUser;