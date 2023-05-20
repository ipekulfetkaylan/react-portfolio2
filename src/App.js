
import Intro from "./components/Intro/Intro";
import Contact from "./components/contact/Contact";
import Footer from "./components/contact/Footer";
import Feature from "./components/feature/Feature";
import FeatureShape from "./components/feature/FeatureShape";
import Navbar from "./components/navbar/Navbar";
import Price from "./components/price/Price";
import PriceShape from "./components/price/PriceShape";
import Services from "./components/services/Services";
import ServicesShape from "./components/services/ServicesShape";
import Shape from "./components/shape/Shape";
import "./style.css"

function App() {
  return (
    <>
    <div className="AppContainer">
      <Navbar/>
      <Intro/>
      <Shape/>
    </div>
    <div className="AppContainer">
      <Feature/>
      <FeatureShape/>
    </div>
    <div className="AppContainer">
      <Services/>
      <ServicesShape/>
    </div>
    <div className="AppContainer">
      <Price/>
      <PriceShape/>
    </div>
    <div className="AppContainer">
      <Contact/>
      <Footer/>
    </div>
    </>
    
  );
}

export default App;
