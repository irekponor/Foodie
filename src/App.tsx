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
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <CartContextProvider>
        <Navbar />
        <MobNav />
        <Hero />
        <Category />
        <Feature />
        <BreakFast />
        <Banner />
        <Blog />
        <News />
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
