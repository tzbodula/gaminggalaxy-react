/*
Renders the Gameoverview component for usage on the homepage. 
 */

function GameOverview() {
  return (
    <section className="just-gamers-area just-gamers-bg pt-135 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div className="section-title title-style-three white-title mb-70">
              <h2>
                MADE FOR <span>ALL</span> GAMERS
              </h2>
              <p>
                Video games have served as an emotional crutch for us whenever
                we've gone through hard times.
                <br />
                No matter what our background is we all have one shared love of
                video games and it is Gaming Galaxy's mission to provide a
                community where this love is expressed for everyone including..
              </p>
            </div>
            <div className="just-gamers-list">
              <ul>
                <li>
                  <div className="just-gamers-list-icon">
                    <img
                      src={require("../img/icon/gamer_list_icon01.png")}
                      alt=""
                    ></img>
                  </div>
                  <div className="just-gamers-list-content fix">
                    <h5>Esports Players</h5>
                    <p>
                      There's nothing better than playing a game that you love
                      and making money doing it
                    </p>
                  </div>
                </li>
                <li>
                  <div className="just-gamers-list-icon">
                    <img
                      src={require("../img/icon/gamer_list_icon02.png")}
                      alt=""
                    ></img>
                  </div>
                  <div className="just-gamers-list-content fix">
                    <h5>Competitors</h5>
                    <p>
                      Competitive gaming is something that we all love, assuming
                      you're winning...
                    </p>
                  </div>
                </li>
                <li>
                  <div className="just-gamers-list-icon">
                    <img
                      src={require("../img/icon/gamer_list_icon03.png")}
                      alt=""
                    ></img>
                  </div>
                  <div className="just-gamers-list-content fix">
                    <h5>Casuals</h5>
                    <p>
                      Yea sex is great, but have you ever played a video game
                      that brought back nostalgia?{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 d-none d-lg-block">
            <div className="just-gamers-img">
              <img
                src={require("../img/images/just_gamers_img.png")}
                alt=""
                className="just-gamers-character"
              ></img>
              <div className="just-gamers-circle-shape">
                <img
                  src={require("../img/images/gamers_circle_line.png")}
                  alt=""
                ></img>
                <img
                  src={require("../img/images/gamers_circle_shape.png")}
                  alt=""
                  className="rotateme"
                ></img>
              </div>
              <img
                src={require("../img/images/just_gamers_chart.png")}
                alt=""
                className="gamers-chart-shape"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameOverview;
