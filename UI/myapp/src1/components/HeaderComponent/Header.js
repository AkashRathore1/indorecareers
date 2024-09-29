import './Header.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'; 
import Auth from '../AuthComponent/Auth';

function Header() {

const [HeaderContent, setHeaderContent]=useState();
useEffect(()=>{

if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
{
  setHeaderContent(<>


    <div id="nav">

      <Link to="/admin" class="btn btn-default" style={{ color: 'black',fontWeight:'bold' }}>Admin Home</Link>

      <Link to="/manageusers" class="btn btn-default" style={{ color: 'black', fontWeight: 'bold' }}>Manage User</Link>
      <Link to="/epadmin" class="btn btn-default3" style={{ color: 'black', fontWeight: 'bold' }}>Edit Profile</Link>
      <Link to="/cpadmin" class="btn btn-default3" style={{ color: 'black', fontWeight: 'bold' }}>Change Password</Link>
      <Link to="/addcategory" class="btn btn-default3" style={{ color: 'black', fontWeight: 'bold' }}>Add Category</Link>
      <Link to="/addsubcategory" class="btn btn-default3" style={{ color: 'black', fontWeight: 'bold' }}>Add Sub Category</Link>
      <Link to="/logout" class="btn btn-default3" style={{ color: 'black', fontWeight: 'bold' }}>Logout</Link>
    </div>







 </>);

}

  else if(localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") 
    {
    
  setHeaderContent(<> 
    <div style={{backgroundColor:'black'}}>
    <h1 style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '10px', padding: '15px',color:'wheat' }}>Indore Careers</h1>
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <Link style={{ marginRight: '12px',color:'wheat' }} to="/user">Home</Link>
      <Link style={{ marginRight: '12px', color: 'wheat' }} to="/epuser">Edit&nbsp;Profile</Link>
      <Link style={{ marginRight: '12px', color: 'wheat' }} to="/cpuser">Change&nbsp;Password</Link> 
      <Link style={{ marginRight: '12px', color: 'wheat' }} to="/logout">Logout</Link>
    </nav>
    </div>
 </>);

  }
else {
  setHeaderContent(<>
              <h1 style={{fontWeight:'bold',textAlign:'left',marginLeft:'10px',padding:'15px'}}>Indore Careers</h1>
              <nav style={{ display: 'flex',justifyContent:'center' }}>
                <Link style={{marginRight:'15px'}} to="/">Home</Link>
      <Link style={{ marginRight: '15px' }} to="/category">SearchJobs</Link> 
      <Link style={{ marginRight: '15px' }} to="/about">About</Link>
      <Link style={{ marginRight: '15px' }} to="/register">Register</Link>
      <Link style={{ marginRight: '15px' }} to="/login">Login</Link>
              </nav>
  </>);

  }

});
  return (
    <> 
    <Auth/>
      {/*  Header & Navbar Starts */}
      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
        <div className="menu-area">
          <div className="limit-box">
            <nav className="main-menu">
      </nav>
  
        </div>
      </div>
      
    </div >
      {HeaderContent}
      {/* Header & Navbar Ends */}
    </>
  );
}

export default Header;
