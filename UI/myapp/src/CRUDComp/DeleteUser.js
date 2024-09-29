import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [userId, setUserId] = useState(''); 
  const [output, setOutput] = useState();

  const handleDelete = async () => {
    try {
      const res = await axios.delete('http://localhost:3001/user/delete', { data: { _id: userId } });
        setOutput("User Deleted successfully");
    } catch (error) {
        setOutput("Invalid user ");
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <font>{output}</font>
      <h2>Delete User</h2>
      <input type="text"  placeholder="User Unique ID"
      value={userId} onChange={e => setUserId(e.target.value)} /> &nbsp;&nbsp;
       <button onClick={handleDelete} style={{backgroundColor:'aqua'}} > Delete User </button>
     
    
    </div>
  );
};

export default DeleteUser;


/*

How to Test

1. Open Postman.
2. Set the request type to DELETE.
3. Enter the URL: http://localhost:3001/user/delete.
4. Go to the Body tab, select raw, and set the format to JSON and Enter user's unique Id as User Id.
5. This how we Update any field in Postman
{
  "_id": 5
}
*/
