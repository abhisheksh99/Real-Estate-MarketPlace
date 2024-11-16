import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart, signUpSuccess, signUpFailure } from "../store/slices/userSlice";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Validation
    if (!username || !email || !password) {
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

    dispatch(signUpStart());
    try {
      const res = await axios.post("/api/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(signUpSuccess(res.data));
      toast.success("Sign-up successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      navigate("/signin");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred.";
      dispatch(signUpFailure(errorMessage));
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-3xl text-center font-bold text-gray-700 mb-6">
          Sign Up
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Create your NestQuest account today.
        </p>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>
          <button
            type="submit"
            className={`bg-gray-700 text-white text-lg font-medium p-4 rounded-lg uppercase hover:bg-gray-600 transition duration-300 ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
