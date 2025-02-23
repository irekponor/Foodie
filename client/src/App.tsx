import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:7000/api");

    console.log(response.data.food);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
