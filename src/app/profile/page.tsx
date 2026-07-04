"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successfull");

      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetail = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black px-4">
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 text-center">

            <h1 className="text-4xl font-bold text-white mb-2">
                Profile
            </h1>

            <p className="text-gray-300 mb-6">
                Welcome to your profile dashboard.
            </p>

            <hr className="border-gray-600 mb-6" />

            <div className="mb-8">
                <p className="text-gray-300 mb-2 font-medium">
                    User ID
                </p>

                <div className="bg-green-500 rounded-lg px-4 py-3 inline-block shadow-lg">
                    {data === "nothing" ? (
                        <span className="text-white font-semibold">
                            Nothing
                        </span>
                    ) : (
                        <Link
                            href={`/profile/${data}`}
                            className="text-white font-bold hover:underline break-all"
                        >
                            {data}
                        </Link>
                    )}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <button
                    onClick={getUserDetail}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg"
                >
                    Get User Details
                </button>

                <button
                    onClick={logout}
                    className="flex-1 bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg"
                >
                    Logout
                </button>

            </div>

        </div>
    </div>
);
}
