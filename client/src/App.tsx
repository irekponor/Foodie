import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
