import { session } from "@/libs/session";
import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    await mongoose.connect(process.env.MONGODB_URI || "")
    const data = await req.json();
    const email = await session().get("email");
    

    
}