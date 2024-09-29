import './Userhome.css';

function Userhome() {
  return (
    <>
      {/* Userhome  */}
      <div id="about" className="about top_layer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2> Userhome </h2>
                <span>Welcome to Indore Careers, your trusted partner in finding the best job in Inodre. Our platform connects talented professionals with top employers across various industries with personalized job matches & expert advice. </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="img-box">
                <figure><img src="assets/images/about.png" alt="img" /></figure>
                <a href="#">Go to top</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end abouts */}
    </>
  );
}

export default Userhome;
