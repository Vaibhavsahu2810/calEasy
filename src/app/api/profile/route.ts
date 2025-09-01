import {getSessionEmail} from "@/libs/getSessionEmail";
import {ProfileModel} from "@/models/Profile";
import mongoose from "mongoose";
import {NextRequest} from "next/server";

export async function PUT(req: NextRequest) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const body = await req.json();
  const {username} = body;
  const email = await getSessionEmail(req);
  if (email && username) {
    const profileDoc = await ProfileModel.findOne({email});
    if (profileDoc) {
      profileDoc.username = username;
      await profileDoc.save();
    } else {
      await ProfileModel.create({email, username});
    }
    return Response.json(true);
  } else {
    return Response.json(false);
  }
}