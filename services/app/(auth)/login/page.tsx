"use client";

import LoginForm from "@/components/Login-form/Login_Form";
import { CustomImage } from "@/components/ui/Images/Image";

export default function LoginPage() {
  return (
    <div className="bg-[#F5EEDC] min-h-screen ">
    <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl shadow-lg">
      {/* Form Side */}
      <LoginForm />
      
      {/* Image Side */}
      <div className="relative hidden bg-amber-400  md:block">
        <CustomImage
          src="/images/login-background.jpg"
          fallbackSrc="/images/placeholder.jpg"
          alt="Login background"
          className="h-full w-full"
          width={600}
          height={800}
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
          <div className="max-w-md p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
            <p className="text-lg">Sign in to your account to access your dashboard and continue your journey.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}