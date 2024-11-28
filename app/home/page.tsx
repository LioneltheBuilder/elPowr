"use client";

import { useAuth } from "@/src/presentation/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-[#9AE662]">
          Learn to Code Game
        </h1>
        <div className="space-y-4">
          <p className="text-2xl text-white/80">
            Coming Soon
          </p>
          <p className="text-lg text-white/60">
            An interactive learning experience that will revolutionize how you learn to code.
          </p>
        </div>
        <div className="text-sm text-white/40 pt-8">
          Logged in as: {user?.email}
        </div>
      </div>
    </div>
  );
} 