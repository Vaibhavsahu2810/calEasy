import { setManualSession } from "@/libs/manualSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    console.log("Manual API: Setting session email:", email);
    
    const response = NextResponse.json({ success: true, email });
    await setManualSession(response, email);
    
    console.log("Manual API: Response headers:", Object.fromEntries(response.headers.entries()));
    
    return response;
  } catch (error) {
    console.error("Manual API: Error setting session:", error);
    return NextResponse.json({ error: "Failed to set session" }, { status: 500 });
  }
}