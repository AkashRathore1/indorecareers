import './Service.css';

function Service() {
  return (
    <>
      {/* service */}
      <div id="service" className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Services </h2>
                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container margin-r-l">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
              <div className="service-box">
                <figure>
                  <a href="assets/images/1.jpg" className="fancybox" rel="ligthbox">
                    <img src="assets/images/1.jpg" className="zoom img-fluid" alt="" />
                  </a>
                  <span className="hoverle">
                    <a href="assets/images/1.jpg" className="fancybox" rel="ligthbox">Food</a>
                  </span>
                </figure>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
              <div className="service-box">
                <figure>
                  <a href="assets/images/2.jpg" className="fancybox" rel="ligthbox">
                    <img src="assets/images/2.jpg" className="zoom img-fluid" alt="" />
                  </a>
                  <span className="hoverle">
                    <a href="assets/images/1.jpg" className="fancybox" rel="ligthbox">Fashion</a>
                  </span>
                </figure>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
              <div className="service-box">
                <figure>
                  <a href="assets/images/3.jpg" className="fancybox" rel="ligthbox">
                    <img src="assets/images/3.jpg" className="zoom img-fluid" alt="" />
                  </a>
                  <span className="hoverle">
                    <a href="assets/images/3.jpg" className="fancybox" rel="ligthbox">Booking</a>
                  </span>
                </figure>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
              <div className="service-box">
                <figure>
                  <a href="assets/images/4.jpg" className="fancybox" rel="ligthbox">
                    <img src="assets/images/4.jpg" className="zoom img-fluid" alt="" />
                  </a>
                  <span className="hoverle">
                    <a href="assets/images/4.jpg" className="fancybox" rel="ligthbox">Marketing</a>
                  </span>
                </figure>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
              <div className="service-box">
                <figure>
                  <a href="assets/images/5.jpg" className="fancybox" rel="ligthbox">
                    <img src="assets/images/5.jpg" className="zoom img-fluid" alt="" />
                  </a>
                  <span className="hoverle">
                    <a href="assets/images/5.jpg" className="fancybox" rel="ligthbox">Design</a>
                  </span>
                </figure>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box">
                <figure>
                  <a href="assets/images/6.jpg" className="fancybox" rel="ligthbox">
                    <img src="assets/images/6.jpg" className="zoom img-fluid" alt="" />
                  </a>
                  <span className="hoverle">
                    <a href="assets/images/6.jpg" className="fancybox" rel="ligthbox">Making Food</a>
                  </span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end service */}
    </>
  );
}

export default Service;
