function Introduction() {
  return (
    <section className="slider-area">
      <div className="slider-active">
        <div className="single-slider slider-bg slider-style-two">
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-11">
                <div className="slider-content">
                  <h6 data-animation="fadeInUp" data-delay=".4s">
                    Welcome to the
                  </h6>
                  <h2 data-animation="fadeInUp" data-delay=".4s">
                    GAMING GALAXY
                  </h2>
                  <p data-animation="fadeInUp" data-delay=".6s">
                    This is the best place in the entire galaxy for gamers of
                    all kinds. Whether you're a creator, tryhard or a casual,
                    we've got something for you.
                  </p>
                  <a
                    href="/aboutus"
                    className="btn btn-style-two"
                    data-animation="fadeInUp"
                    data-delay=".8s"
                  >
                    LEARN ABOUT US
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slider-img"
            data-animation="slideInRightS"
            data-delay=".6s"
          >
            <img src={require("../img/slider/slider_img01.png")} alt=""></img>
          </div>
          <div
            className="slider-img slider-img2"
            data-animation="slideInLeftS"
            data-delay=".6s"
          >
            <img src={require("../img/slider/slider_img02.png")} alt=""></img>
          </div>
          <div className="slider-circle-shape">
            <img
              src={require("../img/slider/slider_circle.png")}
              alt=""
              className="rotateme"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
