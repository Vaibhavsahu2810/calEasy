import DashboardNav from '@/components/DashboardNav'
import ProfileForm from '@/components/ProfileForm';
import { ProfileModel } from '@/models/Profile';
import mongoose from 'mongoose';
import { session } from '@/libs/session';
import React from 'react'

export default async function DashboardPage() {
   const email = await session().get('email');
  mongoose.connect( process.env.MONGODB_URI || "")


  const profileDoc = await ProfileModel.findOne({email});
  return (
    <div>
      <ProfileForm existingUsername={profileDoc?.username || ''} />
    </div>
  );
}
