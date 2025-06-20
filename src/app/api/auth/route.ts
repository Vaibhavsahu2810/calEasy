import { nylas, nylasConfig } from "@/libs/nylas";
import { NextResponse } from "next/server";

export async function GET() {
  const authUrl = nylas.auth.urlForOAuth2({
    clientId: nylasConfig.clientId,
    redirectUri: nylasConfig.callbackUri,
  });
  return NextResponse.redirect(authUrl);
}
