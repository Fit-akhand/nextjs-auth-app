"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios"



export default function SignupPage(){

    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

    const onLogin = async() =>{

    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black px-4">
    <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white mb-2">
            Login
        </h1>

        <p className="text-gray-300 text-center mb-6">
            Welcome back! Please login to continue.
        </p>

        <hr className="border-gray-600 mb-6" />

        <label
            htmlFor="email"
            className="block text-white font-medium mb-2"
        >
            Email
        </label>

        <input
            className="w-full p-3 mb-5 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
        />

        <label
            htmlFor="password"
            className="block text-white font-medium mb-2"
        >
            Password
        </label>

        <input
            className="w-full p-3 mb-6 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
        />

        <button
            onClick={onLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
        >
            Login Here
        </button>

        <p className="text-center text-gray-300 mt-6">
            Do not have an account?
            <Link
                href="/signup"
                className="text-blue-400 hover:text-blue-300 font-semibold ml-2"
            >
                Signup
            </Link>
        </p>

    </div>
</div>
    )
}