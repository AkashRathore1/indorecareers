import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function LoginHeader() {
  return (
    <>
      <footer style={{ "backgroundColor": "#2e3740", "height": "16%", "padding": "15px" }}>
    

          <div className="col-12 mb-3" >

            <nav className="main-menu col-12 mb-3" >
              <Link style={{ "color": "white" }} to="/"><b>Home</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link style={{ "color": "white" }} to="/about"><b>About Us</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link style={{ "color": "white" }} to="/contact"><b>Contact Us</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link style={{ "color": "white" }} to="/newsletter"><b>Newsletter</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link style={{ "color": "white" }} to="/service"><b>Services</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link style={{ "color": "white" }} to="/privacy-policy"><b>Privacy & Policy</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link style={{ "color": "white" }} to="/faq"><b>FAQ</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             

            </nav>





            {/*Divison For Social Media Link & Icon */}

            <div className="social-media-links" style={{
              "position": "absolute", /* Ensures the container is positioned absolutely */
              "top": "0", /* Aligns the container to the bottom */
              "right": "0",
              "color": "white"
            }}>
              <br />
              <Link style={{ "color": "white" }} to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />&nbsp;&nbsp;
              </Link>
              <Link style={{ "color": "white" }} to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />&nbsp;&nbsp;
              </Link>
              <Link style={{ "color": "white" }} to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />&nbsp;&nbsp;
              </Link>
              <Link style={{ "color": "white" }} to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> &nbsp;&nbsp;&nbsp;
              </Link>
            </div>

            {/*Divison For Social Media Link & Icon */}

          </div>


          <br />
        </footer>  <br/>
    </>
  );
}

export default LoginHeader;


 