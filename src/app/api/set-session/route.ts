import { session } from "@/libs/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    console.log("API: Setting session email:", email);
    await session().set("email", email);
    
    const savedEmail = await session().get("email");
    console.log("API: Verified session email:", savedEmail);
    
    return NextResponse.json({ success: true, email: savedEmail });
  } catch (error) {
    console.error("Error setting session:", error);
    return NextResponse.json({ error: "Failed to set session" }, { status: 500 });
  }
}