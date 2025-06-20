// src/app/api/oauth/exchange/route.ts
import { nylas, nylasConfig } from "@/libs/nylas";
import { session } from "@/libs/session";
import { ProfileModel } from "@/models/Profile";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("Received callback from Nylas");

  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  if (!code) {
    return NextResponse.json(
      { error: "No authorization code returned from Nylas" },
      { status: 400 }
    );
  }

  // Exchange the code for an access token + grantId
  const tokenResponse = await nylas.auth.exchangeCodeForToken({
    clientId: nylasConfig.clientId,
    clientSecret: nylasConfig.clientSecret,
    code,
    redirectUri: nylasConfig.callbackUri,
  });
  const { grantId, email } = tokenResponse;

  // Persist grantId in MongoDB
  await mongoose.connect(process.env.MONGODB_URI!);
  const existing = await ProfileModel.findOne({ email });
  if (existing) {
    existing.grantId = grantId;
    await existing.save();
  } else {
    await ProfileModel.create({ email, grantId });
  }

  // Store the user’s email in your session (adjust to your session API)
  const res = NextResponse.redirect("/");
  await session().set("email", email);

  return res;
}
