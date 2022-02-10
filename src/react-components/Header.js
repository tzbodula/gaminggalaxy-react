/*

Renders the Header Component for usage across the entire site

*/

import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { Store } from "../Store";

function Header() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <header>
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid container-full-padding">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="header-top-offer">
                <p>Exclusive Black Friday ! Offer</p>
                <span className="coming-time" data-countdown="2020/6/20"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header-top-right">
                <div className="header-social">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/gaminggalaxyig/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/gaminggalaxy21">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="htttps://bit.ly/ggalaxydiscord">
                        <i className="fab fa-discord"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UC7478Dq0DDGulBJ-IZ5UVXQ">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitch.tv/gaminggalaxytwitch">
                        <i className="fab fa-twitch"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/gaming-galaxy-b47911227/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-top-action">
                  <ul>
                    <li>
                      <div className="header-top-mail">
                        <p>
                          <span>|</span>
                          <i className="far fa-envelope"></i>
                          <a href="mailto:gaminggalaxybusiness@gmail.com">
                            gaminggalaxybusiness@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="header-user-login">
                        <a href="login">
                          <i className="fas fa-user"></i>Login
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="main-header">
        <div className="container-fluid container-full-padding">
          <div className="row">
            <div className="col-12">
              <div className="main-menu">
                <nav>
                  <div className="logo">
                    <a href="/">
                      <img
                        src={require("../img/logo/logo.png")}
                        alt="Logo"
                      ></img>
                    </a>
                  </div>
                  <div
                    id="mobile-menu"
                    className="navbar-wrap d-none d-lg-flex"
                  >
                    <ul>
                      <li className="show">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/aboutus">About Us</a>
                        <ul className="submenu">
                          <li>
                            <a href="/termsofservice">Terms Of Service</a>
                          </li>
                          <li>
                            <a href="/privacypolicy">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="/contactus">Contact Us</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Creators</a>
                        <ul className="submenu">
                          <li>
                            <a href="/livestreaming">Livestreaming</a>
                          </li>
                          <li>
                            <a href="/videoproduction">Video Production</a>
                          </li>
                          <li>
                            <a href="/socialmedia">Social Media</a>
                          </li>
                          <li>
                            <a href="/freestuff">Free Stuff</a>
                          </li>
                          <li>
                            <a href="/tutorials">Tutorials</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Gamers</a>
                        <ul className="submenu">
                          <li>
                            <a href="/madden">Madden NFL 22</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Packages</a>
                        <ul className="submenu">
                          <li>
                            <a href="/bronze">Bronze</a>
                          </li>
                          <li>
                            <a href="/silver">Silver</a>
                          </li>
                          <li>
                            <a href="/gold">Gold</a>
                          </li>
                          <li>
                            <a href="/galactic">Galactic</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Merch</a>
                        <ul className="submenu">
                          <li>
                            <a href="/customizedmerch">Customizable Merch</a>
                          </li>
                          <li>
                            <a href="/galaxymerch">Gaming Galaxy Merch</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Around The Galaxy</a>
                        <ul className="submenu">
                          <li>
                            <a href="/podcast">Podcast</a>
                          </li>
                          <li>
                            <a href="/followus">Follow Us</a>
                          </li>
                          <li>
                            <a href="/newsletter">Newsletter</a>
                          </li>
                          <li>
                            <a href="https://bit.ly/ggalaxydiscord">Discord</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action">
                    <ul>
                      <li className="header-shop-cart">
                        <a href="/cart" className="nav-link">
                          <i className="fas fa-shopping-basket"></i>
                          {cart.cartItems.length > 0 && (
                            <Badge pill bg="danger">
                              {cart.cartItems.reduce(
                                (a, c) => a + c.quantity,
                                0
                              )}
                            </Badge>
                          )}
                        </a>
                        <ul className="minicart">
                          <li className="d-flex align-items-start">
                            <div className="cart-img">
                              <a href="/">
                                <img
                                  src="public/img/product/cart_p01.jpg"
                                  alt=""
                                ></img>
                              </a>
                            </div>
                            <div className="cart-content">
                              <h4>
                                <a href="/">Xbox One Controller</a>
                              </h4>
                              <div className="cart-price">
                                <span className="new">$229.9</span>
                                <span>
                                  <del>$229.9</del>
                                </span>
                              </div>
                            </div>
                            <div className="del-icon">
                              <a href="/">
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="total-price">
                              <span className="f-left">Total:</span>
                              <span className="f-right">$239.9</span>
                            </div>
                          </li>
                          <li>
                            <div className="checkout-link">
                              <a href="cart.html">Shopping Cart</a>
                              <a className="red-color" href="checkout.html">
                                Checkout
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="header-search">
                        <a
                          href="/"
                          data-toggle="modal"
                          data-target="#search-modal"
                        >
                          <i className="fas fa-search"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu"></div>
            </div>
            <div
              className="modal fade"
              id="search-modal"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..."></input>
                    <button>
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
