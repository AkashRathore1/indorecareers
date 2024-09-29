 
import { Link } from 'react-router-dom';
function Category() {
 
  return (
    <>
      {/* Category Start */}


      <div class="container-xxl py-5" style={{ backgroundColor: 'white' }}>
        <div class="container px-lg-5">
          <div class="wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="justify-content-center" style={{  color: 'black' }}>
              <span></span>Explore Jobs by Categories<span></span>
            </h3>
            <br />  <br />  <br />  <br />
          </div>


          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <Link class="service-item d-flex flex-column text-center rounded" to="/it" style={{ textDecoration: 'none' }}>
                <div class="service-icon flex-shrink-0">
                  <img src="assets/images/IT.png" alt="" />
                </div>
                <br />
                <h5 class="mb-3" style={{ color: 'black' }}>IT</h5>
                <br />  <br />
              </Link>

            </div>


            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <Link class="service-item d-flex flex-column text-center rounded" to="/engineer" style={{ textDecoration: 'none' }}>
                <div class="service-icon flex-shrink-0">
                  <img src="assets/images/engineering.png" alt="" />
                </div>
                <br />
                <h5 class="mb-3" style={{ color: 'black' }}>Engineering</h5>
              </Link>
              <br />  <br />
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <Link class="service-item d-flex flex-column text-center rounded" to="/medical" style={{ textDecoration: 'none' }}>
                <div class="service-icon flex-shrink-0">
                  <img src="assets/images/medical.png" alt="" />
                </div>
                <br />
                <h5 class="mb-3" style={{ color: 'black' }}>Medical</h5>
              </Link>
              <br />  <br />
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <Link class="service-item d-flex flex-column text-center rounded" to="/businessfinance" style={{ textDecoration: 'none' }}>
                <div class="service-icon flex-shrink-0">
                  <img src="assets/images/business_finance.png" alt="" />
                </div>
                <br />
                <h5 class="mb-3" style={{ color: 'black' }}>Business & Finance</h5>

              </Link>
              <br />  <br />
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <Link class="service-item d-flex flex-column text-center rounded" to="/salesmarket" style={{ textDecoration: 'none' }}>
                <div class="service-icon flex-shrink-0" style={{ color: 'black' }}>
                  <img src="assets/images/sales_market.png" alt="" />
                </div>
                <br />
                <h5 class="mb-3" style={{ color: 'black' }}>Sales & Marketing</h5>

              </Link>
              <br />  <br />
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <Link class="service-item d-flex flex-column text-center rounded" to="/artdesign" style={{ textDecoration: 'none' }}>
                <div class="service-icon flex-shrink-0" style={{ color: 'black' }}>
                  <img src="assets/images/art.png" alt="" />
                </div>
                <br />
                <h5 class="mb-3" style={{ color: 'black', textDecoration: 'none' }}>Art & Design</h5>

              </Link>
              <br />  <br />
            </div>
          </div>
        </div>
      </div>


      {/* Category End */}

    </>
  );
}

export default Category;