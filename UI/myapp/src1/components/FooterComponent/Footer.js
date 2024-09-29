import './Footer.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
function Footer() {

  const [FooterContent, setFooterContent] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") != undefined) {
      setFooterContent(<></>);
    }
    else {
      setFooterContent(<>   
        
        </>);
    }
  });

  return (
    <>
      <footer style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', padding: '10px' }}>
        <div>

          <p>
            <Link style={{ textDecoration: "none", }} href="#">Home</Link> | &nbsp; 
                <Link style={{ textDecoration: "none" }} href="#">Privacy</Link> | &nbsp;
            <Link style={{ textDecoration: "none" }} href="#">Terms</Link>  | &nbsp;
                  <Link style={{ textDecoration: "none" }} href="#">© Indore Career</Link>
          </p>

          <p>Contact us: X Street, Indore, Madhya Pradesh | Email: info@website.com | +91 95893911X</p>

            <p>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </p>      

        </div>
      </footer>

    </>
  );
}

export default Footer;
