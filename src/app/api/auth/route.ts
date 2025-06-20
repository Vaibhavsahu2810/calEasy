// src/app/api/auth/route.ts
import { nylas, nylasConfig } from "@/libs/nylas";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authUrl = nylas.auth.urlForOAuth2({
    clientId: nylasConfig.clientId,
    redirectUri: nylasConfig.callbackUri,
    // optional: loginHint, scopes, state, etc.
  });
  return NextResponse.redirect(authUrl);
}
