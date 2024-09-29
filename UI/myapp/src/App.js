import { Route, Routes } from 'react-router-dom'; 
 import Register from './RegisterComp/Register';
import Login from './LoginComp/Login'; 
import Update from './CRUDComp/Update';
import DisplayData from './CRUDComp/DisplayData';
import DeleteUser from './CRUDComp/DeleteUser';
import BlockUser from './CRUDComp/BlockUser';

// Import other components like Register and Admin if needed

function App() {
  return (
   
    <> 
        <Register/>
        <Login/>
      
        <Update/>
        <DisplayData/>
        <DeleteUser/>
        <BlockUser/>
    </>
  );
}

export default App;
