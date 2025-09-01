import DashboardNav from "@/app/components/DashboardNav";
import {getSessionEmail} from "@/libs/getSessionEmail";
import {ProfileModel} from "@/models/Profile";
import mongoose from "mongoose";
import {ReactNode} from "react";

export default async function DashboardLayout({children}:{children:ReactNode}) {
  const finalEmail = await getSessionEmail();
  
  if (!finalEmail) {
    return 'not logged in';
  }
  await mongoose.connect(process.env.MONGODB_URI as string);
  const profileDoc = await ProfileModel.findOne({email: finalEmail});
  return (
    <div>
      <DashboardNav username={profileDoc?.username || ''} />
      {children}
    </div>
  );
}