'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const email = searchParams.get('email');
    if (email) {
      // Try both approaches
      Promise.all([
        // Original next-app-session approach
        fetch('/api/set-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        }),
        // Manual JWT approach
        fetch('/api/set-manual-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        })
      ]).then(() => {
        console.log('Both session methods attempted');
        // Redirect to home after session is set
        router.push('/');
      }).catch(err => {
        console.error('Failed to set session:', err);
        router.push('/');
      });
    } else {
      router.push('/');
    }
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Setting up your account...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
}