import './Adminhome.css';

function Adminhome() {
  return (
    <>
      {/* Adminhome */}
      <div id="about" className="about top_layer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2> Admin home</h2>
                <span>It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                  desktop publishing packages and </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="img-box">
                <figure><img src="assets/images/about.png" alt="img" /></figure>
                <a href="#">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end abouts */}
    </>
  );
}

export default Adminhome;
