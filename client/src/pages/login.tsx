import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect on successful login
        navigate("/"); // Redirect to home.tsx
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Login failed."); // Show error message
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center tracking-[5px]">
        SIGN IN
      </h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="pl-20 pr-10 grid md:grid-cols-2 gap-4"></div>
        {error && <p className="text-red-500">{error}</p>}
        {/* Show error message */}
        <div className="pl-20 pr-10">
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold">
              Email ID
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold">
              Password
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-color2 text-gray-200 mt-4 w-full p-4 rounded-xl font-semibold text-[18px]"
            type="submit"
          >
            Login
          </button>
          <div className="text-center">
            <p className="mt-4">
              Don't have an account yet?
              <a className="text-color1" href="/register">
                Register
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
