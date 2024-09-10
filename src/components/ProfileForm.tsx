"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

function ProfileForm({existingUsername=""}:{existingUsername?:string}) {
    const [username,setUsername] = useState(existingUsername);
    const [isSaved, setIsSaved] = useState(false);
    const [isError, setIsError] = useState(false);
    const router = useRouter();

    async function handleSubmit(ev:FormEvent) {
        ev.preventDefault();
        const response = await axios.put('/api/profile', {username});
        if (response.status === 200) {
            setIsSaved(true);
            if (!existingUsername && username) {
              router.push("/dashboard/event-types");
              router.refresh();
            }
        }
        else {
            setIsError(true);
        }
        
    }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto mt-8">
        {isSaved && <p>Settings saved!</p>}
        {isError && <p>Error</p>}
        <label>
          <span>Username</span>
          <input
            type="text"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <div className="text-center mt-4">
            <button type="submit" className="btn-blue !px-8">
              Save
            </button>
          </div>
        </label>
      </form>
      
    </>
  );
}

export default ProfileForm
