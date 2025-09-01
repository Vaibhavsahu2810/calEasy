import { session } from "@/libs/session";
import { NextRequest } from "next/server";

export async function getSessionEmail(request?: NextRequest): Promise<string | null> {
  // Try next-app-session first
  const email = await session().get('email');
  console.log("getSessionEmail - email from session:", email);
  
  // Also try manual session reading
  let manualEmail = null;
  try {
    const { getManualSession } = await import("@/libs/manualSession");
    
    let req: NextRequest;
    if (request) {
      req = request;
    } else {
      // For server components, create request from headers
      const { NextRequest } = await import("next/server");
      const { headers } = await import("next/headers");
      req = new NextRequest("http://localhost", {
        headers: headers()
      });
    }
    
    manualEmail = await getManualSession(req);
    console.log("getSessionEmail - email from manual session:", manualEmail);
  } catch (error) {
    console.log("getSessionEmail - manual session error:", error);
  }
  
  // Use whichever session method works
  const finalEmail = email || manualEmail;
  console.log("getSessionEmail - final email used:", finalEmail, "source:", email ? "session" : manualEmail ? "manual" : "none");
  
  return finalEmail;
}