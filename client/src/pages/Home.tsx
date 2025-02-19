import MobNav from "../components/MobNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Feature from "../components/Feature";
import BreakFast from "../components/BreakFast";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import News from "../components/News";
import Footer from "../components/Footer";
import { CartContextProvider } from "../context/cartContext";
import Cart from "../components/Cart";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/Login"); //redirerct user to login if not authenticated
    }
  }, [navigate]);

  return (
    <div>
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
    </div>
  );
};

export default Home;
