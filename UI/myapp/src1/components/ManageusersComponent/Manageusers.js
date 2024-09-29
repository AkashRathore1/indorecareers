import './Manageusers.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';

function Manageusers() {

  const navigate = useNavigate();
  const [ userDetails , setUserDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_userapiurl+"fetch?role=user").then((response)=>{
      setUserDetails(response.data);
    }).catch((error)=>{
      console.log(error);
    });  
  });

  const manageuserstatus=(_id,s)=>{
    if(s=="block")
    {
      const updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}};
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        alert("User blocked....");
        navigate("/manageusers");
      }).catch((error)=>{
        console.log(error);  
      });  
    } 
    else if(s=="verify")
    {
      const updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}};
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        alert("User verified....");
        navigate("/manageusers");
      }).catch((error)=>{
        console.log(error);  
      });
    }   
    else
    {
      //while working with axios delete request 
      //must contain data with key as 'data'
      const deleteDetails={"data":{"_id":_id}};
      axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
        alert("User removed....");
        navigate("/manageusers");
      }).catch((error)=>{
        console.log(error);  
      });
    }
  }
  
  return (
  <>
      {/* content Start */}
      <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
<h1>View & Manage User Details</h1>
<br/>
<table cellspacing="5" cellpadding="5">
<tr>
<th>UserID</th>
<th>Name</th>  
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>
</tr>  
<tr><td colspan="10"><hr/></td></tr>
{
  userDetails.map((row)=>(
    <>
    <tr>
      <td>{row._id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.mobile}</td>
      <td>{row.address}</td> 
      <td>{row.city}</td>
      <td>{row.gender}</td>
      <td>{row.info}</td>
      <td>
        { row.status==1 && <a style={{"color":"orange"}} onClick={ ()=> manageuserstatus(row._id,"block") } >Block User</a> }
        { row.status==0 && <a style={{"color":"green"}} onClick={ ()=> manageuserstatus(row._id,"verify") } >Verify User</a> }
      </td>
      <td>
        <a style={{"color":"red"}} onClick={ ()=> manageuserstatus(row._id,"delete") } >Delete User</a>
      </td>
    </tr>
    <tr><td colspan="10"><hr/></td></tr>
    </>
  ))
}

</table>
                </div>
            </div>
        </div>
    </div>
    {/* Content End */}
  </>
  );
}

export default Manageusers;
