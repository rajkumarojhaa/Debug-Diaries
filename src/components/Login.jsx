import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        toast.success("Login Successful");
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-6 sm:p-10 border border-white/20">
        
        {/* Logo Centered */}
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-24 sm:w-28">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-bold text-zinc-700">
          Sign in to your account
        </h2>

        {/* Signup Link */}
        <p className="mt-2 text-center text-sm text-zinc-500">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-blue-400 transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit(login)} className="mt-6">
          <div className="space-y-4">
            {/* Email Input */}
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Enter a valid email",
                },
              })}
            />

            {/* Password Input */}
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />

            {/* Sign In Button */}
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition">
              Sign in
            </Button>
            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-400 hover:underline transition-all"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Login;

