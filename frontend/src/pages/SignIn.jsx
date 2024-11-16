import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validation
    if (!email || !password) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Sign-in successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An unexpected error occurred.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-4xl text-center font-bold text-slate-700 mb-6">
          Sign In
        </h1>
        <p className="text-center text-slate-500 mb-8">
          Welcome back! Please enter your details to log in.
        </p>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-slate-500 focus:outline-none"
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-slate-500 focus:outline-none"
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>
          <button
            type="submit"
            className={`bg-slate-700 text-white text-lg font-medium p-4 rounded-lg uppercase hover:bg-slate-600 transition duration-300 ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p className="text-center text-slate-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
