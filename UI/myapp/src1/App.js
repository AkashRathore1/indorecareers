import './App.css';
import { Route,Routes } from 'react-router-dom';

import Header from './components/HeaderComponent/Header';
import Nav from './components/NavComponent/Nav';
import SearchBar from './components/NavComponent/SearchBar';
import Content from './components/ContentComponent/Content';
import Footer from './components/FooterComponent/Footer';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Userhome from './components/UserhomeComponent/Userhome';
import Newsletter from './components/NewsletterComponent/Newsletter';
import Manageusers from './components/ManageusersComponent/Manageusers';
import CPUser from './components/CPUser/CPUser';
import EPUser from './components/EPUser/EPUser';
import Adminhome from './components/AdminhomeComponent/Adminhome';
import CPAdmin from './components/CPAdmin/CPAdmin';
import EPAdmin from './components/EPAdmin/EPAdmin';
import AddCategory from './components/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import Service from './components/ServiceComponent/Service';
import Logout from './components/LogoutComponent/Logout';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';
import Job4Art_design from './components/Job4Art_design';
import Job4Business_finance from './components/Job4Business_finance';
import Job4Engineering from './components/Job4Engineering';
import Job4IT from './components/Job4IT';
import Job4Medical from './components/Job4Medical';
import Job4Sales_market from './components/Job4Sales_market';
import Category from './components/CategoryComponent/Category';


function App() { 
  return (
  <>
     <Header />
      <Nav/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Content />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/verifyuser/:email' element={<Verifyuser />}></Route>
        <Route path='/newsletter' element={<Newsletter />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Adminhome />}></Route>
        <Route path='/user' element={<Userhome />}></Route>
        <Route path='/manageusers' element={<Manageusers />}></Route>     
        <Route path='/cpadmin' element={<CPAdmin />}></Route>
        <Route path='/epadmin' element={<EPAdmin />}></Route>
        <Route path='/addcategory' element={<AddCategory />}></Route>
        <Route path='/addsubcategory' element={<AddSubCategory />}></Route>
        <Route path='/cpuser' element={<CPUser />}></Route>
        <Route path='/epuser' element={<EPUser />}></Route>
        <Route path='/logout' element={<Logout />}></Route>


        <Route path='/it' element={<Job4IT />}> </Route>
        <Route path='/engineer' element={<Job4Engineering />}> </Route>
        <Route path='/medical' element={<Job4Medical />}> </Route>
        <Route path='/businessfinance' element={<Job4Business_finance />}> </Route>
        <Route path='/salesmarket' element={<Job4Sales_market />}> </Route>
        <Route path='/artdesign' element={<Job4Art_design />}> </Route>

        
        <Route path='/category' element={<Category />}> </Route>

      </Routes>


      <Footer />



  </>
  );
}

export default App;