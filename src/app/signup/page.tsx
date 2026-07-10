"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios"
import toast from "react-hot-toast";



export default function SignupPage(){

    // jase user signup hoga hum usko login page pe beej denge
    const router = useRouter();

    const [user,setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })

    const [buttonDisabled , setButtonDisabled] = React.useState(false);

    useEffect(()=>{
        if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    },[user]);

    const [loading,setLoading] = React.useState(false)

    const onSignup = async() =>{
         if (buttonDisabled) return;
        try{
            setLoading(true);
            const response = await axios.post("/api/users/signup",user);
            console.log("Signup successfull",response.data);
            router.push("/login");
        }catch(error: any){
            console.log("Signup failed",error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
        router.push("/login");
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4">
    <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white mb-2">
            {loading ? "Processing" : "Signup"}
        </h1>
        <hr className="border-gray-600 mb-6" />

        <label htmlFor="username" className="text-white font-medium mb-2 self-start">
            Username
        </label>
        <input
            className="w-full p-3 mb-4 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter username"
        />

        <label htmlFor="email" className="text-white font-medium mb-2 self-start">
            Email
        </label>
        <input
            className="w-full p-3 mb-4 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter email"
        />

        <label htmlFor="password" className="text-white font-medium mb-2 self-start">
            Password
        </label>
        <input
            className="w-full p-3 mb-6 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter password"
        />

        <button
            onClick={onSignup}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-blue-500/50 disabled:bg-gray-500"
        >
            {buttonDisabled ? "No SignUp" : "Signup"}
        </button>

        <p className="text-center text-gray-300 mt-6">
            Already have an account?
            <Link
                href="/login"
                className="text-blue-400 hover:text-blue-300 font-semibold ml-2"
            >
                Login
            </Link>
        </p>

    </div>
</div>
    )
}