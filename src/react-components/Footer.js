/*

Renders the Footer component for usage across the entire site

 */

function Footer() {
  return (
    <footer>
      <div className="footer-top footer-bg s-footer-bg">
        <div className="newsletter-area s-newsletter-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="newsletter-wrap">
                  <div className="section-title newsletter-title">
                    <h2>
                      Our <span>Newsletter</span>
                    </h2>
                  </div>
                  <div className="newsletter-form">
                    <form action="#">
                      <div className="newsletter-form-grp">
                        <i className="far fa-envelope"></i>
                        <input
                          type="email"
                          placeholder="Enter your email..."
                        ></input>
                      </div>
                      <button>
                        SUBSCRIBE <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget mb-50">
                <div className="footer-logo mb-35">
                  <a href="index.html">
                    <img src={require("../img/logo/logo.png")} alt=""></img>
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    "Gaming Galaxy" is a registered trademark of Gaming Galaxy
                    LLC. This website was made with love by Thomas Zbodula.
                  </p>
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <i className="fas fa-envelope-open"></i>
                        <span>Email </span>gaminggalaxybusiness@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Products</h5>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="#">Pre-Made Items // 0</a>
                    </li>
                    <li>
                      <a href="#">DIY Designer Assets // 0</a>
                    </li>
                    <li>
                      <a href="#">Game Assets // 0</a>
                    </li>
                    <li>
                      <a href="#">Packages // 0</a>
                    </li>
                    <li>
                      <a href="#">Merchandise // 0</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Need Help?</h5>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">Affilates</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Follow us</h5>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-discord"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                  <ul className="pt-10">
                    <li>
                      <a href="#">
                        <i className="fab fa-twitch"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-tiktok"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Newsletter Sign Up</h5>
                </div>
                <div className="footer-newsletter">
                  <form action="#">
                    <input type="text" placeholder="Enter your email"></input>
                    <button>
                      <i className="fas fa-rocket"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-fire">
          <img src={require("../img/images/footer_fire.png")} alt=""></img>
        </div>
        <div className="footer-fire footer-fire-right">
          <img src={require("../img/images/footer_fire.png")} alt=""></img>
        </div>
      </div>
      <div className="copyright-wrap s-copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright © 2021 <a href="#">Gaming Galaxy</a> All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-none d-md-block">
              <div className="payment-method-img text-right">
                <img
                  src={require("../img/images/card_img.png")}
                  alt="img"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
