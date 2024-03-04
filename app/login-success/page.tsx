'use client';
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from 'react';

export default function loginSuccess() {
  function LoginSuccessContent() {
    const searchParams = useSearchParams();
    const jwt = searchParams.get('jwt');
    const isFirstAccess = searchParams.get('isFirstAccess');
  
    useEffect(() => {
      const handleLoginSuccess = () => {
        jwt && localStorage.setItem('token', jwt);
        isFirstAccess && redirect('/first-access');
      };
  
      handleLoginSuccess();
    }, [jwt, isFirstAccess]);
  
    return (
      <div>
        <h1>Login success!</h1>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginSuccessContent />
    </Suspense>
  );
}