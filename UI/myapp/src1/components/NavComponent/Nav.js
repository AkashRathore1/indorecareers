import './Nav.css';
import { useState , useEffect } from 'react';
function Banner() {

  const [BannerContent , setBannerContent] = useState();
  useEffect(()=>{
   if(localStorage.getItem("token")!=undefined){

   setBannerContent(<></>)
   }
   else
   {
       setBannerContent(<>
   
               
       </>)
   }


  });
  
  return ( 
    <>

{BannerContent}

    </>
  );
}

export default Banner;
