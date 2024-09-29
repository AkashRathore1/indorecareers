import './Content.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function Content() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
  };

  const subheaderStyle = {
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const startButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green',
    color: 'white',
  };



  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    margin: '20px 0',
  };

  const circleImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const jobItemStyle = {
    textAlign: 'left',
    cursor: 'pointer',
    color: 'black'
  };


  const sectionTitleStyle = {
    color: 'black',
    textAlign: 'center',
    fontSize: '24px',
  };

  const listContainerStyle = {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    maxWidth: '1500px',
    marginBottom: '100px',
    gap: '30px',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: '20px',
    minWidth: '150px',
  };

  const ulStyleMobile = {
    ...ulStyle,
    marginRight: '70px',
  };

  const reviews = [
    {
      name: 'Tony Stark',
      image: 'assets/images/client.png',
      rating: 2.5,
      review: 'legit & genuine jobs. No scams, verified jobs & I admire Indore careers for its simple interface',
    },
    {
      name: 'Steve  ',
      image: 'assets/images/client1.png',
      rating: 4,
      review: 'Jobs like Remote, Onsite, Part-time, Full-time So Here we can find Jobs Of different Modes',
    },
    {
      name: 'Thor  ',
      image: 'assets/images/client2.png',
      rating: 3,
      review: 'Indore Careers takes care of privacy and their friendly team is always there to help us ',
    },
    {
      name: 'Bruce ',
      image: 'assets/images/client3.png',
      rating: 3,
      review: 'I can filter the job by my preference without putting extra efforts on finding jobs.',
    },
    {
      name: 'Wanda  ',
      image: 'assets/images/client4.png',
      rating: 5,
      review: 'It is a leading platform for equitable jobs matching & hiring. I love its optimized services',
    },
    {
      name: 'Loki  ',
      image: 'assets/images/client5.png',
      rating: 2,
      review: 'Indore Careers helps us in both remote & onsite, full-time work or part-time jobs.',
    },

    {
      name: 'Dr. Strange ',
      image: 'assets/images/client6.png',
      rating: 4,
      review: 'Indore Careers Offers geneuine Jobs and its straight forward application process is very helpful.',
    },

    {
      name: 'Kirmada ',
      image: 'assets/images/client7.png',
      rating: 3,
      review: 'I highly recommend Indore Careers because of its advance job search which helps to find relevant Jobs',
    },

  ];

  return (
    <div style={containerStyle}>

      {/* Content 1 Start */}

      <div >
       
              <div >
                <h3 style={{ color: 'black' , padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}> Your Future, Our Mission </h3>
          <h4 style={{ marginLeft: '20px', justifyContent: 'center', textAlign:'center',padding:"5px" }}> Welcome to Indore Careers, your trusted partner in finding the best job in Indore with personalized job search 
           </h4>
          
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="img-box">
                <figure><img src="assets/images/78.jpg" alt="img" /></figure>
      
              
            </div>
          </div>
        </div>
      </div>
      {/* end Content 1 end */}

      {/* Content 2 Start */}

      <div > 
              
                <h3 style={{ color: 'black' , padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}> Need Help ? </h3>
        <h4 style={{ marginLeft: '20px', textAlign: 'center',justifyContent:'center' }}>Have questions or need assistance? Contact us today, our support team will gladly assist you 

        </h4>
              </div>
        
    

              <div className="row">
                <div className="col-md-12">
                 <div className="img-box">
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
              <Link style={{ marginRight: '12px', color: 'black', backgroundColor:'#b4eb34',width:'90px',height:'30px',padding:'4px',borderRadius:"4px" }} to="/contact">Contact Us</Link>
              <Link style={{ marginRight: '12px', color: 'blue', border: '1px solid blue', width: '100px', height: '30px', padding: '4px', borderRadius: "4px" }} to="/category">Explore Jobs</Link>
            </nav>
                  <figure><img src="assets/images/45.jpg" alt="img" /></figure>
         
                
              </div>
              
             
        </div>
      </div>
      {/* end Content 2 end */}


      {/* Popular Job Titles Section Start */}

      <div class="container-xxl py-5" style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1px', fontFamily: 'Arial, sans-serif', backgroundColor: 'white' }}>
        <br /> 
        <h3 style={{ color: 'black', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>Popular Job Titles</h3>
        <br /> 
        <div style={{ color: 'white', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1500px', marginBottom: '10px', gap: '30px' }}>

          <ul style={{ listStyleType: 'none', margin: '25px', minWidth: '150px', color: 'white' }}>
            <li style={jobItemStyle}>Web Developer</li >
            <li style={jobItemStyle}>Data Analyst</li>
            <li style={jobItemStyle}>Cloud Solutions Architect</li>
            <li style={jobItemStyle}>DevOps Engineer</li >
            <li style={jobItemStyle}>Cybersecurity Analyst</li>
            <li style={jobItemStyle}>Technical Support Specialist</li>
            <li style={jobItemStyle}>Mathmatics Teacher</li>

          </ul>

          <ul style={{ listStyleType: 'none', margin: '25px', minWidth: '150px', }}>
            <li style={jobItemStyle}> Mobile App Developer</li>
            <li style={jobItemStyle}>  AI /ML Engineer</li>
            <li style={jobItemStyle}> Electrical Engineer</li>
            <li style={jobItemStyle}> Automative Engineer</li>
            <li style={jobItemStyle}> Graphic Designer</li>
            <li style={jobItemStyle}> Quality Assurance Engineer</li>
            <li style={jobItemStyle}>Science Teacher</li>




          </ul>
          <ul style={{ listStyleType: 'none', margin: '25px', minWidth: '150px' }}>
            <li style={jobItemStyle}>Digital Marketing Specialist</li>
            <li style={jobItemStyle}> SEO/SEM Specialist</li>

            <li style={jobItemStyle}>Virtual Assistant</li>
            <li style={jobItemStyle}>Help Desk Analyst</li>


            <li style={jobItemStyle}>Sales Manager</li>
            <li style={jobItemStyle}>Social Media Manager</li>
            <li style={jobItemStyle}>HR Manager</li>


          </ul>
          <ul style={{ listStyleType: 'none', margin: '25px', minWidth: '150px', }}>
            <li style={jobItemStyle}>Accountant</li>

            <li style={jobItemStyle}> Project Manager</li>
            <li style={jobItemStyle}>Email Marketing Specialist</li>
            <li style={jobItemStyle}> Product Marketing Manager</li>
            <li style={jobItemStyle}>Administrative Assistant</li>


            <li style={jobItemStyle}>Nurse</li>
            <li style={jobItemStyle}>Pharmasist</li>

          </ul>



        </div>
      </div>

      {/* Popular Job Titles Section Start */}

      {/* Client Says Section Start*/}

      <h3 style={{ color: 'black', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>What Our User Says </h3>
      <br />   <br /> 
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', }}>
        {reviews.map((review, index) => (
          <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', }}
            key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', }}>
                <img style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', }}
                  src={review.image} alt={review.name} />
                <span>{review.name}</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', gap: '5px', padding: '0', margin: '0', }}>
                {[...Array(5)].map((_, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={i < review.rating ? solidStar : regularStar} />
                  </li>
                ))}
              </ul>
            </div>
            <article style={{ marginTop: '10px', }}>
              <p style={{ fontSize: '1em', marginBottom: '10px', textAlign: 'left' }}>{review.review}</p>
            </article>
          </div>
        ))}

        <br /><br /><br />
      </div>
      {/* Client Says Section End */}


    </div>



  );
};

export default Content;