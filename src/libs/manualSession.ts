import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.SECRET || 'fallback-secret');

export async function setManualSession(response: NextResponse, email: string) {
  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret);

  const cookieValue = `caleasy_manual_session=${token}; Path=/; HttpOnly; ${process.env.NODE_ENV === 'production' ? 'Secure; ' : ''}SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`;
  
  response.headers.set('Set-Cookie', cookieValue);
  console.log("Manual session: Set cookie header:", cookieValue);
  
  return response;
}

export async function getManualSession(request: NextRequest): Promise<string | null> {
  try {
    const cookieHeader = request.headers.get('cookie') || '';
    console.log("Manual session: Reading cookies:", cookieHeader);
    
    const sessionCookie = cookieHeader
      .split(';')
      .find(cookie => cookie.trim().startsWith('caleasy_manual_session='));
    
    if (!sessionCookie) {
      console.log("Manual session: No session cookie found");
      return null;
    }

    const token = sessionCookie.split('=')[1];
    console.log("Manual session: Found token:", token ? 'exists' : 'missing');
    
    const { payload } = await jwtVerify(token, secret);
    console.log("Manual session: Decoded email:", payload.email);
    
    return payload.email as string;
  } catch (error) {
    console.log("Manual session: Error reading session:", error);
    return null;
  }
}