import Introduction from '../react-components/Introduction.js';
import CardCarousel from '../react-components/CardCarousel.js';
import GameOverview from '../react-components/GameOverview.js';
import GameHighlight from '../react-components/GameHighlight.js';
import Packages from '../react-components/Packages.js';
import MerchPlug from '../react-components/MerchPlug.js';
import AroundTheGalaxy from '../react-components/AroundTheGalaxy.js';

import "../css/bootstrap.min.css";
import "../css/animate.min.css";
import "../css/magnific-popup.css";
import "../css/odometer.css";
import "../css/aos.css";
import "../css/meanmenu.css";
import "../css/slick.css";
import "../css/default.css";
import "../css/responsive.css";
import "../css/cardslider.css";
import "../css/style.css";

function Home() {
    return (
      <main>
        <Introduction />
        <CardCarousel />
        <GameOverview />
        <GameHighlight />
        <Packages />
        <MerchPlug />
        <AroundTheGalaxy />
      </main>
    );
}

export default Home;