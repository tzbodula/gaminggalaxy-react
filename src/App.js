import Header from "./react-components/Header.js";
import Footer from "./react-components/Footer.js";
import Home from "./screens/home.js";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
