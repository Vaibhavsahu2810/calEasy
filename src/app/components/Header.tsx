'use server';
import RightNav from "@/app/components/RightNav";
import {session} from "@/libs/session";
import {CalendarDays} from "lucide-react";
import Link from "next/link";

export default async function Header() {
  // Debug incoming cookies in Header
  const { headers } = await import("next/headers");
  const cookieHeader = headers().get('cookie');
  console.log("Header - incoming cookies:", cookieHeader);
  
  // Try both session methods
  const email = await session().get('email');
  console.log("Header - email from session:", email);
  
  // Also try manual session reading
  let manualEmail = null;
  try {
    const { getManualSession } = await import("@/libs/manualSession");
    const { NextRequest } = await import("next/server");
    
    // Create a fake request object to test manual session
    const request = new NextRequest("http://localhost", {
      headers: headers()
    });
    manualEmail = await getManualSession(request);
    console.log("Header - email from manual session:", manualEmail);
  } catch (error) {
    console.log("Header - manual session error:", error);
  }
  
  // Use whichever session method works
  const finalEmail = email || manualEmail;
  console.log("Header - final email used:", finalEmail, "source:", email ? "session" : manualEmail ? "manual" : "none");
  return (
    <header className="flex gap-4 justify-between py-6 text-gray-600">
      <div className="flex items-center gap-10">
        <Link href={'/'} className="text-blue-600 font-bold text-2xl flex gap-1 items-center">
          <CalendarDays size={24}/>
          CalEasy
        </Link>
        <nav className="flex gap-4">
          <Link href={'/features'}>Features</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/pricing'}>Pricing</Link>
        </nav>
      </div>
      <RightNav email={finalEmail} />
    </header>
  );
}