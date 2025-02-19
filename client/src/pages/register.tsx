import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validations
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:7000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center tracking-[5px]">
        SIGN UP
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="pl-20 pr-10 grid md:grid-cols-2 gap-4"></div>
        <div className="pl-20 pr-10">
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold">
              Full Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-500"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold">
              Email ID
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-500"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold">
              Password
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-500"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-color2 text-gray-200 mt-4 w-full p-4 rounded-xl font-semibold text-[18px]"
            type="submit"
          >
            Register
          </button>

          <div className="text-center">
            <p className="mt-4">
              Already registered?
              <a className="text-color1" href="/login">
                Login
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
