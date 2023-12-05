export default function Slider() {
    return (
        <section className="slider_section">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <div className="number">
                        <h5>01</h5>
                      </div>
                      <h1>
                        Drool <br />
                        <span>Pet And Animal</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Read More
                        </a>
                        <a href="" className="btn-2">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <div className="number">
                        <h5>02</h5>
                      </div>
                      <h1>
                        Drool <br />
                        <span>Pet And Animal</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Read More
                        </a>
                        <a href="" className="btn-2">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <div className="number">
                        <h5>03</h5>
                      </div>
                      <h1>
                        Drool <br />
                        <span>Pet And Animal</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Read More
                        </a>
                        <a href="" className="btn-2">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <div className="number">
                        <h5>04</h5>
                      </div>
                      <h1>
                        Drool <br />
                        <span>Pet And Animal</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Read More
                        </a>
                        <a href="" className="btn-2">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>        
    );
}