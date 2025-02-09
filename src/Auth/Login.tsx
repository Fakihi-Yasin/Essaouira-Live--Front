"use client";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handelLogin = async(e) =>{
    e.preventDefault();

    if (!email || !password) {
        toast.error("Please enter your email and password.");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/auth/login",
          {
            email,
            password,
          }
        ); 
  
        const data = response.data;
        if (response.status === 201) {
          localStorage.setItem('token',data.access_token);
          console.log(response.data);
  
            toast.success("Login successful!");
              setTimeout(() => {
                navigate("/"); 
              }, 1000);
          }
         else {
          toast.error("Login failed.");
        }
      } catch (error) {
        toast.error("Login failed.");
        console.error("Login error:", error);
      }

      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-blue-900">
          Sign in to Essaouira Live
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handelLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-t-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-b-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Sign in
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:text-blue-500">
            Sign up here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
