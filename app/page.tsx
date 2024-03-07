"use client";

import GoogleLogin from "@/components/GoogleLogin/GoogleLogin";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <GoogleLogin />
    </main>
  );
}
