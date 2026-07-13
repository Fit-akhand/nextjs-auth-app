import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        console.log("==================================");
        console.log("Received Token:", token);

        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Token is required",
                },
                {
                    status: 400,
                }
            );
        }

        const user = await User.findOne({
            verifyToken: token,
        });

        console.log("Found User:", user);

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid Token",
                },
                {
                    status: 400,
                }
            );
        }

        if (new Date(user.verifyTokenExpiry) < new Date()) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Token Expired",
                },
                {
                    status: 400,
                }
            );
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        console.log("User Verified Successfully");
        console.log("==================================");

        return NextResponse.json({
            success: true,
            message: "Email Verified Successfully",
        });

    } catch (error: any) {
        console.log("Verification Error:", error);

        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}