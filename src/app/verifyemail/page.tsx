"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyemail", { token });

            setVerified(true);

            toast.success("Email Verified Successfully");
        } catch (error: any) {
            setError(true);

            console.log(error.response?.data);

            toast.error(error.response?.data?.error || error.message);
        }
    };

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];

        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-center w-full max-w-lg">

                <h1 className="text-4xl font-bold text-white mb-6">
                    Verify Email
                </h1>

                <div className="bg-orange-500 rounded-lg p-3 text-black font-semibold break-all">
                    {token || "No Token"}
                </div>

                {verified && (
                    <div className="mt-8">
                        <h2 className="text-2xl text-green-400 mb-4">
                            ✅ Email Verified Successfully
                        </h2>

                        <Link
                            href="/login"
                            className="text-blue-400 hover:underline font-semibold"
                        >
                            Go to Login
                        </Link>
                    </div>
                )}

                {error && (
                    <div className="mt-8 text-red-500 font-semibold">
                        Email Verification Failed
                    </div>
                )}

            </div>
        </div>
    );
}