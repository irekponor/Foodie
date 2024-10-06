import MobNav from "./components/MobNav";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Feature from "./components/Feature";
import BreakFast from "./components/BreakFast";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import News from "./components/News";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/CartContext";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Login from "./pages/login";
import axios from "axios";

function App() {
  const [showCart, setShowCart] = useState(false);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:7000/api");

    console.log(response.data.food);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Login />
      <CartContextProvider>
        <Navbar setShowCart={setShowCart} />
        <MobNav setShowCart={setShowCart} />
        <Hero />
        <Category />
        <Feature />
        <BreakFast />
        <Banner />
        <Blog />
        <News />
        <Footer />
        {showCart && <Cart setShowCart={setShowCart} />}
      </CartContextProvider>
    </>
  );
}

export default App;
