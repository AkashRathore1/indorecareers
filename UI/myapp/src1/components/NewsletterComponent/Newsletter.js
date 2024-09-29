import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { _userapiurl } from '../../ApiUrl';
function Newsletter() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = { email: email };
    axios.post(_userapiurl, userDetails)
      .then((response) => {
        // Handle successful response here
        setOutput('Successfully subscribed!');
        setEmail('');
      })
      .catch((error) => {
        // Handle error response here
        setOutput('Failed to subscribe. Please try again.');
      });
  };

  return (
    <>
 
              <div id="about" className="about top_layer">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="titlepage">
                        <h2>Newsletter</h2>
                      </div>
                    </div>
                  </div>
              <p style={{ color: 'blue' }}>{output}</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                 <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">Subscribe</button>
              </form>

          <br /><br /> <br />
    
                  <div className="row">
                    <div className="col-md-12">
                      <div className="img-box">
                        <figure><img src="assets/images/newsletter.png" alt="img" /></figure>
               
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       
     
    </>
  );
}

export default Newsletter;
