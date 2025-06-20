// src/libs/nylas.ts
import Nylas from "nylas";

const {
  NYLAS_CLIENT_ID,
  SECRET,
  NYLAS_API_KEY,
  NYLAS_API_URI,
  NEXT_PUBLIC_URL,
} = process.env;

// 1) Validate your env
if (!NYLAS_CLIENT_ID || !SECRET) {
  throw new Error(
    "Missing Nylas OAuth credentials. Make sure NYLAS_CLIENT_ID and SECRET are set."
  );
}
if (!NYLAS_API_KEY || !NYLAS_API_URI) {
  throw new Error(
    "Missing Nylas API credentials. Make sure NYLAS_API_KEY and NYLAS_API_URI are set."
  );
}
if (!NEXT_PUBLIC_URL) {
  throw new Error("Missing NEXT_PUBLIC_URL in your environment");
}

// 2) Centralize your config
export const nylasConfig = {
  clientId: NYLAS_CLIENT_ID,
  clientSecret: SECRET,
  callbackUri: `${NEXT_PUBLIC_URL}/api/oauth/exchange`,
  apiKey: NYLAS_API_KEY,
  apiUri: NYLAS_API_URI.trim().replace(/^["']|["']$/g, ""), // strip stray quotes/spaces
};

// 3) Create *one* Nylas instance for both API and OAuth calls
export const nylas = new Nylas({
  apiKey: nylasConfig.apiKey,
  apiUri: nylasConfig.apiUri,
});
