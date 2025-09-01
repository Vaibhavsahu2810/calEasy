import ProfileForm from "@/app/components/ProfileForm";
import {getSessionEmail} from "@/libs/getSessionEmail";
import {ProfileModel} from "@/models/Profile";
import mongoose from "mongoose";

export default async function DashboardPage() {
  const finalEmail = await getSessionEmail();
  
  if (!finalEmail) {
    // Redirect to login if no session
    const { redirect } = await import("next/navigation");
    redirect('/api/auth');
  }
  
  await mongoose.connect(process.env.MONGODB_URI as string);
  const profileDoc = await ProfileModel.findOne({email: finalEmail});
  return (
    <div>
      <ProfileForm existingUsername={profileDoc?.username || ''} />
    </div>
  );
}