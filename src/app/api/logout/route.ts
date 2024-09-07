import { session } from "@/libs/session";
import { redirect } from "next/dist/server/api-utils";

export async function GET(){
    await session().destroy();
    Response
    }