import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                toast.success("Account Created Successfully")
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
            toast.error("Error creating account")
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-6 sm:p-10 border border-white/20">
        
        {/* Logo Centered */}
        <div className="flex justify-center">
          <span className="inline-block w-24 sm:w-28">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-bold text-zinc-700">
          Sign up to create an account
        </h2>

        {/* Login Link */}
        <p className="mt-2 text-center text-sm text-zinc-500">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-blue-400 transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-4">
            {/* Full Name Input */}
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", { required: "Full Name is required" })}
            />

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

            {/* Signup Button */}
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition">
              Create Account
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Signup