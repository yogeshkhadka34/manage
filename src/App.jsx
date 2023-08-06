import "./App.css";
import Cta from "./components/Cta";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
