import "@fortawesome/fontawesome-free/css/all.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Honor from "./Components/Honor";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Products />
      <Honor />
      <Footer />
    </>
  );
};

export default App;
