import { session } from "@/libs/session";
import { EventTypeModel } from "@/models/EventType";
import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    await mongoose.connect(process.env.MONGODB_URI || "")
    const data = await req.json();
    const email = await session().get("email");
    if(email){
        const eventTypeDoc = await EventTypeModel.create(email,...data);
        return new Response(JSON.stringify(eventTypeDoc))
    }
    return new Response(JSON.stringify({error:"You must be logged in"}), { status:200})    
}