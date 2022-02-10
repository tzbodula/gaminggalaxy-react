/*
  Renders the Card Carosuel component for the bottom of the homescreen
*/

function CardCarosuel() {
  return (
    <section className="released-games-area black-bg pt-70 pb-70">
      <div className="container pb-60 mb-5">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title title-style-three text-center mb-20">
              <h2 className="whitetext">
                We're Made for <span>ALL</span> Gaming Creators, Both{" "}
                <span>BIG</span> and
                <span>SMALL</span>
              </h2>
              <p className="whitetext">
                No longer will you have to search far and wide for a quality
                designer or editor whenever you need something for your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="drag-container">
        <div id="spin-container">
          <img src={require("../img/cards/Card1Twitch.jpg")} alt="" />
          <img src={require("../img/cards/Card2Youtube.jpg")} alt="" />
          <img src={require("../img/cards/Card3Twitter.jpg")} alt="" />
          <img src={require("../img/cards/Card4Instagram.jpg")} alt="" />
          <img src={require("../img/cards/Card5Tiktok.jpg")} alt="" />
          <img src={require("../img/cards/Card6Facebook.jpg")} alt="" />

          <img src={require("../img/cards/Card7Reddit.jpg")} alt="" />
          <img src={require("../img/cards/Card8Discord.jpg")} alt="" />

          <img src={require("../img/cards/Card9Galaxy.jpg")} alt="" />
        </div>
        <div id="ground">
          <img
            id="logo"
            src={require("../img/logo/WhiteGGLogo.png")}
            alt=""
          ></img>
        </div>
      </div>
    </section>
  );
}

export default CardCarosuel;
