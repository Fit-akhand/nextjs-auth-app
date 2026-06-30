import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/UserModel";
import {NextRequest , NextResponse} from "next/server"
import bcryptjs from "bcryptjs"


connect()

