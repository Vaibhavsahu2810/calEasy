import { session } from "@/libs/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    console.log("API: Setting session email:", email);
    
    // Debug incoming cookies
    const cookies = req.headers.get('cookie');
    console.log("API: Incoming cookies:", cookies);
    
    await session().set("email", email);
    
    const savedEmail = await session().get("email");
    console.log("API: Verified session email:", savedEmail);
    
    // Create response and check if Set-Cookie header is being set
    const response = NextResponse.json({ success: true, email: savedEmail });
    
    // Debug outgoing Set-Cookie header
    const setCookieHeader = response.headers.get('set-cookie');
    console.log("API: Set-Cookie header:", setCookieHeader);
    
    return response;
  } catch (error) {
    console.error("Error setting session:", error);
    return NextResponse.json({ error: "Failed to set session" }, { status: 500 });
  }
}